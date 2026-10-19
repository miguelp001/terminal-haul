import { Storylet } from '../types/storylet';

export const ICARUS_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_icarus_01_cable_snap",
    "title": "The Sky-Anchor Severed",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Icarus Stage": 0
      }
    },
    "text": "While fueling at an equatorial solar depot, a streak of sonic thunder splits the stratosphere. High above, the diamond-carbon tether of the Olympus Orbital Space Elevator snaps! Three descending sub-orbital cargo capsules carrying raw antimatter isotopes tumble into low atmospheric re-entry along an 800-kilometer trajectory.",
    "options": [
      {
        "id": "opt_icarus01_triangulate_trajectory",
        "label": "Triangulate the orbital reentry vectors [ROLL +CYBER]",
        "effectText": "You hook your cyberdeck into the depot tracking radar to plot capsule touchdown coordinates.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless orbital trajectory calculation! You calculate the precise impact crater coordinates before mercenary teams react.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Trajectory plotted, though sensor noise obscures the third capsule landing site.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Atmospheric ionization shorts out your receiver dish, delaying your intercept calculation.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus01_rapid_dispatch",
        "label": "Prep the hauler turbines and burn rubber toward the salt flats [ROLL +EDGE]",
        "effectText": "You dump fuel into the combustion pre-heaters and drop into gear before sirens sound.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blistering reaction time! You exit the terminal gates ahead of every competitor convoy.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the gates cleanly, though cold tires struggle for immediate grip.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Stalling out at the security gate costs precious minutes as rivals overtake you.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus01_renegade_engineer",
        "label": "Welcome aboard Dr. Lyra Vance, the rogue solar elevator architect",
        "effectText": "She leaps into your cab with field-containment gear: \"Hauler, keep those antimatter cells cool or we vaporize three sectors.\"",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Street Cred": 5,
            "Icarus Trust": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_02_falling_stars",
    "title": "The Sonic Reentry Trail",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 1
      },
      "maxQualities": {
        "Icarus Stage": 1
      }
    },
    "text": "Streaks of incandescent plasma tear across the night sky as the first capsule impacts the salt basin ten miles ahead. The shockwave rattles your rig cabin, kicking up a colossal wall of glowing alkali dust.",
    "options": [
      {
        "id": "opt_icarus02_drift_shockwave",
        "label": "Drift the 35-ton hauler into the pressure shockwave [ROLL +EDGE]",
        "effectText": "You feather the brakes and ride the seismic shockwave like a mechanical surfer.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure highway poise! You glide through the dust wave at 110 km/h without losing tracking.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The shockwave slams your trailer, cracking side windshield laminate.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The blast violently pitches the hauler onto two wheels before crashing back down.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus02_reinforce_shields",
        "label": "Engage auxiliary magnetic grounding clamps [ROLL +GRIT]",
        "effectText": "You drop hydraulic stabilizers to anchor against the supersonic wind.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Solid bedrock anchor! The atmospheric blast washes harmlessly over your sloped cab.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Anchors hold, though flying debris dents your front bumper.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An anchor cable tears off under tension, rattling against the undercarriage.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus02_track_beacon",
        "label": "Follow Lyra’s homing beacon directly toward the smoking crater",
        "effectText": "You lock onto the capsule’s emergency transponder pulse, cutting straight across the salt.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Trust": 10
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_03_first_crater_scramble",
    "title": "The First Crater Scramble",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 2
      },
      "maxQualities": {
        "Icarus Stage": 2
      }
    },
    "text": "At the center of a glass-fused impact crater sits the first titanium cargo capsule, venting glowing blue Cherenkov radiation. A rival mercenary gun-truck arrives on the opposite ridge, aiming heavy machine guns.",
    "options": [
      {
        "id": "opt_icarus03_speed_winch",
        "label": "Drive straight down the crater and hook the heavy winch [ROLL +EDGE]",
        "effectText": "You slide the hauler down the steep 45-degree glass slope, winching the capsule in seconds.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular recovery! You haul the glowing canister into your hold before mercenaries can zero their sights.",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Capsule loaded, though enemy bullets spark off your rear tailgate.",
          "rewards": {
            "cargo": {
              "batteries": 1
            },
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The winch slips on slick glass, delaying recovery under heavy enemy fire.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus03_hack_mercs",
        "label": "Inject a malware feedback pulse into their gun-truck turret [ROLL +CYBER]",
        "effectText": "You target their automated turret servo array with an electromagnetic glitch.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Their turret spins wildly out of control, firing into the empty sky!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Turret jammed, giving you time to claim the prize.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their firewall trace fires an anti-materiel round into your engine cowl.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus03_ram_ridge",
        "label": "Charge the mercenary truck and push it down the far ravine [ROLL +GRIT]",
        "effectText": "You drop the heavy plow and ram their technical broadside.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total demolition! The mercenary truck tumbles down the ravine into twisted scrap.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force them off the ridge, taking minor fender damage.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The collision rattles your axle tie-rods violently.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_04_plasma_cell_siphon",
    "title": "The Magnetic Flux Siphon",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 3
      },
      "maxQualities": {
        "Icarus Stage": 3
      }
    },
    "text": "At a roadside maintenance bay, Lyra inspects the recovered pod. \"The magnetic containment field is decaying. We need to siphon the surplus antimatter flux into your hauler’s powertrain before the core destabilizes.\"",
    "options": [
      {
        "id": "opt_icarus04_flux_shunt",
        "label": "Splice the plasma conduit directly into the engine turbine [ROLL +CYBER]",
        "effectText": "You solder superconducting leads between the capsule and your hauler’s turbochargers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The engine breathes pure antimatter! Raw power hums through the chassis with zero radiation leakage.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Conduit spliced, though high magnetic fields scramble your cabin compass.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An inductive arc scorches the battery bank, blowing out secondary lights.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus04_manual_cool",
        "label": "Manually operate the liquid nitrogen injection pumps [ROLL +GRIT]",
        "effectText": "You pump cryogenic fluid into the core casing by hand to stabilize temperatures.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sub-zero perfection! The temperature locks at minus eighty degrees.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Core stabilized, though freezing spray numbs your fingers.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A frozen valve cracks under pressure, releasing freezing mist across the floor.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus04_recharge_battery",
        "label": "Channel excess plasma to fully recharge all rig battery cells",
        "effectText": "You absorb the excess energy, maxing out your electrical reserves for the interstate sprint.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Trust": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_05_mercenary_interception",
    "title": "The Black Sun Interceptors [BRANCH 1]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 4
      },
      "maxQualities": {
        "Icarus Stage": 4
      }
    },
    "text": "A squadron of high-speed stealth interceptor cars from the Black Sun Syndicate swarms the highway. Their leader broadcasts: \"Hand over the antimatter capsule, hauler, or we turn your rig into a radioactive crater.\"",
    "options": [
      {
        "id": "opt_icarus05_slalom_evasion",
        "label": "Slalom through traffic at 150 km/h [BRANCH 1A: SPEED] [ROLL +EDGE]",
        "effectText": "You thread your massive hauler through commercial traffic lanes with razor-sharp reflexes.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterclass highway flying! The interceptors spin out trying to match your high-speed lane cuts.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Speed": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break their pursuit, though a scraping guardrail takes off your side mirror.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Speed": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A clipped civilian tanker forces an emergency off-road recovery.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Speed": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus05_plasma_pulse",
        "label": "Vent a pulse of raw plasma into your exhaust stacks [BRANCH 1B: FIRE] [ROLL +CYBER]",
        "effectText": "You ignite a ten-foot plume of superheated antimatter exhaust directly into their windshields.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A roaring sheet of blue fire blindfolds their lead car, sending it rolling across the median!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fire": 1,
              "Tech Literacy": 3,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The fire plume repels them, though heat blisters your trailer doors.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fire": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Exhaust backfire blows off an exhaust tip, causing deafening engine roar.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fire": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus05_iron_ram",
        "label": "Drop the heavy cowcatcher and side-swipe the pursuit cruisers [BRANCH 1C: FORCE] [ROLL +GRIT]",
        "effectText": "You slam the steering wheel sideways, crushing the interceptor against the concrete divider.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Crushing kinetic victory! The pursuit car is flattened against the wall as you power ahead.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Force": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You crush their car, taking minor paint and wheel scratches.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Force": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The impact shakes your alignment, pulling your steering to the left.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Force": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_06_antimatter_containment",
    "title": "The Magnetic Flux Collapse",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 5
      },
      "maxQualities": {
        "Icarus Stage": 5
      }
    },
    "text": "Alarm sirens scream in your cab! The capsule magnetic field is collapsing due to vibration. A countdown flashes on Lyra’s tablet: \"CONTAINMENT BREACH IN 60 SECONDS.\"",
    "options": [
      {
        "id": "opt_icarus06_overclock_batteries",
        "label": "Channel every volt of rig battery power into the field coils [ROLL +CYBER]",
        "effectText": "You dump auxiliary battery reserves directly into the containment electromagnet.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The magnetic field snaps back into diamond-solid stability! Containment holds at 100%.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Containment restored, but your rig batteries are drained to critical reserves.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A surge melts a power cable, requiring manual emergency clamps under blinding spark fire.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Icarus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus06_manual_shunt",
        "label": "Manually torque the mechanical containment locking pins [ROLL +GRIT]",
        "effectText": "You lean out the cab with an iron wrench, physically cinching the magnetic clamp collars.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure brute force saves the day! The mechanical collars lock tight, holding the plasma inert.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Collars locked, though intense magnetic pull wrenches your wrist.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Magnetic back-torque throws the wrench into the fan blades, shearing two fins.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus06_sacrificial_ground",
        "label": "Ground the magnetic field into your hauler chassis frame",
        "effectText": "You absorb the electrical shock into the steel frame, preventing catastrophic thermonuclear detonation.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Trust": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_07_orbital_defense_laser",
    "title": "The Eye of Olympus",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 6
      },
      "maxQualities": {
        "Icarus Stage": 6
      }
    },
    "text": "A surviving automated orbital defense satellite re-acquires the fallen capsule. High in the stratosphere, a laser targeting mirror glows crimson, charging a 50-megawatt orbital beam.",
    "options": [
      {
        "id": "opt_icarus07_mirror_chaff",
        "label": "Deploy an aerosolized titanium mirror-cloud [ROLL +CYBER]",
        "effectText": "You launch reflective chaff canisters into the slipstream to refract the orbital beam.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The orbital laser disperses across a mile of sky in harmless rainbow auroras!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The beam is diffused, though superheated air blisters your trailer roof.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A partial laser strike slices through your left exhaust stack, melting steel into slag.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus07_canyon_shadow",
        "label": "Dive into a narrow canyon shadow to break optical tracking [ROLL +EDGE]",
        "effectText": "You whip the hauler into a deep slot canyon before the beam fires.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless evasion! The orbital strike blasts the canyon rim 200 feet above you.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach the canyon, though falling rock fragments pelt your hood.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A falling boulder lands across your tailgate, damaging your suspension.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus07_smoke_screen",
        "label": "Deploy emergency sulfur thermal smoke pots behind your trailer",
        "effectText": "You cloak the highway in impenetrable white smoke, breaking the satellite optical lock.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_08_salt_flat_sonic_boom",
    "title": "The Sonic Speed Run [BRANCH 2]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 7
      },
      "maxQualities": {
        "Icarus Stage": 7
      }
    },
    "text": "The second capsule has landed in the middle of the Great Salt Flats. An 80-mile expanse of mirror-flat salt stretches ahead. A mercenary hover-skiff is racing toward the impact site from the west.",
    "options": [
      {
        "id": "opt_icarus08_antimatter_overdrive",
        "label": "Inject antimatter flux into the fuel injection rails [BRANCH 2A: NITRO] [ROLL +EDGE]",
        "effectText": "You open the experimental bypass valve, flooding your diesel cylinders with plasma.",
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Mach 0.2 highway sprint! The hauler bursts through the speed of sound, leaving the hover-skiff miles behind!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Nitro": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: High-speed run succeeds, though manifold temperatures glow cherry-red.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Nitro": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Severe thermal pinging damages a cylinder head before you reach the capsule.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Nitro": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus08_heavy_ram_skiff",
        "label": "Ram the hover-skiff as it approaches the crater [BRANCH 2B: RAM] [ROLL +GRIT]",
        "effectText": "You intercept their trajectory, aiming 35 tons of steel directly at their lift fans.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Obliterating impact! The hover-skiff disintegrates in a shower of composite blades and salt.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You disable their lift fan, though flying fan blades scratch your doors.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their skiff maneuvers around you, strafing your cab with machine guns.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus08_emp_mines",
        "label": "Drop magnetic EMP mines along the salt tracks [BRANCH 2C: TRAPS] [ROLL +CYBER]",
        "effectText": "You roll magnetized EMP canisters off the tailgate directly into their path.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A direct detonation fries the hover-skiff electronics, leaving them stranded on the salt!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Traps": 1,
              "Tech Literacy": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The blast slows their advance, securing your lead to the crater.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Traps": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The mine detonates too close to your rear bumper, rattling the trailer.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Traps": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_09_kinetic_strike_evasion",
    "title": "Rods from God",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 8
      },
      "maxQualities": {
        "Icarus Stage": 8
      }
    },
    "text": "A second automated space platform fires tungsten telephone-pole kinetic penetrators from low orbit. Sonic booms crack the sky as telephone poles of solid tungsten slam into the earth at Mach 6.",
    "options": [
      {
        "id": "opt_icarus09_read_seismic",
        "label": "Read the seismic pre-shocks to anticipate crater locations [ROLL +CYBER]",
        "effectText": "You hook ground seismic sensors into your telemetry deck to detect incoming shockwaves.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You steer around impact zones before the rods even strike earth! True precognitive driving.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You evade direct hits, though concussive dust storms batter your windows.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A nearby blast launches your trailer into the air, bending a leaf spring.",
          "rewards": {
            "hullIntegrity": -26,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus09_speed_burst",
        "label": "Keep the accelerator pinned to outrun the strike arc [ROLL +EDGE]",
        "effectText": "You keep the pedal flat to the firewall, outrunning the trajectory footprint.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blazing velocity! You emerge from the smoke cloud completely untouched.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the zone, but extreme engine stress causes high coolant temps.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Shrapnel from a crater explosion punctures your secondary fuel line.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus09_bunker_tunnel",
        "label": "Duck into an abandoned highway tunnel until the orbital platform passes",
        "effectText": "You hide beneath 200 feet of mountain granite until the satellite moves out of orbital position.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Heat": -15
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_10_the_second_capsule",
    "title": "The Antimatter Dilemma [BRANCH 3]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 9
      },
      "maxQualities": {
        "Icarus Stage": 9
      }
    },
    "text": "With two capsules secured, Lyra unseals the secondary containment vessel. Inside rests 500 grams of pure antimatter—enough to power an entire free-grid civilization or fetch twenty million credits on the corporate black market.",
    "options": [
      {
        "id": "opt_icarus10_pledge_freegrid",
        "label": "Pledge the antimatter to create an open-source solar power utopia [BRANCH 3A: UTOPIA] [ROLL +COOL]",
        "effectText": "You speak of liberating the wasteland towns from corporate energy slavery forever.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT [UTOPIA CHARTERED]: Lyra wept with joy. \"We will build a world where power is as free as the air.\"",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Utopia": 1,
              "Street Cred": 10,
              "Icarus Trust": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The free-grid plan is adopted, though distribution logistics remain daunting.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Utopia": 1,
              "Icarus Trust": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: Cynicism clouds the room, but the covenant holds.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Utopia": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus10_corporate_auction",
        "label": "Broker an exclusive multi-million auction with Solaris Energy [BRANCH 3B: CORPORATE] [ROLL +CYBER]",
        "effectText": "You contact executive vice-presidents, demanding sovereign immunity and billions in escrow.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT [CORPORATE WEALTH]: Solaris guarantees a 5,000 Credit advance and executive clearance permits!",
          "rewards": {
            "credits": 5000,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Corporate": 1,
              "Enclave Permits": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Solaris accepts the preliminary terms.",
          "rewards": {
            "credits": 2000,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Corporate": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate negotiators attempt to lowball the offer.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Stance Corporate": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus10_engine_infusion",
        "label": "Infuse the antimatter directly into the Iron Nomad’s powertrain [BRANCH 3C: ENGINE]",
        "effectText": "You channel the celestial fire into your own rig. The Iron Nomad becomes an immortal star-chaser.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Stance Engine": 1,
            "Street Cred": 12
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_11_thermal_venting_dilemma",
    "title": "The Frontier Town Dilemma",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 10
      },
      "maxQualities": {
        "Icarus Stage": 10
      }
    },
    "text": "While passing through a dusty frontier town, the capsule’s thermal relief valve sticks. Lyra is frantic: \"We must vent superheated plasma exhaust immediately or the core breaches! But if we vent here, the fallout will poison the town water supply.\"",
    "options": [
      {
        "id": "opt_icarus11_contain_chassis",
        "label": "Absorb the thermal vent into your rig’s own radiator blocks [ROLL +GRIT]",
        "effectText": "You sacrifice your own engine health to protect the sleeping frontier town.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Hero of the road! Your rig absorbs the thermal shock without harming a single civilian.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 10,
              "Icarus Trust": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The town is spared, though severe engine overheating warps your exhaust manifold.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The radiator cracks under the blast, venting coolant in steam clouds.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus11_high_speed_vent",
        "label": "Rocket out of town limits at 140 km/h before venting in the desert [ROLL +EDGE]",
        "effectText": "You floor the throttle, clearing the municipal boundary just as the release valve blows.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Split-second triumph! You vent harmlessly into the empty desert dunes.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the town, though the violent thermal discharge scorches your rear tires.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You vent on the edge of the town irrigation canal, causing minor civil panic.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_icarus11_vent_abandoned_mine",
        "label": "Steer into an abandoned mine shaft to vent deep underground",
        "effectText": "You dump the radioactive heat deep into the abandoned rock shafts.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_12_hyperflux_assembly",
    "title": "The Hyper-Flux Turbine Assembly",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 11
      },
      "maxQualities": {
        "Icarus Stage": 11
      }
    },
    "text": "At an underground aerospace hangar, Lyra begins retrofitting your hauler’s engine with components from the Olympus space elevator winch: a Hyper-Flux Capacitor Turbine capable of unlocking permanent superluminal highway velocity.",
    "options": [
      {
        "id": "opt_icarus12_precision_machine",
        "label": "Machine the titanium rotor blades with aerospace tolerances [ROLL +GRIT]",
        "effectText": "You operate the heavy industrial lathe, turning solid titanium blocks into balanced turbine fans.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterpiece of aerospace engineering! The turbine spins with zero vibration at 40,000 RPM.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Blades machined, though slight surface roughness produces an eerie turbine whistle.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A broken cutting tool ruins a titanium billet, delaying assembly.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus12_program_flux_ecu",
        "label": "Program the quantum fuel injection controller [ROLL +CYBER]",
        "effectText": "You write real-time plasma injection curves to prevent engine backfire.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless programming! The dashboard displays a continuous 25% boost in effective highway speed.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Controller programmed, though instrument dials flicker under boost.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: A timing bug causes violent engine misfires during test revs.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus12_bolt_cryo_sleeves",
        "label": "Wrap the turbine casing in cryogenic nitrogen thermal sleeves",
        "effectText": "You insulate the turbine housing, ensuring the engine bay remains cool under maximum boost.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Icarus Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_13_space_mercenary_dreadnought",
    "title": "The Dreadnought in the Dust [BRANCH 4]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 12
      },
      "maxQualities": {
        "Icarus Stage": 12
      }
    },
    "text": "The third capsule has landed at the base of an open-pit copper mine. Blocking the entrance is the Black Sun Syndicate’s flagship: an armored tracked siege crawler with twin autocannons.",
    "options": [
      {
        "id": "opt_icarus13_hyperflux_dash",
        "label": "Engage the Hyper-Flux Turbine to blast past their gun arcs [BRANCH 4A: SPEED] [ROLL +EDGE]",
        "effectText": "You punch the master turbine booster, rocketing past their cannon traverse faster than they can aim.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sonic blur! You blow past their guns, leaving the siege crawler crew coughing in your dust.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fast": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break through, though autocannon tracer fire tears off your mudflaps.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fast": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Autocannon shells riddle your trailer skin before you clear their fire cone.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Fast": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus13_antimatter_emp_blast",
        "label": "Vent an antimatter pulse to fry the crawler’s power grid [BRANCH 4B: EMP] [ROLL +CYBER]",
        "effectText": "You discharge a controlled burst of plasma into their communication dish.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Catastrophic electrical blackout! The siege crawler’s generators explode, locking its tracks.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch EMP": 1,
              "Tech Literacy": 4,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Their radar is blinded, allowing you to slip past their flank.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch EMP": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electrical kickback shocks your cyberdeck, blurring your vision.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch EMP": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus13_heavy_ram_tracks",
        "label": "Ram your heavy prow into their vulnerable track drive sprockets [BRANCH 4C: RAM] [ROLL +GRIT]",
        "effectText": "You aim your 35-ton rig directly at their front left caterpillar drive.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Mechanical triumph! The drive sprocket snaps like peanut brittle, throwing their track off.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You disable their track, taking heavy bumper dents in return.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their sloped armor deflects the blow, spinning your rig into an embankment.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Icarus Stage": 1,
              "Icarus Branch Ram": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_14_third_capsule_impact",
    "title": "The Trinity of Fire",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 13
      },
      "maxQualities": {
        "Icarus Stage": 13
      }
    },
    "text": "Inside the copper mine pit, the third and final capsule rests intact. With all three antimatter containers safely winched into your shielded hold, the complete power of the fallen space elevator is aboard the Iron Nomad.",
    "options": [
      {
        "id": "opt_icarus14_harmonize_containment",
        "label": "Harmonize all three capsule magnetic fields into a unified loop [ROLL +CYBER]",
        "effectText": "You bridge the three containers into a continuous closed-loop magnetic circuit.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless harmonic stability! Radiation output drops to zero while total power reserve triples.",
          "rewards": {
            "cargo": {
              "batteries": 4
            },
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Fields unified, though high-pitched magnetic hum resonates through the cab.",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: A phase imbalance causes blue sparks to arc between the containers.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus14_armor_cargo_bay",
        "label": "Weld additional steel plating over the cargo doors [ROLL +GRIT]",
        "effectText": "You reinforce the rear doors with three layers of hardened scrap armor.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Fortress on wheels! The hold is practically impervious to conventional artillery.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Plating welded, though added weight lowers acceleration slightly.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Rushed welds leave weak points along the door hinges.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus14_raise_toast",
        "label": "Share a quiet toast with Lyra on the hood of the hauler",
        "effectText": "Under the vast desert stars, you watch the dying space elevator satellite burn in the upper atmosphere.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Trust": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_15_tether_terminal_crossroads",
    "title": "The Icarus Crossroads [BRANCH 5: Lock In Path]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 14
      },
      "maxQualities": {
        "Icarus Stage": 14
      }
    },
    "text": "At the continental divide, the finish line approaches. Three divergent paths lie open for the ultimate destination of the fallen space elevator antimatter. Lyra turns to you: \"Hauler, this energy can change the continent forever. How shall we use it?\"",
    "options": [
      {
        "id": "opt_icarus15_choose_engine",
        "label": "Forge the Hyper-Flux Engine Core: \"Channel the power into the rig. We rule the open road forever.\" [PATH: HYPERFLUX] [BRANCH 5A]",
        "effectText": "Lyra’s eyes spark with reckless ambition. She locks the antimatter permanently into your turbine manifold.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Chosen Path": 1,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_icarus15_choose_solaris",
        "label": "Deliver to Solaris for the Sovereign Power Grid: \"Light up the free cities.\" [PATH: SOLARIS GRID] [BRANCH 5B]",
        "effectText": "Executive couriers arrive with diplomatic escorts, transferring vast corporate fortunes.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Chosen Path": 2,
            "Enclave Permits": 3
          }
        }
      },
      {
        "id": "opt_icarus15_choose_syndicate",
        "label": "Sell to the Antimatter Black-Market Cartel: \"Unprecedented wealth and outlaw sovereignty.\" [PATH: BLACK MARKET] [BRANCH 5C]",
        "effectText": "Underworld bosses bow before your firepower, loading cases of platinum credits into your cab.",
        "rewards": {
          "qualities": {
            "Icarus Stage": 1,
            "Icarus Chosen Path": 3,
            "Street Cred": 25
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_16_falling_tether_debris",
    "title": "The Sky is Falling",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 15
      },
      "maxQualities": {
        "Icarus Stage": 15
      }
    },
    "text": "The main elevator tether collapses into the upper atmosphere! Miles-long cables of burning carbon filament whip across the continent like flaming whips, severing highway bridges and sparking forest fires.",
    "options": [
      {
        "id": "opt_icarus16_outrun_cable",
        "label": "Outrun the falling carbon whip with Hyper-Flux boost [ROLL +EDGE]",
        "effectText": "You trigger the antimatter turbine, racing across a collapsing suspension bridge as flaming cables slice behind you.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary driving! You cross the bridge span just as a 100-ton cable shears it into the gorge.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You make the far side, though flying cable sparks scorch your trailer.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A whip of cable clips your rear trailer corner, tearing away cargo panels.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus16_emp_chaff_burst",
        "label": "Discharge an electromagnetic pulse to deflect falling ionized debris [ROLL +CYBER]",
        "effectText": "You project a repulsive magnetic bubble around the hauler.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superheated ionized cables curve harmlessly around your magnetic shield!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Debris deflected, though electrical feedback rattles cabin electronics.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The magnetic generator overloads, blowing out the cabin air conditioning.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Icarus Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus16_plow_rubble",
        "label": "Plow through burning debris with the reinforced iron bumper [ROLL +GRIT]",
        "effectText": "You drop the plow and ram through mounds of incandescent carbon fiber.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heavy steel crushes all! You bulldoze through the flaming wreckage into clear highway.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, taking moderate tire blistering from the heat.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Burning carbon wraps around an axle, requiring an emergency fire extinguisher stop.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_17_orbital_bombardment_run",
    "title": "The Final Satellite Salvo",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 16
      },
      "maxQualities": {
        "Icarus Stage": 16
      }
    },
    "text": "At the final mountain staging pass, the last surviving automated defense station fires its entire kinetic magazine at the border terminal. Shockwaves shake the mountains like an earthquake.",
    "options": [
      {
        "id": "opt_icarus17_cyber_overload_sat",
        "label": "Broadcast a suicide self-destruct command into the satellite receiver [ROLL +CYBER]",
        "effectText": "Lyra feeds the master elevator executive override codes into your transmitter.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A blinding flash in the stratosphere! The orbital weapons platform detonates in low orbit, raining harmless shooting stars.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 5,
              "Street Cred": 10,
              "Heat": -30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The satellite is disabled and tumbles into the ocean.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-ICE burns your transmission mast before the satellite runs dry of ammo.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus17_rally_mercenaries",
        "label": "Parley with surviving mercenary drivers to join your final convoy [ROLL +COOL]",
        "effectText": "You step out and offer them amnesty and fuel to escort your hauler across the border.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The mercenaries switch sides! A dozen armored gun-trucks form an impenetrable escort convoy.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Several mercenaries agree to stand down and let you pass.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Mercenaries refuse, fleeing into the canyons alone.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus17_seal_cab",
        "label": "Tighten seatbelts, prime turbine boosters, and prepare for the final sprint",
        "effectText": "You lock your helmet visor and grip the steering wheel with white knuckles.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Icarus Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_18_anti_gravity_junction",
    "title": "The Sovereign Border Breach",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 17
      },
      "maxQualities": {
        "Icarus Stage": 17
      }
    },
    "text": "The Pacific border checkpoint rises ahead—a towering fortress of concrete and automated heavy artillery pillboxes. Aegis command has locked the hydraulic blast-doors under martial law.",
    "options": [
      {
        "id": "opt_icarus18_hyperflux_ram",
        "label": "Floor the Hyper-Flux turbine and ram the blast-doors at 200 km/h [ROLL +GRIT]",
        "effectText": "You sound the war horns, channeling raw antimatter thrust directly into the iron prow.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cataclysmic kinetic breakthrough! The 20-foot blast doors are blown clear off their hinges in a cloud of dust!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, taking heavy armor scraping across your hood.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The collision violently rattles your engine mounts before you break through.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus18_slice_gate_matrix",
        "label": "Upload Lyra’s executive master clearance into the gate mainframe [ROLL +CYBER]",
        "effectText": "You transmit the Olympus project director codes into the security terminal.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The barrier salutes: \"CLEARANCE LEVEL OLYMPUS CONFIRMED.\" The doors glide open automatically!",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Tech Literacy": 5,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Gate opens halfway, allowing your rig to scrape through cleanly.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Security locks down the gate, forcing you to ram the side inspection booths.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_icarus18_service_drift",
        "label": "Hard-drift through the drainage culvert beneath the checkpoint [ROLL +EDGE]",
        "effectText": "You pitch the hauler into the concrete drainage canal at breakneck speed.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sublime wasteland driving! You bypass the lethal killzone entirely beneath the checkpoint.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You squeeze through, though low clearance strips your roof spotlights.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Concrete scrapers dent your trailer axle before you emerge on open asphalt.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Icarus Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_19_superluminal_climax",
    "title": "The Velocity of Light [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 18
      },
      "maxQualities": {
        "Icarus Stage": 18
      }
    },
    "text": "You have broken through into the free Pacific frontier! The redwoods blur into emerald streaks of light as your antimatter-infused hauler reaches unprecedented continental highway speed.",
    "options": [
      {
        "id": "opt_icarus19_engine_dash",
        "label": "Push the Hyper-Flux turbine to absolute maximum velocity [HYPERFLUX PATH] [ROLL +EDGE]",
        "effectText": "You open the master throttle. The Iron Nomad shrieks across the asphalt at 220 km/h in total silence.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Speed of the gods! You break every continental distance record in history, vanishing into legend.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Legendary velocity carries you across the finish line.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Manifold temps run red, but the frontier is secured.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_icarus19_solaris_delivery",
        "label": "Deliver the antimatter cores to the Pacific Solaris Megacity [SOLARIS PATH] [ROLL +COOL]",
        "effectText": "Executive hover-car escorts flank your convoy as you enter the gleaming coastal arcology.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You are welcomed as the Savior of the Energy Grid! Billions in contracts and glory are yours.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cores are safely delivered and payment transferred.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense customs inspections conclude with full payment.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_icarus19_cartel_handshake",
        "label": "Complete the transaction with the Shadow Syndicate Cartel [CARTEL PATH] [ROLL +COOL]",
        "effectText": "You pull into an underground submarine dock to complete the ultimate black-market handoff.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unprecedented wealth! The syndicate crowns you the undisputed lord of high-tech contraband.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The transaction concludes with massive payouts.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Syndicate guards verify the merchandise and transfer funds.",
          "rewards": {
            "qualities": {
              "Icarus Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_icarus_20_finale",
    "title": "The Skyward Triumph [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Icarus Stage": 19
      },
      "maxQualities": {
        "Icarus Stage": 19
      }
    },
    "text": "Dawn breaks over the Pacific Ocean in brilliant golden glory. The space elevator heist is complete. Your rig is permanently retrofitted with the revolutionary Hyper-Flux Capacitor Turbine.",
    "options": [
      {
        "id": "opt_icarus20_ending_engine",
        "label": "Rule the Open Highway with the Hyper-Flux Core [ENDING 1: HYPERFLUX TURBINE]",
        "effectText": "Your hauler is an untouchable silver bullet on continental roads. With +25% permanent transit speed and antimatter boost, no police cruiser or raider buggy will ever catch your convoy again.",
        "rewards": {
          "credits": 12000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 4,
            "cyberware": 3
          },
          "qualities": {
            "Icarus Stage": 80,
            "Tech Literacy": 10,
            "Street Cred": 25,
            "Heat": -40
          },
          "stats": {
            "edge": 1
          },
          "rig": {
            "speedRating": 0.25,
            "name": "Iron Nomad - Hyperflux Turbine"
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_icarus20_ending_solaris",
        "label": "Accept the Sovereign Energy Honors of Solaris [ENDING 2: SOLAR HELIOS]",
        "effectText": "Solaris Energy appoints you chief continental logistics partner, rewarding you with executive transport trailers and corporate diplomatic immunity.",
        "rewards": {
          "credits": 17000,
          "cargo": {
            "batteries": 5,
            "chips": 3
          },
          "qualities": {
            "Icarus Stage": 80,
            "Enclave Permits": 3,
            "Street Cred": 20
          },
          "stats": {
            "edge": 1,
            "cool": 1
          },
          "rig": {
            "speedRating": 0.2,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Solar Helios"
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_icarus20_ending_cartel",
        "label": "Accept the Crown of the Void Syndicate [ENDING 3: VOID STAR]",
        "effectText": "Holding the wealth of fallen stars, your rig is armed with military void plating and high-output antimatter turbochargers.",
        "rewards": {
          "credits": 20000,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Icarus Stage": 80,
            "Street Cred": 25,
            "Heat": 20
          },
          "stats": {
            "edge": 1,
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.22,
            "maxHull": 20,
            "name": "Iron Nomad - Void Star"
          }
        },
        "reqs": {
          "qualities": {
            "Icarus Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_icarus20_farewell",
        "label": "Collect final veteran courier fee and depart into the sunrise",
        "effectText": "With Project Icarus concluded, you seal your cabin, log the kilometers in your telemetry feed, and shift into drive.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Icarus Stage": 80,
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
