import { Storylet } from '../types/storylet';

export const SKYWAY_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_skyway_01_the_booster_sled",
    "title": "The Rocket on the Salt Flats",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "maxQualities": {
        "Skyway Stage": 0
      }
    },
    "text": "At an abandoned dry-lake aerospace test facility in the Mojave, an outlaw rocket propulsion engineer named Gary \"Burnout\" Sparks reveals a secret: a pair of military-grade solid-fuel rocket booster sleds designed to attach directly to a heavy hauler's chassis rails. \"Aegis has locked down the continental border with a 50-foot concrete blast wall,\" Gary grins with wild eyes. \"We can't drive through it. But with these boosters, we can launch your 35-ton rig across the 2-kilometer Grand Canyon Fault and land clean on the other side.\"",
    "options": [
      {
        "id": "opt_skyway01_accept_rocket",
        "label": "Accept the rocket-boosted continental jump mission [ROLL +COOL]",
        "effectText": "You review Gary's flight trajectory math and inspect the solid-fuel rocket nozzles.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Audacious partnership! Gary transfers a 1,500 credit advance and heavy titanium mounting brackets!",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and back your truck onto the mounting ramp.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A minor fuel ignition test scorches your rear mudguard.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway01_verify_aerodynamics",
        "label": "Run aerodynamic flight simulations on your cyberdeck [ROLL +CYBER]",
        "effectText": "You model lift-to-drag ratios of your trailer at Mach 1.5.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless aerodynamic calculation! You design retractable canard winglets to guarantee stable flight pitch!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Simulations confirm a viable sub-orbital ballistic arc.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Simulation software crashes from division-by-zero errors.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway01_reinforce_frame",
        "label": "Weld heavy titanium truss reinforcements along the fifth-wheel mounting plate",
        "effectText": "Solid structural welding ensures the hauler won't buckle under rocket thrust.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_02_solid_fuel_salvage",
    "title": "The Missile Silo Salvage",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 1
      },
      "maxQualities": {
        "Skyway Stage": 1
      }
    },
    "text": "To fuel the rocket sleds, Gary directs you to a decommissioned ICBM missile silo buried in the desert hills. \"We need high-density solid rocket propellant blocks,\" he explains. \"The silo elevator is dead, but the ordnance racks are fully stocked.\"",
    "options": [
      {
        "id": "opt_skyway02_winch_fuel_blocks",
        "label": "Use your heavy truck winch to hoist the 500-pound propellant blocks [ROLL +GRIT]",
        "effectText": "You loop heavy nylon straps around the aluminum-cased fuel blocks.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless heavy lifting! You secure 4 pristine solid-fuel rocket booster blocks and rare chips!",
          "rewards": {
            "cargo": {
              "batteries": 2,
              "chips": 2
            },
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You hoist enough fuel to load both booster sleds.",
          "rewards": {
            "cargo": {
              "batteries": 1
            },
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A fuel block catches on the silo lip, bending your winch gantry.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway02_hack_crane",
        "label": "Restore power to the silo's automated overhead gantry crane [ROLL +CYBER]",
        "effectText": "You bypass the silo electrical breakers with your cyberdeck.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The automated crane swings into action, loading the propellant blocks onto your flatbed in minutes!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The crane operates at half-speed, loading the necessary fuel.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electrical short trips the silo alarm, sounding distant klaxons.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_skyway02_careful_haul",
        "label": "Lash the explosive rocket fuel securely with non-sparking brass chains",
        "effectText": "Safety first: spark-proof lashing prevents accidental ignition on bumpy roads.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_03_the_first_test_burn",
    "title": "The Mach 0.8 Salt Flat Run",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 2
      },
      "maxQualities": {
        "Skyway Stage": 2
      }
    },
    "text": "On the mirror-flat surface of the Bonneville Salt Flats, Gary preps a 3-second low-power test burn of the rocket sleds. The twin rocket exhausts glow white-hot; the smell of burning ammonium perchlorate fills the cockpit.",
    "options": [
      {
        "id": "opt_skyway03_ignite_boosters",
        "label": "Hit the master rocket ignition switch and hold the steering dead-center [ROLL +EDGE]",
        "effectText": "You flip the red safety toggle and punch the ignition button.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blinding, godlike acceleration! 20,000 pounds of thrust slams you back into your seat as the speedometer screams past 300 km/h in four seconds!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rockets roar and shut down cleanly, leaving smoking salt tracks.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Thrust asymmetry pulls hard to the left, throwing the rig into a violent drift before you recover.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway03_monitor_temperatures",
        "label": "Monitor telemetry and balance rocket thrust vectors digitally [ROLL +CYBER]",
        "effectText": "You adjust the electro-hydraulic gimbal actuators on your computer.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect directional thrust alignment! Zero aerodynamic yaw or drift during the burn!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Thrust balance holds within safe parameters.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An actuator motor overheats, blowing a fuse.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway03_deploy_parachutes",
        "label": "Test the high-speed drogue deceleration parachutes",
        "effectText": "The twin parachutes pop and blossom, bringing the 35-ton rig to a smooth stop.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_04_the_pursuing_interceptors",
    "title": "The Aegis Speed Hunters",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 3
      },
      "maxQualities": {
        "Skyway Stage": 3
      }
    },
    "text": "Aegis Interceptor corvettes equipped with twin-turbo jet engines spot your rocket-equipped hauler on Route 50! \"IDENTIFY PROHIBITED MILITARY PROPULSION SYSTEM AND PULL OVER IMMEDIATELY.\"",
    "options": [
      {
        "id": "opt_skyway04_rocket_burst",
        "label": "Trigger a 1-second rocket pulse to vaporize their pursuit [ROLL +EDGE]",
        "effectText": "You tap the rocket throttle. Twin supersonic shockwaves hit their cruisers!",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sonic boom annihilation! The rocket blast blows their interceptors off the road into the salt flats while you vanish over the horizon!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rocket burst opens a two-kilometer lead, leaving them behind.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The thermal blast scorches your own rear mudguards before burning out.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway04_oil_slick_defense",
        "label": "Deploy pressurized oil and magnesium flares across the highway [ROLL +GRIT]",
        "effectText": "You pull the manual countermeasures release lever.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Both pursuing cruisers spin out in blinding magnesium smoke and slide off the asphalt!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cruisers back off, abandoning pursuit.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return cannon fire chips your cab door armor.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway04_deploy_smoke",
        "label": "Deploy ultra-dense chemical smoke and exit onto a dirt canyon trail",
        "effectText": "Dense smoke conceals your turnoff into the mountain canyons.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_05_the_canyon_runway",
    "title": "The Eagle Rim Staging Ground",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 4
      },
      "maxQualities": {
        "Skyway Stage": 4
      }
    },
    "text": "You arrive at Eagle Rim—the lip of the Grand Canyon fault line. Below lies a 3,000-foot drop into jagged red sandstone. Across the 2-kilometer chasm, on the sovereign free territory rim, a guiding landing beacon flashes green.",
    "options": [
      {
        "id": "opt_skyway05_construct_ramp",
        "label": "Use your truck winch and steel road plates to assemble a 20-degree launch ramp [ROLL +GRIT]",
        "effectText": "You and Gary bolt together high-tensile steel ramp sections.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterwork ramp engineering! The 20-degree incline guarantees a perfect sub-orbital ballistic climb angle!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The ramp is assembled and anchored into the rock.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A hydraulic ramp support pin bends under load, requiring welding.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway05_calibrate_flight_avionics",
        "label": "Sync your cyberdeck with the landing beacon transponder [ROLL +CYBER]",
        "effectText": "You lock your heads-up display onto the far rim coordinates.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Millimeter-perfect telemetry lock! Flight computer predicts touchdown with 99.8% precision!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Telemetry locks on the far beacon successfully.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radar static blurs the landing coordinates slightly.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway05_consume_chips",
        "label": "Install 2 Neural Processing Chips from hold into the flight autopilot [INVENTORY]",
        "effectText": "Dual neural processors automate pitch, yaw, and landing parachute timing.",
        "rewards": {
          "cargo": {
            "chips": -2
          },
          "hullIntegrity": 15,
          "qualities": {
            "Skyway Stage": 1,
            "Tech Literacy": 12
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "cargo": {
            "chips": 2
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_06_canard_winglets",
    "title": "The Wings of Iron",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 5
      },
      "maxQualities": {
        "Skyway Stage": 5
      }
    },
    "text": "To ensure the 35-ton hauler doesn't tumble like a brick mid-flight, Gary bolts pneumatic titanium canard winglets directly above the front fenders and trailer roof.",
    "options": [
      {
        "id": "opt_skyway06_weld_winglets",
        "label": "Weld and test the pneumatic winglet deployment actuators [ROLL +GRIT]",
        "effectText": "You execute heavy bead welds along the titanium winglet roots.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless aerospace structural welding! The winglets can withstand 10 Gs of dynamic air pressure!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The winglets deploy smoothly on pneumatic test cycles.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A pneumatic seal hisses air, requiring replacement.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway06_aerodynamic_tuning",
        "label": "Tune winglet pitch controls for supersonic roll stability [ROLL +EDGE]",
        "effectText": "You calibrate the fly-by-wire controls on your dashboard.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Razor-sharp aerodynamic agility! The truck will glide like an aerospace shuttle!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Pitch controls respond cleanly to steering wheel inputs.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Control lag adds a slight dead zone in center steering.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway06_inspect_drogues",
        "label": "Repack the triple Kevlar deceleration parachutes with talcum powder",
        "effectText": "Carefully folded parachutes guarantee instant high-speed deployment.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_07_the_final_countdown",
    "title": "The Ignition Pad",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 6
      },
      "maxQualities": {
        "Skyway Stage": 6
      }
    },
    "text": "Dawn breaks over the Grand Canyon in brilliant red and gold. The Iron Nomad sits at the base of the ramp, twin solid-fuel rockets primed with 50,000 pounds of thrust. In the distance, Aegis attack gunships are diving fast toward your position.",
    "options": [
      {
        "id": "opt_skyway07_arm_master_switches",
        "label": "Arm the dual ignition keys and lock your five-point harness [ROLL +COOL]",
        "effectText": "You stare down the canyon abyss, your heart steady as a mountain.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unshakeable iron composure! You initiate the countdown with total calm; all systems green!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You lock your harness and grip the wheel with white knuckles.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Adrenaline spikes your pulse; your hand shakes on the ignition toggle.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway07_spoof_gunship_radar",
        "label": "Broadcast false missile launches to force the gunships into evasive loops [ROLL +CYBER]",
        "effectText": "You transmit simulated radar missile locks into their cockpits.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The gunships break formation and dump chaff, buying you ninety seconds of clear sky!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Gunships hesitate, delaying their missile run.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Gunships see through the bluff and open fire with 30mm auto-cannons.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway07_three_two_one",
        "label": "Slam the ignition lever to maximum and brace for launch",
        "effectText": "The rockets ignite with an apocalyptic roar of white flame!",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_08_the_launch",
    "title": "The Flight of the Iron Nomad",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 7
      },
      "maxQualities": {
        "Skyway Stage": 7
      }
    },
    "text": "THE LAUNCH! The hauler blasts up the steel ramp at 200 km/h and launches into the open sky! 3,000 feet above the Grand Canyon floor, twin pillars of solid-fuel rocket fire propel your 35-ton rig in a breathtaking sub-orbital arc through the clouds!",
    "options": [
      {
        "id": "opt_skyway08_trim_flight_pitch",
        "label": "Work the canard winglet controls to maintain steady climbing pitch [ROLL +EDGE]",
        "effectText": "You steer through the clouds, holding aerodynamic lift with surgical precision.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sublime flight mastery! The hauler soars across the 2-kilometer chasm with the grace of an eagle!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The truck holds its flight trajectory, though air turbulence rattles the cab.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A crosswind rolls the truck ten degrees before you level the wings.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway08_throttle_burnout",
        "label": "Time the exact millisecond of rocket booster burnout and separation [ROLL +CYBER]",
        "effectText": "You trigger the explosive separation bolts as the solid fuel depletes.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless booster staging! The empty rocket casings drop away cleanly into the canyon depths!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Boosters separate safely, though one casing scrapes a mudflap.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Booster release delay causes aerodynamic yaw before separating.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway08_enjoy_the_view",
        "label": "Look out the side window at the sunrise over the vast continent below",
        "effectText": "For ten seconds, you are the highest trucker on planet Earth.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Street Cred": 10
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_09_the_touchdown",
    "title": "The Parachute Touchdown",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 8
      },
      "maxQualities": {
        "Skyway Stage": 8
      }
    },
    "text": "The far rim of the Grand Canyon rushes up to meet your windshield! Altitude: 200 feet! Speed: 180 km/h! It's time to deploy the triple deceleration parachutes!",
    "options": [
      {
        "id": "opt_skyway09_pop_chutes",
        "label": "Punch the emergency parachute release and feather the air brakes [ROLL +GRIT]",
        "effectText": "You deploy the triple Kevlar chutes and brace for impact.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Magnificent touchdown! The three parachutes blossom like giant white flowers, bringing your 35-ton rig to a smooth, perfect landing on the sovereign highway!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The chutes deploy, though heavy landing shock jars your front suspension.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: One chute fouls; the hard landing bounces your trailer hard on the asphalt.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway09_drift_landing",
        "label": "Touch down at speed and execute a 180-degree power-slide on the landing strip [ROLL +EDGE]",
        "effectText": "You hit the pavement at 120 km/h and lock the rear bogies into a skid.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary stunt landing! The truck spins gracefully to a halt in a cloud of blue tire smoke!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You scrub off speed in a controlled slide, smoking your tires.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The slide clips a roadside gravel berm, scratching your side skirts.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway09_steady_braking",
        "label": "Engage anti-lock air brakes steadily and reel in the parachute lines",
        "effectText": "Methodical braking brings the hauler safely to a stop.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_10_the_crossroads",
    "title": "The Sovereign Skyway [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 9
      },
      "maxQualities": {
        "Skyway Stage": 9
      }
    },
    "text": "On the free sovereign rim of the canyon, hundreds of wasteland truckers, militia fighters, and engineers gather around your steaming, rocket-scorched hauler in absolute disbelief and cheering ecstasy. Gary claps you on the shoulder. \"We just rewrote the laws of transportation,\" he roars. \"Three futures await your legendary rocket-rig!\"",
    "options": [
      {
        "id": "opt_skyway10_choose_comet",
        "label": "Path 1: Permanently integrate the Rocket Booster Sled into your Rig [STRATOSPHERIC COMET]",
        "effectText": "You choose supreme highway velocity. The solid-fuel booster system will be permanently retrofitted to your chassis, granting an incredible +35% permanent speed rating.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Skyway Chosen Path": 1,
            "Street Cred": 25
          }
        }
      },
      {
        "id": "opt_skyway10_choose_glider",
        "label": "Path 2: Build the Sub-Orbital Freight Glider Fleet [SKYWARD NOMAD]",
        "effectText": "You choose continental logistics revolution. You and Gary establish the Skyward Courier guild, flying high-value cargo over all corporate blockades.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Skyway Chosen Path": 2,
            "Street Cred": 30
          }
        }
      },
      {
        "id": "opt_skyway10_choose_thunder",
        "label": "Path 3: Heavy Jet-Assisted Combat Dreadnought [THUNDER ROCKET]",
        "effectText": "You choose devastating military power. Heavy jet boosters and thick armor plating turn your rig into an unstoppable assault dreadnought.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Skyway Chosen Path": 3,
            "Contraband Mastery": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_11_airdrop_blockade",
    "title": "The Airstrike Retaliation",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 10
      },
      "maxQualities": {
        "Skyway Stage": 10
      }
    },
    "text": "Enraged by your miraculous border escape, Aegis high command launches long-range cruise missiles to destroy the rocket hauler on the sovereign runway!",
    "options": [
      {
        "id": "opt_skyway11_rocket_scramble",
        "label": "Fire a secondary solid-fuel sprint burst to outrun the missile blast radius [ROLL +EDGE]",
        "effectText": "You hit the sprint booster, accelerating from 0 to 200 km/h in two seconds.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Hypersonic sprint! The cruise missiles detonate harmlessly three miles behind you in the desert sand!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 16
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the primary blast zone, taking shockwave dust against your rear doors.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Concussion wave rocks the hauler, cracking your rear trailer lights.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway11_electronic_spoof",
        "label": "Transmit Gary's radar-decoy pulse to redirect the cruise missiles into the canyon [ROLL +CYBER]",
        "effectText": "You beam false GPS coordinates into the missile guidance receivers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Trajectory diversion! The missiles turn gracefully and plunge into the empty canyon abyss!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The missiles detonate on a distant canyon ridge.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures scramble your radar dish before the missile passes.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway11_bunker_shelter",
        "label": "Duck beneath the reinforced concrete canopy of a sovereign aircraft hangar",
        "effectText": "The heavy concrete roof shields your rig from shrapnel.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_12_chassis_aerospace_refit",
    "title": "The Aerospace Frame Refit",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 11
      },
      "maxQualities": {
        "Skyway Stage": 11
      }
    },
    "text": "Sovereign aerospace mechanics work through the afternoon, welding titanium heat-shield tiles along your undercarriage and installing retractable carbon-fiber canard wings.",
    "options": [
      {
        "id": "opt_skyway12_supervise_welding",
        "label": "Supervise precision titanium heat-shield riveting [ROLL +GRIT]",
        "effectText": "You ensure every aerospace tile is bonded with thermal ceramic mastic.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Space-shuttle grade armor! Your chassis can withstand re-entry heat and rocket fire with zero fatigue!",
          "rewards": {
            "hullIntegrity": 45,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The heat shields are installed solidly along the frame.",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A rivet tool slips, leaving a minor scratch on a side panel.",
          "rewards": {
            "hullIntegrity": 5,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway12_wire_flight_controls",
        "label": "Interface the winglet actuators with your dashboard joystick [ROLL +CYBER]",
        "effectText": "You wire the fly-by-wire flight joystick into the center console.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless flight controls! You can adjust aerodynamic trim with fingertip precision!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The joystick controls respond cleanly to inputs.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Flight software takes an extra reboot cycle to calibrate.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway12_polish_rocket_cowlings",
        "label": "Buff the stainless steel rocket exhaust bells to a brilliant mirror shine",
        "effectText": "The polished rocket engines look terrifying and glorious.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Street Cred": 6
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_13_the_sovereign_escort",
    "title": "The Triumph of the Skyway",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 12
      },
      "maxQualities": {
        "Skyway Stage": 12
      }
    },
    "text": "A convoy of fifty sovereign wasteland haulers and armored gun-trucks forms up around your rocket rig. They sound their air horns in thunderous harmony, escorting you in a glorious parade across the open Pacific desert.",
    "options": [
      {
        "id": "opt_skyway13_lead_convoy",
        "label": "Lead the sovereign parade at 130 km/h with flags flying from your cab [ROLL +COOL]",
        "effectText": "You take the lead position, horns blaring across the vast plains.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The King of the Continental Skies! The highway echoes with the roar of freedom; your legend is immortal!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You lead the convoy with pride and majesty.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Engine runs a bit warm in the group formation, but you hold point.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway13_radio_broadcast",
        "label": "Broadcast an inspirational victory address to every trucker on the continent [ROLL +CYBER]",
        "effectText": "You open the high-power transmitter and speak to the open road.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Millions hear your voice: \"They built walls to cage us. Today, we learned to fly!\"",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Tech Literacy": 12,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Your message spreads across all independent trucker frequencies.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radio static clips your closing words, but the message is clear.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_skyway13_salute_drivers",
        "label": "Sound your dual chrome air horns in rhythmic salute to your comrades",
        "effectText": "The deep brass roar of your horns shakes the canyon rocks.",
        "rewards": {
          "qualities": {
            "Skyway Stage": 1,
            "Street Cred": 8
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_14_skyway_climax",
    "title": "The Stratospheric Horizon [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 13
      },
      "maxQualities": {
        "Skyway Stage": 13
      }
    },
    "text": "You have arrived at the Pacific aerospace citadel! The final flight telemetry is logged as you permanently lock in your chosen destiny.",
    "options": [
      {
        "id": "opt_skyway14_lock_rocket_sled",
        "label": "Lock the Solid-Fuel Rocket Booster Sled permanently into your rig [COMET PATH] [ROLL +EDGE]",
        "effectText": "You weld the final firing contacts, crowned the Stratospheric Comet of the American Highway.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Supreme velocity godhood! +35% permanent speed rating! No vehicle in existence can match your velocity!",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The rocket sled is permanently integrated and balanced.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: A minor booster relay sparks before balancing cleanly.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_skyway14_charter_skyward",
        "label": "Inaugurate the Skyward Nomad Courier Guild [NOMAD PATH] [ROLL +COOL]",
        "effectText": "You sign the founding charter of the continent's first sub-orbital freight fleet.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Supreme courier empire! Billions in contracts and elite glider trailers are loaded onto your rig!",
          "rewards": {
            "credits": 10000,
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 35
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The guild is established with massive celebration.",
          "rewards": {
            "credits": 5000,
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "miss": {
          "effectText": "MISS: The charter is signed with solemn ceremonies.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_skyway14_arm_thunder_dreadnought",
        "label": "Lock in Heavy Jet-Assisted Combat Armor [THUNDER PATH] [ROLL +GRIT]",
        "effectText": "You mount jet turbine boosters and heavy armor plates across every surface.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic war-rig! You strike fear into every corporate army on the continent!",
          "rewards": {
            "credits": 15000,
            "qualities": {
              "Skyway Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Thunder armor is secured with full balance.",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy armor adds slight weight, but yields terrifying power.",
          "rewards": {
            "qualities": {
              "Skyway Stage": 1
            }
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_skyway_15_finale",
    "title": "The Stratospheric Comet [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "southwest_wasteland",
    "layer": "inland",
    "repeatable": false,
    "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
      "qualities": {
        "Skyway Stage": 14
      },
      "maxQualities": {
        "Skyway Stage": 14
      }
    },
    "text": "The saga of the Sovereign Skyway is complete. Your hauler has been permanently modified with revolutionary aerospace rocketry and supersonic running gear.",
    "options": [
      {
        "id": "opt_skyway15_ending_comet",
        "label": "Rule the Open Highway as the Stratospheric Comet [ENDING 1: STRATOSPHERIC COMET]",
        "effectText": "Equipped with the Solid-Fuel Rocket Booster Sled, your hauler commands an unbelievable +35% permanent speed rating, +15 Max Hull, and permanent +1 EDGE.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 4,
            "chips": 3
          },
          "qualities": {
            "Skyway Stage": 80,
            "Street Cred": 40,
            "Heat": -50
          },
          "stats": {
            "edge": 1
          },
          "rig": {
            "speedRating": 0.35,
            "maxHull": 15,
            "name": "Iron Nomad - Stratospheric Comet"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_skyway15_ending_nomad",
        "label": "Command Continental Skies as the Skyward Nomad [ENDING 2: SKYWARD NOMAD]",
        "effectText": "Leading the sub-orbital freight revolution, your rig commands +28% speed rating, +5 T Cargo Capacity, and permanent +1 EDGE and +1 COOL.",
        "rewards": {
          "credits": 18000,
          "hullIntegrity": 100,
          "cargo": {
            "chips": 5,
            "batteries": 3
          },
          "qualities": {
            "Skyway Stage": 80,
            "Street Cred": 40
          },
          "stats": {
            "edge": 1,
            "cool": 1
          },
          "rig": {
            "speedRating": 0.28,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Skyward Nomad"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_skyway15_ending_thunder",
        "label": "Crush All Opposition as the Thunder Rocket [ENDING 3: THUNDER ROCKET]",
        "effectText": "Armed with jet turbine boosters, +25% speed rating, and +30 Max Hull armor plating, your rig is the undisputed sovereign dreadnought of the highways.",
        "rewards": {
          "credits": 24000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Skyway Stage": 80,
            "Street Cred": 35,
            "Contraband Mastery": 20
          },
          "stats": {
            "edge": 1,
            "grit": 1
          },
          "rig": {
            "speedRating": 0.25,
            "maxHull": 30,
            "name": "Iron Nomad - Thunder Rocket"
          }
        },
        "reqs": {
      "inlandOnly": true,
      "sector": "southwest_wasteland",
          "qualities": {
            "Skyway Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_skyway15_farewell",
        "label": "Collect final veteran courier fee and roll out into the radiant sky",
        "effectText": "With the skies conquered, you merge back onto open asphalt.",
        "rewards": {
          "credits": 12000,
          "qualities": {
            "Skyway Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "edge": 1
          },
          "rig": {
            "speedRating": 0.2
          }
        }
      }
    ]
  }
];
