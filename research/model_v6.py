#!/usr/bin/env python3
"""Magnum Life V6 economic expected-return gate.

V6 does not search for a new predictive pattern. It converts a pre-draw
36-number marginal probability vector into a coherent fixed-size 8-of-36
set distribution and prices the official Magnum Life prize table.

Deployment requires positive EV after conservative adjustments. If EV<=1,
the model is blocked regardless of ranking accuracy.
"""
from __future__ import annotations
import argparse, json, math
from pathlib import Path
import numpy as np

N,K=36,8
Q=K/N

def elementary(w,k):
    e=np.zeros(k+1); e[0]=1.0
    for x in w:
        for j in range(k,0,-1):
            e[j]+=x*e[j-1]
    return e

def marginals(w,k=K):
    z=elementary(w,k)[k]
    out=np.empty(len(w))
    for i in range(len(w)):
        out[i]=w[i]*elementary(np.delete(w,i),k-1)[k-1]/z
    return out

def fit_weights(target,k=K):
    t=np.asarray(target,float)
    w=t/(1-t)
    w/=np.exp(np.mean(np.log(w)))
    for _ in range(1000):
        cur=marginals(w,k)
        if np.max(np.abs(cur-t))<1e-11: break
        w*=np.sqrt(t/np.maximum(cur,1e-15))
        w/=np.exp(np.mean(np.log(w)))
    return w

def overlap_dist(w,ticket,k=K):
    ticket=set(ticket)
    wt=np.array([w[i] for i in range(len(w)) if i in ticket])
    wo=np.array([w[i] for i in range(len(w)) if i not in ticket])
    et=elementary(wt,k); eo=elementary(wo,k); z=elementary(w,k)[k]
    p=np.zeros(k+1)
    for j in range(k+1):
        if j<=len(wt) and k-j<=len(wo):
            p[j]=et[j]*eo[k-j]/z
    return p

def C(n,r):
    if r<0 or r>n:return 0
    return math.comb(n,r)

def payout(k,b,grand=7_300_000,second=100_000):
    if k==8:return grand
    if k==7 and b>=1:return second*b
    if k==7:return 6000
    if k==6 and b>=1:return 600*b
    if k==6:return 100
    if k==5 and b>=1:return 30*b
    if k==5:return 10
    if k==4 and b>=1:return 5*b
    return 0

def expected_value(pk,grand=7_300_000,second=100_000):
    ev=0.0
    for k,pmain in enumerate(pk):
        for b in range(3):
            if b>8-k or 2-b>20+k: continue
            pb=C(8-k,b)*C(20+k,2-b)/C(28,2)
            ev+=pmain*pb*payout(k,b,grand,second)
    return ev

def normalize_sum8(p):
    p=np.clip(np.asarray(p,float),1e-8,1-1e-8)
    z=np.log(p/(1-p));lo,hi=-30.,30.
    for _ in range(80):
        m=(lo+hi)/2
        s=np.sum(1/(1+np.exp(-(z+m))))
        if s>8:hi=m
        else:lo=m
    m=(lo+hi)/2
    return 1/(1+np.exp(-(z+m)))

def evaluate(p,grand=7_300_000,second=100_000):
    p=normalize_sum8(p)
    ticket=np.argsort(-p)[:8]
    w=fit_weights(p)
    pk=overlap_dist(w,ticket)
    ev=expected_value(pk,grand,second)
    return {
        "ticket":[int(i+1) for i in ticket],
        "expected_hits":float(sum(i*pk[i] for i in range(9))),
        "exact8_probability":float(pk[8]),
        "exact8_odds":float(1/pk[8]),
        "ev":float(ev)
    }

def solve_break_even(base,pv=False):
    grand,second=(4_853_648,99_393) if pv else (7_300_000,100_000)
    lo,hi=0.,30.
    for _ in range(60):
        m=(lo+hi)/2
        p=Q+m*(base-Q)
        ev=evaluate(p,grand,second)["ev"]
        if ev<1:lo=m
        else:hi=m
    out=evaluate(Q+hi*(base-Q),grand,second)
    out["signal_multiplier"]=hi
    return out

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--probabilities-json",required=True,
                    help="JSON file containing 36 probabilities, either list or {number: probability}")
    ap.add_argument("--out",default="research/v6_metrics_local.json")
    args=ap.parse_args()
    obj=json.loads(Path(args.probabilities_json).read_text())
    if isinstance(obj,dict):
        p=np.array([obj[str(i)] if str(i) in obj else obj[f"{i:02d}"] for i in range(1,37)],float)
    else:p=np.array(obj,float)
    if len(p)!=36:raise ValueError("Need 36 marginal probabilities")
    nominal=evaluate(p)
    pv=evaluate(p,4_853_648,99_393)
    result={
        "version":"V6",
        "nominal":nominal,
        "pv45":pv,
        "break_even_nominal":solve_break_even(p,False),
        "break_even_pv45":solve_break_even(p,True),
        "status":"PASS" if nominal["ev"]>1 and pv["ev"]>1 else "FAIL",
        "deployment":"POSITIVE_EV_CANDIDATE" if nominal["ev"]>1 and pv["ev"]>1 else "NO_BET_POSITIVE_EV_NOT_ESTABLISHED"
    }
    Path(args.out).write_text(json.dumps(result,indent=2))
    print(json.dumps(result,indent=2))

if __name__=="__main__":
    main()
