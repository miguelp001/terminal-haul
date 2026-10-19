import { Storylet } from '../types/storylet';

export const LEVIATHAN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_leviathan_01_tide_salvage",
    "title": "The Drowned Giant of the Pacific Shelf",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "maxQualities": {
        "Leviathan Stage": 0
      }
    },
    "text": "At the foggy Pacific docks of Westport, a salt-crusted maritime salvager named Captain Ronald Vance flags you down. \"Three kilometers offshore lies the *Pacific Titan*,\" he rasps, pointing to rusted superstructures emerging from the breaking surf. \"A 400-meter container mega-ship that sank in the opening days of the war. Her hermetic cargo pods hold pre-war superconductor machinery and military bullion. I need an armored heavy hauler with sub-aquatic winches to drag them from the surf before corporate salvage fleets arrive.\"",
    "options": [
      {
        "id": "opt_leviathan01_accept_salvage",
        "label": "Sign on for maritime heavy salvage and inspect equipment [ROLL +COOL]",
        "effectText": "You negotiate your salvage split and inspect the Captain's charts.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Exceptional salvage contract! Vance guarantees a 50% split and provides a 1,600 credit advance and waterproof seals.",
          "rewards": {
            "credits": 1600,
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and prepare your rig for saltwater.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Port customs officers flag your rig for unauthorized marine salvage.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_leviathan01_inspect_tide_charts",
        "label": "Analyze coastal tidal telemetry and seabed bathymetry [ROLL +CYBER]",
        "effectText": "You download satellite sea-surface radar scans of the shelf.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless tidal analysis! You identify a low-tide underwater sandbar that allows your truck to drive right up to the hull!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You chart safe approach channels through the rocks.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corrupted nautical charts miscalculate water depth by four feet.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan01_waterproof_seals",
        "label": "Apply heavy marine grease to all wheel hubs and electrical connectors",
        "effectText": "You prepare your hauler for deep saltwater exposure.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_02_salt_spray_corrosion",
    "title": "The Caustic Surf",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 1
      },
      "maxQualities": {
        "Leviathan Stage": 1
      }
    },
    "text": "Driving along the Pacific coastal highway, high winds throw clouds of corrosive saltwater spray against your chassis. Untreated steel hiss and rusts visibly; brake calipers begin groaning under salt crust.",
    "options": [
      {
        "id": "opt_leviathan02_oil_spray",
        "label": "Deploy pressurized silicone oil mist across your undercarriage [ROLL +GRIT]",
        "effectText": "You trigger the chassis lubrication system to coat every exposed bolt.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total corrosion immunity! Salt spray beads and rolls off like mercury on glass.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The oil protects vital brake linkages, though paint dulls slightly.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Salt crust locks a rear brake pad, smoking on the wheel hub.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan02_throttle_through",
        "label": "Drop the hammer and outrun the crashing surf zone [ROLL +EDGE]",
        "effectText": "You power through breaking waves crossing the low road.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Master rally driving! You surf the asphalt before wave swells can swamp your axles.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the surf, though saltwater douses your front bumper.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A wave crest hits your passenger door, rattling the frame.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan02_rinse_freshwater",
        "label": "Stop at a coastal creek and flush wheel hubs with fresh water",
        "effectText": "Freshwater rinses away salt deposits before corrosion can start.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_03_the_drowned_highway",
    "title": "The Submerged Causeway",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 2
      },
      "maxQualities": {
        "Leviathan Stage": 2
      }
    },
    "text": "Route 101 vanishes into two feet of Pacific ocean surf along a sunken sandbar causeway. Black waves break over the hood; your tires struggle for purchase against shifting wet sand and kelp.",
    "options": [
      {
        "id": "opt_leviathan03_snorkel_drive",
        "label": "Engage engine intake snorkels and low crawler gear [ROLL +GRIT]",
        "effectText": "You lock your differentials and let 600 foot-pounds of torque bite into the wet sand.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable amphibious power! The hauler drives through two miles of open ocean like an iron submarine!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You make the crossing, though saltwater enters your tool boxes.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Wheels slip on a submerged kelp reef, throwing the hauler into a drift.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan03_sonar_navigation",
        "label": "Use forward acoustic sonar to track the submerged concrete slabs [ROLL +CYBER]",
        "effectText": "You ping the water depth with your handheld sonar unit.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Razor precision! You follow the crown of the sunken highway without slipping into deep trenches.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You follow the line safely, though sand waves rock the cab.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Sonar misses a deep sand hole, dropping the front left wheel.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan03_steady_pace",
        "label": "Follow Captain Vance's pilot skiff slowly and steadily",
        "effectText": "The pilot skiff marks the shallowest route safely.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_04_deep_winch_drag",
    "title": "The First Container from the Deep",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 3
      },
      "maxQualities": {
        "Leviathan Stage": 3
      }
    },
    "text": "You reach the exposed steel deck of the *Pacific Titan*. A 30-ton hermetic shipping container stamped \"AEGIS QUANTUM PROTOCOLS\" sits wedged in the lower hold, half-submerged in surging ocean surf.",
    "options": [
      {
        "id": "opt_leviathan04_anchor_winch",
        "label": "Drive heavy hydraulic anchor spuds into the bedrock and winch the container [ROLL +GRIT]",
        "effectText": "You anchor your hauler's rear chassis and engage your 50-ton hydraulic winch.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Tremendous pulling power! The 30-ton container is wrenched free from the twisted iron hold and hauled safely onto your flatbed!",
          "rewards": {
            "cargo": {
              "cyberware": 2,
              "chips": 2
            },
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You drag the container out, though the steel winch cable groans near snapping point.",
          "rewards": {
            "cargo": {
              "cyberware": 1
            },
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The container catches on a steel girder, snapping your winch shear-pin.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan04_plasma_cut",
        "label": "Use high-pressure underwater torches to cut the container free [ROLL +CYBER]",
        "effectText": "You dive into the surf with an underwater arc cutter.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Surgical cutting! You sever the trapped hinges in twenty minutes, releasing the container cleanly!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The torch frees the container, though cold seawater numbs your limbs.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The cutting flame pops back, singing your wetsuit sleeve.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan04_use_battery_power",
        "label": "Hook 1 Hydro-Battery from your hold to supercharge the hydraulic pump [INVENTORY]",
        "effectText": "Dedicated battery voltage doubles winch pulling speed, securing the container effortlessly.",
        "rewards": {
          "cargo": {
            "batteries": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Leviathan Stage": 1,
            "Street Cred": 8
          }
        },
        "reqs": {
      "coastalOnly": true,
          "cargo": {
            "batteries": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_05_coastal_corsairs",
    "title": "The Tide Pirates",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 4
      },
      "maxQualities": {
        "Leviathan Stage": 4
      }
    },
    "text": "Rogue coastal marauders in armored airboats and jet-skis circle the wreck. Armed with grenade launchers and grappling lines, they intend to hijack your flatbed and take the recovered container.",
    "options": [
      {
        "id": "opt_leviathan05_crush_airboats",
        "label": "Ram their fiberglass airboats with your heavy amphibious nose [ROLL +GRIT]",
        "effectText": "You turn your 35-ton hauler into the breaking surf and charge their lead boat.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating kinetic smash! The airboat is splintered into foam and shredded propeller blades, sending the corsairs fleeing!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through their line, taking minor shrapnel against your wheel wells.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A pirate grenade detonates in the water beneath your cab, shaking the frame.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan05_deck_gun_snipe",
        "label": "Unlimber your heavy roof rifle and target the airboat propeller fans [ROLL +EDGE]",
        "effectText": "You track the speeding airboats and fire armor-piercing rounds.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Marksmanship perfection! Two airboat propeller cages explode, leaving them dead in the water!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force the corsairs to abort their boarding maneuver.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return automatic fire chips your cab armor before they peel away.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan05_electrify_hull",
        "label": "Divert alternator voltage to electrify your trailer's outer steel plates",
        "effectText": "Grappling pirates take 500 volts of shock and drop back into the waves.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_06_amphibious_snorkel_mod",
    "title": "The Deep Water Snorkel",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 5
      },
      "maxQualities": {
        "Leviathan Stage": 5
      }
    },
    "text": "While staged at a secluded cove, Captain Vance helps you retrofit the hauler with permanent amphibious equipment: tall twin chrome exhaust snorkels, sealed air intakes, and automated electric bilge pumps.",
    "options": [
      {
        "id": "opt_leviathan06_weld_snorkels",
        "label": "Weld and seal the tall stainless-steel snorkels along the cab pillars [ROLL +GRIT]",
        "effectText": "You execute watertight TIG welds along the snorkel brackets.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless marine engineering! The hauler can now ford five feet of open ocean water without drowning the engine!",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The snorkels are secure and fully functional.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A weld clamp slips, leaving a small cosmetic dent on the cab pillar.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan06_wire_bilge_pumps",
        "label": "Wire automated float-switch bilge pumps in the lower chassis bays [ROLL +CYBER]",
        "effectText": "You connect high-capacity 12-volt marine pumps with automated moisture sensors.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The bilge pumps clear seawater automatically within three seconds of immersion!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The pumps operate properly off dashboard manual toggles.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A wiring short blows a fuse in the accessory panel.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan06_seal_differentials",
        "label": "Install pressurized one-way breather valves on the front and rear axles",
        "effectText": "Breather valves prevent cold ocean water from being sucked into differential oil.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_07_the_quicksand_surf",
    "title": "The Sinking Shelf",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 6
      },
      "maxQualities": {
        "Leviathan Stage": 6
      }
    },
    "text": "Heading back out to the wreck, your front tires plunge into a liquefied sandbar! The ocean tide is rising fast, foaming waves already lapping at your headlights as the 40-ton hauler sinks to its axles!",
    "options": [
      {
        "id": "opt_leviathan07_central_tire_inflation",
        "label": "Drop tire pressure to 15 PSI to double tire contact patch [ROLL +EDGE]",
        "effectText": "You trigger the dashboard deflation controls, flattening your wide tires.",
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The flattened tires float across the liquid sand like snowshoes, pulling you onto solid rock!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You crawl out of the quicksand trap after a tense struggle.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tires spin and dig in deeper before the crawler gear catches.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan07_rock_anchor_winch",
        "label": "Fire a harpoon anchor into an offshore rock pillar and winch out [ROLL +GRIT]",
        "effectText": "You fire the pneumatic grapple into solid basalt and reel in.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Powerful recovery! The winch yanks your hauler out of the sand trap with unstoppable force!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The grapple holds long enough to drag the front wheels clear.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The rock pillar fractures under load, snapping the cable.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan07_floor_differentials",
        "label": "Lock all three differentials and keep the wheels spinning steadily",
        "effectText": "Steady, patient wheel rotation claws you through the wet silt.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_08_the_second_vault",
    "title": "The Gold of the Pacific Titan",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 7
      },
      "maxQualities": {
        "Leviathan Stage": 7
      }
    },
    "text": "Inside the submerged stern hold of the *Pacific Titan*, Vance's salvage team uncovers Container 02: a titanium bullion vault containing three thousand kilograms of pre-war sovereign gold bars and optical quantum wafers.",
    "options": [
      {
        "id": "opt_leviathan08_rig_crane",
        "label": "Supervise precision crane slinging under surging ocean swells [ROLL +EDGE]",
        "effectText": "You time the crane lift with the rising and falling ocean swell.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterful maritime rigging! The multi-million credit bullion vault is secured onto your chassis with zero damage!",
          "rewards": {
            "cargo": {
              "cyberware": 2,
              "chips": 3
            },
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The vault is loaded, though a rolling swell slams it against your trailer rails.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sling snaps on a rusty bollard, dropping the vault with a violent jar.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan08_crack_data_safe",
        "label": "Slice into the vault's encrypted manifest drive to recover proprietary ciphers [ROLL +CYBER]",
        "effectText": "You hook your deck into the watertight data connector.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Invaluable trade manifests! You download secret pre-war trans-Pacific shipping routes and trade keys!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure the basic inventory and asset ciphers.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Defensive water-activated ICE scrambles your temporary data drive.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan08_secure_chains",
        "label": "Lash the vault down with four sets of heavy titanium binder chains",
        "effectText": "Quadruple chain binders guarantee the massive weight will not shift on the road.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_09_tidal_surge_escape",
    "title": "The Rogue Wave",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 8
      },
      "maxQualities": {
        "Leviathan Stage": 8
      }
    },
    "text": "A 25-foot rogue tidal surge rolls in from the open ocean, racing across the sandbar toward your loaded hauler! You have twenty seconds before a wall of black water hits the side of your truck.",
    "options": [
      {
        "id": "opt_leviathan09_nose_into_wave",
        "label": "Turn the heavy iron nose directly into the cresting wave and throttle up [ROLL +GRIT]",
        "effectText": "You point the cow-catcher into the breaker, lock your jaw, and hit the throttle.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Epic maritime triumph! Your 50-ton loaded rig pierces the 25-foot wave like an iron destroyer, bursting through untouched!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 16
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The wave breaks over the cab, swamping the windshield before the truck rolls out.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The wave violently pushes your trailer sideways into a ditch before you claw back.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan09_race_the_crest",
        "label": "Floor the accelerator and outrun the wave to the mainland bluff [ROLL +EDGE]",
        "effectText": "You drop into high gear, engine screaming as you race the surging tide.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Blazing coastal sprint! You climb the concrete ramp just as the wave smashes into the rocks below!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The spray douses your rear trailer, but you make solid ground.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Foam floods your rear wheel hubs, dragging your speed down before you escape.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan09_anchor_and_brace",
        "label": "Drop rear anchor spuds into the rock and brace for impact inside the cab",
        "effectText": "The heavy anchors prevent the hauler from being swept away as the water rolls past.",
        "rewards": {
          "hullIntegrity": -12,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_10_the_crossroads",
    "title": "The Wealth of the Deep [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 9
      },
      "maxQualities": {
        "Leviathan Stage": 9
      }
    },
    "text": "At the coastal lighthouse safehouse of Cape Disappointment, the salvaged containers sit under heavy tarps. Captain Vance lights his pipe and looks at you. \"The Pacific Titan has given up its treasures,\" he says. \"Three powers want these containers. Where do we deliver the fortune of the drowned world?\"",
    "options": [
      {
        "id": "opt_leviathan10_choose_reclaimer",
        "label": "Path 1: Mount the Amphibious Ballast permanently and keep the salvage gear [LEVIATHAN RECLAIMER]",
        "effectText": "You choose the open ocean and supreme heavy hauling. The heavy marine ballast and reinforced titanium prow will turn your rig into the premier salvage hauler on the continent.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1,
            "Leviathan Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_leviathan10_choose_coastal_fleet",
        "label": "Path 2: Deliver the Bullion to the Free Coastal Fisherman's Union [TIDE STRIDER]",
        "effectText": "You choose community survival. The wealth will buy clean water desalination plants and an independent coastal defense fleet, granting you permanent hero status.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1,
            "Leviathan Chosen Path": 2,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_leviathan10_choose_syndicate",
        "label": "Path 3: Smuggle the Containers to the Underworld Syndicate Cartel [ABYSSAL HAULER]",
        "effectText": "You choose boundless personal fortune and underworld power. The cartel pays millions in unmarked bearer bonds and equips your rig with heavy shielded cargo bays.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1,
            "Leviathan Chosen Path": 3,
            "Contraband Mastery": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_11_coastal_gunboat_ambush",
    "title": "The Naval Blockade",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 10
      },
      "maxQualities": {
        "Leviathan Stage": 10
      }
    },
    "text": "Aegis Coastal Patrol corvettes intercept you at the river mouth! They train 40mm automated cannons on your truck and demand unconditional surrender of all maritime salvage.",
    "options": [
      {
        "id": "opt_leviathan11_ram_blockade_boat",
        "label": "Charge your amphibious hauler straight at the patrol boat's mooring dock [ROLL +GRIT]",
        "effectText": "You blast your horns, plunging your heavy titanium prow into their dock.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Monstrous kinetic ram! The dock and patrol boat are crumpled into scrap, clearing a clean escape channel!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through their barricade, taking cannon dents to your cab.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A 40mm round punches through your passenger door before you escape.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan11_hack_corvette_sonar",
        "label": "Jam their targeting radar using your marine sonar transponder [ROLL +CYBER]",
        "effectText": "You blast ultrasonic acoustic interference into their receiving hydrophones.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total sensor blindness! The gunboats lose track of your vehicle and fire blindly into the fog!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gunboats hesitate, giving you time to duck into a coastal inlet.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures scramble your radio, leaving static.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan11_smoke_river_escape",
        "label": "Deploy marine smoke flares and slip down the shadowed river channel",
        "effectText": "Dense white smoke conceals your convoy as you cruise into the river.",
        "rewards": {
          "credits": -150,
          "hullIntegrity": -8,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_12_chassis_marine_waterproofing",
    "title": "The Zinc and Ceramic Shield",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 11
      },
      "maxQualities": {
        "Leviathan Stage": 11
      }
    },
    "text": "To ensure your hauler never corrodes from saltwater exposure again, Vance's crew coats the entire undercarriage with zinc sacrificial anodes and heavy ceramic waterproofing composite.",
    "options": [
      {
        "id": "opt_leviathan12_inspect_coating",
        "label": "Supervise the ceramic underbody application [ROLL +GRIT]",
        "effectText": "You inspect every seam, bearing, and brake line.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Impervious marine armor! The chassis becomes completely immune to salt corrosion, mud, and water damage!",
          "rewards": {
            "hullIntegrity": 40,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The protective coating seals all critical hydraulic and electrical lines.",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A thin patch near the fuel tank requires extra sealant.",
          "rewards": {
            "hullIntegrity": 5,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan12_tune_marine_propulsion",
        "label": "Optimize engine torque curves for deep water fording [ROLL +CYBER]",
        "effectText": "You remap the ECU fuel injection for low-speed high-torque water pushing.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: High-torque marine calibration! Your engine churns through water like a riverboat!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Engine operates smoothly in high-moisture environments.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Fuel map runs rich, puffing black smoke on acceleration.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan12_polish_chrome",
        "label": "Polish your dual chrome snorkels until they gleam in the sun",
        "effectText": "The gleaming snorkels look majestic against your heavy armor.",
        "rewards": {
          "qualities": {
            "Leviathan Stage": 1,
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_13_storm_breakwater_dash",
    "title": "The Breakwater Sprint",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 12
      },
      "maxQualities": {
        "Leviathan Stage": 12
      }
    },
    "text": "A coastal Pacific gale batters the rock breakwater leading to the final bridge. Fifty-foot waves crash over the narrow concrete strip, washing cars and shipping containers into the churning sea.",
    "options": [
      {
        "id": "opt_leviathan13_surf_the_rocks",
        "label": "Hold the wheel with iron grip and blast across the wave-swept breakwater [ROLL +GRIT]",
        "effectText": "You put all eight tires onto the wet concrete and maintain 80 km/h.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unshakeable iron driving! The waves crash against your titanium prow, deflected harmlessly into spray as you cross!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach the bridge, though saltwater washes over your hood.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A wave hits your trailer sideways, pushing your rear wheels within inches of the drop.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan13_time_the_swells",
        "label": "Time your sprint between the seventh swell intervals [ROLL +EDGE]",
        "effectText": "You read the ocean swell rhythm and launch forward in the calm lull.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect hydrodynamic calculation! You cross the entire breakwater during a five-minute calm window untouched!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You cross safely, taking minor spray against your windshield.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The swell arrives early, slapping your passenger side with water.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_leviathan13_steady_crawl",
        "label": "Lock differentials and crawl at a steady 20 km/h",
        "effectText": "Steady, heavy mass keeps your tires planted against the water surge.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Leviathan Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_14_abyssal_climax",
    "title": "The Sovereign Shore [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 13
      },
      "maxQualities": {
        "Leviathan Stage": 13
      }
    },
    "text": "You have cleared the Pacific coast! The treasures of the *Pacific Titan* are secured as you deliver the final shipping pods to your chosen destination.",
    "options": [
      {
        "id": "opt_leviathan14_claim_reclaimer",
        "label": "Lock the Amphibious Ballast permanently into your rig [RECLAIMER PATH] [ROLL +GRIT]",
        "effectText": "You weld the marine salvage gear directly into your vehicle frame, crowned the King of Pacific Salvage.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign heavy hauling dominance! No flooded road, coastal storm, or sunken cargo will ever stop your rig again!",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The amphibious modifications are locked in permanently.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Welds cool with slight surface roughness, but holding firmly.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_leviathan14_deliver_union",
        "label": "Deliver the Bullion to the Coastal Fisherman's Union [UNION PATH] [ROLL +COOL]",
        "effectText": "You pull into the Union docks where thousands of coastal workers cheer your name with thunderous gratitude.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Savior of the Coast! The union awards you life-long diplomatic sanctuary, massive bounties, and heavy marine plating!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Delivery concluded with celebrations and full payment.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: The union elders sign the transfer receipts with deep reverence.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_leviathan14_deliver_syndicate",
        "label": "Deliver the Containers to the Shadow Cartel Submarine Dock [CARTEL PATH] [ROLL +COOL]",
        "effectText": "You roll into the hidden underground submarine pen to complete the transfer.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Immense criminal wealth! Billions in bearer bonds and elite shielded cargo bays are loaded onto your rig!",
          "rewards": {
            "credits": 12000,
            "qualities": {
              "Leviathan Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cartel verifies the gold and honors the contract.",
          "rewards": {
            "credits": 6000,
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense debriefing concludes with full payment.",
          "rewards": {
            "qualities": {
              "Leviathan Stage": 1
            }
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_leviathan_15_finale",
    "title": "The Leviathan Reclaimer [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "coastal",
    "layer": "coastal",
    "repeatable": false,
    "reqs": {
      "coastalOnly": true,
      "qualities": {
        "Leviathan Stage": 14
      },
      "maxQualities": {
        "Leviathan Stage": 14
      }
    },
    "text": "The saga of the Iron Leviathan is concluded. Your rig has been permanently modified with revolutionary amphibious ballast and heavy marine salvage engineering.",
    "options": [
      {
        "id": "opt_leviathan15_ending_reclaimer",
        "label": "Command Coastal and Continental Roads as the Leviathan Reclaimer [ENDING 1: LEVIATHAN RECLAIMER]",
        "effectText": "Equipped with Amphibious Ballast and a Reinforced Titanium Prow, your hauler commands +30 Max Hull, +10 T Cargo Capacity, and permanent +1 GRIT.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "chips": 3,
            "cyberware": 3
          },
          "qualities": {
            "Leviathan Stage": 80,
            "Street Cred": 30,
            "Heat": -30
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 30,
            "maxCargoWeight": 10,
            "name": "Iron Nomad - Leviathan Reclaimer"
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_leviathan15_ending_union",
        "label": "Lead Free Coastal Fleets as the Tide Strider [ENDING 2: TIDE STRIDER]",
        "effectText": "Honored as the champion of the coastal peoples, your rig is fitted with high-output marine turbochargers and reinforced breakwater armor.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 4,
            "chips": 3
          },
          "qualities": {
            "Leviathan Stage": 80,
            "Street Cred": 30
          },
          "stats": {
            "grit": 1,
            "edge": 1
          },
          "rig": {
            "speedRating": 0.2,
            "maxHull": 25,
            "name": "Iron Nomad - Tide Strider"
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_leviathan15_ending_syndicate",
        "label": "Rule the Subsea Smuggling Veins as the Abyssal Hauler [ENDING 3: ABYSSAL HAULER]",
        "effectText": "Flush with cartel wealth and equipped with watertight Baryon-shielded cargo holds, your rig is an underworld legend.",
        "rewards": {
          "credits": 22000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "chips": 4
          },
          "qualities": {
            "Leviathan Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 20
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxCargoWeight": 8,
            "speedRating": 0.18,
            "name": "Iron Nomad - Abyssal Hauler"
          }
        },
        "reqs": {
      "coastalOnly": true,
          "qualities": {
            "Leviathan Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_leviathan15_farewell",
        "label": "Collect final salvage bonus and roll out toward open horizons",
        "effectText": "With the Pacific Leviathan conquered, you head into the sunrise.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Leviathan Stage": 80,
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
