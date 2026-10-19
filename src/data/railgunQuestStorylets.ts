import { Storylet } from '../types/storylet';

export const RAILGUN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_railgun_01_mountain_rumble",
    "title": "The Iron Cannon of Red Ridge",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Railgun Stage": 0
      }
    },
    "text": "In the shadow of Red Ridge, an eccentric military engineer named Boris Vance bangs his wrench against your bull-bar. \"A 60-meter magnetic mass-driver barrel is sealed in Bunker 44,\" he grunts. \"Pre-war military surplus. Aegis scrapyard crews want to melt it into rebar. Haul it across the mountains, and I'll mount a devastating dorsal kinetic artillery system to your rig.\"",
    "options": [
      {
        "id": "opt_railgun01_accept_haul",
        "label": "Accept the artillery haul and negotiate equipment advances [ROLL +COOL]",
        "effectText": "You review Boris's blueprints and negotiate heavy escort fees.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! Boris transfers a 1,500 credit advance and heavy tie-down chains.",
          "rewards": {
            "credits": 1500,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and prepare your flatbed.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Local raider spies overhear the contract, raising local alertness.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_railgun01_scan_barrel",
        "label": "Examine the magnetic coils and superconducting bore [ROLL +CYBER]",
        "effectText": "You inspect the barrel's electromagnetic coil windings with your deck.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pristine military hardware! The coils can handle extreme voltage discharges without burning out.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The coils are intact, though dusty with decades of desert silica.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Diagnostic probe shorts against the static charge, singing your cable.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun01_prep_suspension",
        "label": "Install extra leaf springs and hydraulic bump stops on the rear bogies",
        "effectText": "You prepare the chassis for 40 metric tons of concentrated iron mass.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_02_weight_distribution",
    "title": "The Crushed Asphalt",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 1
      },
      "maxQualities": {
        "Railgun Stage": 1
      }
    },
    "text": "The colossal 40-ton barrel groans on its cradles as you hit the highway. Asphalt crumbles beneath your dual tires; the steering pulls hard to the right as your fifth wheel strains under extreme downward force.",
    "options": [
      {
        "id": "opt_railgun02_rebalance_hydraulics",
        "label": "Adjust trailer hydraulic load-leveling valves on the fly [ROLL +GRIT]",
        "effectText": "You climb onto the trailer gantry and manually balance the pneumatic pressure regulators.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Perfect weight distribution! The hauler rides level, absorbing shocks effortlessly.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You balance the load, though rear shocks run warm.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Hydraulic overpressure pops an O-ring, spraying red oil across the road.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun02_momentum_drive",
        "label": "Trust engine torque and carry continuous momentum over dips [ROLL +EDGE]",
        "effectText": "You read the dips in the road and apply smooth, continuous throttle.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sublime heavy driving! You glide across cracked highway sections without bottoming out.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The trailer clears the rough road, though your trailer hitch creaks loudly.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A violent pothole jars the cab, cracking your passenger wing mirror.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun02_slow_crawl",
        "label": "Drop road speed to 30 km/h and engage auxiliary crawler gears",
        "effectText": "Slow, steady transit preserves your tires and frame.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_03_supercapacitor_salvage",
    "title": "The Bunker Power Vault",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 2
      },
      "maxQualities": {
        "Railgun Stage": 2
      }
    },
    "text": "To power the cannon, Boris directs you to a decommissioned military substation. \"We need high-yield pulse capacitors,\" he explains. \"The automated vault door is rusted shut, but the storage cells inside still hold military-grade lithium dielectric charge.\"",
    "options": [
      {
        "id": "opt_railgun03_breach_vault",
        "label": "Winch the steel bunker blast door with your heavy tow cable [ROLL +GRIT]",
        "effectText": "You loop heavy steel cable around the door locks and drop into low reverse.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The blast door rips free in a cloud of sparks! You secure 3 heavy pulse capacitors and rare electronics.",
          "rewards": {
            "cargo": {
              "batteries": 2,
              "chips": 1
            },
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The door yields, yielding enough capacitor cells to power the gun.",
          "rewards": {
            "cargo": {
              "batteries": 1
            },
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The cable snaps under tension, whiplashing your rear tailgate.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun03_splice_grid",
        "label": "Hack the substation generator to charge the cannon directly [ROLL +CYBER]",
        "effectText": "You splice your deck into the high-voltage busbar.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Fast-charge complete! The capacitor banks hum with 50 megawatts of pure kinetic potential!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The capacitors charge to 70% before the transformer trips.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Power surge arcs through your deck, blowing several breaker fuses.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun03_use_held_battery",
        "label": "Install 1 Hydro-Battery from your hold directly into the firing capacitor [INVENTORY]",
        "effectText": "You sacrifice one of your own high-capacity batteries to complete the power circuit.",
        "rewards": {
          "cargo": {
            "batteries": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Railgun Stage": 1,
            "Street Cred": 8
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
    "id": "story_railgun_04_warlord_patrol",
    "title": "The Ridge Interceptors",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 3
      },
      "maxQualities": {
        "Railgun Stage": 3
      }
    },
    "text": "Outlaw warlord \"Crag-Tooth\" Vane and three armored gun-trucks ambush your heavy convoy in a mountain defile. \"Cut the trailer loose, driver, or we tear your cab apart with heavy caliber!\" he roars over the radio.",
    "options": [
      {
        "id": "opt_railgun04_ram_ambush",
        "label": "Drop the accelerator and ram Vane's lead war-rig with full kinetic mass [ROLL +GRIT]",
        "effectText": "You drop down three gears and direct 75 tons of rolling iron into his frontline.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Monstrous kinetic annihilation! Vane's truck is crushed like a soda can, sending the others fleeing in terror!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through their roadblock, denting your heavy steel bumper.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A raider gun-truck sideswipes your trailer, shredding a tire before spinning off.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun04_precision_counterfire",
        "label": "Unlimber your roof heavy rifle and pick off their machine gunners [ROLL +EDGE]",
        "effectText": "You pop up through the cab hatch and line up long-range sniper shots.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Surgical marksmanship! Three rounds disable their heavy gun mounts, forcing their convoy to retreat.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force their gunners into cover, buying time to clear the pass.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return fire sparks across your cabin roof, chipping bulletproof glass.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun04_bribe_warlord",
        "label": "Offer Vane a payoff from your credit reserves to grant safe passage [ROLL +COOL]",
        "effectText": "You key your radio and present an offer of cold hard credits.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Vane laughs greedily and orders his trucks to escort you through the canyon!",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Vane takes the bribe and stands down.",
          "rewards": {
            "credits": -500,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vane takes the credits and shoots anyway before peeling off!",
          "rewards": {
            "credits": -500,
            "hullIntegrity": -15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_05_tunnel_clearance",
    "title": "The Low Concrete Arch",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 4
      },
      "maxQualities": {
        "Railgun Stage": 4
      }
    },
    "text": "A pre-war highway tunnel cuts through Granite Peak. The 60-meter railgun cradle sits four inches higher than the tunnel's concrete ceiling arch! Heavy rebar teeth jut down like stalactites.",
    "options": [
      {
        "id": "opt_railgun05_deflate_tires",
        "label": "Rapidly deflate all twelve tires to drop chassis clearance by six inches [ROLL +EDGE]",
        "effectText": "You hit the central tire inflation dump valves and creep under the arch.",
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless mechanical poise! The cannon glides beneath the concrete ceiling with two inches to spare!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The hauler clears the tunnel, though rebar scores deep scratches on the cannon barrel shroud.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Low clearance shaves off a roof radio antenna before you emerge into the light.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun05_chisel_concrete",
        "label": "Use a pneumatic demolition hammer to chisel out the clearance gap [ROLL +GRIT]",
        "effectText": "You and Boris climb the trailer roof and chisel the obstructing concrete.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Quick, brutal labor! You carve a safe groove through the arch in twenty minutes flat.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Concrete dust cakes your air filters, but the passage is made safe.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Falling concrete chips crack your front windshield.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun05_slow_push",
        "label": "Creep forward at 5 km/h and let the hardened alloy muzzle push aside rebar",
        "effectText": "The hardened steel barrel bulldozes minor debris without structural damage.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_06_fire_control_splice",
    "title": "The Targeting Link",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 5
      },
      "maxQualities": {
        "Railgun Stage": 5
      }
    },
    "text": "While refueling at Highpass Depot, Boris sets up the cannon's ballistic firing deck. \"We need to splice the targeting optic algorithms directly into your rig's digital dashboard,\" he says, holding high-speed fiber-optic lines.",
    "options": [
      {
        "id": "opt_railgun06_neural_link",
        "label": "Interface your cyberware neural deck directly with the firing computer [ROLL +CYBER]",
        "effectText": "You plug the ballistic interface into your neural port.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sublime neural symbiosis! You can aim the 60-meter barrel with the blink of your eye!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The digital telemetry syncs cleanly to your HUD displays.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Feedback pulse flashes across your vision, leaving a temporary migraine.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun06_manual_optical_sight",
        "label": "Mount an analog gyro-stabilized optical periscope on the roof [ROLL +GRIT]",
        "effectText": "You weld an armored periscope with crosshairs directly above the driver seat.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Bulletproof reliability! Pure mechanical optics immune to any corporate EMP jamming!",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The analog sight is aligned and locked down.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Alignment slips slightly on rough roads, requiring future recalibration.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun06_consume_chips",
        "label": "Install 1 Neural Chip from your hold to automate tracking calculations [INVENTORY]",
        "effectText": "The high-speed processor optimizes target acquisition speeds by 300%.",
        "rewards": {
          "cargo": {
            "chips": -1
          },
          "qualities": {
            "Railgun Stage": 1,
            "Tech Literacy": 8
          }
        },
        "reqs": {
          "cargo": {
            "chips": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_07_ambush_gorge",
    "title": "The Box Canyon Stand",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 6
      },
      "maxQualities": {
        "Railgun Stage": 6
      }
    },
    "text": "A syndicate heavy ambush traps you inside Devil's Throat Gorge! Two heavily armored gun-trucks block the forward road behind concrete barricades while snipers open fire from the rim.",
    "options": [
      {
        "id": "opt_railgun07_test_fire_slug",
        "label": "Overcharge the capacitors and fire a single kinetic slug at the barricade [ROLL +GRIT]",
        "effectText": "Boris primes the magnetic rails. The sound of thunder splits the canyon as a 50-pound tungsten slug is launched at Mach 7!",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cataclysmic kinetic detonation! The concrete barricade and both gun-trucks are vaporized into powdered dust and flying scrap!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The slug obliterates the roadblock, though intense electromagnetic recoil jolts your hauler.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The slug clips the canyon wall, triggering a rockslide that dents your trailer.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun07_evasive_reverse",
        "label": "Hard-reverse out of the canyon killzone under covering smoke [ROLL +EDGE]",
        "effectText": "You pop smoke canisters and back out of the gorge at 60 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Magnificent reverse maneuvering! You escape the trap completely without taking a scratch.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reverse out of the killzone, taking minor small-arms fire to the doors.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Sniper rounds punch through your radiator before you clear the gorge.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun07_smoke_screen",
        "label": "Deploy an ultra-dense chemical smoke screen and push forward blindly",
        "effectText": "Blinded by smoke, raiders shoot wide as your heavy iron prow pushes past.",
        "rewards": {
          "credits": -150,
          "hullIntegrity": -8,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_08_cooling_lines",
    "title": "The Boiling Cryo-Jacket",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 7
      },
      "maxQualities": {
        "Railgun Stage": 7
      }
    },
    "text": "The test fire superheated the magnetic barrel coils! The liquid nitrogen jacket is venting boiling vapor; pressure needles are pinned deep in the red zone.",
    "options": [
      {
        "id": "opt_railgun08_thermal_shunt",
        "label": "Vent pressurized steam into the hauler's auxiliary exhaust turbo [ROLL +CYBER]",
        "effectText": "You route the high-pressure gas through the turbocharger impellers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Ingenious thermodynamics! The escaping steam spools the turbo, dumping heat and adding 500 horsepower!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The steam vents safely without damaging the magnetic coils.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A rubber seal ruptures, blowing scalding coolant across the cab steps.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun08_cold_water_flush",
        "label": "Flush the jacket with raw mountain river runoff [ROLL +GRIT]",
        "effectText": "You hook up suction hoses to an icy roadside mountain creek.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Rapid thermal equilibrium! Temperatures plunge back into the safe operating band.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The coils cool down, though mineral scale leaves slight residue.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Cold shock causes minor microscopic thermal stress fractures in the sleeve.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun08_emergency_stop",
        "label": "Shut down electrical systems and let the mountain wind cool the metal",
        "effectText": "You wait an hour on the shoulder as the arctic wind dissipates the heat.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_09_bridge_weight",
    "title": "The Groaning Trestle",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 8
      },
      "maxQualities": {
        "Railgun Stage": 8
      }
    },
    "text": "Ahead lies the Timber Creek Trestle—an aging iron railway bridge spanning a 300-meter drop. The load limit sign reads 50 T; your hauler and the railgun weigh a combined 75 tons! Rivets pop as your front wheels roll onto the first span.",
    "options": [
      {
        "id": "opt_railgun09_floor_it",
        "label": "Floor the accelerator and sprint across before the bridge can collapse [ROLL +EDGE]",
        "effectText": "You put the hammer down, racing across the groaning structure at full speed.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Legendary audacity! The hauler roars across the bridge; behind you, the center span collapses into the abyss seconds after your wheels touch solid ground!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach the far side with a violent thud as the bridge begins to shear.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The rear axles clip falling ironwork as the structure gives way, mangling your mudguards.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun09_crawl_load",
        "label": "Crawl at exact harmonic resonance speed to minimize bridge sway [ROLL +GRIT]",
        "effectText": "You calculate the bridge's vibration frequency and hold a precise 8 km/h.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Master engineer driving! The bridge flexes gracefully without snapping a single critical support member.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You make it across safely, though the steel spans groan in agonizing protest.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A crossbeam buckles under the rear axle, violently dropping the truck four inches.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun09_scaffold_ties",
        "label": "Use heavy steel cargo chains to reinforce the bridge's center joint",
        "effectText": "You take the time to lash the joint securely before crossing safely.",
        "rewards": {
          "credits": -200,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_10_the_crossroads",
    "title": "The Destiny of Thunder [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 9
      },
      "maxQualities": {
        "Railgun Stage": 9
      }
    },
    "text": "At the mountain summit depot of Eagle Crest, Boris sets down his welding helmet. \"The cannon is ready for permanent installation,\" he says with a grin. \"Three paths lie before us. Who wields the thunder?\"",
    "options": [
      {
        "id": "opt_railgun10_choose_dreadnought",
        "label": "Path 1: Permanently weld the Railgun onto your Hauler [SIEGE DREADNOUGHT]",
        "effectText": "You choose personal dominance. The 60-meter magnetic cannon will be mounted directly to your chassis frame, turning your rig into an untouchable highway fortress.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1,
            "Railgun Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_railgun10_choose_freehold",
        "label": "Path 2: Deliver the Railgun to the Freehold Defense Bastion [FREEHOLD ARTILLERY]",
        "effectText": "You choose the sovereignty of the independent settlements. The Freehold militia will mount the cannon on their border fortress to guarantee permanent freedom from corporate tyranny.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1,
            "Railgun Chosen Path": 2,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_railgun10_choose_cartel",
        "label": "Path 3: Sell the Weapon to the Outlaw Syndicate Cartel [OUTLAW THUNDER]",
        "effectText": "You choose immense underworld wealth and syndicate power. The syndicate pays unprecedented black-market bounties and arms your rig with high-tech contraband engines.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1,
            "Railgun Chosen Path": 3,
            "Contraband Mastery": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_11_air_strike",
    "title": "The Sky Hunters",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 10
      },
      "maxQualities": {
        "Railgun Stage": 10
      }
    },
    "text": "Aegis heavy gunships intercept you in the foothills. Their loudspeaker sirens wail: \"UNAUTHORIZED MILITARY HARDWARE DETECTED. SURRENDER THE PROTOTYPE OR BE INCINERATED.\"",
    "options": [
      {
        "id": "opt_railgun11_fire_anti_air",
        "label": "Elevate the railgun barrel and fire a proximity fragmentation slug into the sky [ROLL +EDGE]",
        "effectText": "You track the hovering gunship on your HUD and touch the firing trigger.",
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Direct sky detonation! The kinetic slug obliterates the lead gunship, showering the canyon in flaming debris!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The explosion damages the gunship wing assembly, forcing the patrol to retreat.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The gunship releases an airstrike salvo before spinning away, cratering the road.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun11_smoke_jam",
        "label": "Deploy electromagnetic radar-chaff flares and duck into the canyons [ROLL +CYBER]",
        "effectText": "You launch clouds of aluminized glass chaff into the air.",
        "statRoll": "cyber",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless radar jamming! The missile locks lose track and detonate harmlessly against stone ridges.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You evade their main missile volley, sustaining minor shrapnel paint damage.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A thermal rocket detonates near your rear wheels, throwing dirt and rock.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun11_tunnel_shelter",
        "label": "Race into a nearby abandoned rail tunnel to evade the airstrike",
        "effectText": "The deep rock tunnel shields you from missile fire until the skies clear.",
        "rewards": {
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_12_chassis_reinforcement",
    "title": "The Bed of Titanium",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 11
      },
      "maxQualities": {
        "Railgun Stage": 11
      }
    },
    "text": "The immense weight and kinetic recoil of the cannon require final structural bracing. Boris and your crew weld thick titanium box-girders along your hauler's primary chassis rails.",
    "options": [
      {
        "id": "opt_railgun12_reinforce_frame",
        "label": "Direct precision structural welding along the main frame rails [ROLL +GRIT]",
        "effectText": "You operate the heavy arc welder, laying thick bead welds along every high-stress junction.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterwork metallurgical bracing! The frame becomes virtually indestructible!",
          "rewards": {
            "hullIntegrity": 40,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The bracing reinforces the chassis, absorbing future road punishment.",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A weld cooling defect causes slight warping in an outrigger bracket.",
          "rewards": {
            "hullIntegrity": 5,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun12_tune_suspension",
        "label": "Tune high-pressure nitrogen shock absorbers for combat recoil [ROLL +EDGE]",
        "effectText": "You pressurize the suspension damping valves.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The rig settles with liquid smoothness, soaking kinetic recoil like silk.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Suspension handles the load solidly.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A pressure valve sticks, making the ride bumpy across gravel.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun12_seal_joints",
        "label": "Coat all exposed welds in heavy rust-inhibiting rubber undercoating",
        "effectText": "Protective undercoating shields your frame from caustic wasteland mud.",
        "rewards": {
          "credits": -150,
          "hullIntegrity": 10,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_13_the_breach",
    "title": "The Sovereign Perimeter Assault",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 12
      },
      "maxQualities": {
        "Railgun Stage": 12
      }
    },
    "text": "Aegis heavy barricades seal the border highway with automated blast doors and armored tank pillboxes. Boris loads a solid depleted-uranium armor-piercing core into the railgun breech.",
    "options": [
      {
        "id": "opt_railgun13_blast_gates",
        "label": "Unleash full capacitor discharge and vaporize the border blast doors [ROLL +GRIT]",
        "effectText": "You pull the firing lever. A sonic shockwave shatters glass for five kilometers as the 100-megawatt kinetic round strikes!",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Absolute apocalyptic breakthrough! The 20-foot steel blast door is blasted into a thousand molten fragments!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You blow the gates clear, though kinetic recoil dents your truck bumper.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The gate collapses into a pile of rubble you have to ram your way through.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun13_slice_turrets",
        "label": "Transmit Boris's master override frequency to hijack the automated pillboxes [ROLL +CYBER]",
        "effectText": "You blast the override key into the base mainframe.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sentry turrets turn their guns on their own barricades, blowing an open lane for your hauler!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Turrets shut down into standby mode, letting you roll through.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Security locks out the network and fires warning salvos.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_railgun13_ram_perimeter",
        "label": "Put the hauler in gear and smash through the security guardhouses",
        "effectText": "Your heavy titanium prow crushes the checkpoint booths into toothpicks.",
        "rewards": {
          "hullIntegrity": -20,
          "qualities": {
            "Railgun Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_14_cannon_climax",
    "title": "The Thunder on the Ridge [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 13
      },
      "maxQualities": {
        "Railgun Stage": 13
      }
    },
    "text": "You have broken across the frontier! The destination lies ahead in the dawn light as you lock in your chosen destiny and seal the legacy of the Red Ridge artillery.",
    "options": [
      {
        "id": "opt_railgun14_mount_dreadnought",
        "label": "Lock the Dorsal Mass-Driver permanently into your rig [DREADNOUGHT PATH] [ROLL +GRIT]",
        "effectText": "You weld the firing controls directly to your driver console, crowned the Lord of Kinetic Fire.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign highway dominance! No warlord or corporate convoy will ever challenge your path again!",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gun is permanently secured and calibrated.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Final recoil testing strains engine mounts, but the gun is operational.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_railgun14_freehold_bastion",
        "label": "Deliver the artillery to the Freehold Border Fortress [FREEHOLD PATH] [ROLL +COOL]",
        "effectText": "You pull into the Freehold fortress where hundreds of militia fighters welcome you with thunderous applause.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Savior of the Freehold! The workers grant you eternal free passage, massive bounties, and reclaimer armor!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Delivery concluded with full payment and celebrations.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The militia officers sign off on the cargo with solemn handshakes.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_railgun14_cartel_arms_deal",
        "label": "Deliver the weapon to the Outlaw Syndicate Vault [CARTEL PATH] [ROLL +COOL]",
        "effectText": "You pull into the subterranean cartel bunker to hand over the artillery.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Criminal kingship! Billions in bearer bonds and elite contraband engine upgrades are loaded onto your hauler!",
          "rewards": {
            "credits": 10000,
            "qualities": {
              "Railgun Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Syndicate lords honor the contract and transfer wealth.",
          "rewards": {
            "credits": 5000,
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense negotiations conclude with full payment.",
          "rewards": {
            "qualities": {
              "Railgun Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_railgun_15_finale",
    "title": "The Master of Artillery [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Railgun Stage": 14
      },
      "maxQualities": {
        "Railgun Stage": 14
      }
    },
    "text": "The saga of the Red Ridge railgun is finished. Your rig has been permanently upgraded with terrifying kinetic firepower and heavy reinforced armor.",
    "options": [
      {
        "id": "opt_railgun15_ending_dreadnought",
        "label": "Command the Highways as the Siege Dreadnought [ENDING 1: SIEGE DREADNOUGHT]",
        "effectText": "Armed with the heavy dorsal mass-driver cannon and thick titanium frame reinforcements, your rig is an unstoppable fortress on continental roads.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 4,
            "chips": 2
          },
          "qualities": {
            "Railgun Stage": 80,
            "Street Cred": 30,
            "Heat": -30
          },
          "stats": {
            "grit": 1,
            "edge": 1
          },
          "rig": {
            "maxHull": 35,
            "name": "Iron Nomad - Siege Dreadnought"
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_railgun15_ending_freehold",
        "label": "Lead Freehold Convoys with Bastion Armor [ENDING 2: FREEHOLD ARTILLERY]",
        "effectText": "Honored as the Savior of the Freehold, your rig is outfitted with heavy reclaimer armor plating and high-torque military engines.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 3,
            "chips": 3
          },
          "qualities": {
            "Railgun Stage": 80,
            "Street Cred": 25
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 25,
            "speedRating": 0.15,
            "name": "Iron Nomad - Freehold Artillery"
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_railgun15_ending_cartel",
        "label": "Rule the Shadow Roads with Outlaw Thunder [ENDING 3: OUTLAW THUNDER]",
        "effectText": "Flush with syndicate gold and equipped with high-output contraband engines and reinforced armor, your rig is feared across all territories.",
        "rewards": {
          "credits": 22000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Railgun Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 15
          },
          "stats": {
            "edge": 1,
            "grit": 1
          },
          "rig": {
            "speedRating": 0.2,
            "maxHull": 20,
            "name": "Iron Nomad - Outlaw Thunder"
          }
        },
        "reqs": {
          "qualities": {
            "Railgun Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_railgun15_farewell",
        "label": "Collect final veteran courier fee and depart into the sunset",
        "effectText": "With the heavy gun behind you, you roll out toward new adventures.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Railgun Stage": 80,
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
