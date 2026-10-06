# V4 validation-driven model

## Objective

V4 follows the independent validation recommendation from the Lottery Research project:

> Do not make V4 “V3 + more machine learning.” Investigate genuinely pre-draw information in the underlying Magnum 4D process. Complexity cannot create information that is not present.

Magnum states that each draw produces 23 4D winning numbers using electromechanical drums, and that Magnum Life winning and bonus numbers are derived from the 4D results. V4 therefore tests the **upstream process first**.

## Data used in the current V4 run

- 1,050 chronological Magnum 4D draws
- 2020-01-01 through 2026-10-04
- Year counts: 126 / 126 / 179 / 165 / 164 / 165 / 125
- 125 Magnum Life rows from 2026 for the downstream bridge diagnostic
- 2024 = model-selection year
- 2025 = confirmation year
- 2026 = locked final test

The current numerical run uses the public 4D archive already used in V2, whose scraper targets Magnum's historical JSON endpoint. V4 adds a separate official-source snapshot script that preserves raw responses and SHA-256 hashes for future immutable reruns.

## Candidate families

The leading-two-digit prefix of every 4D result is treated as a 00–99 categorical outcome. V4 tests:

1. Bayesian long-history category-specific frequency
2. Rolling recency windows
3. Short/long blends as a change-point/regime proxy
4. Weekday-conditioned hierarchical frequency
5. Regularized pooled logistic models using:
   - prior probability
   - lag-1 presence
   - rolling 5/20/50-draw state
   - time since previous presence
   - weekday
   - prize category

There are 53 non-uniform frequency/regime configurations in the primary grid, plus the regularized logistic family.

## Locked validation result

Uniform 00–99 categorical log loss is:

`log(100) = 4.605170`

The best non-uniform candidate selected on 2024 is `long_a200`.

| Year | Uniform log loss | Candidate | Delta | Uniform Brier | Candidate | Delta |
|---|---:|---:|---:|---:|---:|---:|
| 2024 | 4.605170 | 4.615821 | +0.010650 | 0.990000 | 0.990207 | +0.000207 |
| 2025 | 4.605170 | 4.611906 | +0.006736 | 0.990000 | 0.990129 | +0.000129 |
| 2026 | 4.605170 | 4.611494 | +0.006324 | 0.990000 | 0.990123 | +0.000123 |

Lower is better. The candidate is worse than uniform in every locked year.

The serial/weekday logistic family is also rejected because it worsens proper scores.

## Downstream 4D → Life bridge

For research only, V4 passes the pre-draw `long_a200` prefix probabilities through the frozen V2 structural coefficients.

Across the 125 Life draws in 2026:

- Mean Top-8 hits: **1.840**
- Fair expectation: **1.778**
- One-sided p-value: **0.267**
- Brier: **0.172828** vs uniform **0.172840**
- Log loss: **0.529673** vs uniform **0.529706**

This is an interesting downstream fluctuation, but it **does not pass the gate**:
- the upstream 4D predictor fails,
- the Top-8 lift is not statistically significant,
- the proper-score improvement is extremely small.

## Deployment result

**UNIFORM_BASELINE_ONLY**

V4 issues no ranked deployment set. Every Magnum Life number remains:

`P(number appears) = 8/36 = 22.22%`

The blocked bridge ranking is shown on the dashboard only for diagnostic/prospective research.

## Promotion rule

A future V4.x candidate may be promoted only if:
- all inputs are available before betting closes,
- Brier and log loss beat the uniform benchmark in multiple non-overlapping locked eras,
- ranking performance survives multiplicity correction,
- calibration does not materially drift,
- and subsequent immutable prospective predictions replicate the result.

The long-run prospective target remains a material Top-8 lift, preferably around 1.95 or better, with adjusted significance and proper-score improvement.
