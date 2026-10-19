import { Storylet } from '../types/storylet';

export const SMUGGLER_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_smuggler_01_malorys_key",
    "title": "The Dead Courier’s Key",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Smuggler Stage": 0
      }
    },
    "text": "In the dim neon shadows of a roadside truck stop, a dying courier in an oil-stained duster slides into your booth. He presses a heavy magnetic keycard into your palm, whispering with his final breath: \"Old Man Malory’s dead-drop ledger... the corporate satellites don't cover every mile of asphalt. The blindspots aren't accidents. They're corridors. Find his first cache in Sector 4.\"",
    "options": [
      {
        "id": "opt_smug01_decrypt_key",
        "label": "Decrypt the magnetic keycard data sectors [ROLL +CYBER]",
        "effectText": "You bridge your cyberdeck to the magnetic keycard, slicing its physical encryption.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The ledger unfolds in glowing holographic green! Hidden dead-drops across six sectors light up your map.",
          "rewards": {
            "credits": 800,
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 2,
              "Tech Literacy": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Keycard decrypted, though an anti-tamper burn wipes the secondary files.",
          "rewards": {
            "credits": 400,
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-ICE zaps your deck terminal, erasing your temporary cache.",
          "rewards": {
            "hullIntegrity": -6,
            "qualities": {
              "Smuggler Stage": 1,
              "Glitch Rating": 1
            }
          }
        }
      },
      {
        "id": "opt_smug01_interrogate_room",
        "label": "Search the courier’s jacket before onlookers notice [ROLL +COOL]",
        "effectText": "You quickly search his duster for corroborating waypoint manifests.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You find an encrypted datastick and 1,200 Credits in unmarked corporate bearer bonds!",
          "rewards": {
            "credits": 1200,
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 3,
              "Contraband Mastery": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You pocket the datastick and slip away as diner patrons turn their heads.",
          "rewards": {
            "credits": 500,
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A diner waitress screams as enforcers approach the parking lot.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 8
            }
          }
        }
      },
      {
        "id": "opt_smug01_honor_courier",
        "label": "Close his eyes and whisper the Smuggler’s Code of the Highway",
        "effectText": "You leave a silver token on his chest, honoring the fraternity of the outlaw road.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Street Cred": 5,
            "Contraband Mastery": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_02_dead_drop_whiskey",
    "title": "The Rust-Water Dead Drop",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 1
      },
      "maxQualities": {
        "Smuggler Stage": 1
      }
    },
    "text": "Following Malory’s first coordinate takes you beneath the rotting concrete pier of an industrial canal. Hidden behind a false drainage culvert rests a locked steel locker marked with the outlaw swallow emblem.",
    "options": [
      {
        "id": "opt_smug02_pick_tumblers",
        "label": "Pick the vintage magnetic tumblers [ROLL +COOL]",
        "effectText": "You use electronic tension picks to manipulate the magnetic locks.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Click! The locker pops open, revealing 2x Class-IV Bio-Toxins and 1,500 Credits in cold cash!",
          "rewards": {
            "credits": 1500,
            "cargo": {
              "toxins": 2
            },
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 2,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Locker opened, though an acoustic buzzer sounds inside the conduit.",
          "rewards": {
            "credits": 800,
            "cargo": {
              "toxins": 1
            },
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 1,
              "Heat": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The lock jams, requiring heavy pry-bars that dent your knuckles.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug02_torch_cut",
        "label": "Plasma-torch the steel hinges [ROLL +GRIT]",
        "effectText": "You ignite your cutting torch, melting the steel hinges into slag.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Heavy iron mastery! The door drops away cleanly, preserving all contents.",
          "rewards": {
            "cargo": {
              "toxins": 1,
              "cyberware": 1
            },
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You breach the locker, but scorching heat damages one container.",
          "rewards": {
            "cargo": {
              "toxins": 1
            },
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The flame ignites trapped methane in the culvert, singeing your rig bumper!",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug02_tag_brotherhood",
        "label": "Paint the outlaw cipher over the dead drop for other couriers",
        "effectText": "You tag the culvert wall, leaving word that Malory’s trail has awakened.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Street Cred": 4
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_03_satellite_blindspot",
    "title": "The Black Interstate Corridor",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 2
      },
      "maxQualities": {
        "Smuggler Stage": 2
      }
    },
    "text": "Aegis orbital surveillance blankets the sector with high-definition optical reconnaissance. Malory’s ledger notes: \"Between Kilometer 142 and 188, the mountain ridge shadow creates an eight-minute blindspot every hour. Run without headlights and stay under the radar canopy.\"",
    "options": [
      {
        "id": "opt_smug03_blackout_drive",
        "label": "Kill all external illumination and drive by starlight [ROLL +EDGE]",
        "effectText": "You flip the master blackout switch, trusting road memory and instinct at 90 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Phenomenal driving! You glide through the midnight shadows like a phantom ghost.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 2,
              "Heat": -15,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the blindspot, though a loose gravel patch forces a frantic correction.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": -5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Without headlights, you strike a fallen timber, cracking your lower air dam.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug03_infrared_overlay",
        "label": "Engage thermal cyber-optics to map the asphalt [ROLL +CYBER]",
        "effectText": "You pipe high-contrast infrared telemetry directly into your optical implants.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The road glows bright as day on your retinas! You outrun the satellite sweep effortlessly.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 2,
              "Contraband Mastery": 1
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Optical overlay functions, though retinal glare burns your vision.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An optical stutter causes you to miss a hairpin turn, jarring the suspension.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug03_crawl_shadows",
        "label": "Drop into lowest gear and creep beneath the rocky overhangs",
        "effectText": "You take your time, hugging the rock wall until the satellite passes over the horizon.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_04_inquisitor_shakedown",
    "title": "Inquisitor Thorne’s Checkpoint",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 3
      },
      "maxQualities": {
        "Smuggler Stage": 3
      }
    },
    "text": "At an unexpected highway checkpoint, an elite Aegis internal affairs inquisitor waves your hauler into the inspection bay. Handheld scanner drones buzz around your trailer tires. \"We have reports of unregistered cargo moving along this vector, hauler. Step out and present your manifests.\"",
    "options": [
      {
        "id": "opt_smug04_cool_bluff",
        "label": "Present forged commercial grain shipping manifests [ROLL +COOL]",
        "effectText": "You lean against the cab, offering the inquisitor an imported cigar with iron composure.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless deception! The inquisitor stamps your papers with an executive salute.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 5,
              "Heat": -15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Papers accepted, though the inquisitor levies an arbitrary 300-credit customs fee.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": -5
            }
          }
        },
        "miss": {
          "effectText": "MISS: The inquisitor flags a manifest discrepancy, searching your cab thoroughly.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_smug04_spoof_scanners",
        "label": "Transmit false telemetry loops into their scanner drones [ROLL +CYBER]",
        "effectText": "You inject forged sensor feeds that show your hold filled with inert agricultural fertilizer.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The drones beep in green approval: \"MANIFEST VERIFIED: ORGANIC PHOSPHATES.\"",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 3,
              "Contraband Mastery": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Scanners spoofed, though drone telemetry logs an intermittent checksum error.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The counter-hack triggers an intrusion alarm on the inquisitor’s deck!",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 20
            }
          }
        }
      },
      {
        "id": "opt_smug04_bribe_inquisitor",
        "label": "Slide a crisp 600-credit bearer bond beneath your clipboard",
        "effectText": "The inquisitor smiles thinly, slides the bond into his pocket, and waves the gate open.",
        "rewards": {
          "credits": -600,
          "qualities": {
            "Smuggler Stage": 1,
            "Street Cred": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_05_corridor_frequency",
    "title": "The Ghost Frequency [BRANCH 1]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 4
      },
      "maxQualities": {
        "Smuggler Stage": 4
      }
    },
    "text": "A hidden transponder under your dash chirps. Malory’s voice crackles from an old audio recording: \"Kid, if you’re hearing this, you survived the first leg. Now comes the choice that defines every smuggler. Do you stay dark and invisible, or do you build a criminal empire that owns the inspectors?\"",
    "options": [
      {
        "id": "opt_smug05_silent_drift",
        "label": "Master the art of total radar invisibility [BRANCH 1A: STEALTH] [ROLL +COOL]",
        "effectText": "You study Malory’s stealth corridors, mastering electromagnetic discipline.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT [SHADOW COURIER LOCKED]: You become an untraceable ghost on continental radars.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Stealth": 1,
              "Contraband Mastery": 3,
              "Heat": -25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Stealth discipline acquired, though radio silence feels isolating.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Stealth": 1,
              "Heat": -10
            }
          }
        },
        "miss": {
          "effectText": "MISS: A stray signal leak alerts an orbital monitoring post.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Stealth": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_smug05_build_syndicate",
        "label": "Learn his extortion files to compromise corporate checkpoints [BRANCH 1B: EXTORTION] [ROLL +CYBER]",
        "effectText": "You catalog his blackmail dossier on corrupt regional governors and police captains.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT [EXTORTIONIST PRIMED]: You obtain compromising dirt on twelve high-ranking enclave officials!",
          "rewards": {
            "credits": 1500,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extortion": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Dirt compiled, though blackmail is a dangerous game.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extortion": 1,
              "Street Cred": 3
            }
          }
        },
        "miss": {
          "effectText": "MISS: A corrupt official’s security software detects your download.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extortion": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_smug05_hauler_solidarity",
        "label": "Share the corridor coordinates freely with the independent hauler guild",
        "effectText": "You broadcast the safe bypass routes across encrypted CB frequencies to help working drivers.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Branch Solidarity": 1,
            "Street Cred": 10,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_06_biotoxin_cache",
    "title": "The Sunken Chemical Vault",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 5
      },
      "maxQualities": {
        "Smuggler Stage": 5
      }
    },
    "text": "Deep within an abandoned hydroelectric dam, Malory’s second dead-drop holds high-grade contraband: 3x sealed canisters of military-grade Bio-Toxins worth a small fortune on the black market.",
    "options": [
      {
        "id": "opt_smug06_salvage_toxins",
        "label": "Winch the hazardous containers into your concealed hold [ROLL +GRIT]",
        "effectText": "You don protective respirators and guide the heavy canisters onto your loading ramp.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless salvage! All 3x canisters secured without a single vapor leak.",
          "rewards": {
            "cargo": {
              "toxins": 3
            },
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 2,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Containers secured, though a minor valve leak damages a pallet.",
          "rewards": {
            "cargo": {
              "toxins": 2
            },
            "hullIntegrity": -8,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Toxic fumes spray across your loading bay, forcing an emergency flush.",
          "rewards": {
            "cargo": {
              "toxins": 1
            },
            "hullIntegrity": -16,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug06_baryon_rigging",
        "label": "Calibrate the false bulkhead magnetic shielding [ROLL +CYBER]",
        "effectText": "You wire electromagnetic field coils around the storage bay to block chemical sniffers.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Zero chemical emission! The contraband is completely invisible to scanners.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 3,
              "Contraband Mastery": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Shielding configured, though power consumption rises.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High voltage shorts out your cargo bay floodlights.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug06_leave_decoy",
        "label": "Leave dummy canisters in the vault to mislead rival smugglers",
        "effectText": "You plant empty rusted barrels with forged lot numbers to throw pursuers off the scent.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Street Cred": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_07_undercover_snitch",
    "title": "The Informant in the Mirror",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 6
      },
      "maxQualities": {
        "Smuggler Stage": 6
      }
    },
    "text": "A sleek black unmarked sedan tails your hauler for fifty miles through the desert salt pans. An encrypted text pops up on your dash: \"I know what you took from the dam. Pull over or I transmit your coordinates to the Aegis tactical air wing.\"",
    "options": [
      {
        "id": "opt_smug07_ram_sedan",
        "label": "Brake-check the sedan and force it into the canyon wash [ROLL +GRIT]",
        "effectText": "You slam the service brakes, letting the heavy steel ICC bar crush the sedan hood.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating crash! The sedan spins violently into a ditch, its radio antennas snapping.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You force the tail off the road, taking minor rear bumper scratches.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The sedan swerves past and empties an automatic weapon into your radiator.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug07_hack_sedan",
        "label": "Hack their vehicle ECM and trigger their emergency airbags [ROLL +CYBER]",
        "effectText": "You beam a malicious CAN-bus packet into their car’s diagnostic transponder.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Boom! Their cockpit airbags detonate instantly, blinding the driver and sending them off the road.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Their engine stalls momentarily, giving you time to escape into the canyons.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their firewall deflects the hack, tracing your transmitter frequency.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_smug07_outrun_sedan",
        "label": "Drop into overdrive and leave the sedan in your dust [ROLL +EDGE]",
        "effectText": "You open the throttle, pushing your turbocharged hauler to 135 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure highway dominance! The sedan engine blows its head gasket trying to keep up.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You lose the tail after an exhausting thirty-minute high-speed pursuit.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: High speeds overheat your engine manifold, demanding a cooldown stop.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_08_black_budget_heist",
    "title": "The Governor’s Slush Fund [BRANCH 2]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 7
      },
      "maxQualities": {
        "Smuggler Stage": 7
      }
    },
    "text": "Malory’s notes reveal that Regional Governor Kross maintains an offshore vault filled with illicit corporate bearer bonds at a private corporate casino. Slicing this vault could fund your entire smuggling syndicate.",
    "options": [
      {
        "id": "opt_smug08_casino_hack",
        "label": "Infiltrate the casino mainframe via the HVAC roof vents [BRANCH 2A: HEIST] [ROLL +CYBER]",
        "effectText": "You tap into the automated financial ledger of the governor’s high-roller vault.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Jack pot! You siphon 3,500 Credits in untraceable digital bearer bonds!",
          "rewards": {
            "credits": 3500,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Heist": 1,
              "Tech Literacy": 3,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure 1,800 Credits before silent alarms force a hasty exit.",
          "rewards": {
            "credits": 1800,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Heist": 1,
              "Heat": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Casino security ICE burns your deck, locking down the terminal.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Heist": 1,
              "Heat": 20
            }
          }
        }
      },
      {
        "id": "opt_smug08_blackmail_governor",
        "label": "Blackmail the governor directly using his mistress’s telemetry [BRANCH 2B: EXTORTION] [ROLL +COOL]",
        "effectText": "You send a single encrypted text to the governor’s personal communicator.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The terrified governor transfers 3,000 Credits and grants permanent enclave docking immunity!",
          "rewards": {
            "credits": 3000,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extort": 1,
              "Enclave Permits": 2,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: He pays 1,500 Credits to keep the files buried.",
          "rewards": {
            "credits": 1500,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extort": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The governor dispatches a private hit squad to silence you.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Extort": 1,
              "Heat": 25
            }
          }
        }
      },
      {
        "id": "opt_smug08_pass_up_greed",
        "label": "Ignore the casino trap and focus on Malory’s ultimate smuggling legacy",
        "effectText": "You steer clear of politician traps. True smugglers live in the shadows, not in casinos.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Contraband Mastery": 2,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_09_mole_unmasking",
    "title": "The Mole in the Brotherhood",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 8
      },
      "maxQualities": {
        "Smuggler Stage": 8
      }
    },
    "text": "A secret council of independent haulers is compromised. An informant has been selling safehouse coordinates to Aegis SWAT squads. Malory’s ledger contains the decrypt keys to identify the traitor.",
    "options": [
      {
        "id": "opt_smug09_unmask_traitor",
        "label": "Cross-reference financial logs to identify the mole [ROLL +CYBER]",
        "effectText": "You correlate bank transfers with police raid timestamps.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You expose Fixer Silas as the corporate rat before the entire assembly! The brotherhood hails you as their savior.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 10,
              "Colossus Trust": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You uncover the mole, though he escapes into the crowd before being captured.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Your public accusation lacks hard proof, causing internal division.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug09_confront_silas",
        "label": "Corner Silas in the parking lot with a heavy wrench [ROLL +GRIT]",
        "effectText": "You block his getaway car and demand his corporate clearance badge.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: He breaks under pressure, confessing everything and handing over his bribe money!",
          "rewards": {
            "credits": 1200,
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Silas surrenders his encrypted phone before fleeing into the night.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Silas pulls a pistol, winging your arm before speeding away.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug09_feed_false_intel",
        "label": "Feed the mole false convoy routes to ambuscade the police squad",
        "effectText": "You feed him fake manifests, sending corporate enforcers into an empty desert canyon.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Contraband Mastery": 3,
            "Heat": -20
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_10_brotherhood_tribunal",
    "title": "The Smuggler King’s Mantle [BRANCH 3]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 9
      },
      "maxQualities": {
        "Smuggler Stage": 9
      }
    },
    "text": "With the mole purged, the elder haulers gather around your rig under the rusted water tower. They place Malory’s gold-inlaid gear-shifter on your dashboard. \"Old Man Malory is gone. The wastelands need a new Smuggler King. Will you lead us as our outlaw sovereign, or run the road for yourself?\"",
    "options": [
      {
        "id": "opt_smug10_accept_crown",
        "label": "Accept the title of Smuggler King of the Wastelands [BRANCH 3A: KING]",
        "effectText": "You lift the gold shifter high. A hundred truck horns sound across the desert in deafening loyalty!",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Stance King": 1,
            "Street Cred": 15,
            "Contraband Mastery": 3
          }
        }
      },
      {
        "id": "opt_smug10_liberator_mantle",
        "label": "Proclaim a Free Republic of Independent Couriers [BRANCH 3B: LIBERATOR]",
        "effectText": "You vow to distribute all routes freely so every driver can feed their family in dignity.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Stance Liberator": 1,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_smug10_corporate_insider",
        "label": "Privately plan to leverage the smuggling network for elite corporate deals [BRANCH 3C: INSIDER]",
        "effectText": "You accept their trust with a cold, calculating smile. True power lies in owning both sides of the law.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Stance Insider": 1,
            "Enclave Permits": 2
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_11_governor_blackmail",
    "title": "The Citadel Shakedown",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 10
      },
      "maxQualities": {
        "Smuggler Stage": 10
      }
    },
    "text": "Governor Kross’s enforcers attempt one final squeeze, seizing your auxiliary fuel reserves at the border gateway. With your dossier ready, the showdown begins in the customs terminal.",
    "options": [
      {
        "id": "opt_smug11_broadcast_leaks",
        "label": "Broadcast his embezzlement files on open civilian television [ROLL +CYBER]",
        "effectText": "You override the regional news feed, streaming his offshore accounts to millions.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total scandal! The governor’s enforcers flee the gate as civil unrest erupts across the city.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 8,
              "Heat": -30
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The broadcast airs for three minutes before being jammed, creating enough chaos to escape.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-ICE blocks the transmission, flagging your rig for treason.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 25
            }
          }
        }
      },
      {
        "id": "opt_smug11_intimidate_officer",
        "label": "Confront the customs commander with personal blackmail [ROLL +COOL]",
        "effectText": "You whisper his home address and secret bank balances into his ear.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The commander turns pale as paper, saluting and personally opening the express gate.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 7,
              "Enclave Permits": 2
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The commander yields, though he warns you never to return.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 3
            }
          }
        },
        "miss": {
          "effectText": "MISS: He calls for armed backup, forcing a frantic firefight escape.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug11_bribe_gatekeeper",
        "label": "Pay the standard commercial bribe to clear the gate peacefully [800 Credits]",
        "effectText": "You grease the wheels of commerce and drive into the western sunrise.",
        "rewards": {
          "credits": -800,
          "qualities": {
            "Smuggler Stage": 1
          }
        },
        "reqs": {
          "credits": 800
        }
      }
    ]
  },
  {
    "id": "story_smuggler_12_baryon_shield_rigging",
    "title": "The Baryon Shield Blueprint",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 11
      },
      "maxQualities": {
        "Smuggler Stage": 11
      }
    },
    "text": "Inside Malory’s personal safehouse lies his masterpiece: the engineering schematics for a Baryon Shielded False Bulkhead—a quantum-damped cargo compartment that renders all contraband 100% invisible to customs scanners.",
    "options": [
      {
        "id": "opt_smug12_weld_bulkhead",
        "label": "Weld the heavy lead-baryon composite plating into your hold [ROLL +GRIT]",
        "effectText": "You spend 12 hours torch-welding the quantum shielding plates into your rig cargo bay.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterwork fabrication! The false wall looks and sounds like solid chassis steel.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 4,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Bulkhead installed, though minor clearance issues reduce cargo volume slightly.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: Warped weld seams demand extra grinding, delaying your departure.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug12_wire_dampers",
        "label": "Wire the electromagnetic quantum harmonic field generators [ROLL +CYBER]",
        "effectText": "You splice the baryon field coils into your rig’s central battery inverter.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless electronics! Sensor probes register the hold as an empty hollow beam.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 4,
              "Contraband Mastery": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Field operational, though high voltage hums through the cabin floor.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A blown capacitor fuse leaves the field operating at half capacity.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug12_hire_technician",
        "label": "Hire an expert reclaimer mechanic to assist the installation [1,000 Credits]",
        "effectText": "A master artisan fits the bulkhead with aerospace precision.",
        "rewards": {
          "credits": -1000,
          "qualities": {
            "Smuggler Stage": 1,
            "Contraband Mastery": 3
          }
        },
        "reqs": {
          "credits": 1000
        }
      }
    ]
  },
  {
    "id": "story_smuggler_13_aegis_interceptor_cordon",
    "title": "The Highway Cordon [BRANCH 4]",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 12
      },
      "maxQualities": {
        "Smuggler Stage": 12
      }
    },
    "text": "Aegis tactical interceptor cars form a roving cordon across the four-lane interstate highway. Mobile inspection rigs are scanning every trailer on the fly.",
    "options": [
      {
        "id": "opt_smug13_scanner_test",
        "label": "Test the Baryon Bulkhead under live scanner sweeps [BRANCH 4A: STEALTH] [ROLL +COOL]",
        "effectText": "You drive right through their scanner beam without tapping the brakes.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total triumph! The scanner displays a verified empty trailer. The guards wave you through with a yawn.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Phantom": 1,
              "Contraband Mastery": 3,
              "Heat": -20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Scanner passes you, though an officer eyes your heavy tire deflection.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Phantom": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A scanner glitch triggers a secondary search command, forcing you to gun the throttle!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Phantom": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_smug13_redline_ram",
        "label": "Punch through their roadblock with your heavy steel bumper [BRANCH 4B: FORCE] [ROLL +GRIT]",
        "effectText": "You sound the air horns and smash through their interceptor cruiser barricade.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic force! Cruiser doors fly off as you punch into open highway.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Force": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break the cordon, though machine gun rounds dent your trailer skin.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Force": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: An interceptor car pits your rear axle, forcing a violent fishtail.",
          "rewards": {
            "hullIntegrity": -26,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Force": 1
            }
          }
        }
      },
      {
        "id": "opt_smug13_offroad_drift",
        "label": "Hard-drift off the highway onto the dry canal bed [BRANCH 4C: EVASION] [ROLL +EDGE]",
        "effectText": "You cut down the embankment into an unpaved flood ditch at 100 km/h.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Supreme off-road mastery! You bypass the cordon completely in a cloud of dust.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Evasion": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You escape through the ditch, though bottoming out rattles the cabin.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Evasion": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A concrete drainage lip cracks a front rim as you scramble back to asphalt.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Smuggler Stage": 1,
              "Smuggler Branch Evasion": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_14_covert_weigh_station",
    "title": "The Phantom Weigh Station",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 13
      },
      "maxQualities": {
        "Smuggler Stage": 13
      }
    },
    "text": "At an abandoned weigh station deep in the canyon badlands, the entire underground smuggling council awaits your arrival. Word has spread across every CB radio on the continent: Malory’s heir has conquered the highway.",
    "options": [
      {
        "id": "opt_smug14_inspire_assembly",
        "label": "Deliver the Smuggler’s Manifesto of the Open Road [ROLL +COOL]",
        "effectText": "You stand on your trailer roof, speaking of freedom, courage, and true outlaw dignity.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A thunderous ovation shakes the canyon! Veteran drivers pledge their lives and rigs to your banner.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 12,
              "Colossus Trust": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The drivers cheer your bravery and toast your name with moonshine.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "miss": {
          "effectText": "MISS: Modest applause from a weary audience of hardened outlaws.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug14_distribute_ciphers",
        "label": "Distribute the Baryon shielding schematics to every driver [ROLL +CYBER]",
        "effectText": "You upload the blueprint files to their portable decks, arming the entire fleet.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The entire independent fleet is now invisible to corporate scanners! An era of freedom is born.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Schematics distributed, though older drivers struggle with the installation.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 2
            }
          }
        },
        "miss": {
          "effectText": "MISS: A corrupt deck in the crowd leaks the file to local authorities.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_smug14_rest_cab",
        "label": "Sleep for eight uninterrupted hours in the quiet sleeper bunk",
        "effectText": "You lock your doors, draw the curtains, and enjoy the deep, dreamless sleep of the victorious.",
        "rewards": {
          "hullIntegrity": 20,
          "qualities": {
            "Smuggler Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_15_coronation_crossroads",
    "title": "The Smuggler’s Crossroads [BRANCH 5: Lock In Path]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 14
      },
      "maxQualities": {
        "Smuggler Stage": 14
      }
    },
    "text": "Dawn breaks over the sovereign frontier. Ahead lies the border between the corporate territories and the free Pacific rim. The final chapter of Malory’s legacy demands your signature. What is your true calling, hauler?",
    "options": [
      {
        "id": "opt_smug15_choose_king",
        "label": "Cede No Ground: Become the Undisputed Smuggler King of the Wastelands [PATH: SMUGGLER KING] [BRANCH 5A]",
        "effectText": "You mount the golden gear-shifter. You are the undisputed lord of every illicit corridor on the continent.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Chosen Path": 1,
            "Contraband Mastery": 5,
            "Street Cred": 20
          }
        }
      },
      {
        "id": "opt_smug15_choose_liberator",
        "label": "The People’s Courier: Dedicate the network to free trade and mutual aid [PATH: LIBERATOR] [BRANCH 5B]",
        "effectText": "You abolish tolls and secrecy. The corridors belong to every honest driver who dares run them.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Chosen Path": 2,
            "Street Cred": 25
          }
        }
      },
      {
        "id": "opt_smug15_choose_insider",
        "label": "The Black Syndicate Insider: Command the shadow pipeline between megacorps [PATH: BLACK OPS] [BRANCH 5C]",
        "effectText": "You operate in the highest corridors of power, immune to prosecution and swimming in wealth.",
        "rewards": {
          "qualities": {
            "Smuggler Stage": 1,
            "Smuggler Chosen Path": 3,
            "Enclave Permits": 3,
            "Heat": -40
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_16_state_police_manhunt",
    "title": "The Continental Dragnet",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 15
      },
      "maxQualities": {
        "Smuggler Stage": 15
      }
    },
    "text": "Aegis High Command issues a continental code-red alert. Fifty patrol cruisers converge on your interstate vector, sealing off all highway exits with spiked tire barriers.",
    "options": [
      {
        "id": "opt_smug16_phantom_evasion",
        "label": "Slip through the desert shadows using Malory’s secret goat-trails [ROLL +EDGE]",
        "effectText": "You drop off the highway into an unmapped dry riverbed, disappearing into the dunes.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless phantom driving! The police dragnet closes on an empty stretch of highway.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 8,
              "Heat": -25
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You evade the main force, though desert rocks batter your undercarriage.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A hidden boulder high-centers your trailer, requiring frantic winching to break free.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug16_jam_dragnet",
        "label": "Flood police tactical radio channels with high-gain noise [ROLL +CYBER]",
        "effectText": "You broadcast a continuous barrage of forged dispatch codes across their command net.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total communications blackout! Cruiser units redirect to false emergencies 100 miles away.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Radio net scrambled, allowing you to slip through an unguarded off-ramp.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Counter-triangulation locks onto your mast, dispatching helicopter overwatch.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Heat": 20
            }
          }
        }
      },
      {
        "id": "opt_smug16_ram_spike_strip",
        "label": "Drop heavy steel deflection skids to crush the spike strips [ROLL +GRIT]",
        "effectText": "You lower your reinforced steel plow, plowing directly through the spiked barricade.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Steel sparks fly! The spike strips are crushed into iron confetti under your armored tires.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 7
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, though one tire outer tread is gouged.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A spike punctures a rear tire, demanding a rough tire-change stop.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_17_phantom_runways",
    "title": "The Abandoned Airstrip Run",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 16
      },
      "maxQualities": {
        "Smuggler Stage": 16
      }
    },
    "text": "A hidden WWII concrete airstrip in the redwood foothills serves as the final staging ground. Here, Malory’s veteran smugglers refuel your tanks with high-octane racing kerosene.",
    "options": [
      {
        "id": "opt_smug17_tune_injectors",
        "label": "Calibrate fuel injectors for kerosene-diesel blend [ROLL +CYBER]",
        "effectText": "You adjust electronic timing to maximize acceleration out of toll gates.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The engine roars with racecar fury! Throttle response is instant and ferocious.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 3,
              "Street Cred": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Fuel calibrated, though exhaust pipes throw visible blue flame.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Rich fuel mix fouls a spark glow-plug, requiring a quick clean.",
          "rewards": {
            "hullIntegrity": -6,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug17_motivate_couriers",
        "label": "Raise a glass of aged rye whiskey with the old-timers [ROLL +COOL]",
        "effectText": "You drink to Old Man Malory and all the drivers who never made it home.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A sacred outlaw communion. The veterans swear an unbreakable blood pact to clear your path.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 8,
              "Colossus Trust": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Warm toasts and hearty handshakes all around the fire.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Heavy drinking gives you a mild headache before the morning run.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug17_load_fuel_cell",
        "label": "Bolt an auxiliary 500-liter racing fuel cell onto your frame",
        "effectText": "You double your range, guaranteeing you will never run dry during pursuit.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Smuggler Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_18_governors_fortress_raid",
    "title": "The Sovereign Toll Barrier",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 17
      },
      "maxQualities": {
        "Smuggler Stage": 17
      }
    },
    "text": "The final continental toll gate looms ahead—a concrete fortress with hydraulic steel barriers and searchlight towers. Governor Kross personally directs the blockade from his command balcony.",
    "options": [
      {
        "id": "opt_smug18_baryon_bypass",
        "label": "Glide through the master scanner using full Baryon shielding [ROLL +COOL]",
        "effectText": "You coast into the scanner lane at idle speed, calm as a monk.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Complete scanner ghosting! The system registers an empty municipal recycling hauler. The gates rise automatically.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Contraband Mastery": 4,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gates open, though the governor watches your rear mudflaps with suspicion.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: A sensor flicker triggers red alarms, forcing a desperate smash-through.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug18_heavy_ram_gate",
        "label": "Lower the iron prow and demolish the hydraulic toll gate [ROLL +GRIT]",
        "effectText": "You floor the throttle, slamming 35 tons of steel into the hydraulic barrier.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Tremendous devastation! The hydraulic barrier shears from its concrete mounts, flying fifty feet into the air.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You smash through, taking heavy shrapnel across your radiator.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The collision nearly dead-stops your rig before you grind past the wreckage.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_smug18_hack_barrier_override",
        "label": "Broadcast the governor’s executive passkey to raise the gate [ROLL +CYBER]",
        "effectText": "You transmit his personal encrypted override sequence directly to the gate computer.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The barrier salutes: \"WELCOME, GOVERNOR KROSS.\" The gates swing wide with zero resistance!",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Tech Literacy": 4,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Gate opens, though the governor realizes his codes have been burned.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Keycode rejected as expired, forcing a rough escape through side fencing.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_19_shadow_terminal_climax",
    "title": "The Redwoods Run [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 18
      },
      "maxQualities": {
        "Smuggler Stage": 18
      }
    },
    "text": "You have breached the final barrier! Ahead, the Pacific Highway winds through towering redwoods into the free territories. Behind you, the sirens fade into silence as you claim your destiny.",
    "options": [
      {
        "id": "opt_smug19_king_drive",
        "label": "Claim the Sovereign Mantle across the frontier [KING PATH] [ROLL +COOL]",
        "effectText": "You sound the gold-inlaid air horn. Outlaw convoys flash headlights in salute along every turnout.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You are crowned the Smuggler King of the Continent! An unbroken empire of the road is yours.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The brotherhood hails their new king across the airwaves.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Minor police stragglers fire parting shots before retreating.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_smug19_liberator_broadcast",
        "label": "Broadcast all secret corridor frequencies to every working hauler [LIBERATOR PATH] [ROLL +CYBER]",
        "effectText": "You release the encrypted navigation codes across the global open mesh.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Freedom explodes across the continent! Corporate monopolies collapse as thousands of drivers run free.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The codes are broadcast successfully, transforming the wastelands forever.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Some frequencies are jammed, but the core network survives.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_smug19_insider_rendezvous",
        "label": "Deliver the black-budget ledger to the secret corporate cartel [BLACK OPS PATH] [ROLL +COOL]",
        "effectText": "You meet executive representatives in a secluded coastal mansion.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Billions in sovereign bearer bonds transferred! You are appointed supreme shadow contractor.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The transaction concludes with enormous payouts and lifelong immunity.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Tense negotiations yield your full contracted reward.",
          "rewards": {
            "qualities": {
              "Smuggler Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_smuggler_20_finale",
    "title": "The Ghost King of the Pacific [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Smuggler Stage": 19
      },
      "maxQualities": {
        "Smuggler Stage": 19
      }
    },
    "text": "The sun sets in fire and gold over the Pacific Ocean. Old Man Malory’s legacy has found its true heir. Your rig is permanently retrofitted with the legendary Baryon Shielded False Bulkhead.",
    "options": [
      {
        "id": "opt_smug20_ending_king",
        "label": "Ascend as the Smuggler King of the Wastelands [ENDING 1: SMUGGLER KING]",
        "effectText": "You rule the contraband pipelines of the continent. Scanners cannot see you, warlords fear you, and drivers toast your name in every diner.",
        "rewards": {
          "credits": 18000,
          "hullIntegrity": 100,
          "cargo": {
            "toxins": 3,
            "cyberware": 2
          },
          "qualities": {
            "Smuggler Stage": 80,
            "Contraband Mastery": 5,
            "Street Cred": 25,
            "Heat": -50
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "speedRating": 0.1,
            "name": "Iron Nomad - Phantom King"
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_smug20_ending_liberator",
        "label": "Accept the Gratitude of the Free Hauler Republic [ENDING 2: THE LIBERATOR]",
        "effectText": "Thanks to your courage, independent drivers run free without fear of corporate extortion. You are an immortal folk legend of the open road.",
        "rewards": {
          "credits": 13000,
          "cargo": {
            "grain": 5,
            "batteries": 3
          },
          "qualities": {
            "Smuggler Stage": 80,
            "Street Cred": 30,
            "Heat": -40
          },
          "stats": {
            "cool": 1,
            "edge": 1
          },
          "rig": {
            "speedRating": 0.12,
            "name": "Iron Nomad - Free Courier"
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_smug20_ending_insider",
        "label": "Collect the Spoils of the Black Syndicate Cartel [ENDING 3: BLACK OPS CARTEL]",
        "effectText": "Holding the secrets of governors and warlords alike, you enjoy diplomatic immunity and a private corporate treasury bounty.",
        "rewards": {
          "credits": 16000,
          "cargo": {
            "cyberware": 4,
            "chips": 3
          },
          "qualities": {
            "Smuggler Stage": 80,
            "Enclave Permits": 4,
            "Heat": -60
          },
          "stats": {
            "cool": 1,
            "cyber": 1
          },
          "rig": {
            "speedRating": 0.1,
            "maxHull": 20,
            "name": "Iron Nomad - Black Shadow"
          }
        },
        "reqs": {
          "qualities": {
            "Smuggler Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_smug20_farewell",
        "label": "Collect final veteran courier fee and depart into the coastal twilight",
        "effectText": "With the smuggling saga concluded, you seal your cabin, log the kilometers in your telemetry feed, and shift into drive.",
        "rewards": {
          "credits": 9000,
          "qualities": {
            "Smuggler Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "cool": 1
          },
          "rig": {
            "speedRating": 0.08
          }
        }
      }
    ]
  }
];
