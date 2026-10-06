# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life V1, V2 and V3 research models.

## V3
V3 is an adaptive pre-draw ensemble of rolling Life-frequency experts using 10, 20, 30, 50, 60, 100 and all-to-date windows, plus a uniform 8/36 expert. Expert weights adapt using cumulative Brier loss. A recent-calibration guardrail reduces confidence when the raw ensemble is scoring worse than the fair baseline.

**Current V3 status (data through 2026-10-04): `NO_VERIFIED_EDGE`.** The comparable 2026 holdout averages 1.769 correct numbers per Top-8 set versus the fair expectation of 1.778.

## Dashboard files
- `index.html` – dashboard structure
- `styles.css` – responsive desktop/mobile design
- `data.js` – V1/V2/V3 metrics, forecasts, weights and recent examples
- `app.js` – rendering, tabs, model toggles, consensus map, data/weight panels

## Research files
- `research/v3_metrics.json` – generated V3 metrics and current forecast
- `research/model_v3.py` – reproducible V3 model
- `research/README.md` – methodology and validation notes

## Timing distinction
- **V1**: pre-draw Life-history model.
- **V2 structural**: uses same-draw 4D results and is therefore a structural diagnostic, not a directly deployable future forecast.
- **V3**: pre-draw adaptive Life-history ensemble. It is more conservative but still has no verified predictive edge.

## GitHub Pages
Enable **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

This project is statistical research only. No forecast is guaranteed.
