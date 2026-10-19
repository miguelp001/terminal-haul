import { Storylet } from '../types/storylet';

export const COLOSSUS_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_colossus_01_behemoth_wakes",
    "title": "The Behemoth of Rustworks",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Colossus Stage": 0
      }
    },
    "text": "In the volcanic caldera behind the Rustworks primary foundries, an ancient steel leviathan rests upon twelve colossal caterpillar treads. Chief Smith Donald unrolls a hydraulic schematic across your hood. \"Hauler, this is the Iron Behemoth—a 120-ton amphibious land-dredge built before the Ashfall. We need an elite scout rig to escort her across the Salt Flats to the Great Lithium Basin.\"",
    "options": [
      {
        "id": "opt_col01_inspect_hydraulics",
        "label": "Inspect the main hydraulic suspension [ROLL +GRIT]",
        "effectText": "You crawl beneath the massive bogie assemblies to inspect heavy pressure seals.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You identify a micro-fracture in the steering servo and torque it true! Donald claps you on the back.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 3,
              "Colossus Trust": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Hydraulics hold pressure, though minor oil weeping requires top-up.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Trust": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: A pressurized line bursts, spraying mineral oil across your cab.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col01_calibrate_telemetry",
        "label": "Splice your hauler radar into the Behemoth bridge [ROLL +CYBER]",
        "effectText": "You bridge your convoy telemetry to the colossus’s vacuum-tube bridge.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect analog-to-digital handshake! The bridge dials flicker to life with crystal clarity.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 2,
              "Colossus Trust": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Connection established, though analog ground hum vibrates through the dashboard.",
          "rewards": {
            "credits": 400,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A blown transformer in the bridge terminal resets your cabin clock.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_col01_brotherhood_pledge",
        "label": "Accept the escort contract under the Nomad Guild Covenant",
        "effectText": "You sign the guild ledger and sound your air horn in solidarity with the iron workers.",
        "rewards": {
          "credits": 1000,
          "qualities": {
            "Colossus Stage": 1,
            "Street Cred": 4,
            "Colossus Trust": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_02_hydraulic_harvest",
    "title": "The High-Pressure Siphon",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 1
      },
      "maxQualities": {
        "Colossus Stage": 1
      }
    },
    "text": "On the first highway leg, the Behemoth’s secondary boiler groans under immense friction. \"We need high-pressure industrial lubricant,\" the radio crackles. Ahead sits an overturned corporate chemical transport on the shoulder.",
    "options": [
      {
        "id": "opt_col02_pry_valves",
        "label": "Force open the tanker manifold valves with heavy crowbars [ROLL +GRIT]",
        "effectText": "You climb the slick tanker ladder and lever the master transfer valve open.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Industrial lubricant flows in torrents! You fill the Behemoth’s reservoirs to maximum.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 100,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure sufficient lubricant, but toxic fumes burn your lungs.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 80
            }
          }
        },
        "miss": {
          "effectText": "MISS: A rusted valve stem shears off, splashing caustic grease onto your tires.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 60
            }
          }
        }
      },
      {
        "id": "opt_col02_route_pumps",
        "label": "Hotwire the tanker auxiliary transfer pumps [ROLL +CYBER]",
        "effectText": "You bypass the tanker security keypad to initiate automated suction.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Automated pumping transfers 500 liters cleanly in minutes!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 2,
              "Colossus Health": 95
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Pumps run, though pump seals scream under strain.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 75
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electrical short triggers an emergency chemical vent, obscuring the road.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col02_use_rig_stores",
        "label": "Transfer synthetic oil reserves from your own hauler tanks",
        "effectText": "You sacrifice your spare engine lubricants to keep the mammoth crawler rolling.",
        "rewards": {
          "hullIntegrity": -5,
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Trust": 20,
            "Colossus Health": 85
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_03_canyon_demolition",
    "title": "The Blocked Siphon Gorge",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 2
      },
      "maxQualities": {
        "Colossus Stage": 2
      }
    },
    "text": "A rockfall has choked the narrow mountain gorge with granite boulders. The Behemoth is too wide to squeeze through. \"Hauler!\" the radio roars. \"Clear the choke-point or the warlord scouts will pin us down in this bottleneck!\"",
    "options": [
      {
        "id": "opt_col03_blast_charges",
        "label": "Set demolition charges along the fracture lines [ROLL +CYBER]",
        "effectText": "You plant shaped mining explosives along the geological stress points.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A thunderous controlled blast cleaves the boulders into harmless gravel! The gorge is wide open.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 2,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The blast clears the gap, but flying rocks dent your trailer panels.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The detonation triggers a secondary landslide, narrowly missing the cab.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col03_winch_drag",
        "label": "Anchor your hauler and winch the heaviest boulders aside [ROLL +GRIT]",
        "effectText": "You hook heavy steel towing cables around the master obstruction.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Raw diesel torque! Your hauler drags the three-ton boulder clear of the tracks.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The boulder shifts enough for the crawler to scrape through.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The winch cable snaps with a violent whip-crack across the hood!",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col03_spot_gap",
        "label": "Guide the Behemoth driver through the narrow canyon lip [ROLL +COOL]",
        "effectText": "You stand on the ridge with signal flares, guiding the massive machine inch by inch.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Precision crawling! The behemoth grinds past the rock face without losing momentum.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Trust": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The crawler scrapes rock with a deafening metallic screech, but pushes past.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The crawler treads slip into loose talus, delaying transit.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_04_nomad_contract",
    "title": "The Council of Boiler-Smiths",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 3
      },
      "maxQualities": {
        "Colossus Stage": 3
      }
    },
    "text": "At an isolated desert water stop, the Nomad Guild convenes atop the Behemoth’s iron deck. Over greasy tin cups of chicory coffee, the smiths argue about the final destination. \"The Lithium Basin holds enough energy to power an independent free-state for a generation,\" Donald says. \"Or we sell extraction shares to Solaris for unimaginable riches.\"",
    "options": [
      {
        "id": "opt_col04_counsel_freedom",
        "label": "Advocate for an independent worker free-state [ROLL +COOL]",
        "effectText": "You speak of autonomy, dignity, and breaking the corporate chains forever.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The smiths raise their iron wrenches in roaring approval! Freedom is declared the prime directive.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Ideology": 1,
              "Street Cred": 5,
              "Colossus Trust": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Many smiths agree, though elders worry about military retaliation.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Ideology": 1,
              "Colossus Trust": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Skepticism greets your speech: \"Dignity doesn't buy food, hauler.\"",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col04_counsel_wealth",
        "label": "Point out the overwhelming leverage of corporate leases [ROLL +CYBER]",
        "effectText": "You demonstrate financial projections and corporate legal lease structures.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The elders nod in deep appreciation of hard economic leverage.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Ideology": 2,
              "Tech Literacy": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The council agrees that wealth provides the safest armor.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Ideology": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heated arguments erupt among the younger smiths.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col04_focus_road",
        "label": "Remind them: \"First we survive the road. Philosophy comes after.\"",
        "effectText": "You refill your mug and focus on route maps and ammunition counts.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Trust": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_05_fuel_line_raid",
    "title": "The Fuel Line Ambush [BRANCH 1]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 4
      },
      "maxQualities": {
        "Colossus Stage": 4
      }
    },
    "text": "Black smoke plumes on the horizon as Gridlock buggy swarms encircle the crawler flank! Raiders fire harpoons into the Behemoth’s exposed fuel lines, attempting to bleed its diesel reservoirs dry.",
    "options": [
      {
        "id": "opt_col05_heavy_ram",
        "label": "Plow your rig between the raiders and the crawler flank [BRANCH 1A: ARMOR] [ROLL +GRIT]",
        "effectText": "You position your 35-ton hauler as a mobile steel shield, absorbing harpoon fire.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Steel titan! You snap their tow cables and crush two buggies into the salt flats.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Armor": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shield the fuel lines, though heavy impacts gouge your armor plate.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Armor": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A harpoon cable wraps your drive shaft, dragging you into the melee.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Armor": 1
            }
          }
        }
      },
      {
        "id": "opt_col05_turret_sweep",
        "label": "Man the Behemoth’s twin roof-mounted water cannons [BRANCH 1B: SUPPRESSION] [ROLL +EDGE]",
        "effectText": "You scramble up the crawler gantry, sweeping pressurized gravel jets into the raider cockpits.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating kinetic spray! The buggies flip across the sand like tumbleweeds.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Suppression": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The swarm is repelled, though raiders pepper the cab with return fire.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Suppression": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The pump pressure drops, forcing a hasty retreat down the iron ladder.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Suppression": 1
            }
          }
        }
      },
      {
        "id": "opt_col05_ecm_jam",
        "label": "Broadcast an omni-directional radar jammer [BRANCH 1C: TECH] [ROLL +CYBER]",
        "effectText": "You overload civilian radio bands with static, blinding their coordination.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The raiders collide with each other in confusion and abandon the assault!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Tech": 1,
              "Tech Literacy": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The raiders break off, though their leader vows revenge.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Tech": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electronic feedback burns your deck fuses before the swarm disperses.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Tech": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_06_reactor_core_retrieval",
    "title": "The Dead Reactor Vault",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 5
      },
      "maxQualities": {
        "Colossus Stage": 5
      }
    },
    "text": "To cross the arid expanse of the White Sands, the crawler needs a nuclear fuel capsule buried in a collapsed military test bunker. The radiation seals are leaking, and time is short.",
    "options": [
      {
        "id": "opt_col06_radiation_lead",
        "label": "Endure radiation levels to winch out the isotope capsule [ROLL +GRIT]",
        "effectText": "You don heavy lead aprons and descend into the glowing subterranean bunker.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Iron constitution! You haul the 500-kg fuel rod safely into its lead transport cask.",
          "rewards": {
            "cargo": {
              "batteries": 3
            },
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 5,
              "Colossus Trust": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure the fuel rod, though radiation sickness leaves you dizzy for hours.",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Dropped concrete blocks crush your hand guard before you scramble out with the fuel.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col06_crane_remote",
        "label": "Hack the automated bunker overhead gantry crane [ROLL +CYBER]",
        "effectText": "You hotwire the crane telemetry panel to extract the capsule remotely.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Robotic perfection! The fuel rod is lifted and seated into the hauler hold with zero human exposure.",
          "rewards": {
            "cargo": {
              "batteries": 3
            },
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The crane carries the load, but frayed cables groan precariously.",
          "rewards": {
            "cargo": {
              "batteries": 1
            },
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The crane motor burns out halfway, dropping the cask from six feet.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_col06_trade_batteries",
        "label": "Substitute civilian hydro-batteries from your cargo hold [2 Batteries]",
        "effectText": "You wire your own clean industrial power cells into the Behemoth’s converter.",
        "rewards": {
          "cargo": {
            "batteries": -2
          },
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Trust": 25
          }
        },
        "reqs": {
          "cargo": {
            "batteries": 2
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_07_salt_flat_sandstorm",
    "title": "The Whiteout at 40 Below",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 6
      },
      "maxQualities": {
        "Colossus Stage": 6
      }
    },
    "text": "A howling salt-storm envelops the convoy. Visibility drops to three feet as corrosive alkali dust whips across the glass at 100 km/h. The crawler’s air intakes are clogging with caustic powder.",
    "options": [
      {
        "id": "opt_col07_clear_filters",
        "label": "Climb out into the tempest to scrape intake grates [ROLL +GRIT]",
        "effectText": "Tethered by safety cables, you battle the blinding gale with iron scrapers.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heroic grit! You clear all eight turbine intakes, restoring full boiler airflow.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 6,
              "Colossus Health": 100
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Filters cleared, but alkali dust burns your eyes and skin.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 80
            }
          }
        },
        "miss": {
          "effectText": "MISS: A violent gust knocks you against the steel catwalk, bruising ribs.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 60
            }
          }
        }
      },
      {
        "id": "opt_col07_radar_pilot",
        "label": "Guide the blind convoy using millimetric radar telemetry [ROLL +CYBER]",
        "effectText": "You calibrate high-frequency ground-penetrating radar to steer through the salt drifts.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless digital navigation! You navigate between sinkholes without losing a meter of progress.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You stay on course, though dust static scrambles radio audio.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sensor echo causes you to steer into a deep alkali dune, stalling out.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col07_drift_draft",
        "label": "Tuck your hauler directly into the Behemoth’s massive slipstream [ROLL +EDGE]",
        "effectText": "You draft three feet behind the crawler’s massive rear iron bulkheads.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect drafting! The colossus punches a vacuum corridor through the storm for your rig.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You maintain the slipstream, though flying pebbles crack your fog-lights.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sudden crawler brake tap crumples your front cowcatcher.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_08_warlord_tollgate",
    "title": "The Iron Sovereign Gate [BRANCH 2]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 7
      },
      "maxQualities": {
        "Colossus Stage": 7
      }
    },
    "text": "Warlord Vane has erected a fortified fortress of shipping containers and anti-tank guns across the sole salt-pan gap. He broadcasts: \"10,000 credits to pass, or the Behemoth becomes my new throne.\"",
    "options": [
      {
        "id": "opt_col08_bluff_artillery",
        "label": "Threaten him with the Behemoth’s steam-pneumatic mortar [BRANCH 2A: TERROR] [ROLL +COOL]",
        "effectText": "You chamber a dummy artillery shell and broadcast live camera feeds of their command bunker in crosshairs.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Absolute terror! Vane orders his gates thrown open and apologizes over the open frequency.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Terror": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Vane hesitates and lowers the toll to a nominal 300 credits.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Terror": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vane calls the bluff, ordering a warning salvo that shatters rock beside your cab.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Terror": 1
            }
          }
        }
      },
      {
        "id": "opt_col08_ram_gate",
        "label": "Sound the war horns and crush the container barricade [BRANCH 2B: FORCE] [ROLL +GRIT]",
        "effectText": "The 120-ton crawler steps on the throttle, dropping its massive steel plow.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic devastation! Shipping containers crumple like soda cans as you roll through.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Force": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The barricade is smashed, but anti-tank shells dent crawler treads.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Force": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An anti-tank round pierces a fuel tank, igniting an external fire.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Force": 1
            }
          }
        }
      },
      {
        "id": "opt_col08_bribe_passage",
        "label": "Negotiate a peaceful trade agreement with fuel and scrap [BRANCH 2C: DIPLOMACY] [ROLL +COOL]",
        "effectText": "You step out under a white flag and negotiate with hard-bitten wasteland pragmatism.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A pact is struck! Vane accepts 800 credits and provides fresh water and scouts.",
          "rewards": {
            "credits": -800,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Diplomacy": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Vane demands 1,200 credits and half your grain supplies.",
          "rewards": {
            "credits": -1200,
            "cargo": {
              "grain": -2
            },
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Diplomacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Negotiations turn hostile; you pay 1,500 credits under threat of execution.",
          "rewards": {
            "credits": -1500,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Diplomacy": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_09_boiler_crisis",
    "title": "The Ruptured Steam Drum",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 8
      },
      "maxQualities": {
        "Colossus Stage": 8
      }
    },
    "text": "A high-pressure steam drum ruptures inside the Behemoth’s engine bay! Superheated 400-degree vapor threatens to cook the engineering crew alive while crawler momentum drops to zero.",
    "options": [
      {
        "id": "opt_col09_shut_manifold",
        "label": "Enter the steam-filled chamber to manually crank the relief valve [ROLL +GRIT]",
        "effectText": "Wrapped in thermal blankets, you plunge into the white blinding fog of boiling steam.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Hero of the boiler-smiths! You crank the steel wheel shut with blistering hands, saving the crew.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Trust": 30,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Valve closed, but second-degree steam burns scorch your forearms.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Trust": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: Steam blows back through the valve stem, forcing you to retreat before sealing it.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col09_divert_coolant",
        "label": "Reprogram the automated cooling manifolds from the bridge [ROLL +CYBER]",
        "effectText": "You hack into the mechanical governor valves using digital servo relays.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Automated bypass vents steam harmlessly out the smokestacks!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Colossus Health": 90
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Steam redirected, though two auxiliary sensors short-circuit.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 75
            }
          }
        },
        "miss": {
          "effectText": "MISS: Solenoid jams open, continuing the steam leak.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_col09_douse_chambers",
        "label": "Flood the firebox with emergency chemical extinguishing foam",
        "effectText": "You pull the emergency fire lever, smothering the furnace before the boiler explodes.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Health": 70
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_10_lithium_survey",
    "title": "The Shimmering Horizon [BRANCH 3]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 9
      },
      "maxQualities": {
        "Colossus Stage": 9
      }
    },
    "text": "From the crest of the Obsidian Ridge, the Great Lithium Basin appears—a blinding white lake of crystallized mineral wealth stretching to the horizon. Three distinct factions have sent envoys to stake their claim before you descend.",
    "options": [
      {
        "id": "opt_col10_nomad_treaty",
        "label": "Pledge the basin to the Nomad Worker Commune [BRANCH 3A: COMMUNE] [ROLL +COOL]",
        "effectText": "You declare that the salt belongs to those whose sweat and iron built the Behemoth.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The workers celebrate with tears of joy, forging the charter of the Salt Freehold!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Commune": 1,
              "Street Cred": 8,
              "Colossus Trust": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The charter is signed, though elder smiths brace for corporate war.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Commune": 1,
              "Colossus Trust": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: Dissenting voices argue over resource allocation.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Commune": 1
            }
          }
        }
      },
      {
        "id": "opt_col10_solaris_deal",
        "label": "Negotiate a multi-million credit lease with Solaris Energy [BRANCH 3B: CORPORATE] [ROLL +CYBER]",
        "effectText": "You draft an airtight royalty contract with high corporate royalties and diplomatic immunity.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Solaris wires a massive escrow guarantee of 3,000 Credits upfront!",
          "rewards": {
            "credits": 3000,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Corporate": 1,
              "Enclave Permits": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The lease is executed with standard corporate terms.",
          "rewards": {
            "credits": 1500,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Corporate": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate lawyers attempt to insert forfeiture clauses into the contract.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Stance Corporate": 1
            }
          }
        }
      },
      {
        "id": "opt_col10_iron_supremacy",
        "label": "Declare the Behemoth an independent sovereign war-rig [BRANCH 3C: AUTONOMY]",
        "effectText": "You hoist the black iron gear flag: \"This machine answers to no god, corp, or master.\"",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Stance WarRig": 1,
            "Street Cred": 10
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_11_raider_boarding_pod",
    "title": "Boarders on Deck 3",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 10
      },
      "maxQualities": {
        "Colossus Stage": 10
      }
    },
    "text": "Warlord Vane’s elite raiders launch harpoon ziplines from high canyon perches, boarding the crawler’s mid-deck with plasma torches to seize the bridge!",
    "options": [
      {
        "id": "opt_col11_repel_boarders",
        "label": "Lead the defense with shotgun and wrench across the catwalks [ROLL +GRIT]",
        "effectText": "You charge the mid-deck catwalks alongside the boiler-smiths.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brutal iron combat! You toss the raider captain overboard into the salt flats, routing their squad.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 7,
              "Colossus Trust": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Boarders repelled, though ricocheting buckshot chips your shoulder armor.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A raider plasma grenade detonates against the bridge bulkheads.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col11_steam_scald",
        "label": "Vent high-pressure steam across the boarding catwalks [ROLL +CYBER]",
        "effectText": "You access the environmental purge valve from your dashboard deck.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A white wall of scalding steam sweeps the decks, forcing the raiders to jump for their lives!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Steam clears the catwalks, though catwalk lights short out.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Steam vents into an occupied crew quarters by mistake, causing chaos.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col11_sharp_swerve",
        "label": "Throw the crawler into an aggressive chassis roll to dislodge cables [ROLL +EDGE]",
        "effectText": "You radio the driver to execute a high-speed zig-zag through salt mounds.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Tremendous centrifugal force snaps their ziplines, sending raiders tumbling!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cables snap, but the violent maneuver strains tread bearings.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The crawler tilts dangerously near its tipping angle before leveling out.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_12_cooling_tower_leak",
    "title": "The Cooling Tower Fracture",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 11
      },
      "maxQualities": {
        "Colossus Stage": 11
      }
    },
    "text": "While replenishing water reserves at an oasis well, an inspection reveals that the Behemoth’s forward cooling tower is cracked down the seam. If it fails on the open salt flats, the nuclear core will melt through the chassis.",
    "options": [
      {
        "id": "opt_col12_torch_weld",
        "label": "Torch-weld steel reinforcing plates over the fracture [ROLL +GRIT]",
        "effectText": "You don heavy welding goggles and lay thick beads of molten iron across the seam.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Master craftsmanship! The weld is stronger than the original factory casting.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 100,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The seam is patched, though slag inclusions will require future monitoring.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 80
            }
          }
        },
        "miss": {
          "effectText": "MISS: Thermal warping during welding widens the fissure, requiring double the steel.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 65
            }
          }
        }
      },
      {
        "id": "opt_col12_epoxy_seal",
        "label": "Inject high-temperature ceramic compound into the fissure [ROLL +CYBER]",
        "effectText": "You use automated caulking guns to force aerospace resin into the microscopic cracks.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Clean, lightweight molecular seal! Pressure testing shows zero leakage.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Colossus Health": 95
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The seal cures successfully under moderate temperature.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 80
            }
          }
        },
        "miss": {
          "effectText": "MISS: The resin fails to cure in the dry heat, dribbling down the tower wall.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Health": 60
            }
          }
        }
      },
      {
        "id": "opt_col12_buy_patch_kit",
        "label": "Purchase an industrial boiler patch kit from a wandering reclaimer [600 Credits]",
        "effectText": "You pay market price for certified pre-war boiler clamps.",
        "rewards": {
          "credits": -600,
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Health": 90
          }
        },
        "reqs": {
          "credits": 600
        }
      }
    ]
  },
  {
    "id": "story_colossus_13_mountain_pass_widening",
    "title": "The Devil’s Needle Pass [BRANCH 4]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 12
      },
      "maxQualities": {
        "Colossus Stage": 12
      }
    },
    "text": "The entrance to the Lithium Basin passes through the Devil’s Needle—two towering pillars of black basalt barely ten feet wider than the crawler itself. A wrong angle will rip off the Behemoth’s tread housings.",
    "options": [
      {
        "id": "opt_col13_plasma_bore",
        "label": "Fire the Behemoth’s heavy industrial plasma mining bore [BRANCH 4A: PLASMA] [ROLL +CYBER]",
        "effectText": "You power up the experimental thermal drill mounted on the crawler prow.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A blinding beam of white plasma liquefies the basalt into glowing glass, doubling the pass width!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Plasma": 1,
              "Tech Literacy": 4,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rock is carved away, though thermal blowback scorches forward paint.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Plasma": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The plasma capacitors overload, exploding the generator breaker.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Plasma": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_col13_inch_by_inch",
        "label": "Guide the crawler through the tight gap with laser rangefinders [BRANCH 4B: FINESSE] [ROLL +EDGE]",
        "effectText": "You walk ahead with handheld telemetry lasers, calling millimeter corrections.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Absolute driving mastery! The 120-ton leviathan slips through the needle with two inches of clearance.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Finesse": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The crawler scrapes both rock faces with sparks flying, but emerges intact.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Finesse": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A track roller snags a basalt ledge, shearing three heavy steel bolts.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Finesse": 1
            }
          }
        }
      },
      {
        "id": "opt_col13_brute_ram",
        "label": "Floor both reactor throttles and shatter the rock pillars [BRANCH 4C: BRUTE] [ROLL +GRIT]",
        "effectText": "You order full steam ahead, treating the mountain like a paper wall.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Colossal power! The Behemoth fractures the basalt monolith into tumbling boulders.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Brute": 1,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force the pass, but the impact shakes every bolt on your hauler frame.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Brute": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The collision dead-stops the crawler, bending the primary plow mount.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Colossus Stage": 1,
              "Colossus Branch Brute": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_14_warlord_fleet_intercept",
    "title": "The Warlord’s Vengeance",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 13
      },
      "maxQualities": {
        "Colossus Stage": 13
      }
    },
    "text": "Emerging from the pass, Warlord Vane’s entire heavy motorized regiment deploys in battle line across the salt. Armored half-tracks and missile buggies surround the convoy. \"Nowhere left to run, blacksmiths!\"",
    "options": [
      {
        "id": "opt_col14_artillery_barrage",
        "label": "Unleash the Behemoth’s full pneumatic steam battery [ROLL +GRIT]",
        "effectText": "You coordinate all six pneumatic mortar barrels, raining explosive demolition charges across their line.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Earth-shattering broadside! Three warlord half-tracks erupt into fireballs, breaking their battle line.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The barrage scatters their formation, allowing the crawler to push forward.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy enemy return fire rakes the crawler catwalks.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col14_hack_formation",
        "label": "Broadcast a false tactical retreat signal into their radios [ROLL +CYBER]",
        "effectText": "You spoof Vane’s command channel, ordering his left flank to fall back into a minefield.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Chaos engulfs the warlord ranks! Their vehicles collide and scramble in total disarray.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The signal confuses their gunners long enough for your convoy to advance.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their comms officer spots the spoof and directs concentrated fire on your rig.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col14_spearhead_ram",
        "label": "Lead the convoy charge with your hauler in the vanguard [ROLL +EDGE]",
        "effectText": "You weave between heavy artillery shells, drawing fire away from the crawler.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary driving! You draw their fire harmlessly into empty sand while the crawler grinds through.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You draw their fire, taking shrapnel across your rear chassis.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An anti-tank shell glances your engine block, spinning you 180 degrees.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_15_basin_crossroads",
    "title": "The Basin Crossroads [BRANCH 5: Lock In Path]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 14
      },
      "maxQualities": {
        "Colossus Stage": 14
      }
    },
    "text": "At the shores of the blinding white Lithium Basin, the war is won and the prize lies open. Donald and the council turn to you at the edge of the salt lake. \"You brought us across the continent, hauler. The future of this titan is in your hands. What is our true destiny?\"",
    "options": [
      {
        "id": "opt_col15_choose_commune",
        "label": "Found the Sovereign Salt Commune: \"The wealth belongs to the free workers.\" [PATH: COMMUNE] [BRANCH 5A]",
        "effectText": "Donald smiles with tears of pride. The workers raise their hammers in solemn covenant.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Chosen Path": 1,
            "Street Cred": 15,
            "Colossus Trust": 40
          }
        }
      },
      {
        "id": "opt_col15_choose_corporate",
        "label": "Sign the Solaris Continental Power Lease: \"Corporate wealth guarantees our safety.\" [PATH: CORPORATE] [BRANCH 5B]",
        "effectText": "Executive couriers arrive in sleek hover-craft, transferring unprecedented treasury warrants.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Chosen Path": 2,
            "Enclave Permits": 3
          }
        }
      },
      {
        "id": "opt_col15_choose_warrig",
        "label": "Retrofit the Behemoth into an Autonomous Mobile Fortress: \"Rule the highways as kings.\" [PATH: WAR-RIG] [BRANCH 5C]",
        "effectText": "Armor plating and heavy guns are welded across every inch of the hull.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Colossus Chosen Path": 3,
            "Street Cred": 25
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_16_salt_dreadnought_ambush",
    "title": "The Last Stand of Warlord Vane",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 15
      },
      "maxQualities": {
        "Colossus Stage": 15
      }
    },
    "text": "Warlord Vane appears in a heavily armored super-tank for one final desperate ambush across the white salt. \"If I cannot own the basin, none of you leave it alive!\"",
    "options": [
      {
        "id": "opt_col16_crush_supertank",
        "label": "Direct the Behemoth to roll straight over the super-tank [ROLL +GRIT]",
        "effectText": "The 120-ton treads climb the super-tank’s sloped armor, crushing it into the salt.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Complete obliteration! The warlord’s tank is pressed flat like tin foil under the crawler.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The tank is crushed, though its dying cannon blast dints the crawler nose.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The super-tank detonates its ammo magazine, showering the convoy with fiery debris.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col16_slice_tank_turret",
        "label": "Hack his tank fire-control computer to jam the gun barrel [ROLL +CYBER]",
        "effectText": "You upload an auto-calibration loop into his turret servo motors.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: His turret spins wildly out of control, firing shells into empty desert!",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Turret jammed, allowing your hauler to flank him cleanly.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-fire from his coaxial machine guns riddles your cabin door.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col16_drift_circle",
        "label": "Out-maneuver his slow turret in high-speed salt donuts [ROLL +EDGE]",
        "effectText": "You whip the hauler around him at 100 km/h, blinding his periscopes with salt rooster-tails.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blinding whiteout! His tank fires blindly while the crawler crushes his rear engines.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You distract him successfully, taking minor shrapnel in the rear tires.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A salt rut catches your front wheel, shaking the cabin violently.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_17_last_steam_vent",
    "title": "The Salt Basin Depths",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 16
      },
      "maxQualities": {
        "Colossus Stage": 16
      }
    },
    "text": "Resting beside an active geothermal geyser in the heart of the basin, the air smells of sulfur and unlimited lithium power. The crawler’s extraction drills are hoisted into the gantry rigs.",
    "options": [
      {
        "id": "opt_col17_tap_geothermal",
        "label": "Connect the crawler heat exchangers to the geothermal vent [ROLL +CYBER]",
        "effectText": "You regulate steam pressure from the earth directly into the crawler turbines.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Infinite geothermal energy! The crawler hums with inexhaustible power.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Steam tapped successfully, though pressure gauges dance near redline.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sulfur flare scorches the external pressure valves.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col17_secure_dredge",
        "label": "Winch the colossal rotary excavator into the salt crust [ROLL +GRIT]",
        "effectText": "You torque the master foundation cables into bedrock salt.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The multi-ton excavator bites into pure crystalline lithium!",
          "rewards": {
            "cargo": {
              "batteries": 3
            },
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Excavator anchored, though cables stretch under initial load.",
          "rewards": {
            "cargo": {
              "batteries": 1
            },
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An anchor pin shears off under tension, demanding quick re-rigging.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col17_celebrate_crew",
        "label": "Share a feast of synth-meat and whiskey with the boiler-smiths",
        "effectText": "Around a roaring fire of chemical scrap, songs of iron and freedom ring into the desert night.",
        "rewards": {
          "qualities": {
            "Colossus Stage": 1,
            "Street Cred": 5,
            "Colossus Trust": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_18_citadel_gates_breach",
    "title": "The Sovereign Claim",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 17
      },
      "maxQualities": {
        "Colossus Stage": 17
      }
    },
    "text": "Aegis corporate enforcers rush to secure the basin boundary with automated pillboxes and drone swarms. \"This mineral reserve is corporate property!\" blares through the bullhorns.",
    "options": [
      {
        "id": "opt_col18_colossus_charge",
        "label": "Charge the Behemoth straight through their automated pillboxes [ROLL +GRIT]",
        "effectText": "The massive land-dredge lowers its titanium bulldozer blade, plowing through concrete bunkers.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The pillboxes are pulverized into dust! The corporate perimeter is shattered completely.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash the pillboxes, but machine gun fire peppers your front windows.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Anti-tank rockets strike your cab side-door as you roll through.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_col18_drone_scramble",
        "label": "Overload their drone control frequencies with the crawler generator [ROLL +CYBER]",
        "effectText": "You channel the nuclear reactor output through the radio mast in a blinding EMP sweep.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Every drone drops from the sky in burning spirals! The defenders flee in panic.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Drones disabled, though your rig lights flicker and reset.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Power surge pops cabin fuses, blinding your instruments momentarily.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Colossus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_col18_fast_flank",
        "label": "Lead hauler technicals around their defensive trench in a lightning flank [ROLL +EDGE]",
        "effectText": "You drift around the salt flats, hitting their command trailers from the unprotected rear.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total surprise! Their command staff surrenders before firing a shot.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 9
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Flank successful, though crossfire clips your rear mudflaps.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A trench berm catches your front axle, demanding a rough pull-out.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Colossus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_19_basin_terminus_stand",
    "title": "The Dawn of Iron [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 18
      },
      "maxQualities": {
        "Colossus Stage": 18
      }
    },
    "text": "The entire Great Lithium Basin is secure! Under the blazing desert sun, the Behemoth anchors permanently at the center of the salt lake, becoming the unshakeable foundation of your chosen future.",
    "options": [
      {
        "id": "opt_col19_commune_anthem",
        "label": "Sound the triple war horns of the Free Commune [COMMUNE PATH] [ROLL +GRIT]",
        "effectText": "You pull the master steam whistle cable. The sound reverberates across fifty miles of salt.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A new era begins! Free workers cheer across the continent as the Salt Freehold is born.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The horns sound triumphantly across the basin.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The whistle sticks open, though spirits remain soaring.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_col19_corporate_handshake",
        "label": "Sign the executive corporate charters atop the bridge [CORPORATE PATH] [ROLL +COOL]",
        "effectText": "Solaris vice presidents bow respectfully as you sign the golden lease tablets.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Billions in mineral contracts secured! You are hailed as the master architect of the deal.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Charters signed and first treasury dividends deposited.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Minor contractual disputes are settled in your favor.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_col19_warrig_sovereignty",
        "label": "Fire the naval guns into the salt horizon [WAR-RIG PATH] [ROLL +GRIT]",
        "effectText": "The mobile citadel fires a thunderous salute, sealing its dominance over the wasteland.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Warlords across the continent bow their heads. The Iron Sovereign rules supreme.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Salutes fired as raider scouts flee in terror.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Recoil kicks up salt dust, but the fortress stands invincible.",
          "rewards": {
            "qualities": {
              "Colossus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_colossus_20_finale",
    "title": "The Colossus at Rest [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Colossus Stage": 19
      },
      "maxQualities": {
        "Colossus Stage": 19
      }
    },
    "text": "The saga of the Iron Colossus of the Salt Flats concludes in glorious triumph. Your rig is permanently upgraded with dreadnought-class structural reinforcements and heavy suspension.",
    "options": [
      {
        "id": "opt_col20_ending_commune",
        "label": "Accept the Armor of the Salt Freehold [ENDING 1: COMMUNE FORTRESS]",
        "effectText": "Chief Smith Donald and the Nomad Guild install dreadnought-class plating and heavy winches on your rig.",
        "rewards": {
          "credits": 11000,
          "hullIntegrity": 150,
          "cargo": {
            "batteries": 4,
            "grain": 4
          },
          "qualities": {
            "Colossus Stage": 80,
            "Street Cred": 20,
            "Heat": -40
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 50,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Colossus Vanguard"
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_col20_ending_corporate",
        "label": "Accept the Solaris Corporate Hauler Honors [ENDING 2: SOLARIS LEASE]",
        "effectText": "Solaris engineers outfit your hauler with titanium super-heavy cargo containers and hydraulic load lifters.",
        "rewards": {
          "credits": 16000,
          "cargo": {
            "batteries": 5,
            "cyberware": 2
          },
          "qualities": {
            "Colossus Stage": 80,
            "Enclave Permits": 3,
            "Street Cred": 15
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxHull": 40,
            "maxCargoWeight": 8,
            "name": "Iron Nomad - Heavy Hauler"
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_col20_ending_warrig",
        "label": "Accept the Crown of the Mobile Citadel [ENDING 3: WAR-RIG RETROFIT]",
        "effectText": "The mobile fortress smiths rivet heavy sloped armor and reinforced cowcatchers to your chassis.",
        "rewards": {
          "credits": 12000,
          "cargo": {
            "batteries": 3,
            "cyberware": 3
          },
          "qualities": {
            "Colossus Stage": 80,
            "Street Cred": 25,
            "Heat": 20
          },
          "stats": {
            "grit": 2
          },
          "rig": {
            "maxHull": 60,
            "speedRating": 0.05,
            "name": "Iron Nomad - Mobile Fortress"
          }
        },
        "reqs": {
          "qualities": {
            "Colossus Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_col20_farewell",
        "label": "Collect standard veteran escort pay and return to the road",
        "effectText": "With the colossus safely anchored, you collect your contracted payment and shift into gear.",
        "rewards": {
          "credits": 8000,
          "qualities": {
            "Colossus Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 30,
            "maxCargoWeight": 3
          }
        }
      }
    ]
  }
];
