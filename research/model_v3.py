#!/usr/bin/env python3
"""Magnum Life V3 adaptive pre-draw research model.

Input CSVs need: date, main_1 ... main_8.
V3 combines 10/20/30/50/60/100/all-history frequency experts plus a
uniform 8/36 expert. Weights use cumulative Brier loss. When the raw
ensemble's trailing-30 Brier is worse than uniform, confidence is halved.

This is research code, not a claim of predictive advantage.
"""
import argparse, json, math
from pathlib import Path
import numpy as np, pandas as pd
from scipy.special import expit, logit
from scipy.stats import hypergeom

Q=8/36
UB=Q*(1-Q)
ULL=-(Q*math.log(Q)+(1-Q)*math.log(1-Q))
COLS=[f"main_{i}" for i in range(1,9)]
EXPERTS=[10,20,30,50,60,100,"all","uniform"]
ETA,SHRINK,GUARD_WINDOW,GUARD_LOW=5.0,.30,30,.50

def load(path):
    d=pd.read_csv(path); d["date"]=pd.to_datetime(d["date"])
    return d.sort_values("date").reset_index(drop=True)

def ymat(d):
    y=np.zeros((len(d),36),int)
    for i,row in enumerate(d[COLS].to_numpy()):
        y[i,np.asarray(row,int)-1]=1
    return y

def norm8(p):
    p=np.clip(np.asarray(p,float),1e-10,1-1e-10); z=logit(p); lo,hi=-30.,30.
    for _ in range(70):
        m=(lo+hi)/2
        if expit(z+m).sum()>8: hi=m
        else: lo=m
    return expit(z+(lo+hi)/2)

def expert(hist,e):
    if e=="uniform" or len(hist)==0: return np.repeat(Q,36)
    f=hist.mean(0) if e=="all" else hist[-min(len(hist),int(e)):].mean(0)
    return norm8(Q+SHRINK*(f-Q))

def weights(losses):
    z=np.array([-ETA*losses[e] for e in EXPERTS]); z-=z.max()
    w=np.exp(z); w/=w.sum()
    return dict(zip(EXPERTS,w))

def raw(hist,w):
    return norm8(sum(w[e]*expert(hist,e) for e in EXPERTS))

def exact_p(n,total):
    one=np.array([hypergeom.pmf(k,36,8,8) for k in range(9)])
    d=np.array([1.])
    for _ in range(n): d=np.convolve(d,one)
    return float(d[total:].sum())

def walk(d,mask,warmup=10):
    y=ymat(d); losses={e:0. for e in EXPERTS}; recent=[]; rows=[]; P=[]; Y=[]
    for t in range(len(d)):
        w=weights(losses); r=raw(y[:t],w)
        guard=.5 if len(recent)<GUARD_WINDOW else (1. if np.mean(recent[-GUARD_WINDOW:])<UB else GUARD_LOW)
        p=norm8(Q+guard*(r-Q))
        if t>=warmup and bool(mask[t]):
            top=np.argsort(-p)[:8]; h=int(y[t,top].sum())
            rows.append({"date":d.iloc[t].date.date().isoformat(),"hits":h,"top8":[int(i+1) for i in top],"guard":guard})
            P.append(p); Y.append(y[t])
        recent.append(float(np.mean((r-y[t])**2)))
        for e in EXPERTS:
            pe=expert(y[:t],e); losses[e]+=float(np.mean((pe-y[t])**2))
    P=np.vstack(P); Y=np.vstack(Y); total=sum(x["hits"] for x in rows)
    return rows,{"n_draws":len(rows),"mean_hits":total/len(rows),"hit_rate":total/(8*len(rows)),
                 "top8_p":exact_p(len(rows),total),"brier":float(np.mean((P-Y)**2)),
                 "logloss":float(-np.mean(Y*np.log(P)+(1-Y)*np.log(1-P)))}

def forecast(d):
    y=ymat(d); losses={e:0. for e in EXPERTS}; recent=[]
    for t in range(len(y)):
        w=weights(losses); r=raw(y[:t],w); recent.append(float(np.mean((r-y[t])**2)))
        for e in EXPERTS:
            pe=expert(y[:t],e); losses[e]+=float(np.mean((pe-y[t])**2))
    w=weights(losses); r=raw(y,w); recent_brier=float(np.mean(recent[-30:]))
    guard=1. if recent_brier<UB else .5; p=norm8(Q+guard*(r-Q)); order=np.argsort(-p)
    return {"weights":{str(k):float(v) for k,v in w.items()},"guard":guard,
            "recent_raw_brier_30":recent_brier,
            "top12":[{"number":int(i+1),"score":float(p[i])} for i in order[:12]]}

def main():
    a=argparse.ArgumentParser()
    a.add_argument("--life-1819",required=True); a.add_argument("--life-2026",required=True)
    a.add_argument("--out",default="v3_metrics.json"); z=a.parse_args()
    d19=load(z.life_1819); d26=load(z.life_2026)
    m19=(d19.date.dt.year==2019).to_numpy()
    m26=np.zeros(len(d26),bool); m26[60:]=True
    r19,h19=walk(d19,m19,30); r26,h26=walk(d26,m26,10)
    out={"version":"V3","holdout_2019":h19,"holdout_2026":h26,"current":forecast(d26),
         "fair":{"mean_hits":64/36,"brier":UB,"logloss":ULL},
         "status":"NO_VERIFIED_EDGE","recent_history":r26[-5:]}
    Path(z.out).write_text(json.dumps(out,indent=2))
    print(json.dumps(out,indent=2))

if __name__=="__main__": main()
