import { Storylet } from '../types/storylet';

export const CRYO_QUEST_STORYLETS: Storylet[] = [
  // -----------------------------------------------------------------------------------------
  // 1. THE SUB-ZERO CONSIGNMENT (STAGE 0 -> 1)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_01_handoff',
    title: 'The Sub-Zero Consignment',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Street Cred': 2 },
      maxQualities: { 'Cryo Extraction': 0 }
    },
    text: 'In the freezing industrial rain behind the loading docks, a twitchy fixer clad in insulated thermal gear waves your hauler into an unmonitored bay. Behind him sits a heavy, frosted titanium container sealed with magnetic hazard clamps and venting liquid nitrogen vapor. "Pay attention, hauler," the fixer mutters through his respirator. "This is Class-IV bio-contraband. Keep the internal coolant below minus eighty. No hardware scans, no manifests, and do NOT open the lid. Move it across sector lines and you get a fat payday."',
    options: [
      {
        id: 'opt_cryo01_inspect_locks',
        label: 'Inspect the biometric frost-locks [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You discreetly connect your sensor probe to the container diagnostic bus.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your probe pierces the firewall. Beneath the fake bio-sample telemetry, you detect a rhythmic 35 BPM metabolic pulse and a human neural wave! You accept the haul knowing someone is frozen inside.',
          rewards: {
            credits: 1200,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Corpo Truth Known': 1, 'Tech Literacy': 1, 'Contraband Mastery': 1, 'Heat': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Diagnostic bus is heavily encrypted with corporate ICE, but you confirm it is drawing massive rig power. The fixer hands over an advance deposit.',
          rewards: {
            credits: 900,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Contraband Mastery': 1, 'Heat': 6 }
          }
        },
        miss: {
          effectText: 'MISS: Your scanner triggers an acoustic tamper warning! The fixer snaps, but hurriedly winches the cold-crate into your cargo bay before dock guards investigate.',
          rewards: {
            credits: 600,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Contraband Mastery': 1, 'Heat': 12 }
          }
        }
      },
      {
        id: 'opt_cryo01_hazard_fee',
        label: 'Demand hazardous cargo surcharge upfront [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You lean against your cabin door and point at the flashing cryogenic warning diodes, refusing to budge without hazard pay.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The panicked fixer yields, transferring a premium hazard advance and encrypted bypass keys to sweeten the deal.',
          rewards: {
            credits: 1500,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2, 'Contraband Mastery': 1, 'Heat': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The fixer grumbles and tosses a purse of cred-chips on your dashboard before bolting into the shadows.',
          rewards: {
            credits: 1000,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1, 'Heat': 5 }
          }
        },
        miss: {
          effectText: 'MISS: "Take it or I hire the next rig!" the fixer snarls. You take the standard contract before losing the opportunity.',
          rewards: {
            credits: 750,
            cargo: { cryo: 1 },
            qualities: { 'Cryo Extraction': 1, 'Heat': 5 }
          }
        }
      },
      {
        id: 'opt_cryo01_no_questions',
        label: 'Accept the cold-crate silently and winch into hold',
        effectText: 'You latch the frosted titanium coffin into your rig shielded bay. The heavy magnetic clamps lock tight with a deep pneumatic hiss.',
        rewards: {
          credits: 800,
          cargo: { cryo: 1 },
          qualities: { 'Cryo Extraction': 1, 'Contraband Mastery': 1, 'Heat': 4 }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 2. THE HEARTBEAT IN THE CHILL (BRANCH 1: Investigate vs Preserve) (STAGE 1 -> 2)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_02_humming_box',
    title: 'The Heartbeat in the Chill',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 1 },
      maxQualities: { 'Cryo Extraction': 1 }
    },
    text: 'At 0200 hours on the dark interstate, your cockpit instruments shudder. The refrigerated coffin is drawing excessive auxiliary wattage, causing your navigation displays to strobe in cyan static. From inside the cargo hold comes a muffled metallic thump, followed by the electronic beep of a medical life-support monitor: "CARDIAC CYCLE DETECTED: 42 BPM."',
    options: [
      {
        id: 'opt_cryo02_slice_telemetry',
        label: 'Slice into the encrypted container telemetry [ROLL +CYBER] [BRANCH 1A]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You jack your cyberdeck into the external diagnostic junction of the cold-box.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [TRUTH UNVEILED]: You crack the Aegis corporate encryption! The internal HUD reveals: "SUBJECT: DR. ELENA VANCE — CHIEF ARCHITECT, AEGIS AUTONOMOUS SYSTEMS. EXTRACTION STATUS: SELF-INDUCED CRYOPRESERVATION." She is not contraband cargo—she is a high-ranking corporate defector fleeing her own company!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Corpo Truth Known': 1, 'Tech Literacy': 2, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You bypass the outer lock and view the thermal sensor. A human silhouette is clearly curled inside the frosted stasis gel, clutching an encrypted quantum datapad.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Corpo Truth Known': 1, 'Tech Literacy': 1, 'Glitch Rating': 1 }
          }
        },
        miss: {
          effectText: 'MISS: An anti-tamper defensive shock arcs through the data jack! The terminal restarts, but the audio feed confirms gasping breaths from within.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Cryo Extraction': 1, 'Corpo Truth Known': 1, 'Glitch Rating': 2 }
          }
        }
      },
      {
        id: 'opt_cryo02_route_power',
        label: 'Reinforce rig auxiliary circuits to protect the stasis seal [ROLL +GRIT] [BRANCH 1B]',
        statRoll: 'grit',
        effectText: 'You haul heavy high-voltage jumper cables to the rear bay, manually coupling rig power to stabilize the refrigeration compressor.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You balance the power grid with veteran mechanical finesse. The compressor settles into a quiet sub-zero hum, locking the stasis core at 100% stability.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 100, 'Street Cred': 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The compressor stabilizes, but the heavy electrical drain heats up your alternator, singing wiring insulation.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 90 }
          }
        },
        miss: {
          effectText: 'MISS: A power surge blows a main chassis breaker! The container temperature creeps up to -40°C before backup fuses engage.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 75, 'Heat': 4 }
          }
        }
      },
      {
        id: 'opt_cryo02_throttle_power',
        label: 'Throttle stasis power to preserve convoy speed [Contraband Mastery 1+]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Contraband Mastery': 1 } },
        effectText: 'You dial down auxiliary wattage to maintain maximum speed. The capsule begins an erratic low-power hibernation cycle.',
        rewards: {
          qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 80, 'Contraband Mastery': 1 }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 3. AEGIS BLACK-OPS SWEEPER (BRANCH 2: Evade vs Parley vs Ram vs Backdoor) (STAGE 2 -> 3)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_03_patrol_ambush',
    title: 'Aegis Black-Ops Sweeper',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 2 },
      maxQualities: { 'Cryo Extraction': 2 }
    },
    text: 'A roar of twin jet turbines shakes the asphalt. A matte-black Aegis Hunter gunship descends from the clouds, pinning your rig with blinding searchlights. A synthesized command broadcasts across emergency frequencies: "HAULER RIG 44: CUT PROPULSION IMMEDIATELY. SCANNER HAS DETECTED AEGIS EXECUTIVE BIOMETRICS IN YOUR CARGO AREA. COMPLY OR BE TARGETED WITH KINETIC ORDNANCE."',
    options: [
      {
        id: 'opt_cryo03_evasive_ravine',
        label: 'Kill exterior lights and dive into the ravine highway [ROLL +EDGE] [BRANCH 2A]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 1,
        effectText: 'You wrench the steering column hard right, cutting headlights and drifting through jagged sandstone canyons.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You outmaneuver the gunship thermal tracking! A high-speed bootlegger slide beneath a natural archway leaves the chopper scanning empty desert.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3, 'Heat': -5 },
            rep: { aegis: -5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You escape into the ravine, but heavy machine-gun tracer fire rakes your rear cargo doors before the gunship loses radar lock.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Cryo Extraction': 1, 'Heat': 8 }
          }
        },
        miss: {
          effectText: 'MISS: Gunship acoustic depth charges detonate directly overhead! Shockwaves shatter the windshield and severely rattle your hull.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Cryo Extraction': 1, 'Heat': 18, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_cryo03_bluff_manifest',
        label: 'Broadcast forged biological disposal manifest [ROLL +COOL] [BRANCH 2B]',
        statRoll: 'cool',
        qualityBonusKey: 'Enclave Permits',
        qualityBonusThreshold: 1,
        effectText: 'You key the radio and transmit an encrypted clearance stream, claiming you are on a classified bio-waste incineration haul.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The Aegis pilot hesitates. Your fabricated quarantine credentials verify against the corporate database. "Corridor cleared. Proceed to disposal point."',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3, 'Enclave Permits': 1, 'Heat': -8 },
            rep: { aegis: 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The pilot accepts the manifest after demanding an immediate corporate communications surcharge.',
          rewards: {
            credits: -250,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: "MANIFEST FRAUDULENT," the gunship barks. Warning autocannon rounds blast crater holes in the road, forcing an evasive crash-turn.',
          rewards: {
            hullIntegrity: -15,
            credits: -300,
            qualities: { 'Cryo Extraction': 1, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_cryo03_corpo_override',
        label: 'Transmit Dr. Vance’s executive recall cipher [Tech Literacy 2+] [BRANCH 2C]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
          qualities: { 'Corpo Truth Known': 1, 'Tech Literacy': 2 }
        },
        effectText: 'You upload the encrypted security token retrieved from the container diagnostic bus directly to the gunship transponder.',
        rewards: {
          qualities: { 'Cryo Extraction': 1, 'Tech Literacy': 1, 'Heat': -15, 'Street Cred': 4 },
          rep: { aegis: 10 }
        }
      },
      {
        id: 'opt_cryo03_ram_drone',
        label: 'Ram the interceptor escort drone and accelerate [ROLL +GRIT] [BRANCH 2D]',
        statRoll: 'grit',
        effectText: 'You floor the throttle, aiming your heavy steel plow straight at the gunship ground-spotter rover.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your reinforced ram crushes the scout rover into burning debris, kicking up an impenetrable dust screen that blinds the gunship.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 4, 'Heat': 15 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The scout drone is demolished, but the explosion blasts shrapnel into your front tires and radiator.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2, 'Heat': 20 }
          }
        },
        miss: {
          effectText: 'MISS: The drone magnetic mine detonates against your front axle before impact, causing heavy damage before you limp away.',
          rewards: {
            hullIntegrity: -30,
            qualities: { 'Cryo Extraction': 1, 'Heat': 25, 'Street Cred': 1 }
          }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 4. THERMAL RUNAWAY (BRANCH 3: Defrost vs Stabilize vs Nitrogen) (STAGE 3 -> 4)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_04_thaw_failure',
    title: 'Thermal Runaway',
    triggerType: 'ANY',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 3 },
      maxQualities: { 'Cryo Extraction': 3 }
    },
    text: 'A high-pitched klaxon screams from the cargo compartment. White clouds of pressurized coolant spew through the ventilation grilles. The digital readout on the capsule flashes: "COOLANT LOOP BREACH. CORE TEMP AT -15°C AND RISING. AUTOMATIC DEFROST SEQUENCE COMMENCING IN 90 SECONDS." If you do nothing, the occupant could suffer fatal cellular trauma—or awaken right now in the hold!',
    options: [
      {
        id: 'opt_cryo04_controlled_thaw',
        label: 'Initiate controlled defrost and revive Dr. Vance [ROLL +COOL] [BRANCH 3A]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You activate the emergency resuscitation sequence, preparing thermal blankets and neural stimulators.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [DR. VANCE REVIVED]: The glass canopy unlocks and hisses open. A woman in a frosted corporate jumpsuit coughs and sits up, her cyan cybernetic oculars refocusing. "Hauler... you saved my life," she whispers, clutching your arm. Dr. Vance is now conscious and actively assisting your escape!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Dr Vance Awakened': 1, 'Corpo Truth Known': 1, 'Street Cred': 4, 'Tech Literacy': 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The resuscitation cycle revives her, but the abrupt thaw causes violent shivering and disorientation. She rests in the cabin bunk, grateful for survival.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Dr Vance Awakened': 1, 'Corpo Truth Known': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: The defibrillator pads discharge erratically! Dr. Vance is revived with searing synaptic shock, crying out in pain before stabilizing.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Dr Vance Awakened': 1, 'Corpo Truth Known': 1, 'Glitch Rating': 2 }
          }
        }
      },
      {
        id: 'opt_cryo04_hotwire_pump',
        label: 'Hotwire coolant loop using hydro-battery fluid [ROLL +CYBER] [BRANCH 3B]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You bypass the leaking compressor valve by splicing hydro-battery electrolyte into the primary heat exchanger.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Brilliant field engineering! The core plunges back to a steady -85°C. The occupant remains in pristine cryo-stasis with zero physiological distress.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 100, 'Tech Literacy': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The temperature drops to -60°C, stabilizing the stasis field, though the makeshift patch consumes a battery unit.',
          rewards: {
            cargo: { batteries: -1 },
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 85, 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Battery acid shorts out the relay! A small electrical fire scorches the capsule exterior before you extinguish the flames.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 70, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_cryo04_flash_weld',
        label: 'Torch-weld the thermal manifold shut [ROLL +GRIT] [BRANCH 3C]',
        statRoll: 'grit',
        effectText: 'You grab the plasma welder and lay down a heavy bead of molten titanium over the ruptured manifold.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The plasma weld fuses the rupture tight. The internal cooling pressure rebounds instantly to sub-zero safety.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 90, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The weld holds, but thermal stress warps the container casing, making future access tricky.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 80 }
          }
        },
        miss: {
          effectText: 'MISS: High heat from the torch ignites freon gas! A concussive flare burns your hands and dents the container frame.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Cryo Extraction': 1, 'Cryo Capsule Health': 65 }
          }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 5. THE DEFECTOR'S CONFESSION (STAGE 4 -> 5)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_05_the_revelation',
    title: 'The Defector’s Confession',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 4 },
      maxQualities: { 'Cryo Extraction': 4 }
    },
    text: 'During a brief maintenance stop, the capsule intercom (or Dr. Vance herself) addresses you in earnest: "Hauler... I owe you the complete truth. I am Dr. Elena Vance. For six years, I designed the Autonomous Neural Kill-Grid for Aegis. Last month, they ordered me to authorize deployment against civilian wastelands. I refused and deleted the encryption root. When they issued my liquidation order, my only escape was to freeze myself and hire off-grid transport. The quantum drive in this capsule holds their entire military algorithm. Help me reach freedom, and I will share its power."',
    options: [
      {
        id: 'opt_cryo05_pledge_alliance',
        label: 'Pledge convoy protection and alliance [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 4,
        effectText: 'You look Dr. Vance in the eye and swear on the hauler brotherhood to deliver her safely across the border.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Deeply moved by your honor, Dr. Vance shares high-level encryption overrides that cloak your rig from Aegis satellites and grant access to offshore accounts.',
          rewards: {
            credits: 1200,
            qualities: { 'Cryo Extraction': 1, 'Vance Trust': 2, 'Street Cred': 4, 'Enclave Permits': 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: She nods cautiously and wires an operational stipend to keep your rig fueled and armed.',
          rewards: {
            credits: 700,
            qualities: { 'Cryo Extraction': 1, 'Vance Trust': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: She senses tension in your voice. "I will pay you, hauler, but remember—if Aegis catches us, they leave no witnesses."',
          rewards: {
            credits: 400,
            qualities: { 'Cryo Extraction': 1, 'Vance Trust': 1 }
          }
        }
      },
      {
        id: 'opt_cryo05_neural_upgrade',
        label: 'Integrate her experimental neural chip into your cyberware [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'Dr. Vance offers an unreleased military neural coprocessor to augment your hauler reaction time.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The quantum coprocessor syncs flawlessly with your neural link! Reflex speeds quadruple and road telemetry shines with predictive vectors.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cyberware Level': 2, 'Tech Literacy': 2, 'Glitch Rating': -1 },
            stats: { cyber: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The chip installs with a minor headache, elevating your electronic senses.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cyberware Level': 1, 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Synaptic voltage spike! The installation causes severe optic static before the driver stabilizes.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Cyberware Level': 1, 'Glitch Rating': 2 }
          }
        }
      },
      {
        id: 'opt_cryo05_demand_vault',
        label: 'Demand access to her offshore cred-vault [Contraband Mastery 2+]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Contraband Mastery': 2 } },
        effectText: 'You point out the monumental corporate heat you are risking and demand a direct Swiss bank debit transfer.',
        rewards: {
          credits: 2000,
          qualities: { 'Cryo Extraction': 1, 'Contraband Mastery': 1, 'Street Cred': 1 }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 6. THE GRIDLOCK EXTORTION (BRANCH 4: Decoy vs Boost vs Ram vs Killcode) (STAGE 5 -> 6)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_06_syndicate_bribe',
    title: 'The Gridlock Extortion',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 5 },
      maxQualities: { 'Cryo Extraction': 5 }
    },
    text: 'A wall of burning freight tankers blocks the interstate. Out from the smoke roll four Gridlock Syndicate assault rigs with mounted harpoons and plasma flamethrowers. Road-Boss Kael hails you: "Well, well. Aegis put out a continental APB for a defector in a sub-zero box. Hand over the cargo, hauler. We collect forty thousand from corporate, and we cut you ten thousand clean. Reject our hospitality, and you burn on this asphalt."',
    options: [
      {
        id: 'opt_cryo06_decoy_canister',
        label: 'Deliver a decoy bio-toxin canister and escape [ROLL +COOL] [BRANCH 4A]',
        statRoll: 'cool',
        qualityBonusKey: 'Contraband Mastery',
        qualityBonusThreshold: 2,
        effectText: 'You rig an empty toxic container with flashing hazard flares and offer it as the payload.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The syndicate raiders swarm the glowing fake canister in greedy celebration. By the time they realize it is empty, your convoy is three kilometers down the highway!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 4, 'Contraband Mastery': 1, 'Heat': -5 },
            rep: { gridlock: -5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The ruse gives you a 30-second head start, but syndicate technicals chase you down and spray shrapnel before you lose them.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: Kael scans the canister and realizes the trick instantly! "LIAR!" Flamethrowers scorch your hauler flanks.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1, 'Heat': 10 }
          }
        }
      },
      {
        id: 'opt_cryo06_jump_blockade',
        label: 'Fire nitro-boosters and jump the burning tanker wreckage [ROLL +EDGE] [BRANCH 4B]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You spot a collapsed asphalt ramp and open the nitrous injectors to vault the blockade.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The 35-ton rig launches airborne over the blazing tankers in a jaw-dropping stunt, landing with thunderous momentum and leaving the warlords speechless!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 5 },
            stats: { edge: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You clear the flames, but the violent landing blows a suspension strut and dents the rear container brackets.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3 }
          }
        },
        miss: {
          effectText: 'MISS: The tires clip the burning tanker rim! Flames lick the chassis and the impact shears away exterior equipment before you crash-land.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2, 'Heat': 8 }
          }
        }
      },
      {
        id: 'opt_cryo06_ram_syndicate',
        label: 'Drop the heavy plow and pulverize their lead technical [ROLL +GRIT] [BRANCH 4C]',
        statRoll: 'grit',
        effectText: 'You shift into low gear, lock differential axles, and drive straight into their armored gun-truck.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Pure industrial power! Your iron plow rolls their lead technical into an accordion of scrap metal, scattering the remaining bandits in terror.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You smash through their line, but heavy fire from their roof-mounted harpoons tears into your trailer.',
          rewards: {
            hullIntegrity: -20,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: You collide with reinforced engine blocks. The rig grinds to a momentary halt as syndicate raiders plant magnetic breaching charges.',
          rewards: {
            hullIntegrity: -35,
            credits: -500,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_cryo06_transmit_killcode',
        label: 'Broadcast Vance’s corporate kill-code to stall syndicate engines [Tech Literacy 3+] [BRANCH 4D]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Tech Literacy': 3 } },
        effectText: 'Dr. Vance transmits a zero-day exploit targeting the civilian ECM units in the syndicate rigs, shutting down their alternators simultaneously.',
        rewards: {
          qualities: { 'Cryo Extraction': 1, 'Tech Literacy': 2, 'Street Cred': 4, 'Heat': -5 },
          rep: { gridlock: -10 }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 7. ORBITAL HUNTER-KILLER PING (STAGE 6 -> 7)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_07_neural_hunt',
    title: 'Orbital Hunter-Killer Ping',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 6 },
      maxQualities: { 'Cryo Extraction': 6 }
    },
    text: 'A high-frequency tone rings in your ears. Your rig GPS map flips upside down as an Aegis orbital surveillance satellite aligns its orbital optics directly above your grid coordinates. A countdown timer materializes on your heads-up display: "KINETIC SATELLITE BEACON SYNCHRONIZED. ORBITAL TUNGSTEN STRIKE INBOUND IN 60 SECONDS."',
    options: [
      {
        id: 'opt_cryo07_frequency_scramble',
        label: 'Erect an electronic spoofing bubble with rig radar dish [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You overload your high-gain communications dish, projecting a phantom convoy signature onto an abandoned railyard 5 km away.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Brilliant electronic spoof! The orbital satellite fires—a blinding pillar of fire vaporizes the distant railyard while your rig slips past undetected.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Tech Literacy': 3, 'Street Cred': 3, 'Heat': -10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The decoy diverts the main strike, but the supersonic shockwave ripples across the highway, rattling your rig chassis.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Cryo Extraction': 1, 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Decoy fails to calibrate! The tungsten rod strikes within 100 meters, showering your hauler in molten asphalt and concussive shock.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Cryo Extraction': 1, 'Glitch Rating': 2, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_cryo07_tunnel_sprint',
        label: 'Push the engine into redline to reach mountain tunnel shelter [ROLL +EDGE]',
        statRoll: 'edge',
        effectText: 'You drop all gears and floor the accelerator, racing against the orbital countdown to reach the shadow of the Black Rock tunnels.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You blast into the reinforced bedrock tunnel just as the kinetic strike obliterates the highway behind your rear bumper!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You reach the tunnel mouth, but falling rock and debris from the entrance impact dent your cargo bay.',
          rewards: {
            hullIntegrity: -14,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: The engine overheats and sputters meters before the portal. Concussive pressure caves in the rear trailer tailgate.',
          rewards: {
            hullIntegrity: -26,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1, 'Heat': 8 }
          }
        }
      },
      {
        id: 'opt_cryo07_ground_hull',
        label: 'Drop magnetic anchor shoes and harden chassis against kinetic shock [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'Knowing you cannot outrun the strike, you anchor steel blast-shields and brace for catastrophic shockwaves.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The rig withstands the blinding seismic detonation like a monolithic bunker, sustaining minimal structural damage.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The rig anchors hold, but shockwaves crack the windshield and blow out external floodlights.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: Blast-shield anchors tear free! The convoy is shoved onto its side wheels, severely twisting the chassis frame.',
          rewards: {
            hullIntegrity: -32,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 1 }
          }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 8. THE EXTRACTION CROSSROADS (BRANCH 5: Destination Choice) (STAGE 7 -> 8)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_08_solaris_crossroads',
    title: 'The Extraction Crossroads',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 7 },
      maxQualities: { 'Cryo Extraction': 7 }
    },
    text: 'You pull into a secluded warehouse near the continental divide. Word of Dr. Vance’s escape has reached three powerful factions across the frontier. Three separate encrypted channels ping your console, each offering an extraction rendezvous. "Hauler," Dr. Vance says, looking at the display. "This decision shapes the future of the continent. Where do we take the quantum architecture?"',
    options: [
      {
        id: 'opt_cryo08_dest_freehold',
        label: 'Deliver to the Freehold Alliance [Freedom & Prototype Rig Armor] [BRANCH 5A]',
        effectText: 'You choose the Freehold Frontier. They guarantee Dr. Vance true sanctuary and promise to dismantle the corporate kill-grid forever.',
        rewards: {
          qualities: { 'Cryo Extraction': 1, 'Delivery Destination': 1, 'Street Cred': 4 },
          rep: { rustworks: 15, aegis: -15 }
        }
      },
      {
        id: 'opt_cryo08_dest_solaris',
        label: 'Deliver to Solaris Energy Corp [Massive Credits & Corporate Immunity] [BRANCH 5B]',
        effectText: 'You choose Solaris Clean Energy. They offer unprecedented cash bounties, corporate executive pardons, and wipe your Aegis heat completely clean.',
        rewards: {
          credits: 2500,
          qualities: { 'Cryo Extraction': 1, 'Delivery Destination': 2, 'Heat': -25, 'Enclave Permits': 2 },
          rep: { solaris: 25, aegis: -10 }
        }
      },
      {
        id: 'opt_cryo08_dest_neuralfront',
        label: 'Deliver to the Neuralfront Collective [Open-Source Quantum AI & Cyberware] [BRANCH 5C]',
        effectText: 'You choose the Neuralfront hacker underground. Dr. Vance will release the quantum AI algorithms into the open-source public mesh.',
        rewards: {
          cargo: { chips: 2 },
          qualities: { 'Cryo Extraction': 1, 'Delivery Destination': 3, 'Tech Literacy': 3, 'Cyberware Level': 2 },
          rep: { neuralfront: 30, aegis: -20 }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 9. COMMANDER THORNE’S LAST STAND (STAGE 8 -> 9)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_09_final_gauntlet',
    title: 'Commander Thorne’s Last Stand',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 8 },
      maxQualities: { 'Cryo Extraction': 8 }
    },
    text: 'At the narrow mouth of Deadman’s Canyon—just miles from the rendezvous coordinates—the earth rumbles. A monstrous four-legged Aegis Titan Mech strides into the pass, blocking all egress with twin rotary plasma cannons. Commander Thorne’s voice booms over external speakers: "Hauler 44: You have cost Aegis eighteen million credits and our chief architect. Your run ends in ash. Surrender the asset or be disintegrated."',
    options: [
      {
        id: 'opt_cryo09_emp_overload',
        label: 'Trigger Dr. Vance’s Quantum EMP Override [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'Dr. Vance couples her quantum drive into your rig comms array to broadcast an algorithmic shutdown burst.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The quantum EMP fires like a spear of blue lightning! The Titan Mech’s neural actuators overload, crashing the 60-ton war machine onto its knees in sparks and smoke.',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 5, 'Tech Literacy': 2 },
            rep: { aegis: -20 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The EMP disables the mech main cannons, but secondary laser batteries scorch your rig hood as you squeeze past.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3 }
          }
        },
        miss: {
          effectText: 'MISS: The mech deploys hardened analog shielding! A retaliatory plasma bolt strikes your cargo hold, tearing off armor plating.',
          rewards: {
            hullIntegrity: -30,
            qualities: { 'Cryo Extraction': 1, 'Glitch Rating': 2, 'Street Cred': 2 }
          }
        }
      },
      {
        id: 'opt_cryo09_ram_walker_knee',
        label: 'Ram the walker hydraulic knee joint at full speed [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You aim your reinforced iron prow directly at the titan’s right forward leg actuator.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Breathtaking kinetic impact! Your reinforced prow shatters the titanium knee pin. The colossal mech topples sideways into the canyon wall!',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 6 },
            stats: { grit: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You buckle the leg and break past, but the crushing impact caves in your front radiator and bumper.',
          rewards: {
            hullIntegrity: -24,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3 }
          }
        },
        miss: {
          effectText: 'MISS: The titan stamps downward! The colossal foot clips your trailer, nearly rolling the hauler before you slide clear.',
          rewards: {
            hullIntegrity: -38,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        }
      },
      {
        id: 'opt_cryo09_evasive_slide',
        label: 'Drift through the canyon scree and slide underneath the walker [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You lock the rear brakes, sliding the entire hauler laterally under the mech belly between its four pounding legs.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Legendary driving! You slide beneath the belly turret and emerge out the other side unscathed, leaving the titan firing at empty air!',
          rewards: {
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 6 },
            stats: { edge: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You make it through, but belly scraping along canyon boulders grinds away undercarriage plating.',
          rewards: {
            hullIntegrity: -16,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 3 }
          }
        },
        miss: {
          effectText: 'MISS: The walker belly turret discharges into your roof rack during the slide, blowing away exterior cargo mounts.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Cryo Extraction': 1, 'Street Cred': 2 }
          }
        }
      }
    ]
  },

  // -----------------------------------------------------------------------------------------
  // 10. THE DEFECTOR’S SAFE HARBOR (GRAND FINALE) (STAGE 9 -> 99)
  // -----------------------------------------------------------------------------------------
  {
    id: 'story_cryo_10_extraction_terminus',
    title: 'The Defector’s Safe Harbor',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'sector',
    repeatable: false,
    reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'],
      qualities: { 'Cryo Extraction': 9 },
      maxQualities: { 'Cryo Extraction': 9 }
    },
    text: 'Your battered convoy hauler rolls into the secure underground hangar of the extraction sanctuary. The bay doors slam shut, sealing out the wastelands and corporate pursuit. An elite medical and engineering team rushes to the trailer. Dr. Elena Vance steps down from the cabin onto the concrete apron—free, alive, and victorious. She turns to you with tears in her eyes: "No one else could have crossed that continent, hauler. You stood against the strongest megacorp in history... and you won. Take what was promised."',
    options: [
      {
        id: 'opt_cryo10_claim_freehold_reward',
        label: 'Accept Freehold Frontier Honors [Freehold Path: Prototype Rig & Freedom Cache]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Delivery Destination': 1 } },
        effectText: 'The Freehold Council honors you as an honorary Ranger. They install hardened prototype composite plating onto your rig and transfer an immense salvage fortune.',
        rewards: {
          credits: 7500,
          hullIntegrity: 100,
          cargo: { cryo: 2, batteries: 2 },
          qualities: {
            'Cryo Extraction': 90,
            'Street Cred': 10,
            'Contraband Mastery': 2,
            'Heat': -40
          },
          stats: { grit: 1 },
          rep: { rustworks: 35, aegis: -30 }
        }
      },
      {
        id: 'opt_cryo10_claim_solaris_reward',
        label: 'Accept Solaris Executive Payout [Solaris Path: 10,000 Credits & Diplomatic Immunity]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Delivery Destination': 2 } },
        effectText: 'Solaris energy executives applaud your professional delivery. They wire a staggering corporate bounty to your personal account and grant lifelong diplomatic immunity.',
        rewards: {
          credits: 10000,
          cargo: { batteries: 3, cyberware: 2 },
          qualities: {
            'Cryo Extraction': 90,
            'Enclave Permits': 3,
            'Street Cred': 8,
            'Heat': -50
          },
          stats: { cool: 1 },
          rep: { solaris: 35, aegis: -10 }
        }
      },
      {
        id: 'opt_cryo10_claim_neuralfront_reward',
        label: 'Accept Neuralfront Ascension [Neuralfront Path: Open Quantum Mesh & Cybernetics]',
        reqs: {
      sectors: ['northeast', 'north', 'pacific_northwest'], qualities: { 'Delivery Destination': 3 } },
        effectText: 'The Neuralfront collective connects Dr. Vance directly to the decentralized mesh. They reward you with top-tier quantum processors and military ocular cybernetics.',
        rewards: {
          credits: 6000,
          cargo: { chips: 3, cyberware: 2 },
          qualities: {
            'Cryo Extraction': 90,
            'Tech Literacy': 3,
            'Cyberware Level': 3,
            'Street Cred': 10,
            'Glitch Rating': -2
          },
          stats: { cyber: 1 },
          rep: { neuralfront: 40, aegis: -25 }
        }
      },
      {
        id: 'opt_cryo10_universal_conclusion',
        label: 'Accept Standard Smuggler Completion [Bounty Settlement]',
        effectText: 'Dr. Vance delivers your final contraband delivery payment, salutes your unmatched driving, and disappears into her new life.',
        rewards: {
          credits: 6500,
          cargo: { cyberware: 2, cryo: 1 },
          qualities: {
            'Cryo Extraction': 90,
            'Street Cred': 8,
            'Contraband Mastery': 2,
            'Heat': -20
          },
          stats: { edge: 1 }
        }
      }
    ]
  }
];
