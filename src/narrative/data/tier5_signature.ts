import { Storylet } from '../storyletTypes';

export const TIER5_SIGNATURE_STORYLETS: Storylet[] = [
  {
    "id": "sig_syracuse_01",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 1/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_syracuse_02",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 2/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_syracuse_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_syracuse_03",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 3/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_syracuse_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_syracuse_04",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 4/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_syracuse_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_syracuse_05",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 5/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_syracuse_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_syracuse_06",
    "title": "Neo-Syracuse: Quarry Data-Vault Infiltration (Part 6/6)",
    "scope": {
      "locationIds": [
        "node_002"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_syracuse_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/6] At Neo-Syracuse, your investigation into Quarry Data-Vault Infiltration reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_syracuse_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Neo-Syracuse.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_syracuse_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Neo-Syracuse.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_syracuse_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_01",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 1/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_02",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 2/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_03",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 3/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_04",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 4/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_05",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 5/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_06",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 6/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_detroit_07",
    "title": "Detroit Arcology: The Great Assembly Strike (Part 7/7)",
    "scope": {
      "locationIds": [
        "node_033"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_detroit_06"
      ]
    },
    "text": "[SIGNATURE CHAPTER 7/7] At Detroit Arcology, your investigation into The Great Assembly Strike reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_detroit_07_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Detroit Arcology.",
        "outcomes": {
          "credits": 1500,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_detroit_07_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Detroit Arcology.",
        "outcomes": {
          "credits": 1490,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_detroit_07_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 2050,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_01",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 1/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_02",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 2/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_03",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 3/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_04",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 4/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_05",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 5/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_06",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 6/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_cascadia_07",
    "title": "Cascadia Megalopolis: Quantum Lattice Break (Part 7/7)",
    "scope": {
      "locationIds": [
        "node_065"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_cascadia_06"
      ]
    },
    "text": "[SIGNATURE CHAPTER 7/7] At Cascadia Megalopolis, your investigation into Quantum Lattice Break reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_cascadia_07_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1500,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_cascadia_07_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Cascadia Megalopolis.",
        "outcomes": {
          "credits": 1490,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_cascadia_07_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 2050,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_01",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 1/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_02",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 2/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_03",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 3/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_04",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 4/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_05",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 5/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_06",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 6/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_mojave_07",
    "title": "Mojave Sprawl: The Iron Sun Pilgrimage (Part 7/7)",
    "scope": {
      "locationIds": [
        "node_093"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_mojave_06"
      ]
    },
    "text": "[SIGNATURE CHAPTER 7/7] At Mojave Sprawl, your investigation into The Iron Sun Pilgrimage reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_mojave_07_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Mojave Sprawl.",
        "outcomes": {
          "credits": 1500,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_mojave_07_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Mojave Sprawl.",
        "outcomes": {
          "credits": 1490,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_mojave_07_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 2050,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_01",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 1/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_02",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 2/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_03",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 3/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_04",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 4/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_05",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 5/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_06",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 6/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_texas_07",
    "title": "Texas Freehold: Petro-Baron Succession War (Part 7/7)",
    "scope": {
      "locationIds": [
        "node_123"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_texas_06"
      ]
    },
    "text": "[SIGNATURE CHAPTER 7/7] At Texas Freehold, your investigation into Petro-Baron Succession War reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_texas_07_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Texas Freehold.",
        "outcomes": {
          "credits": 1500,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_texas_07_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Texas Freehold.",
        "outcomes": {
          "credits": 1490,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_texas_07_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 2050,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_01",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 1/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {},
    "text": "[SIGNATURE CHAPTER 1/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_01_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 900,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_01_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 770,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_01_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1150,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_02",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 2/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_chiba_01"
      ]
    },
    "text": "[SIGNATURE CHAPTER 2/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_02_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1000,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_02_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 890,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_02_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_03",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 3/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_chiba_02"
      ]
    },
    "text": "[SIGNATURE CHAPTER 3/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_03_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1100,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_03_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1010,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_03_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1450,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_04",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 4/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_chiba_03"
      ]
    },
    "text": "[SIGNATURE CHAPTER 4/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_04_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1200,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_04_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1130,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_04_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1600,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_05",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 5/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_chiba_04"
      ]
    },
    "text": "[SIGNATURE CHAPTER 5/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_05_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1300,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_05_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1250,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_05_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1750,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "sig_chiba_06",
    "title": "Chiba-on-Hudson: Sub-Surface Black Market Syndicate (Part 6/6)",
    "scope": {
      "locationIds": [
        "node_001"
      ],
      "tier": 5,
      "dockOnly": true
    },
    "weight": 15,
    "repeatable": false,
    "cooldownDays": 0,
    "reqs": {
      "requiredStoryletsCompleted": [
        "sig_chiba_05"
      ]
    },
    "text": "[SIGNATURE CHAPTER 6/6] At Chiba-on-Hudson, your investigation into Sub-Surface Black Market Syndicate reaches a pivotal juncture. Faction power dynamics hang in the balance as key stakeholders demand your intervention.",
    "options": [
      {
        "id": "sig_chiba_06_opt1",
        "label": "Back corporate authority and restore system stability",
        "effectText": "You back official enforcers, securing critical server nodes and stabilizing the urban sectors of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1400,
          "reputation": {
            "aegis": 12,
            "rustworks": 5,
            "gridlock": -8
          },
          "qualities": {
            "Enclave Permits": 1,
            "Street Cred": 3
          }
        }
      },
      {
        "id": "sig_chiba_06_opt2",
        "label": "Back underworld rebels and open the data stream",
        "effectText": "You upload contraband encryption keys, releasing restricted reserves to the street clans of Chiba-on-Hudson.",
        "outcomes": {
          "credits": 1370,
          "reputation": {
            "neuralfront": 15,
            "gridlock": 10,
            "aegis": -12
          },
          "qualities": {
            "Contraband Mastery": 1,
            "Tech Literacy": 1,
            "Heat": 6
          }
        }
      },
      {
        "id": "sig_chiba_06_opt3",
        "label": "Broker a pragmatic neutral ceasefire",
        "reqs": {
          "minQualities": {
            "Street Cred": 8
          }
        },
        "effectText": "Leveraging your continental reputation, you negotiate a profitable compromise between competing factions.",
        "outcomes": {
          "credits": 1900,
          "reputation": {
            "solaris": 8,
            "rustworks": 8
          },
          "qualities": {
            "Street Cred": 5
          }
        }
      }
    ]
  }
];
