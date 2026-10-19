import { Storylet } from '../types/storylet';

export const GHOSTWAY_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_ghostway_01_mirage_frequency",
    "title": "The Phantom Beacon of Interstate '76",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "maxQualities": {
        "Ghostway Stage": 0
      }
    },
    "text": "While scanning emergency bands in the Mojave Wasteland, your audio deck intercepts a mathematical pulse on a sub-gigahertz military band. The coordinates point to \"Interstate 76\"—a legendary pre-collapse magnetic highway thought to have been vaporized in the wars, yet appearing on your long-range lidar as a faint electromagnetic mirage floating ten feet above the desert sand.",
    "options": [
      {
        "id": "opt_ghostway01_tune_frequency",
        "label": "Tune your radio receiver to isolate the beacon's carrier wave [ROLL +CYBER]",
        "effectText": "You adjust your antenna array and filter ambient static.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Crystal-clear signal! You download the military navigation transponder frequency and vector map.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You lock onto the signal bearing, though static fuzzes the margins.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-frequency feedback squeals through your cabin headset.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway01_ask_elders",
        "label": "Ask grizzled Mojave truckers about the Ghostway legend [ROLL +COOL]",
        "effectText": "You buy a round of synthetic synth-beer at the depot bar and listen to old highway tales.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Old-timers share secret waypoint codes and warning landmarks to avoid magnetic traps!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The truckers confirm the highway exists, warning that it eats unshielded electronics.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The bar crowd laughs off your questions as spacer ghost stories.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway01_prep_electronics",
        "label": "Install copper-mesh Faraday shielding around your navigation terminal",
        "effectText": "You shield your dashboard instruments from anomalous magnetic fields.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_02_phased_radar_mod",
    "title": "The Phased Lidar Array",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 1
      },
      "maxQualities": {
        "Ghostway Stage": 1
      }
    },
    "text": "To track the invisible magnetic highway, you meet a renegade avionics mechanic who presents an experimental phased-array lidar dish. \"Mount this to your cab roof,\" she says. \"It projects pulse-frequency ultraviolet lasers capable of illuminating electromagnetic mirages in real time.\"",
    "options": [
      {
        "id": "opt_ghostway02_mount_dish",
        "label": "Weld and calibrate the phased lidar array on your roof rack [ROLL +CYBER]",
        "effectText": "You align the laser diodes with your windshield HUD.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless optical alignment! The HUD paints glowing green highway lanes directly onto the desert air!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The array works, though you have to tighten the mounting bolts against vibration.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A diode burns out during calibration, requiring replacement fuses.",
          "rewards": {
            "credits": -100,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway02_negotiate_mod",
        "label": "Bargain for extra spare components and diagnostic optical cables [ROLL +COOL]",
        "effectText": "You talk down the price and inspect her spare parts crates.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superb trade! She gives you high-speed fiber-optic lines and 2 neural processors!",
          "rewards": {
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure the necessary spare lasers at reasonable cost.",
          "rewards": {
            "credits": -150,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: She charges an exorbitant premium for specialized hardware.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway02_secure_brackets",
        "label": "Reinforce the roof mount with heavy steel angle-iron",
        "effectText": "Solid structural welding ensures the dish won't shear off at 200 km/h.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_03_first_mirage_gate",
    "title": "The Shimmering Horizon",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 2
      },
      "maxQualities": {
        "Ghostway Stage": 2
      }
    },
    "text": "Out in the empty salt flat, your phased lidar suddenly blazes neon cyan. Ahead, hovering twelve inches above the cracked dirt, an ethereal highway of shimmering electromagnetic rails stretches into the distance. The air smells intensely of ozone.",
    "options": [
      {
        "id": "opt_ghostway03_drive_on",
        "label": "Line up your tires with the glowing magnetic lanes and accelerate [ROLL +EDGE]",
        "effectText": "You center the steering wheel on the green wireframe projection and drop the throttle.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure magical levitation! Rolling friction drops to near zero as magnetic fields lift your hauler into silent, gliding flight!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The hauler merges onto the field, though sudden magnetic torque yanks the steering wheel.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You misjudge the entry ramp, bottoming out against the physical dirt ridge.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway03_frequency_tuning",
        "label": "Fine-tune the hauler's magnetic alternator to match the lane frequency [ROLL +CYBER]",
        "effectText": "You dial in the resonance frequency on your dashboard deck.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect harmonic lock! The hauler recharges its own batteries directly from the highway field!",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The alternator syncs, stabilizing cabin power.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-voltage hum rattles your cabin speakers.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway03_slow_merge",
        "label": "Creep onto the lane at 40 km/h and observe sensor telemetry",
        "effectText": "A careful, methodical merge confirms the magnetic floor is stable.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_04_electromagnetic_storm",
    "title": "The Ion Tempest",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 3
      },
      "maxQualities": {
        "Ghostway Stage": 3
      }
    },
    "text": "A ferocious ion storm rolls across the magnetic corridor. Sheets of violet lightning arc between the hovering lanes and your truck's exterior antennae. Your digital speedometer pins to 240 km/h as the storm magnetizes your wheels!",
    "options": [
      {
        "id": "opt_ghostway04_ride_lightning",
        "label": "Grip the wheel and surf the electromagnetic surge at breakneck speed [ROLL +EDGE]",
        "effectText": "You lean forward, eyes wide, steering through arcs of violet lightning.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Transcendent wasteland piloting! You ride the ion wave for 50 kilometers in minutes, leaving thunder in your wake!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You hold the lane through the storm, though your tires smell of scorched ozone.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An arc of lightning blows your passenger headlight and rattles your teeth.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway04_grounding_rod",
        "label": "Deploy the emergency copper grounding anchor to bleed off charge [ROLL +GRIT]",
        "effectText": "You lower the heavy copper skid plate onto the highway surface.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brilliant grounding! The electrical charge is channeled safely into the magnetic bedrock.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The grounding skid sparks violently, but keeps cabin electronics safe.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The grounding cable heats to melting point before detaching.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway04_faraday_cage",
        "label": "Rely on the cabin's copper-mesh shielding and maintain steady throttle",
        "effectText": "The Faraday shielding keeps you safe inside while lightning licks the glass.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_05_ghost_convoy",
    "title": "The Autonomous Phantoms",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 4
      },
      "maxQualities": {
        "Ghostway Stage": 4
      }
    },
    "text": "Through the shimmering mirage, shadowy apparitions appear: a convoy of pre-collapse automated military supply drones running on locked autopilot schedules from 2076! They cruise in tight diamond formation, unresponsive to civilian radio hailings.",
    "options": [
      {
        "id": "opt_ghostway05_hack_military_drones",
        "label": "Transmit military command ciphers to slice into their lead drone [ROLL +CYBER]",
        "effectText": "You beam root clearance codes into their lead automated transceiver.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Clearance accepted! The automated drones recognize your hauler as Convoy Commander and yield 3 crates of pristine chips!",
          "rewards": {
            "cargo": {
              "chips": 3
            },
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The drones open their formation to let your hauler pass safely.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Automated defensive countermeasures blast electromagnetic noise into your receivers.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway05_slipstream_draft",
        "label": "Tuck your hauler into the aerodynamic slipstream behind the phantom convoy [ROLL +EDGE]",
        "effectText": "You pull within three feet of the lead phantom hauler's bumper.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless drafting! Wind resistance drops to zero as you cruise at 180 km/h with zero fuel consumption!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You hold the draft for ten kilometers before breaking off.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sudden phantom lane shift nearly clips your front fender.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway05_pass_wide",
        "label": "Signal lane change and pass the automated drone fleet with ample clearance",
        "effectText": "You pull into the passing lane and leave the relics of the past behind.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_06_fueling_the_matrix",
    "title": "The Sunken Power Substation",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 5
      },
      "maxQualities": {
        "Ghostway Stage": 5
      }
    },
    "text": "The ghost highway signals flicker and dim. To maintain the magnetic lane projection, you must recharge a subterranean repeater station hidden in an abandoned salt dome.",
    "options": [
      {
        "id": "opt_ghostway06_overcharge_repeater",
        "label": "Hook your truck generator to the underground station's input bus [ROLL +CYBER]",
        "effectText": "You rev the engine and channel maximum alternator output into the buried grid.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The repeater roar to life with blinding blue light! The ghost highway brightens for two hundred kilometers ahead!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The repeater powers up to baseline, stabilizing the lane.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Power feedback trips your alternator, requiring a fuse replacement.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway06_consume_battery",
        "label": "Install 1 Hydro-Battery from your hold directly into the station's backup slot [INVENTORY]",
        "effectText": "You donate a high-yield battery to permanently power the repeater.",
        "rewards": {
          "cargo": {
            "batteries": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Ghostway Stage": 1,
            "Street Cred": 8
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "cargo": {
            "batteries": 1
          }
        }
      },
      {
        "id": "opt_ghostway06_rely_on_momentum",
        "label": "Preserve your own batteries and drive through the dimming lane on momentum",
        "effectText": "You conserve resources and proceed under fading signals.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_07_temporal_echo",
    "title": "The Chrono-Static Rift",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 6
      },
      "maxQualities": {
        "Ghostway Stage": 6
      }
    },
    "text": "At 210 km/h along the magnetic rails, time begins to smear. Old radio broadcasts from 2076 echo across your cab speakers; you see holographic apparitions of classic cars driving beside you like luminous memories.",
    "options": [
      {
        "id": "opt_ghostway07_ground_reality",
        "label": "Anchor your mind and instruments on physical engine telemetry [ROLL +COOL]",
        "effectText": "You lock your eyes on the analog oil pressure gauge and steady your breathing.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unshakeable mental grit! The temporal static dissolves, leaving crystal-clear focus and road clarity.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shake off the vertigo and keep your hands steady on the wheel.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Disorientation causes you to swerve across lane markers.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway07_record_data",
        "label": "Record the pre-collapse radio broadcast data into your cyberdeck [ROLL +CYBER]",
        "effectText": "You open high-speed data capture buffers to record the anomalous signals.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Invaluable historical data! You capture lost encrypted military routing tables and trade cipher keys!",
          "rewards": {
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You record partial data packets before the echo fades.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Static corrupts your data log file.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway07_increase_speed",
        "label": "Punch the throttle and punch through the temporal anomaly",
        "effectText": "Raw velocity carries you through the distortion field.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_08_aegis_interceptor_chase",
    "title": "The Corporate Chasers",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 7
      },
      "maxQualities": {
        "Ghostway Stage": 7
      }
    },
    "text": "Aegis high-speed stealth interceptors spot your truck hovering on the phantom lane! Armed with EMP cannons and magnetic harpoons, they accelerate to cut you off from the exit node.",
    "options": [
      {
        "id": "opt_ghostway08_phase_drift",
        "label": "Feint into a physical sand dune and let the magnetic lane whip you around them [ROLL +EDGE]",
        "effectText": "You pull a 180-degree drift along the curved magnetic rail.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular physics manipulation! The interceptors overshoot on the sand, skidding into each other while you rocket ahead!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You outmaneuver the interceptors, though an EMP pulse grazes your rear bumper.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An EMP round clips your trailer, rebooting your dashboard displays.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway08_hack_interceptors",
        "label": "Transmit false obstacle warnings into their forward collision sensors [ROLL +CYBER]",
        "effectText": "You spoof their lidar arrays with virtual brick walls.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Automated emergency brakes lock on all three interceptors, leaving them spinning harmlessly in the dust!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Two interceptors brake hard, allowing you to pull away.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their cyber-ICE deflects your signal, firing a warning rocket.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway08_maximum_throttle",
        "label": "Open every throttle valve and let raw speed outrun their cruisers",
        "effectText": "Straight-line acceleration on the friction-less lane pulls you out of their weapons range.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_09_fractured_overpass",
    "title": "The Sky Leap of Black Chasm",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 8
      },
      "maxQualities": {
        "Ghostway Stage": 8
      }
    },
    "text": "A physical gorge yawns 500 meters below where a massive concrete highway bridge collapsed sixty years ago. The magnetic rails continue unbroken through the open air like a glowing tightrope across the chasm!",
    "options": [
      {
        "id": "opt_ghostway09_leap_of_faith",
        "label": "Trust the phased lidar and drive straight across the empty air [ROLL +COOL]",
        "effectText": "You stare into the clouds, lock your jaw, and accelerate into the open sky.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Breathtaking glory! The invisible magnetic field catches your tires like solid steel, carrying your hauler effortlessly across the 500-meter drop!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You glide across the chasm, your heart pounding as the air howls beneath you.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Sudden air turbulence drops the hauler six inches before the magnetic rails catch.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway09_stabilize_magnetics",
        "label": "Overclock the roof array to widen the magnetic track width [ROLL +CYBER]",
        "effectText": "You pump maximum voltage into the phased array.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The green wireframe lane expands into a four-lane luminous bridge! You cross with total safety.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Lane width widens enough to guarantee safe transit.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Overload blows a capacitor on the roof rack.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway09_focus_ahead",
        "label": "Grip the wheel and refuse to look down into the void",
        "effectText": "Unwavering resolve carries you across the chasm.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_10_the_crossroads",
    "title": "The Map of the Impossible [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 9
      },
      "maxQualities": {
        "Ghostway Stage": 9
      }
    },
    "text": "At the abandoned observatory atop Mount Charleston, your cartographic deck compiles the complete digital topology of Interstate 76. Three factions seek the key to this continent-spanning secret highway.",
    "options": [
      {
        "id": "opt_ghostway10_choose_phantom",
        "label": "Path 1: Keep the Secret Cartography for Yourself [HIGHWAY PHANTOM]",
        "effectText": "You choose independence and unmatched speed. The ghost highway map will remain your personal secret, allowing your rig to bypass every traffic checkpoint on the continent.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1,
            "Ghostway Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_ghostway10_choose_cartel",
        "label": "Path 2: Sell Exclusive Corridors to the Gridlock Smugglers [MIRAGE RUNNER]",
        "effectText": "You choose immense underworld wealth and syndicate status. Gridlock will establish unpoliced contraband super-highways and grant you sovereign status.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1,
            "Ghostway Chosen Path": 2,
            "Contraband Mastery": 15
          }
        }
      },
      {
        "id": "opt_ghostway10_choose_mesh",
        "label": "Path 3: Open-Source the Highway Data to the Neuralfront Mesh [CYBER CARTOGRAPHER]",
        "effectText": "You choose the liberation of all wasteland travelers. The map will be broadcast freely to every independent trucker, shattering corporate toll monopolies.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1,
            "Ghostway Chosen Path": 3,
            "Tech Literacy": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_11_sensor_overload",
    "title": "The Thermal Blaze on the Roof",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 10
      },
      "maxQualities": {
        "Ghostway Stage": 10
      }
    },
    "text": "Processing continuous terabytes of sub-orbital lidar data has pushed the roof dish to white-hot thermal thresholds. Solder is melting on the laser emitters; an automated cooling shutdown is ten seconds away.",
    "options": [
      {
        "id": "opt_ghostway11_liquid_coolant",
        "label": "Splice your truck's cabin freon loops into the roof dish cooler [ROLL +CYBER]",
        "effectText": "You route chilling refrigerant lines up through the roof grommet.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless cooling mod! Temperatures drop instantly, enabling 100% data throughput without thermal limits!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cooling holds the dish operational, though cabin air conditioning is sacrificed.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Freon escapes in a hissing cloud, burning your knuckles before you seal it.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway11_heatsink_fins",
        "label": "Weld copper radiator fins onto the emitter housing [ROLL +GRIT]",
        "effectText": "You quickly weld sacrificial copper heat-sink fins to dissipate the thermal load.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: High-efficiency airflow cooling! The slipstream pulls away heat like a wind tunnel.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The fins dissipate enough heat to prevent shutdown.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A weld snaps on a bump, leaving the fin dangling by a wire.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway11_cycle_emitters",
        "label": "Cycle the laser emitters in staggered pulses to reduce heat output",
        "effectText": "Pulsing the array manages heat at the expense of slight display flicker.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_12_interceptor_dogfight",
    "title": "The Aegis Gunship Intercept",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 11
      },
      "maxQualities": {
        "Ghostway Stage": 11
      }
    },
    "text": "Aegis tactical command scrambles a supersonic interceptor jet to destroy the ghost highway terminal before you can broadcast the coordinates. Missiles streak across the salt flats!",
    "options": [
      {
        "id": "opt_ghostway12_phase_evasion",
        "label": "Slalom along the magnetic rail to throw off radar missile locks [ROLL +EDGE]",
        "effectText": "You weave violently between magnetic harmonic nodes.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The supersonic missiles lose lock and detonate against empty sand dunes behind you!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You dodge the direct impacts, though shockwaves rattle your chassis.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A proximity missile detonates near your trailer, shredding a mudguard.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway12_hack_jet_avionics",
        "label": "Transmit a magnetic distortion pulse into the jet's radar radome [ROLL +CYBER]",
        "effectText": "You fire the phased array directly at the approaching jet cockpit.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sensor blindness! The jet's heads-up display floods with green mirage feedback, forcing the pilot to pull up and disengage!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The jet wavers and breaks off its attack run.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electronic countermeasures ping back into your radio, popping a speaker.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway12_deploy_chaff",
        "label": "Launch all remaining flare and chaff canisters into the jet's vector",
        "effectText": "A blinding cloud of burning magnesium foils the jet's targeting run.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_13_sonic_breach",
    "title": "The Velocity Barrier",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 12
      },
      "maxQualities": {
        "Ghostway Stage": 12
      }
    },
    "text": "The final leg of Interstate 76 opens into a straight, glass-smooth vacuum corridor across the Nevada desert. With zero surface friction, your engine can breach the 250 km/h sound barrier!",
    "options": [
      {
        "id": "opt_ghostway13_break_sound_barrier",
        "label": "Open the master throttle and punch through the supersonic barrier [ROLL +EDGE]",
        "effectText": "You floor the pedal and hold the steering dead-center as the speedometer climbs past 260 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sonic boom across the wasteland! You shatter every land-speed convoy record in history, disappearing into legend!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You breach 230 km/h safely, emerging at the terminus with engine humming.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-speed vibration shakes loose a roof spotlight before you slow down.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway13_stabilize_tail",
        "label": "Deploy trailer aerodynamic stabilizer fins to prevent yaw [ROLL +GRIT]",
        "effectText": "You deploy pneumatic winglets to clamp the trailer firmly to the air stream.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Rock-solid aerodynamic stability! The hauler rides like a rail-guided missile.",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The stabilizers hold the line smoothly.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A stabilizer fin rattles violently under aerodynamic pressure.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghostway13_cruise_control",
        "label": "Set cruise control to a conservative 180 km/h and enjoy the smooth flight",
        "effectText": "A smooth, dignified glide across the desert brings you safely to the terminus.",
        "rewards": {
          "qualities": {
            "Ghostway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_14_mirage_climax",
    "title": "The Convergence of the Grid [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 13
      },
      "maxQualities": {
        "Ghostway Stage": 13
      }
    },
    "text": "You have reached the primary Pacific terminus of Interstate 76! The destination beacon glows in brilliant emerald light as you finalize your chosen legacy.",
    "options": [
      {
        "id": "opt_ghostway14_lock_phantom_route",
        "label": "Encrypt the complete navigation matrix into your private dashboard [PHANTOM PATH] [ROLL +EDGE]",
        "effectText": "You burn the route into your own neural cyberdeck, crowned the Phantom King of the American Highway.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You are untouchable! No corporate toll gate or police cruiser will ever catch your rig again!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The route is permanently saved to your navigational computer.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Route coordinates save safely with minor compression artifacts.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_ghostway14_deliver_cartel",
        "label": "Transfer the exclusive access keys to the Gridlock Cartel Lords [CARTEL PATH] [ROLL +COOL]",
        "effectText": "You hand over the encrypted transponder inside the cartel's subterranean fortress.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign fortune! Billions in bearer bonds and elite contraband runner equipment are yours!",
          "rewards": {
            "credits": 10000,
            "qualities": {
              "Ghostway Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cartel honors the deal and transfers funds.",
          "rewards": {
            "credits": 5000,
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense debriefing concludes with payment clearance.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_ghostway14_broadcast_mesh",
        "label": "Broadcast the open-source map to every trucker on the Neuralfront Mesh [MESH PATH] [ROLL +CYBER]",
        "effectText": "You open the satellite uplinks and broadcast the coordinates freely to millions of wasteland drivers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The great highway liberation! Thousands of independent haulers celebrate your name across the continent!",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 25,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The coordinates propagate across the entire rebel mesh.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1,
              "Tech Literacy": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate jamming scrubs some frequencies, but the core map leaks.",
          "rewards": {
            "qualities": {
              "Ghostway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_ghostway_15_finale",
    "title": "The Highway Phantom [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Ghostway Stage": 14
      },
      "maxQualities": {
        "Ghostway Stage": 14
      }
    },
    "text": "The saga of the Ghost Highway of '76 is concluded. Your rig has been permanently modified with revolutionary phased-array lidar and magnetic levitation running gear.",
    "options": [
      {
        "id": "opt_ghostway15_ending_phantom",
        "label": "Rule Continental Corridors as the Highway Phantom [ENDING 1: HIGHWAY PHANTOM]",
        "effectText": "Equipped with the Phased-Array Lidar Navigation Uplink, your hauler glides with +30% permanent speed rating and unmatched evasive agility.",
        "rewards": {
          "credits": 15000,
          "hullIntegrity": 100,
          "cargo": {
            "chips": 4,
            "batteries": 2
          },
          "qualities": {
            "Ghostway Stage": 80,
            "Street Cred": 30,
            "Heat": -50
          },
          "stats": {
            "edge": 1
          },
          "rig": {
            "speedRating": 0.3,
            "name": "Iron Nomad - Highway Phantom"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_ghostway15_ending_cartel",
        "label": "Command Underworld Pipelines as the Mirage Runner [ENDING 2: MIRAGE RUNNER]",
        "effectText": "Awarded Syndicate sovereign status, your hauler features magnetic cargo dampeners and high-speed contraband turbines.",
        "rewards": {
          "credits": 20000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Ghostway Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 20
          },
          "stats": {
            "edge": 1,
            "cool": 1
          },
          "rig": {
            "speedRating": 0.25,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Mirage Runner"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_ghostway15_ending_mesh",
        "label": "Pioneer the Digital Frontier as the Cyber Cartographer [ENDING 3: CYBER CARTOGRAPHER]",
        "effectText": "Celebrated as the liberator of the highways, your rig is outfitted with cutting-edge rebel neural interfaces and reinforced armor.",
        "rewards": {
          "credits": 12000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "chips": 3
          },
          "qualities": {
            "Ghostway Stage": 80,
            "Tech Literacy": 30,
            "Street Cred": 20
          },
          "stats": {
            "edge": 1,
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.22,
            "maxHull": 20,
            "name": "Iron Nomad - Cyber Cartographer"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Ghostway Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_ghostway15_farewell",
        "label": "Collect final courier bonus and roll out under the wide desert sky",
        "effectText": "With the phantom highway mapped, you merge back onto open asphalt.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Ghostway Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "edge": 1
          },
          "rig": {
            "speedRating": 0.15
          }
        }
      }
    ]
  }
];
