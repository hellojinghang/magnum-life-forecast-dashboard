# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life V1–V4 research models.

## V4: validation-driven process model

V4 follows the independent validation recommendation from the Lottery Research project. It is **not** “V3 plus more ML.” It tests whether information available before the next draw can improve prediction of the underlying Magnum 4D process, and only permits that signal to enter the Life forecast if it survives locked proper-score validation.

### Current V4 result
**UNIFORM_BASELINE_ONLY**

The best non-uniform 4D leading-prefix candidate is worse than the fair 00–99 benchmark on both log loss and Brier score in 2024, 2025 and 2026. A downstream research-only 4D→Life bridge averages 1.840 Top-8 hits across 125 Life draws in 2026, but its one-sided p-value is about 0.267 and the upstream model fails validation. It is therefore blocked from deployment.

The deployed V4 marginal probability remains:

`8 / 36 = 22.22%` for every Life number.

No ranked V4 deployment set is issued.

## Model history

- **V1**: rolling Life-number frequency model. Historical lift did not persist.
- **V2**: confirmed same-draw 4D→Life structural relationship. Strong diagnostic evidence, but not directly pre-draw.
- **V3**: adaptive multi-horizon Life-history ensemble with a uniform expert and calibration guardrail. No verified edge.
- **V4**: upstream 4D-process information discovery with locked 2024/2025/2026 validation and a hard fallback to uniform.

## V4 research files

- `research/model_v4.py` – reproducible process model and hard gate
- `research/v4_metrics.json` – current locked validation metrics
- `research/V4_VALIDATION.md` – full V4 rationale and result
- `research/fetch_official_snapshot.py` – raw-source snapshot helper with SHA-256 manifest
- `research/model_v3.py`, `research/v3_metrics.json` – prior V3 model

## Dashboard files

- `index.html`
- `styles.css`
- `data.js`
- `app.js`

## GitHub Pages

Enable **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

Data cutoff for the current model run: **4 October 2026**.

This project is statistical research. A historical pattern or diagnostic lift is not a guarantee of future lottery results.
