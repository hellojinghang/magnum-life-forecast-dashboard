# Prospective validation registry

This folder is append-only research evidence. A prediction record is committed **before** the corresponding draw result is known.

## V5 rules
- The deployed probability vector is stored separately from blocked research rankings.
- Do not edit an old prediction after the draw. Append a result/evaluation record instead.
- Review milestones: **50, 100 and 200** future draws.
- Promotion requires improvement over the fair baseline on both ranking and proper probability scores, with multiplicity-adjusted statistical evidence and persistence across non-overlapping periods.

The first V5 record is frozen for the **10 October 2026** draw using data only through **7 October 2026**.

## Current prospective forecast index

- 10 October 2026: V5 first research freeze in `v5_registry.jsonl` (evaluation appended later).
- 14 October 2026: `v6_forecast_2026-10-14.json`.
- 21 October 2026: V6 consensus freeze in `v5_registry.jsonl`.
- 24 October 2026: `v6_forecast_2026-10-24.json`.
- 7 November 2026: `v6_forecast_2026-11-07.json` (36-number vector and five ranked sets, historical cutoff 4 November; frozen 7 November before draw).

Prior completed V6 forecasts are scored in `evaluation_2026-11-07_cutoff_2026-11-04.json`. The evaluation is a separate append-only record. Old forecasts are never edited, backdated, or replaced.
