#!/usr/bin/env python3
"""Fetch Magnum historical draw JSON and preserve immutable raw snapshots.

This is a provenance helper for V4. It stores each API response exactly as
received, records a SHA-256 hash, and writes a normalized 23-number 4D CSV.
It deliberately keeps the raw source separate from modelling outputs.
"""
from __future__ import annotations
import argparse, hashlib, json, re, time
from datetime import date, datetime
from pathlib import Path

import pandas as pd
import requests

BASE="https://www.magnum4d.my/results/past/between-dates"
HEADERS={
    "User-Agent":"Mozilla/5.0",
    "Accept":"application/json",
    "Referer":"https://www.magnum4d.my/results/draw-results",
}
COLS=["prize_1","prize_2","prize_3"]+[f"special_{i}" for i in range(1,11)]+[f"consol_{i}" for i in range(1,11)]

def sha256(b:bytes)->str:
    return hashlib.sha256(b).hexdigest()

def fetch(end_date,count=50):
    url=f"{BASE}/null/{end_date}/{count}"
    r=requests.get(url,headers=HEADERS,timeout=30)
    r.raise_for_status()
    return url,r.content,r.json()

def parse(item):
    dd=item.get("DrawDate","")
    m=re.fullmatch(r"(\d{1,2})/(\d{1,2})/(\d{4})",dd)
    if not m:return None
    day,month,year=map(int,m.groups())
    values=[
        item.get("FirstPrize",""),item.get("SecondPrize",""),item.get("ThirdPrize",""),
        *[item.get(f"Special{i}","") for i in range(1,11)],
        *[item.get(f"Console{i}","") for i in range(1,11)],
    ]
    vals=[str(v).zfill(4) for v in values]
    if len(vals)!=23 or any(not re.fullmatch(r"\d{4}",v) for v in vals):
        return None
    rec={"date":f"{year:04d}-{month:02d}-{day:02d}"}
    rec.update(dict(zip(COLS,vals)))
    return rec

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--from-year",type=int,default=2018)
    ap.add_argument("--out-dir",default="research/snapshots")
    ap.add_argument("--delay",type=float,default=.4)
    args=ap.parse_args()

    root=Path(args.out_dir)
    raw=root/"raw"; raw.mkdir(parents=True,exist_ok=True)
    manifest=[]; records=[]; seen=set()
    end=str(date.today())

    while True:
        url,body,items=fetch(end)
        stamp=datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
        name=f"{stamp}_{end}.json"
        (raw/name).write_bytes(body)
        manifest.append({"file":str(Path("raw")/name),"sha256":sha256(body),"url":url,"bytes":len(body)})
        if not items:break

        oldest=None
        for item in items:
            rec=parse(item)
            if not rec:continue
            oldest=rec["date"] if oldest is None else min(oldest,rec["date"])
            if rec["date"] in seen:continue
            seen.add(rec["date"])
            if int(rec["date"][:4])>=args.from_year: records.append(rec)

        if not oldest or int(oldest[:4])<args.from_year:break
        end=oldest
        time.sleep(args.delay)

    records=sorted(records,key=lambda x:x["date"])
    pd.DataFrame(records).to_csv(root/"magnum_4d_normalized.csv",index=False)
    (root/"manifest.json").write_text(json.dumps({
        "created_utc":datetime.utcnow().isoformat()+"Z",
        "from_year":args.from_year,
        "rows":len(records),
        "raw_files":manifest,
    },indent=2))
    print(f"saved {len(records)} draws to {root}")

if __name__=="__main__":
    main()
