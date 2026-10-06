window.MODEL_DATA = {
  "meta": {
    "title": "Magnum Life Forecast Lab",
    "dataCutoff": "2026-10-04",
    "generated": "2026-10-06",
    "baselineHits": 1.7777777777777777,
    "baselineRate": 0.2222222222222222,
    "modelVersion": "V3"
  },
  "status": {
    "v1": {
      "code": "NO_VERIFIED_EDGE",
      "label": "No verified pre-draw edge",
      "tone": "danger"
    },
    "v2": {
      "code": "STRUCTURAL_EDGE_ONLY",
      "label": "Structural edge confirmed, pre-draw edge unverified",
      "tone": "warning"
    },
    "v3": {
      "code": "NO_VERIFIED_EDGE",
      "label": "Adaptive ensemble, baseline guarded",
      "tone": "danger"
    }
  },
  "accuracy": [
    {
      "model": "V1",
      "period": "2019 holdout",
      "type": "Pre-draw",
      "draws": 167,
      "meanHits": 1.9940119760479043,
      "rate": 0.24925149700598803,
      "p": 0.004683660879649253,
      "brier": 0.17283675888962816,
      "logloss": 0.5297078225280993
    },
    {
      "model": "V1",
      "period": "2026 holdout",
      "type": "Pre-draw",
      "draws": 65,
      "meanHits": 1.7076923076923076,
      "rate": 0.21346153846153845,
      "p": 0.7231111262243811,
      "brier": 0.1731633238366572,
      "logloss": 0.5306272160949193
    },
    {
      "model": "V2",
      "period": "2019 holdout",
      "type": "Same-draw structural",
      "draws": 167,
      "meanHits": 2.3353293413,
      "rate": 0.2919161676625,
      "p": 1.36527696e-11,
      "brier": 0.1710586761,
      "logloss": 0.5249578583
    },
    {
      "model": "V2",
      "period": "2026 holdout",
      "type": "Same-draw structural",
      "draws": 125,
      "meanHits": 2.256,
      "rate": 0.282,
      "p": 3.83069437e-7,
      "brier": 0.1720549773,
      "logloss": 0.5273599937
    },
    {
      "model": "V3",
      "period": "2019 holdout",
      "type": "Pre-draw adaptive ensemble",
      "draws": 167,
      "meanHits": 1.874251497005988,
      "rate": 0.2342814371257485,
      "p": 0.1255964479841148,
      "brier": 0.17283884175067646,
      "logloss": 0.5297089519663459
    },
    {
      "model": "V3",
      "period": "2026 holdout",
      "type": "Pre-draw adaptive ensemble",
      "draws": 65,
      "meanHits": 1.7692307692307692,
      "rate": 0.22115384615384615,
      "p": 0.5470264359172025,
      "brier": 0.17292605892512472,
      "logloss": 0.5299639346237339
    }
  ],
  "forecasts": {
    "v1": {
      "label": "V1 pre-draw research sets",
      "description": "Rolling-60 Life frequency model with 30% shrinkage to the 8/36 baseline. Sets are diversified from the current ranked probability vector.",
      "sets": [
        {
          "id": 1,
          "numbers": [
            10,
            19,
            25,
            4,
            9,
            28,
            33,
            1
          ],
          "score": 0.24243055555555557
        },
        {
          "id": 2,
          "numbers": [
            10,
            21,
            30,
            35,
            19,
            25,
            4,
            9
          ],
          "score": 0.24118055555555556
        },
        {
          "id": 3,
          "numbers": [
            28,
            33,
            2,
            20,
            36,
            10,
            1,
            21
          ],
          "score": 0.23680555555555555
        },
        {
          "id": 4,
          "numbers": [
            30,
            35,
            19,
            25,
            3,
            8,
            18,
            4
          ],
          "score": 0.23493055555555553
        },
        {
          "id": 5,
          "numbers": [
            9,
            28,
            33,
            12,
            15,
            16,
            24,
            27
          ],
          "score": 0.2280555555555556
        }
      ],
      "top12": [
        {
          "number": 10,
          "score": 0.2505555555555555
        },
        {
          "number": 19,
          "score": 0.2455555555555555
        },
        {
          "number": 25,
          "score": 0.2455555555555555
        },
        {
          "number": 4,
          "score": 0.2405555555555556
        },
        {
          "number": 9,
          "score": 0.2405555555555556
        },
        {
          "number": 28,
          "score": 0.2405555555555556
        },
        {
          "number": 33,
          "score": 0.2405555555555556
        },
        {
          "number": 1,
          "score": 0.2355555555555556
        },
        {
          "number": 21,
          "score": 0.2355555555555556
        },
        {
          "number": 30,
          "score": 0.2355555555555556
        },
        {
          "number": 35,
          "score": 0.2355555555555556
        },
        {
          "number": 2,
          "score": 0.2305555555555555
        }
      ]
    },
    "v2": {
      "label": "V2 experimental pre-draw extrapolation",
      "description": "Experimental bridge from a rolling 4D leading-prefix distribution into the V2 structural mapping. The V2 pre-draw gate failed, so these are research scenarios, not a verified edge.",
      "sets": [
        {
          "id": 1,
          "numbers": [
            35,
            30,
            29,
            28,
            11,
            33,
            32,
            5
          ],
          "score": 0.23011490125338366
        },
        {
          "id": 2,
          "numbers": [
            35,
            30,
            10,
            25,
            17,
            22,
            29,
            28
          ],
          "score": 0.2291447578761748
        },
        {
          "id": 3,
          "numbers": [
            4,
            20,
            8,
            11,
            24,
            31,
            6,
            35
          ],
          "score": 0.22539108487161466
        },
        {
          "id": 4,
          "numbers": [
            23,
            18,
            26,
            33,
            32,
            5,
            30,
            12
          ],
          "score": 0.22531735164993763
        },
        {
          "id": 5,
          "numbers": [
            27,
            3,
            10,
            25,
            17,
            14,
            13,
            19
          ],
          "score": 0.22253626984879815
        }
      ],
      "top12": [
        {
          "number": 35,
          "score": 0.23388206165631104
        },
        {
          "number": 30,
          "score": 0.23332199201133944
        },
        {
          "number": 29,
          "score": 0.23109471263975911
        },
        {
          "number": 28,
          "score": 0.23034716015433498
        },
        {
          "number": 11,
          "score": 0.2295882750617264
        },
        {
          "number": 33,
          "score": 0.22761607041384332
        },
        {
          "number": 32,
          "score": 0.22753799173612177
        },
        {
          "number": 5,
          "score": 0.2275309463536333
        },
        {
          "number": 10,
          "score": 0.22654419590355598
        },
        {
          "number": 25,
          "score": 0.22639020921770628
        },
        {
          "number": 17,
          "score": 0.22615783947950713
        },
        {
          "number": 22,
          "score": 0.2254198919468844
        }
      ],
      "window": {
        "draws": 50,
        "from": "2026-06-17",
        "to": "2026-10-04"
      }
    },
    "v3": {
      "label": "V3 adaptive multi-horizon research sets",
      "description": "Adaptive ensemble of 10, 20, 30, 50, 60, 100 and all-to-date Life-frequency experts plus a uniform 8/36 expert. Recent calibration is worse than uniform, so the V3 guardrail currently halves the non-uniform signal strength.",
      "sets": [
        {
          "id": 1,
          "numbers": [
            10,
            19,
            28,
            33,
            9,
            2,
            25,
            36
          ],
          "score": 0.23101160260682135
        },
        {
          "id": 2,
          "numbers": [
            10,
            30,
            21,
            35,
            15,
            1,
            3,
            19
          ],
          "score": 0.2279957333530352
        },
        {
          "id": 3,
          "numbers": [
            4,
            10,
            28,
            33,
            8,
            9,
            22,
            18
          ],
          "score": 0.22719650058224714
        },
        {
          "id": 4,
          "numbers": [
            17,
            2,
            25,
            20,
            36,
            12,
            34,
            11
          ],
          "score": 0.22377597581074785
        },
        {
          "id": 5,
          "numbers": [
            30,
            5,
            27,
            24,
            21,
            7,
            35,
            15
          ],
          "score": 0.2224271363350257
        }
      ],
      "top12": [
        {
          "number": 10,
          "score": 0.23908897156789
        },
        {
          "number": 19,
          "score": 0.231237371523663
        },
        {
          "number": 28,
          "score": 0.23100922586453063
        },
        {
          "number": 33,
          "score": 0.23020986585441816
        },
        {
          "number": 9,
          "score": 0.22967890503852192
        },
        {
          "number": 2,
          "score": 0.22909857822846985
        },
        {
          "number": 25,
          "score": 0.22900692673108966
        },
        {
          "number": 36,
          "score": 0.22876297604598772
        },
        {
          "number": 30,
          "score": 0.22763807928725527
        },
        {
          "number": 21,
          "score": 0.22620123270579662
        },
        {
          "number": 35,
          "score": 0.22594858458884165
        },
        {
          "number": 15,
          "score": 0.2257437853907367
        }
      ],
      "weights": {
        "10": 0.06099869406199405,
        "20": 0.09788074751667993,
        "30": 0.11667676639519782,
        "50": 0.1264067464485142,
        "60": 0.12639524004884198,
        "100": 0.1317631226450454,
        "all": 0.13272144980809325,
        "uniform": 0.20715723307563333
      },
      "guard": 0.5,
      "recentRawBrier30": 0.1731833712565482,
      "uniformBrier": 0.1728395061728395,
      "window": {
        "draws": 125,
        "from": "2026-01-03",
        "to": "2026-10-04"
      }
    }
  },
  "history": {
    "v1": [
      {
        "date": "2026-09-26",
        "selected": [
          9,
          28,
          25,
          19,
          21,
          4,
          30,
          33
        ],
        "actual": [
          1,
          5,
          7,
          10,
          14,
          18,
          22,
          35
        ],
        "hits": 0
      },
      {
        "date": "2026-09-27",
        "selected": [
          25,
          28,
          19,
          4,
          21,
          9,
          10,
          30
        ],
        "actual": [
          2,
          10,
          14,
          15,
          20,
          21,
          31,
          33
        ],
        "hits": 2
      },
      {
        "date": "2026-09-30",
        "selected": [
          10,
          19,
          25,
          4,
          21,
          28,
          9,
          30
        ],
        "actual": [
          10,
          11,
          20,
          24,
          32,
          33,
          34,
          36
        ],
        "hits": 1
      },
      {
        "date": "2026-10-03",
        "selected": [
          10,
          25,
          33,
          9,
          19,
          4,
          21,
          28
        ],
        "actual": [
          3,
          7,
          8,
          10,
          11,
          12,
          19,
          21
        ],
        "hits": 3
      },
      {
        "date": "2026-10-04",
        "selected": [
          10,
          19,
          25,
          4,
          9,
          33,
          21,
          28
        ],
        "actual": [
          1,
          2,
          15,
          17,
          21,
          28,
          30,
          31
        ],
        "hits": 2
      }
    ],
    "v2": [
      {
        "date": "2026-09-26",
        "selected": [
          35,
          25,
          28,
          15,
          2,
          26,
          7,
          36
        ],
        "actual": [
          1,
          5,
          7,
          10,
          14,
          18,
          22,
          35
        ],
        "hits": 2
      },
      {
        "date": "2026-09-27",
        "selected": [
          10,
          5,
          31,
          15,
          4,
          24,
          1,
          20
        ],
        "actual": [
          2,
          10,
          14,
          15,
          20,
          21,
          31,
          33
        ],
        "hits": 4
      },
      {
        "date": "2026-09-30",
        "selected": [
          16,
          36,
          21,
          12,
          22,
          30,
          3,
          14
        ],
        "actual": [
          10,
          11,
          20,
          24,
          32,
          33,
          34,
          36
        ],
        "hits": 1
      },
      {
        "date": "2026-10-03",
        "selected": [
          30,
          29,
          32,
          18,
          13,
          31,
          17,
          1
        ],
        "actual": [
          3,
          7,
          8,
          10,
          11,
          12,
          19,
          21
        ],
        "hits": 0
      },
      {
        "date": "2026-10-04",
        "selected": [
          23,
          11,
          35,
          8,
          28,
          16,
          20,
          30
        ],
        "actual": [
          1,
          2,
          15,
          17,
          21,
          28,
          30,
          31
        ],
        "hits": 2
      }
    ],
    "v3": [
      {
        "date": "2026-09-26",
        "selected": [
          25,
          28,
          9,
          19,
          10,
          36,
          30,
          33
        ],
        "actual": [
          1,
          5,
          7,
          10,
          14,
          18,
          22,
          35
        ],
        "hits": 1,
        "guard": 0.5
      },
      {
        "date": "2026-09-27",
        "selected": [
          10,
          25,
          28,
          9,
          19,
          36,
          35,
          30
        ],
        "actual": [
          2,
          10,
          14,
          15,
          20,
          21,
          31,
          33
        ],
        "hits": 1,
        "guard": 0.5
      },
      {
        "date": "2026-09-30",
        "selected": [
          10,
          25,
          28,
          9,
          33,
          19,
          36,
          30
        ],
        "actual": [
          10,
          11,
          20,
          24,
          32,
          33,
          34,
          36
        ],
        "hits": 3,
        "guard": 0.5
      },
      {
        "date": "2026-10-03",
        "selected": [
          10,
          33,
          36,
          25,
          9,
          28,
          19,
          35
        ],
        "actual": [
          3,
          7,
          8,
          10,
          11,
          12,
          19,
          21
        ],
        "hits": 2,
        "guard": 0.5
      },
      {
        "date": "2026-10-04",
        "selected": [
          10,
          19,
          9,
          33,
          25,
          28,
          36,
          35
        ],
        "actual": [
          1,
          2,
          15,
          17,
          21,
          28,
          30,
          31
        ],
        "hits": 1,
        "guard": 0.5
      }
    ]
  },
  "methods": {
    "v1": [
      "Uses only past Magnum Life main-number history.",
      "60-draw rolling frequency.",
      "30% shrinkage toward uniform probability 8/36.",
      "Chronological holdouts used; 2026 did not beat baseline."
    ],
    "v2": [
      "Confirmed same-draw relationship between Life numbers and literal 01–36 leading prefixes of Magnum 4D results.",
      "Structural logistic model uses Top-3, Special and Consolation prefix indicators.",
      "Strongest historical effect comes from Consolation prefixes.",
      "Pre-draw 4D digit/prefix forecasting did not show a stable proper-score edge."
    ],
    "v3": [
      "Uses only information available before each Life draw.",
      "Combines 10, 20, 30, 50, 60, 100 and all-to-date rolling frequency experts plus a fair 8/36 expert.",
      "Expert weights adapt using cumulative Brier loss; poor horizons lose weight automatically.",
      "A 30-draw calibration guardrail reduces confidence when recent raw ensemble Brier is worse than the uniform benchmark.",
      "2019 and the recent 65-draw 2026 evaluation still fail the deployment gate, so V3 remains research-only."
    ]
  },
  "dataUsed": {
    "cutoff": "2026-10-04",
    "rowLevelDraws": 416,
    "development1819": {
      "draws": 291,
      "from": "2018-04-25",
      "to": "2019-12-29",
      "note": "124 draws in 2018 + 167 draws in 2019"
    },
    "recent2026": {
      "draws": 125,
      "from": "2026-01-03",
      "to": "2026-10-04",
      "note": "First 60 used as recent-regime warm-up; next 65 form the comparable V1/V3 recent holdout."
    },
    "v2Paired": {
      "draws": 416,
      "note": "Paired Life + same-draw 4D records used for V2 structural analysis across 2018, 2019 and 2026."
    },
    "v2FourDProcess": {
      "draws": 1050,
      "from": "2020",
      "to": "2026-10-04",
      "note": "Underlying 4D process sample used in the V2 pre-draw digit study."
    },
    "caveat": "The V3 row-level Life ensemble currently uses the reconstructed 2018–2019 and 2026 sequences available in the research package; 2020–2025 Life rows are not used in the V3 rolling ensemble yet."
  },
  "v3": {
    "deploymentGate": {
      "status": "NO_VERIFIED_EDGE",
      "reason": "The 2026 chronological holdout does not beat the fair 8/36 baseline with statistical significance and proper-score improvement."
    },
    "parameters": {
      "experts": [
        "10",
        "20",
        "30",
        "50",
        "60",
        "100",
        "all",
        "uniform"
      ],
      "eta": 5,
      "shrink": 0.3,
      "guard_window": 30,
      "guard_low": 0.5,
      "description": "Adaptive multi-horizon Life-frequency ensemble with a uniform expert and a recent-calibration guardrail."
    },
    "currentWeights": {
      "10": 0.06099869406199405,
      "20": 0.09788074751667993,
      "30": 0.11667676639519782,
      "50": 0.1264067464485142,
      "60": 0.12639524004884198,
      "100": 0.1317631226450454,
      "all": 0.13272144980809325,
      "uniform": 0.20715723307563333
    },
    "currentGuard": 0.5,
    "recentRawBrier30": 0.1731833712565482,
    "uniformBrier": 0.1728395061728395
  }
};
