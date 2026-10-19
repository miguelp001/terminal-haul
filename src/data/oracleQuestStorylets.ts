import { Storylet } from '../types/storylet';

export const ORACLE_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_oracle_01_silica_whisper",
    "title": "The Silica Whispers of the Ash Basin",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "maxQualities": {
        "Oracle Stage": 0
      }
    },
    "text": "In the great ash expanse of the Southwest Wasteland, robed cyber-pilgrims approach your hauler. Their leader, Elder Tobias, points toward the shifting white silica dunes. \"The Oracle of the Ash Dunes is waking,\" he whispers. \"A pre-war transhuman consciousness merged with the continental seismic acoustic sensor grid. She demands offerings of high-density neural processors and pure grain before revealing the tremors of the future. Will you guide our sacred caravan?\"",
    "options": [
      {
        "id": "opt_oracle01_accept_pilgrimage",
        "label": "Accept the contract to lead the sacred dune pilgrimage [ROLL +COOL]",
        "effectText": "You review the coordinates through the treacherous shifting silica seas.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! The pilgrims grant you 1,500 credits and heavy dust-filtration screens.",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "grain": 2
            },
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and lead the caravan into the dust.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Local raiders mark your convoy as an easy religious caravan target.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_oracle01_scan_seismic_frequencies",
        "label": "Tune your diagnostic deck to listen to the subsurface acoustic vibrations [ROLL +CYBER]",
        "effectText": "You hook acoustic pickups to your truck's front axle.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Breathtaking audio telemetry! You detect a rhythmic subterranean heartbeat pulsing through the bedrock!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You isolate low-frequency rumble markers that guide your navigation.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Subsonic feedback squeals through your cabin speakers.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle01_prep_air_filters",
        "label": "Install dual cyclonic sand-separator intake snorkels on your engine",
        "effectText": "You protect your engine cylinders from microscopic silica dust.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_02_silica_dust_storm",
    "title": "The Razor Silica Gale",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 1
      },
      "maxQualities": {
        "Oracle Stage": 1
      }
    },
    "text": "A ferocious storm of razor-sharp volcanic silica dust sweeps over the dunes. Visibility drops to three feet; the howling abrasive wind threatens to strip the paint and glass off your rig.",
    "options": [
      {
        "id": "opt_oracle02_acoustic_navigation",
        "label": "Navigate blind using the Oracle's seismic acoustic pulses [ROLL +CYBER]",
        "effectText": "You steer by the audio hum of the bedrock sensor nodes.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure navigation mastery! You glide through the maelstrom without touching a single sand drift.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The seismic tracking holds you on the ridge, though sand scores your side mirrors.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-pressure silica strips your headlights and cracks a fog lamp.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle02_steady_plow",
        "label": "Keep the heavy iron nose pointed into the wind and push forward [ROLL +GRIT]",
        "effectText": "You lock your jaw and let 600 horsepower bulldoze through the shifting dunes.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Massive kinetic resilience! The hauler breaks through the storm front like an iron wedge.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You push through, taking minor sand abrasion on your front bumper.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A massive sand drift bogs down your trailer, forcing heavy winching.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle02_hunker_down",
        "label": "Deploy side steel storm shutters and wait out the gale",
        "effectText": "You wait safely inside your sealed cab until the storm subsides.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_03_pilgrim_caravan",
    "title": "The Sinking Sanctuary",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 2
      },
      "maxQualities": {
        "Oracle Stage": 2
      }
    },
    "text": "A passenger bus carrying elderly pilgrims has broken an axle, sinking deep into a bed of treacherous dry quicksand. Behind them, raider buggies kick up dust on the horizon.",
    "options": [
      {
        "id": "opt_oracle03_winch_bus",
        "label": "Rig your heavy industrial tow cables and haul the bus to solid rock [ROLL +GRIT]",
        "effectText": "You anchor your rear stabilizers and winch the passenger bus out of the sand.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heroic rescue! The bus is dragged to safety in minutes; grateful pilgrims shower you with blessing tokens and rare chips!",
          "rewards": {
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You rescue the bus, though your winch motor smokes under extreme strain.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The tow cable snaps on a boulder, denting your tailgate.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle03_intimidate_raiders",
        "label": "Fire warning tracer rounds from your cab roof to scatter the raiders [ROLL +COOL]",
        "effectText": "You light up the sky with heavy caliber tracer fire.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The raider buggies scatter in terror, abandoning the chase!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The raiders keep their distance, allowing the caravan to limp forward.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Raiders return rifle fire, chipping your passenger door.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle03_donate_grain",
        "label": "Distribute 1 unit of Synthetic Grain from your hold to feed the pilgrims [INVENTORY]",
        "effectText": "Your generosity revives the starving pilgrims and elevates your status in the cult.",
        "rewards": {
          "cargo": {
            "grain": -1
          },
          "qualities": {
            "Oracle Stage": 1,
            "Street Cred": 10
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "cargo": {
            "grain": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_04_the_first_shrine",
    "title": "The Pylon of Shifting Stone",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 3
      },
      "maxQualities": {
        "Oracle Stage": 3
      }
    },
    "text": "You reach the First Seismic Pylon—a black obsidian monolith thrusting out of the sand dunes, humming with subterranean electrical currents. Cultists kneel before the pylon, waiting for you to interface with its data port.",
    "options": [
      {
        "id": "opt_oracle04_commune_pylon",
        "label": "Jack your neural deck into the obsidian monolith's diagnostic port [ROLL +CYBER]",
        "effectText": "You bridge your cyberware with the monolith's seismic datastream.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Profound digital revelation! The Oracle projects the complete tectonic fault map into your mind!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You download the navigation coordinates to the central sanctum.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Neural static shocks your interface port, inducing a migraine.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle04_align_antenna",
        "label": "Align your truck's radio mast with the pylon's harmonic frequency [ROLL +GRIT]",
        "effectText": "You physically align the directional antennas with precision wrench turns.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Crystal-clear harmonic lock! The radio hums with melodic pre-war symphonies.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The antenna locks on the signal, stabilizing comms.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sudden gust bends your antenna mast.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle04_offer_chip",
        "label": "Deposit 1 Neural Processing Chip from your hold into the pylon's offering receptacle [INVENTORY]",
        "effectText": "The pylon glows with radiant sapphire light, validating your convoy as Chosen Pilgrims.",
        "rewards": {
          "cargo": {
            "chips": -1
          },
          "qualities": {
            "Oracle Stage": 1,
            "Tech Literacy": 10,
            "Street Cred": 10
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "cargo": {
            "chips": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_05_ash_raider_ambush",
    "title": "The Zealots of the Rust Idol",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 4
      },
      "maxQualities": {
        "Oracle Stage": 4
      }
    },
    "text": "A violent rival faction of dune scavengers, the \"Iron Cleansers,\" attacks with spiked sail-skiffs and explosive spears. They believe the Oracle is a false demon that must be burned out of the earth.",
    "options": [
      {
        "id": "opt_oracle05_crush_skiffs",
        "label": "Ram their fragile sail-skiffs with your heavy iron bull-bar [ROLL +GRIT]",
        "effectText": "You floor the throttle and smash through their wooden sailcraft.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total kinetic obliteration! Three skiffs shatter into splinters under your wheels, routing the raiders!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash their attack line, sustaining minor dents on your grille.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An explosive spear detonates on your front axle, tearing off a brake line.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle05_acoustic_shockwave",
        "label": "Broadcast the pylon's seismic pulse over your exterior sirens [ROLL +CYBER]",
        "effectText": "You blast the resonant seismic sub-bass through your 10,000-watt PA horns.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devestating acoustic shock! The resonant frequency disorients the raiders, causing their skiffs to capsize in the dunes!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The acoustic blast confuses their drivers, letting you break through.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Feedback blows out two of your exterior speakers.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle05_high_speed_slalom",
        "label": "Weave between sand dunes at 110 km/h to evade their spears [ROLL +EDGE]",
        "effectText": "You slalom through the dune crests with razor precision.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sublime wasteland driving! You outrun their sails effortlessly in the open flats.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You escape their pursuit, though sand clogs your brake pads.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A skiff spears your rear trailer door, gouging metal.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_06_seismic_tremor",
    "title": "The Tectonic Rift",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 5
      },
      "maxQualities": {
        "Oracle Stage": 5
      }
    },
    "text": "A magnitude 7.2 earthquake violently shakes the desert floor! The ground ahead rips open into a 30-foot chasm vomiting pressurized subterranean steam and glowing silica sparks.",
    "options": [
      {
        "id": "opt_oracle06_launch_across",
        "label": "Floor the accelerator and jump the narrow section of the fault line [ROLL +EDGE]",
        "effectText": "You put the pedal to the floor and launch the heavy rig across the fissure.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular jump! Kinetic momentum carries all eight wheels cleanly across the opening chasm!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rear wheels clip the far lip with a heavy bang, but you pull clear.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The rear bumper smashes into the rock face before the truck claws out.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle06_seismic_read",
        "label": "Read the tremor acoustic harmonics to find solid un-ruptured bedrock [ROLL +CYBER]",
        "effectText": "You scan the ground resonance to locate stable granite strata.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Master geological route! You bypass the fault along an ancient granite ridge with zero danger.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You find a detour, though rough gravel rattles your suspension.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You hit a dead-end ridge, forcing a hasty turnaround under falling rocks.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle06_bridge_trench",
        "label": "Drop heavy steel ramp plates from your trailer to bridge the narrowest gap",
        "effectText": "Steel bridging plates allow safe, controlled transit over the fracture.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_07_the_mirage_city",
    "title": "The Silica Necropolis",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 6
      },
      "maxQualities": {
        "Oracle Stage": 6
      }
    },
    "text": "The earthquake unearths a forgotten pre-war research metropolis buried under fifty feet of ash: \"Sanctuary-7\". Glass towers jut from the sand like crystalline ribs, their subterranean labs holding untouched silicon stockpiles.",
    "options": [
      {
        "id": "opt_oracle07_salvage_chips",
        "label": "Scavenge the subterranean computing vault for pristine neural processors [ROLL +CYBER]",
        "effectText": "You breach the vault door and salvage ancient optical computing arrays.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Invaluable salvage! You recover 4 pristine neural processors and rare data tablets!",
          "rewards": {
            "cargo": {
              "chips": 4
            },
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure two crates of intact processors.",
          "rewards": {
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Ancient automated security sparks a fire trap, singeing your jacket.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle07_salvage_chassis_alloy",
        "label": "Cut structural titanium beams from the fallen towers [ROLL +GRIT]",
        "effectText": "You use heavy oxy-torches to cut aerospace-grade alloy girders.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterwork metal! You weld high-tensile titanium armor across your cab and trailer for free!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You salvage enough plate to reinforce your door panels.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A steel beam shifts during cutting, pinching your wrench.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle07_explore_quietly",
        "label": "Walk the glass avenues quietly and log the archaeological coordinates",
        "effectText": "You respect the resting place of the ancients and record its secrets.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1,
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_08_the_temple_approach",
    "title": "The Obsidian Road",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 7
      },
      "maxQualities": {
        "Oracle Stage": 7
      }
    },
    "text": "The dunes give way to a smooth highway of solid volcanic glass—the Obsidian Road leading to the Oracle's subterranean caldera. The surface is slick as oil, hovering above deep geothermal steam vents.",
    "options": [
      {
        "id": "opt_oracle08_tire_traction",
        "label": "Engage pneumatic tire stud pins and hold smooth center-lane traction [ROLL +EDGE]",
        "effectText": "You deploy carbide traction pins into your rubber treads.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless grip! The hauler glides along the black glass road with majestic precision.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You maintain control, though tires spin occasionally on glassy patches.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The hauler slides sideways on a hairpin, scraping a rock outcropping.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle08_steam_vent_timing",
        "label": "Time your transit between the erupting geothermal steam geysers [ROLL +COOL]",
        "effectText": "You observe the geyser eruption intervals and roll forward with serene patience.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect timing! You glide through the volcanic field without a single drop of scalding water touching your paint.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Steam clouds billow past, blinding you momentarily.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A scalding steam geyser blasts your passenger window, fogging it permanently.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle08_slow_creep",
        "label": "Crawl at 15 km/h with hazard lights flashing",
        "effectText": "Careful, steady transit preserves your tires and nerves.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_09_the_prophet_communion",
    "title": "The Chamber of the Oracle",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 8
      },
      "maxQualities": {
        "Oracle Stage": 8
      }
    },
    "text": "Deep within a volcanic basalt cavern, you stand before the Oracle of the Ash Dunes. Suspended inside a spherical chamber of glowing liquid silica and fiber-optic cables, a towering transhuman entity turns her silver gaze upon you. \"Courier of the Iron Nomad,\" her voice echoes through your neural interface. \"I have heard every turn of your tires since you crossed the divide.\"",
    "options": [
      {
        "id": "opt_oracle09_deep_neural_merge",
        "label": "Open your cyberware to full neural communion with the Oracle [ROLL +CYBER]",
        "effectText": "You bridge your consciousness directly with the continental sensory network.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cosmic machine revelation! You perceive every fault line, convoy movement, and weather storm across North America!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 12,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The data floods your senses, gifting you profound navigational clarity.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Neurological overload forces your cyberdeck into emergency reboot.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle09_deliver_offerings",
        "label": "Present the pilgrims' sacred offerings of grain and silicon [ROLL +COOL]",
        "effectText": "You step forward with dignity and lay the offerings at the base of the chamber.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The Oracle smiles with radiant warmth, bestowing divine blessings and superconductor batteries upon your rig!",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The offerings are accepted with quiet grace.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: The Oracle sighs at the mortality of humanity, but permits your audience.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle09_bow_respectfully",
        "label": "Bow your head in solemn silence before the great mind",
        "effectText": "A moment of profound quiet in the heart of the machine temple.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1,
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_10_the_crossroads",
    "title": "The Vision of Three Futures [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 9
      },
      "maxQualities": {
        "Oracle Stage": 9
      }
    },
    "text": "The Oracle displays three holographic futures on the chamber walls. \"The continental crust is shifting,\" she declares. \"Three destinies lie before you. How will you use the voice of the earth?\"",
    "options": [
      {
        "id": "opt_oracle10_choose_oracle_rig",
        "label": "Path 1: Fuse the Tectonic Telemetry Link permanently into your Rig [DUNE ORACLE]",
        "effectText": "You choose personal transcendence. The Oracle's seismic acoustic array will be spliced into your dashboard, granting you supernatural road precognition and enhanced cargo bays.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1,
            "Oracle Chosen Path": 1,
            "Tech Literacy": 15
          }
        }
      },
      {
        "id": "opt_oracle10_choose_pilgrim_fleet",
        "label": "Path 2: Lead the Pilgrims to Found a Free Desert Sanctuary [SILICA PROPHET]",
        "effectText": "You choose community and spiritual liberation. You will lead the faithful to establish a prosperous, unmolested oasis protected by seismic early-warning networks.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1,
            "Oracle Chosen Path": 2,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_oracle10_choose_cartel_weapon",
        "label": "Path 3: Weaponize the Seismic Sensor Array for the Underworld [TECTONIC HARBINGER]",
        "effectText": "You choose ruthless power. The syndicate will buy the seismic coordinates to trigger controlled tectonic collapses along corporate trade routes, rewarding you with supreme wealth.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1,
            "Oracle Chosen Path": 3,
            "Contraband Mastery": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_11_corporate_desecration",
    "title": "The Seismic Dreadnought Intercept",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 10
      },
      "maxQualities": {
        "Oracle Stage": 10
      }
    },
    "text": "Aegis Mining Corporation has tracked your pilgrimage! An automated four-story Seismic Crusher Dreadnought arrives at the caldera mouth, deploying ultrasonic drills to destroy the Oracle's temple and claim the mineral wealth.",
    "options": [
      {
        "id": "opt_oracle11_trigger_sandslide",
        "label": "Trigger a seismic resonance pulse to bury the Crusher in an avalanche [ROLL +CYBER]",
        "effectText": "You coordinate with the Oracle to focus sonic shockwaves into the canyon walls.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Colossal rock avalanche! 100,000 tons of sand and boulders bury the corporate Crusher up to its gun turrets!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rockslide damages its track drive, immobilizing the machine.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The Crusher returns fire with heavy mortar shells before being pinned.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle11_ram_hydraulic_hoses",
        "label": "Speed beneath the Crusher's outriggers and sever its hydraulic lines [ROLL +EDGE]",
        "effectText": "You thread your hauler beneath the colossal crawler and fire high-caliber rounds.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless precision strike! High-pressure hydraulic fluid gushes out, collapsing the machine into the sand!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You disable one track assembly, allowing your convoy to escape.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The Crusher shifts weight, denting your trailer roof.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle11_smoke_cover",
        "label": "Deploy full phosphorus smoke and guide the pilgrim buses past the beast",
        "effectText": "Dense smoke blinds the dreadnought's targeting sensors as you flee.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_12_chassis_harmonic_tuning",
    "title": "The Harmonic Chassis Lattice",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 11
      },
      "maxQualities": {
        "Oracle Stage": 11
      }
    },
    "text": "Connecting to the seismic network has altered the atomic vibration of your hauler's steel frame. The chassis hums at a resonant frequency that repels road vibrations and absorbs kinetic shock with effortless grace.",
    "options": [
      {
        "id": "opt_oracle12_tune_acoustics",
        "label": "Calibrate suspension dampers to harmonic resonance frequency [ROLL +CYBER]",
        "effectText": "You adjust the pneumatic suspension valves with diagnostic software.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Liquid-smooth ride! Road shock drops to zero; the hauler glides over rocks like glass!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Suspension handles rough ground with newfound smoothness.",
          "rewards": {
            "hullIntegrity": 18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A slight harmonic rattle develops in your dashboard trim.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle12_weld_seismic_plates",
        "label": "Weld basalt acoustic plates across your truck undercarriage [ROLL +GRIT]",
        "effectText": "You mount sacrificial volcanic stone plates along the chassis bottom.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Impenetrable underbody defense! Landmines and rock strikes shatter harmlessly against the stone!",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Undercarriage protection is solidly secured.",
          "rewards": {
            "hullIntegrity": 12,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy stone plates add slight sluggishness to steering.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle12_preserve_tuning",
        "label": "Maintain the current harmonic balance and proceed quietly",
        "effectText": "The balanced hum of the machine accompanies your journey.",
        "rewards": {
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_13_the_ash_fissure_dash",
    "title": "The Collapsing Basin",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 12
      },
      "maxQualities": {
        "Oracle Stage": 12
      }
    },
    "text": "The entire Great Ash Basin is undergoing massive tectonic subduction! Fault lines are opening like yawning jaws as the desert floor sinks fifty feet into subterranean magma caverns.",
    "options": [
      {
        "id": "opt_oracle13_precognitive_drive",
        "label": "Trust the Oracle's telepathic early-warning vectors and floor the gas [ROLL +COOL]",
        "effectText": "You react to fissures before they open, steering on pure prophetic instinct.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous prophetic driving! You weave through the collapsing basin at 130 km/h, untouched by falling earth!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 16
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You escape the collapsing basin, though falling rocks dent your trailer doors.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A collapsing fissure edge drops your rear wheels, scraping the differential before you pull free.",
          "rewards": {
            "hullIntegrity": -26,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle13_raw_engine_boost",
        "label": "Dump auxiliary fuel into the turbochargers and blast across [ROLL +GRIT]",
        "effectText": "You put the pedal to the floor with twin-turbo flames spitting from your exhaust.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Roaring kinetic escape! Pure horsepower rockets your 35-ton rig onto solid bedrock!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach solid ground safely, though engine coolant boils in the overflow.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Extreme heat blows an exhaust manifold gasket with a loud pop.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_oracle13_steady_path",
        "label": "Follow the highest geological ridge line calmly and steadily",
        "effectText": "Cautious pathfinding keeps you on the most durable bedrock.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Oracle Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_14_prophecy_climax",
    "title": "The Voice of the Continent [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 13
      },
      "maxQualities": {
        "Oracle Stage": 13
      }
    },
    "text": "You have broken out of the dying basin and arrived at the continental nexus! Dawn breaks in gold and purple as you seal the prophetic destiny of the Ash Dunes.",
    "options": [
      {
        "id": "opt_oracle14_integrate_oracle",
        "label": "Splice the Oracle's Tectonic Telemetry permanently into your cockpit [ORACLE PATH] [ROLL +CYBER]",
        "effectText": "You complete the neural link to become the permanent Voice of the Living Continent.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Complete transhuman apotheosis! Every road, storm, and highway across North America sings in your mind!",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 25,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Telemetry integrates cleanly, granting unmatched road precognition.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1,
              "Tech Literacy": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Mind-burn causes dashboard static before your interface stabilizes.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_oracle14_lead_sanctuary",
        "label": "Lead the Pilgrim Fleet into the Promised Oasis [PROPHET PATH] [ROLL +COOL]",
        "effectText": "You lead hundreds of pilgrim vehicles into the hidden geothermal valley of New Eden.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You are crowned the Holy Guide of the Wasteland! An eternal community honors your name!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The sanctuary is founded with full joy and celebration.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: The pilgrims thank you solemnly as they begin building their homes.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_oracle14_sell_seismic_keys",
        "label": "Deliver the Seismic Weapon Keys to the Syndicate Cartel [HARBINGER PATH] [ROLL +COOL]",
        "effectText": "You hand over the fault-line codes inside the cartel's underground fortress.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Boundless underworld empire! Billions in bearer bonds and sovereign war-rig armor are yours!",
          "rewards": {
            "credits": 12000,
            "qualities": {
              "Oracle Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cartel honors the massive transaction with full payment.",
          "rewards": {
            "credits": 6000,
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Transaction concludes with full transfer.",
          "rewards": {
            "qualities": {
              "Oracle Stage": 1
            }
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_oracle_15_finale",
    "title": "The Prophet of the Open Road [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "sector",
    "repeatable": false,
    "reqs": {
      "sector": "southwest_wasteland",
      "qualities": {
        "Oracle Stage": 14
      },
      "maxQualities": {
        "Oracle Stage": 14
      }
    },
    "text": "The saga of the Oracle of the Ash Dunes is concluded. Your hauler has been permanently retrofitted with revolutionary seismic acoustic telemetry and divine wasteland engineering.",
    "options": [
      {
        "id": "opt_oracle15_ending_oracle",
        "label": "Guide the Continental Highway as the Dune Oracle [ENDING 1: DUNE ORACLE]",
        "effectText": "Spliced with the Tectonic Prophetic Telemetry Link, your rig commands +15% speed rating, +5 T Cargo Capacity, and permanent +1 COOL and +1 CYBER.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "chips": 4,
            "batteries": 2
          },
          "qualities": {
            "Oracle Stage": 80,
            "Tech Literacy": 25,
            "Street Cred": 25,
            "Heat": -40
          },
          "stats": {
            "cool": 1,
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.15,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Dune Oracle"
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_oracle15_ending_prophet",
        "label": "Lead Free Peoples as the Silica Prophet [ENDING 2: SILICA PROPHET]",
        "effectText": "Revered as the savior of the pilgrim nations, your rig is armored with volcanic basalt composite plating and high-efficiency sand turbines.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "grain": 4,
            "chips": 3
          },
          "qualities": {
            "Oracle Stage": 80,
            "Street Cred": 30
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "maxHull": 25,
            "speedRating": 0.18,
            "name": "Iron Nomad - Silica Prophet"
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_oracle15_ending_harbinger",
        "label": "Rule the Tremors of the World as the Tectonic Harbinger [ENDING 3: TECTONIC HARBINGER]",
        "effectText": "Armed with syndicate gold and heavy seismic armor plating, your rig strikes terror into corporate enclaves across the wasteland.",
        "rewards": {
          "credits": 22000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Oracle Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 20
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxHull": 35,
            "name": "Iron Nomad - Tectonic Harbinger"
          }
        },
        "reqs": {
      "sector": "southwest_wasteland",
          "qualities": {
            "Oracle Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_oracle15_farewell",
        "label": "Collect final pilgrim offering and drive quietly into the sunrise",
        "effectText": "With the dunes at peace, you merge back onto open asphalt.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Oracle Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "maxHull": 15
          }
        }
      }
    ]
  }
];
