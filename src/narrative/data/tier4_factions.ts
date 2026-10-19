import { Storylet } from '../storyletTypes';

export const TIER4_FACTION_STORYLETS: Storylet[] = [
  {
    "id": "faction_aegis_001",
    "title": "Aegis Security Corp Directive: Protocol 1",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": -50
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_001_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_001_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_001_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_002",
    "title": "Aegis Security Corp Directive: Protocol 2",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": -50
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_002_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_002_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_002_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_003",
    "title": "Aegis Security Corp Directive: Protocol 3",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": -50
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_003_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_003_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_003_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_004",
    "title": "Aegis Security Corp Directive: Protocol 4",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": -50
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_004_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_004_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_004_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_005",
    "title": "Aegis Security Corp Directive: Protocol 5",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": -50
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_005_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_005_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_005_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_006",
    "title": "Aegis Security Corp Directive: Protocol 6",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 10
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_006_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_006_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_006_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_007",
    "title": "Aegis Security Corp Directive: Protocol 7",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 10
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_007_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_007_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_007_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_008",
    "title": "Aegis Security Corp Directive: Protocol 8",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 10
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_008_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_008_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_008_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_009",
    "title": "Aegis Security Corp Directive: Protocol 9",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 10
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_009_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_009_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_009_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_010",
    "title": "Aegis Security Corp Directive: Protocol 10",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 10
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_010_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_010_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_010_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_011",
    "title": "Aegis Security Corp Directive: Protocol 11",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 35
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_011_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_011_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_011_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_012",
    "title": "Aegis Security Corp Directive: Protocol 12",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 35
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_012_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_012_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_012_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_013",
    "title": "Aegis Security Corp Directive: Protocol 13",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 35
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_013_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_013_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_013_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_014",
    "title": "Aegis Security Corp Directive: Protocol 14",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 35
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_014_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_014_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_014_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_aegis_015",
    "title": "Aegis Security Corp Directive: Protocol 15",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "aegis": 35
      }
    },
    "text": "An official emissary of Aegis Security Corp intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_aegis_015_opt1",
        "label": "Fulfill faction consignment [1x batteries]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You transfer the requested batteries. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "credits": 600,
          "reputation": {
            "aegis": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_aegis_015_opt2",
        "label": "Perform tactical field contract for Aegis Security Corp",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "aegis": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_aegis_015_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "aegis": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_001",
    "title": "Gridlock Syndicate Directive: Protocol 1",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": -50
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_001_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_001_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_001_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_002",
    "title": "Gridlock Syndicate Directive: Protocol 2",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": -50
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_002_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_002_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_002_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_003",
    "title": "Gridlock Syndicate Directive: Protocol 3",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": -50
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_003_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_003_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_003_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_004",
    "title": "Gridlock Syndicate Directive: Protocol 4",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": -50
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_004_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_004_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_004_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_005",
    "title": "Gridlock Syndicate Directive: Protocol 5",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": -50
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_005_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_005_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_005_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_006",
    "title": "Gridlock Syndicate Directive: Protocol 6",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 10
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_006_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_006_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_006_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_007",
    "title": "Gridlock Syndicate Directive: Protocol 7",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 10
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_007_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_007_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_007_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_008",
    "title": "Gridlock Syndicate Directive: Protocol 8",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 10
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_008_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_008_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_008_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_009",
    "title": "Gridlock Syndicate Directive: Protocol 9",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 10
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_009_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_009_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_009_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_010",
    "title": "Gridlock Syndicate Directive: Protocol 10",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 10
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_010_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_010_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_010_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_011",
    "title": "Gridlock Syndicate Directive: Protocol 11",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 35
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_011_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_011_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_011_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_012",
    "title": "Gridlock Syndicate Directive: Protocol 12",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 35
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_012_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_012_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_012_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_013",
    "title": "Gridlock Syndicate Directive: Protocol 13",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 35
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_013_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_013_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_013_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_014",
    "title": "Gridlock Syndicate Directive: Protocol 14",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 35
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_014_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_014_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_014_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_gridlock_015",
    "title": "Gridlock Syndicate Directive: Protocol 15",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "gridlock": 35
      }
    },
    "text": "An official emissary of Gridlock Syndicate intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_gridlock_015_opt1",
        "label": "Fulfill faction consignment [1x cyberware]",
        "reqs": {
          "minCargo": {
            "cyberware": 1
          }
        },
        "effectText": "You transfer the requested cyberware. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cyberware": -1
          },
          "credits": 600,
          "reputation": {
            "gridlock": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_gridlock_015_opt2",
        "label": "Perform tactical field contract for Gridlock Syndicate",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "gridlock": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_gridlock_015_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "gridlock": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_001",
    "title": "Solaris Nomad Clans Directive: Protocol 1",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": -50
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_001_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_001_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_001_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_002",
    "title": "Solaris Nomad Clans Directive: Protocol 2",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": -50
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_002_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_002_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_002_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_003",
    "title": "Solaris Nomad Clans Directive: Protocol 3",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": -50
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_003_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_003_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_003_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_004",
    "title": "Solaris Nomad Clans Directive: Protocol 4",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": -50
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_004_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_004_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_004_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_005",
    "title": "Solaris Nomad Clans Directive: Protocol 5",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": -50
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_005_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_005_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_005_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_006",
    "title": "Solaris Nomad Clans Directive: Protocol 6",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 10
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_006_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_006_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_006_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_007",
    "title": "Solaris Nomad Clans Directive: Protocol 7",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 10
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_007_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_007_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_007_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_008",
    "title": "Solaris Nomad Clans Directive: Protocol 8",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 10
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_008_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_008_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_008_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_009",
    "title": "Solaris Nomad Clans Directive: Protocol 9",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 10
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_009_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_009_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_009_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_010",
    "title": "Solaris Nomad Clans Directive: Protocol 10",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 10
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_010_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_010_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_010_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_011",
    "title": "Solaris Nomad Clans Directive: Protocol 11",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 35
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_011_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_011_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_011_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_012",
    "title": "Solaris Nomad Clans Directive: Protocol 12",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 35
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_012_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_012_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_012_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_013",
    "title": "Solaris Nomad Clans Directive: Protocol 13",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 35
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_013_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_013_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_013_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_014",
    "title": "Solaris Nomad Clans Directive: Protocol 14",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 35
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_014_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_014_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_014_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_solaris_015",
    "title": "Solaris Nomad Clans Directive: Protocol 15",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "solaris": 35
      }
    },
    "text": "An official emissary of Solaris Nomad Clans intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_solaris_015_opt1",
        "label": "Fulfill faction consignment [1x grain]",
        "reqs": {
          "minCargo": {
            "grain": 1
          }
        },
        "effectText": "You transfer the requested grain. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "grain": -1
          },
          "credits": 600,
          "reputation": {
            "solaris": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_solaris_015_opt2",
        "label": "Perform tactical field contract for Solaris Nomad Clans",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "solaris": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_solaris_015_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "solaris": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_001",
    "title": "Rustworks Collective Directive: Protocol 1",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": -50
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_001_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_001_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_001_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_002",
    "title": "Rustworks Collective Directive: Protocol 2",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": -50
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_002_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_002_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_002_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_003",
    "title": "Rustworks Collective Directive: Protocol 3",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": -50
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_003_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_003_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_003_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_004",
    "title": "Rustworks Collective Directive: Protocol 4",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": -50
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_004_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_004_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_004_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_005",
    "title": "Rustworks Collective Directive: Protocol 5",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": -50
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_005_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_005_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_005_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_006",
    "title": "Rustworks Collective Directive: Protocol 6",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 10
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_006_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_006_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_006_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_007",
    "title": "Rustworks Collective Directive: Protocol 7",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 10
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_007_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_007_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_007_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_008",
    "title": "Rustworks Collective Directive: Protocol 8",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 10
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_008_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_008_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_008_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_009",
    "title": "Rustworks Collective Directive: Protocol 9",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 10
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_009_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_009_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_009_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_010",
    "title": "Rustworks Collective Directive: Protocol 10",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 10
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_010_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_010_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_010_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_011",
    "title": "Rustworks Collective Directive: Protocol 11",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 35
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_011_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_011_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_011_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_012",
    "title": "Rustworks Collective Directive: Protocol 12",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 35
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_012_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_012_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_012_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_013",
    "title": "Rustworks Collective Directive: Protocol 13",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 35
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_013_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_013_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_013_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_014",
    "title": "Rustworks Collective Directive: Protocol 14",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 35
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_014_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_014_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_014_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_rustworks_015",
    "title": "Rustworks Collective Directive: Protocol 15",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "rustworks": 35
      }
    },
    "text": "An official emissary of Rustworks Collective intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_rustworks_015_opt1",
        "label": "Fulfill faction consignment [1x cryo]",
        "reqs": {
          "minCargo": {
            "cryo": 1
          }
        },
        "effectText": "You transfer the requested cryo. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "cryo": -1
          },
          "credits": 600,
          "reputation": {
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_rustworks_015_opt2",
        "label": "Perform tactical field contract for Rustworks Collective",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "rustworks": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_rustworks_015_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "rustworks": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_001",
    "title": "Neural Front Directive: Protocol 1",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": -50
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_001_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_001_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_001_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_002",
    "title": "Neural Front Directive: Protocol 2",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": -50
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_002_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_002_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_002_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_003",
    "title": "Neural Front Directive: Protocol 3",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": -50
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_003_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_003_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_003_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_004",
    "title": "Neural Front Directive: Protocol 4",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": -50
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_004_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_004_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_004_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_005",
    "title": "Neural Front Directive: Protocol 5",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": -50
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_005_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_005_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_005_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_006",
    "title": "Neural Front Directive: Protocol 6",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 10
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_006_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_006_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_006_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_007",
    "title": "Neural Front Directive: Protocol 7",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 10
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_007_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_007_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_007_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_008",
    "title": "Neural Front Directive: Protocol 8",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 10
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_008_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_008_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_008_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_009",
    "title": "Neural Front Directive: Protocol 9",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 10
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_009_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_009_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_009_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_010",
    "title": "Neural Front Directive: Protocol 10",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 10
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_010_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_010_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_010_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_011",
    "title": "Neural Front Directive: Protocol 11",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 35
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_011_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_011_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_011_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_012",
    "title": "Neural Front Directive: Protocol 12",
    "scope": {
      "tier": 4
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 35
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_012_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_012_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_012_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_013",
    "title": "Neural Front Directive: Protocol 13",
    "scope": {
      "tier": 4
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 35
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_013_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_013_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_013_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_014",
    "title": "Neural Front Directive: Protocol 14",
    "scope": {
      "tier": 4
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 35
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_014_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_014_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_014_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  },
  {
    "id": "faction_neuralfront_015",
    "title": "Neural Front Directive: Protocol 15",
    "scope": {
      "tier": 4
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3.5,
    "reqs": {
      "minReputation": {
        "neuralfront": 35
      }
    },
    "text": "An official emissary of Neural Front intercepts your terminal feed at {{LOCATION}}. Given your current standing with the organization, they present an operational directive.",
    "options": [
      {
        "id": "faction_neuralfront_015_opt1",
        "label": "Fulfill faction consignment [1x chips]",
        "reqs": {
          "minCargo": {
            "chips": 1
          }
        },
        "effectText": "You transfer the requested chips. The emissary praises your loyalty and credits your offshore account.",
        "outcomes": {
          "cargo": {
            "chips": -1
          },
          "credits": 600,
          "reputation": {
            "neuralfront": 8
          },
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "faction_neuralfront_015_opt2",
        "label": "Perform tactical field contract for Neural Front",
        "effectText": "You assist faction operatives with local logistical escort duties, reinforcing their territorial control.",
        "outcomes": {
          "credits": 350,
          "reputation": {
            "neuralfront": 5
          },
          "qualities": {
            "Cyberware Level": 1
          }
        }
      },
      {
        "id": "faction_neuralfront_015_opt3",
        "label": "Decline directive respectfully",
        "effectText": "You decline the mission citing commercial neutrality. The emissary logs your refusal without incident.",
        "outcomes": {
          "reputation": {
            "neuralfront": -1
          }
        }
      }
    ]
  }
];
