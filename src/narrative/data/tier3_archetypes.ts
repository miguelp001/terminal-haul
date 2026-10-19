import { Storylet } from '../storyletTypes';

export const TIER3_ARCHETYPE_STORYLETS: Storylet[] = [
  {
    "id": "arch_corporate_arcology_001",
    "title": "Corporate Arcology Terminal: Case #1",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_001_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_001_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_001_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_002",
    "title": "Corporate Arcology Terminal: Case #2",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_002_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_002_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_002_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_003",
    "title": "Corporate Arcology Terminal: Case #3",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_003_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_003_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_003_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_004",
    "title": "Corporate Arcology Terminal: Case #4",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_004_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_004_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_004_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_005",
    "title": "Corporate Arcology Terminal: Case #5",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_005_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_005_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_005_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_006",
    "title": "Corporate Arcology Terminal: Case #6",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_006_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_006_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_006_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_007",
    "title": "Corporate Arcology Terminal: Case #7",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_007_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_007_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_007_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_008",
    "title": "Corporate Arcology Terminal: Case #8",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_008_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_008_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_008_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_009",
    "title": "Corporate Arcology Terminal: Case #9",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_009_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_009_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_009_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_010",
    "title": "Corporate Arcology Terminal: Case #10",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_010_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_010_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_010_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_011",
    "title": "Corporate Arcology Terminal: Case #11",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_011_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_011_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_011_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_012",
    "title": "Corporate Arcology Terminal: Case #12",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_012_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_012_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_012_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_013",
    "title": "Corporate Arcology Terminal: Case #13",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_013_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_013_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_013_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_014",
    "title": "Corporate Arcology Terminal: Case #14",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_014_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_014_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_014_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_015",
    "title": "Corporate Arcology Terminal: Case #15",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_015_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_015_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_015_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_016",
    "title": "Corporate Arcology Terminal: Case #16",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_016_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_016_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_016_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_017",
    "title": "Corporate Arcology Terminal: Case #17",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_017_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_017_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_017_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_018",
    "title": "Corporate Arcology Terminal: Case #18",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_018_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_018_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_018_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_019",
    "title": "Corporate Arcology Terminal: Case #19",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_019_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_019_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_019_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_corporate_arcology_020",
    "title": "Corporate Arcology Terminal: Case #20",
    "scope": {
      "archetypes": [
        "corporate_arcology"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Corporate Arcology of {{LOCATION}}, you navigate surveillance grids, corporate security checkpoints, cleanrooms. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_corporate_arcology_020_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "aegis": 4
          }
        }
      },
      {
        "id": "arch_corporate_arcology_020_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_corporate_arcology_020_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "aegis": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_001",
    "title": "Wasteland Hub Terminal: Case #1",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_001_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_001_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_001_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_002",
    "title": "Wasteland Hub Terminal: Case #2",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_002_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_002_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_002_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_003",
    "title": "Wasteland Hub Terminal: Case #3",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_003_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_003_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_003_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_004",
    "title": "Wasteland Hub Terminal: Case #4",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_004_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_004_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_004_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_005",
    "title": "Wasteland Hub Terminal: Case #5",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_005_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_005_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_005_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_006",
    "title": "Wasteland Hub Terminal: Case #6",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_006_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_006_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_006_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_007",
    "title": "Wasteland Hub Terminal: Case #7",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_007_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_007_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_007_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_008",
    "title": "Wasteland Hub Terminal: Case #8",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_008_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_008_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_008_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_009",
    "title": "Wasteland Hub Terminal: Case #9",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_009_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_009_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_009_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_010",
    "title": "Wasteland Hub Terminal: Case #10",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_010_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_010_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_010_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_011",
    "title": "Wasteland Hub Terminal: Case #11",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_011_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_011_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_011_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_012",
    "title": "Wasteland Hub Terminal: Case #12",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_012_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_012_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_012_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_013",
    "title": "Wasteland Hub Terminal: Case #13",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_013_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_013_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_013_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_014",
    "title": "Wasteland Hub Terminal: Case #14",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_014_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_014_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_014_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_015",
    "title": "Wasteland Hub Terminal: Case #15",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_015_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_015_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_015_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_016",
    "title": "Wasteland Hub Terminal: Case #16",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_016_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_016_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_016_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_017",
    "title": "Wasteland Hub Terminal: Case #17",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_017_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_017_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_017_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_018",
    "title": "Wasteland Hub Terminal: Case #18",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_018_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_018_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_018_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_019",
    "title": "Wasteland Hub Terminal: Case #19",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_019_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_019_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_019_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_wasteland_hub_020",
    "title": "Wasteland Hub Terminal: Case #20",
    "scope": {
      "archetypes": [
        "wasteland_hub"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Wasteland Hub of {{LOCATION}}, you navigate nomad convoys, water barter, dust-rig servicing. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_wasteland_hub_020_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "solaris": 4
          }
        }
      },
      {
        "id": "arch_wasteland_hub_020_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_wasteland_hub_020_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "solaris": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_001",
    "title": "Black Market Sprawl Terminal: Case #1",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_001_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_001_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_001_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_002",
    "title": "Black Market Sprawl Terminal: Case #2",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_002_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_002_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_002_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_003",
    "title": "Black Market Sprawl Terminal: Case #3",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_003_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_003_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_003_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_004",
    "title": "Black Market Sprawl Terminal: Case #4",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_004_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_004_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_004_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_005",
    "title": "Black Market Sprawl Terminal: Case #5",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_005_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_005_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_005_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_006",
    "title": "Black Market Sprawl Terminal: Case #6",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_006_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_006_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_006_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_007",
    "title": "Black Market Sprawl Terminal: Case #7",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_007_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_007_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_007_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_008",
    "title": "Black Market Sprawl Terminal: Case #8",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_008_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_008_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_008_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_009",
    "title": "Black Market Sprawl Terminal: Case #9",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_009_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_009_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_009_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_010",
    "title": "Black Market Sprawl Terminal: Case #10",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_010_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_010_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_010_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_011",
    "title": "Black Market Sprawl Terminal: Case #11",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_011_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_011_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_011_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_012",
    "title": "Black Market Sprawl Terminal: Case #12",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_012_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_012_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_012_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_013",
    "title": "Black Market Sprawl Terminal: Case #13",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_013_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_013_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_013_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_014",
    "title": "Black Market Sprawl Terminal: Case #14",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_014_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_014_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_014_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_015",
    "title": "Black Market Sprawl Terminal: Case #15",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_015_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_015_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_015_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_016",
    "title": "Black Market Sprawl Terminal: Case #16",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_016_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_016_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_016_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_017",
    "title": "Black Market Sprawl Terminal: Case #17",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_017_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_017_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_017_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_018",
    "title": "Black Market Sprawl Terminal: Case #18",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_018_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_018_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_018_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_019",
    "title": "Black Market Sprawl Terminal: Case #19",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_019_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_019_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_019_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_black_market_sprawl_020",
    "title": "Black Market Sprawl Terminal: Case #20",
    "scope": {
      "archetypes": [
        "black_market_sprawl"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Black Market Sprawl of {{LOCATION}}, you navigate chop-shops, unlicensed wetware, illegal broker auctions. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_black_market_sprawl_020_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "gridlock": 4
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_020_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_black_market_sprawl_020_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "gridlock": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_001",
    "title": "Reclaimer Foundry Terminal: Case #1",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_001_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_001_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_001_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_002",
    "title": "Reclaimer Foundry Terminal: Case #2",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_002_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_002_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_002_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_003",
    "title": "Reclaimer Foundry Terminal: Case #3",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_003_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_003_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_003_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_004",
    "title": "Reclaimer Foundry Terminal: Case #4",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_004_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_004_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_004_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_005",
    "title": "Reclaimer Foundry Terminal: Case #5",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_005_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_005_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_005_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_006",
    "title": "Reclaimer Foundry Terminal: Case #6",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_006_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_006_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_006_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_007",
    "title": "Reclaimer Foundry Terminal: Case #7",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_007_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_007_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_007_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_008",
    "title": "Reclaimer Foundry Terminal: Case #8",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_008_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_008_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_008_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_009",
    "title": "Reclaimer Foundry Terminal: Case #9",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_009_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_009_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_009_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_010",
    "title": "Reclaimer Foundry Terminal: Case #10",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_010_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_010_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_010_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_011",
    "title": "Reclaimer Foundry Terminal: Case #11",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_011_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_011_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_011_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_012",
    "title": "Reclaimer Foundry Terminal: Case #12",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_012_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_012_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_012_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_013",
    "title": "Reclaimer Foundry Terminal: Case #13",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_013_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_013_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_013_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_014",
    "title": "Reclaimer Foundry Terminal: Case #14",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_014_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_014_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_014_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_015",
    "title": "Reclaimer Foundry Terminal: Case #15",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_015_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_015_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_015_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_016",
    "title": "Reclaimer Foundry Terminal: Case #16",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_016_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_016_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_016_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_017",
    "title": "Reclaimer Foundry Terminal: Case #17",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_017_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_017_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_017_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_018",
    "title": "Reclaimer Foundry Terminal: Case #18",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_018_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_018_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_018_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_019",
    "title": "Reclaimer Foundry Terminal: Case #19",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_019_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_019_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_019_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_reclaimer_foundry_020",
    "title": "Reclaimer Foundry Terminal: Case #20",
    "scope": {
      "archetypes": [
        "reclaimer_foundry"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Reclaimer Foundry of {{LOCATION}}, you navigate blast furnaces, scrap disputes, heavy metal industrial strikes. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_reclaimer_foundry_020_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "rustworks": 4
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_020_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_reclaimer_foundry_020_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "rustworks": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_001",
    "title": "Freehold Outpost Terminal: Case #1",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_001_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_001_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_001_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_002",
    "title": "Freehold Outpost Terminal: Case #2",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_002_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_002_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_002_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_003",
    "title": "Freehold Outpost Terminal: Case #3",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_003_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_003_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_003_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_004",
    "title": "Freehold Outpost Terminal: Case #4",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_004_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_004_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_004_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_005",
    "title": "Freehold Outpost Terminal: Case #5",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_005_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_005_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_005_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_006",
    "title": "Freehold Outpost Terminal: Case #6",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_006_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_006_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_006_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_007",
    "title": "Freehold Outpost Terminal: Case #7",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_007_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_007_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_007_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_008",
    "title": "Freehold Outpost Terminal: Case #8",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_008_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_008_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_008_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_009",
    "title": "Freehold Outpost Terminal: Case #9",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_009_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_009_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_009_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_010",
    "title": "Freehold Outpost Terminal: Case #10",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_010_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_010_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_010_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_011",
    "title": "Freehold Outpost Terminal: Case #11",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_011_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_011_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_011_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_012",
    "title": "Freehold Outpost Terminal: Case #12",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_012_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_012_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_012_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_013",
    "title": "Freehold Outpost Terminal: Case #13",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_013_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_013_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_013_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_014",
    "title": "Freehold Outpost Terminal: Case #14",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_014_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_014_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_014_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_015",
    "title": "Freehold Outpost Terminal: Case #15",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_015_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_015_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_015_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_016",
    "title": "Freehold Outpost Terminal: Case #16",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_016_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_016_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_016_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_017",
    "title": "Freehold Outpost Terminal: Case #17",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_017_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_017_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_017_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_018",
    "title": "Freehold Outpost Terminal: Case #18",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_018_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_018_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_018_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_019",
    "title": "Freehold Outpost Terminal: Case #19",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_019_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_019_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_019_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  },
  {
    "id": "arch_freehold_outpost_020",
    "title": "Freehold Outpost Terminal: Case #20",
    "scope": {
      "archetypes": [
        "freehold_outpost"
      ],
      "sectors": "any",
      "dockOnly": true,
      "tier": 3
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2.5,
    "reqs": {},
    "text": "Docked at the Freehold Outpost of {{LOCATION}}, you navigate independent frontier defense, barter councils, militia customs. Local representatives of {{FACTION}} approach your docking bay with commercial propositions.",
    "options": [
      {
        "id": "arch_freehold_outpost_020_opt1",
        "label": "Submit to archetype customs & protocols",
        "effectText": "You pass through standard processing lanes, settling port fees and trading pleasantries with harbor controllers.",
        "outcomes": {
          "credits": -50,
          "qualities": {
            "Street Cred": 1
          },
          "reputation": {
            "neuralfront": 4
          }
        }
      },
      {
        "id": "arch_freehold_outpost_020_opt2",
        "label": "Leverage Street Cred for preferential berth [Street Cred 10+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 10
          }
        },
        "effectText": "Your reputation precedes you. The dockmaster waives transit fees and offers premium fuel servicing.",
        "outcomes": {
          "credits": 220,
          "hullIntegrity": 8,
          "qualities": {
            "Street Cred": 2
          }
        }
      },
      {
        "id": "arch_freehold_outpost_020_opt3",
        "label": "Bribe harbor officials with technical supplies [1 Battery]",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You hand over a fresh power cell. The official stamps your manifest with high-priority clearance seals.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Enclave Permits": 1
          },
          "reputation": {
            "neuralfront": 5
          }
        }
      }
    ]
  }
];
