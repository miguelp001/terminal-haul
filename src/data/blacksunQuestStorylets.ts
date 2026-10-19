import { Storylet } from '../types/storylet';

export const BLACKSUN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_blacksun_01_containment_leak",
    "title": "The Glowing Ingot of Crater Flats",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Blacksun Stage": 0
      }
    },
    "text": "A rogue nuclear engineer, Dr. Maya Chen, flags you down in Crater Flats. In the back of her lead-lined van sits the \"Black Sun\"—a miniaturized dark-fusion containment core salvaged from a fallen orbital defense satellite. \"The magnetic seals are degrading,\" she warns. \"If it vents, it will irradiate the whole county. Haul it to an underground stabilization vault, and we can tap its infinite energy for your rig.\"",
    "options": [
      {
        "id": "opt_blacksun01_accept_hazard",
        "label": "Accept the hazardous radioactive contract [ROLL +COOL]",
        "effectText": "You review safety protocols and demand full danger compensation.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! Chen transfers a 1,600 credit advance and lead-composite blankets.",
          "rewards": {
            "credits": 1600,
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and lock the glowing capsule down.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radiation detectors trip dock alarms, putting guards on alert.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_blacksun01_scan_flux",
        "label": "Analyze the magnetic containment field with your cyberdeck [ROLL +CYBER]",
        "effectText": "You connect diagnostic probes to the containment housing.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You identify a harmonic flux cycle that stabilizes magnetic containment by 40%!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The core readings stabilize within amber safety thresholds.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Gamma burst spikes your diagnostic sensor, frying an optical relay.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun01_lead_insulation",
        "label": "Line the cargo bay floor with dense lead shielding plates",
        "effectText": "You protect yourself and your cabin from radioactive bleed.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_02_geiger_clicks",
    "title": "The Chittering Needle",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 1
      },
      "maxQualities": {
        "Blacksun Stage": 1
      }
    },
    "text": "Out on the open road, the dashboard Geiger counter begins clicking frantically. A microscopic fissure in the primary cooling shroud is leaking ionized plasma into your cargo hold.",
    "options": [
      {
        "id": "opt_blacksun02_patch_containment",
        "label": "Put on a hazmat apron and patch the fissure with borated polymer weld [ROLL +GRIT]",
        "effectText": "You enter the hot cargo bay and weld the seam shut under intense heat.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heroic roadside repair! The seal holds hermetically; Geiger counter falls silent.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You seal the leak, though radiation singes your coveralls.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radiation flash shocks your nervous system before you clamp the valve.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun02_magnetic_shunt",
        "label": "Generate a magnetic counter-field using your truck alternator [ROLL +CYBER]",
        "effectText": "You route heavy DC current into electromagnetic coils around the vault.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Magnetic confinement bottles the leak with zero radiation leakage!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The magnetic field contains the leak, though truck batteries draw heavy load.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Magnetic back-EMF trips your headlights and radio.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun02_vent_cargo_air",
        "label": "Cycle cabin air scrubbers to positive pressure and vent cargo air behind",
        "effectText": "Forced exhaust ventilation prevents radioactive air from seeping into the cab.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_03_hazmat_checkpoint",
    "title": "The Aegis Decontamination Gate",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 2
      },
      "maxQualities": {
        "Blacksun Stage": 2
      }
    },
    "text": "An Aegis Hazmat Bio-Security cordon blocks the Interstate with high-intensity radiological sweepers and automated heavy barricades.",
    "options": [
      {
        "id": "opt_blacksun03_spoof_dosimeter",
        "label": "Hack the checkpoint remote sensors to transmit baseline readings [ROLL +CYBER]",
        "effectText": "You broadcast fake sensor telemetry into their receiving receiver array.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total sensor spoofing! The scanner displays: \"RADIATION LEVEL: ZERO. PROCEED TO EXPRESS LANE.\"",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Scanner registers an anomalous reading, but lets you pass under amber advisory.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Alarm sirens scream! The barrier gates drop into lock-down!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Blacksun Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_blacksun03_forged_rad_papers",
        "label": "Present official Aegis Nuclear Disposal courier credentials [ROLL +COOL]",
        "effectText": "You flash forged nuclear transit manifests to the gate lieutenant.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless bureaucratic poise! The officer salutes and waves your convoy through immediately.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The officer charges a 300 credit hazardous processing fee before opening the gates.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The inspector spots an inconsistency, drawing sidearms!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Blacksun Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_blacksun03_smash_gate",
        "label": "Floor the throttle and smash through the plastic inspection booths",
        "effectText": "Raw kinetic momentum busts the gates open before enforcers can react.",
        "rewards": {
          "hullIntegrity": -18,
          "qualities": {
            "Blacksun Stage": 1,
            "Heat": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_04_coolant_starvation",
    "title": "The Boiling Heavy Water",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 3
      },
      "maxQualities": {
        "Blacksun Stage": 3
      }
    },
    "text": "The dark-fusion core is consuming coolant at twice the predicted rate. If water levels in the primary moderator tank drop further, a runaway prompt-critical reaction will melt through the truck floorboards.",
    "options": [
      {
        "id": "opt_blacksun04_condenser_loop",
        "label": "Jury-rig an auxiliary closed-loop vapor condenser [ROLL +CYBER]",
        "effectText": "You plumb air conditioning condensate into the core cooling loop.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brilliant closed thermodynamic loop! Heavy water recycling achieves 99% efficiency!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Condensation keeps the core cool enough to proceed.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Coolant hose slips, dumping steam onto the asphalt.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun04_radiator_bypass",
        "label": "Reroute the truck's primary diesel radiator into the reactor sleeve [ROLL +GRIT]",
        "effectText": "You use heavy wrench work to connect main engine coolant hoses.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Immense heat dissipation! The core cools to stable baseline while your cab stays toasty.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The engine coolant handles the heat, though temp gauge runs warm.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Overpressure blows out a radiator cap, showering the hood.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun04_consume_batteries",
        "label": "Sacrifice 1 Hydro-Battery from hold to power thermoelectric chillers [INVENTORY]",
        "effectText": "A dedicated high-voltage battery drives the cooling compressors.",
        "rewards": {
          "cargo": {
            "batteries": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Blacksun Stage": 1,
            "Street Cred": 6
          }
        },
        "reqs": {
          "cargo": {
            "batteries": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_05_mercenary_intercept",
    "title": "The OmniDyne Recovery Team",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 4
      },
      "maxQualities": {
        "Blacksun Stage": 4
      }
    },
    "text": "OmniDyne orbital recovery gun-trucks ambush you at a desert crossroads. Equipped with magnetic harpoons and lead-armored cabs, they intend to hijack the Black Sun core for their weapons division.",
    "options": [
      {
        "id": "opt_blacksun05_emp_discharge",
        "label": "Trigger a controlled dark-fusion EMP wave from the reactor core [ROLL +CYBER]",
        "effectText": "You pulse the containment coils to unleash a directional electromagnetic shockwave.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating EMP burst! All three mercenary gun-trucks instantly stall, their electronics fried to cinders!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Two attacker vehicles stall out; the third retreats into the dunes.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The EMP arcs into your own dashboard, blowing several circuit fuses.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun05_ram_mercenaries",
        "label": "Smash through their blockade with heavy kinetic acceleration [ROLL +GRIT]",
        "effectText": "You put the pedal to the metal and drive straight through their lead gun-truck.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Thunderous impact! The mercenary vehicle rolls into a ditch, clearing an open path!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through their line, denting your front fenders.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A mercenary harpoon hooks your trailer chassis, dragging before snapping.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun05_evasive_dust",
        "label": "Pitch the hauler into a blinding dry lakebed dust drift [ROLL +EDGE]",
        "effectText": "You pull an evasive power-slide, kicking up a wall of white alkaline dust.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless evasive driving! The mercenaries lose track of your vehicle in the blinding dust wall.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shake them off after a tense high-speed chase through the dunes.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A hidden boulder dings your wheel rim in the dust.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_06_tap_the_core",
    "title": "The First Spark of Fusion",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 5
      },
      "maxQualities": {
        "Blacksun Stage": 5
      }
    },
    "text": "While sheltered in a ghost-town service bay, Dr. Chen tests a direct power tap from the core. High-energy dark plasma crackles through superconducting cables, delivering enough electricity to run an entire metropolis.",
    "options": [
      {
        "id": "opt_blacksun06_supercharge_drive",
        "label": "Channel core plasma into the truck's primary electric motor [ROLL +CYBER]",
        "effectText": "You calibrate the inverter gates to accept dark-fusion current.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous powertrain upgrade! Engine horsepower triples instantly with zero exhaust emissions!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Power increases dramatically, though transmission fluid runs hot.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Power surge burns an inverter coil, requiring quick replacement.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun06_charge_batteries",
        "label": "Fill every empty battery casing in your cargo hold with pure fusion energy [ROLL +GRIT]",
        "effectText": "You hook up secondary battery banks to absorb the surplus plasma.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You produce 3 hyper-charged batteries with infinite shelf life!",
          "rewards": {
            "cargo": {
              "batteries": 3
            },
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You fill two battery packs to capacity.",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An overcharged battery cell pops with a bang, showering sparks.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun06_seal_cradle",
        "label": "Keep the core in safe low-output containment mode",
        "effectText": "Safety first: you avoid pushing the experimental reactor too soon.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_07_fallout_refugees",
    "title": "The Irradiated Oasis",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 6
      },
      "maxQualities": {
        "Blacksun Stage": 6
      }
    },
    "text": "You roll into an irradiated wasteland oasis where dirty-bomb fallout from past wars poisoned the groundwater. Sick scavengers and cyborg prospectors crowd around your hauler, desperate for clean energy.",
    "options": [
      {
        "id": "opt_blacksun07_power_water_purifier",
        "label": "Connect the Black Sun core to power the settlement's massive desalination pumps [ROLL +COOL]",
        "effectText": "You and Dr. Chen run high-voltage lines into the rusted water facility.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A gushing torrent of pure clean water floods the settlement! Hundreds of survivors cheer your name and gift rare cyberware!",
          "rewards": {
            "cargo": {
              "cyberware": 2
            },
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You restore clean water to the clinic and central fountain.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Desperate scavengers surge forward, forcing you to decouple lines.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun07_barter_scrap",
        "label": "Trade spare radiation-shielded alloy plates for truck repair parts [ROLL +COOL]",
        "effectText": "You barter with the local forge-master.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You obtain heavy tungsten armor reinforcement plates for free!",
          "rewards": {
            "hullIntegrity": 30,
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure basic suspension parts and welding rod.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Scavengers charge steep prices for secondhand filters.",
          "rewards": {
            "credits": -200,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun07_fuel_up",
        "label": "Refuel your auxiliary diesel tanks and keep moving",
        "effectText": "You top off supplies and leave the ruined oasis behind.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_08_magnetic_anomaly",
    "title": "The Ion Sinkhole",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 7
      },
      "maxQualities": {
        "Blacksun Stage": 7
      }
    },
    "text": "The dark-fusion core interacts with a subterranean magnetic fault line! Invisible magnetic vortexes tug at your steel hauler, threatening to drag your rig off the highway into a deep geological sinkhole.",
    "options": [
      {
        "id": "opt_blacksun08_counter_phase",
        "label": "Invert the polarity of the core containment field to repel the fault line [ROLL +CYBER]",
        "effectText": "You reverse the containment magnetic polarity on your keyboard.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brilliant physics trick! The magnetic field pushes against the ground, catapulting the hauler safely past the sinkhole!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The hauler breaks free from the magnetic grip after a tense struggle.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Magnetic pull yanks your front axle, tearing off a tie-rod boot.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun08_raw_horsepower",
        "label": "Drop into lowest gear and overpower the magnetic sinkhole with diesel torque [ROLL +GRIT]",
        "effectText": "You floor the throttle, roaring with raw kinetic horsepower.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable pulling power! The hauler tears out of the magnetic well like a charging bull!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You drag the heavy trailer free, leaving smoking rubber tracks.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Wheels spin fruitlessly on the gravel, straining your transmission.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun08_wide_berth",
        "label": "Take a five-kilometer rocky desert detour around the magnetic zone",
        "effectText": "A rough detour avoids the vortex safely.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_09_containment_breach_warning",
    "title": "The Critical Threshold",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 8
      },
      "maxQualities": {
        "Blacksun Stage": 8
      }
    },
    "text": "A siren wails inside the cargo bay! The dark fusion reaction has entered its supercritical phase. Core temperatures are spiking at 100,000 degrees; magnetic containment will collapse in 90 seconds unless stabilized.",
    "options": [
      {
        "id": "opt_blacksun09_plasma_vent",
        "label": "Manually crack the emergency plasma vent valve on the cargo roof [ROLL +GRIT]",
        "effectText": "You climb onto the blistering roof and wrench the frozen titanium release valve.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heroic courage! A pillar of blinding violet plasma vents harmlessly into the sky, dropping core temps to zero!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You vent the excess heat, though your gloves scorch from the heat.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Escaping plasma chars your roof paint and pops a spotlight.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun09_code_harmonic",
        "label": "Inject a harmonic damping algorithmic virus into the core firmware [ROLL +CYBER]",
        "effectText": "You type frantic hex ciphers into the reactor interface.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Master coder intervention! The code arrests the runaway reaction, stabilizing dark fusion at peak efficiency!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The code stabilizes the core, though error logs fill your storage.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Code lag delays the dampeners, scorching an internal capacitor.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun09_liquid_nitrogen",
        "label": "Dump an entire tank of liquid nitrogen directly into the containment chamber",
        "effectText": "The sub-zero flash chill quenches the heat instantly.",
        "rewards": {
          "credits": -250,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_10_the_crossroads",
    "title": "The Solar Eclipse [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 9
      },
      "maxQualities": {
        "Blacksun Stage": 9
      }
    },
    "text": "At the deep subterranean vault of Mount Weather, Dr. Chen turns to you with the glowing dark fusion core. \"The Black Sun is tamed,\" she whispers. \"Three distinct destinies await its infinite power. Where do we channel the dark star?\"",
    "options": [
      {
        "id": "opt_blacksun10_choose_darksun",
        "label": "Path 1: Mount the Micro-Reactor permanently inside your Hauler [DARK SUN OVERCLOCK]",
        "effectText": "You choose sovereign machine power. The dark fusion core will replace your engine, granting permanent infinite electrical power, unprecedented speed, and heavy lead-composite armor.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1,
            "Blacksun Chosen Path": 1,
            "Tech Literacy": 15
          }
        }
      },
      {
        "id": "opt_blacksun10_choose_bastion",
        "label": "Path 2: Deliver the Reactor to the Freehold Defense Bastion [FUSION BASTION]",
        "effectText": "You choose the survival of the wasteland people. The reactor will power the Freehold shield generators, making their settlement impenetrable to corporate airstrikes.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1,
            "Blacksun Chosen Path": 2,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_blacksun10_choose_syndicate",
        "label": "Path 3: Sell the Reactor to the Shadow Syndicate Cartel [ECLIPSE RUNNER]",
        "effectText": "You choose underworld supremacy and boundless wealth. The syndicate rewards you with sovereign gold, diplomatic immunity, and high-speed stealth hulls.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1,
            "Blacksun Chosen Path": 3,
            "Contraband Mastery": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_11_corporate_hunters",
    "title": "The Aegis Gunship Swarm",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 10
      },
      "maxQualities": {
        "Blacksun Stage": 10
      }
    },
    "text": "Aegis heavy gunships and armored personnel carriers surround your exit route. High-powered spotlights turn the midnight desert into day as search teams sweep the rocks.",
    "options": [
      {
        "id": "opt_blacksun11_dark_pulse",
        "label": "Unleash a dark-plasma EMP burst from your new reactor [ROLL +CYBER]",
        "effectText": "You pulse the reactor coils into your roof discharge rods.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blinding electromagnetic flash! Every gunship engine cuts out, spiraling into emergency autorotation as darkness returns!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gunships are blinded and disoriented, allowing you to slip past into the shadows.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures deflect the pulse; gunships return fire with 30mm auto-cannons.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun11_speed_dash",
        "label": "Floor the dark-fusion throttle and outrun their tracking radar [ROLL +EDGE]",
        "effectText": "You unleash 2,000 foot-pounds of electric torque.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Hyper-velocity sprint! The hauler streaks across the desert at 220 km/h, leaving their gunships far behind!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break their perimeter, though shrapnel grazes your rear mudguards.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A rocket impacts near your trailer, tossing dirt and rocks against the cab.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun11_kill_lights",
        "label": "Shut off all lights and drive through the canyons on night-vision optics",
        "effectText": "Silent, dark running allows you to slip under their radar nets.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_12_chassis_infusion",
    "title": "The Plasma-Hardened Hull",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 11
      },
      "maxQualities": {
        "Blacksun Stage": 11
      }
    },
    "text": "Dark plasma circulating through the truck's coolant jacket begins interacting with the steel alloy plating. A strange iridescent violet sheen coats the metal, increasing tensile hardness by 400%!",
    "options": [
      {
        "id": "opt_blacksun12_guide_annealing",
        "label": "Direct the plasma annealing process across the main cab armor [ROLL +GRIT]",
        "effectText": "You monitor the thermal crystallization of the metal plates.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Impenetrable armor! The cab and trailer plates harden into self-insulating ceramic composite!",
          "rewards": {
            "hullIntegrity": 45,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The metal hardens, absorbing future kinetic damage effortlessly.",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An uneven cooling spot leaves a slight brittle patch on the rear door.",
          "rewards": {
            "hullIntegrity": 10,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun12_test_resilience",
        "label": "Test the hardened armor with a heavy sledgehammer blow [ROLL +GRIT]",
        "effectText": "You swing a 20-pound hammer into the newly annealed bumper.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The hammer bounces back with a musical chime! Not a single scratch or dent!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The plate absorbs the blow solidly.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vibrations tingle your forearms painfully.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun12_buff_alloy",
        "label": "Polish the violet alloy sheen with industrial compound",
        "effectText": "The hauler gleams with intimidating dark-matter luminescence.",
        "rewards": {
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_13_the_last_barrier",
    "title": "The Nuclear Perimeter Gate",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 12
      },
      "maxQualities": {
        "Blacksun Stage": 12
      }
    },
    "text": "Aegis automated defense pillboxes bar the highway with laser-guided anti-tank cannons. They have orders to vaporize any unauthorized vehicle exiting the sector.",
    "options": [
      {
        "id": "opt_blacksun13_overcharge_ram",
        "label": "Channel 100 megawatts into your steel ram-prow and charge the gates [ROLL +GRIT]",
        "effectText": "You sound the horns, energized by dark fusion lightning, and slam the barrier.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cataclysmic kinetic destruction! The concrete pillboxes and gates are blasted into rubble as you roar through!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash the barrier, taking heavy impacts on your bull-bars.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Cannon fire scores deep gouges into your armor before you break through.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun13_slice_lasers",
        "label": "Transmit Dr. Chen's master satellite override ciphers [ROLL +CYBER]",
        "effectText": "You transmit the high-clearance command packet.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The automated defenses power down instantly, displaying: \"CLEARANCE OLYMPUS ACCEPTED.\" The blast doors open wide!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cannons hesitate, opening a brief window to slip past.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Security locks out the network and fires warning salvos.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_blacksun13_smoke_sprint",
        "label": "Deploy high-density chemical smoke and speed through on instinct",
        "effectText": "Blinded by smoke, their cannons shoot wide as you cross the line.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Blacksun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_14_dark_fusion_climax",
    "title": "The Dark Star Rising [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 13
      },
      "maxQualities": {
        "Blacksun Stage": 13
      }
    },
    "text": "You have broken through into the free western horizon! The Black Sun hums with steady, magnificent power as you lock in your chosen legacy.",
    "options": [
      {
        "id": "opt_blacksun14_integrate_core",
        "label": "Lock the Dark Fusion Core permanently into your rig [DARK SUN PATH] [ROLL +CYBER]",
        "effectText": "You weld the final superconducting busbars directly into your vehicle frame.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Supreme technological apotheosis! The Iron Nomad becomes an untouchable dark-matter dreadnought!",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The reactor locks into your powertrain with total stability.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1,
              "Tech Literacy": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Power surges rattle your cockpit before the system balances.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_blacksun14_deliver_bastion",
        "label": "Deliver the Black Sun to the Freehold Defense Bastion [FREEHOLD PATH] [ROLL +COOL]",
        "effectText": "You roll into the Freehold fortress where the reactor powers the great defensive dome.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Hero of the Wasteland! Millions of free citizens honor your name, awarding you fortress armor and massive wealth!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The delivery is completed and payment transferred in full.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense debriefing concludes with full transfer.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_blacksun14_deliver_syndicate",
        "label": "Deliver the reactor to the Shadow Syndicate Vault Lords [SYNDICATE PATH] [ROLL +COOL]",
        "effectText": "You pull into the syndicate's underground vault to hand over the dark star.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign underworld fortune! Billions in bearer bonds and elite stealth rig upgrades are loaded aboard!",
          "rewards": {
            "credits": 12000,
            "qualities": {
              "Blacksun Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Syndicate lords honor the contract with massive payouts.",
          "rewards": {
            "credits": 6000,
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Transaction concludes with full payment.",
          "rewards": {
            "qualities": {
              "Blacksun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_blacksun_15_finale",
    "title": "The Master of the Dark Star [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Blacksun Stage": 14
      },
      "maxQualities": {
        "Blacksun Stage": 14
      }
    },
    "text": "The saga of the Black Sun is concluded. Your rig has been permanently modified with revolutionary dark-fusion engineering.",
    "options": [
      {
        "id": "opt_blacksun15_ending_darksun",
        "label": "Rule the Open Highway as the Dark Sun [ENDING 1: DARK SUN OVERCLOCK]",
        "effectText": "Powered by the internal Dark Fusion Micro-Reactor, your hauler commands +20% permanent transit speed, +20 Max Hull, and supreme cybernetic integration.",
        "rewards": {
          "credits": 15000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 4,
            "cyberware": 3
          },
          "qualities": {
            "Blacksun Stage": 80,
            "Tech Literacy": 25,
            "Street Cred": 25,
            "Heat": -40
          },
          "stats": {
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.2,
            "maxHull": 20,
            "name": "Iron Nomad - Dark Sun"
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_blacksun15_ending_bastion",
        "label": "Command Continental Defense as the Fusion Bastion [ENDING 2: FUSION BASTION]",
        "effectText": "Outfitted with impenetrable heavy composite armor plating and fortress generators, your rig is virtually indestructible.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 5,
            "chips": 3
          },
          "qualities": {
            "Blacksun Stage": 80,
            "Street Cred": 30
          },
          "stats": {
            "grit": 1,
            "cyber": 1
          },
          "rig": {
            "maxHull": 40,
            "name": "Iron Nomad - Fusion Bastion"
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_blacksun15_ending_syndicate",
        "label": "Cruise in Sovereign Shadow as the Eclipse Runner [ENDING 3: ECLIPSE RUNNER]",
        "effectText": "Backed by syndicate wealth and equipped with high-efficiency dark-matter turbines and shielded cargo bays, your rig is an underworld legend.",
        "rewards": {
          "credits": 24000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Blacksun Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 20
          },
          "stats": {
            "cyber": 1,
            "cool": 1
          },
          "rig": {
            "speedRating": 0.25,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Eclipse Runner"
          }
        },
        "reqs": {
          "qualities": {
            "Blacksun Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_blacksun15_farewell",
        "label": "Collect final courier fee and roll out into the radiant sunrise",
        "effectText": "With the dark fusion core delivered, you hit the open highway.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Blacksun Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cyber": 1
          },
          "rig": {
            "maxHull": 15
          }
        }
      }
    ]
  }
];
