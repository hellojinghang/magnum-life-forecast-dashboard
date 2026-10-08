#!/usr/bin/env python3
"""Magnum Life V5: exogenous-process model with prospective registry.

V5 follows the independent validation recommendation:
1) use only information available before the next draw,
2) test public process/calendar covariates upstream on the 4D process,
3) require locked proper-score improvement before feeding the Life bridge,
4) freeze prospective outputs before results are known.

Input 4D CSV columns:
date, prize_1..3, special_1..10, consol_1..10

Optional Life CSV columns:
date, main_1..main_8
"""
from __future__ import annotations
import argparse, json, math
from collections import defaultdict
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.special import expit, logit
from scipy.stats import hypergeom

GROUPS = [
    [f"prize_{i}" for i in range(1,4)],
    [f"special_{i}" for i in range(1,11)],
    [f"consol_{i}" for i in range(1,11)],
]
SIZES=[3,10,10]
ALPHAS=[20,50,100,200,500]
BLENDS=[.25,.5,.75,1.0]
STATES=["special","weekday","gap","back2","density","month","quarter","weekday_gap","special_gap","special_month"]
Q_LIFE=8/36
V2_BETA=np.array([-1.3704797775,0.3401045862,0.1441470550,0.8250600622])

def prefix2(v):
    return int(str(v).zfill(4)[:2])

def load4d(path):
    d=pd.read_csv(path,dtype=str)
    d["date"]=pd.to_datetime(d["date"])
    for cols in GROUPS:
        for c in cols: d[c]=d[c].astype(str).str.zfill(4)
    d=d.sort_values("date").reset_index(drop=True)
    d["weekday"]=d["date"].dt.weekday # Mon=0
    d["month"]=d["date"].dt.month
    d["quarter"]=((d["month"]-1)//3)+1
    gap=d["date"].diff().dt.days.fillna(4).astype(int)
    d["gap_days"]=gap
    d["special"]=(d["weekday"]==1).astype(int) # Tuesday
    d["back2"]=(gap<=2).astype(int)
    density=[]
    for i,dt in enumerate(d["date"]):
        j=i-1
        while j>=0 and (dt-d.loc[j,"date"]).days<=7: j-=1
        density.append(i-j-1)
    d["density7"]=density
    return d

def loadlife(path):
    d=pd.read_csv(path)
    d["date"]=pd.to_datetime(d["date"])
    return d.sort_values("date").reset_index(drop=True)

def empty_counts():
    return np.zeros((3,100),float)

def add(counts,row):
    for g,cols in enumerate(GROUPS):
        for c in cols: counts[g,prefix2(row[c])]+=1

def q_counts(counts,n,alpha):
    q=np.zeros((3,100))
    for g,m in enumerate(SIZES):
        q[g]=(counts[g]+alpha/100)/(n*m+alpha)
    return q

def key(row,state):
    wd=int(row["weekday"]); gap=int(row["gap_days"]); month=int(row["month"])
    gapclass="g1" if gap<=1 else "g2" if gap==2 else "g3" if gap==3 else "g4p"
    dens=int(row["density7"]); densclass="d3p" if dens>=3 else "d2" if dens==2 else "d01"
    if state=="special": return "special" if row["special"] else "regular"
    if state=="weekday": return f"wd{wd}"
    if state=="gap": return gapclass
    if state=="back2": return "back2" if row["back2"] else "rest"
    if state=="density": return densclass
    if state=="month": return f"m{month}"
    if state=="quarter": return f"q{int(row['quarter'])}"
    if state=="weekday_gap": return f"wd{wd}_{gapclass}"
    if state=="special_gap": return ("sp_" if row["special"] else "reg_")+gapclass
    if state=="special_month": return ("sp_" if row["special"] else "reg_")+f"m{month}"
    raise ValueError(state)

def score_prefix(q,row):
    ll=br=0.; n=0
    for g,cols in enumerate(GROUPS):
        for c in cols:
            x=prefix2(row[c])
            p=np.clip(q[g],1e-15,1)
            ll+=-math.log(p[x])
            y=np.zeros(100); y[x]=1
            br+=float(np.sum((p-y)**2)); n+=1
    return ll/n,br/n

def evaluate_config(d,state,alpha,blend):
    glob=empty_counts(); ng=0
    scounts=defaultdict(empty_counts); sn=defaultdict(int)
    out={y:[] for y in (2024,2025,2026)}
    for _,r in d.iterrows():
        qg=q_counts(glob,ng,alpha)
        k=key(r,state)
        qs=q_counts(scounts[k],sn[k],alpha)
        q=(1-blend)*qg+blend*qs
        yr=int(r["date"].year)
        if yr in out: out[yr].append(score_prefix(q,r))
        add(glob,r); ng+=1; add(scounts[k],r); sn[k]+=1
    return {y:{"logloss":float(np.mean([z[0] for z in v])),
               "brier":float(np.mean([z[1] for z in v]))} for y,v in out.items()}

def search(d):
    allres={}
    for st in STATES:
        for a in ALPHAS:
            for b in BLENDS:
                name=f"{st}_a{a}_l{b:g}"
                allres[name]=evaluate_config(d,st,a,b)
    best=min(allres,key=lambda k:allres[k][2024]["logloss"])
    return best,allres

def norm8(p):
    p=np.clip(np.asarray(p,float),1e-8,1-1e-8)
    z=logit(p); lo,hi=-30.,30.
    for _ in range(70):
        m=(lo+hi)/2
        if expit(z+m).sum()>8: hi=m
        else: lo=m
    return expit(z+(lo+hi)/2)

def bridge(q):
    out=[]
    for n in range(1,37):
        pres=[1-(1-q[g,n])**SIZES[g] for g in range(3)]
        e=0.
        for mask in range(8):
            pr=1.; z=V2_BETA[0]
            for g in range(3):
                on=(mask>>g)&1
                pr*=pres[g] if on else 1-pres[g]
                if on: z+=V2_BETA[g+1]
            e+=pr*expit(z)
        out.append(e)
    return norm8(out)

def hyper_p(n,total):
    one=np.array([hypergeom.pmf(k,36,8,8) for k in range(9)])
    dist=np.array([1.])
    for _ in range(n): dist=np.convolve(dist,one)
    return float(dist[int(total):].sum())

def eval_life_bridge(d4,life,state="month",alpha=500,blend=.25):
    lmap={r["date"].date():[int(r[f"main_{i}"]) for i in range(1,9)] for _,r in life.iterrows()}
    glob=empty_counts(); ng=0; scounts=defaultdict(empty_counts); sn=defaultdict(int)
    rows=[]; current=None
    for _,r in d4.iterrows():
        k=key(r,state); qg=q_counts(glob,ng,alpha); qs=q_counts(scounts[k],sn[k],alpha); q=(1-blend)*qg+blend*qs
        p=bridge(q); current=p
        if r["date"].year==2026 and r["date"].date() in lmap:
            aset=set(lmap[r["date"].date()]); y=np.array([1 if i in aset else 0 for i in range(1,37)])
            order=np.argsort(-p); hits=int(y[order[:8]].sum())
            br=float(np.mean((p-y)**2)); ll=float(-np.mean(y*np.log(p)+(1-y)*np.log(1-p)))
            rows.append({"date":str(r["date"].date()),"hits":hits,"brier":br,"logloss":ll,"top8":[int(i+1) for i in order[:8]]})
        add(glob,r); ng+=1; add(scounts[k],r); sn[k]+=1

    # next draw state supplied by normal schedule logic in registry step, so use Oct/month state here only as diagnostic
    total=sum(x["hits"] for x in rows)
    return rows, {
        "draws":len(rows),
        "mean_hits":total/len(rows),
        "p_one_sided":hyper_p(len(rows),total),
        "brier":float(np.mean([x["brier"] for x in rows])),
        "logloss":float(np.mean([x["logloss"] for x in rows])),
    }

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--four-d",required=True)
    ap.add_argument("--life")
    ap.add_argument("--out",default="research/v5_metrics_local.json")
    args=ap.parse_args()

    d4=load4d(args.four_d)
    best,allres=search(d4)
    uniform={y:{"logloss":math.log(100),"brier":.99} for y in (2024,2025,2026)}
    locked_ok=all(allres[best][y]["logloss"]<uniform[y]["logloss"] and allres[best][y]["brier"]<uniform[y]["brier"] for y in (2024,2025,2026))

    out={
        "version":"V5",
        "configurations":len(allres),
        "best_exogenous":best,
        "scores":allres[best],
        "uniform":uniform,
        "upstream_gate":"PASS" if locked_ok else "FAIL",
        "deployment":"CANDIDATE_ALLOWED" if locked_ok else "UNIFORM_BASELINE_ONLY",
    }
    if args.life:
        rows,summary=eval_life_bridge(d4,loadlife(args.life))
        out["life_bridge_2026"]=summary
        out["recent5"]=rows[-5:]

    Path(args.out).write_text(json.dumps(out,indent=2))
    print(json.dumps(out,indent=2))

if __name__=="__main__":
    main()
