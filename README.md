# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life **V1–V5** research models.

## V5: exogenous process + prospective validation

V5 follows the independent validation recommendation: stop adding complexity to historical Life-number patterns and instead test legitimate information available **before** the draw.

V5 examines public process/calendar states such as:
- Special vs regular draw
- weekday
- gap since the previous draw
- back-to-back draw state
- 7-day draw density
- month / quarter
- process-state interactions

The current dataset contains **1,051 4D draws through 7 October 2026**.

### V5 result

The best exogenous 4D-prefix candidate selected on 2024 is worse than uniform in **2024, 2025 and 2026** on both log loss and Brier score.

A downstream research-only 4D→Life bridge reaches **1.913 Top-8 hits** across 126 draws in 2026 versus the fair **1.778**, but its one-sided p-value is about **0.082**, the upstream model fails, and the probability-score improvement is tiny.

Therefore:

**Deployment = `UNIFORM_BASELINE_ONLY`**

Every Life number remains at **22.22%** and V5 issues **no ranked deployment set**.

The blocked candidate is now frozen prospectively rather than discarded. The first immutable registry entry targets the **10 October 2026** draw, with review milestones after 50, 100 and 200 future draws.

## Model history

- **V1** — rolling Life-number frequency model; lift did not persist.
- **V2** — confirmed same-draw 4D→Life structural relationship; not directly pre-draw.
- **V3** — adaptive multi-horizon Life ensemble; no verified edge.
- **V4** — upstream 4D-process frequency/serial model with hard baseline gate; failed.
- **V5** — public exogenous process states + prospective frozen registry; watch candidate only.

## Research files

- `research/model_v5.py`
- `research/v5_metrics.json`
- `research/V5_VALIDATION.md`
- `research/prospective/v5_registry.jsonl`
- `research/prospective/README.md`
- `research/fetch_official_snapshot.py`
- prior V3/V4 models and metrics

## GitHub Pages

Enable **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

Latest V5 research cutoff: **7 October 2026**.

This repository is statistical research. A historical or research-only ranking is not a guarantee of future lottery results.
