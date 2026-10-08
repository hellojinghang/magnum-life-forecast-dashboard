# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life **V1–V6** research models.

## Current project objective

The project no longer treats "better than random ranking" as sufficient. A model can only be promoted when it passes **both**:

1. **Statistical gate** — pre-draw probabilities outperform the fair baseline on locked/prospective Brier score, log loss, ranking performance and adjusted significance.
2. **Economic gate** — the conservative expected payout remains above **RM1 per RM1 stake**, including time value, model uncertainty, and reasonable payout-sharing/cap haircuts.

## V6 result

Using the current blocked V5 research probability vector, V6 estimates:

- Fair nominal EV: **RM0.550 / RM1**
- Current model nominal EV: **RM0.598 / RM1**
- Current model PV-adjusted EV: **RM0.508 / RM1**
- Nominal expected return: **−40.2%**
- PV-adjusted expected return: **−49.2%**

So the current deployment status is:

**`NO_BET_POSITIVE_EV_NOT_ESTABLISHED`**

V6 estimates that the current signal would need to be roughly **7.22× stronger** for nominal break-even and **9.64× stronger** for the PV-adjusted break-even screen.

## V5 prospective watch

The blocked V5 exogenous candidate remains in an append-only prospective registry. Its first frozen record targets the **10 October 2026** draw and was committed before the result.

The research candidate is not a deployed betting recommendation.

## Model history

- **V1** — rolling Life frequency model; lift did not persist.
- **V2** — confirmed same-draw 4D→Life structural relationship; not directly pre-draw.
- **V3** — adaptive multi-horizon Life model; no verified edge.
- **V4** — upstream 4D history/serial model; locked validation failed.
- **V5** — public exogenous process states + prospective registry; watch-only.
- **V6** — economic expected-return gate; current model remains negative-EV.

## Research files

- `research/model_v6.py`
- `research/v6_metrics.json`
- `research/V6_ECONOMICS.md`
- `research/model_v5.py`
- `research/v5_metrics.json`
- `research/V5_VALIDATION.md`
- `research/prospective/v5_registry.jsonl`
- `research/prospective/README.md`
- `research/fetch_official_snapshot.py`
- prior V3/V4 models and metrics

## GitHub Pages

Enable **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

Latest research cutoff: **7 October 2026**.

This repository is statistical research. No historical or research-only ranking is a guarantee of future lottery results.
