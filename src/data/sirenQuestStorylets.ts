import { Storylet } from '../types/storylet';

export const SIREN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_siren_01_frozen_distress",
    "title": "Frostbite on the Northern Frequency",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Siren Stage": 0
      }
    },
    "text": "A burst transmission on sub-zero emergency channels crackles through your audio console. Dr. Nikaia Frost, an outcast cryo-geneticist from the Laurentian Citadel, seeks a hauler capable of sub-zero transit to evacuate biological stasis capsules before corporate incinerator teams arrive.",
    "options": [
      {
        "id": "opt_siren01_accept_cryo",
        "label": "Accept the Arctic extraction contract and calibrate refrigeration [ROLL +COOL]",
        "effectText": "You review the contract terms and negotiate hazard premiums.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! You secure a 1,500 credit retainer and specialized cryo-coolant pods.",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "cryo": 1
            },
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and prep your cargo hold.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Port authorities overhear the frequency, flagging your manifest.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_siren01_hack_telemetry",
        "label": "Analyze the encrypted distress packet for corporate surveillance tags [ROLL +CYBER]",
        "effectText": "You decrypt the transmission packet headers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You strip Aegis tracking beacons from the packet, pinpointing the secret extraction bunker.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You decrypt the coordinates, though the signal leaves an echo on the grid.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Heat": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Defensive ICE shocks your receiver terminal.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren01_prep_heaters",
        "label": "Install heavy thermal blankets around the cargo bay floor",
        "effectText": "You prepare the hauler for sub-zero conditions.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_02_blizzard_pass",
    "title": "The Howling Pass",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 1
      },
      "maxQualities": {
        "Siren Stage": 1
      }
    },
    "text": "A brutal northern blizzard hammers the windshield. Whiteout winds threaten to freeze your pneumatic air lines and send the hauler skidding off the icy cliff road.",
    "options": [
      {
        "id": "opt_siren02_plow_ice",
        "label": "Engage differential locks and plow through the snowdrifts [ROLL +GRIT]",
        "effectText": "You drop into ultra-low gear and let the heavy iron plow clear the drift.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic drive! You carve a pristine track through the avalanche.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You muscle through, though frozen snow clogs your radiator grille.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The hauler violently jackknifes against an ice berm before recovering.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren02_thermal_routing",
        "label": "Reroute hot exhaust gas to warm the steering linkages [ROLL +CYBER]",
        "effectText": "You modulate the exhaust butterfly valve with diagnostic code.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Elegant thermodynamics! The steering components defrost completely, gliding on ice.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The heat keeps the linkage moving, though engine temperature runs hot.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A frozen bypass valve bursts, hissing steam into the wheel well.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren02_crawl",
        "label": "Drop speed to 20 km/h and follow guardrail markers slowly",
        "effectText": "Slow, steady driving carries you past the treacherous ridge safely.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_03_permafrost_depot",
    "title": "The Black Ice Rendezvous",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 2
      },
      "maxQualities": {
        "Siren Stage": 2
      }
    },
    "text": "You arrive at the abandoned permafrost staging bunker. Dr. Frost and her research assistants wheel out three pressurized cryo-vaults containing the Siren genome—the synthetic DNA of organisms adapted to survive total thermal collapse.",
    "options": [
      {
        "id": "opt_siren03_secure_cargo",
        "label": "Supervise precision crane-rigging to load the delicate cryo-vaults [ROLL +EDGE]",
        "effectText": "You operate the pneumatic hoist with surgical precision.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless loading! The vaults dock into the shock cradles with zero pressure loss.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The vaults are locked in, though one hydraulic sling scrapes your tailgate.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sling slips on frost, jolting a stasis pod and venting coolant.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren03_inspect_specimen",
        "label": "Examine the bio-luminescent cryo-fluid in the observation port [ROLL +CYBER]",
        "effectText": "You scan the chemical composition with your handheld spectrometer.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Fascinating discovery! The fluid operates as a superconductor that could drastically increase rig cooling efficiency!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The stasis fields are stable, holding at -180 degrees Celsius.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The sensor probe shorts in the extreme cold.",
          "rewards": {
            "credits": -100,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren03_consume_cryo",
        "label": "Supply 1 Cryo Pod from your hold to recharge their field compressor [INVENTORY]",
        "effectText": "You donate a cryo container to fortify the vault containment matrix.",
        "rewards": {
          "cargo": {
            "cryo": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Siren Stage": 1,
            "Street Cred": 8
          }
        },
        "reqs": {
          "cargo": {
            "cryo": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_04_drone_patrol",
    "title": "The Arctic Hunter Grid",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 3
      },
      "maxQualities": {
        "Siren Stage": 3
      }
    },
    "text": "Aegis Arctic Sweeper drones armed with thermal-guided missiles sweep the snowfields. Their infrared sensors are searching for the distinct heat signature of your truck exhaust.",
    "options": [
      {
        "id": "opt_siren04_coolant_dump",
        "label": "Vent sub-zero cryo-gas through exhaust stacks to zero your thermal signature [ROLL +COOL]",
        "effectText": "You flood the mufflers with cryogenic vapor.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect ghost transit! The drones sweep right over your truck, reading ambient snow temperature.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The stealth holds, though cabin windows frost over entirely.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sudden exhaust backfire alerts a hunter drone, drawing rocket fire!",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Siren Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_siren04_emp_flare",
        "label": "Launch an electronic counter-measure flare into the drone cluster [ROLL +CYBER]",
        "effectText": "You fire an EMP flare from your roof dispenser.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Direct drone disruption! Two drones tumble into the snowdrifts, disabling the patrol array.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The drones are blinded long enough for your hauler to duck behind an icy ridge.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The flare misfires, illuminating your cab on their optical targeting systems.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren04_snow_burrow",
        "label": "Pull into a snow trench and shut off all engines until the patrol passes",
        "effectText": "You sit in total darkness and silence as the drones buzz past overhead.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_05_leaking_manifold",
    "title": "Thermal Shock in the Cylinders",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 4
      },
      "maxQualities": {
        "Siren Stage": 4
      }
    },
    "text": "The cryogenic cold has cracked the alloy engine manifold! Sub-zero coolant is spraying across hot engine blocks, creating blinding vapor clouds and threatening catastrophic cylinder cracking.",
    "options": [
      {
        "id": "opt_siren05_rapid_weld",
        "label": "Braze the cracked manifold with high-tensile copper wire [ROLL +GRIT]",
        "effectText": "You pull on insulated gloves and weld the glowing crack in sub-zero wind.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterful roadside mechanics! The brazed seal is stronger than the original cast iron.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The weld holds the pressure, though you burn your palm on the exhaust housing.",
          "rewards": {
            "hullIntegrity": 5,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The brittle manifold fractures further before you can clamp it.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren05_bypass_loop",
        "label": "Jury-rig a bypass circuit to divert coolant away from the cracked bank [ROLL +CYBER]",
        "effectText": "You re-plumb the secondary cooling lines using diagnostic bypass clamps.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless fluid dynamic rerouting! Engine operates safely within normal thermal parameters.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The bypass functions, though horsepower is restricted.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Coolant pressure blows out a rubber gasket, dousing the alternator.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren05_chemical_sealant",
        "label": "Pour ceramic sealing compound into the cooling expansion tank",
        "effectText": "The chemical plug seals the crack from the inside.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_06_raider_ice_trucks",
    "title": "The Frost Harvesters",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 5
      },
      "maxQualities": {
        "Siren Stage": 5
      }
    },
    "text": "Outlaw ice-pirates on studded quad-tracks swarm your convoy. Armed with pneumatic harpoons and thermite torches, they intend to steal the Siren cryo-vaults to sell to black-market bio-hackers.",
    "options": [
      {
        "id": "opt_siren06_ram_harvesters",
        "label": "Ram their spiked lead buggy with your armored ice-breaker prow [ROLL +GRIT]",
        "effectText": "You throttle up and smash through the raider interceptor.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Catastrophic impact! The lead buggy is crushed into shards of ice and twisted metal.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash their blockade, sustaining dents on your front fenders.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A raider harpoon hooks your trailer door before snapping free.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren06_ice_drift",
        "label": "Hard-drift the heavy trailer to sweep the raider bikes off the road [ROLL +EDGE]",
        "effectText": "You pitch the 35-ton rig into a controlled icy skid.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary driving! The swinging trailer sweeps three raider snowmobiles off the embankment into the snowdrifts!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Raiders veer away in panic, giving you clear road ahead.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The trailer skids wide and clips a boulder, jolting your steering wheel.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren06_cryo_spray",
        "label": "Vent pressurized liquid nitrogen from your exterior spray nozzles [ROLL +CYBER]",
        "effectText": "You trigger the cryogenic purge valve on pursuing vehicles.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sub-zero flash-freeze! Raider tires shatter like glass on the frozen tarmac!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The nitrogen cloud blinds the attackers, forcing them to brake hard.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Cold vapor drafts back into your cabin, freezing dashboard controls.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_07_frozen_town",
    "title": "The Shivering Citadel",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 6
      },
      "maxQualities": {
        "Siren Stage": 6
      }
    },
    "text": "You dock in Neo-Duluth, an isolated mining settlement locked in perpetual winter. The town clinic is overwhelmed with hypothermic miners suffering from pulmonary frost-scars.",
    "options": [
      {
        "id": "opt_siren07_treat_miners",
        "label": "Use Dr. Frost's cellular regenerative compounds to treat the miners [ROLL +COOL]",
        "effectText": "You and Dr. Frost distribute stabilized cryo-healing balm to the workers.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous recoveries! The miner guild blesses your name and gifts high-grade superconductor batteries!",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You stabilize the worst patients, earning the gratitude of local elders.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Suspicious corporate enforcers in the crowd demand identification papers.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_siren07_barter_parts",
        "label": "Barter with the settlement chief for cold-weather truck upgrades [ROLL +COOL]",
        "effectText": "You negotiate for reinforced thermal lubricants and studded tires.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Exceptional bargain! You outfit your hauler with Arctic-grade running gear at half price.",
          "rewards": {
            "credits": -200,
            "hullIntegrity": 25,
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You acquire basic antifreeze and replacement filters.",
          "rewards": {
            "credits": -150,
            "hullIntegrity": 10,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The chief gouges you on essential fuel reserves.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren07_rest_cab",
        "label": "Rest in your heated cab and inspect the refrigeration telemetry",
        "effectText": "A hot meal and diagnostic sweep prepare you for the next leg.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_08_frost_mutation",
    "title": "The Awakening Sample",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 7
      },
      "maxQualities": {
        "Siren Stage": 7
      }
    },
    "text": "A rhythmic pulsing vibrates through the cargo floor. Inside Cryo-Vault 01, the Siren genome has begun rapid cellular replication in the presence of ambient electrical radiation from your alternator. A sapphire crystal lattice is growing across the chamber walls.",
    "options": [
      {
        "id": "opt_siren08_harvest_crystal",
        "label": "Extract a sample of the superconducting sapphire lattice [ROLL +CYBER]",
        "effectText": "You use insulated tweezers to harvest a shard of the growing crystal.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unprecedented material! The crystalline lattice exhibits zero electrical resistance at any temperature!",
          "rewards": {
            "cargo": {
              "cyberware": 2
            },
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You safely isolate a viable sample for Dr. Frost.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Static shock arcs into your hands, stinging your nerve pathways.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren08_stabilize_matrix",
        "label": "Inject cryogenic dampeners to slow the growth to safe levels [ROLL +GRIT]",
        "effectText": "You manually crank the high-pressure nitrogen injection valves.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect containment stabilization! The growth halts and crystallizes into a solid armor plate.",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You arrest the growth before chamber pressure breaches limits.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Overpressure blows a safety gasket, venting blue vapor into the cargo hold.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren08_vent_excess",
        "label": "Vent excess bio-electrical charge into the truck battery bank",
        "effectText": "Your batteries soak up the exotic energy charge.",
        "rewards": {
          "cargo": {
            "batteries": 1
          },
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_09_bridge_collapse",
    "title": "The Fissure of the Frozen Lake",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 8
      },
      "maxQualities": {
        "Siren Stage": 8
      }
    },
    "text": "Crossing the vast expanse of frozen Lake Superior, a deafening crack echoes through the ice! The heavy hauler breaks through the crust, front wheels sinking into black glacial water as the chassis teeters on the edge of the abyss!",
    "options": [
      {
        "id": "opt_siren09_reverse_winch",
        "label": "Fire rear hydraulic anchor spikes and slam reverse gear [ROLL +GRIT]",
        "effectText": "You lock differentials and dump maximum torque to drag the front axle backward.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Immense pulling power! The spikes hold fast and your rear wheels haul the rig back onto solid bedrock!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You wrench the hauler clear, though front hubs are caked in ice.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The ice gives way further, soaking the engine before you claw onto the ice shelf.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren09_gun_across",
        "label": "Floor the throttle and launch the hauler across the widening fracture [ROLL +EDGE]",
        "effectText": "You gun the turbocharged diesel and skip the front wheels over the crack.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular jump! Kinetic momentum carries your 35-ton rig cleanly across the fissure onto solid ice!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the gap, though your trailer bottom scrapes the ice shelf.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The trailer drops into the trench, requiring hours of high-tension winching.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren09_dump_ballast",
        "label": "Dump 1 unit of scrap ballast to instantly lighten the front load",
        "effectText": "Shedding weight allows the front suspension to lift out of the water.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_10_the_crossroads",
    "title": "The Crucible of the Cold [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 9
      },
      "maxQualities": {
        "Siren Stage": 9
      }
    },
    "text": "At the northern junction of Iron Mountain, Dr. Frost sits across from you in the cabin. \"The Siren project is mature,\" she whispers. \"Three factions seek to claim its revolutionary cold-fusion superconductivity. Where do we deliver the future of cryogenic science?\"",
    "options": [
      {
        "id": "opt_siren10_choose_boreal",
        "label": "Path 1: Deliver to the Boreal Reclaimer Commune [SUPERCONDUCTOR VANGUARD]",
        "effectText": "You choose independence and the survival of the northern worker enclaves. The commune will freely distribute the superconductor tech to all haulers.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1,
            "Siren Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_siren10_choose_solaris",
        "label": "Path 2: Contract with Solaris Cryo-Energy [PERMAFROST ARC]",
        "effectText": "You choose sovereign corporate power. Solaris will build continental zero-resistance electrical grids and grant you executive immunity.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1,
            "Siren Chosen Path": 2,
            "Enclave Permits": 3
          }
        }
      },
      {
        "id": "opt_siren10_choose_chitin",
        "label": "Path 3: Integrate the Superconducting Lattice Directly into your Hauler [ARCTIC PREDATOR]",
        "effectText": "You choose personal transcendence. The crystalline superconductor will permanently fuse with your engine block and chassis lattice.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1,
            "Siren Chosen Path": 3,
            "Tech Literacy": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_11_airdrop_blockade",
    "title": "The Blizzard Blockade",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 10
      },
      "maxQualities": {
        "Siren Stage": 10
      }
    },
    "text": "Corporate air-skimmers deploy thermal minefields across the final highway pass. Automated laser sensors sweep the snow, waiting for any vehicle to trigger the perimeter.",
    "options": [
      {
        "id": "opt_siren11_thermal_spoof",
        "label": "Transmit cryo-diffraction pulses to blind the infrared mine sensors [ROLL +CYBER]",
        "effectText": "You project sub-zero harmonic interference across the minefield.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total sensor blinding! The laser grids scramble into static, allowing you to cruise right through.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the field safely, though your signal dish burns out from power overload.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A proximity mine detonates near your left wheels, spraying shrapnel.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren11_slalom_snow",
        "label": "Slalom between sensor pillars at breakneck rally speed [ROLL +EDGE]",
        "effectText": "You thread your tires between laser tripwires.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless reflex driving! You weave through the killzone without grazing a single beam.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the hazard, taking minor paint scoring from a deflected sensor pulse.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You clip a sensor pylon, triggering an explosive warning salvo.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren11_overland_detour",
        "label": "Take the treacherous untracked mountain ridge detour",
        "effectText": "A rough, rocky bypass avoids the minefield entirely at the cost of chassis wear.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_12_cryo_surge",
    "title": "The Superconducting Pulse",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 11
      },
      "maxQualities": {
        "Siren Stage": 11
      }
    },
    "text": "As the destination approaches, the Siren core surges with raw superconducting energy. Pure blue plasma crackles across the hauler's steel chassis, dropping engine friction to near zero and boosting kinetic output to unprecedented levels!",
    "options": [
      {
        "id": "opt_siren12_channel_drive",
        "label": "Channel the plasma surge directly into your wheel hub motors [ROLL +EDGE]",
        "effectText": "You open the magnetic relays to route superconductor energy to all eight wheels.",
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superluminal acceleration! The hauler streaks across the ice at 190 km/h in breathtaking silence!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Acceleration spikes dramatically, carrying you forward safely.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A surge arcs into your dashboard, blowing several analog gauge needles.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren12_fortify_chassis",
        "label": "Direct the cryogenic field to crystalize and harden the hull plating [ROLL +GRIT]",
        "effectText": "You let the sub-zero resonance restructure the exterior armor lattice.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The armor plates solidify into diamond-hard cryogenic composite!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The armor hardens, absorbing structural vibrations.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Some brittle surface frost flakes off along the wheel wells.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren12_vent_capacitor",
        "label": "Discharge excess superconducting voltage into the ground rods",
        "effectText": "You safely bleed off the energy build-up.",
        "rewards": {
          "qualities": {
            "Siren Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_13_air_cavalry",
    "title": "The Last Cordon of Fire",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 12
      },
      "maxQualities": {
        "Siren Stage": 12
      }
    },
    "text": "Aegis heavy gunships drop out of the storm clouds. They unleash incendiary missiles to incinerate the road ahead, intending to destroy Dr. Frost and the Siren matrix in a localized firestorm.",
    "options": [
      {
        "id": "opt_siren13_cryo_cannon_snipe",
        "label": "Fire a pressurized cryo-core shell from your roof-mount launcher [ROLL +EDGE]",
        "effectText": "You target the lead gunship's jet intake with a sub-zero canister.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Direct engine hit! The turbine intake flash-freezes solid, sending the gunship spinning into the snow drifts!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gunship breaks off its attack run, billowing white vapor.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return missile shrapnel peppers your trailer sidewalls.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren13_charge_firewall",
        "label": "Ram through the flaming incendiary barrier at maximum speed [ROLL +GRIT]",
        "effectText": "You drop your chin, floor the throttle, and smash through the flames.",
        "statRoll": "grit",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The cryogenic superconducting aura extinguishes the fire instantly as you blast through untouched!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You burst through the flames with singed rubber seals.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Fire scorches your trailer wiring harnesses before you emerge.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_siren13_hack_air_datalink",
        "label": "Transmit false terrain collision warnings into the gunship radars [ROLL +CYBER]",
        "effectText": "You jam their low-altitude flight avionics with emergency climb alerts.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The gunships automatically abort their dive, soaring upward into the cloud deck!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Gunships hesitate, allowing you to slip past into the valley.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electronic countermeasures ping back into your radio, blowing a fuse.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Siren Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_14_arctic_climax",
    "title": "The Sub-Zero Horizon [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 13
      },
      "maxQualities": {
        "Siren Stage": 13
      }
    },
    "text": "You have broken through the cordon! Dawn lights up the glacial wilderness in brilliant diamond glare as you approach your final objective and complete your chosen destiny.",
    "options": [
      {
        "id": "opt_siren14_boreal_delivery",
        "label": "Hand over the Siren Matrix to the Boreal Reclaimers [COMMUNE PATH] [ROLL +COOL]",
        "effectText": "You pull into the underground reclaimer citadel to deliver the free superconductor matrix.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The northern workers erupt in ecstatic triumph! You are crowned the Champion of the North!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The delivery is completed and payment transferred in full.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense customs checks conclude with full transfer.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_siren14_solaris_transfer",
        "label": "Transfer the Siren patents to the Solaris Executive Directorate [SOLARIS PATH] [ROLL +COOL]",
        "effectText": "You pull into the high-security corporate monorail terminal.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Immense corporate bounty! Billions in bearer bonds and permanent diplomatic immunity are yours!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Siren Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Solaris honors the contract with full payouts.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The corporate debriefing is cold, but funds clear.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_siren14_chitin_integration",
        "label": "Permanently fuse the superconductor lattice into your hauler's chassis [PREDATOR PATH] [ROLL +CYBER]",
        "effectText": "You weld the crystalline core directly into the hauler's main engine block.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Technological godhood! The Iron Nomad becomes a self-cooling, friction-less superconducting dreadnought!",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The fusion locks in cleanly, permanently boosting your powertrain.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-voltage arcs rattle the cab before the system balances.",
          "rewards": {
            "qualities": {
              "Siren Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_siren_15_finale",
    "title": "The Frost Sovereign [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Siren Stage": 14
      },
      "maxQualities": {
        "Siren Stage": 14
      }
    },
    "text": "The Arctic saga is complete. Your hauler has been permanently retrofitted with revolutionary cryogenic superconductor engineering.",
    "options": [
      {
        "id": "opt_siren15_ending_commune",
        "label": "Rule the Northern Corridors with the Permafrost Vanguard [ENDING 1: PERMAFROST VANGUARD]",
        "effectText": "Fitted with the Boreal Superconductor Chiller, your hauler operates at zero thermal friction with reinforced Arctic armor plating.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "cryo": 3,
            "batteries": 3
          },
          "qualities": {
            "Siren Stage": 80,
            "Street Cred": 25,
            "Heat": -40
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "speedRating": 0.15,
            "maxHull": 20,
            "name": "Iron Nomad - Permafrost Vanguard"
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_siren15_ending_solaris",
        "label": "Command Executive Highway Lanes in the Solaris Frost-Arc [ENDING 2: SOLARIS FROST-ARC]",
        "effectText": "Awarded Solaris executive credentials, your rig features zero-resistance superconducting alternators and diplomatic cargo holds.",
        "rewards": {
          "credits": 18000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 3
          },
          "qualities": {
            "Siren Stage": 80,
            "Enclave Permits": 3,
            "Street Cred": 20
          },
          "stats": {
            "cool": 1,
            "grit": 1
          },
          "rig": {
            "speedRating": 0.18,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Solaris Frost-Arc"
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_siren15_ending_predator",
        "label": "Unleash the Frictionless Terror of the Arctic Predator [ENDING 3: ARCTIC PREDATOR]",
        "effectText": "Your rig is an apex mechanical organism. Superconducting cooling loops grant blazing top speed and heavy reinforced hull plates.",
        "rewards": {
          "credits": 12000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "batteries": 2
          },
          "qualities": {
            "Siren Stage": 80,
            "Tech Literacy": 25,
            "Street Cred": 20
          },
          "stats": {
            "cyber": 1,
            "grit": 1
          },
          "rig": {
            "speedRating": 0.22,
            "maxHull": 30,
            "name": "Iron Nomad - Arctic Predator"
          }
        },
        "reqs": {
          "qualities": {
            "Siren Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_siren15_farewell",
        "label": "Collect final courier fee and depart into the frozen dawn",
        "effectText": "With the Siren matrix secured, you roll out onto the open road.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Siren Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 15
          }
        }
      }
    ]
  }
];
