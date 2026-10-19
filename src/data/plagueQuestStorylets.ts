import { Storylet } from '../types/storylet';

export const PLAGUE_QUEST_STORYLETS: Storylet[] = [
  {
    "id": "story_plague_01_silicon_rot",
    "title": "The Corrosion of Ash City",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "maxQualities": {
        "Plague Stage": 0
      }
    },
    "text": "A frantic physician in a hazmat trench coat, Dr. Aris Thorne, bangs on your cab door in the neon-lit rain. \"The Silicon Rot is mutating,\" he pants, clutching a pressurized cryogenic canister. \"A synthetic nanite pathogen is eating cyberware and truck chassis alive across the eastern flats. I need a hauler with sealed bulkheads to carry the Lazarus Matrix cure.\"",
    "options": [
      {
        "id": "opt_plague01_accept_contract",
        "label": "Accept Dr. Thorne's mission and secure the Lazarus Matrix [ROLL +COOL]",
        "effectText": "You inspect Thorne's cryogenic cradle and calculate transit routes through the quarantine zones.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: You negotiate an advance of 1,200 credits and lock the cradle into your shock-absorbing cargo mount.",
          "rewards": {
            "credits": 1200,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You accept the contract and haul the incubator aboard under quiet cover.",
          "rewards": {
            "credits": 600,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Local dock sentries notice the hazmat seals, demanding a 200 credit hush fee before you depart.",
          "rewards": {
            "credits": -200,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague01_inspect_matrix",
        "label": "Run a cybernetic deep scan on the nanite matrix [ROLL +CYBER]",
        "effectText": "You jack your diagnostic deck directly into the canister's telemetry port.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Fascinating biomachinery! The nanites operate on a self-repairing frequency that could rejuvenate living metal.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 5,
              "Street Cred": 3
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The canister is stable, though running at dangerously high thermal thresholds.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A defensive neural pulse shocks your console, singing your primary terminal circuits.",
          "rewards": {
            "hullIntegrity": -5,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague01_prepare_convoy",
        "label": "Install reinforced rubber gaskets and activate emergency environmental filters",
        "effectText": "You prep the hauler for hazardous biological transit before Thorne climbs into the bunk.",
        "rewards": {
          "hullIntegrity": 10,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_02_quarantine_checkpoint",
    "title": "The Burning Perimeter",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 1
      },
      "maxQualities": {
        "Plague Stage": 1
      }
    },
    "text": "A towering Aegis quarantine barrier blocks Route 9. High-pressure chemical flame-throwers spew white-hot cleansing jets across incoming vehicles, burning off synthetic rust and organic residue.",
    "options": [
      {
        "id": "opt_plague02_fake_manifest",
        "label": "Present forged sterilization manifests and corporate medical courier papers [ROLL +COOL]",
        "effectText": "You key your radio to the inspection gate officer and project calm professional authority.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless diplomatic credentials! The officer salutes and opens the sterile bypass lane.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The officer hesitates, charging a 300 credit expedited sterilization inspection fee.",
          "rewards": {
            "credits": -300,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The gate commander flags your incubator, forcing you to gun the throttle through the plastic warning gates!",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Plague Stage": 1,
              "Heat": 10
            }
          }
        }
      },
      {
        "id": "opt_plague02_scan_sensor_blindspot",
        "label": "Hack the perimeter thermal cameras to slip through an unguarded gap [ROLL +CYBER]",
        "effectText": "You loop the gate sensor feed with static telemetry.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Ghost transit! Your convoy slips through the unmonitored culvert without triggering alarms.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The loop holds long enough for your cab to clear, though your trailer scrapes a security bollard.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Sensor ping triggers automated sentry turrets that spray glancing machine-gun fire.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Plague Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_plague02_endure_wash",
        "label": "Submit to the full disinfectant plasma wash and drive through the scorching spray",
        "effectText": "The chemical spray burns paint and chars your mudflaps, but your cargo seals hold firm.",
        "rewards": {
          "hullIntegrity": -12,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_03_refugee_camp",
    "title": "The Clinic of the Damned",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 2
      },
      "maxQualities": {
        "Plague Stage": 2
      }
    },
    "text": "You pull into an ad-hoc refugee hospice outside the toxic marshes. Hundreds of sick haulers and cyborg miners lie under plastic tarps, their cybernetic limbs weeping black oily residue as the nanites disintegrate their joints.",
    "options": [
      {
        "id": "opt_plague03_dispense_stabilizers",
        "label": "Synthesize and distribute emergency nanite dampening serum to the sick [ROLL +CYBER]",
        "effectText": "You and Dr. Thorne calibrate your mobile lab to dilute a non-replicating stabilizer batch.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: A miraculous intervention! Scores of suffering truckers recover, blessing your rig and gifting rare components.",
          "rewards": {
            "cargo": {
              "cyberware": 2
            },
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You stabilize the worst patients, depleting some electrical reserves.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Desperate refugees swarm the truck steps, forcing you to seal doors and pull away hastily.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague03_rally_mechanics",
        "label": "Rally healthy refugee mechanics to fortify your convoy defenses [ROLL +GRIT]",
        "effectText": "You stand on the running boards and rally the able-bodied mechanics to help service the fleet.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The mechanics weld heavy scrap reinforcement plates across your trailer and cab for free!",
          "rewards": {
            "hullIntegrity": 25,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: A couple of greasy hands patch your leaking coolant hose.",
          "rewards": {
            "hullIntegrity": 10,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The crowd is too despondent and terrified to assist.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague03_purchase_supplies",
        "label": "Quietly buy filtered water and fuel rations from the clinic quartermaster",
        "effectText": "You stock up on essential road supplies and keep the engine idling.",
        "rewards": {
          "credits": -250,
          "cargo": {
            "batteries": 2
          },
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_04_chassis_corrosion",
    "title": "Aerosol Rot in the Redwoods",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 3
      },
      "maxQualities": {
        "Plague Stage": 3
      }
    },
    "text": "As you navigate through the petrified coastal forest, thick grey fog clings to the glass. Your dashboard warning sirens wail: nanite particulate levels in the ambient air are critical! The outer alloy plates of your rig begin to hiss and discolor.",
    "options": [
      {
        "id": "opt_plague04_reverse_air_scrubbers",
        "label": "Overcharge electrostatic cabin scrubbers to blow particulates off the chassis [ROLL +CYBER]",
        "effectText": "You reverse the polarity of the rig's magnetic alternator fields.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Electromagnetic repulsor field! The corrosive fog is ionized and pushed 50 feet away from your convoy.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The scrubbers hold the corrosive fog at bay, though your batteries run warm.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corrosive residue settles in your intake vents, chewing through an alternator belt.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague04_floor_throttle",
        "label": "Floor the accelerator and outrun the dense fog pocket [ROLL +EDGE]",
        "effectText": "You drop into low gear and push through the swirling aerosol bank at high speed.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterful high-speed rally driving! You burst into clean sunlight before corrosion takes hold.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break through the fog, but flying debris dints your passenger steps.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Low visibility leads to a clipping strike against a petrified redwood trunk.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague04_spray_oil_barrier",
        "label": "Coat the exterior chassis in heavy silicone oil sealant",
        "effectText": "The oil forms a sacrificial layer that absorbs the corrosive mist.",
        "rewards": {
          "credits": -150,
          "hullIntegrity": 5,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_05_cult_of_rust",
    "title": "Zealots of the Holy Decay",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 4
      },
      "maxQualities": {
        "Plague Stage": 4
      }
    },
    "text": "Spiked motorbikes and rust-eaten buggies intercept you. The \"Disciples of the Steel Decay\"—cultists who welcome the nanite infection as a divine purging of synthetic humanity—demand you surrender the Lazarus Matrix to the sacred rot.",
    "options": [
      {
        "id": "opt_plague05_ram_crusaders",
        "label": "Smash the spiked cult leader buggies with your steel cow-catcher [ROLL +GRIT]",
        "effectText": "You sound the air horns and drive straight at the cult's lead war-rig.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Monstrous impact! The lead buggy is crumpled into scrap metal, scattering the remaining zealots in terror.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You ram through their blockade, sustaining minor dents on your bull-bar.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A cultist buggy detonates against your left steering linkage before spinning off.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague05_theological_bluff",
        "label": "Broadcast a theological warning that the Matrix contains God's true flame [ROLL +COOL]",
        "effectText": "You amplify your voice over the hauler PA system with chilling prophetic conviction.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The cultists bow in religious awe, falling back to let the \"Chariot of the Final Word\" pass!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The zealots hesitate in bewilderment, opening a corridor just wide enough to slip through.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The fanatics scream heresy and unleash a volley of pipe-bombs at your trailer!",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague05_emp_discharge",
        "label": "Trigger a localized EMP blast from your secondary battery bank [ROLL +CYBER]",
        "effectText": "You short the high-voltage inverter into the exterior grounding rods.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The EMP wave fries every unshielded cultist ignition coil instantly, leaving them dead in the water!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Most attacker buggies stall, though your auxiliary alternator also trips.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The EMP arcs back into your cabin dashboard, blowing several fuses.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_06_dr_thorne_secret",
    "title": "The Architect's Confession",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 5
      },
      "maxQualities": {
        "Plague Stage": 5
      }
    },
    "text": "Dr. Thorne breaks down in the passenger seat under the quiet hum of the night highway. \"I didn't just find this cure,\" he whispers. \"I engineered the original military nanite strain for OmniDyne. When it mutated out of control, they locked down the sector and marked everyone for liquidation. The Lazarus Matrix doesn't just kill the rot—it rebuilds broken molecular lattice. It can make whatever it touches immortal... or lethal.\"",
    "options": [
      {
        "id": "opt_plague06_interrogate_motives",
        "label": "Press Thorne for the exact biochemical override sequences [ROLL +COOL]",
        "effectText": "You stare Thorne down in the mirror, calmly demanding every technical fact.",
        "statRoll": "cool",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Thorne hands over his personal encrypted optical key containing the root compiler for the nanite strains!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Thorne yields the basic firmware overrides, admitting he wants to atone.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Thorne clamors shut in guilt and anxiety, clutching the canister protectively.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague06_comfort_ally",
        "label": "Offer Thorne a cold drink and promise to help him redeem his mistakes [ROLL +GRIT]",
        "effectText": "You clasp the haunted scientist on the shoulder with steady, reassuring strength.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Thorne's resolve hardens. He vows absolute loyalty to your convoy and works overtime to optimize the cure.",
          "rewards": {
            "hullIntegrity": 15,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Thorne calms down and checks the pressure seals on the incubator.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The conversation remains uneasy, casting a shadow over the cab.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague06_focus_on_road",
        "label": "Keep your eyes on the road and remind him that surviving tonight comes first",
        "effectText": "The past cannot be undone; the only way out is through.",
        "rewards": {
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_07_incinerator_cordon",
    "title": "The Pyre of the Scorchers",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 6
      },
      "maxQualities": {
        "Plague Stage": 6
      }
    },
    "text": "An OmniDyne automated Scorch Drone patrol is burning the Interstate ahead with white phosphorus carpet munitions. Twisted flaming metal carcasses of civilian vehicles litter the melting tarmac.",
    "options": [
      {
        "id": "opt_plague07_thermal_cloaking",
        "label": "Activate heat-sink baffling to slip under the drones' infrared sweepers [ROLL +CYBER]",
        "effectText": "You shut down external lights and throttle exhaust gases through cryogenic chilling loops.",
        "statRoll": "cyber",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Undetected stealth! The scorch drones sweep past overhead without noticing your thermal shadow.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You pass unnoticed, though cabin temperature spikes uncomfortably.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Drones detect an exhaust flare and loose a phosphorus round near your rear bumper!",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague07_blaze_through",
        "label": "Gun the engine and drive straight through the wall of white fire [ROLL +GRIT]",
        "effectText": "You seal intake vents, hit fire suppression systems, and charge the burning gauntlet.",
        "statRoll": "grit",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The heavy alloy hauler bursts through the inferno like an iron comet, scorching clean every trace of rot!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You emerge from the flames with blistered paint and melted wiper blades.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Intense heat damages external wiring harnesses and pops a tire.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague07_anti_materiel_snipe",
        "label": "Take out the lead drone with a high-caliber roof rail shot [ROLL +EDGE]",
        "effectText": "You unlimber your heavy rifle through the roof hatch and track the hovering drone.",
        "statRoll": "edge",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Direct engine hit! The drone plummets into the command trench, disabling the patrol array.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You wing the drone, sending it spinning away into the hills.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Return fire pocks your trailer armor before you escape down a side ramp.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_08_abandoned_lab",
    "title": "The Bio-Vault Salvage",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 7
      },
      "maxQualities": {
        "Plague Stage": 7
      }
    },
    "text": "Dr. Thorne directs you to an overrun OmniDyne pharmaceutical research bunker hidden in an industrial ravine. \"We need liquid polymer catalysts to preserve the matrix,\" he explains. \"The facility was evacuated, but the automated bio-vaults remain locked.\"",
    "options": [
      {
        "id": "opt_plague08_crack_biovault",
        "label": "Bypass the biometric security lock on the subterranean vault [ROLL +CYBER]",
        "effectText": "You splice your deck into the cryogenic storage control node.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Full clearance unlocked! You secure 3 crates of ultra-pure nanite catalysts and valuable medical supplies.",
          "rewards": {
            "cargo": {
              "cryo": 3,
              "cyberware": 2
            },
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You pop the lock, securing sufficient catalyst vials for the journey.",
          "rewards": {
            "cargo": {
              "cryo": 1
            },
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Alarm triggers a defensive neuro-gas trap, forcing a hasty retreat.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague08_heavy_breach",
        "label": "Use your rig's winch cables to rip off the steel vault door [ROLL +GRIT]",
        "effectText": "You anchor heavy titanium tow cables around the vault hinge and drop into reverse gear.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The door is wrenched from its concrete mount with a deafening screech! Salvage is yours.",
          "rewards": {
            "cargo": {
              "chips": 3,
              "cryo": 1
            },
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The door tears open, though the winch cable snaps and whips your tailgate.",
          "rewards": {
            "hullIntegrity": -10,
            "cargo": {
              "cryo": 1
            },
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The concrete anchor holds fast, burning out your winch motor.",
          "rewards": {
            "credits": -200,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague08_scavenge_periphery",
        "label": "Search the warehouse loading dock for abandoned medical crates",
        "effectText": "You find useful first-aid kits and emergency rations without triggering security.",
        "rewards": {
          "cargo": {
            "cryo": 1,
            "grain": 2
          },
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_09_patient_zero",
    "title": "The Behemoth of the Underpass",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 8
      },
      "maxQualities": {
        "Plague Stage": 8
      }
    },
    "text": "In a shadowed highway tunnel, a nightmare blocks your path: a massive automated hauler whose chassis has completely fused with living mutated nanites and cyber-organic muscle tissue. It emits a subsonic mechanical roar and accelerates toward you!",
    "options": [
      {
        "id": "opt_plague09_exploit_overheat",
        "label": "Aim for the pulsing, unarmored cooling vents of the bio-rig [ROLL +EDGE]",
        "effectText": "You line up your auxiliary cannons on the glowing organic heat sinks.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Catastrophic detonation! The mutated rig violently vents pressurized plasma and collapses into slag.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You score critical hits, forcing the beast to limp away into the dark tunnel recesses.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: The monstrous hauler sideswipes you, tearing metal fenders before grinding to a halt.",
          "rewards": {
            "hullIntegrity": -26,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague09_nanite_disruption_pulse",
        "label": "Broadcast an inverted frequency pulse from the Lazarus Matrix [ROLL +CYBER]",
        "effectText": "You configure your antenna array to blast the cure's anti-rot harmonic frequency.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The nanite bonds in the attacker dissolve instantly! The monstrosity turns to harmless dust and inert iron.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The pulse stuns the bio-machine long enough for your convoy to blast past.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Feedback ripples through your radio array, blowing out your speakers.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague09_ram_chassis",
        "label": "Brace for impact and slam the creature head-on with maximum horsepower [ROLL +GRIT]",
        "effectText": "You lock your teeth, put the hammer down, and ram the aberration.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Unstoppable kinetic force! Your heavy iron prow crushes its cybernetic spine into the tunnel walls.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 9
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You shove the beast aside, sustaining heavy damage to your front grille.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The impact severely mangles your bumper and radiator.",
          "rewards": {
            "hullIntegrity": -32,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_10_coolant_failure",
    "title": "The Boiling Chamber",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 9
      },
      "maxQualities": {
        "Plague Stage": 9
      }
    },
    "text": "A red warning alarm flashes across the cargo bay cameras: the Lazarus Matrix cryogenic cooling loop has suffered a catastrophic pump seal rupture! Internal temperatures are climbing toward the critical threshold where the nanites will vaporize.",
    "options": [
      {
        "id": "opt_plague10_juryrig_coolant",
        "label": "Splice your truck's engine freon lines directly into the incubator [ROLL +CYBER]",
        "effectText": "You grab rubber hoses and diagnostic clamps, routing hauler refrigerant into the matrix.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless thermodynamic balancing! Temperatures drop into deep sub-zero and the core stabilizes.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The patch stabilizes the canister, though your cabin air conditioning is permanently sacrificed.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Freon escapes in a hissing cloud, burning your knuckles before you manage to clamp it.",
          "rewards": {
            "hullIntegrity": -10,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague10_thermal_dissipation",
        "label": "Channel excess heat through the chassis external plating [ROLL +GRIT]",
        "effectText": "You physically vent the thermal conduits through your truck's heavy undercarriage armor.",
        "statRoll": "grit",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The massive steel frame dissipates the heat harmlessly across the wasteland air.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT:Undercarriage gets glowing hot, cooking one of your spare tires.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Overheating burns out a hydraulic brake line, requiring emergency roadside braking.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague10_liquid_nitrogen",
        "label": "Dump an emergency canister of liquid nitrogen onto the containment shell",
        "effectText": "A quick, expensive fix that instantly cools the core back to baseline.",
        "rewards": {
          "credits": -300,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_11_corporate_blackmail",
    "title": "The Executive Judas Call",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 10
      },
      "maxQualities": {
        "Plague Stage": 10
      }
    },
    "text": "While refueling at an isolated desert depot, an encrypted holocall illuminates your dashboard. A senior OmniDyne vice-president, Victoria Sterling, smiles smoothly. \"Courier, you hold five billion credits of our proprietary intellectual property. Hand over Dr. Thorne and the Matrix. We will credit your account with ten thousand credits and grant you full corporate pardon. Refuse, and our tactical gunships will vaporize your convoy.\"",
    "options": [
      {
        "id": "opt_plague11_reject_sterling",
        "label": "Spit on the holo-screen and tell Sterling to send her worst [ROLL +GRIT]",
        "effectText": "You broadcast your defiance with unyielding contempt.",
        "statRoll": "grit",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sterling recoils in disbelief. Your unshakeable grit becomes legendary across the trucker airwaves!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 12,
              "Heat": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You cut the feed and rev your engine into gear.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Heat": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Corporate signals triangulate your refueling depot, scrambling hunter drones.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Heat": 25
            }
          }
        }
      },
      {
        "id": "opt_plague11_counter_extort",
        "label": "Counter-extort Sterling with leaked medical telemetry of the outbreak [ROLL +COOL]",
        "effectText": "You transmit a fragment of the classified outbreak logs with an ultimatum.",
        "statRoll": "cool",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Masterful blackmail! Sterling is terrified of public exposure and transfers a 2,500 credit hush advance!",
          "rewards": {
            "credits": 2500,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Sterling backs down and agrees to hold off immediate airstrikes.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 4
            }
          }
        },
        "miss": {
          "effectText": "MISS: Sterling dismisses your bluff with cold corporate laughter.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Heat": 15
            }
          }
        }
      },
      {
        "id": "opt_plague11_scramble_transponders",
        "label": "Burn your transponder chip and kill all electronic broadcast signals",
        "effectText": "You vanish from satellite tracking and roll out under dark-sky radar.",
        "rewards": {
          "credits": -200,
          "qualities": {
            "Plague Stage": 1,
            "Heat": -10
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_12_the_bleeding_circuit",
    "title": "Symbiosis of Steel",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 11
      },
      "maxQualities": {
        "Plague Stage": 11
      }
    },
    "text": "During a quiet inspection stop, you discover something breathtaking: micro-nanite vapors escaping the matrix have seeped into your hauler's damaged armor plating. Instead of corroding the iron, the nanites have bonded with the steel, weaving a shimmering, self-healing bio-metallic lattice that closed up bullet holes automatically!",
    "options": [
      {
        "id": "opt_plague12_guide_nanite_bonding",
        "label": "Direct the nanite infusion along your primary structural load-bearers [ROLL +CYBER]",
        "effectText": "You use your diagnostic deck to align the nanites with the truck's chassis frame.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Astonishing bio-synthetic fusion! The frame strengthens tenfold, regenerating armor in real time!",
          "rewards": {
            "hullIntegrity": 35,
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The nanite weave seals minor chassis cracks and reinforces your wheel arches.",
          "rewards": {
            "hullIntegrity": 18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The nanites mutate an electrical junction, causing dashboard dials to flicker erratically.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague12_test_alloy_tensile",
        "label": "Test the tensile strength and impact resistance of the new bio-plate [ROLL +GRIT]",
        "effectText": "You strike the reinforced bumper with a heavy sledgehammer to verify resilience.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The hammer bounces back like rubber! The metal absorbs and distributes kinetic energy instantly.",
          "rewards": {
            "hullIntegrity": 20,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The plate holds solidly against the blow.",
          "rewards": {
            "hullIntegrity": 10,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A small piece of brittle overgrowth snaps off in your hand.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague12_seal_containment",
        "label": "Carefully tighten the canister valve to prevent further uncontrolled leakage",
        "effectText": "You preserve the remaining pure matrix fluid for the mission destination.",
        "rewards": {
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_13_highway_ambush",
    "title": "The Harpoon Swarm",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 12
      },
      "maxQualities": {
        "Plague Stage": 12
      }
    },
    "text": "A coordinated strike team of raiders and rogue OmniDyne mercenaries strikes from canyon ridges. Heavy magnetic harpoons slam into your trailer walls, steel cables groaning under immense tension as they try to drag your hauler off the asphalt!",
    "options": [
      {
        "id": "opt_plague13_sever_cables",
        "label": "Overcharge your exterior hull grid to superheat and snap the tow cables [ROLL +CYBER]",
        "effectText": "You divert auxiliary battery banks through the exterior hull armor.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: White-hot electrical surge! The harpoon cables snap and whip violently back into the attacker rigs!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 5,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The cables snap under electrical tension, freeing your trailer.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The high-voltage feedback pops an onboard relay, jolting the cab.",
          "rewards": {
            "hullIntegrity": -14,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague13_counter_drag",
        "label": "Drop into maximum low gear and drag their vehicles into the canyon wall [ROLL +GRIT]",
        "effectText": "You lock your differentials and apply 1,500 foot-pounds of raw diesel torque.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Devastating tow power! You drag three mercenary buggies violently into the solid rock face, smashing them to pieces!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You break their grip after a brutal tug-of-war, leaving rubber skidmarks on the road.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Their combined drag bends your trailer frame before the cables finally give way.",
          "rewards": {
            "hullIntegrity": -24,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague13_evasive_fishtail",
        "label": "Fishtail your heavy rig across the lanes to shake them loose [ROLL +EDGE]",
        "effectText": "You swing the steering wheel in rhythmic, violent pendulum sweeps.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Cinematic driving! The whipping trailer flips two attacker buggies upside down!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The attackers lose their grip and peel off into the dirt.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: You clip a concrete road barrier, bruising your front axle.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_14_dust_storm_crossing",
    "title": "The Particulate Maelstrom",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 13
      },
      "maxQualities": {
        "Plague Stage": 13
      }
    },
    "text": "A ferocious radioactive dust storm rolls off the Salt Wash. The gale-force wind carries millions of microscopic iron-eating spores. Zero visibility surrounds your rig; instruments flicker as static electricity sparks across the windshield.",
    "options": [
      {
        "id": "opt_plague14_terrain_radar",
        "label": "Navigate through the storm using synthetic aperture terrain radar [ROLL +CYBER]",
        "effectText": "You tune your lidar deck to penetrate the blinding dust wall.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Crystal-clear green wireframe projection! You weave effortlessly past hidden boulders and sinkholes.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The radar keeps you on the highway center line, though grit scratches your sensor dome.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radar static blinds your displays, sending your tires into a roadside sand drift.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague14_instinct_drive",
        "label": "Trust trucker muscle memory and raw instincts to navigate the blind road [ROLL +GRIT]",
        "effectText": "You read the tilt of the road in your spine and grip the wheel steady.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Pure road mastery! You cruise through the heart of the maelstrom without a single stutter.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You push through the storm, arriving on the other side caked in thick red sand.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Fierce crosswinds nearly tip the trailer, straining your fifth-wheel coupling.",
          "rewards": {
            "hullIntegrity": -20,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague14_hunker_down",
        "label": "Pull into the lee of a rocky outcropping and wait for the worst to pass",
        "effectText": "You conserve fuel and wait out the storm safely in your cabin.",
        "rewards": {
          "hullIntegrity": 5,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_15_the_crossroads",
    "title": "The Great Mutation [CRUCIAL CROSSROAD]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 14
      },
      "maxQualities": {
        "Plague Stage": 14
      }
    },
    "text": "At the hidden crossroads outpost of New Jericho, the road branches in three distinct directions. Dr. Thorne stands before you with the glowing Lazarus Matrix in his hands. \"We have reached the divergence,\" he says solemnly. \"Three futures lie before us. Where do we deliver the power of the living machine?\"",
    "options": [
      {
        "id": "opt_plague15_choose_humanitarian",
        "label": "Path 1: Deliver the cure to the Central Oasis CDC to inoculate the wasteland [HUMANITARIAN WEAVE]",
        "effectText": "You choose salvation for all humanity. The CDC will mass-produce the antidote and distribute it freely across every refugee outpost and settlement.",
        "rewards": {
          "qualities": {
            "Plague Stage": 1,
            "Plague Chosen Path": 1,
            "Street Cred": 15
          }
        }
      },
      {
        "id": "opt_plague15_choose_transhuman",
        "label": "Path 2: Fuse the adaptive nanite matrix directly with your hauler's chassis [TRANSHUMAN SYNERGY]",
        "effectText": "You choose perfection of the machine. The living nanites will permanently bond with your rig's engine, chassis, and neural interface, birthing a legendary biomechanical dreadnought.",
        "rewards": {
          "qualities": {
            "Plague Stage": 1,
            "Plague Chosen Path": 2,
            "Tech Literacy": 15
          }
        }
      },
      {
        "id": "opt_plague15_choose_cartel",
        "label": "Path 3: Deliver the matrix to the Sovereign Syndicate for supreme black-market wealth [SOVEREIGN AUCTION]",
        "effectText": "You choose independence and untouchable power. The Syndicate will pay millions, granting you sovereign diplomatic immunity, sterile bastions, and high-tech cargo retrofits.",
        "rewards": {
          "qualities": {
            "Plague Stage": 1,
            "Plague Chosen Path": 3,
            "Contraband Mastery": 15
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_16_airdrop_blockade",
    "title": "The Cordon of Gunships",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 15
      },
      "maxQualities": {
        "Plague Stage": 15
      }
    },
    "text": "Aegis heavy rotorcraft and gunships patrol the skies above your approach vector. Searchlights sweep the highway, illuminating automated minefields deployed across the asphalt.",
    "options": [
      {
        "id": "opt_plague16_hack_gunship_datalink",
        "label": "Splice into the lead gunship's IFF datalink and spoof friendly signals [ROLL +CYBER]",
        "effectText": "You broadcast executive command overrides through your communications dish.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Total electronic deception! The gunships reclassify you as an authorized medical transport and fly escort!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 6,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The gunships are confused by conflicting data, letting you slip past during the hesitation.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The datalink rejects your packet, triggering a barrage of warning rockets that crater the road ahead.",
          "rewards": {
            "hullIntegrity": -18,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague16_thread_minefield",
        "label": "Slalom through the automated minefield at breakneck speed [ROLL +EDGE]",
        "effectText": "You thread your tires precisely between proximity sensor triggers.",
        "statRoll": "edge",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Flawless precision! You clear the minefield without detonating a single charge.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clip the edge of a mine, shrapnel shredding your mudguard.",
          "rewards": {
            "hullIntegrity": -12,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A mine detonates beneath your trailer, violently jostling the suspension.",
          "rewards": {
            "hullIntegrity": -25,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague16_remote_detonation",
        "label": "Fire explosive road flares to trigger the mines from safe distance",
        "effectText": "The flares detonate a chain reaction of mines, clearing a scorched path through the barrier.",
        "rewards": {
          "credits": -150,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_17_the_terminal_colony",
    "title": "The Heart of the Infection",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 16
      },
      "maxQualities": {
        "Plague Stage": 16
      }
    },
    "text": "You enter the red-zone epicenter. Mutated nanite creepers hang from dilapidated overpasses like synthetic Spanish moss. Distant survivor signals crackle over your CB radio, calling for aid as the countdown to your final destination begins.",
    "options": [
      {
        "id": "opt_plague17_broadcast_hope",
        "label": "Broadcast an inspirational radio address to rally the survivors [ROLL +COOL]",
        "effectText": "You open the airwaves and speak from the heart to every bunker and refugee enclave.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Your voice echoes like thunder across the wasteland! Hundreds of haulers turn their lights on in salute!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: Survivors hear your message and cheer your convoy through the ruined streets.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 5
            }
          }
        },
        "miss": {
          "effectText": "MISS: Radio feedback drowns your transmission in static.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague17_harvest_nanite_culture",
        "label": "Extract active wild nanite cultures from the hanging creepers [ROLL +CYBER]",
        "effectText": "You use robotic sampling arms to harvest samples of the most resilient mutant strains.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Exceptional biological data! You unlock profound insights into molecular self-repair.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 8
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You secure several viable sample tubes.",
          "rewards": {
            "cargo": {
              "cryo": 2
            },
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: A swarm of aerosol spores clogs your sampling suction motor.",
          "rewards": {
            "hullIntegrity": -8,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague17_arm_convoy",
        "label": "Mount surplus ammunition belts on your cab machine-gun pintles",
        "effectText": "You prepare every weapon aboard for the final sprint to the destination.",
        "rewards": {
          "credits": -200,
          "hullIntegrity": 10,
          "qualities": {
            "Plague Stage": 1
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_18_sanitizer_dreadnought",
    "title": "The Iron Inquisitor",
    "triggerType": "TRANSIT_ENCOUNTER",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 17
      },
      "maxQualities": {
        "Plague Stage": 17
      }
    },
    "text": "The ultimate obstacle appears: an OmniDyne Titan Purifier Dreadnought—a four-story crawler equipped with dual chemical flamethrowers and heavy magnetic rail cannons, deployed to sterilize all life leaving the red zone.",
    "options": [
      {
        "id": "opt_plague18_ram_fuel_tanks",
        "label": "Target the Purifier's auxiliary napalm fuel tanks with armor-piercing rounds [ROLL +EDGE]",
        "effectText": "You line up the high-velocity rifle sight on the crawler's exposed fuel pods.",
        "statRoll": "edge",
        "qualityBonusKey": "Cyberware Level",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Magnificent explosion! A massive fireball consumes the Purifier's weapon towers, blinding its targeting grid!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 12
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The tank ruptures, forcing the Purifier to douse its own flames.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Purifier flamethrowers scorch your side panels as you scramble past.",
          "rewards": {
            "hullIntegrity": -22,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague18_hack_crawler_tracks",
        "label": "Transmit a track-lock command into the Purifier's locomotive drive [ROLL +CYBER]",
        "effectText": "You target its tracked suspension with an emergency braking virus.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The massive tracks grind to a violent halt with the screech of shredded steel, leaving the beast immobilized!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 8,
              "Street Cred": 6
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The crawler slows significantly, allowing you to slip past its firing arc.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: Purifier electronic counter-measures fry your deck's secondary transceiver.",
          "rewards": {
            "hullIntegrity": -15,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      },
      {
        "id": "opt_plague18_speed_dash_under",
        "label": "Speed beneath the crawler's central belly clearance at full throttle [ROLL +GRIT]",
        "effectText": "You aim your hauler directly between the monstrous crawler's giant caterpillar treads.",
        "statRoll": "grit",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Audacious insanity! You shoot beneath the iron titan at 120 km/h, emerging untouched on the clear highway beyond!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: You clear the belly, though an overhead gantry scrapes your cab roof.",
          "rewards": {
            "hullIntegrity": -16,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The crawler shifts weight, clipping your trailer and throwing your rig into a wild spin before you recover.",
          "rewards": {
            "hullIntegrity": -30,
            "qualities": {
              "Plague Stage": 1
            }
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_19_nanite_storm_climax",
    "title": "The Crucible of the Lazarus Matrix [CLIMAX GAUNTLET]",
    "triggerType": "ANY",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 18
      },
      "maxQualities": {
        "Plague Stage": 18
      }
    },
    "text": "You have broken out of the red zone and arrived at your final objective! The sky roars with the lightning of a nanite super-storm as you execute your definitive chosen destiny.",
    "options": [
      {
        "id": "opt_plague19_cure_distribution",
        "label": "Connect the Lazarus Matrix to the Oasis CDC Dispersal Array [HUMANITARIAN PATH] [ROLL +COOL]",
        "effectText": "You hook the canister up to the atmospheric dispersal rockets to shower the continent in the antidote.",
        "statRoll": "cool",
        "qualityBonusKey": "Street Cred",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: The rockets detonate in a golden shower of healing rain! Millions of lives are saved across the wasteland!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The dispersal rockets launch successfully, distributing the antidote across the major settlements.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: A rocket misfires, but the main ground tanks begin pumping the cure into the reservoir.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_plague19_nanite_fusion",
        "label": "Inject the entire living nanite matrix directly into your hauler's core [TRANSHUMAN PATH] [ROLL +CYBER]",
        "effectText": "You open the primary fuel injectors and channel the living nanite fluid into the engine block and chassis lattice.",
        "statRoll": "cyber",
        "qualityBonusKey": "Tech Literacy",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Apotheosis of the Iron Beast! Your rig pulses with emerald bio-luminescence as living chitin plating seals every fracture!",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 20
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The bio-nanites assimilate successfully, permanently regenerating your vehicle frame.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1,
              "Tech Literacy": 10
            }
          }
        },
        "miss": {
          "effectText": "MISS: Severe power surges shake the cab before the bio-mechanical link stabilizes.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_plague19_cartel_deal",
        "label": "Deliver the sealed Matrix into the hands of the Syndicate Vault Lords [CARTEL PATH] [ROLL +COOL]",
        "effectText": "You hand over the canister inside the Syndicate's subterranean gold repository.",
        "statRoll": "cool",
        "qualityBonusKey": "Contraband Mastery",
        "qualityBonusThreshold": 3,
        "rewards": {},
        "strongHit": {
          "effectText": "STRONG HIT: Sovereign fortune! Billions in bearer bonds and elite high-tech rig components are loaded onto your hauler!",
          "rewards": {
            "credits": 8000,
            "qualities": {
              "Plague Stage": 1,
              "Street Cred": 15
            }
          }
        },
        "weakHit": {
          "effectText": "WEAK HIT: The Syndicate verifies the purity of the sample and honors the massive contract.",
          "rewards": {
            "credits": 4000,
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "miss": {
          "effectText": "MISS: The exchange is tense, but payment clears into your encrypted Swiss bank account.",
          "rewards": {
            "qualities": {
              "Plague Stage": 1
            }
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 3
          }
        }
      }
    ]
  },
  {
    "id": "story_plague_20_finale",
    "title": "The Living Legend [FINALE]",
    "triggerType": "DOCK",
    "triggerLocation": "Any",
    "repeatable": false,
    "reqs": {
      "qualities": {
        "Plague Stage": 19
      },
      "maxQualities": {
        "Plague Stage": 19
      }
    },
    "text": "The saga of the Silicon Rot is over. The wasteland will remember your name for generations. Your rig has been permanently modified with revolutionary bio-synthetic engineering.",
    "options": [
      {
        "id": "opt_plague20_ending_humanitarian",
        "label": "Champion the Wasteland with the Bio-Polymer Hull Weave [ENDING 1: AEGIS BIO-WEAVE]",
        "effectText": "Recognized as the Savior of the Wasteland, your rig is fitted with self-repairing Aegis Bio-Weave plating that continually regenerates armor integrity and boosts transit endurance.",
        "rewards": {
          "credits": 14000,
          "hullIntegrity": 100,
          "cargo": {
            "cryo": 4,
            "cyberware": 2
          },
          "qualities": {
            "Plague Stage": 80,
            "Street Cred": 30,
            "Heat": -50
          },
          "stats": {
            "grit": 1,
            "cool": 1
          },
          "rig": {
            "maxHull": 30,
            "speedRating": 0.15,
            "name": "Iron Nomad - Aegis Bio-Weave"
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 1
          }
        }
      },
      {
        "id": "opt_plague20_ending_transhuman",
        "label": "Rule the Highway as a Living Machine God [ENDING 2: LIVING CHITIN CHASSIS]",
        "effectText": "Your hauler is no longer mere metal—it is an apex biomechanical organism. The self-repairing chitin armor grants unprecedented maximum hull strength and turbocharged kinetic output.",
        "rewards": {
          "credits": 12000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 5,
            "batteries": 3
          },
          "qualities": {
            "Plague Stage": 80,
            "Tech Literacy": 25,
            "Street Cred": 25
          },
          "stats": {
            "grit": 1,
            "cyber": 1
          },
          "rig": {
            "maxHull": 40,
            "speedRating": 0.2,
            "name": "Iron Nomad - Living Chitin Chassis"
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 2
          }
        }
      },
      {
        "id": "opt_plague20_ending_cartel",
        "label": "Cruise in Sovereign Luxury in the Sterile Bastion [ENDING 3: STERILE BASTION]",
        "effectText": "Armed with Syndicate gold, diplomatic immunity, and heavy shielded cargo bays, your rig is the most prestigious and secure hauler in the continental underworld.",
        "rewards": {
          "credits": 22000,
          "hullIntegrity": 100,
          "cargo": {
            "cyberware": 4,
            "chips": 4
          },
          "qualities": {
            "Plague Stage": 80,
            "Street Cred": 25,
            "Contraband Mastery": 20
          },
          "stats": {
            "cool": 1,
            "edge": 1
          },
          "rig": {
            "maxHull": 25,
            "speedRating": 0.15,
            "maxCargoWeight": 5,
            "name": "Iron Nomad - Sterile Bastion"
          }
        },
        "reqs": {
          "qualities": {
            "Plague Chosen Path": 3
          }
        }
      },
      {
        "id": "opt_plague20_farewell",
        "label": "Collect final courier bonus and drive quietly toward new horizons",
        "effectText": "With the plague behind you and your pockets full, you fire up the engine and merge into the vast highway ahead.",
        "rewards": {
          "credits": 10000,
          "qualities": {
            "Plague Stage": 80,
            "Street Cred": 10
          },
          "stats": {
            "grit": 1
          },
          "rig": {
            "maxHull": 20
          }
        }
      }
    ]
  }
];
