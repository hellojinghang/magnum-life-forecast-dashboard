window.MODEL_DATA = {
  "meta": {
    "title": "Magnum Life Forecast Lab",
    "dataCutoff": "2026-10-04",
    "generated": "2026-10-06",
    "baselineHits": 1.7777777777777777,
    "baselineRate": 0.2222222222222222
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
      "p": 3.83069437e-07,
      "brier": 0.1720549773,
      "logloss": 0.5273599937
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
      "Confirmed same-draw relationship between Life numbers and literal 01\u201336 leading prefixes of Magnum 4D results.",
      "Structural logistic model uses Top-3, Special and Consolation prefix indicators.",
      "Strongest historical effect comes from Consolation prefixes.",
      "Pre-draw 4D digit/prefix forecasting did not show a stable proper-score edge."
    ]
  }
};
