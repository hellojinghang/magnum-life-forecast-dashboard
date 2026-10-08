# V6 — Economic Expected-Return Gate

## Objective

V6 answers a different question from V1–V5:

> Even if the model ranks future winners slightly better than chance, is the edge large enough to overcome the lottery's negative expected payout?

A model is not considered usable until its **conservative expected payout exceeds RM1 per RM1 stake**.

## Prize assumptions

The model uses the current Magnum Life straight-play structure:

- Stake: RM1
- Grand Prize: RM1,000/day × 20 years = RM7.3m nominal
- 2nd Prize: RM1,000/day × 100 days = RM100,000 nominal
- 3rd: RM6,000
- 4th: RM600 per matched bonus with 6 main numbers
- 5th: RM100
- 6th: RM30 per matched bonus with 5 main numbers
- 7th: RM10
- 8th: RM5 per matched bonus with 4 main numbers

The present-value screen uses the same illustrative 4.5% annual discount assumption adopted earlier:
- Grand PV ≈ RM4.854m
- 2nd PV ≈ RM99,393

Prize-sharing and category caps are **not** treated as upside. Because the current model is already below break-even, they can only make the economic hurdle harder.

## Probability model

The blocked V5 vector gives marginal main-number probabilities. V6 converts those 36 marginals into a coherent exactly-8-number distribution using a conditional Bernoulli / maximum-entropy fixed-size model:

`P(S) ∝ ∏ w_i, for |S| = 8`

Weights are iteratively fitted so the model's marginal inclusion probabilities reproduce the V5 vector.

No validated bonus-number edge exists. Conditional on the 8 main numbers, the two bonus numbers are treated as uniform among the remaining 28 numbers.

## Current ticket

Research-only V5 top 8:

`35 30 26 05 28 15 29 12`

Under the coherent V6 set model:

- Expected main-number hits ≈ **1.797**
- Exact 8/8 probability ≈ **3.676×10⁻⁸**
- Exact 8/8 odds ≈ **1 in 27.20m**
- Fair exact-set odds = **1 in 30.26m**

So the model improves exact-set odds only about **11.2%** over fair.

## Expected value

### Fair benchmark
- Nominal EV ≈ **RM0.550**
- PV-adjusted EV ≈ **RM0.469**

### Current V5/V6 research vector
- Nominal EV ≈ **RM0.598**
- PV-adjusted EV ≈ **RM0.508**

Expected returns:

- Nominal: **−40.2%**
- PV-adjusted: **−49.2%**

Therefore:

**NEGATIVE EXPECTED RETURN**

## Break-even stress test

V6 scales the current deviation away from the fair 8/36 probabilities while preserving the same number ranking, then solves for EV = RM1.

### Nominal break-even
- Required signal strength: **7.22× current**
- Implied expected Top-8 hits: **1.915**
- Mean marginal probability of selected 8: **23.94%**
- Exact-set odds ≈ **1 in 14.35m**

### PV-adjusted break-even
- Required signal strength: **9.64× current**
- Implied expected Top-8 hits: **1.962**
- Mean marginal probability of selected 8: **24.52%**
- Exact-set odds ≈ **1 in 11.31m**

These are mathematical stress-test thresholds, not evidence that such a signal exists.

## Promotion rule

V6 remains blocked until all of the following hold:

1. upstream pre-draw probabilities beat uniform on locked Brier and log loss;
2. frozen prospective predictions replicate over at least 50 draws, preferably 100–200;
3. the advantage survives multiple-testing correction;
4. nominal EV exceeds RM1;
5. PV-adjusted EV exceeds RM1;
6. the **lower confidence bound** on EV remains above RM1 after model uncertainty and reasonable prize-sharing/cap haircuts.

A single profitable draw, one jackpot, or a temporary high hit rate does not satisfy the rule.

## Current verdict

**NO_BET_POSITIVE_EV_NOT_ESTABLISHED**

The project should continue gathering prospective evidence and new process information, but no version should be promoted simply to satisfy the desire for a prediction.
