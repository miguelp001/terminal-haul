import { Storylet } from '../types/storylet';

export const KINGPIN_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_kingpin_01_fallen_patriarch",
    "title": "The Don in the Shadows",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Kingpin Stage": 0
      }
    },
    "text": "During a city-wide martial blackout in Chicago Sprawl, a wounded elderly man in a bespoke bulletproof trench coat slips into your cab. It is Don Salvatore Moretti, the dethroned godfather of the Great Lakes Syndicate. \"A traitorous lieutenant has taken my territory,\" he breathes, coughing blood. \"My AI laundering servers are loaded in an armored crate in the alley. Get me and the servers to a safehouse beyond the cordon, and you will name your price in sovereign gold and shadow technology.\"",
    "options": [
      {
        "id": "opt_kingpin01_negotiate_terms",
        "label": "Negotiate exorbitant extraction fees and safe-conduct guarantees [ROLL +COOL]",
        "effectText": "You look Moretti in the eye and demand half a million in bearer bonds.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless poise! Moretti transfers a 2,000 credit advance and gives you his personal cipher ring!",
          "rewards": {
            "credits": 2000,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Moretti agrees to your terms and climbs into your sleeping bunk.",
          "rewards": {
            "credits": 1000,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Street spotters notice Moretti's coat, alerting hit squads.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_kingpin01_scan_servers",
        "label": "Scan the armored server rack for tracking transponders [ROLL +CYBER]",
        "effectText": "You run a RF sweeping wand over the server housing.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You locate and rip out two hidden syndicate GPS tracking bugs!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The servers are quiet, though drawing substantial standby power.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A defensive stun charge shocks your fingers from the server lock.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin01_stow_cradle",
        "label": "Lash the server rack down behind heavy toolboxes in the sleeper cab",
        "effectText": "The servers are concealed beneath dirty work blankets and spare tires.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_02_blackout_cordon",
    "title": "The City-Wide Blockade",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 1
      },
      "maxQualities": {
        "Kingpin Stage": 1
      }
    },
    "text": "Aegis martial-law cordons have cut all power to the outer ring road. Infrared searchlights and automated gun-trucks sweep the blacked-out highway, searching for departing mob vehicles.",
    "options": [
      {
        "id": "opt_kingpin02_kill_lights",
        "label": "Shut off all lights and drive by infrared night-vision scopes [ROLL +EDGE]",
        "effectText": "You click off headlights and navigate the dark concrete by green night vision.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Ghost transit! You slip beneath the searchlight arcs without triggering a single sensor ping!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the checkpoint, though a stray searchlight grazes your trailer.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Your rear trailer clips a concrete barrier in the dark, alerting sentries!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_kingpin02_moretti_clearance",
        "label": "Transmit Moretti's secret executive back-channel bribe codes [ROLL +COOL]",
        "effectText": "You radio the checkpoint commander with Moretti's private account numbers.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Corrupt perfection! The commander acknowledges the 500-credit transfer and turns off the searchlights for two minutes!",
          "rewards": {
            "credits": -500,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The commander takes the bribe, grumbling about paperwork.",
          "rewards": {
            "credits": -800,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The commander rejects the bribe, demanding your immediate surrender!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": 20
            }
          }
        }
      },
      {
        "id": "opt_kingpin02_drain_ditch",
        "label": "Take the flooded drainage canal culvert under the highway",
        "effectText": "A murky bypass carries you beneath the checkpoint at the cost of muddy tires.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_03_hitman_chase",
    "title": "The Traitor's Wolves",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 2
      },
      "maxQualities": {
        "Kingpin Stage": 2
      }
    },
    "text": "Three matte-black muscle cars equipped with roof-mounted machine guns roar out of an alleyway. Moretti curses: \"It's Castiglione's hitmen! They know I'm alive!\"",
    "options": [
      {
        "id": "opt_kingpin03_ram_interceptor",
        "label": "Brake-check and sideswipe the lead hitman car with your 35-ton hauler [ROLL +GRIT]",
        "effectText": "You swing the steering wheel and smash the muscle car into the highway divider.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Catastrophic destruction! The hitman vehicle is crushed against the concrete wall in a shower of sparks!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash the pursuer aside, sustaining dents on your fuel tank step.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return machine-gun fire shatters your passenger window.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin03_caltrop_dump",
        "label": "Release oil and hardened steel caltrops from your rear bumper dispenser [ROLL +EDGE]",
        "effectText": "You pull the emergency dump lever on the dashboard.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Both pursuing cars shred their tires at 140 km/h, spinning out into a ditch!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: One car spins out; the second backs off into the shadows.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Caltrops scatter unevenly, failing to deter the lead car.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin03_smoke_screen",
        "label": "Deploy an ultra-dense chemical smoke screen and kill your taillights",
        "effectText": "Blinded by smoke, the hitmen overshoot down an off-ramp.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_04_first_safehouse",
    "title": "The Meatpacking Safehouse",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 3
      },
      "maxQualities": {
        "Kingpin Stage": 3
      }
    },
    "text": "You pull into an abandoned meatpacking warehouse. Moretti's trusted doctor, Vince \"The Scalpel,\" bandages the Don's gunshot wound while you inspect the AI servers, which are humming with cryptographic calculations.",
    "options": [
      {
        "id": "opt_kingpin04_interrogate_servers",
        "label": "Slice into the server array to inspect Moretti's financial ledgers [ROLL +CYBER]",
        "effectText": "You plug your deck into the server's auxiliary maintenance terminal.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Invaluable blackmail! You discover accounts holding sixty million credits and blackmail files on every corrupt mayor in the sector!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You decrypt the ledger balances, confirming Moretti is fabulously wealthy.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-intrusion software locks out your deck, burning an interface chip.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin04_counsel_don",
        "label": "Counsel Moretti on rebuilding his syndicate through loyal alliances [ROLL +COOL]",
        "effectText": "You share a glass of bourbon with the battered Don and advise him on strategy.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Moretti treats you as a valued consigliere, vowing eternal loyalty and gifting rare cyberware!",
          "rewards": {
            "cargo": {
              "cyberware": 2
            },
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Moretti listens respectfully, his resolve returning.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Moretti snaps in bitter frustration, brooding in silence.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin04_rest_refuel",
        "label": "Rest in your cab and top off engine oil and coolant reserves",
        "effectText": "A hot meal and diagnostic sweep prepare you for the interstate sprint.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_05_toll_ambush",
    "title": "The Corrupt Bridge Toll",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 4
      },
      "maxQualities": {
        "Kingpin Stage": 4
      }
    },
    "text": "At the Mississippi River bridge, corrupt transit enforcers in the pay of Moretti's rival have set up an illegal checkpoint with heavy vehicle scanners.",
    "options": [
      {
        "id": "opt_kingpin05_counter_bribe",
        "label": "Outbid their contract with a direct transfer of 1,000 credits [ROLL +COOL]",
        "effectText": "You pull up to the booth and speak with chilling, quiet authority.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Greed triumphs! The guards pocket the credits, disabling the bridge scanners and saluting as you drive through!",
          "rewards": {
            "credits": -500,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The guards accept a 1,000 credit bribe and let you pass.",
          "rewards": {
            "credits": -1000,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The guards realize who is in the cab and sound the alarm!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_kingpin05_ram_booth",
        "label": "Put the hauler in gear and smash the toll gate into pieces [ROLL +GRIT]",
        "effectText": "You sound the war horns and crush the barrier under your iron cow-catcher.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Thunderous kinetic smash! The toll arm and guardhouse booth are flattened into rubble!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, taking bullet marks on your hood.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-tensile crash barrier catches your front bumper before breaking free.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin05_smoke_run",
        "label": "Deploy thick tire smoke and speed across the center bridge span",
        "effectText": "Blind crossing carries you past the guards before they can aim.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_06_server_overheat",
    "title": "The Boiling Crypto-Cores",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 5
      },
      "maxQualities": {
        "Kingpin Stage": 5
      }
    },
    "text": "The AI laundering servers are churning cryptographic blocks to erase Moretti's financial footprint. The server fans are shrieking; heat inside the sleeper bunk is reaching 70 degrees Celsius.",
    "options": [
      {
        "id": "opt_kingpin06_plumb_coolant",
        "label": "Splice your truck's cab air-conditioning duct directly into the server rack [ROLL +CYBER]",
        "effectText": "You fabricate a tin-foil duct to channel freezing air into the processor bay.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless thermal routing! Server temperatures drop to 20 degrees; processing speed doubles!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cooling duct stabilizes the servers within operating limits.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Condensation drips onto an expansion board, shorting a cooling fan.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin06_throttle_processing",
        "label": "Throttle the AI algorithms to reduce computational thermal output [ROLL +CYBER]",
        "effectText": "You enter terminal commands to cap server clock frequencies.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Efficient power management! Temperatures normalize while maintaining full encryption security.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Processing slows down, but the servers are saved from melting.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Throttling causes a temporary ledger sync error.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin06_consume_cyberware",
        "label": "Install 1 unit of Cyberware heat sinks from hold into the server frame [INVENTORY]",
        "effectText": "High-grade cybernetic thermal fins dissipate the heat silently.",
        "rewards": {
          "cargo": {
            "cyberware": -1
          },
          "hullIntegrity": 15,
          "qualities": {
            "Kingpin Stage": 1,
            "Tech Literacy": 8
          }
        },
        "reqs": {
          "cargo": {
            "cyberware": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_07_underworld_motel",
    "title": "The Crossroads Motel",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 6
      },
      "maxQualities": {
        "Kingpin Stage": 6
      }
    },
    "text": "You pull behind a neon-lit motor inn frequented by black-market smugglers. Moretti meets with two loyal family capos who have arrived in armored sedans carrying cash bags and surplus military rifles.",
    "options": [
      {
        "id": "opt_kingpin07_rally_capos",
        "label": "Help Moretti rally his remaining lieutenants for a counter-offensive [ROLL +COOL]",
        "effectText": "You stand beside Moretti on the porch, projecting formidable confidence.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The capos pledge blood oaths to Moretti, loading 3,000 credits and heavy military ammunition into your truck!",
          "rewards": {
            "credits": 3000,
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The capos transfer loyal funds and promise to mobilize street soldiers.",
          "rewards": {
            "credits": 1500,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: The capos are nervous and argumentative, questioning Moretti's health.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin07_upgrade_armor",
        "label": "Have their mechanics weld heavy ballistic steel skirts over your wheels [ROLL +GRIT]",
        "effectText": "Their mob mechanics work through the night with torches and angle grinders.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superb armored skirts! Your tires and fuel tanks are shielded from heavy rifle fire!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Wheel armor is welded down solidly.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Rough welding leaves slag rubbing against your left mudguard.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin07_keep_watch",
        "label": "Sit on the cab roof with a rifle and keep perimeter watch until dawn",
        "effectText": "Your vigilance ensures the safehouse is never ambushed.",
        "rewards": {
          "qualities": {
            "Kingpin Stage": 1,
            "Street Cred": 5
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_08_highway_ambush_convoy",
    "title": "The Gun-Truck Gauntlet",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 7
      },
      "maxQualities": {
        "Kingpin Stage": 7
      }
    },
    "text": "Castiglione's usurper faction launches a coordinated highway ambush! Five armored pickup trucks armed with heavy 50-caliber machine guns box in your convoy along an elevated interstate viaduct.",
    "options": [
      {
        "id": "opt_kingpin08_ram_flank",
        "label": "Sideswipe the right-hand interceptor into the concrete guardrail [ROLL +GRIT]",
        "effectText": "You pitch your heavy trailer into their lead vehicle with maximum momentum.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating crash! The gun-truck flips over the guardrail and plummets 50 feet off the viaduct!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force the interceptor into the wall, clearing lane space.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy machine-gun fire riddles your trailer sidewall before you break through.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin08_drift_feint",
        "label": "Feint an exit down an off-ramp, then hard-drift back onto the main highway [ROLL +EDGE]",
        "effectText": "You pull an audacious high-speed feint, braking hard and swinging back.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless reflex maneuver! Two pursuing trucks overshoot down the exit ramp while you roar ahead!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shake off three attackers, though your tires smoke from the skid.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You clip a concrete lane divider during the drift, jolting the cab.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin08_hack_fuel_pumps",
        "label": "Broadcast an ECM pulse into their electronic fuel injection relays [ROLL +CYBER]",
        "effectText": "You blast malicious fuel-shutoff packets into their truck ECUs.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Engine stalls! All three pursuers lose power instantly, drifting harmlessly to the shoulder!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Two trucks stall out, ending their pursuit.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures block your packet; they continue firing.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_09_the_baryon_shroud",
    "title": "The Prototype Shroud",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 8
      },
      "maxQualities": {
        "Kingpin Stage": 8
      }
    },
    "text": "Moretti opens a velvet-lined case in the server rack, revealing the \"Baryon Shroud\"—an experimental corporate-grade electronic cloaking module. \"I stole this from an Aegis black lab,\" Moretti smiles. \"Mount it to your rig. It absorbs radar waves and scatters heat signatures into pure darkness.\"",
    "options": [
      {
        "id": "opt_kingpin09_wire_shroud",
        "label": "Wire the Baryon Shroud into your hauler's primary electrical grid [ROLL +CYBER]",
        "effectText": "You integrate the cloaking device into your alternator and hull grounding rods.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total stealth integration! Your 35-ton rig vanishes completely from radar, thermal, and electronic scans!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 10,
              "Heat": -50
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The shroud functions, eliminating 70% of your radar footprint.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": -25
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electrical feedback blows out your dashboard clock.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin09_tune_resonance",
        "label": "Fine-tune the field harmonics to cancel engine acoustic rumble [ROLL +GRIT]",
        "effectText": "You adjust the acoustic dampeners to silence diesel combustion noise.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Silent running! The roaring diesel engine whispers like a light breeze!",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Engine noise is cut in half.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vibrations loosen an exhaust clamp.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin09_keep_standby",
        "label": "Keep the shroud in standby mode for emergency use",
        "effectText": "You preserve the shroud's battery reserves for the final border run.",
        "rewards": {
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_10_the_crossroads",
    "title": "The Council of Shadows [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 9
      },
      "maxQualities": {
        "Kingpin Stage": 9
      }
    },
    "text": "At the secret river estate of St. Louis, Moretti stands before you, his wound healed and his power restored. The AI servers have completed their laundering runs. \"The kingdom is mine once more,\" he declares. \"Three paths lie before us, courier. What is your true calling in the underworld?\"",
    "options": [
      {
        "id": "opt_kingpin10_choose_shadow_sovereign",
        "label": "Path 1: Keep the Baryon Stealth Shroud and take your gold [SHADOW SOVEREIGN]",
        "effectText": "You choose personal freedom and untouchable stealth. The Baryon Shroud will remain permanently welded to your rig, making you an invisible ghost on every continental highway.",
        "rewards": {
          "qualities": {
            "Kingpin Stage": 1,
            "Kingpin Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_kingpin10_choose_patron",
        "label": "Path 2: Use Moretti's Billions to Endow the Freehold Refuges [SOVEREIGN PATRON]",
        "effectText": "You choose the wasteland people. You convince Moretti to finance independent clinics, solar arrays, and armor foundries, making you the revered protector of the poor.",
        "rewards": {
          "qualities": {
            "Kingpin Stage": 1,
            "Kingpin Chosen Path": 2,
            "Street Cred": 25
          }
        }
      },
      {
        "id": "opt_kingpin10_choose_kingmaker",
        "label": "Path 3: Become Moretti's Chief Underworld Enforcer & Kingmaker [KINGMAKER]",
        "effectText": "You choose supreme syndicate dominance. You lead Moretti's strike teams to purge his rivals, taking joint command of the continental smuggling networks.",
        "rewards": {
          "qualities": {
            "Kingpin Stage": 1,
            "Kingpin Chosen Path": 3,
            "Contraband Mastery": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_11_usurper_assault",
    "title": "The Siege of the Estate",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 10
      },
      "maxQualities": {
        "Kingpin Stage": 10
      }
    },
    "text": "Castiglione arrives with fifty mercenaries and two armored half-tracks to exterminate Moretti once and for all! Mortar shells crater the estate lawn as heavy gunfire tears through the windows.",
    "options": [
      {
        "id": "opt_kingpin11_ram_halftrack",
        "label": "Floor the throttle and ram Castiglione's armored half-track with your heavy prow [ROLL +GRIT]",
        "effectText": "You engage the Baryon stealth shroud, accelerate in total darkness, and smash into his war-rig.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cataclysmic kinetic smash! The half-track is flipped upside down, crushing Castiglione's command vehicle and routing his mercenaries!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 18
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash their armored flank, breaking the siege.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy mortar shrapnel tears across your hood before you smash through.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin11_slice_mercenary_radios",
        "label": "Broadcast the AI server's financial termination codes into their radios [ROLL +CYBER]",
        "effectText": "You transmit proof that Castiglione's offshore bank accounts have been wiped clean by Moretti's AI.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Instant mercenary mutiny! Realizing their pay is gone, the mercenaries turn their weapons on Castiglione himself!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Mercenaries stop fighting and retreat in confusion.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radio jamming blocks your broadcast; firefight continues.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin11_extract_don",
        "label": "Load Moretti and the servers into the cab and blast through the back gardens",
        "effectText": "You crush decorative garden walls and escape into the dark woods.",
        "rewards": {
          "hullIntegrity": -10,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_12_stealth_tuning",
    "title": "The Phantom Calibration",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 11
      },
      "maxQualities": {
        "Kingpin Stage": 11
      }
    },
    "text": "With the siege broken, Moretti's master technician installs the final Baryon quantum baffles along your engine exhaust, ensuring that no police lidar or satellite scanner can ever detect your presence.",
    "options": [
      {
        "id": "opt_kingpin12_tune_quantum_baffles",
        "label": "Calibrate the quantum stealth baffles to zero thermal emission [ROLL +CYBER]",
        "effectText": "You balance the phase-inverters on your diagnostic computer.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Absolute invisibility! The hauler produces zero radar, thermal, or acoustic footprint!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Tech Literacy": 8,
              "Heat": -50
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Stealth signature drops to near-zero levels.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Heat": -25
            }
          }
        },
        "miss": {
          "effectText": "MISS: A grounding cable vibrates loose, sparking slightly.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin12_reinforce_bulkheads",
        "label": "Weld hidden false bulkheads inside the cargo hold [ROLL +GRIT]",
        "effectText": "You construct secret compartments shielded by lead and baryon plates.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You expand hidden cargo capacity by 6 metric tons of undetectable hold space!",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Kingpin Stage": 1,
              "Contraband Mastery": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Secret bulkheads are installed and carpeted.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A bulkhead weld takes up slightly more room than planned.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin12_inspect_all_seals",
        "label": "Conduct a complete physical inspection of every door and window gasket",
        "effectText": "Hermetic cabin seals ensure total soundproofing and stealth.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_13_border_lockdown",
    "title": "The Last Checkpoint of the Divide",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 12
      },
      "maxQualities": {
        "Kingpin Stage": 12
      }
    },
    "text": "The state border is locked under federal martial law. High-powered laser tripwires, automated Gatling turrets, and armored hover-tanks guard the crossing.",
    "options": [
      {
        "id": "opt_kingpin13_ghost_slip",
        "label": "Activate the Baryon Shroud and glide through the laser sensors like a shadow [ROLL +EDGE]",
        "effectText": "You glide through the security zone in complete electronic darkness.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless ghost transit! Automated turrets swivel past without detecting your 35-ton rig; you cross the border untouched!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 16
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You cross cleanly, taking only a brief warning sensor ping.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An automated sensor clips your radio antenna, firing a warning burst.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin13_executive_diplomatic_code",
        "label": "Transmit Moretti's presidential diplomatic clearance overrides [ROLL +COOL]",
        "effectText": "You transmit top-secret clearance credentials.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The barrier gates open wide with full military salutes! \"SAFE TRANSIT CONFIRMED, SENATOR.\"",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gates open after a tense 30-second security verification.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Security questions the expired credentials, forcing you to gun the throttle.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_kingpin13_ram_checkpoint",
        "label": "Put the pedal down and ram the plastic guard shacks into matchsticks",
        "effectText": "Heavy titanium bull-bars clear an open lane across the state line.",
        "rewards": {
          "hullIntegrity": -20,
          "qualities": {
            "Kingpin Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_14_underworld_climax",
    "title": "The King of the Highway [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 13
      },
      "maxQualities": {
        "Kingpin Stage": 13
      }
    },
    "text": "You have crossed into the sovereign territories! Don Salvatore Moretti turns to you with his golden pocket watch in hand as the destination lights gleam ahead.",
    "options": [
      {
        "id": "opt_kingpin14_claim_shadow_sovereign",
        "label": "Seal the Baryon Shroud permanently onto your rig [SHADOW PATH] [ROLL +EDGE]",
        "effectText": "You finalize the installation, crowned the undisputed Shadow Sovereign of the American roads.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You are untouchable! No corporate scan or warlord trap will ever locate your rig again!",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The stealth modifications are permanently locked in.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: Shroud calibration finishes with minor gauge flicker.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_kingpin14_endow_freeholds",
        "label": "Sign the Freehold Endowment Charter [PATRON PATH] [ROLL +COOL]",
        "effectText": "You and Moretti transfer fifty million credits to the Freehold Worker Council.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign Savior! Millions of wasteland citizens worship your name; the council outfits your rig with fortress armor!",
          "rewards": {
            "credits": 10000,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The endowment funds clear, securing eternal community sanctuary.",
          "rewards": {
            "credits": 5000,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: The council signs the charter with profound gratitude.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_kingpin14_coronation_kingmaker",
        "label": "Accept the Crown of the Underworld Kingmaker [KINGMAKER PATH] [ROLL +COOL]",
        "effectText": "You take your seat as the co-ruler of the continental syndicate pipeline.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Boundless criminal wealth and power! You command fleets of smugglers and swim in unlimited gold!",
          "rewards": {
            "credits": 15000,
            "qualities": {
              "Kingpin Stage": 1,
              "Street Cred": 25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The syndicate honors your coronation with massive payouts.",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Coronation concludes with full treasury transfers.",
          "rewards": {
            "qualities": {
              "Kingpin Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_kingpin_15_finale",
    "title": "The Shadow Sovereign [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Kingpin Stage": 14
      },
      "maxQualities": {
        "Kingpin Stage": 14
      }
    },
    "text": "The saga of the Syndicate Kingpin is complete. Your hauler has been permanently modified with revolutionary Baryon stealth engineering and underworld modifications.",
    "options": [
      {
        "id": "opt_kingpin15_ending_shadow",
        "label": "Rule the Highway as the Shadow Sovereign [ENDING 1: SHADOW SOVEREIGN]",
        "effectText": "Outfitted with the Baryon Stealth Shroud, your hauler commands +18% speed rating, +6 T Cargo Capacity, and permanent +1 COOL.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Kingpin Stage": 80,
            "Street Cred": 30,
            "Heat": -50
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "speedRating": 0.18,
            "maxCargoWeight": 6,
            "name": "Iron Nomad - Shadow Sovereign"
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_kingpin15_ending_patron",
        "label": "Command Respect as the Sovereign Patron [ENDING 2: SOVEREIGN PATRON]",
        "effectText": "Revered as the benefactor of the wasteland people, your rig is outfitted with heavy reclaimer fortress armor and high-capacity cargo bays.",
        "rewards": {
          "credits": 18000,
          "hullIntegrity": 100,
          "cargo": {
            "batteries": 5,
            "chips": 3
          },
          "qualities": {
            "Kingpin Stage": 80,
            "Street Cred": 35
          },
          "stats": {
            "cool": 1,
            "grit": 1
          },
          "rig": {
            "maxHull": 30,
            "speedRating": 0.15,
            "name": "Iron Nomad - Sovereign Patron"
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_kingpin15_ending_kingmaker",
        "label": "Command the Syndicate as the Kingmaker [ENDING 3: KINGMAKER]",
        "effectText": "Flush with unlimited syndicate wealth, your rig is armed with high-output contraband turbines, reinforced armor, and shielded smuggling bulkheads.",
        "rewards": {
          "credits": 25000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "chips": 5
          },
          "qualities": {
            "Kingpin Stage": 80,
            "Street Cred": 30,
            "Contraband Mastery": 25
          },
          "stats": {
            "cool": 1,
            "edge": 1
          },
          "rig": {
            "speedRating": 0.22,
            "maxHull": 20,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Kingmaker"
          }
        },
        "reqs": {
          "qualities": {
            "Kingpin Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_kingpin15_farewell",
        "label": "Collect final veteran courier fee and depart into the night",
        "effectText": "With Moretti restored, you merge back onto open asphalt.",
        "rewards": {
          "credits": 12000,
          "qualities": {
            "Kingpin Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "speedRating": 0.12
          }
        }
      }
    ]
  }
];
