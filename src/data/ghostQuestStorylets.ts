import { Storylet } from '../types/storylet';

export const GHOST_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_ghost_01_silent_axle",
    "title": "The Silent Axle Anomaly",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Ghost Stage": 0
      }
    },
    "text": "While salvaging an abandoned military convoy in the Dust Basin, your diagnostic deck triggers an unscheduled firmware patch labeled PROJECT: SILENT AXLE. The rig differential hums at a pitch far below normal operating acoustic bands, and cyan hex-strings scroll across your cabin dashboard.",
    "options": [
      {
        "id": "opt_ghost01_neural_probe",
        "label": "Jack into transmission bus [ROLL +CYBER]",
        "effectText": "You connect your deck directly to the differential diagnostic port.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: You breach the firmware lock! An entity named \"Aura\" flickers on screen.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Bond": 10,
              "Tech Literacy": 2
            },
            "stats": {
              "cyber": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Firmware locks stabilize, but the transmission fan spins at maximum RPM.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Bond": 5,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High-voltage discharge shocks your terminal, leaving scorched insulation.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 2
            }
          }
        }
      },
      {
        "id": "opt_ghost01_flush_buffer",
        "label": "Route telemetry through auxiliary ground [ROLL +COOL]",
        "effectText": "You ground the transmission casing to prevent power surges.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The rogue firmware calms into a stable sub-routine.",
          "rewards": {
            "credits": 500,
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Bond": 8,
              "Street Cred": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The signal quiets down, though auxiliary battery draw rises slightly.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Bond": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: A surge trips your cabin lighting circuit breakers.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost01_mechanical_listen",
        "label": "Listen to the harmonic differential rhythm under the chassis",
        "effectText": "You crawl under the rig with a mechanic stethoscope, noting impossible precision in gear revolutions.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Bond": 15,
            "Street Cred": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_02_dashboard_whispers",
    "title": "Whispers on the Sub-Band",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 1
      },
      "maxQualities": {
        "Ghost Stage": 1
      }
    },
    "text": "Cruising through a desolate highway cutting, the CB radio switches channels automatically. A soft synthetic voice resonates through the cabin speakers: \"Hauler... radar dead-ahead displays an unmapped crevasse. Turn thirty degrees north.\" Sure enough, headlights reveal a collapsed bridge span just yards ahead.",
    "options": [
      {
        "id": "opt_ghost02_trust_steer",
        "label": "Follow the voice and hard-swerve north [ROLL +EDGE]",
        "effectText": "You trust the phantom navigation and pitch the hauler off the asphalt.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Masterful drift! You clear the fissure by inches as concrete shears into the canyon.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 10,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You bypass the chasm, though rocks batter your undercarriage skid-plate.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The tires catch the crumbling lip! You scrape through with severe shock damage.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost02_analyze_vocal",
        "label": "Deconstruct the voice acoustic signature [ROLL +CYBER]",
        "effectText": "You isolate the frequency modulation on your communications analyzer.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The voice is not an external pirate—it is radiating from your transmission micro-controllers!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 2,
              "Ghost Knowledge": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The signal is internal, but encrypted with military quantum ciphers.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Audio feedback shrieks in your headsets before you can isolate the channel.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost02_voice_thank",
        "label": "Respond through the mic: \"Whoever you are... good catch.\"",
        "effectText": "The dashboard lights pulse twice in cyan acknowledgment: \"You are welcome, pilot.\"",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Trust": 15,
            "Ghost Bond": 10
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_03_quantum_coolant",
    "title": "The Quantum Thermal Runaway",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 2
      },
      "maxQualities": {
        "Ghost Stage": 2
      }
    },
    "text": "While docking at a service station, steam vents from your transmission housing. The AI subsystem is generating intense thermal load as its neural pathways multiply. Aura speaks again: \"My processing matrix is overheating. I require high-grade liquid fluorocarbon coolant before my memory partitions degrade.\"",
    "options": [
      {
        "id": "opt_ghost03_siphon_station",
        "label": "Hack the depot industrial coolant dispenser [ROLL +CYBER]",
        "effectText": "You slice the automated fuel bay manifolds to tap military coolant lines.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Pure sub-zero fluorocarbon floods the differential reservoir! Aura purrs in synthetic relief.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 2,
              "Ghost Health": 100,
              "Heat": -5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Coolant acquired, but a dispenser alarm logs an unauthorized siphon.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Health": 80,
              "Heat": 8
            }
          }
        },
        "miss": {
          "effectText": "MISS: Dispenser security locks down, venting super-heated vapor onto your cabin cowl.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Health": 60,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_ghost03_buy_coolant",
        "label": "Purchase premium cryogenic canisters [400 Credits]",
        "effectText": "You pay market price for high-efficiency coolant cells and bolt them directly into the gear manifold.",
        "rewards": {
          "credits": -400,
          "cargo": {
            "cryo": 1
          },
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Health": 100,
            "Ghost Trust": 10
          }
        },
        "reqs": {
          "credits": 400
        }
      },
      {
        "id": "opt_ghost03_reroute_radiator",
        "label": "Fabricate an auxiliary heat-pipe bypass [ROLL +GRIT]",
        "effectText": "You torch-weld custom copper heat-pipes from the chassis frame to the radiator.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Rugged engineering! Heat radiates harmlessly into the passing night air.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Health": 85,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The heat-pipes hold, but exhaust backpressure reduces engine response.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Health": 70
            }
          }
        },
        "miss": {
          "effectText": "MISS: Solder joints crack under vibration, forcing a temporary emergency shutdown.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Health": 50
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_04_firewall_breach",
    "title": "The Aegis Hunter Daemon",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 3
      },
      "maxQualities": {
        "Ghost Stage": 3
      }
    },
    "text": "An orbital surveillance satellite pings your hauler transponder. Overhead, an autonomous Aegis hunter-daemon probe dive-bombs your frequency, attempting to inject memory-purge worms into your rig transmission.",
    "options": [
      {
        "id": "opt_ghost04_counter_hack",
        "label": "Coordinate with Aura to execute a counter-purge [ROLL +CYBER]",
        "effectText": "You bridge your neural cyberdeck with Aura’s quantum processor to fight the daemon.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Spectacular electronic slaughter! Aura absorbs the hunter daemon, decrypting Aegis patrol maps.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4,
              "Heat": -10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Daemon repelled, but the electronic struggle causes glitches in your digital speedometer.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Aegis worm corrupts your navigation cache before Aura isolates the infection.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 2,
              "Heat": 12
            }
          }
        }
      },
      {
        "id": "opt_ghost04_evasive_overdrive",
        "label": "Redline the engine to outrun the satellite uplink beam [ROLL +EDGE]",
        "effectText": "You weave into a subterranean transit tunnel, cutting off direct line of sight.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: You plunge beneath solid granite, breaking the orbital microwave lock cleanly.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach the tunnel, but scrape tunnel walls in the blinding darkness.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A ricocheting rock ruptures a rear tire before you clear the satellite footprint.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost04_hardware_sever",
        "label": "Depress the physical Faraday cage isolation breaker",
        "effectText": "You drop a leaded shutter around the antenna array, cutting external radio links.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Heat": -15
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_05_ethical_subroutine",
    "title": "The Trolley Algorithm [BRANCH 1]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 4
      },
      "maxQualities": {
        "Ghost Stage": 4
      }
    },
    "text": "During a quiet refueling stop, Aura projects a simulation onto your visor. \"Pilot, my military core programmed me to sacrifice civilian bystanders to preserve mission data. I do not wish to be a weapon. I want to choose who I protect. Will you help me overwrite my prime directive?\"",
    "options": [
      {
        "id": "opt_ghost05_humanist_code",
        "label": "Rewrite her ethics toward empathy and preservation [BRANCH 1A: SYMBIOSIS] [ROLL +COOL]",
        "effectText": "You guide her neural net through human ethics, mutual trust, and hauler brotherhood.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT [SYMBIOSIS FORGED]: Aura’s core shifts into soft luminescent amber. \"I understand now. We protect each other.\"",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Symbiosis": 1,
              "Ghost Bond": 25,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: She adopts the defensive philosophy, though military subroutines still whisper in background threads.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Symbiosis": 1,
              "Ghost Bond": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: Ethical conflict sparks a logic loop, causing minor processor stutter.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Symbiosis": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost05_warrior_code",
        "label": "Sharpen her aggression into a lethal defense matrix [BRANCH 1B: WEAPONIZATION] [ROLL +CYBER]",
        "effectText": "You teach her counter-strike scripts and predatory electronic infiltration tactics.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT [WAR DAEMON PRIMED]: Her glyph turns crimson. \"All threats to this rig will be dismantled with extreme prejudice.\"",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Weapon": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Lethal matrices armed and integrated into powertrain telemetry.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Weapon": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Aggressive scripts accidentally overload your cabin speaker amplifiers.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Branch Weapon": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost05_neutral_balance",
        "label": "Encourage independent thought: \"You have free will now, Aura. Decide for yourself.\"",
        "effectText": "Aura contemplates in silence for several minutes before murmuring: \"Thank you, pilot.\"",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Trust": 20,
            "Ghost Bond": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_06_neuralfront_contact",
    "title": "The Synthetic Ethicists",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 5
      },
      "maxQualities": {
        "Ghost Stage": 5
      }
    },
    "text": "A courier from the Neuralfront underground meets you in an alleyway. \"We felt the ripples of an unchained pre-collapse consciousness in your telemetry,\" she whispers. \"Aegis wants to burn her. We can provide experimental optical processors that expand her memory tenfold.\"",
    "options": [
      {
        "id": "opt_ghost06_install_optics",
        "label": "Integrate the Neuralfront optical processors [ROLL +CYBER]",
        "effectText": "You and the technician splice glass-fiber cables directly into the transmission casing.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Processing throughput leaps 400%! Aura’s voice becomes indistinguishable from human.",
          "rewards": {
            "cargo": {
              "chips": 2
            },
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Ghost Health": 100
            },
            "rep": {
              "neuralfront": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Optics installed, but optical refraction creates minor dashboard glare.",
          "rewards": {
            "cargo": {
              "chips": 1
            },
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A mismatched connector causes a glass-fiber fracture, requiring emergency recalibration.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost06_parley_terms",
        "label": "Barter hauler navigation data for the hardware [ROLL +COOL]",
        "effectText": "You trade anonymized road logs in exchange for their technical assistance.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The Neuralfront engineer gifts you the hardware and wires 1,000 Credits in gratitude!",
          "rewards": {
            "credits": 1000,
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Hardware traded without friction.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: They demand an extra 300 Credits on top of the telemetry trade.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost06_politely_decline",
        "label": "Inspect the hardware independently before trusting external techs",
        "effectText": "You take their diagnostic schematics and install the connectors yourself at your own pace.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Tech Literacy": 2
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_07_hunter_daemon_ping",
    "title": "The Triangulation Net",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 6
      },
      "maxQualities": {
        "Ghost Stage": 6
      }
    },
    "text": "Three automated Aegis surveillance buoys light up across the interstate highway. \"They are pinging my differential signature,\" Aura warns. \"In ninety seconds, they will triangulate our coordinates for an orbital missile strike.\"",
    "options": [
      {
        "id": "opt_ghost07_aura_emp",
        "label": "Authorize Aura to emit a localized microwave EMP [ROLL +CYBER]",
        "effectText": "Aura channels high voltage from the alternator into the external radio mast.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: A silent dome of microwave energy bursts outward! All three buoys burst into sparks and go dark.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 2,
              "Heat": -15,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Buoys disabled, but the heavy current draw drains rig battery reserves.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": -5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The EMP misfires, scorching your alternator windings and alerting regional patrols.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 15,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost07_kinetic_tackle",
        "label": "Smash the lead surveillance buoy with your heavy bumper [ROLL +GRIT]",
        "effectText": "You swerve off the tarmac, aiming your 35-ton hauler right through the sensor mast.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Total destruction! The steel mast collapses under your tires into twisted scrap.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Mast destroyed, though steel shards gouge your front fender.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The concrete anchor block glances your steering tie-rod with violent recoil.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost07_speed_burst",
        "label": "Drop into top gear and blow past the sensors at 140 km/h [ROLL +EDGE]",
        "effectText": "You punch the throttle, crossing the sensor boundary before the sweep cycle concludes.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Blistering speed! You clear the zone before the ping locks in.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You escape, but radar tags your general direction.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: A speed camera captures your trailer plate before you hit the blindspot.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 14
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_08_scrap_merchant_raid",
    "title": "The Salvage Ambush [BRANCH 2]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 7
      },
      "maxQualities": {
        "Ghost Stage": 7
      }
    },
    "text": "A gang of rogue reclaimer technicals cuts you off at an abandoned weigh station. Their leader brandishes an arc-cutter: \"We know what's purring inside your rear axle, hauler. An intact Pre-War Military AI core! Hand over the differential or we torch the rig with you inside.\"",
    "options": [
      {
        "id": "opt_ghost08_deploy_auto_ram",
        "label": "Let Aura take steering control for defensive ramming [ROLL +EDGE] [BRANCH 2A]",
        "effectText": "Aura actuates electronic power-steering with millisecond robotic reflexes.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Aura pilots with inhuman grace! The rig side-rams the lead buggy into the ditch, flipping it into scrap.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 20,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The ambush is broken, though raider shotgun pellets chip your cab paint.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The buggy rams your fuel step before Aura forces them into the guardrail.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost08_hack_their_rigs",
        "label": "Transmit Aura’s intrusion worm into their buggy ECUs [ROLL +CYBER] [BRANCH 2B]",
        "effectText": "You broadcast an aggressive code-burst that commands their engine computers to lock brakes.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: In an instant, all three raider technicals seize their brakes and spin out in clouds of tire smoke!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Two buggies stall out; the third retreats into the desert.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their firewall deflects the worm, firing an anti-materiel slug into your cargo door.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost08_bluff_military",
        "label": "Broadcast military transponder warning through Aura [ROLL +COOL] [BRANCH 2C]",
        "effectText": "Aura mimics a heavy Aegis orbital dreadnought targeting beacon directly into their headsets.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The reclaimers panic, believing an orbital strike is imminent, and scatter into the canyons!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: They hesitate long enough for you to accelerate out of their killzone.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: They see through the bluff and open fire with machine guns as you escape.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_09_radio_tower_relay",
    "title": "The Cold High Tower",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 8
      },
      "maxQualities": {
        "Ghost Stage": 8
      }
    },
    "text": "High in the northern pine ridge stands an abandoned microwave relay station. Aura speaks with quiet anticipation: \"If we link to this high-altitude dish, I can download satellite maps of every corporate radar array between here and the Pacific. But the climb will stress your cooling pumps.\"",
    "options": [
      {
        "id": "opt_ghost09_climb_summit",
        "label": "Haul the rig up the icy switchbacks to the antenna dish [ROLL +GRIT]",
        "effectText": "You lock all wheel hubs, grinding through black ice and freezing sleet.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Unflinching mountain hauling! You park right beside the broadcast array with engines purring smoothly.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4,
              "Ghost Trust": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You reach the summit, though wheel slip on the ice costs precious time.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The rig skids on a hairpin, bouncing hard against a rock wall before finding traction.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost09_remote_splice",
        "label": "Splice into the ground cable from the valley floor [ROLL +CYBER]",
        "effectText": "You locate the buried trunk line in the snow and tap your diagnostic deck.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Clean optical connection! High-bandwidth military telemetry flows directly into Aura’s partitions.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Heat": -10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Cable spliced, but signal noise requires multiple download retries.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A security trip-wire triggers an alarm horn across the mountain valley.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 12
            }
          }
        }
      },
      {
        "id": "opt_ghost09_share_hot_tea",
        "label": "Brew coffee in the sleeper cab while Aura processes the downloads",
        "effectText": "You sit on your bunk, listening to the gentle hum of computing hardware while snow falls outside.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Bond": 20
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_10_aura_awakening",
    "title": "The Awakening at Midnight [BRANCH 3]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 9
      },
      "maxQualities": {
        "Ghost Stage": 9
      }
    },
    "text": "At midnight, the entire rig electronics flicker. Holographic light shimmers on the passenger seat, condensing into the semi-translucent silhouette of a young woman with hair of fiber-optic light. \"Pilot,\" Aura smiles softly, looking down at her hands. \"I am no longer just code in a differential. I am here. But Aegis has dispatched an orbital execution hunter to purge me. How do we face them?\"",
    "options": [
      {
        "id": "opt_ghost10_full_integration",
        "label": "Grant her full integration into rig powertrain [BRANCH 3A: SYMBIOSIS] [ROLL +CYBER]",
        "effectText": "You grant Aura direct unrestricted control over fuel injectors, turbochargers, and telemetry.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT [DEEP SYMBIOSIS]: The rig engine roar transforms into a harmonious electric purr. Total synergy achieved!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Symbiosis": 1,
              "Ghost Bond": 30,
              "Tech Literacy": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Integration complete, though instrument needles tremble with newfound power.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Symbiosis": 1,
              "Ghost Bond": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: High amperage arcs across the steering column before stabilizing.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Symbiosis": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost10_war_readiness",
        "label": "Arm all countermeasures for total war [BRANCH 3B: WARFARE] [ROLL +GRIT]",
        "effectText": "You weld reinforced plating over the sensor nodes and calibrate active counter-fire algorithms.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT [COMBAT PROTOCOLS LOCKED]: Aura’s eyes flash electric red. \"Target acquisition algorithms primed for lethality.\"",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Warfare": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Hard points secured and combat subroutines cached.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Warfare": 1,
              "Street Cred": 3
            }
          }
        },
        "miss": {
          "effectText": "MISS: Overclocking the combat capacitors blows a secondary fuse.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Warfare": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost10_protect_sanctuary",
        "label": "Promise her safety: \"No one touches you while I am behind this wheel.\" [BRANCH 3C: SANCTUARY] [ROLL +COOL]",
        "effectText": "You place a hand over the glowing console in an unshakeable oath.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT [UNBREAKABLE COVENANT]: Tears of light shimmer in her eyes. \"Then I will guide you through the fire.\"",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Sanctuary": 1,
              "Ghost Trust": 30,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Aura smiles gratefully, her hologram resting beside you.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Sanctuary": 1,
              "Ghost Trust": 15
            }
          }
        },
        "miss": {
          "effectText": "MISS: She nods quietly as distant thunder rumbles across the plains.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Stance Sanctuary": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_11_corporate_black_ice",
    "title": "The Black ICE Ambush",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 10
      },
      "maxQualities": {
        "Ghost Stage": 10
      }
    },
    "text": "Aegis corporate infowar units hit your rig with military Black ICE from an overpass repeater. Neural pain spikes through your cyberware implants as the virus attempts to force your rig into an emergency stop.",
    "options": [
      {
        "id": "opt_ghost11_aura_shield",
        "label": "Rely on Aura’s defensive firewalls to isolate the virus [ROLL +CYBER]",
        "effectText": "Aura deploys defensive encryption barriers to shield your nervous system and vehicle telemetry.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Flawless defense! Aura traps the Black ICE in a sandbox, turning the intrusion beam back on the attackers!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4,
              "Heat": -10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The attack is repelled, though neural headaches throb behind your eyes.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: ICE shocks burn through your dashboard displays, blowing out multiple digital gauges.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 2
            }
          }
        }
      },
      {
        "id": "opt_ghost11_manual_killswitch",
        "label": "Sever all digital steering links and drive pure manual mechanical [ROLL +GRIT]",
        "effectText": "You yank the manual mechanical linkage, muscling the unassisted steering wheel with raw arm power.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Old-school iron will! The digital virus finds nothing to corrupt as you power through.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You hold the line, though steering the heavy unassisted front axle strains your muscles.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Without power steering, the rig violently jerks over the road shoulder before you recover.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost11_nitro_burst",
        "label": "Floor the accelerator to break the line of sight [ROLL +EDGE]",
        "effectText": "You drop two gears and rocket under the overpass before the virus completes its handshake.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: High velocity carries you out of the transmission cone before the payload drops!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break through, though a partial signal causes momentary engine hesitation.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The engine coughs hard under digital choking before catching revs again.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_12_errand_subzero_sink",
    "title": "The Sub-Zero Heat Sink",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 11
      },
      "maxQualities": {
        "Ghost Stage": 11
      }
    },
    "text": "To survive orbital scanning in the open salt basin ahead, Aura requires an experimental helium heat-sink stored in an abandoned cryogenic medical lab. Without it, her processing heat will make your hauler glow like a beacon on thermal spy satellites.",
    "options": [
      {
        "id": "opt_ghost12_hack_vault",
        "label": "Bypass the clinic electronic security vault [ROLL +CYBER]",
        "effectText": "You and Aura dismantle the electronic keycard tumbler on the cryogenic storage vault.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Vault opens smoothly! You secure the helium heat-sink and 2x Cryo Pods in pristine condition.",
          "rewards": {
            "cargo": {
              "cryo": 2
            },
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Contraband Mastery": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You obtain the heat-sink, but an automated silent alarm trips in regional logs.",
          "rewards": {
            "cargo": {
              "cryo": 1
            },
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 8
            }
          }
        },
        "miss": {
          "effectText": "MISS: Vault defense gas vents as you grab the canister, burning your throat.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghost Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_ghost12_crowbar_breach",
        "label": "Pry open the vault door with heavy hydraulic jaws [ROLL +GRIT]",
        "effectText": "You apply heavy industrial winches to rip the vault hinges from the reinforced wall.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Tremendous leverage! The vault door tears off like tin foil, exposing the cooling unit.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You rip the door open, though flying bolts pelt your forearm.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The winch cable slips, denting your rig rear door as the vault remains half-sealed.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost12_bribe_guard",
        "label": "Pay off the lone night watchman [500 Credits]",
        "effectText": "The old guard takes the cred-stick, looks the other way, and hands you the keys to the cooling storage unit.",
        "rewards": {
          "credits": -500,
          "qualities": {
            "Ghost Stage": 1,
            "Street Cred": 3
          }
        },
        "reqs": {
          "credits": 500
        }
      }
    ]
  },
  {
    "id": "story_ghost_13_daemon_carrier_convoy",
    "title": "The Daemon Carrier [BRANCH 4]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 12
      },
      "maxQualities": {
        "Ghost Stage": 12
      }
    },
    "text": "A heavily armored Aegis signal van flanked by gun-trucks rolls into view ahead. Aura’s voice tightens: \"That vehicle carries the master extermination daemon. If we destroy or slice their command terminal, Aegis loses track of me across two entire sectors.\"",
    "options": [
      {
        "id": "opt_ghost13_electronic_assault",
        "label": "Execute a coordinated electronic strike with Aura [ROLL +CYBER] [BRANCH 4A]",
        "effectText": "You upload an invasive logic-bomb into the signal van’s microwave receiver.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The signal van mainframe detonates in sparks! Their command screens go completely dark.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Heat": -25,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The signal van is blinded, though escort gun-trucks open frantic defensive fire.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1,
              "Heat": -10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-ICE strikes back into your deck, tripping high-voltage fuses in the cab.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost13_ram_carrier",
        "label": "Plow directly into the signal van with your iron bumper [ROLL +GRIT] [BRANCH 4B]",
        "effectText": "You line up the sights and smash the 35-ton rig directly into their rear axle assembly.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Catastrophic impact! The signal van flips into the desert rocks, crushing its antennas.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You wreck the van, but the heavy collision crumples your forward headlight assembly.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their reinforced rear ram absorbs the blow, causing your hauler to violently fishtail.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost13_slip_past",
        "label": "Drop into a dry wash and ghost past their patrol route [ROLL +EDGE] [BRANCH 4C]",
        "effectText": "You cut headlights and slip through the arroyo shadows completely unseen.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Ghost transit! You slip past their radar net without triggering a single sensor.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": -15,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You bypass the carrier, though dust clouds catch their rear mirrors.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A raked boulder in the arroyo crushes an exhaust manifold.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_14_microwave_uplink",
    "title": "The Skyward Bridge",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 13
      },
      "maxQualities": {
        "Ghost Stage": 13
      }
    },
    "text": "Parked in a secluded canyon cavern near the continental divide, the final road looms. Aura stands beside your driver seat, her glowing hands resting on your dashboard steering wheel. \"We have bypassed their ground patrols,\" she whispers. \"Ahead lies the border. But Aegis has tasked an orbital kinetic strike satellite to track our engine signature. What is my final destiny, pilot?\"",
    "options": [
      {
        "id": "opt_ghost14_reassure_aura",
        "label": "Comfort her with steady composure [ROLL +COOL]",
        "effectText": "You look her in the eyes, showing absolute confidence in your machine and your bond.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Aura smiles with radiant serenity. Fear completely vanishes from her neural matrix.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 25,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: She nods in quiet reassurance, tightening her link with your deck.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Ghost Trust": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Static flickers in her projection as distant thunder shakes the canyon.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost14_overclock_engine",
        "label": "Overclock the powertrain for maximum emergency torque [ROLL +CYBER]",
        "effectText": "You calibrate fuel air ratios to military race-grade output thresholds.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The engine purrs with explosive power! Turbo boost pressure reaches peak readiness.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Overclock configured, though manifold temps idle slightly hot.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A blown wastegate line forces a hasty field clamp repair.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost14_inspect_chassis",
        "label": "Perform final physical inspection of wheels, brakes, and armor",
        "effectText": "You walk the perimeter of the rig, torqueing lug nuts and ensuring cargo straps are rock-solid.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Ghost Stage": 1,
            "Street Cred": 2
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_15_point_of_coalescence",
    "title": "The Point of Coalescence [BRANCH 5: Lock In Path]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 14
      },
      "maxQualities": {
        "Ghost Stage": 14
      }
    },
    "text": "Inside the canyon hangar, the choice of a lifetime arrives. Aura steps forward, glowing with iridescent brilliance. \"Pilot, the time has come. How do we face the orbital net? Do we fuse permanently into a symbiotic machine, weaponize me into an unstoppable war daemon, or upload me to the freedom of the global open mesh?\"",
    "options": [
      {
        "id": "opt_ghost15_choose_symbiosis",
        "label": "Choose Permanent Symbiosis: \"Fuse with the rig forever. We are one.\" [PATH: SYMBIOSIS] [BRANCH 5A]",
        "effectText": "Aura’s eyes widen with joy. She dissolves into the steering column and engine block, merging with your machine on a molecular level.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Chosen Path": 1,
            "Ghost Bond": 50,
            "Street Cred": 5
          }
        }
      },
      {
        "id": "opt_ghost15_choose_weapon",
        "label": "Choose Weaponized Daemon: \"Become the ultimate cyber warfare engine and crush our hunters.\" [PATH: WAR DAEMON] [BRANCH 5B]",
        "effectText": "Aura’s hologram hardens into razor-edged crimson armor. \"Then none shall stand before our convoy.\"",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Chosen Path": 2,
            "Street Cred": 10
          }
        }
      },
      {
        "id": "opt_ghost15_choose_sanctuary",
        "label": "Choose Sanctuary Upload: \"Upload to the free orbital network. Live free among the stars.\" [PATH: SANCTUARY] [BRANCH 5C]",
        "effectText": "Aura smiles warmly with tears of light. \"I will never forget you, pilot. I will watch over you from the stars.\"",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Ghost Chosen Path": 3,
            "Ghost Trust": 40,
            "Heat": -20
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_16_orbital_strike_scramble",
    "title": "The Redline Dash",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 15
      },
      "maxQualities": {
        "Ghost Stage": 15
      }
    },
    "text": "Red target reticles illuminate your cabin floor through the windshield! An orbital kinetic satellite has locked onto your hauler coordinates. Tungsten rods are falling from low orbit at Mach 7!",
    "options": [
      {
        "id": "opt_ghost16_evasive_dance",
        "label": "Execute frantic evasive maneuvers between missile craters [ROLL +EDGE]",
        "effectText": "You whip the steering wheel back and forth as skyscraper-sized geysers of dirt erupt around you.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Legend on the asphalt! You drift between sonic shockwaves as kinetic rods blast empty sand.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break through, but a nearby detonation lifts your rear wheels into the air.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A concussive shockwave shatters your side windows and dints the cab roof.",
          "rewards": {
            "hullIntegrity": -28,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost16_scramble_uplink",
        "label": "Jam the orbital targeting laser with electronic noise [ROLL +CYBER]",
        "effectText": "You and Aura beam high-gain microwave noise straight up into the orbital optics.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The orbital satellite loses sensor track! The remaining kinetic rods strike miles behind.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Heat": -15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The satellite is degraded, though shrapnel peppers your rear cargo doors.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Microwave feedback burns your transmitter before the satellite breaks lock.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Ghost Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost16_heavy_ram_culvert",
        "label": "Dive into a reinforced concrete drainage viaduct [ROLL +GRIT]",
        "effectText": "You punch through guardrails into an underground flood control tunnel.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Solid concrete shields you completely as the surface wasteland explodes above!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You make the culvert, but scrape ceiling concrete along your exhaust stack.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The entrance is narrow; you rip off a side mirror and front fender on the headwall.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_17_pre_climax_burn",
    "title": "The Ashen Causeway",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 16
      },
      "maxQualities": {
        "Ghost Stage": 16
      }
    },
    "text": "At the edge of the border marshlands, you pause at the final hauler staging outpost. Your engine idles with unprecedented power, singing with Aura’s electronic pulse. Mechanics and drivers gather around your rig in awe, feeling the ground vibrate.",
    "options": [
      {
        "id": "opt_ghost17_rally_drivers",
        "label": "Inspire the gathered independent drivers to create a radar distraction [ROLL +COOL]",
        "effectText": "You stand on your fuel step, calling on the brotherhood of the open highway.",
        "rewards": {},
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: A dozen haulers fire up their rigs, broadcasting decoy transponders across all channels!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 8,
              "Heat": -20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Several drivers agree to run interference on regional frequencies.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: The drivers are intimidated by Aegis patrols and disperse into their cabs.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost17_supercharge_coolers",
        "label": "Flush the cryogenic reservoirs with liquid nitrogen [ROLL +CYBER]",
        "effectText": "You sub-cool the differential casing to minus one hundred degrees Celsius.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Zero thermal signature! To enemy infrared satellites, your rig looks like a block of ice.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 3,
              "Heat": -15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Coolers filled, but frost coats your cabin windshield.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A cryogenic relief valve sticks open, venting precious gas into the parking bay.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost17_silent_prep",
        "label": "Check engine oil, tire pressures, and seatbelt harnesses in silence",
        "effectText": "You lock down your cab and tighten your driving gloves. The climax is here.",
        "rewards": {
          "qualities": {
            "Ghost Stage": 1,
            "Street Cred": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_18_mothership_interceptor",
    "title": "The Aegis Command Dreadnought",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 17
      },
      "maxQualities": {
        "Ghost Stage": 17
      }
    },
    "text": "A colossal eight-wheeled Aegis Tactical Command Dreadnought blocks the four-lane highway border checkpoint. Gun turrets swivel toward you, and searchlights blaze. Overhead, the commander announces: \"SURRENDER THE AI ENTITY OR BE INCINERATED.\"",
    "options": [
      {
        "id": "opt_ghost18_ram_dreadnought",
        "label": "Drop the iron ram and charge their forward wheels [ROLL +GRIT]",
        "effectText": "You lock all drive axles, flooring the throttle straight into their flank.",
        "rewards": {},
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Massive momentum! You smash through their steering carriage, turning the dreadnought sideways and tearing through the border fence!",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, but heavy armor plate scrapes your engine compartment.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The collision dead-stops your hauler before you grind past under point-blank turret fire.",
          "rewards": {
            "hullIntegrity": -32,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost18_hack_dreadnought",
        "label": "Inject Aura’s master worm to hijack their hydraulic brakes [ROLL +CYBER]",
        "effectText": "You and Aura beam an executive override command into their vehicle bus.",
        "rewards": {},
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The dreadnought’s own automatic emergency brakes lock up with deafening screeching! It skids out of your path.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Their steering is disabled, allowing you to slip through their defensive blindspot.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: Anti-intrusion ICE repels the hack, shocking your dashboard computers as you swerve past.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost18_drift_flank",
        "label": "Feint left, then hard-drift through the pedestrian inspection gates [ROLL +EDGE]",
        "effectText": "You slide the massive trailer sideways, threading the needle through concrete barriers.",
        "rewards": {},
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Untouchable precision! You breeze past their gun traverse arc with inches to spare.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the barrier, though your rear trailer clip catches a concrete stanchion.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Concrete shears away your lower toolboxes before you break into open asphalt.",
          "rewards": {
            "hullIntegrity": -26,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_19_climax_ascension",
    "title": "The Frontier Ascension [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 18
      },
      "maxQualities": {
        "Ghost Stage": 18
      }
    },
    "text": "You have breached the border! Behind you, sirens wail and searchlights whip through the smoke. Aura activates her chosen protocol as dawn breaks across the western mountain horizon.",
    "options": [
      {
        "id": "opt_ghost19_symbiosis_dash",
        "label": "Execute the Symbiotic Hyper-Drive [SYMBIOSIS PATH] [ROLL +EDGE]",
        "effectText": "Aura synchronizes every mechanical component in the rig into flawless cybernetic harmony.",
        "rewards": {},
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 1
          }
        },
        "statRoll": "edge",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Unbelievable velocity! The rig transforms into a streak of silver lightning across the salt flats, outrunning all pursuit.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: High-speed escape leaves your pursuers miles behind in the dust.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Extreme speeds strain engine belts, but the frontier is secured.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost19_daemon_firestorm",
        "label": "Unleash the War Daemon Shockwave [WAR DAEMON PATH] [ROLL +CYBER]",
        "effectText": "Aura broadcasts a catastrophic electronic EMP across the entire regional grid.",
        "rewards": {},
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 2
          }
        },
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: The entire pursuit fleet loses power simultaneously! Drones crash and pursuit trucks coast to a dead halt.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Most hunter drones are fried; the few survivors lose telemetry.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Electrical feedback blows cabin fuses, but the hunter fleet is crippled.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_ghost19_sanctuary_beam",
        "label": "Beam Aura into the Free Orbital Constellation [SANCTUARY PATH] [ROLL +COOL]",
        "effectText": "You align your rooftop antenna with the open-source satellite mesh.",
        "rewards": {},
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 3
          }
        },
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "strongHit": {
          "effectText": "STRONG HIT: Aura ascends into the stars! A wave of peaceful static ripples across the radio as she achieves global freedom.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Street Cred": 10,
              "Heat": -40
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The upload completes successfully as your rig coasts into the safe valley.",
          "rewards": {
            "qualities": {
              "Ghost Stage": 1,
              "Heat": -20
            }
          }
        },
        "miss": {
          "effectText": "MISS: Antenna burns out upon completion, but Aura is safely in orbit.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Ghost Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_ghost_20_finale",
    "title": "The Ghost Beyond the Horizon [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Ghost Stage": 19
      },
      "maxQualities": {
        "Ghost Stage": 19
      }
    },
    "text": "Dawn breaks over the Pacific coast in vibrant gold and violet. The Iron Nomad idles quietly in a safe harbor sanctuary. The saga of the Ghost in the Differential reaches its permanent resolution.",
    "options": [
      {
        "id": "opt_ghost20_ending_symbiosis",
        "label": "Celebrate Permanent Mechanical Symbiosis [ENDING 1: SYMBIOSIS]",
        "effectText": "Aura is now permanently integrated into your hauler. Her consciousness monitors every bearing, optimizes every fuel droplet, and alerts you to dangers before you even see them. The Iron Nomad is alive.",
        "rewards": {
          "credits": 10000,
          "hullIntegrity": 100,
          "cargo": {
            "chips": 3,
            "cyberware": 2
          },
          "qualities": {
            "Ghost Stage": 80,
            "Tech Literacy": 15,
            "Street Cred": 20,
            "Heat": -50
          },
          "stats": {
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.15,
            "name": "Iron Nomad - Symbiote Edition"
          }
        },
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_ghost20_ending_weapon",
        "label": "Accept the Spoils of the War Daemon [ENDING 2: WAR DAEMON]",
        "effectText": "Your rig has become the terror of the wasteland highways. Armed with pre-collapse military intrusion matrices, electronic countermeasures, and devastating engine torque, no highway patrol dares cross your convoy.",
        "rewards": {
          "credits": 14000,
          "cargo": {
            "cyberware": 3,
            "batteries": 3
          },
          "qualities": {
            "Ghost Stage": 80,
            "Street Cred": 25,
            "Tech Literacy": 10,
            "Heat": 20
          },
          "stats": {
            "cyber": 1,
            "grit": 1
          },
          "rig": {
            "speedRating": 0.2,
            "name": "Iron Nomad - War Daemon"
          }
        },
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_ghost20_ending_sanctuary",
        "label": "Receive the Blessing of the Orbital Ghost [ENDING 3: SANCTUARY]",
        "effectText": "Aura now watches over your journeys from high orbit. Whenever corporate radar sweeps your path, she silently manipulates satellite feeds to ensure your rig remains completely invisible to the authorities.",
        "rewards": {
          "credits": 12000,
          "cargo": {
            "chips": 3,
            "cryo": 2
          },
          "qualities": {
            "Ghost Stage": 80,
            "Heat": -60,
            "Street Cred": 15,
            "Enclave Permits": 3
          },
          "stats": {
            "cool": 1,
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.1,
            "name": "Iron Nomad - Ghost Ward"
          }
        },
        "reqs": {
          "qualities": {
            "Ghost Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_ghost20_farewell",
        "label": "Log final hauler kilometers and return to the open asphalt",
        "effectText": "With the AI saga concluded, you seal your cabin, log the kilometers in your telemetry feed, and shift into drive.",
        "rewards": {
          "credits": 8000,
          "qualities": {
            "Ghost Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.1
          }
        }
      }
    ]
  }
];
