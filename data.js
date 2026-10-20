window.MODEL_DATA = {
  "meta": {
    "title": "Magnum Life Forecast Lab",
    "dataCutoff": "2026-10-18",
    "generated": "2026-10-20",
    "baselineHits": 1.7777777777777777,
    "baselineRate": 0.2222222222222222,
    "modelVersion": "V6"
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
    },
    "v4": {
      "code": "UNIFORM_BASELINE_ONLY",
      "label": "No pre-draw 4D-process candidate passed validation",
      "tone": "danger"
    },
    "v5": {
      "code": "PROSPECTIVE_WATCH_ONLY",
      "label": "Exogenous candidate blocked; prospective registry started",
      "tone": "warning"
    },
    "v6": {
      "code": "NEGATIVE_EXPECTED_RETURN",
      "label": "Economic gate failed",
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
    },
    {
      "model": "V4",
      "period": "2026 blocked bridge",
      "type": "Pre-draw research bridge · not deployed",
      "draws": 125,
      "meanHits": 1.84,
      "rate": 0.23,
      "p": 0.26703559356536266,
      "brier": 0.17282810380812164,
      "logloss": 0.5296733552672912
    },
    {
      "model": "V5",
      "period": "2026 blocked exogenous bridge",
      "type": "Pre-draw exogenous research bridge · not deployed",
      "draws": 126,
      "meanHits": 1.9126984126984128,
      "rate": 0.2390873015873016,
      "p": 0.08172338262648512,
      "brier": 0.1728324043552914,
      "logloss": 0.5296858663093739
    },
    {
      "model": "V6",
      "period": "Current economic screen",
      "type": "Expected-value gate",
      "draws": 126,
      "meanHits": 1.9126984126984128,
      "rate": 0.2390873015873016,
      "p": 0.08172338262648512,
      "brier": 0.1728324043552914,
      "logloss": 0.5296858663093739
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
          "number": 19,
          "score": 0.2555555555555556
        },
        {
          "number": 25,
          "score": 0.2555555555555556
        },
        {
          "number": 10,
          "score": 0.25055555555555553
        },
        {
          "number": 35,
          "score": 0.24555555555555558
        },
        {
          "number": 21,
          "score": 0.2405555555555556
        },
        {
          "number": 33,
          "score": 0.2405555555555556
        },
        {
          "number": 4,
          "score": 0.2355555555555556
        },
        {
          "number": 9,
          "score": 0.2355555555555556
        },
        {
          "number": 28,
          "score": 0.2355555555555556
        },
        {
          "number": 2,
          "score": 0.23055555555555557
        },
        {
          "number": 36,
          "score": 0.23055555555555557
        },
        {
          "number": 1,
          "score": 0.22555555555555554
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
          "number": 30,
          "score": 0.23763655001859524
        },
        {
          "number": 29,
          "score": 0.23301950631918172
        },
        {
          "number": 35,
          "score": 0.23190166064030002
        },
        {
          "number": 11,
          "score": 0.2283709930939339
        },
        {
          "number": 28,
          "score": 0.22708076544986452
        },
        {
          "number": 32,
          "score": 0.22670757654210943
        },
        {
          "number": 5,
          "score": 0.22670054932613826
        },
        {
          "number": 25,
          "score": 0.2259480281780853
        },
        {
          "number": 18,
          "score": 0.2255627597506853
        },
        {
          "number": 17,
          "score": 0.22497955923785776
        },
        {
          "number": 33,
          "score": 0.22477450208029195
        },
        {
          "number": 16,
          "score": 0.22420448925197076
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
          "score": 0.23515746110541613
        },
        {
          "number": 25,
          "score": 0.23377399112323416
        },
        {
          "number": 19,
          "score": 0.231728877138328
        },
        {
          "number": 35,
          "score": 0.23061309494877977
        },
        {
          "number": 21,
          "score": 0.23010987627947246
        },
        {
          "number": 28,
          "score": 0.22982890989548213
        },
        {
          "number": 15,
          "score": 0.22893559675385358
        },
        {
          "number": 9,
          "score": 0.22890221367952088
        },
        {
          "number": 33,
          "score": 0.2280026617578158
        },
        {
          "number": 36,
          "score": 0.22682539098743723
        },
        {
          "number": 22,
          "score": 0.22604667245127993
        },
        {
          "number": 2,
          "score": 0.2258722629669965
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
    },
    "v4": {
      "label": "V4 gated deployment output",
      "description": "Validation-report policy is enforced: because no non-uniform 4D-process model beat the fair benchmark on locked year-by-year proper scores, V4 issues no ranked deployment set. Every Life number remains at the fair marginal probability 8/36 = 22.22%.",
      "sets": [],
      "top12": [],
      "uniformProbability": 0.2222222222222222,
      "deployment": "UNIFORM_BASELINE_ONLY",
      "researchCandidate": "long_a200",
      "researchNote": "The blocked long-history Bayesian prefix bridge is retained only for diagnostics; it is not a deployable forecast."
    },
    "v5": {
      "label": "V5 prospective deployment output",
      "description": "V5 tests only publicly observable pre-draw process variables. The selected exogenous candidate fails the upstream 4D validation gate, so deployment remains the fair 8/36 baseline and no ranked betting set is issued.",
      "sets": [],
      "top12": [],
      "uniformProbability": 0.2222222222222222,
      "deployment": "UNIFORM_BASELINE_ONLY",
      "prospectiveRegistryStarted": true,
      "nextRegisteredDraw": "2026-10-10",
      "researchCandidate": "month_a500_l0.25",
      "researchNote": "Month-conditioned hierarchical 4D-prefix probabilities are retained only as a prospective watch candidate."
    },
    "v6": {
      "label": "21 Oct 2026 · V6 research Grand Prize ranking",
      "description": "Five exact 8-number sets ranked by the current family-balanced V1–V5 research consensus and priced by the V6 economic gate. These are frozen research forecasts, not a positive-EV deployment.",
      "sets": [
        {
          "id": 1,
          "numbers": [
            10,
            19,
            21,
            25,
            28,
            30,
            33,
            35
          ],
          "score": 4.7317517079761104e-8
        },
        {
          "id": 2,
          "numbers": [
            9,
            10,
            19,
            21,
            25,
            28,
            33,
            35
          ],
          "score": 4.7314226735873097e-8
        },
        {
          "id": 3,
          "numbers": [
            9,
            10,
            19,
            25,
            28,
            30,
            33,
            35
          ],
          "score": 4.702753768995403e-8
        },
        {
          "id": 4,
          "numbers": [
            4,
            10,
            19,
            21,
            25,
            28,
            33,
            35
          ],
          "score": 4.694343974382816e-8
        },
        {
          "id": 5,
          "numbers": [
            9,
            10,
            19,
            21,
            25,
            28,
            30,
            35
          ],
          "score": 4.679595571798509e-8
        }
      ],
      "top12": [
        {
          "number": 25,
          "score": 0.2332421904044978
        },
        {
          "number": 19,
          "score": 0.23302525146207834
        },
        {
          "number": 35,
          "score": 0.23296912667218767
        },
        {
          "number": 10,
          "score": 0.23231469225546908
        },
        {
          "number": 28,
          "score": 0.22893506219420318
        },
        {
          "number": 33,
          "score": 0.22835755612640132
        },
        {
          "number": 21,
          "score": 0.2274635849880599
        },
        {
          "number": 30,
          "score": 0.22636646040491556
        },
        {
          "number": 9,
          "score": 0.22635392961075781
        },
        {
          "number": 4,
          "score": 0.22493949324828472
        },
        {
          "number": 15,
          "score": 0.22433548427828548
        },
        {
          "number": 36,
          "score": 0.22397528504982078
        }
      ],
      "deployment": "NO_BET_POSITIVE_EV_NOT_ESTABLISHED",
      "uniformProbability": 0.2222222222222222,
      "nextDraw": "2026-10-21"
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
    ],
    "v4": [
      {
        "date": "2026-09-26",
        "selected": [
          29,
          15,
          30,
          35,
          5,
          26,
          28,
          4
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
        "hits": 2,
        "blocked": true
      },
      {
        "date": "2026-09-27",
        "selected": [
          15,
          29,
          35,
          30,
          5,
          28,
          26,
          4
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
        "blocked": true
      },
      {
        "date": "2026-09-30",
        "selected": [
          15,
          29,
          35,
          30,
          5,
          28,
          26,
          4
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
        "hits": 0,
        "blocked": true
      },
      {
        "date": "2026-10-03",
        "selected": [
          15,
          29,
          30,
          35,
          5,
          28,
          26,
          4
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
        "hits": 0,
        "blocked": true
      },
      {
        "date": "2026-10-04",
        "selected": [
          15,
          29,
          30,
          35,
          5,
          28,
          26,
          4
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
        "hits": 3,
        "blocked": true
      }
    ],
    "v5": [
      {
        "date": "2026-09-27",
        "selected": [
          30,
          35,
          28,
          4,
          15,
          26,
          3,
          29
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
        "blocked": true
      },
      {
        "date": "2026-09-30",
        "selected": [
          30,
          35,
          28,
          4,
          15,
          26,
          5,
          3
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
        "hits": 0,
        "blocked": true
      },
      {
        "date": "2026-10-03",
        "selected": [
          35,
          30,
          5,
          26,
          15,
          12,
          28,
          4
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
        "hits": 1,
        "blocked": true
      },
      {
        "date": "2026-10-04",
        "selected": [
          35,
          30,
          5,
          26,
          15,
          29,
          12,
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
        "hits": 3,
        "blocked": true
      },
      {
        "date": "2026-10-07",
        "selected": [
          35,
          30,
          5,
          26,
          28,
          15,
          29,
          12
        ],
        "actual": [
          6,
          12,
          15,
          19,
          21,
          23,
          24,
          35
        ],
        "hits": 3,
        "blocked": true
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
    ],
    "v4": [
      "Objective follows the independent validation recommendation: search for genuinely pre-draw information in the underlying 4D process, not more Life-history complexity.",
      "Uses 1,050 chronological 4D draws from 2020-01-01 through 2026-10-04 and tests leading-prefix behavior by prize category.",
      "Candidate families include Bayesian long-history frequencies, rolling recency, short/long regime blends, weekday-conditioned models, and regularized serial-feature logistic models.",
      "2024 is used for model selection, 2025 for confirmation, and 2026 as the locked final test. Uniform 00–99 prefix probabilities are always retained as the null model.",
      "The best non-uniform prefix candidate was worse than uniform in 2024, 2025 and 2026, so the deployment layer is forced back to uniform 8/36 Life probabilities.",
      "A research-only 4D→Life bridge is displayed separately; it cannot pass the gate merely because its 2026 Top-8 average happened to exceed 1.778."
    ],
    "v5": [
      "Objective follows the independent validation report: add genuinely exogenous pre-draw process information rather than more historical Life-number complexity.",
      "Publicly observable inputs tested include Special-vs-regular draw status, exact draw day, days since the previous draw, back-to-back draw state, recent 7-day draw density, month, quarter, and hierarchical interactions.",
      "Magnum's published process fixes normal draws to Wednesday/Saturday/Sunday, Special Draws usually to Tuesday, all draws at 7pm in the same auditorium, with randomly selected public participants and electromechanical drums.",
      "200 hierarchical exogenous configurations are evaluated. Hyperparameters are selected on 2024, checked on 2025, and finally tested on 2026.",
      "No public machine ID, ball-set rotation, maintenance log, or equipment-change series was found, so V5 cannot test the strongest physical-process covariates recommended by the validator.",
      "The selected month-conditioned candidate is worse than uniform upstream in every locked year. Its 2026 Life bridge reaches 1.913 hits but p≈0.082, so it is blocked and moved into prospective monitoring only."
    ],
    "v6": [
      "Uses the V5 pre-draw marginal probability vector only as a research input; no additional outcome-history tuning is added.",
      "Builds a coherent fixed-size 8-of-36 conditional-Bernoulli set distribution whose marginal inclusion probabilities match the V5 vector.",
      "Assumes no validated bonus-number edge, so the two bonus numbers are conditionally uniform among the 28 non-main numbers.",
      "Prices the official straight-play prize table, including double payouts when both bonus numbers match the 4th/6th/8th categories.",
      "Applies both nominal-value and present-value economic gates. Positive expected return is not declared unless a conservative lower bound exceeds RM1 per RM1 stake.",
      "Current V5 research probabilities imply only RM0.598 nominal EV and about RM0.508 PV-adjusted EV for the top-ranked ticket, so V6 blocks deployment."
    ]
  },
  "dataUsed": {
    "cutoff": "2026-10-18",
    "rowLevelDraws": 422,
    "development1819": {
      "draws": 291,
      "from": "2018-04-25",
      "to": "2019-12-29",
      "note": "124 draws in 2018 + 167 draws in 2019"
    },
    "recent2026": {
      "draws": 131,
      "from": "2026-01-03",
      "to": "2026-10-18",
      "note": "Current reconstructed 2026 Life sequence used for V1/V3 live forecast state."
    },
    "v2Paired": {
      "draws": 422,
      "note": "Paired Life + same-draw 4D records used for V2 structural analysis across 2018, 2019 and 2026."
    },
    "v2FourDProcess": {
      "draws": 1056,
      "from": "2020",
      "to": "2026-10-18",
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
      "10": 0.060559304746105116,
      "20": 0.09606656940676458,
      "30": 0.11421955864362442,
      "50": 0.12694943542885107,
      "60": 0.1265076211050153,
      "100": 0.13256345793720498,
      "all": 0.13363463066032516,
      "uniform": 0.20949942207210934
    },
    "currentGuard": 0.5,
    "recentRawBrier30": 0.17295599254725438,
    "uniformBrier": 0.1728395061728395
  },
  "v4": {
    "objective": "Information discovery in pre-draw 4D process variables, with hard fallback to the fair Life baseline when proper-score validation fails.",
    "cutoff": "2026-10-18",
    "data": {
      "fourDDraws": 1056,
      "fourDFrom": "2020-01-01",
      "fourDTo": "2026-10-18",
      "lifeBridgeDraws2026": 131,
      "yearCounts": {
        "2020": 126,
        "2021": 126,
        "2022": 179,
        "2023": 165,
        "2024": 164,
        "2025": 165,
        "2026": 131
      }
    },
    "candidateSearch": {
      "nonUniformConfigurations": 53,
      "families": [
        "Bayesian long-history prefix frequency",
        "rolling recent prefix frequency",
        "short/long regime blend",
        "weekday-conditioned hierarchical frequency",
        "regularized serial-feature logistic"
      ],
      "selectionYear": 2024,
      "confirmationYear": 2025,
      "finalTestYear": 2026,
      "selectedResearchCandidate": "long_a200"
    },
    "prefixValidation": {
      "metric": "100-class leading-prefix categorical prediction across Top-3, Special and Consolation 4D groups",
      "uniform": {
        "2024": {
          "logloss": 4.60517018598808,
          "brier": 0.99
        },
        "2025": {
          "logloss": 4.60517018598808,
          "brier": 0.99
        },
        "2026": {
          "logloss": 4.605170185988082,
          "brier": 0.9899999999999978
        }
      },
      "bestNonUniform": {
        "2024": {
          "logloss": 4.61582063432249,
          "brier": 0.9902068481533502,
          "deltaLogloss": 0.010650448334409646,
          "deltaBrier": 0.0002068481533501476
        },
        "2025": {
          "logloss": 4.611906276598083,
          "brier": 0.990128551672329,
          "deltaLogloss": 0.0067360906100031315,
          "deltaBrier": 0.00012855167232894704
        },
        "2026": {
          "logloss": 4.611493910842934,
          "brier": 0.9901227405337123,
          "deltaLogloss": 0.0063237248548517755,
          "deltaBrier": 0.0001227405337145271
        },
        "name": "long_a200"
      },
      "regularizedLogistic": {
        "interpretation": "Serial, recency, weekday and category features did not improve locked-year proper scores; the family was rejected."
      }
    },
    "researchBridge": {
      "status": "BLOCKED_DIAGNOSTIC",
      "draws": 125,
      "meanHits": 1.84,
      "hitRate": 0.23,
      "pOneSided": 0.26703559356536266,
      "brier": 0.17282810380812164,
      "logloss": 0.5296733552672912,
      "uniform": {
        "meanHits": 1.7777777777777777,
        "brier": 0.1728395061728395,
        "logloss": 0.5297061990576545
      },
      "currentTop12": [
        {
          "number": 30,
          "score": 0.22559760412910543
        },
        {
          "number": 29,
          "score": 0.22544356423551365
        },
        {
          "number": 15,
          "score": 0.22528634312198753
        },
        {
          "number": 35,
          "score": 0.22508172359244769
        },
        {
          "number": 5,
          "score": 0.2248742532854811
        },
        {
          "number": 28,
          "score": 0.224517738520689
        },
        {
          "number": 26,
          "score": 0.22444871039288775
        },
        {
          "number": 4,
          "score": 0.22360242574398018
        },
        {
          "number": 3,
          "score": 0.22299669720805607
        },
        {
          "number": 19,
          "score": 0.22277999685694588
        },
        {
          "number": 18,
          "score": 0.2227492679341696
        },
        {
          "number": 10,
          "score": 0.22262269904742163
        }
      ],
      "currentResearchSets": [
        {
          "id": 1,
          "numbers": [
            15,
            29,
            30,
            35,
            5,
            28,
            26,
            4
          ],
          "score": 0.2248648660505523
        },
        {
          "id": 2,
          "numbers": [
            3,
            19,
            10,
            8,
            18,
            22,
            11,
            12
          ],
          "score": 0.22261020495726164
        },
        {
          "id": 3,
          "numbers": [
            16,
            1,
            21,
            24,
            6,
            36,
            9,
            13
          ],
          "score": 0.22165870335638058
        },
        {
          "id": 4,
          "numbers": [
            23,
            32,
            33,
            7,
            2,
            34,
            31,
            17
          ],
          "score": 0.22093996421913534
        },
        {
          "id": 5,
          "numbers": [
            20,
            14,
            25,
            15,
            29,
            30,
            35,
            27
          ],
          "score": 0.2225945861899177
        }
      ]
    },
    "deploymentGate": {
      "status": "UNIFORM_BASELINE_ONLY",
      "reason": "No non-uniform 4D-process candidate improves proper scores on multiple locked eras; the 2026 research bridge lift is not statistically significant.",
      "deployedProbabilityPerNumber": 0.2222222222222222,
      "rankedSetsIssued": false
    }
  },
  "v5": {
    "objective": "Test legitimate public exogenous/process information and start immutable prospective validation. Do not deploy a ranked forecast unless the upstream 4D process model itself beats uniform on locked proper scores.",
    "cutoff": "2026-10-18",
    "publicProcessMetadata": {
      "regularDrawDays": [
        "Wednesday",
        "Saturday",
        "Sunday"
      ],
      "specialDrawDay": "Tuesday (usually, subject to approval)",
      "drawTime": "19:00 MYT",
      "location": "Wisma Magnum draw auditorium, Kuala Lumpur",
      "mechanism": "23 winning numbers from see-through electromechanical drums operated via remote control by randomly selected public participants",
      "unavailablePublicFields": [
        "machine/drum identifier by draw",
        "ball-set identifier/rotation",
        "maintenance or replacement log",
        "equipment calibration log",
        "operator/participant identity linked to output",
        "documented machine-change dates"
      ]
    },
    "data": {
      "fourDDraws": 1056,
      "fourDFrom": "2020-01-01",
      "fourDTo": "2026-10-18",
      "yearCounts": {
        "2020": 126,
        "2021": 126,
        "2022": 179,
        "2023": 165,
        "2024": 164,
        "2025": 165,
        "2026": 131
      },
      "specialDraws": 75,
      "regularDraws": 976,
      "lifeBridgeDraws2026": 131
    },
    "candidateSearch": {
      "configurations": 200,
      "alphaGrid": [
        20,
        50,
        100,
        200,
        500
      ],
      "stateBlendGrid": [
        0.25,
        0.5,
        0.75,
        1
      ],
      "stateFamilies": [
        "special",
        "weekday",
        "gap",
        "back-to-back",
        "7-day density",
        "month",
        "quarter",
        "weekday×gap",
        "special×gap",
        "special×month"
      ],
      "selectedOn2024": "month_a500_l0.25"
    },
    "prefixValidation": {
      "uniform": {
        "2024": {
          "logloss": 4.60517018598808,
          "brier": 0.9900000000000001
        },
        "2025": {
          "logloss": 4.60517018598808,
          "brier": 0.9900000000000001
        },
        "2026": {
          "logloss": 4.605170185988082,
          "brier": 0.9899999999999977
        }
      },
      "selected": {
        "2024": {
          "logloss": 4.6138151695284995,
          "brier": 0.9901724060921245,
          "deltaLogloss": 0.008644983540419322,
          "deltaBrier": 0.0001724060921243847
        },
        "2025": {
          "logloss": 4.609626680266965,
          "brier": 0.9900869476706682,
          "deltaLogloss": 0.004456494278884726,
          "deltaBrier": 0.00008694767066808007
        },
        "2026": {
          "logloss": 4.611625017718023,
          "brier": 0.9901245906913441,
          "deltaLogloss": 0.00645483172994199,
          "deltaBrier": 0.0001245906913463759
        },
        "name": "month_a500_l0.25"
      },
      "bestSpecialOnly": {
        "2024": {
          "logloss": 4.614080478076823,
          "brier": 0.9901723317132404
        },
        "2025": {
          "logloss": 4.612838337063369,
          "brier": 0.9901498407217965
        },
        "2026": {
          "logloss": 4.610462969259159,
          "brier": 0.9901028744696092
        },
        "name": "special_a500_l0.5"
      },
      "conclusion": "Every tested public exogenous state remains worse than the uniform 00–99 prefix model on proper scoring."
    },
    "researchBridge": {
      "status": "PROSPECTIVE_WATCH_ONLY",
      "draws": 126,
      "meanHits": 1.9126984126984128,
      "hitRate": 0.2390873015873016,
      "pOneSided": 0.08172338262648512,
      "brier": 0.1728324043552914,
      "logloss": 0.5296858663093739,
      "uniform": {
        "meanHits": 1.7777777777777777,
        "brier": 0.1728395061728395,
        "logloss": 0.5297061990576545
      },
      "currentTop12": [
        {
          "number": 35,
          "score": 0.2265784000438757
        },
        {
          "number": 30,
          "score": 0.22586474769187886
        },
        {
          "number": 5,
          "score": 0.22452446881515847
        },
        {
          "number": 26,
          "score": 0.22426778347206608
        },
        {
          "number": 29,
          "score": 0.22404487892727992
        },
        {
          "number": 28,
          "score": 0.2239351710181095
        },
        {
          "number": 15,
          "score": 0.22386759753713156
        },
        {
          "number": 12,
          "score": 0.2237477436336061
        },
        {
          "number": 18,
          "score": 0.22369940716821274
        },
        {
          "number": 4,
          "score": 0.2234496070303002
        },
        {
          "number": 16,
          "score": 0.2233361213459356
        },
        {
          "number": 22,
          "score": 0.2232000621291703
        }
      ],
      "blockedTop8": [
        35,
        30,
        26,
        5,
        28,
        15,
        29,
        12
      ]
    },
    "prospective": {
      "registry": "research/prospective/v5_registry.jsonl",
      "firstFrozenDraw": "2026-10-10",
      "reviewMilestones": [
        50,
        100,
        200
      ],
      "deploymentProbabilityEach": 0.2222222222222222,
      "rankedDeploymentSet": null,
      "nextFrozenDraw": "2026-10-21"
    },
    "deploymentGate": {
      "status": "UNIFORM_BASELINE_ONLY",
      "reason": "The selected public exogenous 4D process model is worse than uniform on 2024, 2025 and 2026 proper scores; the downstream Life lift is not significant after the required validation standard.",
      "deployedProbabilityPerNumber": 0.2222222222222222,
      "rankedSetsIssued": false
    }
  },
  "v6": {
    "objective": "Do not label the model usable until a conservative expected-return calculation exceeds RM1 per RM1 ticket and the predictive edge has already passed prospective statistical validation.",
    "prizeModel": {
      "stake": 1,
      "grandNominal": 7300000,
      "secondNominal": 100000,
      "third": 6000,
      "fourthPerBonus": 600,
      "fifth": 100,
      "sixthPerBonus": 30,
      "seventh": 10,
      "eighthPerBonus": 5,
      "grandPV45": 4853648,
      "secondPV45": 99393,
      "sharingAndCaps": "Not credited in the base positive-EV claim; current EV is already below RM1 before additional sharing/cap haircuts."
    },
    "distributionModel": {
      "type": "fixed-size conditional Bernoulli / maximum-entropy set model",
      "ticket": [
        10,
        19,
        21,
        25,
        28,
        30,
        33,
        35
      ],
      "currentExpectedHits": 1.8426739245127928,
      "currentExact8Probability": 4.7317517079761104e-8,
      "currentExact8Odds": 21133822.403799653,
      "fairExact8Odds": 30260340,
      "exact8Lift": 1.431844154789378
    },
    "currentEconomics": {
      "fairNominalEV": 0.5501610358641047,
      "fairPV45EV": 0.468996581003386,
      "modelNominalEV": 0.7308381667042628,
      "modelPV45EV": 0.6146491553492157,
      "nominalReturnPct": -26.91618332957372,
      "pv45ReturnPct": -38.53508446507843,
      "nominalLiftVsFair": 1.087263498503513,
      "pvLiftVsFair": 1.0829124658329456
    },
    "breakEvenStress": {
      "interpretation": "Scale the current deviation from 8/36 while preserving its ranking pattern, then solve for EV=RM1.",
      "nominal": {
        "signalMultiplier": 7.223696575486645,
        "impliedExpectedHits": 1.91541495016312,
        "meanTop8MarginalProbability": 0.2394268687676081,
        "exact8Odds": 14349020.419993
      },
      "pv45": {
        "signalMultiplier": 9.6427944807288,
        "impliedExpectedHits": 1.9615073893736934,
        "meanTop8MarginalProbability": 0.24518842367006746,
        "exact8Odds": 11306534.71545661
      }
    },
    "confidenceGate": {
      "status": "FAIL",
      "required": [
        "upstream pre-draw process model beats uniform on locked Brier and log loss",
        "prospective performance persists across at least 50, preferably 100–200 future draws",
        "multiplicity-adjusted statistical evidence",
        "nominal EV > RM1",
        "PV-adjusted EV > RM1",
        "conservative lower confidence bound on EV > RM1 after model uncertainty and prize-sharing/cap assumptions"
      ],
      "currentReason": "The current research vector is only modestly better than fair on ranking and remains deeply negative-EV."
    }
  },
  "currentForecast": {
    "drawDate": "2026-10-21",
    "drawNo": "438/26",
    "frozenAt": "2026-10-20T19:13:00+08:00",
    "dataCutoff": "2026-10-18",
    "framework": "Family-balanced V1–V5 research consensus; V6 economic gate",
    "fairExactSetProbability": 3.3046555326212464e-8,
    "fairExactSetOdds": 30260340,
    "sets": [
      {
        "rank": 1,
        "numbers": [
          10,
          19,
          21,
          25,
          28,
          30,
          33,
          35
        ],
        "exactGrandProb": 4.7317517079761104e-8,
        "odds": 21133822.349857096,
        "liftVsFair": 1.431844154789378
      },
      {
        "rank": 2,
        "numbers": [
          9,
          10,
          19,
          21,
          25,
          28,
          33,
          35
        ],
        "exactGrandProb": 4.7314226735873097e-8,
        "odds": 21135292.04614078,
        "liftVsFair": 1.43174458786461
      },
      {
        "rank": 3,
        "numbers": [
          9,
          10,
          19,
          25,
          28,
          30,
          33,
          35
        ],
        "exactGrandProb": 4.702753768995403e-8,
        "odds": 21264136.910438728,
        "liftVsFair": 1.4230692798608235
      },
      {
        "rank": 4,
        "numbers": [
          4,
          10,
          19,
          21,
          25,
          28,
          33,
          35
        ],
        "exactGrandProb": 4.694343974382816e-8,
        "odds": 21302231.05628884,
        "liftVsFair": 1.420524447417753
      },
      {
        "rank": 5,
        "numbers": [
          9,
          10,
          19,
          21,
          25,
          28,
          30,
          35
        ],
        "exactGrandProb": 4.679595571798509e-8,
        "odds": 21369368.028863017,
        "liftVsFair": 1.4160615306511728
      }
    ],
    "consensusTop12": [
      {
        "number": 25,
        "score": 0.2332421904044978
      },
      {
        "number": 19,
        "score": 0.23302525146207834
      },
      {
        "number": 35,
        "score": 0.23296912667218767
      },
      {
        "number": 10,
        "score": 0.23231469225546908
      },
      {
        "number": 28,
        "score": 0.22893506219420318
      },
      {
        "number": 33,
        "score": 0.22835755612640132
      },
      {
        "number": 21,
        "score": 0.2274635849880599
      },
      {
        "number": 30,
        "score": 0.22636646040491556
      },
      {
        "number": 9,
        "score": 0.22635392961075781
      },
      {
        "number": 4,
        "score": 0.22493949324828472
      },
      {
        "number": 15,
        "score": 0.22433548427828548
      },
      {
        "number": 36,
        "score": 0.22397528504982078
      }
    ],
    "consensusVector": [
      0.2209397057359779,
      0.2236281417222597,
      0.22141253753185874,
      0.22493949324828472,
      0.22095250827177443,
      0.21780320313774648,
      0.21582782472303944,
      0.2218297591843485,
      0.22635392961075781,
      0.23231469225546908,
      0.21954364506128457,
      0.22081150662935037,
      0.2164202034875609,
      0.21766980868158883,
      0.22433548427828548,
      0.22046300663466106,
      0.21783709618163336,
      0.22123251622127768,
      0.23302525146207834,
      0.22279053942313948,
      0.2274635849880599,
      0.22295323338970893,
      0.22085979497891284,
      0.22194468008584292,
      0.2332421904044978,
      0.21182590797793688,
      0.21986139303473787,
      0.22893506219420318,
      0.21228338426174528,
      0.22636646040491556,
      0.21370909733635246,
      0.21672230590888136,
      0.22835755612640132,
      0.21840008370341707,
      0.23296912667218767,
      0.22397528504982078
    ],
    "economics": {
      "nominalEV": 0.7308381667042628,
      "pv45EV": 0.6146491553492157,
      "nominalReturnPct": -26.91618332957372,
      "pv45ReturnPct": -38.53508446507843,
      "expectedTop8Hits": 1.8426739245127928,
      "exact8OddsTopSet": 21133822.403799653,
      "gate": "NEGATIVE_EXPECTED_RETURN"
    },
    "modelTop12": {
      "v1": [
        {
          "number": 19,
          "score": 0.2555555555555556
        },
        {
          "number": 25,
          "score": 0.2555555555555556
        },
        {
          "number": 10,
          "score": 0.25055555555555553
        },
        {
          "number": 35,
          "score": 0.24555555555555558
        },
        {
          "number": 21,
          "score": 0.2405555555555556
        },
        {
          "number": 33,
          "score": 0.2405555555555556
        },
        {
          "number": 4,
          "score": 0.2355555555555556
        },
        {
          "number": 9,
          "score": 0.2355555555555556
        },
        {
          "number": 28,
          "score": 0.2355555555555556
        },
        {
          "number": 2,
          "score": 0.23055555555555557
        },
        {
          "number": 36,
          "score": 0.23055555555555557
        },
        {
          "number": 1,
          "score": 0.22555555555555554
        }
      ],
      "v2": [
        {
          "number": 30,
          "score": 0.23763655001859524
        },
        {
          "number": 29,
          "score": 0.23301950631918172
        },
        {
          "number": 35,
          "score": 0.23190166064030002
        },
        {
          "number": 11,
          "score": 0.2283709930939339
        },
        {
          "number": 28,
          "score": 0.22708076544986452
        },
        {
          "number": 32,
          "score": 0.22670757654210943
        },
        {
          "number": 5,
          "score": 0.22670054932613826
        },
        {
          "number": 25,
          "score": 0.2259480281780853
        },
        {
          "number": 18,
          "score": 0.2255627597506853
        },
        {
          "number": 17,
          "score": 0.22497955923785776
        },
        {
          "number": 33,
          "score": 0.22477450208029195
        },
        {
          "number": 16,
          "score": 0.22420448925197076
        }
      ],
      "v3": [
        {
          "number": 10,
          "score": 0.23515746110541613
        },
        {
          "number": 25,
          "score": 0.23377399112323416
        },
        {
          "number": 19,
          "score": 0.231728877138328
        },
        {
          "number": 35,
          "score": 0.23061309494877977
        },
        {
          "number": 21,
          "score": 0.23010987627947246
        },
        {
          "number": 28,
          "score": 0.22982890989548213
        },
        {
          "number": 15,
          "score": 0.22893559675385358
        },
        {
          "number": 9,
          "score": 0.22890221367952088
        },
        {
          "number": 33,
          "score": 0.2280026617578158
        },
        {
          "number": 36,
          "score": 0.22682539098743723
        },
        {
          "number": 22,
          "score": 0.22604667245127993
        },
        {
          "number": 2,
          "score": 0.2258722629669965
        }
      ],
      "v4": [
        {
          "number": 30,
          "score": 0.22559760412910543
        },
        {
          "number": 29,
          "score": 0.22544356423551365
        },
        {
          "number": 15,
          "score": 0.22528634312198753
        },
        {
          "number": 35,
          "score": 0.22508172359244769
        },
        {
          "number": 5,
          "score": 0.2248742532854811
        },
        {
          "number": 28,
          "score": 0.224517738520689
        },
        {
          "number": 26,
          "score": 0.22444871039288775
        },
        {
          "number": 4,
          "score": 0.22360242574398018
        },
        {
          "number": 3,
          "score": 0.22299669720805607
        },
        {
          "number": 19,
          "score": 0.22277999685694588
        },
        {
          "number": 18,
          "score": 0.2227492679341696
        },
        {
          "number": 10,
          "score": 0.22262269904742163
        }
      ],
      "v5": [
        {
          "number": 35,
          "score": 0.2265784000438757
        },
        {
          "number": 30,
          "score": 0.22586474769187886
        },
        {
          "number": 5,
          "score": 0.22452446881515847
        },
        {
          "number": 26,
          "score": 0.22426778347206608
        },
        {
          "number": 29,
          "score": 0.22404487892727992
        },
        {
          "number": 28,
          "score": 0.2239351710181095
        },
        {
          "number": 15,
          "score": 0.22386759753713156
        },
        {
          "number": 12,
          "score": 0.2237477436336061
        },
        {
          "number": 18,
          "score": 0.22369940716821274
        },
        {
          "number": 4,
          "score": 0.2234496070303002
        },
        {
          "number": 16,
          "score": 0.2233361213459356
        },
        {
          "number": 22,
          "score": 0.2232000621291703
        }
      ]
    }
  },
  "latestResults": [
    {
      "date": "2026-10-10",
      "drawNo": "433/26",
      "main": [
        22,
        23,
        25,
        28,
        30,
        31,
        32,
        36
      ],
      "bonus": [
        4,
        26
      ]
    },
    {
      "date": "2026-10-11",
      "drawNo": "434/26",
      "main": [
        2,
        7,
        14,
        15,
        16,
        22,
        25,
        27
      ],
      "bonus": [
        21,
        26
      ]
    },
    {
      "date": "2026-10-14",
      "drawNo": "435/26",
      "main": [
        6,
        9,
        13,
        14,
        16,
        24,
        26,
        35
      ],
      "bonus": [
        7,
        31
      ]
    },
    {
      "date": "2026-10-17",
      "drawNo": "436/26",
      "main": [
        5,
        8,
        11,
        13,
        14,
        20,
        25,
        27
      ],
      "bonus": [
        2,
        10
      ]
    },
    {
      "date": "2026-10-18",
      "drawNo": "437/26",
      "main": [
        9,
        10,
        19,
        20,
        21,
        22,
        33,
        35
      ],
      "bonus": [
        6,
        18
      ]
    }
  ]
};
