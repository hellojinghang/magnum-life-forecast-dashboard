#!/usr/bin/env python3
"""Magnum Life V4: process-informed, hard-gated 4D→Life research model.

Design objective
----------------
V4 follows the independent validation recommendation: do NOT add more
Life-history complexity. Search for genuinely pre-draw information in the
underlying 4D process, validate it year-by-year, and only then allow it to
feed the already-observed V2 4D→Life structural relationship.

Inputs
------
--four-d CSV columns:
  date, prize_1..prize_3, special_1..special_10, consol_1..consol_10
--life CSV (optional) columns:
  date, main_1..main_8

Deployment policy
-----------------
Uniform 00-99 prefix probabilities and uniform Life probability 8/36 are
always retained. A ranked Life forecast is forbidden unless a non-uniform
4D process model improves BOTH log loss and Brier in multiple locked eras.
"""
from __future__ import annotations
import argparse, json, math
from collections import deque
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.special import expit, logit
from scipy.stats import hypergeom

try:
    from sklearn.linear_model import LogisticRegression
except Exception:
    LogisticRegression = None

GROUP_COLS = [
    [f"prize_{i}" for i in range(1,4)],
    [f"special_{i}" for i in range(1,11)],
    [f"consol_{i}" for i in range(1,11)],
]
GROUP_SIZES = [3,10,10]
Q_LIFE = 8/36
V2_BETA = np.array([-1.3704797775,0.3401045862,0.1441470550,0.8250600622])
UNIFORM_PREFIX_LL = math.log(100.0)
UNIFORM_PREFIX_BRIER = 0.99


def prefix2(x) -> int:
    s = str(int(x)).zfill(4)
    return int(s[:2])


def load_4d(path: str) -> pd.DataFrame:
    d = pd.read_csv(path, dtype=str)
    d["date"] = pd.to_datetime(d["date"])
    for cols in GROUP_COLS:
        for c in cols:
            d[c] = d[c].astype(str).str.zfill(4)
    return d.sort_values("date").reset_index(drop=True)


def load_life(path: str) -> pd.DataFrame:
    d = pd.read_csv(path)
    d["date"] = pd.to_datetime(d["date"])
    return d.sort_values("date").reset_index(drop=True)


def group_prefixes(row, g):
    return [int(str(row[c]).zfill(4)[:2]) for c in GROUP_COLS[g]]


def empty_counts():
    return np.zeros((3,100), dtype=float)


def q_from_counts(counts, draw_count, alpha):
    q = np.empty_like(counts, dtype=float)
    for g,m in enumerate(GROUP_SIZES):
        q[g] = (counts[g] + alpha/100.0) / (draw_count*m + alpha)
    return q


def score_categorical(q, row):
    ll = br = 0.0
    nobs = 0
    for g in range(3):
        for x in group_prefixes(row,g):
            p = np.clip(q[g],1e-15,1)
            ll += -math.log(p[x])
            y = np.zeros(100); y[x] = 1
            br += float(np.sum((p-y)**2))
            nobs += 1
    return ll/nobs, br/nobs


def candidate_grid():
    out = []
    for a in [20,50,100,200]:
        out.append(dict(name=f"long_a{a}",kind="long",alpha=a))
    for w in [30,60,100,200]:
        for a in [20,50,100,200]:
            out.append(dict(name=f"recent{w}_a{a}",kind="recent",window=w,alpha=a))
    for w in [30,60,100,200]:
        for lam in [.25,.5,.75]:
            for a in [50,100]:
                out.append(dict(name=f"blend{w}_l{lam}_a{a}",kind="blend",window=w,lam=lam,alpha=a))
    for lam in [.25,.5,.75]:
        for a in [50,100,200]:
            out.append(dict(name=f"weekday_l{lam}_a{a}",kind="weekday",lam=lam,alpha=a))
    return out


def mix(a,b,lam):
    return (1-lam)*a + lam*b


def evaluate_grid(d):
    configs = candidate_grid()
    result = {}
    for cfg in configs:
        total = empty_counts()
        weekday = {i: empty_counts() for i in range(7)}
        hist = deque(maxlen=200)
        n_total = 0
        n_weekday = {i:0 for i in range(7)}
        scores = {y:[] for y in [2024,2025,2026]}
        for _,row in d.iterrows():
            dow = int(row["date"].dayofweek)  # Mon=0
            alpha = cfg["alpha"]
            if cfg["kind"] == "long":
                q = q_from_counts(total,n_total,alpha)
            elif cfg["kind"] == "recent":
                sub = list(hist)[-cfg["window"]:]
                c = empty_counts()
                for rr in sub:
                    for g in range(3):
                        for x in rr[g]: c[g,x]+=1
                q = q_from_counts(c,len(sub),alpha)
            elif cfg["kind"] == "blend":
                ql = q_from_counts(total,n_total,alpha)
                sub = list(hist)[-cfg["window"]:]
                c = empty_counts()
                for rr in sub:
                    for g in range(3):
                        for x in rr[g]: c[g,x]+=1
                qr = q_from_counts(c,len(sub),alpha)
                q = mix(ql,qr,cfg["lam"])
            elif cfg["kind"] == "weekday":
                ql = q_from_counts(total,n_total,alpha)
                qw = q_from_counts(weekday[dow],n_weekday[dow],alpha)
                q = mix(ql,qw,cfg["lam"])
            else:
                raise ValueError(cfg)

            yr = int(row["date"].year)
            if yr in scores:
                scores[yr].append(score_categorical(q,row))

            gr = [group_prefixes(row,g) for g in range(3)]
            for g in range(3):
                for x in gr[g]:
                    total[g,x]+=1; weekday[dow][g,x]+=1
            n_total += 1; n_weekday[dow]+=1; hist.append(gr)

        result[cfg["name"]] = {
            y: {
                "logloss": float(np.mean([z[0] for z in vals])),
                "brier": float(np.mean([z[1] for z in vals])),
            } for y,vals in scores.items()
        }
    return result


def normalize_sum8(p):
    p = np.clip(np.asarray(p,float),1e-8,1-1e-8)
    z = logit(p)
    lo,hi = -30.,30.
    for _ in range(70):
        c=(lo+hi)/2
        if expit(z+c).sum()>8: hi=c
        else: lo=c
    return expit(z+(lo+hi)/2)


def bridge_life(q):
    out=[]
    for n in range(1,37):
        pres = [1-(1-q[g,n])**GROUP_SIZES[g] for g in range(3)]
        e=0.0
        for mask in range(8):
            pr=1.0; z=V2_BETA[0]
            for g in range(3):
                on=(mask>>g)&1
                pr *= pres[g] if on else (1-pres[g])
                if on: z += V2_BETA[g+1]
            e += pr*expit(z)
        out.append(e)
    return normalize_sum8(out)


def top8_pvalue(n,total_hits):
    one=np.array([hypergeom.pmf(k,36,8,8) for k in range(9)])
    dist=np.array([1.0])
    for _ in range(n): dist=np.convolve(dist,one)
    return float(dist[int(total_hits):].sum())


def life_score(p, actual):
    aset=set(map(int,actual))
    y=np.array([1 if i in aset else 0 for i in range(1,37)])
    order=np.argsort(-p)
    hits=int(y[order[:8]].sum())
    br=float(np.mean((p-y)**2))
    ll=float(-np.mean(y*np.log(p)+(1-y)*np.log(1-p)))
    return hits,br,ll,[int(i+1) for i in order[:8]]


def evaluate_bridge(d4, life, alpha=200):
    life_map={r["date"].date():[int(r[f"main_{i}"]) for i in range(1,9)] for _,r in life.iterrows()}
    counts=empty_counts(); ndraw=0; rows=[]
    for _,r in d4.iterrows():
        q=q_from_counts(counts,ndraw,alpha)
        key=r["date"].date()
        if r["date"].year==2026 and key in life_map:
            p=bridge_life(q)
            h,br,ll,top=life_score(p,life_map[key])
            rows.append(dict(date=str(key),hits=h,brier=br,logloss=ll,top8=top))
        for g in range(3):
            for x in group_prefixes(r,g): counts[g,x]+=1
        ndraw+=1
    return rows


def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--four-d",required=True)
    ap.add_argument("--life")
    ap.add_argument("--out",default="research/v4_metrics_local.json")
    args=ap.parse_args()

    d4=load_4d(args.four_d)
    grid=evaluate_grid(d4)
    best=min(grid, key=lambda k:grid[k][2024]["logloss"])
    base={y:dict(logloss=UNIFORM_PREFIX_LL,brier=UNIFORM_PREFIX_BRIER) for y in [2024,2025,2026]}
    locked_ok=all(
        grid[best][y]["logloss"] < base[y]["logloss"] and
        grid[best][y]["brier"] < base[y]["brier"]
        for y in [2024,2025,2026]
    )

    out=dict(
        version="V4",
        best_nonuniform=best,
        prefix_scores=grid[best],
        uniform_prefix=base,
        upstream_gate="PASS" if locked_ok else "FAIL",
        deployment="CANDIDATE_ALLOWED" if locked_ok else "UNIFORM_BASELINE_ONLY",
    )

    if args.life:
        rows=evaluate_bridge(d4,load_life(args.life))
        if rows:
            total=sum(r["hits"] for r in rows)
            out["life_bridge_2026"]={
                "draws":len(rows),
                "mean_hits":total/len(rows),
                "p_one_sided":top8_pvalue(len(rows),total),
                "brier":float(np.mean([r["brier"] for r in rows])),
                "logloss":float(np.mean([r["logloss"] for r in rows])),
                "recent5":rows[-5:],
            }

    Path(args.out).write_text(json.dumps(out,indent=2))
    print(json.dumps(out,indent=2))


if __name__=="__main__":
    main()
