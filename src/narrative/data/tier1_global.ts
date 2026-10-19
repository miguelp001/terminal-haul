import { Storylet } from '../storyletTypes';

export const TIER1_GLOBAL_STORYLETS: Storylet[] = [
  {
    "id": "global_enroute_001",
    "title": "EMP Storm: Interstate 80 Bypass #1",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_001_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_001_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_001_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_002",
    "title": "Raider Ambush: Dead Line Corridor #2",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_002_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_002_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_002_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_003",
    "title": "Axle Shear: Perimeter Red Route #3",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_003_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_003_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_003_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_004",
    "title": "Highway Checkpoint: Old Turnpike Rut #4",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_004_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_004_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_004_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_005",
    "title": "Wasteland Drifter: Hauler Express Lane #5",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_005_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_005_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_005_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_006",
    "title": "Drone Swarm: Wasteland Choke #6",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_006_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_006_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_006_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_007",
    "title": "Acid Downpour: Irradiated Bypass #7",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_007_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_007_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_007_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_008",
    "title": "Smuggler Dead-Drop: Black Sky Stretch #8",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_008_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_008_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_008_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_009",
    "title": "Radiation Pocket: Interstate 80 Bypass #9",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_009_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_009_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_009_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_010",
    "title": "Abandoned Rig: Dead Line Corridor #10",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_010_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_010_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_010_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_011",
    "title": "EMP Storm: Perimeter Red Route #11",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_011_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_011_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_011_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_012",
    "title": "Raider Ambush: Old Turnpike Rut #12",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_012_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_012_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_012_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_013",
    "title": "Axle Shear: Hauler Express Lane #13",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_013_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_013_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_013_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_014",
    "title": "Highway Checkpoint: Wasteland Choke #14",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_014_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_014_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_014_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_015",
    "title": "Wasteland Drifter: Irradiated Bypass #15",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_015_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_015_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_015_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_016",
    "title": "Drone Swarm: Black Sky Stretch #16",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_016_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_016_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_016_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_017",
    "title": "Acid Downpour: Interstate 80 Bypass #17",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_017_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_017_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_017_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_018",
    "title": "Smuggler Dead-Drop: Dead Line Corridor #18",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_018_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_018_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_018_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_019",
    "title": "Radiation Pocket: Perimeter Red Route #19",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_019_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_019_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_019_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_020",
    "title": "Abandoned Rig: Old Turnpike Rut #20",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_020_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_020_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_020_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_021",
    "title": "EMP Storm: Hauler Express Lane #21",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_021_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_021_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_021_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_022",
    "title": "Raider Ambush: Wasteland Choke #22",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_022_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_022_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_022_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_023",
    "title": "Axle Shear: Irradiated Bypass #23",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_023_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_023_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_023_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_024",
    "title": "Highway Checkpoint: Black Sky Stretch #24",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_024_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_024_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_024_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_025",
    "title": "Wasteland Drifter: Interstate 80 Bypass #25",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_025_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_025_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_025_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_026",
    "title": "Drone Swarm: Dead Line Corridor #26",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_026_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_026_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_026_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_027",
    "title": "Acid Downpour: Perimeter Red Route #27",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_027_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_027_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_027_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_028",
    "title": "Smuggler Dead-Drop: Old Turnpike Rut #28",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_028_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_028_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_028_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_029",
    "title": "Radiation Pocket: Hauler Express Lane #29",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_029_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_029_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_029_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_030",
    "title": "Abandoned Rig: Wasteland Choke #30",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_030_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_030_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_030_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_031",
    "title": "EMP Storm: Irradiated Bypass #31",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_031_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_031_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_031_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_032",
    "title": "Raider Ambush: Black Sky Stretch #32",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_032_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_032_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_032_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_033",
    "title": "Axle Shear: Interstate 80 Bypass #33",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_033_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_033_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_033_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_034",
    "title": "Highway Checkpoint: Dead Line Corridor #34",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_034_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_034_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_034_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_035",
    "title": "Wasteland Drifter: Perimeter Red Route #35",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_035_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_035_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_035_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_036",
    "title": "Drone Swarm: Old Turnpike Rut #36",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_036_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_036_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_036_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_037",
    "title": "Acid Downpour: Hauler Express Lane #37",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_037_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_037_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_037_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_038",
    "title": "Smuggler Dead-Drop: Wasteland Choke #38",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_038_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_038_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_038_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_039",
    "title": "Radiation Pocket: Irradiated Bypass #39",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_039_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_039_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_039_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_040",
    "title": "Abandoned Rig: Black Sky Stretch #40",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_040_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_040_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_040_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_041",
    "title": "EMP Storm: Interstate 80 Bypass #41",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_041_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_041_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_041_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_042",
    "title": "Raider Ambush: Dead Line Corridor #42",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_042_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_042_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_042_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_043",
    "title": "Axle Shear: Perimeter Red Route #43",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_043_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_043_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_043_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_044",
    "title": "Highway Checkpoint: Old Turnpike Rut #44",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_044_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_044_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_044_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_045",
    "title": "Wasteland Drifter: Hauler Express Lane #45",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_045_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_045_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_045_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_046",
    "title": "Drone Swarm: Wasteland Choke #46",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_046_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_046_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_046_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_047",
    "title": "Acid Downpour: Irradiated Bypass #47",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_047_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_047_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_047_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_048",
    "title": "Smuggler Dead-Drop: Black Sky Stretch #48",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_048_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_048_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_048_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_049",
    "title": "Radiation Pocket: Interstate 80 Bypass #49",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_049_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_049_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_049_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_050",
    "title": "Abandoned Rig: Dead Line Corridor #50",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_050_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_050_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_050_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_051",
    "title": "EMP Storm: Perimeter Red Route #51",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_051_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_051_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_051_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_052",
    "title": "Raider Ambush: Old Turnpike Rut #52",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_052_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_052_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_052_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_053",
    "title": "Axle Shear: Hauler Express Lane #53",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_053_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_053_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_053_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_054",
    "title": "Highway Checkpoint: Wasteland Choke #54",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_054_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_054_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_054_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_055",
    "title": "Wasteland Drifter: Irradiated Bypass #55",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_055_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_055_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_055_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_056",
    "title": "Drone Swarm: Black Sky Stretch #56",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_056_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_056_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_056_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_057",
    "title": "Acid Downpour: Interstate 80 Bypass #57",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_057_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_057_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_057_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_058",
    "title": "Smuggler Dead-Drop: Dead Line Corridor #58",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_058_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_058_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_058_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_059",
    "title": "Radiation Pocket: Perimeter Red Route #59",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_059_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_059_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_059_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_060",
    "title": "Abandoned Rig: Old Turnpike Rut #60",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_060_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_060_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_060_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_061",
    "title": "EMP Storm: Hauler Express Lane #61",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_061_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_061_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_061_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_062",
    "title": "Raider Ambush: Wasteland Choke #62",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_062_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_062_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_062_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_063",
    "title": "Axle Shear: Irradiated Bypass #63",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_063_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_063_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_063_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_064",
    "title": "Highway Checkpoint: Black Sky Stretch #64",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_064_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_064_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_064_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_065",
    "title": "Wasteland Drifter: Interstate 80 Bypass #65",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_065_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_065_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_065_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_066",
    "title": "Drone Swarm: Dead Line Corridor #66",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_066_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_066_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_066_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_067",
    "title": "Acid Downpour: Perimeter Red Route #67",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_067_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_067_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_067_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_068",
    "title": "Smuggler Dead-Drop: Old Turnpike Rut #68",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_068_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_068_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_068_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_069",
    "title": "Radiation Pocket: Hauler Express Lane #69",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_069_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_069_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_069_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_070",
    "title": "Abandoned Rig: Wasteland Choke #70",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_070_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_070_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_070_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_071",
    "title": "EMP Storm: Irradiated Bypass #71",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Ionized coronal clouds roll across the cracked asphalt, triggering visual distortion and battery drain. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_071_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_071_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_071_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_072",
    "title": "Raider Ambush: Black Sky Stretch #72",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: Outrider dune-skiffs encircle your hauler with mounted harpoons and spiked barricades. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_072_opt1",
        "label": "Employ technical countermeasures [Street Cred 5+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 5
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_072_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_072_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_073",
    "title": "Axle Shear: Interstate 80 Bypass #73",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Interstate 80 Bypass, your convoy rig sensors sound an alert: A violent crater in the blast pavement snaps a hydraulic shock strut on your hauler chassis. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_073_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 1+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_073_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_073_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_074",
    "title": "Highway Checkpoint: Dead Line Corridor #74",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 12,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Dead Line Corridor, your convoy rig sensors sound an alert: Automated barrier claws deploy from the center median as security scanners sweep the convoy. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_074_opt1",
        "label": "Employ technical countermeasures [Enclave Permits 1+]",
        "reqs": {
          "minQualities": {
            "Enclave Permits": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Enclave Permits": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_074_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_074_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_075",
    "title": "Wasteland Drifter: Perimeter Red Route #75",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 13,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Perimeter Red Route, your convoy rig sensors sound an alert: A lone hitchhiker with exposed biomechanical lungs signals from a decommissioned service shelter. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_075_opt1",
        "label": "Employ technical countermeasures [Street Cred 3+]",
        "reqs": {
          "minQualities": {
            "Street Cred": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_075_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_075_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_076",
    "title": "Drone Swarm: Old Turnpike Rut #76",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 14,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Old Turnpike Rut, your convoy rig sensors sound an alert: A decommissioned military reconnaissance swarm scans your cargo beds with optical targeting beams. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_076_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 3+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 3
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_076_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_076_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_077",
    "title": "Acid Downpour: Hauler Express Lane #77",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 8,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Hauler Express Lane, your convoy rig sensors sound an alert: Chemical squalls sizzle against your rig ballistic glass, corroding exterior armor plating. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_077_opt1",
        "label": "Employ technical countermeasures [Cyberware Level 2+]",
        "reqs": {
          "minQualities": {
            "Cyberware Level": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Cyberware Level": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_077_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_077_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_078",
    "title": "Smuggler Dead-Drop: Wasteland Choke #78",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 9,
    "repeatable": true,
    "cooldownDays": 2,
    "reqs": {},
    "text": "Navigating the Wasteland Choke, your convoy rig sensors sound an alert: A hidden transponder beacon flashes beneath a rusted bridge pylon, marking cache coordinates. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_078_opt1",
        "label": "Employ technical countermeasures [Contraband Mastery 1+]",
        "reqs": {
          "minQualities": {
            "Contraband Mastery": 1
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Contraband Mastery": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_078_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_078_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_079",
    "title": "Radiation Pocket: Irradiated Bypass #79",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 10,
    "repeatable": true,
    "cooldownDays": 3,
    "reqs": {},
    "text": "Navigating the Irradiated Bypass, your convoy rig sensors sound an alert: Geiger needles max out as you cross a smoldering slag ravine glowing with toxic luminescence. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_079_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_079_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_079_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "global_enroute_080",
    "title": "Abandoned Rig: Black Sky Stretch #80",
    "scope": {
      "enRouteOnly": true,
      "sectors": "any",
      "archetypes": "any",
      "tier": 1
    },
    "weight": 11,
    "repeatable": true,
    "cooldownDays": 4,
    "reqs": {},
    "text": "Navigating the Black Sky Stretch, your convoy rig sensors sound an alert: A burned-out corporate transport lies sideways across both lanes, its security locks humming. En route telemetry indicates changing atmospheric turbulence.",
    "options": [
      {
        "id": "global_enroute_080_opt1",
        "label": "Employ technical countermeasures [Tech Literacy 2+]",
        "reqs": {
          "minQualities": {
            "Tech Literacy": 2
          }
        },
        "effectText": "You successfully execute counter-procedures, stabilizing the convoy rig and bypassing the threat with professional poise.",
        "outcomes": {
          "qualities": {
            "Street Cred": 1,
            "Tech Literacy": 1
          },
          "credits": 120
        }
      },
      {
        "id": "global_enroute_080_opt2",
        "label": "Burn emergency battery power to accelerate through",
        "reqs": {
          "minCargo": {
            "batteries": 1
          }
        },
        "effectText": "You dump pressurized hydrogen into the secondary turbine, surging forward through the hazard at the cost of one cell.",
        "outcomes": {
          "cargo": {
            "batteries": -1
          },
          "qualities": {
            "Street Cred": 1
          },
          "hullIntegrity": -5
        }
      },
      {
        "id": "global_enroute_080_opt3",
        "label": "Brace for impact and grind through the hazard",
        "effectText": "You maintain throttle as metal shrieks against the chassis. The rig withstands the beating, but hull maintenance will be required.",
        "outcomes": {
          "hullIntegrity": -12,
          "qualities": {
            "Street Cred": 1
          }
        }
      }
    ]
  }
];
