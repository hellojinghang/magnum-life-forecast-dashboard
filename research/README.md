# V3 research model

V3 reduces dependence on one arbitrarily chosen rolling window. It treats several Life-frequency horizons as forecasting experts and updates their weights using only outcomes already observed.

## Experts
`10, 20, 30, 50, 60, 100, all-to-date, uniform 8/36`

Every non-uniform horizon uses 30% shrinkage toward the fair marginal probability `8/36`. The uniform expert is deliberately included so the ensemble can retreat toward the null model when historical signals are unhelpful.

## Adaptive weighting
Weights are proportional to:

`exp(-eta × cumulative Brier loss)`

with `eta = 5`, fixed during development.

## Calibration guardrail
The raw ensemble's trailing 30-draw Brier score is compared with the fair benchmark. If the raw score is worse, the deviation from uniform is reduced to 50%. This reduces confidence rather than pretending that weak calibration is useful information.

## Holdouts through 4 Oct 2026
- **2019:** 167 chronological pre-draw predictions; mean Top-8 hits = **1.874**, one-sided p ≈ **0.126**
- **Recent 2026:** first 60 draws are recent-regime warm-up, followed by 65 evaluated predictions; mean Top-8 hits = **1.769**, p ≈ **0.547**
- Fair expectation = **1.778**

Therefore the deployment gate remains:

`NO_VERIFIED_EDGE`

## Current V3 weights
The largest current single component is the uniform expert at about **20.7%**. The recent raw 30-draw Brier score is worse than uniform, so the **50% confidence guardrail is active**.

## Data caveat
The current V3 row-level Life ensemble uses the reconstructed 2018–2019 and 2026 sequences available in the project research package. The dashboard explicitly discloses that 2020–2025 Life rows have not yet been incorporated into the V3 rolling ensemble.

## Reproduce
Use `research/model_v3.py` with CSVs containing:

`date, main_1, main_2, ..., main_8`

Example:

```bash
python research/model_v3.py \
  --life-1819 path/to/life_2018_2019.csv \
  --life-2026 path/to/life_2026.csv \
  --out research/v3_metrics.json
```

This repository is for statistical research. No result is guaranteed.
