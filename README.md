# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life **V1–V6** research models.

## Current project objective

The project no longer treats "better than random ranking" as sufficient. A model can only be promoted when it passes **both**:

1. **Statistical gate** — pre-draw probabilities outperform the fair baseline on locked/prospective Brier score, log loss, ranking performance and adjusted significance.
2. **Economic gate** — the conservative expected payout remains above **RM1 per RM1 stake**, including time value, model uncertainty, and reasonable payout-sharing/cap haircuts.

## Latest V6 forecast (7 November 2026)

The active research forecast targets **Saturday, 7 November 2026 (Draw 446/26)**. It was committed before the 7:00 PM MYT draw with **all model inputs cut off at 4 November 2026**. The on-demand freeze occurred at 05:54 MYT on 7 November, later than the preferred Friday noon schedule. It is not backdated.

- **Top-ranked set:** `03 10 19 25 28 30 35 36`
- **Model exact-set odds (unvalidated):** about 1 in 22.30 million, or 1.357× the fair mathematical benchmark.
- **Fair benchmark:** 1 in 30,260,340 for every valid eight-number set.
- **Top-set nominal EV:** RM0.700 per RM1 (expected ROI −29.97%).
- **Top-set PV-adjusted EV:** RM0.590 per RM1.
- **Statistical gate:** FAIL, no verified prospective edge.
- **Economic gate:** FAIL, expected return negative.
- **Decision:** Research only. No betting recommendation.

The full five ranked sets, 36-number vector, assumptions, and economic estimates are in [the frozen 7 November record](research/prospective/v6_forecast_2026-11-07.json). The updated 139-draw 2026 Life dataset is in [research/snapshots](research/snapshots/magnum_life_2026_through_2026-11-04.csv). Previously frozen 14/21/24 October candidates were evaluated [here](research/prospective/evaluation_2026-11-07_cutoff_2026-11-04.json) without modifying the originals.

The `data.js` dashboard has also been refreshed for the 7 November draw. Historical V6 break-even signal multipliers in older research documentation are not re-estimated by this forecast refresh.

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

## Current frozen forecast

See [the active 7 November prospective V6 record](research/prospective/v6_forecast_2026-11-07.json) with a 4 November input cutoff. The 2026 Life and 4D process inputs were refreshed, but the model remains research-only.

## GitHub Pages

Enable **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

Latest research cutoff: **4 November 2026**.

This repository is statistical research. No historical or research-only ranking is a guarantee of future lottery results.
