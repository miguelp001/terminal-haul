import { Storylet } from '../types/storylet';

export const EDEN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_eden_01_botanical_bunker",
    "title": "The Vault of Living Amber",
    "triggerType": "DOCK",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "maxQualities": {
        "Eden Stage": 0
      }
    },
    "text": "At an abandoned agricultural silo in the desolate Dust Bowl, a botanist named Dr. Silas Green flags down your hauler. In his arms is an insulated stasis cylinder containing the \"Eden-10\" seed pods—the last genetically intact, drought-immune cereal grains capable of growing in radioactive silica dust. \"OmniDyne Agri-Corp wants to incinerate this vault to keep their synthetic paste monopoly,\" Silas pleads. \"Haul the seeds to the Midwest Oasis Valley, and we will green the dead continent.\"",
    "options": [
      {
        "id": "opt_eden01_accept_contract",
        "label": "Accept the botanical courier contract and calibrate refrigeration [ROLL +COOL]",
        "effectText": "You negotiate transport fees and calculate optimal climate-controlled routes.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! Silas transfers a 1,500 credit advance and gives you nutrient-rich starter cultures.",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "grain": 2
            },
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and lock the stasis cylinder in your hold.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate spotters notice the botanical hazmat seal, raising perimeter alarms.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_eden01_scan_genetic_code",
        "label": "Scan the seeds' biological markers with your cyberdeck [ROLL +CYBER]",
        "effectText": "You analyze the genetic sequences on your digital display.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Astounding biotechnology! The seeds produce nitrogen-fixing roots that actively purify poisoned soil!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The genetic strains are stable and holding at optimal dormant temperatures.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The sensor scanner probe causes a momentary thermal spike in the chamber.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden01_prepare_hold",
        "label": "Install humidified thermal blankets around the cargo bay floor",
        "effectText": "You prepare the hold to protect the living seeds from desert heat.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_02_alkali_dust_storm",
    "title": "The Alkaline Whiteout",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 1
      },
      "maxQualities": {
        "Eden Stage": 1
      }
    },
    "text": "A blinding white alkaline dust storm sweeps across the Nebraska flats. The caustic dust burns rubber seals and threatens to penetrate your cargo bay air filters.",
    "options": [
      {
        "id": "opt_eden02_reverse_scrubbers",
        "label": "Overcharge electrostatic air scrubbers to repel alkaline dust [ROLL +CYBER]",
        "effectText": "You reverse intake blower polarity to blow dust away from the filters.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Clean airflow maintained! The cargo hold remains 100% pure while the storm howls outside.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The scrubbers hold the line, though your batteries draw heavy current.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Alkaline dust clogs your cabin filter, stinging your eyes and throat.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden02_plow_dunes",
        "label": "Drop into low gear and push through the caustic white drifts [ROLL +GRIT]",
        "effectText": "You keep the accelerator steady and plow through the white powder.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic drive! The hauler carves a clean track through the storm front.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You muscle through the storm, taking minor paint scoring.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A deep alkaline drift bogs down your trailer, forcing roadside shoveling.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden02_storm_shutters",
        "label": "Drop side storm shutters and navigate by compass bearings",
        "effectText": "Slow, careful navigation preserves your engine filters.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_03_agri_sweepers",
    "title": "The Crop-Burner Patrol",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 2
      },
      "maxQualities": {
        "Eden Stage": 2
      }
    },
    "text": "Two OmniDyne Agri-Corp flame-trucks intercept you on Route 80. Equipped with industrial herbicide cannons and flamethrowers, they are tasked with incinerating any un-patented seeds.",
    "options": [
      {
        "id": "opt_eden03_ram_sweepers",
        "label": "Ram their unarmored tanker truck with your heavy steel bull-bar [ROLL +GRIT]",
        "effectText": "You line up your bumper and smash into their lead herbicide truck.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating kinetic smash! The tanker overturns in a cloud of foam, clearing the road ahead!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You ram past their blockade, taking glancing blows to your fenders.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Herbicide spray strips paint from your cab and cracks a side mirror.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden03_speed_slalom",
        "label": "Use your high-torque transmission to out-accelerate them on the dual-lane [ROLL +EDGE]",
        "effectText": "You drop into high gear and pull away at 140 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superior highway speed! The lumbering tanker trucks fade into the distance within minutes!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You outrun their pursuit, though your tires smell of scorched rubber.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An automated flame-drone wings your trailer roof before peeling off.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden03_chemical_smoke",
        "label": "Deploy an ultra-dense chemical smoke screen across both lanes",
        "effectText": "Blinded by smoke, the sweepers brake hard and lose tracking.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_04_starving_settlement",
    "title": "The Dust Bowl Clinic",
    "triggerType": "DOCK",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 3
      },
      "maxQualities": {
        "Eden Stage": 3
      }
    },
    "text": "You pull into a starving farming commune where families survive on synthetic yeast sludge. A sick child reaches toward your trailer vents, smelling the fresh aroma of living plant matter.",
    "options": [
      {
        "id": "opt_eden04_plant_sample",
        "label": "Help the commune elder plant a small demonstration bed with Dr. Green [ROLL +COOL]",
        "effectText": "You and Dr. Green till a patch of dirt and plant five fast-sprouting Eden seeds.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A miraculous green shoot sprouts before their eyes! The farmers weep with joy, loading fresh batteries and scrap into your truck!",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The demonstration succeeds, filling the settlement with renewed hope.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Desperate farmers crowd the truck steps, pleading for seed handfuls.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden04_donate_grain_bag",
        "label": "Distribute 1 unit of Synthetic Grain from your hold to feed the settlement [INVENTORY]",
        "effectText": "Your generous grain donation feeds forty families and secures their eternal loyalty.",
        "rewards": {
          "cargo": {
            "grain": -1
          },
          "qualities": {
            "Eden Stage": 1,
            "Street Cred": 12
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "cargo": {
            "grain": 1
          }
        }
      },
      {
        "id": "opt_eden04_rest_and_depart",
        "label": "Offer words of encouragement, refuel your tanks, and proceed quietly",
        "effectText": "You keep the mission moving forward to deliver the master vault.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_05_refrigeration_failure",
    "title": "The Thermal Thaw Crisis",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 4
      },
      "maxQualities": {
        "Eden Stage": 4
      }
    },
    "text": "A red warning alarm sounds in the cab: the stasis cylinder's freon compressor has seized! Internal temperatures are climbing toward 25 degrees; if the seeds awaken early in transit, they will perish without soil.",
    "options": [
      {
        "id": "opt_eden05_juryrig_coolant",
        "label": "Splice your truck's engine freon lines into the stasis chamber [ROLL +CYBER]",
        "effectText": "You grab high-pressure hoses and route refrigerant into the cylinder jacket.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless thermodynamic bypass! Temperatures drop back into deep dormancy within two minutes!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The patch stabilizes the chamber, though cabin AC is sacrificed.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Cold freon vents onto your hands, stinging your skin before you clamp it.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden05_consume_cryo",
        "label": "Supply 1 Cryo Pod from your hold to recharge the stasis cooling system [INVENTORY]",
        "effectText": "The pure cryo pod restores sub-zero containment instantly.",
        "rewards": {
          "cargo": {
            "cryo": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Eden Stage": 1,
            "Street Cred": 8
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "cargo": {
            "cryo": 1
          }
        }
      },
      {
        "id": "opt_eden05_ice_pack_emergency",
        "label": "Pack emergency dry ice bags around the cylinder housing",
        "effectText": "A quick roadside stop cools the core back to baseline.",
        "rewards": {
          "credits": -200,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_06_corporate_bribe",
    "title": "The OmniDyne Ultimatum",
    "triggerType": "DOCK",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 5
      },
      "maxQualities": {
        "Eden Stage": 5
      }
    },
    "text": "While refueling at an automated highway node, an encrypted holocall illuminates your console. An OmniDyne executive smiles smoothly: \"Courier, you hold seeds that could cost our corporation twenty billion in annual synthetic paste sales. Hand over the cylinder. We will transfer 15,000 credits to your personal ledger and grant you executive immunity. Refuse, and our gunships will vaporize your truck.\"",
    "options": [
      {
        "id": "opt_eden06_reject_bribe",
        "label": "Spit on the holographic terminal and tell the executive to choke on their paste [ROLL +GRIT]",
        "effectText": "You broadcast your defiant refusal with thunderous trucker pride.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary defiance! Word leaks to the rebel airwaves; your name becomes an icon of resistance!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 14,
              "Heat": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You cut the feed and rev your engine into gear.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Heat": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate signals triangulate your location, dispatching hunter drones.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Heat": 25
            }
          }
        }
      },
      {
        "id": "opt_eden06_counter_blackmail",
        "label": "Threaten to leak unredacted video of their crop-burning atrocities [ROLL +COOL]",
        "effectText": "You transmit encrypted camera logs of their herbicide squads.",
        "statRoll": "cool",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterful extortion! The executive panics, transferring a 2,500 credit hush advance to delay the leak!",
          "rewards": {
            "credits": 2500,
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The executive backs down and delays airstrikes.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The executive laughs off your bluff with cold corporate arrogance.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_eden06_burn_transponder",
        "label": "Burn your transponder chip and vanish from satellite radar nets",
        "effectText": "You drop off the digital grid and proceed under radar silence.",
        "rewards": {
          "credits": -200,
          "qualities": {
            "Eden Stage": 1,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_07_irrigation_canal",
    "title": "The Drowned Sluice Gate",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 6
      },
      "maxQualities": {
        "Eden Stage": 6
      }
    },
    "text": "A burst irrigation canal has flooded the highway with four feet of muddy, silt-laden water. The current is swift, carrying uprooted trees and debris across the submerged roadway.",
    "options": [
      {
        "id": "opt_eden07_ford_current",
        "label": "Engage differential locks and ford the raging current with heavy iron weight [ROLL +GRIT]",
        "effectText": "You aim your heavy bumper into the current and hold 1,500 RPM.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Massive aquatic power! The 35-ton rig parts the floodwaters like an iron barge, crossing safely!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You make the crossing, though muddy water washes your running boards.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The current nudges your rear trailer, clipping a concrete culvert marker.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden07_winch_tree_anchor",
        "label": "Winch against sturdy roadside oak trees to secure your crossing [ROLL +EDGE]",
        "effectText": "You use your high-tension steel winch cable as a safety guideline.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brilliant safety engineering! The hauler glides across the flooded section with zero drift.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The winch holds, though the cable groans under the current's drag.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The tree roots give way under load, dropping the cable into the mud.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden07_slow_crawl",
        "label": "Crawl at 10 km/h with hazard beacons flashing",
        "effectText": "Steady weight and low speed carry you safely through the flood.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_08_living_seedling",
    "title": "The Green Sprout of Hope",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 7
      },
      "maxQualities": {
        "Eden Stage": 7
      }
    },
    "text": "Inside the stasis cylinder observation port, a single seed has sprouted into a luminous emerald seedling, its roots weaving an intricate bio-polymer lattice that releases pure oxygen into your cab atmosphere.",
    "options": [
      {
        "id": "opt_eden08_nurture_seedling",
        "label": "Direct calibrated nutrient mist and LED spectrum light to nurture the sprout [ROLL +CYBER]",
        "effectText": "You tune your cabin climate controls to optimize the seedling's growth.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous vitality! The seedling secretes a bio-regenerative sap that Dr. Green synthesizes into cellular healing stims!",
          "rewards": {
            "cargo": {
              "cyberware": 2
            },
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The seedling thrives, filling the cab with the sweet fragrance of pine and fresh earth.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Light calibration flickers, slightly singeing a tender leaf.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden08_harvest_oxygen",
        "label": "Route the plant's pure oxygen output directly into the driver's respirator [ROLL +GRIT]",
        "effectText": "You breathe deeply of the pure pre-collapse oxygen.",
        "statRoll": "grit",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total physical rejuvenation! Mental fatigue vanishes; reflexes and stamina surge to peak performance!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Clean oxygen clears your head and steadies your hands.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Oxygen regulator spikes, making you cough briefly.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden08_seal_port",
        "label": "Tighten the observation hatch to keep dormancy conditions uniform",
        "effectText": "You preserve the remaining seeds for arrival at the master sanctuary.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_09_aerial_gunship_ambush",
    "title": "The Sky Fire of OmniDyne",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 8
      },
      "maxQualities": {
        "Eden Stage": 8
      }
    },
    "text": "Two OmniDyne heavy rotorcraft dive from the storm clouds, firing incendiary rockets at your trailer. \"TARGET CONFIRMED. TERMINATE THE BIOLOGICAL CONVOY WITH MAXIMUM PREJUDICE.\"",
    "options": [
      {
        "id": "opt_eden09_roof_snipe",
        "label": "Unlimber your heavy high-velocity rifle and target their rotor hubs [ROLL +EDGE]",
        "effectText": "You line up the rifle sights through the cab roof hatch.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular marksmanship! The lead rotorcraft's tail assembly is severed, sending it spinning into an empty cornfield!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You damage their targeting sensor array, forcing them to break off.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Rocket shrapnel peppers your trailer roof, denting the outer skin.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden09_evasive_tree_cover",
        "label": "Dive beneath a canopy of dense roadside willow trees at 120 km/h [ROLL +EDGE]",
        "effectText": "You pitch the heavy hauler into the shadowed tree line.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless tree-cover evasive driving! Their thermal targeting loses lock completely in the foliage!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You escape their missile line, though branches scrape your cab paint.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A falling branch cracks your passenger wing mirror.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden09_deploy_flares",
        "label": "Launch all defensive flare countermeasures into the sky",
        "effectText": "Burning magnesium flares divert their thermal missiles into the dirt.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_10_the_crossroads",
    "title": "The Garden of Destinies [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 9
      },
      "maxQualities": {
        "Eden Stage": 9
      }
    },
    "text": "At the secret river valley depot of New Eden, Dr. Silas Green turns to you with tears in his eyes. \"The seeds of life are safe,\" he whispers. \"Three distinct paths lie before us. How shall we plant the rebirth of the world?\"",
    "options": [
      {
        "id": "opt_eden10_choose_harvester",
        "label": "Path 1: Mount the Bio-Regenerative Soil Hydro-Prow permanently on your Rig [HARVESTER OF EDEN]",
        "effectText": "You choose sovereign machine life. Your hauler will be permanently retrofitted with terraforming soil-injectors, expanding cargo capacity by 10 tons and reinforcing armor.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1,
            "Eden Chosen Path": 1,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_eden10_choose_commonwealth",
        "label": "Path 2: Found the Sovereign Agrarian Commonwealth [GREEN COMMONWEALTH]",
        "effectText": "You choose the liberation of the wasteland people. You and Silas will plant the seeds across the entire Midwest, building a self-sustaining green empire free from corporate hunger.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1,
            "Eden Chosen Path": 2,
            "Street Cred": 30
          }
        }
      },
      {
        "id": "opt_eden10_choose_synthetics",
        "label": "Path 3: Contract the Genetic Formula to the Free Bio-Synthetics Syndicate [EDEN TITAN]",
        "effectText": "You choose immense commercial power. The syndicate will mass-produce drought-immune food, awarding you sovereign wealth and high-output heavy armor.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1,
            "Eden Chosen Path": 3,
            "Contraband Mastery": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_11_perimeter_tank_blockade",
    "title": "The Last Corporate Wall",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 10
      },
      "maxQualities": {
        "Eden Stage": 10
      }
    },
    "text": "OmniDyne has deployed two heavy armored battle-tanks across the valley bridge. Their 120mm smoothbore cannons are aimed dead-center at your grille.",
    "options": [
      {
        "id": "opt_eden11_ram_tank_outrigger",
        "label": "Charge at maximum speed and ram the lighter tank's track assembly [ROLL +GRIT]",
        "effectText": "You sound the war horns, put the hammer down, and ram their track with 40 tons of kinetic momentum.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cataclysmic kinetic breakthrough! The tank's track is severed and thrown, wedging it against the bridge wall as you roar past!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 16
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash past their barricade, taking heavy cannon blast concussion.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A direct tank shell grazes your trailer armor before you break through.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden11_hack_tank_targeting",
        "label": "Transmit Dr. Green's agricultural master overrides into their fire computers [ROLL +CYBER]",
        "effectText": "You beam the root code packet into their optical turret links.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Full fire-control lock! The tank turrets lock in safe transit mode, allowing your convoy to roll through untouched!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The tank turrets hesitate for fifteen seconds, enough to sprint past.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures deflect your signal; cannons fire warning rounds.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden11_river_bypass",
        "label": "Drive off the bridge embankment and ford the river shallows",
        "effectText": "Heavy mud and water bypass the bridge at the cost of chassis wear.",
        "rewards": {
          "hullIntegrity": -12,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_12_chassis_bio_restoration",
    "title": "The Living Armor Lattice",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 11
      },
      "maxQualities": {
        "Eden Stage": 11
      }
    },
    "text": "Micro-spores escaping the Eden cylinder have bonded with your hauler's undercarriage metal. Instead of corroding, a hardy green bio-resin fills every microscopic stress crack, healing metal in real time!",
    "options": [
      {
        "id": "opt_eden12_direct_bio_bonding",
        "label": "Guide the bio-resin growth along your primary chassis frame rails [ROLL +GRIT]",
        "effectText": "You monitor the organic self-repair process along the load-bearing beams.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Living machine symbiosis! The frame regenerates completely, granting unprecedented structural durability!",
          "rewards": {
            "hullIntegrity": 45,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The resin seals all frame micro-fractures, absorbing vibrations.",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Green overgrowth covers your oil drain plug, requiring cleanup.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden12_expand_cargo_bed",
        "label": "Use the strengthened bio-composite brackets to widen the trailer hold [ROLL +GRIT]",
        "effectText": "You reconfigure trailer outriggers with the reinforced alloy brackets.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Maximum cargo expansion! You gain 10 full tons of additional cargo hauling capacity!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cargo hold space expands cleanly.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A bracket weld takes extra time to secure.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden12_inspect_all_seals",
        "label": "Conduct a complete physical walkaround to inspect the living green seams",
        "effectText": "The hauler looks magnificent with its living bio-resin trim.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_13_the_green_plain",
    "title": "The First Sprouting",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 12
      },
      "maxQualities": {
        "Eden Stage": 12
      }
    },
    "text": "You enter the great New Eden Valley. As your wheels turn along the river road, millions of wild Eden-10 seeds carried in your exhaust wake touch the soil. Golden wheat and emerald barley sprout instantly in your tracks like a living carpet!",
    "options": [
      {
        "id": "opt_eden13_speed_across_fields",
        "label": "Hold the throttle wide open and scatter the seeds across the entire valley [ROLL +COOL]",
        "effectText": "You drive in triumphant sweeping arcs across fifty square kilometers of fertile dirt.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The great greening of North America! A sea of golden wheat rolls across the horizon as far as the eye can see!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The seeds take root across thousands of acres, securing a harvest.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Mud splatters your windshield before you regain highway asphalt.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden13_broadcast_harvest_call",
        "label": "Broadcast the coordinates on all public radio bands to every starving settlement [ROLL +CYBER]",
        "effectText": "You open the radio and invite every free trucker and refugee to feast.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Millions hear your call! A jubilant armada of tractors, trucks, and families moves toward the valley!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The broadcast reaches dozens of nearby refugee camps.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Static garbles the frequency, but local stations pick it up.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_eden13_steady_course",
        "label": "Maintain a steady, dignified course toward the central granary silo",
        "effectText": "You deliver the master seed pods to the central vault doors.",
        "rewards": {
          "qualities": {
            "Eden Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_14_eden_climax",
    "title": "The Bread of the New World [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 13
      },
      "maxQualities": {
        "Eden Stage": 13
      }
    },
    "text": "The master vault doors of New Eden swing wide! Dr. Silas Green turns to you, holding up a sheaf of fresh golden wheat in triumphant glory.",
    "options": [
      {
        "id": "opt_eden14_lock_harvester",
        "label": "Lock the Bio-Regenerative Soil Hydro-Prow permanently into your rig [HARVESTER PATH] [ROLL +GRIT]",
        "effectText": "You weld the final terraforming brackets, crowned the Harvester of Eden.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign agrarian dominance! Your hauler commands unmatched cargo tonnage and living composite armor on continental roads!",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The terraforming modifications are permanently locked in.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Welds cool firmly, balancing with total stability.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_eden14_found_commonwealth",
        "label": "Sign the Charter of the Green Commonwealth [COMMONWEALTH PATH] [ROLL +COOL]",
        "effectText": "You sign the founding treaty, establishing a free agrarian republic.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Father of the Free World! Millions of citizens worship your name; the council outfits your rig with supreme transport trailers!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 35
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The Commonwealth is established with jubilation and feast.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "miss": {
          "effectText": "MISS: The treaty is signed with solemn reverence.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_eden14_contract_syndicate",
        "label": "Deliver the Synthetic Patents to the Bio-Tech Cartel [TITAN PATH] [ROLL +COOL]",
        "effectText": "You sell the commercial mass-production rights for billions in gold.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unprecedented billionaire wealth! Armored trailers and high-speed turbines are loaded onto your rig!",
          "rewards": {
            "credits": 15000,
            "qualities": {
              "Eden Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The syndicate honors the massive contract in full.",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Transaction concludes with full treasury transfers.",
          "rewards": {
            "qualities": {
              "Eden Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_eden_15_finale",
    "title": "The Harvester of Eden [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "pacific_northwest",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "pacific_northwest",
      "qualities": {
        "Eden Stage": 14
      },
      "maxQualities": {
        "Eden Stage": 14
      }
    },
    "text": "The saga of the Last Grain of Eden is concluded. Your rig has been permanently modified with revolutionary bio-regenerative engineering and massive cargo expansion.",
    "options": [
      {
        "id": "opt_eden15_ending_harvester",
        "label": "Command Continental Supply as the Harvester of Eden [ENDING 1: HARVESTER OF EDEN]",
        "effectText": "Equipped with the Bio-Regenerative Soil Hydro-Prow, your hauler commands +10 T Cargo Capacity, +20 Max Hull, and permanent +1 GRIT.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "grain": 5,
            "chips": 3
          },
          "qualities": {
            "Eden Stage": 80,
            "Street Cred": 35,
            "Heat": -50
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxCargoWeight": 10,
            "maxHull": 20,
            "name": "Iron Nomad - Harvester of Eden"
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_eden15_ending_commonwealth",
        "label": "Lead the Green Commonwealth as the Food Sovereign [ENDING 2: GREEN COMMONWEALTH]",
        "effectText": "Revered as the savior of humanity from famine, your rig is outfitted with massive +12 T cargo capacity trailers and emergency food dispensers.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "grain": 6,
            "batteries": 3
          },
          "qualities": {
            "Eden Stage": 80,
            "Street Cred": 40
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxCargoWeight": 12,
            "speedRating": 0.12,
            "name": "Iron Nomad - Green Commonwealth"
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_eden15_ending_synthetics",
        "label": "Rule the Global Market as the Eden Titan [ENDING 3: EDEN TITAN]",
        "effectText": "Flush with bio-tech cartel billions, your rig is armed with high-output turbines, reinforced titanium armor, and high-capacity holds.",
        "rewards": {
          "credits": 25000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Eden Stage": 80,
            "Street Cred": 30,
            "Contraband Mastery": 20
          },
          "stats": {
            "grit": 1,
            "edge": 1
          },
          "rig": {
            "speedRating": 0.2,
            "maxHull": 25,
            "name": "Iron Nomad - Eden Titan"
          }
        },
        "reqs": {
      "sector": "pacific_northwest",
          "qualities": {
            "Eden Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_eden15_farewell",
        "label": "Collect final harvest bonus and roll out toward golden horizons",
        "effectText": "With green wheat waving behind you, you merge back onto open asphalt.",
        "rewards": {
          "credits": 12000,
          "qualities": {
            "Eden Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxCargoWeight": 6
          }
        }
      }
    ]
  }
];
