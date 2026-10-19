import { Storylet } from '../types/storylet';

export const NEUROPLAGUE_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_neuroplague_01_static_seizure",
    "title": "The Screaming Radio of the Plains",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "maxQualities": {
        "Neuroplague Stage": 0
      }
    },
    "text": "At an isolated refueling depot, a renegade neural surgeon named Dr. Clara Vega bangs on your cab window. \"The Cerebro-09 virus has broken containment,\" she pants, holding an insulated diagnostic cradle. \"It's a wireless cybernetic pathogen that infects truck neural-links, driving drivers into homicidal highway dementia. I have the firewall vaccine firmware, but I need an uninfected hauler to broadcast the patch across continental microwave relay towers.\"",
    "options": [
      {
        "id": "opt_neuro01_accept_contract",
        "label": "Accept Dr. Vega's mission and inspect the neural vaccine firmware [ROLL +COOL]",
        "effectText": "You negotiate danger pay and review the broadcast route.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless negotiation! Vega transfers a 1,500 credit advance and shielded optical patch cables.",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and lock the firmware deck in your cab.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Local crazed cyborgs hear the radio, throwing bottles at your cab.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_neuro01_scan_virus_packets",
        "label": "Analyze the wireless infection frequency with your cyberdeck [ROLL +CYBER]",
        "effectText": "You analyze the malicious radio carrier packets.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You identify the virus's carrier wavelength and program an automated firewall filter for your rig!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You isolate the broadcast band, keeping your own implants shielded.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Static burst shocks your neural port, causing temporary visual dizziness.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro01_install_copper_mesh",
        "label": "Install grounded copper mesh around your driver's seat and neural port",
        "effectText": "Physical shielding prevents wireless neural infection.",
        "rewards": {
          "hullIntegrity": 15,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_02_crazed_convoy",
    "title": "The Rabid Rigs",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 1
      },
      "maxQualities": {
        "Neuroplague Stage": 1
      }
    },
    "text": "Two infected heavy haulers, their drivers screaming in wireless psychosis through open CB channels, ram their trailers together and swerve straight toward your convoy at full throttle!",
    "options": [
      {
        "id": "opt_neuro02_evasive_hairpin",
        "label": "Execute an evasive high-speed ditch maneuver to let them crash into each other [ROLL +EDGE]",
        "effectText": "You drop into a gravel ditch, letting the two rabid rigs collide.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Brilliant driving! The two infected trucks smash head-on into each other with a violent explosion, clearing your path!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You evade their main collision, taking minor gravel spray against your doors.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: One infected truck clips your rear trailer corner before rolling into the ditch.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro02_emp_broadcast",
        "label": "Blast Dr. Vega's firewall kill-code through your radio transmitter [ROLL +CYBER]",
        "effectText": "You beam the neural reboot packet directly into their truck receivers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Instant neural reboot! Both drivers collapse into unconsciousness as their rigs safely engage automated air brakes!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: One truck reboots safely; the second veers off the highway.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Broadcast feedback pops an audio amplifier in your dashboard.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro02_ram_through",
        "label": "Drop into lowest gear and smash through the weaker trailer's rear axle",
        "effectText": "Your heavy iron nose pushes past the wreckage.",
        "rewards": {
          "hullIntegrity": -18,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_03_first_relay_tower",
    "title": "The Pylon of Salvation",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 2
      },
      "maxQualities": {
        "Neuroplague Stage": 2
      }
    },
    "text": "You reach Relay Tower Alpha atop a rocky mesa. By uploading Vega's vaccine firmware to the main satellite dish, you can inoculate all vehicles within a 200-kilometer radius.",
    "options": [
      {
        "id": "opt_neuro03_climb_tower",
        "label": "Climb the transmission mast in gale-force winds to connect the optical patch [ROLL +GRIT]",
        "effectText": "You climb 100 feet of rusted steel rungs in the howling wind.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heroic feat! You seat the optical connector and broadcast the patch! Hundreds of truckers radio in their tearful gratitude!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You seat the patch cable, though the climb leaves your muscles bruised.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A gust of wind tears a cable loose, forcing you to climb down and re-crimp it.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro03_remote_splice",
        "label": "Hack the tower's ground maintenance terminal using your deck [ROLL +CYBER]",
        "effectText": "You splice into the underground fiber junction box.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless digital uplink! The firmware propagates across the microwave network at lightspeed!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The upload succeeds, though data bandwidth is limited.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tower ICE locks the terminal, requiring manual circuit bypass.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro03_consume_chips",
        "label": "Install 1 Neural Processing Chip from hold to boost broadcast range by 100% [INVENTORY]",
        "effectText": "The high-performance chip doubles the vaccine's transmission footprint.",
        "rewards": {
          "cargo": {
            "chips": -1
          },
          "qualities": {
            "Neuroplague Stage": 1,
            "Tech Literacy": 10,
            "Street Cred": 8
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "cargo": {
            "chips": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_04_the_infected_town",
    "title": "The Screaming Depot",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 3
      },
      "maxQualities": {
        "Neuroplague Stage": 3
      }
    },
    "text": "You roll into a quarantined truck stop. Scores of infected haulers stumble around the parking lot, clutching their cybernetic implants in agony as corrupted hex-strings burn into their optic nerves.",
    "options": [
      {
        "id": "opt_neuro04_deploy_mobile_chiller",
        "label": "Set up Dr. Vega's mobile neuro-chilling clinic in your trailer [ROLL +COOL]",
        "effectText": "You open your cargo doors and guide the suffering drivers to the cooling stations.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous medical intervention! You cure twenty veteran truckers, who shower you with grateful blessings and high-grade batteries!",
          "rewards": {
            "cargo": {
              "batteries": 2
            },
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You stabilize the worst cases and calm the panicked crowd.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Panicked drivers swarm your steps, forcing you to seal doors.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro04_scavenge_infected_parts",
        "label": "Salvage pristine uninfected chassis components from abandoned rigs [ROLL +GRIT]",
        "effectText": "You unbolt heavy alloy armor plating and leaf springs from deserted trucks.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Exceptional salvage! You weld reinforced heavy steel armor onto your own cab for free!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure spare filters and hydraulic hoses.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An infected booby-trap arcs voltage against your wrench.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro04_refuel_quickly",
        "label": "Refuel your tanks at the automated pump and depart before riots start",
        "effectText": "You keep the engine running and head back onto the open asphalt.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_05_highway_sweepers",
    "title": "The Corporate Incinerators",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 4
      },
      "maxQualities": {
        "Neuroplague Stage": 4
      }
    },
    "text": "Aegis Bio-Hazard Sweeper teams are burning the highway with napalm to purge the infected sector. Automated flame-drones dive toward your convoy, treating your rig as a contaminated carrier!",
    "options": [
      {
        "id": "opt_neuro05_charge_firewall",
        "label": "Ram through the burning napalm cordon with your heavy steel plow [ROLL +GRIT]",
        "effectText": "You seal cab air vents, hit fire-suppression systems, and charge through the flames.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Massive kinetic breakthrough! The heavy hauler bursts through the wall of white fire like an iron locomotive!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You burst through the flames, taking singed rubber seals.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Intense heat burns out your passenger headlight and blisters paint.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro05_anti_drone_snipe",
        "label": "Shoot down the approaching flame-drones with high-velocity rifle fire [ROLL +EDGE]",
        "effectText": "You unlimber your rifle from the cab roof hatch and pick off the drones.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Deadeye marksmanship! Three drones detonate in mid-air fireballs, clearing the sky!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You down two drones, forcing the patrol to peel off.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return flame spray scorches your trailer roof.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro05_chemical_foam",
        "label": "Deploy exterior fire-retardant foam spray to douse the flames",
        "effectText": "Chemical foam smothers the napalm barrier around your tires.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_06_neural_hardening",
    "title": "The Titanium Cranial Shield",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 5
      },
      "maxQualities": {
        "Neuroplague Stage": 5
      }
    },
    "text": "While sheltered in an abandoned hospital basement, Dr. Vega offers to install an experimental \"Neural Firewall Hardening Matrix\" directly into your cab's cybernetic interface. \"It will insulate your brain and truck computers from all wireless interference,\" she promises.",
    "options": [
      {
        "id": "opt_neuro06_accept_implant",
        "label": "Undergo the neural firewall integration surgery [ROLL +GRIT]",
        "effectText": "You sit in the dentist chair and let Dr. Vega wire the shielded neuro-port.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless surgical symbiosis! Your mind and machine interface become completely impervious to electronic malware and static!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The surgery succeeds, though your skull throbs with post-op soreness.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Nerve pain flares up, leaving temporary visual static.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro06_chassis_isolators",
        "label": "Install fiber-optic optocouplers along your truck's communication bus [ROLL +CYBER]",
        "effectText": "You replace copper data wires with immune optical glass fibers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total vehicle data isolation! No wireless packet can corrupt your truck engine computers!",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The optical bus stabilizes all critical driving instruments.",
          "rewards": {
            "hullIntegrity": 10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A fiber cable fractures during installation, requiring replacement.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro06_consume_cyberware",
        "label": "Integrate 1 unit of Cyberware components from hold into the firewall deck [INVENTORY]",
        "effectText": "Military-grade cybernetic hardware ensures 100% firewall reliability.",
        "rewards": {
          "cargo": {
            "cyberware": -1
          },
          "hullIntegrity": 20,
          "qualities": {
            "Neuroplague Stage": 1,
            "Tech Literacy": 10
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "cargo": {
            "cyberware": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_07_ghost_transmission",
    "title": "The Siren of the Airwaves",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 6
      },
      "maxQualities": {
        "Neuroplague Stage": 6
      }
    },
    "text": "The Cerebro-09 pathogen has evolved into a self-aware viral neural network. A synthetic voice whispers through your cab radio, attempting to seduce your cyberware into surrendering control of the hauler.",
    "options": [
      {
        "id": "opt_neuro07_psychic_defiance",
        "label": "Resist the hypnotic audio frequencies with iron mental resolve [ROLL +COOL]",
        "effectText": "You stare down the static and command your mind with cold discipline.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Supreme willpower! You shatter the psychological attack and pinpoint the master viral broadcast tower!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shake off the hypnotic whispers and maintain road focus.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vertigo causes you to drift onto the gravel shoulder.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro07_counter_malware",
        "label": "Compile a destructive polymorphic counter-virus and broadcast it back [ROLL +CYBER]",
        "effectText": "You type furious hex routines to strike at the viral network.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating counter-strike! The virus's regional subnet crashes in digital agony, freeing fifty infected trucks!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 10,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Your counter-virus silences the whisper for several hours.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-ICE pings back into your deck, scorching an audio diode.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro07_kill_radio",
        "label": "Turn off all civilian radio receivers and drive in complete analog silence",
        "effectText": "Analog isolation prevents the virus from finding a carrier wave.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_08_mad_max_caravan",
    "title": "The Screaming Armada",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 7
      },
      "maxQualities": {
        "Neuroplague Stage": 7
      }
    },
    "text": "A convoy of twenty infected scrap-trucks, welded together into a massive armored road-train, barrels down the center lanes behind you. Corrupted drivers hang from the doors, screaming in machine delirium as they rev their engines.",
    "options": [
      {
        "id": "opt_neuro08_drop_mines",
        "label": "Drop magnetic pulse mines from your rear bumper directly under their tires [ROLL +EDGE]",
        "effectText": "You trigger the rear deployment rack, dropping three pulsing mines.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Massive detonation! The lead scrap-truck's steering axle is blasted away, throwing the entire road-train into a colossal jackknife pileup!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The mines disable the lead truck, breaking up the armada.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A mine bounces off asphalt, detonating too close to your own trailer.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro08_sonic_dash",
        "label": "Drop into highest gear and outrun the cumbersome scrap-train on open flats [ROLL +GRIT]",
        "effectText": "You floor the accelerator and let your pristine diesel engine pull away.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Superior mechanical velocity! The lumbering scrap armada fades into a tiny speck of dust in your rearview mirror!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You outrun their line, though your engine runs hot.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An infected buggy sideswipes your trailer before dropping back.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro08_oil_slick",
        "label": "Deploy high-viscosity oil slick across the two lanes behind you",
        "effectText": "The slick sends their lead vehicles spinning out into the ditch.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_09_the_mountain_broadcast",
    "title": "The High Summit Dish",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 8
      },
      "maxQualities": {
        "Neuroplague Stage": 8
      }
    },
    "text": "You reach Mount Baldy's microwave arrays—the highest broadcast peak in the state. Uploading the vaccine here will permanently inoculate the entire Midwest sector against the Cerebro-09 virus.",
    "options": [
      {
        "id": "opt_neuro09_splice_main_dish",
        "label": "Splice the master vaccine payload into the megawatt broadcast transmitter [ROLL +CYBER]",
        "effectText": "You hook Dr. Vega's core database into the primary dish amplifier.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Triumphant transmission! A blinding pulse of healing firmware washes across the continent, curing thousands of suffering truckers!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 12,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The broadcast transmits successfully across 80% of the regional grid.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: A blown transformer delays the broadcast by thirty minutes under freezing winds.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro09_defend_generator",
        "label": "Stand guard against infected climbers attempting to sabotage the power [ROLL +GRIT]",
        "effectText": "You wield your shotgun and defend the generator shack with unyielding resolve.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unshakeable defender! You hold the generator secure against all attackers until the transmission completes!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure the perimeter, taking minor bruising.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A saboteur tosses an explosive pipe near your truck before being put down.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro09_reinforce_power",
        "label": "Run high-voltage cables from your truck alternator to guarantee full broadcast power",
        "effectText": "Your truck engine powers the dish to maximum broadcast wattage.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_10_the_crossroads",
    "title": "The Fate of the Neural Code [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 9
      },
      "maxQualities": {
        "Neuroplague Stage": 9
      }
    },
    "text": "In the mountain control bunker, Dr. Vega holds the master golden optical disk containing both the vaccine and the military source code for Cerebro-09. \"The epidemic is broken,\" she says. \"Three destinies lie before us. Who commands the mind of the highway?\"",
    "options": [
      {
        "id": "opt_neuro10_choose_neural_fortress",
        "label": "Path 1: Permanently mount the Hardened Neural Cockpit into your Rig [NEURAL FORTRESS]",
        "effectText": "You choose personal machine invulnerability. The military-grade neural firewall and hardened cockpit interface will make your mind and truck permanently impervious to all electronic and psychic interference.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1,
            "Neuroplague Chosen Path": 1,
            "Tech Literacy": 15
          }
        }
      },
      {
        "id": "opt_neuro10_choose_guardian",
        "label": "Path 2: Found the Highway Guardian Medical Corps [ROAD GUARDIAN]",
        "effectText": "You choose community protection. You and Dr. Vega will lead an elite medical convoy guild dedicated to inoculating and protecting all independent truckers across the wasteland.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1,
            "Neuroplague Chosen Path": 2,
            "Street Cred": 25
          }
        }
      },
      {
        "id": "opt_neuro10_choose_apex",
        "label": "Path 3: Symbiotically Weaponize the Neuro-Pathogen for yourself [APEX SYNAPSE]",
        "effectText": "You choose terrifying evolutionary power. You fuse the aggressive viral code with your cyberdeck, granting blazing neural reflexes and combat speed.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1,
            "Neuroplague Chosen Path": 3,
            "Cyberware Level": 10
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_11_airdrop_blockade",
    "title": "The Corporate Cordon",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 10
      },
      "maxQualities": {
        "Neuroplague Stage": 10
      }
    },
    "text": "Aegis Bio-Security gunships deploy automated minefields across the mountain pass to contain you and Dr. Vega. They refuse to let the vaccine source code leave the sector.",
    "options": [
      {
        "id": "opt_neuro11_hack_gunship_datalink",
        "label": "Transmit the Cerebro-09 reboot pulse into the gunship avionics [ROLL +CYBER]",
        "effectText": "You beam the viral reboot pulse directly into their flight computers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Full avionics lockdown! The gunships abort their attack and auto-land in the snowdrifts!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Gunships hesitate, opening an escape corridor through the pass.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Countermeasures deflect the signal; gunships strafe the road with rockets.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro11_slalom_minefield",
        "label": "Slalom through the automated minefield at breakneck speed [ROLL +EDGE]",
        "effectText": "You thread your tires precisely between proximity triggers.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless precision driving! You clear the minefield without detonating a single charge!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the field, though shrapnel scores your rear bumper.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A mine detonates near your trailer, tossing the truck violently.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro11_smoke_cover",
        "label": "Deploy dense white phosphorus smoke and push through on momentum",
        "effectText": "Smoke conceals your convoy as you roar past the checkpoint.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_12_chassis_neural_weave",
    "title": "The Synaptic Chassis Weave",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 11
      },
      "maxQualities": {
        "Neuroplague Stage": 11
      }
    },
    "text": "Dr. Vega completes the final wiring of the neural firewall through your truck's electrical harness. The hauler now responds to your thoughts instantaneously—steering, braking, and gear-shifting at the speed of thought.",
    "options": [
      {
        "id": "opt_neuro12_test_synaptic_latency",
        "label": "Test reflex latency on a winding mountain road [ROLL +EDGE]",
        "effectText": "You take sharp hairpin curves guided solely by neural intent.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Zero millisecond latency! The 35-ton rig dances along the asphalt like an extension of your own body!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Response times improve by 300%, handling smoothly.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sudden neural twitch jerks the steering wheel slightly.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro12_reinforce_cockpit_armor",
        "label": "Weld lead-composite anti-radiation plates around the driver cabin [ROLL +GRIT]",
        "effectText": "You mount heavy ballistic shielding to encase your neural throne.",
        "statRoll": "grit",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Impenetrable cockpit bunker! The driver seat is impervious to armor-piercing bullets and electronic pulses!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cockpit protection is solidly installed.",
          "rewards": {
            "hullIntegrity": 18,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The heavy plates add slight weight to the front suspension.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro12_calibrate_seat",
        "label": "Adjust ergonomic racing harnesses and lumbar supports",
        "effectText": "Comfort and safety ensure supreme endurance on long hauls.",
        "rewards": {
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_13_the_final_outbreak",
    "title": "The City of Shadows",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 12
      },
      "maxQualities": {
        "Neuroplague Stage": 12
      }
    },
    "text": "You reach the outskirts of the primary metropolitan enclave. The final horde of infected combat-cyborgs blocks the highway bridge, their weapons trained on your headlights.",
    "options": [
      {
        "id": "opt_neuro13_broadcast_cure_pulse",
        "label": "Blast the vaccine firmware at maximum megawatt output from your roof antenna [ROLL +CYBER]",
        "effectText": "You fire the master vaccine pulse into the crowd.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Miraculous salvation! The cybernetic virus dissolves in thousands of implants; the cyborgs drop their weapons in awe and tears!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 12,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The vaccine cures the frontline fighters, opening a clear lane.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Some corrupted cyborgs resist, firing sporadic shots before collapsing.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro13_ram_barricade",
        "label": "Put the hauler in gear and smash through the burning wreckage [ROLL +GRIT]",
        "effectText": "You put your foot down and bulldoze through the scrap barrier.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Colossal kinetic breakthrough! Your reinforced prow blasts the barricade into matchsticks!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 14
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, taking scratches along your fenders.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Impact severely dents your bull-bar before you break clear.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_neuro13_smoke_and_speed",
        "label": "Deploy chemical smoke and slip through the side access lanes",
        "effectText": "A stealthy flanking run carries you into the enclave safely.",
        "rewards": {
          "hullIntegrity": -8,
          "qualities": {
            "Neuroplague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_14_synaptic_climax",
    "title": "The Dawn of the Mind [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 13
      },
      "maxQualities": {
        "Neuroplague Stage": 13
      }
    },
    "text": "The Cerebro-09 epidemic has been broken! Dawn rises over the city skyline as you complete your chosen destiny and seal the legacy of the Neuro-Plague.",
    "options": [
      {
        "id": "opt_neuro14_lock_neural_fortress",
        "label": "Lock the Hardened Neural Cockpit permanently into your rig [FORTRESS PATH] [ROLL +CYBER]",
        "effectText": "You weld the final neural shielding plates, crowned the Iron Mind of the Highway.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total cognitive transcendence! Your mind and machine are an impenetrable fortress on continental roads!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 25,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The neural cockpit locks in permanently with complete stability.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Tech Literacy": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: A minor electrical spark sings a dash relay before balancing.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_neuro14_found_guardians",
        "label": "Establish the Highway Guardian Medical Corps [GUARDIAN PATH] [ROLL +COOL]",
        "effectText": "You and Dr. Vega inaugurate the free medical convoy network.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Eternal wasteland reverence! Tens of thousands of haulers salute your colors as the Savior of the Roads!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The Guardian Corps is established with joy and celebrations.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: The founding charter is signed with solemn vows.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_neuro14_unleash_apex",
        "label": "Unleash the Apex Synapse Viral Reflexes [APEX PATH] [ROLL +EDGE]",
        "effectText": "You assimilate the aggressive viral code into your neural cyberdeck.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Terrifying predatory evolution! Your highway reflexes achieve god-tier speeds, unmatched by any driver in history!",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 25,
              "Cyberware Level": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Reflexes sharpen to razor limits, pulsing with cybernetic power.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "miss": {
          "effectText": "MISS: A surge of adrenaline rattles your heart before stabilizing.",
          "rewards": {
            "qualities": {
              "Neuroplague Stage": 1
            }
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_neuroplague_15_finale",
    "title": "The Master of the Synapse [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "wasteland_hub",
    "layer": "archetype",
    "repeatable": false,
    "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
      "qualities": {
        "Neuroplague Stage": 14
      },
      "maxQualities": {
        "Neuroplague Stage": 14
      }
    },
    "text": "The saga of the Neuro-Plague is concluded. Your rig has been permanently modified with revolutionary neural interface engineering.",
    "options": [
      {
        "id": "opt_neuro15_ending_fortress",
        "label": "Command the Highway as the Neural Fortress [ENDING 1: NEURAL FORTRESS]",
        "effectText": "Equipped with the Hardened Neural Cockpit Interface, your hauler commands +25 Max Hull, +15% Speed rating, and permanent +1 CYBER and +1 GRIT.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 3
          },
          "qualities": {
            "Neuroplague Stage": 80,
            "Tech Literacy": 30,
            "Street Cred": 25,
            "Heat": -40
          },
          "stats": {
            "cyber": 1,
            "grit": 1
          },
          "rig": {
            "maxHull": 25,
            "speedRating": 0.15,
            "name": "Iron Nomad - Neural Fortress"
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_neuro15_ending_guardian",
        "label": "Lead the Medical Fleets as the Road Guardian [ENDING 2: ROAD GUARDIAN]",
        "effectText": "Revered as the protector of all wasteland drivers, your rig is armored with heavy composite plating and emergency medical life-support systems.",
        "rewards": {
          "credits": 16000,
          "hullIntegrity": 100,
          "cargo": {
            "cryo": 3,
            "chips": 3
          },
          "qualities": {
            "Neuroplague Stage": 80,
            "Street Cred": 35
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxHull": 35,
            "speedRating": 0.12,
            "name": "Iron Nomad - Road Guardian"
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_neuro15_ending_apex",
        "label": "Rule with Supreme Velocity as the Apex Synapse [ENDING 3: APEX SYNAPSE]",
        "effectText": "Fueled by predatory viral reflexes, your hauler achieves an astonishing +25% permanent transit speed and unmatched evasive agility.",
        "rewards": {
          "credits": 20000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "chips": 4
          },
          "qualities": {
            "Neuroplague Stage": 80,
            "Street Cred": 25,
            "Cyberware Level": 10
          },
          "stats": {
            "cyber": 1,
            "edge": 1
          },
          "rig": {
            "speedRating": 0.25,
            "name": "Iron Nomad - Apex Synapse"
          }
        },
        "reqs": {
      "archetypes": ["wasteland_hub", "freehold_outpost"],
          "qualities": {
            "Neuroplague Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_neuro15_farewell",
        "label": "Collect final courier fee and depart under the bright city lights",
        "effectText": "With the epidemic cured, you merge back onto open asphalt.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Neuroplague Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cyber": 1
          },
          "rig": {
            "maxHull": 15
          }
        }
      }
    ]
  }
];
