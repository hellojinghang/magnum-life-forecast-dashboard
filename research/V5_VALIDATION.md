# V5 — Exogenous Process Model + Prospective Registry

## Why V5 exists

The independent validation recommended that the next model should **not** add more complexity to Life-number history. V5 therefore tests genuine pre-draw process information, then freezes future predictions prospectively.

The official Magnum support pages state:
- regular draws are Wednesday, Saturday and Sunday;
- Special Draws are usually Tuesdays and require approval;
- all draws are at 7pm;
- draws are held in the Wisma Magnum auditorium;
- 23 winning 4D numbers are drawn using see-through electromechanical drums;
- randomly selected members of the public operate the draw via remote control;
- Magnum Life winning and bonus numbers are derived from the 4D results by an approved, actuarially verified method.

Official references:
- https://support.magnum4d.my/hc/en-us/sections/360001161815-Drawing-of-Winning-Numbers
- https://support.magnum4d.my/hc/en-us/articles/360004166195-When-are-draws-conducted
- https://support.magnum4d.my/hc/en-us/articles/360004166235-How-are-draws-conducted
- https://support.magnum4d.my/hc/en-us/articles/7782032659471-I-would-love-to-participate-in-the-live-draw-event-Am-I-allowed-to-do-so
- https://support.magnum4d.my/hc/en-us/articles/360004071176-How-are-Magnum-Life-winning-numbers-drawn

## Public metadata limitation

I did not find a public draw-by-draw series for:
- machine/drum ID,
- ball-set ID or rotation,
- maintenance/replacement events,
- calibration events,
- documented equipment-change dates.

Those remain higher-value candidate covariates if they ever become publicly available.

## Data

V5 uses 1,051 chronological Magnum 4D draws from **2020-01-01 through 2026-10-07**.

Year counts:
- 2020: 126
- 2021: 126
- 2022: 179
- 2023: 165
- 2024: 164
- 2025: 165
- 2026: 126

Observed schedule categories:
- Special/Tuesday draws: 75
- Regular draws: 976

## Exogenous candidates

V5 tests 200 hierarchical configurations:

State families:
1. Special vs regular
2. Exact weekday
3. Gap since previous draw
4. Back-to-back draw state
5. Number of prior draws in the previous 7 days
6. Month
7. Quarter
8. Weekday × gap
9. Special × gap
10. Special × month

Shrinkage grid:
- alpha = 20, 50, 100, 200, 500
- conditional blend = 0.25, 0.50, 0.75, 1.00

The model is selected on **2024**, checked on **2025**, then tested on **2026**.

## Locked upstream result

The selected candidate is:

`month_a500_l0.25`

| Year | Uniform log loss | Candidate | Delta | Uniform Brier | Candidate | Delta |
|---|---:|---:|---:|---:|---:|---:|
| 2024 | 4.605170 | 4.613815 | +0.008645 | 0.990000 | 0.990172 | +0.000172 |
| 2025 | 4.605170 | 4.609627 | +0.004456 | 0.990000 | 0.990087 | +0.000087 |
| 2026 | 4.605170 | 4.611625 | +0.006455 | 0.990000 | 0.990125 | +0.000125 |

Lower is better. The exogenous candidate loses to uniform in every locked year.

The Special-vs-regular model also loses to uniform, so Special Draw timing does not produce a validated prefix advantage.

## Downstream Life bridge

For diagnosis only, the frozen V2 structural coefficients are fed by the selected exogenous 4D-prefix model.

Across 126 Life draws in 2026:

- Mean Top-8 hits: **1.913**
- Fair expectation: **1.778**
- One-sided p-value: **0.082**
- Brier: **0.172832** vs uniform **0.172840**
- Log loss: **0.529686** vs uniform **0.529706**

This is the strongest pre-draw downstream result so far, but it still fails promotion:
1. upstream 4D probabilities are worse than uniform;
2. Top-8 evidence is not significant under the validator's standard;
3. the proper-score gain is tiny;
4. the candidate emerged from a large search and requires prospective replication.

## Deployment

**UNIFORM_BASELINE_ONLY**

Every Life number remains at:

`8/36 = 22.22%`

No ranked V5 deployment set is issued.

## Prospective watch

The blocked research candidate is now frozen in:

`research/prospective/v5_registry.jsonl`

The first record is for **10 October 2026**, frozen on **8 October 2026** using data only through **7 October 2026**.

Research-only Top 8:
`35 30 26 05 28 15 29 12`

This list is **not** the deployed forecast. It exists only to prevent hindsight changes and to measure whether the apparent 2026 signal survives future draws.

Formal review milestones:
- 50 future draws
- 100 future draws
- 200 future draws

Promotion requires proper-score improvement, material Top-8 lift, multiplicity-adjusted significance and persistence across independent periods.
