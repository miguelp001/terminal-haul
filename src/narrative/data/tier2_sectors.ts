import { Storylet } from '../storyletTypes';

export const TIER2_SECTOR_STORYLETS: Storylet[] = [
  {
    "id": "sector_northeast_001",
    "title": "Northeast Megalopolis Event: Incident #1",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_001_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_001_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_002",
    "title": "Northeast Megalopolis Event: Incident #2",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_002_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_002_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_003",
    "title": "Northeast Megalopolis Event: Incident #3",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_003_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_003_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_004",
    "title": "Northeast Megalopolis Event: Incident #4",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_004_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_004_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_005",
    "title": "Northeast Megalopolis Event: Incident #5",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_005_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_005_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_006",
    "title": "Northeast Megalopolis Event: Incident #6",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_006_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_006_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_007",
    "title": "Northeast Megalopolis Event: Incident #7",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_007_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_007_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_008",
    "title": "Northeast Megalopolis Event: Incident #8",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_008_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_008_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_009",
    "title": "Northeast Megalopolis Event: Incident #9",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_009_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_009_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_010",
    "title": "Northeast Megalopolis Event: Incident #10",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_010_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_010_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_011",
    "title": "Northeast Megalopolis Event: Incident #11",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_011_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_011_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_012",
    "title": "Northeast Megalopolis Event: Incident #12",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_012_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_012_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_013",
    "title": "Northeast Megalopolis Event: Incident #13",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_013_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_013_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_014",
    "title": "Northeast Megalopolis Event: Incident #14",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_014_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_014_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_northeast_015",
    "title": "Northeast Megalopolis Event: Incident #15",
    "scope": {
      "sectors": [
        "northeast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northeast Megalopolis, you encounter an escalation centered around corporate bureaucracy, acid rain, sub-surface tunnels. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_northeast_015_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_northeast_015_opt2",
        "label": "Trade chips directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_northeast_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_001",
    "title": "Midwest Industrial Rust Event: Incident #1",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_001_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_001_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_002",
    "title": "Midwest Industrial Rust Event: Incident #2",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_002_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_002_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_003",
    "title": "Midwest Industrial Rust Event: Incident #3",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_003_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_003_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_004",
    "title": "Midwest Industrial Rust Event: Incident #4",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_004_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_004_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_005",
    "title": "Midwest Industrial Rust Event: Incident #5",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_005_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_005_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_006",
    "title": "Midwest Industrial Rust Event: Incident #6",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_006_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_006_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_007",
    "title": "Midwest Industrial Rust Event: Incident #7",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_007_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_007_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_008",
    "title": "Midwest Industrial Rust Event: Incident #8",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_008_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_008_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_009",
    "title": "Midwest Industrial Rust Event: Incident #9",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_009_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_009_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_010",
    "title": "Midwest Industrial Rust Event: Incident #10",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_010_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_010_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_011",
    "title": "Midwest Industrial Rust Event: Incident #11",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_011_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_011_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_012",
    "title": "Midwest Industrial Rust Event: Incident #12",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_012_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_012_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_013",
    "title": "Midwest Industrial Rust Event: Incident #13",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_013_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_013_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_014",
    "title": "Midwest Industrial Rust Event: Incident #14",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_014_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_014_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_midwest_015",
    "title": "Midwest Industrial Rust Event: Incident #15",
    "scope": {
      "sectors": [
        "midwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Midwest Industrial Rust, you encounter an escalation centered around automated farm swarms, Rust Belt salvage baronies, heavy haulers. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_midwest_015_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_midwest_015_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_midwest_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_001",
    "title": "Pacific Northwest Cascadia Event: Incident #1",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_001_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_001_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_002",
    "title": "Pacific Northwest Cascadia Event: Incident #2",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_002_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_002_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_003",
    "title": "Pacific Northwest Cascadia Event: Incident #3",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_003_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_003_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_004",
    "title": "Pacific Northwest Cascadia Event: Incident #4",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_004_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_004_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_005",
    "title": "Pacific Northwest Cascadia Event: Incident #5",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_005_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_005_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_006",
    "title": "Pacific Northwest Cascadia Event: Incident #6",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_006_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_006_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_007",
    "title": "Pacific Northwest Cascadia Event: Incident #7",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_007_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_007_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_008",
    "title": "Pacific Northwest Cascadia Event: Incident #8",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_008_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_008_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_009",
    "title": "Pacific Northwest Cascadia Event: Incident #9",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_009_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_009_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_010",
    "title": "Pacific Northwest Cascadia Event: Incident #10",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_010_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_010_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_011",
    "title": "Pacific Northwest Cascadia Event: Incident #11",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_011_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_011_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_012",
    "title": "Pacific Northwest Cascadia Event: Incident #12",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_012_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_012_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_013",
    "title": "Pacific Northwest Cascadia Event: Incident #13",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_013_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_013_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_014",
    "title": "Pacific Northwest Cascadia Event: Incident #14",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_014_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_014_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_pacific_northwest_015",
    "title": "Pacific Northwest Cascadia Event: Incident #15",
    "scope": {
      "sectors": [
        "pacific_northwest"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Pacific Northwest Cascadia, you encounter an escalation centered around dense hydro-power dams, neural hacker enclaves, rainforest damp. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_pacific_northwest_015_opt1",
        "label": "Align with NEURALFRONT regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "neuralfront": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_pacific_northwest_015_opt2",
        "label": "Trade cyberware directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_pacific_northwest_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_001",
    "title": "Southwest & Mojave Wasteland Event: Incident #1",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_001_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_001_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_002",
    "title": "Southwest & Mojave Wasteland Event: Incident #2",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_002_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_002_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_003",
    "title": "Southwest & Mojave Wasteland Event: Incident #3",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_003_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_003_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_004",
    "title": "Southwest & Mojave Wasteland Event: Incident #4",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_004_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_004_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_005",
    "title": "Southwest & Mojave Wasteland Event: Incident #5",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_005_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_005_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_006",
    "title": "Southwest & Mojave Wasteland Event: Incident #6",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_006_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_006_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_007",
    "title": "Southwest & Mojave Wasteland Event: Incident #7",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_007_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_007_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_008",
    "title": "Southwest & Mojave Wasteland Event: Incident #8",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_008_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_008_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_009",
    "title": "Southwest & Mojave Wasteland Event: Incident #9",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_009_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_009_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_010",
    "title": "Southwest & Mojave Wasteland Event: Incident #10",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_010_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_010_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_011",
    "title": "Southwest & Mojave Wasteland Event: Incident #11",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_011_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_011_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_012",
    "title": "Southwest & Mojave Wasteland Event: Incident #12",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_012_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_012_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_013",
    "title": "Southwest & Mojave Wasteland Event: Incident #13",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_013_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_013_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_014",
    "title": "Southwest & Mojave Wasteland Event: Incident #14",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_014_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_014_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southwest_wasteland_015",
    "title": "Southwest & Mojave Wasteland Event: Incident #15",
    "scope": {
      "sectors": [
        "southwest_wasteland"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southwest & Mojave Wasteland, you encounter an escalation centered around solar glare, raider blockades, radioactive basins, dry salt flats. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southwest_wasteland_015_opt1",
        "label": "Align with SOLARIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "solaris": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_015_opt2",
        "label": "Trade batteries directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southwest_wasteland_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_001",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #1",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_001_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_001_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_002",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #2",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_002_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_002_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_003",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #3",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_003_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_003_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_004",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #4",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_004_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_004_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_005",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #5",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_005_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_005_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_006",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #6",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_006_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_006_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_007",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #7",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_007_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_007_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_008",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #8",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_008_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_008_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_009",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #9",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_009_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_009_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_010",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #10",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_010_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_010_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_011",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #11",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_011_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_011_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_012",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #12",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_012_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_012_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_013",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #13",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_013_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_013_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_014",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #14",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_014_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_014_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_southern_015",
    "title": "Southern Petro-Gulf Freeholds Event: Incident #15",
    "scope": {
      "sectors": [
        "southern"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Southern Petro-Gulf Freeholds, you encounter an escalation centered around flooded coastal bayous, free-trade flotillas, mercenary fortresses. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_southern_015_opt1",
        "label": "Align with GRIDLOCK regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "gridlock": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_southern_015_opt2",
        "label": "Trade toxins directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "toxins": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "toxins": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_southern_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_001",
    "title": "East Coast Corporate Corridor Event: Incident #1",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_001_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_001_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_002",
    "title": "East Coast Corporate Corridor Event: Incident #2",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_002_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_002_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_003",
    "title": "East Coast Corporate Corridor Event: Incident #3",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_003_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_003_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_004",
    "title": "East Coast Corporate Corridor Event: Incident #4",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_004_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_004_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_005",
    "title": "East Coast Corporate Corridor Event: Incident #5",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_005_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_005_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_006",
    "title": "East Coast Corporate Corridor Event: Incident #6",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_006_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_006_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_007",
    "title": "East Coast Corporate Corridor Event: Incident #7",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_007_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_007_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_008",
    "title": "East Coast Corporate Corridor Event: Incident #8",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_008_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_008_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_009",
    "title": "East Coast Corporate Corridor Event: Incident #9",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_009_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_009_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_010",
    "title": "East Coast Corporate Corridor Event: Incident #10",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_010_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_010_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_011",
    "title": "East Coast Corporate Corridor Event: Incident #11",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_011_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_011_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_012",
    "title": "East Coast Corporate Corridor Event: Incident #12",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_012_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_012_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_013",
    "title": "East Coast Corporate Corridor Event: Incident #13",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_013_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_013_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_014",
    "title": "East Coast Corporate Corridor Event: Incident #14",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_014_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_014_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_east_coast_015",
    "title": "East Coast Corporate Corridor Event: Incident #15",
    "scope": {
      "sectors": [
        "east_coast"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the East Coast Corporate Corridor, you encounter an escalation centered around megalopolis transit choke points, Appalachian bunker clans. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_east_coast_015_opt1",
        "label": "Align with AEGIS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "aegis": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_east_coast_015_opt2",
        "label": "Trade cryo directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_east_coast_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_001",
    "title": "Northern Laurentian Shield Event: Incident #1",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_001_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_001_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_001_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_002",
    "title": "Northern Laurentian Shield Event: Incident #2",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_002_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_002_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_002_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_003",
    "title": "Northern Laurentian Shield Event: Incident #3",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_003_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_003_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_003_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_004",
    "title": "Northern Laurentian Shield Event: Incident #4",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_004_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_004_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_004_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_005",
    "title": "Northern Laurentian Shield Event: Incident #5",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_005_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_005_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_005_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_006",
    "title": "Northern Laurentian Shield Event: Incident #6",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_006_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_006_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_006_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_007",
    "title": "Northern Laurentian Shield Event: Incident #7",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_007_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_007_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_007_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_008",
    "title": "Northern Laurentian Shield Event: Incident #8",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_008_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_008_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_008_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_009",
    "title": "Northern Laurentian Shield Event: Incident #9",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_009_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_009_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_009_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_010",
    "title": "Northern Laurentian Shield Event: Incident #10",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_010_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_010_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_010_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_011",
    "title": "Northern Laurentian Shield Event: Incident #11",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_011_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_011_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_011_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_012",
    "title": "Northern Laurentian Shield Event: Incident #12",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_012_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_012_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_012_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_013",
    "title": "Northern Laurentian Shield Event: Incident #13",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_013_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_013_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_013_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_014",
    "title": "Northern Laurentian Shield Event: Incident #14",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_014_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_014_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_014_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  },
  {
    "id": "sector_north_015",
    "title": "Northern Laurentian Shield Event: Incident #15",
    "scope": {
      "sectors": [
        "north"
      ],
      "archetypes": "any",
      "tier": 2
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "In {{LOCATION}} within the Northern Laurentian Shield, you encounter an escalation centered around permafrost pipelines, bio-dome quarantine zones, sub-zero logistics. {{FACTION}} patrols monitor local traffic.",
    "options": [
      {
        "id": "sector_north_015_opt1",
        "label": "Align with RUSTWORKS regional interests",
        "effectText": "You comply with regional protocol, providing logistical assistance to the local authorities in {{LOCATION}}.",
        "outcomes": {
          "reputation": {
            "rustworks": 6
          },
          "credits": 200,
          "qualities": {
            "Street Cred": 1
          }
        }
      },
      {
        "id": "sector_north_015_opt2",
        "label": "Trade grain directly with regional fixers [1 unit]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You offload high-demand regional cargo to local merchants at generous black-market rates.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 450,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "sector_north_015_opt3",
        "label": "Exploit regional network blindspot [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You deploy a signal interceptor, siphon encrypted cargo data, and slip through the sector without paying tariffs.",
        "outcomes": {
          "qualities": {
            "Tech Literacy": 1,
            "Heat": 2
          },
          "credits": 280
        }
      }
    ]
  }
];
