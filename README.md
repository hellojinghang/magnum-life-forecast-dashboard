# Magnum Life Forecast Lab

Static, responsive GitHub Pages dashboard for the Magnum Life V1 and V2 research models.

## Files
- `index.html` – dashboard structure
- `styles.css` – responsive desktop/mobile design
- `data.js` – model metrics, forecast sets and recent historical examples
- `app.js` – rendering, tabs, model toggles, consensus map and copy buttons

## Publish with GitHub Pages
1. Create a public GitHub repository, for example `magnum-life-forecast-dashboard`.
2. Upload the four files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will provide the public Pages URL.

## Model labels
- **V1 pre-draw**: rolling 60-draw Magnum Life frequency model with 30% shrinkage to the fair 8/36 baseline.
- **V2 structural**: confirmed same-draw 4D→Life relationship. Historical V2 accuracy shown in the dashboard uses same-draw 4D results and is therefore diagnostic, not pre-draw.
- **V2 experimental forecast**: a research extrapolation using a recent rolling 4D leading-prefix distribution as input to the V2 structural mapping. The V2 pre-draw deployment gate did not pass.

Data cutoff shown in the dashboard: **4 October 2026**.
