import { Storylet } from '../types/storylet';

export const LOVERS_QUEST_STORYLETS: Storylet[] = [
  // =========================================================================================
  // ACT I: THE EXTRACTION & THE COVENANT (STORYLETS 1 - 5)
  // =========================================================================================

  // 1. THE ASHLINE RENDEZVOUS (STAGE 0 -> 1)
  {
    id: 'story_lovers_01_rendezvous',
    title: 'The Ashline Rendezvous',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Street Cred': 2 },
      maxQualities: { 'Lovers Stage': 0 }
    },
    text: 'Beneath the rusted crane gantries of an industrial canal, two shadowed figures signal your hauler with a strobing laser pen. One wears the scarred composite battle armor of an Aegis tactical lieutenant, her helmet visor cracked to reveal determined amber eyes. The other is a lean Gridlock demolitionist in an oil-stained duster, his knuckles bristling with subcutaneous arc-welders. "Hauler," the Aegis officer whispers, holstering her plasma sidearm. "I am Valerie Chen. This is Jax Morales. Our factions want our heads on pikes for loving across the sector line. Smuggle us aboard your rig. We have creds, munitions, and nowhere else on this dying continent to go."',
    options: [
      {
        id: 'opt_lovers01_tactical_load',
        label: 'Smuggle them into the concealed false bulkhead [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You calibrate your rig cargo dampers to conceal their biometrics from enclave surveillance.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You splice their vitals into the rig engine telemetry loop. To external scanners, their biosignals appear as inert coolant pumps. They settle into the sleeper cab with profound relief.',
          rewards: {
            credits: 1000,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Tech Literacy': 1, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The thermal blankets mask their presence, but an alert drone scans the bay before buzzing away, raising enclave suspicion.',
          rewards: {
            credits: 800,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Heat': 5 }
          }
        },
        miss: {
          effectText: 'MISS: An Aegis patrol scanner pings the bulkhead! Jax dives into the hold just as searchlights sweep past, scraping your side mirrors.',
          rewards: {
            credits: 600,
            hullIntegrity: -5,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5, 'Heat': 12 }
          }
        }
      },
      {
        id: 'opt_lovers01_demand_hazard_pay',
        label: 'Demand a serious extraction stipend upfront [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You look at the contrasting Aegis corporate insignia and Syndicate road tattoos and state your price.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Valerie nods without blinking, wiring a substantial corporate escrow advance directly to your deck. Jax grins and hands you a crate of demolition batteries.',
          rewards: {
            credits: 1800,
            cargo: { batteries: 1 },
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: They scrape together cred-chips and a partial canister of hydro-fuel to meet your fee.',
          rewards: {
            credits: 1100,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 8 }
          }
        },
        miss: {
          effectText: 'MISS: "We are running for our lives, not buying an arcology," Jax grunts, thrusting a modest sum into your palms as enforcers approach.',
          rewards: {
            credits: 750,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5 }
          }
        }
      },
      {
        id: 'opt_lovers01_honor_code',
        label: 'Welcome them aboard under the independent Hauler Brotherhood code',
        effectText: 'You unlock the side access hatch and wave them in. "No corporate gods, no clan masters in this cab. Make yourselves at home."',
        rewards: {
          credits: 900,
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 20, 'Street Cred': 4 }
        }
      }
    ]
  },

  // 2. THE SCRAMBLE AT THE GATE (STAGE 1 -> 2)
  {
    id: 'story_lovers_02_gate_evasion',
    title: 'The Scramble at the Gate',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 1 },
      maxQualities: { 'Lovers Stage': 1 }
    },
    text: 'Red emergency beacons bathe the highway toll barrier ahead. Automated Aegis security gates are deploying hydraulic anti-ram teeth. Overhead speakers blare: "ATTENTION ALL HAULERS: AN ARMED GRIDLOCK INFILTRATOR AND A RENEGADE TACTICAL OFFICER ARE BELIEVED TO BE IN TRANSIT. SUBMIT TO BIO-RESONANCE SCANNING."',
    options: [
      {
        id: 'opt_lovers02_overclock_spoof',
        label: 'Inject false telemetry into the bio-resonance gate [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You and Valerie work the comms panel, transmitting forged corporate search warrants to trick the automated toll gate.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The barrier diodes flash soothing green. The automated gate retracts its teeth with a clanking salute: "CLEARANCE CONFIRMED. GODSPEED, LIEUTENANT CHEN." You cruise through cleanly.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5, 'Tech Literacy': 2, 'Heat': -5 },
            rep: { aegis: 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The gate opens, but an error code flags your transponder for secondary review at the next weigh station.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 1, 'Heat': 6 }
          }
        },
        miss: {
          effectText: 'MISS: Counter-intrusion ICE shocks your navigational stack! Alarm horns shriek as you are forced to scrape through the half-closed gate.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Lovers Stage': 1, 'Heat': 14, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_lovers02_smash_barricade',
        label: 'Floor the accelerator and smash through the perimeter fence [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'Jax laughs wildly, priming a directional charge against your front bumper as you hammer the throttle.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Jax’s shaped charge blows the reinforced gate outward in a blossom of fire! Your hauler roars through the breach into open wasteland.',
          rewards: {
            hullIntegrity: -6,
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 5, 'Street Cred': 3, 'Heat': 10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The barrier collapses under your tires, but steel cables whip across your windshield, leaving spiderweb cracks.',
          rewards: {
            hullIntegrity: -16,
            qualities: { 'Lovers Stage': 1, 'Heat': 15 }
          }
        },
        miss: {
          effectText: 'MISS: The rig bounces off hardened tungsten pillars! You sheer through only after severe structural trauma.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Lovers Stage': 1, 'Heat': 22, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_lovers02_drift_offroad',
        label: 'Cut into the radioactive drainage ditch around the perimeter [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 1,
        effectText: 'You steer the 35-ton rig into a steep gravel wash to bypass the sensor net.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Masterful heavy vehicle handling! You thread the rig along the treacherous drainage canal, slipping past the cameras without a whisper.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 4, 'Heat': -4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You bypass the checkpoint, but deep alkaline mud strains your transmission and scratches underbelly plating.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The trailer skids in the loose shale, slamming against a drainage culvert before clawing back onto the highway.',
          rewards: {
            hullIntegrity: -20,
            qualities: { 'Lovers Stage': 1, 'Heat': 8 }
          }
        }
      }
    ]
  },

  // 3. THE FIRST SAFEHOUSE (STAGE 2 -> 3)
  {
    id: 'story_lovers_03_first_safehouse',
    title: 'Static & Cigarettes',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 2 },
      maxQualities: { 'Lovers Stage': 2 }
    },
    text: 'Parked in the shadows of a decommissioned petroleum depot, rain pelts the roof of your cabin. In the back bunk, tension erupts between your passengers. "We can’t just run like scared strays, Val," Jax argues, waving a grease-stained datapad. "Aegis murdered my sister’s convoy three cycles ago. If we turn your tactical codes over to my clan, we can break their stranglehold!" Valerie snaps back: "Your clan are raiders and cutthroats, Jax! If they get those codes, they will burn every farm from here to the coast. I gave up everything to be with you—not to fuel your blood feud!" Both turn to look at you, waiting for your verdict.',
    options: [
      {
        id: 'opt_lovers03_counsel_peace',
        label: 'Remind them of why they chose each other over their factions [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You step into the bunk with hot synth-coffee and speak with calm road wisdom.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your words disarm their anger. Jax bows his head, gently taking Valerie’s mechanical hand. "You’re right, hauler. The war took enough from us. We run for tomorrow, not yesterday." Their bond deepens profoundly.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Lovers Ambition': -10, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The argument subsides into quiet brooding. They sit on opposite sides of the cab, but agree to maintain a truce.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5 }
          }
        },
        miss: {
          effectText: 'MISS: Your intervention feels patronizing to Jax. "Easy for you to say from the driver\'s seat," he snarls, storming out into the rain to smoke.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': -5, 'Lovers Ambition': 5 }
          }
        }
      },
      {
        id: 'opt_lovers03_fuel_ambition',
        label: 'Agree with Jax: power is the only true guarantee of safety [ROLL +COOL]',
        statRoll: 'cool',
        effectText: 'You tell Valerie that as long as Aegis and Gridlock rule the roads, fugitives will always be hunted down.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Valerie’s gaze hardens with cold calculation. "You\'re right. If we don’t hold the blade, someone else will hold it to our throats." A dangerous ambition sparks between them.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 20, 'Lovers Bond': 10, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Valerie nods reluctantly. "If we must fight, it will be on my tactical terms, not reckless sabotage."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 10, 'Lovers Bond': 5 }
          }
        },
        miss: {
          effectText: 'MISS: Valerie looks at you with disgust. "I didn\'t hire a warmonger. Stay out of our personal affairs, hauler."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': -10 }
          }
        }
      },
      {
        id: 'opt_lovers03_demand_order',
        label: 'Lay down convoy law: keep it quiet or get off the rig [Grit 2+]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], stats: { grit: 2 } },
        effectText: 'You rap your wrench against the iron bulkheads. "My cab, my rules. Keep your voices down before you bring the heat down on all of us."',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5, 'Street Cred': 2 }
        }
      }
    ]
  },

  // 4. ERRAND: THE CYBER-IMMUNOLOGY RUN (STAGE 3 -> 4)
  {
    id: 'story_lovers_04_errand_medicine',
    title: 'The Hydro-Stabilizer Run',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 3 },
      maxQualities: { 'Lovers Stage': 3 }
    },
    text: 'At dawn, Jax collapses against the cargo pallets, shivering violently as blue spark discharges leak from his cybernetic spine. Valerie checks his temple port with frantic fingers: "His neural interface is rejecting the scrap augmentations! He needs synthetic neuro-immunosuppressants within six hours or his nervous system will cook itself!" She grabs your shoulder: "The local black market clinic has the ampoules, but Aegis has tagged all medical deliveries in this district."',
    options: [
      {
        id: 'opt_lovers04_heist_clinic',
        label: 'Infiltrate the bio-pharmacy dispensary [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You breach the rear automated dispensing vault to retrieve the immunosuppressant ampoules.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You slice the inventory ledger, dispensing military-grade cryo-stims and wiping all digital logs. You inject Jax back in the cab; his tremors cease and his color returns.',
          rewards: {
            cargo: { cryo: 1 },
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Lovers Health': 100, 'Tech Literacy': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You secure the stabilizers, but a silent alarm tags your deck with an intrusion tracer.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Lovers Health': 85, 'Heat': 8 }
          }
        },
        miss: {
          effectText: 'MISS: Guard drones deploy tear gas! You grab an adulterated batch of medicine and scramble back to the rig under fire.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5, 'Lovers Health': 65, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_lovers04_buy_black_market',
        label: 'Buy the medicine from an underworld broker [400 Credits]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], credits: 400 },
        effectText: 'You hand 400 Credits to a street-doc who passes over clean pharmaceutical ampoules without asking questions.',
        rewards: {
          credits: -400,
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Lovers Health': 95, 'Street Cred': 2 }
        }
      },
      {
        id: 'opt_lovers04_trade_battery',
        label: 'Trade a Hydro-Battery directly for the medical stims [1 Battery]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], cargo: { batteries: 1 } },
        effectText: 'The clinic operator readily trades the vials for a pristine high-capacity industrial power cell.',
        rewards: {
          cargo: { batteries: -1 },
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 12, 'Lovers Health': 95 }
        }
      }
    ]
  },

  // 5. THE SEVERED TRANSMISSION (BRANCH 1: Discretion vs Retaliation) (STAGE 4 -> 5)
  {
    id: 'story_lovers_05_severed_transmission',
    title: 'The Intercepted Bounty',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 4 },
      maxQualities: { 'Lovers Stage': 4 }
    },
    text: 'A burst of high-priority encrypted chatter blares over your scanner. Jax decodes the transmission: "Aegis Command and Gridlock High Council have issued a joint bounty contract. Fifty thousand credits for Lieutenant Chen and Jax Morales, dead or alive. Informant unit at the upcoming relay hub is providing real-time highway radar coordinates."',
    options: [
      {
        id: 'opt_lovers05_purge_comms',
        label: 'Purge all external transponders and stay dark [ROLL +COOL] [BRANCH 1A]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You counsel discretion: destroy their transmitters, drop off the digital grid, and trust no one.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [STEALTH LOCKED]: You physically sever all satellite uplink antennas. The rig vanishes into the electromagnetic static of the wasteland. Valerie and Jax hold hands in the quiet dark.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Lovers Ambition': -10, 'Heat': -15, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Transponders cut, but your offline status raises red flags at highway surveillance towers.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5, 'Heat': -5 }
          }
        },
        miss: {
          effectText: 'MISS: In the scramble to kill the transmitter, a location ping leaks to regional bounty hunters before the breaker trips.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': 10 }
          }
        }
      },
      {
        id: 'opt_lovers05_hunt_informant',
        label: 'Trace the informant’s relay dish and silence them [ROLL +CYBER] [BRANCH 1B]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'Jax crackles with rage. You counter-trace the transmission frequency to fry the informant’s terminal.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [AGGRESSION LOCKED]: You inject a feedback surge that overloads the informant\'s relay dish into a smoking slag heap, downloading their bounty slush fund in the process!',
          rewards: {
            credits: 1200,
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 15, 'Tech Literacy': 2, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The informant dish is knocked offline, but the broadcast trace confirms your convoy general sector.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 10, 'Tech Literacy': 1, 'Heat': 5 }
          }
        },
        miss: {
          effectText: 'MISS: The counter-hack backfires! The informant locks onto your rig deck and sells the exact GPS coordinates to a hunter squad.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 10, 'Heat': 20, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_lovers05_spoof_decoy',
        label: 'Transmit a synthetic decoy signal toward the southern wastes [ROLL +EDGE] [BRANCH 1C]',
        statRoll: 'edge',
        qualityBonusKey: 'Contraband Mastery',
        qualityBonusThreshold: 2,
        effectText: 'You route an echo beacon into an abandoned hauler chassis down south to divert hunter patrols.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The decoy lights up hunter radars across three sectors. Enclave gunships scream south, leaving the northern corridor wide open.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': -10, 'Contraband Mastery': 1, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The decoy diverts the main pursuit force, though patrol drones remain in your airspace.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': 2 }
          }
        },
        miss: {
          effectText: 'MISS: The transmission loops back into your hauler antenna array, drawing a hunter recon drone straight to your rig!',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1, 'Heat': 12 }
          }
        }
      }
    ]
  },

  // =========================================================================================
  // ACT II: THE SMUGGLER'S ERRANDS (STORYLETS 6 - 10)
  // =========================================================================================

  // 6. ERRAND: THE FOUNDRY AT RUSTWORKS (BRANCH 2: Rings vs Detonators) (STAGE 5 -> 6)
  {
    id: 'story_lovers_06_errand_foundry',
    title: 'The Twin Rings of Rustworks',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 5 },
      maxQualities: { 'Lovers Stage': 5 }
    },
    text: 'You pull into an iron reclaimer foundry where molten slag illuminates the smog. Jax leads you to an ancient, cybernetically augmented metalcrafter who owes him a life debt. "Old friend," Jax says, setting down a bar of rare aerospace titanium. "We need your forge. But we must choose what we are building for our tomorrow."',
    options: [
      {
        id: 'opt_lovers06_forge_wedding_rings',
        label: 'Forge matched neural wedding bands [PEACE & BOND] [BRANCH 2A]',
        effectText: 'The metalcrafter molds the titanium into two delicate, interlinked neural rings that sync the lovers’ biometrics and emotional pulses.',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 25, 'Lovers Ambition': -15, 'Street Cred': 4 }
        }
      },
      {
        id: 'opt_lovers06_forge_detonators',
        label: 'Forge twin synchronized demolition detonators [WAR & AMBITION] [BRANCH 2B]',
        effectText: 'The metalcrafter machines two hardened frequency detonators capable of bypassing military blast-doors.',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 25, 'Lovers Bond': 5, 'Contraband Mastery': 2 },
          rep: { rustworks: 10 }
        }
      },
      {
        id: 'opt_lovers06_reinforce_rig',
        label: 'Convince them to weld the titanium into rig armor plating [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You point at your scarred hauler. "Sentimental jewelry won\'t stop a railgun round. Armor the cab."',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The artisan reinforces your chassis with titanium composite plates! Both lovers appreciate your cold survival logic.',
          rewards: {
            hullIntegrity: 25,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The extra plating reinforces your chassis, though Jax seems mildly disappointed by the lack of poetry.',
          rewards: {
            hullIntegrity: 15,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The weld is hurried and uneven, absorbing time and materials for minimal gain.',
          rewards: {
            hullIntegrity: 5,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 7. ROAD AMBUSH: THE IRON JACKALS (STAGE 6 -> 7)
  {
    id: 'story_lovers_07_jackal_ambush',
    title: 'The Iron Jackals Ambush',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 6 },
      maxQualities: { 'Lovers Stage': 6 }
    },
    text: 'Four heavily armored buggies bearing the jagged skull emblem of the Iron Jackals flank your hauler. Their leader, a brute with pneumatic hydraulic arms, screams over shortwave: "Morales! The clan took you in when you were starving, and you run off with a corporate dog? Cut your engine, boy, or we shred your tires and roast you both!"',
    options: [
      {
        id: 'opt_lovers07_valerie_tactics',
        label: 'Let Valerie coordinate defensive suppression fire [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'Valerie jacks into your rig roof-turrets and telemetry, directing fire with pinpoint military precision.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Valerie’s tactical firing solution blows the steering linkages off two technicals simultaneously. The raiders scatter in flaming disarray!',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Street Cred': 4 },
            rep: { gridlock: -5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You drive off the buggies, but raider harpoon cables gouge deep furrows in your cargo trailer.',
          rewards: {
            hullIntegrity: -14,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: An acoustic grenade bounces off the hood! Concussive shock dazes Valerie and shatters exterior camera pods.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Lovers Stage': 1, 'Heat': 8 }
          }
        }
      },
      {
        id: 'opt_lovers07_ram_raiders',
        label: 'Smash through their flank with the heavy iron prow [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You sideswipe their lead technical into a concrete highway abutment.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The 35-ton rig crushes their buggy into a tumbling fireball. The remaining Jackals break off in terror.',
          rewards: {
            hullIntegrity: -6,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You smash clear, but the impact blows out a front tire, forcing Jax to make a perilous high-speed swap.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Their spiked outriggers tangle with your drive axles, grinding your convoy to a near-halt before you shake them.',
          rewards: {
            hullIntegrity: -30,
            qualities: { 'Lovers Stage': 1, 'Heat': 12 }
          }
        }
      },
      {
        id: 'opt_lovers07_jax_bombs',
        label: 'Let Jax drop proximity demolition mines behind the rig [ROLL +EDGE]',
        statRoll: 'edge',
        effectText: 'Jax leans out the rear doors, deploying magnetic shaped mines along the asphalt.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Thunderous twin explosions launch the pursuit buggies twenty feet into the air! The highway behind you is sealed in a crater of asphalt.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 5, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The mines detonate, throwing up shrapnel that punctures their radiators as well as your rear mudguards.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: One mine detonates prematurely against your bumper, rocking the entire chassis and bruising everyone inside.',
          rewards: {
            hullIntegrity: -22,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 8. ERRAND: FORGED BIOMETRIC PASSPORTS (STAGE 7 -> 8)
  {
    id: 'story_lovers_08_errand_passports',
    title: 'The Forger of Chiba',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 7 },
      maxQualities: { 'Lovers Stage': 7 }
    },
    text: 'In the fluorescent neon alleys of a black-market sprawl, you meet "Ghost-Eye" Ren, an infamous neural forger. Ren examines Valerie and Jax’s retina scans: "Aegis master tokens and Syndicate clan brands. Erasing these takes military encryption keys and clean diplomatic clearance chits. Pay me, or hack the provincial identity registry directly."',
    options: [
      {
        id: 'opt_lovers08_pay_forger',
        label: 'Pay Ren for high-tier forged civilian identities [600 Credits]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], credits: 600 },
        effectText: 'Ren burns clean civilian identities into their temple ports, wiping their faction fingerprints from customs databases.',
        rewards: {
          credits: -600,
          qualities: { 'Lovers Stage': 1, 'Enclave Permits': 2, 'Heat': -10, 'Street Cred': 2 }
        }
      },
      {
        id: 'opt_lovers08_hack_registry',
        label: 'Help Valerie hack the provincial identity sub-node [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You and Valerie bypass the forger and breach the identity mainframe directly.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Flawless digital ghosting! You fabricate two certified Freehold merchant credentials and wipe all outstanding border alerts.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 2, 'Enclave Permits': 2, 'Heat': -20, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Passports created, but an audit flag logs the terminal breach, giving you limited time before the keys expire.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 1, 'Enclave Permits': 1 }
          }
        },
        miss: {
          effectText: 'MISS: An intrusion countermeasure burns out Ren\'s terminal! You flee with half-compiled fake chips as sirens echo.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': 15, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_lovers08_trade_cyberware',
        label: 'Trade 1x Cyberware Optics unit to settle the forgery bill',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], cargo: { cyberware: 1 } },
        effectText: 'Ren greedily inspects the optics. "A fair trade, hauler." He issues their identity chips immediately.',
        rewards: {
          cargo: { cyberware: -1 },
          qualities: { 'Lovers Stage': 1, 'Enclave Permits': 2, 'Heat': -10 }
        }
      }
    ]
  },

  // 9. THE CABIN CONFESSION (BRANCH 3: Romance vs Ambition) (STAGE 8 -> 9)
  {
    id: 'story_lovers_09_cabin_confession',
    title: 'Heartbeat on the CB Radio',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 8 },
      maxQualities: { 'Lovers Stage': 8 }
    },
    text: 'While fueling under an illuminated oil canopy, Valerie sits in your passenger seat, rolling an unlit cigarette between trembling fingers. "Jax thinks we can change the world," she murmurs. "I just wanted to wake up beside him without checking the door for hitmen. But if we run away... we leave our people to burn under the corrupt bastards who raised us. Tell me honestly, hauler: Is running away cowardice, or is dying for power foolishness?"',
    options: [
      {
        id: 'opt_lovers09_advise_escape',
        label: 'Tell her that living for love is the ultimate defiance [ROMANCE PATH] [BRANCH 3A]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You speak from the heart about survival, peace, and the futility of dying for corporations.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [ROMANCE SOLIDIFIED]: Valerie smiles softly, the tension leaving her shoulders. "You\'re right. The factions will devour themselves with or without us. We choose life." She joins Jax in the back, their embrace peaceful.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 20, 'Lovers Ambition': -20, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: She nods slowly. "I hope you\'re right. I truly do."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Lovers Ambition': -10 }
          }
        },
        miss: {
          effectText: 'MISS: "Defiance doesn\'t stop bullets, hauler," she sighs, looking out at the dark wasteland.',
          rewards: {
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers09_advise_power',
        label: 'Tell her that true freedom requires conquering their oppressors [AMBITION PATH] [BRANCH 3B]',
        statRoll: 'cool',
        effectText: 'You argue that peace is an illusion—until their enemies are dead, they will always be hunted.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [AMBITION SOLIDIFIED]: Valerie\'s tactical instincts reignite with icy clarity. "Then we don\'t run. We strike. We take their crowns." She returns to Jax, laying out military attack maps.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 25, 'Lovers Bond': 10, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: She nods firmly. "If it comes to war, we will finish it."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 15 }
          }
        },
        miss: {
          effectText: 'MISS: "Easy words for someone whose life isn\'t on the block," she mutters.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 5 }
          }
        }
      },
      {
        id: 'opt_lovers09_advise_fatalism',
        label: 'Warn her of the grim odds: "In this world, lovers die together or kill to survive" [FATALISM PATH] [BRANCH 3C]',
        statRoll: 'grit',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You lay out the brutal reality of their pursuers without sugarcoating.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT [FATALISM ACKNOWLEDGED]: Valerie nods grimly, checking her sidearm action. "Then we don\'t flinch. Whatever comes, Jax and I meet it side by side."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: She exhales slowly. "A hard truth. But maybe the only one that matters."',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5 }
          }
        },
        miss: {
          effectText: 'MISS: The fatalistic warning casts a cold pall over the cabin.',
          rewards: {
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 10. AEGIS TACTICAL INTERCEPTION (STAGE 9 -> 10)
  {
    id: 'story_lovers_10_aegis_interception',
    title: 'Aegis Tactical Interception',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 9 },
      maxQualities: { 'Lovers Stage': 9 }
    },
    text: 'A high-speed armored Aegis Enforcer cruiser cuts across your lane, siren wailing in ultrasonic bursts. Valerie recognizes the commander\'s decal: "It’s Captain Cross—my former mentor. He was like a father to me. He’s broadcasting on tactical frequency 4."',
    options: [
      {
        id: 'opt_lovers10_valerie_parley',
        label: 'Let Valerie appeal to Cross\'s honor [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 4,
        effectText: 'Valerie keys the radio to speak directly with her former commander.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Cross listens in heavy silence as Valerie lays bare Aegis corruption. "You were my finest officer, Valerie," Cross sighs. "I will report my sensors malfunctioned. Drive. And don\'t look back." The cruiser pulls away!',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Heat': -25 },
            rep: { aegis: 15 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Cross lets them go, but demands the hauler surrender 500 Credits to log an equipment breakdown report.',
          rewards: {
            credits: -500,
            qualities: { 'Lovers Stage': 1, 'Heat': -10 }
          }
        },
        miss: {
          effectText: 'MISS: Cross refuses. "Duty over sentiment, traitor!" The cruiser rams your flank with shock-batons before spinning out.',
          rewards: {
            hullIntegrity: -20,
            qualities: { 'Lovers Stage': 1, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_lovers10_emp_blinding',
        label: 'Blast Cross’s cruiser with an EMP feedback burst [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You overload your directional comms dish to fry the cruiser’s targeting computers.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The EMP arcs across their cruiser, killing their ignition and spinning them harmlessly into the soft dirt shoulder.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 2, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The cruiser stalls, but inductive blowback shorts out a bank of cabin navigation instruments.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1, 'Glitch Rating': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Their hardened military filters absorb the EMP, retaliating with armor-piercing rounds through your hood.',
          rewards: {
            hullIntegrity: -24,
            qualities: { 'Lovers Stage': 1, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_lovers10_evasive_ram',
        label: 'Sideswipe the cruiser into the guardrail [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You use the rig’s superior mass to push the enforcer cruiser off the blacktop.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The hauler pins the cruiser against the steel guardrail with crunching force, disabling its suspension.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You force them off the road, but scrape away heavy side-panel armor in the collision.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The cruiser deploys magnetic tire shredders! Your steering shudders violently as rubber peels away.',
          rewards: {
            hullIntegrity: -30,
            qualities: { 'Lovers Stage': 1, 'Heat': 20 }
          }
        }
      }
    ]
  },

  // =========================================================================================
  // ACT III: THE RISING STORM (STORYLETS 11 - 15)
  // =========================================================================================

  // 11. ERRAND: THE NEURALFRONT MESH GHOST (STAGE 10 -> 11)
  {
    id: 'story_lovers_11_errand_mesh_ghost',
    title: 'Erasing the Genetic Ledger',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 10 },
      maxQualities: { 'Lovers Stage': 10 }
    },
    text: 'At an underground hacker commune hidden within a derelict cooling tower, Neuralfront operatives offer a decisive service: access to an orbital relay that can scrub Valerie and Jax from continental DNA and facial recognition registers forever.',
    options: [
      {
        id: 'opt_lovers11_hack_relay',
        label: 'Interface with the quantum dish to execute the scrub [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You and Valerie bridge your cyberdecks with the collective antenna.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Clean ghosting! The genetic files dissolve across corporate databanks into random static. The collective awards you 2x Neural Chips in admiration.',
          rewards: {
            cargo: { chips: 2 },
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 3, 'Heat': -30, 'Street Cred': 4 },
            rep: { neuralfront: 20 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Files scrubbed, but the massive bandwidth download trips an orbital trace, alerting local authorities.',
          rewards: {
            cargo: { chips: 1 },
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 1, 'Heat': 5 }
          }
        },
        miss: {
          effectText: 'MISS: Aegis intrusion ICE burns through the dish! Neural shock knocks Valerie unconscious for an hour.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Glitch Rating': 2, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_lovers11_bribe_mesh',
        label: 'Pay the Neuralfront collective 1,000 Credits to handle the upload',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], credits: 1000 },
        effectText: 'The hacker collective happily accepts the credits and executes the digital erasure on their secure channels.',
        rewards: {
          credits: -1000,
          qualities: { 'Lovers Stage': 1, 'Heat': -25, 'Street Cred': 3 },
          rep: { neuralfront: 15 }
        }
      },
      {
        id: 'opt_lovers11_negotiate_mesh',
        label: 'Call upon underworld connections to negotiate dish access [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You talk to the collective elders, invoking the code of the open wasteland.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The collective elders respect your standing. They allocate dish bandwidth immediately, wiping the profiles for free.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': -20, 'Street Cred': 4 },
            rep: { neuralfront: 10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: They grant partial bandwidth, purging primary police records but leaving minor civil logs intact.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Heat': -10 }
          }
        },
        miss: {
          effectText: 'MISS: The collective doubts your credentials, forcing you to trade rig coolant reserves to gain access.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 12. THE SYNDICATE BLACKMAIL (BRANCH 4: Payoff vs Frame vs Fight) (STAGE 11 -> 12)
  {
    id: 'story_lovers_12_warlord_blackmail',
    title: 'The Syndicate Ultimatum',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 11 },
      maxQualities: { 'Lovers Stage': 11 }
    },
    text: 'A Gridlock assault skiff pulls alongside your hauler. Warlord Torin broadcasts on your private cabin frequency: "Morales. You think you can slip through my sector without paying the blood tribute? I have three heavy technicals locked on your fuel tanks. Transfer twenty thousand credits or give us Chen\'s tactical deck, or you both die right here."',
    options: [
      {
        id: 'opt_lovers12_frame_job',
        label: 'Frame Torin’s lieutenant with forged corporate betrayal files [ROLL +COOL] [BRANCH 4A]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 4,
        effectText: 'Valerie swiftly manufactures fabricated audio logs showing Torin\'s second-in-command was selling him out to Aegis.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Torin hears the audio and erupts in fury at his lieutenant! The syndicate technicals turn their weapons on each other in an explosive civil war while you speed away untouched.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Street Cred': 5, 'Heat': -5 },
            rep: { gridlock: -5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The distraction works long enough for you to break through, but stray fire chips your cargo hold.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: Torin sees through the deception! "Did you think I was stupid?" Flamethrowers bathe your convoy.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Lovers Stage': 1, 'Heat': 15 }
          }
        }
      },
      {
        id: 'opt_lovers12_coordinated_firefight',
        label: 'Stage a coordinated ambush: Valerie snipes, Jax detonates [ROLL +GRIT] [BRANCH 4B]',
        statRoll: 'grit',
        effectText: 'You hit the brakes, giving Valerie and Jax clear firing angles out both sides of the rig.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Ruthless tactical teamwork! Valerie snipes the driver of Torin\'s skiff while Jax detonates an EMP charge on their guns. The raiders are completely routed.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 15, 'Lovers Bond': 10, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You eliminate the warlord skiff, but sustained return fire damages your rig powertrain.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 10 }
          }
        },
        miss: {
          effectText: 'MISS: The firefight is brutal. Jax takes a shrapnel wound to his shoulder before you manage to disengage.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Lovers Stage': 1, 'Lovers Health': -20 }
          }
        }
      },
      {
        id: 'opt_lovers12_bribe_warlord',
        label: 'Pay Torin 1,500 Credits to buy safe passage [BRANCH 4C]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], credits: 1500 },
        effectText: 'You wire the credits. Torin spits on the road, waving his technicals off. "Get out of my sight, deserters."',
        rewards: {
          credits: -1500,
          qualities: { 'Lovers Stage': 1, 'Heat': -5 }
        }
      }
    ]
  },

  // 13. JAX'S CYBER-REJECTION CRISIS (STAGE 12 -> 13)
  {
    id: 'story_lovers_13_cyberware_crisis',
    title: 'The Neural Rejection',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 12 },
      maxQualities: { 'Lovers Stage': 12 }
    },
    text: 'During a grueling mountain transit, Jax suddenly falls face-first onto the dashboard, blood dripping from his nose as his prosthetic arm jerks uncontrollably. The immunosuppressants have worn off; his nervous system is in acute anaphylactic shock. "Hold him down!" Valerie cries, tearing open the emergency field-med kit. "Hauler, keep the rig steady through these hairpin turns or the needle will sever his spinal cord!"',
    options: [
      {
        id: 'opt_lovers13_steady_wheel',
        label: 'Steer with surgical precision through the mountain hairpins [ROLL +EDGE]',
        statRoll: 'edge',
        effectText: 'You feather the brakes and hold the 35-ton rig perfectly level through the switchbacks.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Flawless driving! The cabin remains as smooth as an operating room. Valerie seats the spinal probe cleanly, flushing Jax\'s system with synthetic cold-gel. Jax breathes easily again, his eyes opening in gratitude.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Lovers Health': 100, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You navigate the pass, but minor jolts complicate the injection, leaving Jax weak but stabilized.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Lovers Health': 80 }
          }
        },
        miss: {
          effectText: 'MISS: A gust of wind catches the hauler, causing the rig to bounce hard off the gravel shoulder! The probe slips, causing neural scarring.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Lovers Stage': 1, 'Lovers Health': 50, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_lovers13_cyberdeck_shunt',
        label: 'Shunt electrical overload from his cyberware into rig battery [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You splice jumper leads from his spinal port directly into your rig auxiliary battery ground.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The voltage spike drains into the rig battery, neutralizing the seizure instantly and recharging your hold systems!',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Lovers Health': 95, 'Tech Literacy': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The seizure is grounded, but high amperage blows out the cabin radio receiver.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Health': 75 }
          }
        },
        miss: {
          effectText: 'MISS: Inductive feedback arcs both ways! A burst of sparks scorches Jax’s shoulder and resets your dashboard computers.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Lovers Health': 55, 'Glitch Rating': 2 }
          }
        }
      },
      {
        id: 'opt_lovers13_grit_restrain',
        label: 'Physically pin Jax down with brute force while Valerie administers the sedative [ROLL +GRIT]',
        statRoll: 'grit',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You lock your arms around Jax’s convulsing shoulders, holding his cybernetic frame motionless.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You overpower his hydraulic spasms with raw iron will. Valerie injects the neural cold-gel smoothly. Jax relaxes and breathes normally.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Lovers Health': 90, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You hold him still enough for the injection, though his flailing mechanical fist bruises your ribs.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Health': 75 }
          }
        },
        miss: {
          effectText: 'MISS: A sudden servo spasm breaks your grip! The syringe bent on his armor plate, forcing a second painful attempt.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1, 'Lovers Health': 50 }
          }
        }
      }
    ]
  },

  // 14. ERRAND: RAIDING THE MAGLEV DEPOT (STAGE 13 -> 14)
  {
    id: 'story_lovers_14_errand_train_heist',
    title: 'Raiding the Maglev Depot',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 13 },
      maxQualities: { 'Lovers Stage': 13 }
    },
    text: 'To survive the final frontier crossing, Jax requires military-grade neuro-blockers and heavy vehicle plating stored inside an Aegis automated maglev switching yard. Valerie has the access codes for the freight car, but the perimeter is patrolled by robotic sentry hounds.',
    options: [
      {
        id: 'opt_lovers14_stealth_hack',
        label: 'Infiltrate the yard and hack the train cargo manifest [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You and Valerie slip through the security fencing, spoofing the hound acoustic sensors.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You slice the maglev car doors. Inside, you salvage pristine medical neuro-blockers, 2x Cyberware Optics, and heavy armor components! You load the loot into your rig unseen.',
          rewards: {
            cargo: { cyberware: 2 },
            credits: 1500,
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10, 'Tech Literacy': 2, 'Contraband Mastery': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You secure the medical supplies and 1x Cyberware, but sentry hounds bark an alert as you pull away.',
          rewards: {
            cargo: { cyberware: 1 },
            qualities: { 'Lovers Stage': 1, 'Heat': 10 }
          }
        },
        miss: {
          effectText: 'MISS: Sentry hounds corner the team! Jax detonates a flash grenade to cover your escape, taking fire as you scramble back to the hauler.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Lovers Stage': 1, 'Heat': 20 }
          }
        }
      },
      {
        id: 'opt_lovers14_ram_perimeter',
        label: 'Breach the depot gate with the hauler and winch the freight container [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You ram through the cyclone fence, hooking your heavy winch directly to the shipping crate.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Massive industrial power! The winch rips the container clear off the train chassis, dragging it into your hold before depot guards can deploy.',
          rewards: {
            cargo: { cyberware: 1, batteries: 2 },
            qualities: { 'Lovers Stage': 1, 'Street Cred': 4, 'Heat': 12 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You rip the crate free, but automated turrets pepper your rear doors with armor-piercing rounds.',
          rewards: {
            cargo: { cyberware: 1 },
            hullIntegrity: -18,
            qualities: { 'Lovers Stage': 1, 'Heat': 16 }
          }
        },
        miss: {
          effectText: 'MISS: The winch cable snaps under strain! You flee with only partial salvage as perimeter alarms howl.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Lovers Stage': 1, 'Heat': 25 }
          }
        }
      },
      {
        id: 'opt_lovers14_bribe_depot_master',
        label: 'Bribe the corrupt depot dispatcher to shunt the freight car into an alley [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You contact the night yard master, offering a cut of haul profits for an unscheduled train diversion.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The dispatcher switches the track switches smoothly. The container rolls right up to your loading dock with no alarms raised!',
          rewards: {
            cargo: { cyberware: 2 },
            qualities: { 'Lovers Stage': 1, 'Street Cred': 4, 'Heat': -5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The car is diverted, but the yard master demands an extra 400 credits under the table.',
          rewards: {
            credits: -400,
            cargo: { cyberware: 1 },
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The yard master takes your call and triggers the security siren, forcing a hasty retreat.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Heat': 15 }
          }
        }
      }
    ]
  },

  // 15. THE WAR COUNCIL (BRANCH 5: Lock In Path) (STAGE 14 -> 15)
  {
    id: 'story_lovers_15_crossroads_council',
    title: 'The Point of No Return',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 14 },
      maxQualities: { 'Lovers Stage': 14 }
    },
    text: 'Parked in a secluded canyon cavern near the continental border, all errands are complete and the horizon looms. On the fold-out map table, two destinies lie open. Valerie and Jax stand side by side, looking at you. "Hauler," Valerie says quietly. "Beyond the next ridge is the frontier. We have the codes, the identities, and the munitions. If we cross the border peacefully, we leave the war behind forever. But if we turn back and strike... we can take command of both our factions. What is our path?"',
    options: [
      {
        id: 'opt_lovers15_choose_elopement',
        label: 'Choose the Elopement: "Cross the border. Marry each other and live free." [PATH: ELOPEMENT] [BRANCH 5A]',
        effectText: 'Valerie’s eyes soften with tears of relief. Jax takes her hand, smiling. "To the Pacific. To freedom."',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Chosen Path': 1, 'Lovers Bond': 30, 'Lovers Ambition': -30, 'Street Cred': 5 }
        }
      },
      {
        id: 'opt_lovers15_choose_coup',
        label: 'Choose the Coup: "Turn back and strike. Seize the leadership of both factions." [PATH: COUP] [BRANCH 5B]',
        effectText: 'A ruthless flame ignites in Valerie’s eyes. Jax clenches his fist, arming the demolition ciphers. "Then we burn the old order down."',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Chosen Path': 2, 'Lovers Ambition': 40, 'Street Cred': 5 }
        }
      },
      {
        id: 'opt_lovers15_choose_sacrifice',
        label: 'Confront their toxic doubts: "Neither of you is ready for what comes next." [PATH: TRAGIC RECKONING] [BRANCH 5C]',
        effectText: 'Dark paranoia hangs over the cab. With hunter swarms closing in and mistrust rising, a tragic doom settles over the pair.',
        rewards: {
          qualities: { 'Lovers Stage': 1, 'Lovers Chosen Path': 3, 'Heat': 20 }
        }
      }
    ]
  },

  // =========================================================================================
  // ACT IV: THE CLIMAX & RESOLUTION (STORYLETS 16 - 20)
  // =========================================================================================

  // 16. THE HUNTED INTERSTATE (STAGE 15 -> 16)
  {
    id: 'story_lovers_16_hunted_interstate',
    title: 'The Redline Run',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 15 },
      maxQualities: { 'Lovers Stage': 15 }
    },
    text: 'The entire highway is on red alert. Autonomous Aegis hunter drones sweep from the clouds while Gridlock scout buggies flank the shoulders. Over the radio, emergency alarms shriek in deafening harmony. "They mobilized everything!" Jax shouts from the roof hatch, loading high-explosive ordnance.',
    options: [
      {
        id: 'opt_lovers16_redline_drive',
        label: 'Push the engine to maximum overdrive and weave through fire [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You keep the pedal pinned to the firewall, drafting between exploding fuel drums and drone crashes.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Masterclass highway piloting! You slip through crossfires, outrunning missile locks and leaving a trail of burning hunter drones in your wake.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You break through, but a drone rocket detonates against your rear trailer, scorching cargo mounts.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Autocannon rounds shred your engine cowl! Smoke pours into the cab as you barely keep the rig on the road.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers16_electronic_smokescreen',
        label: 'Deploy an electronic chaff smokescreen [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You burn through auxiliary batteries to project a blanket of radar chaff and sensor distortion.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The chaff cloud blinds the drone sensors! Guided missiles lose target lock, striking empty mountain rock.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 2, 'Heat': -10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Most missiles miss, but concussive shock waves shatter side glass.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The chaff array burns out under overload, blinding your own navigation display.',
          rewards: {
            hullIntegrity: -22,
            qualities: { 'Lovers Stage': 1, 'Glitch Rating': 1 }
          }
        }
      },
      {
        id: 'opt_lovers16_ram_blockade',
        label: 'Drop the heavy iron ram and plow directly through the scout blockade [ROLL +GRIT]',
        statRoll: 'grit',
        qualityBonusKey: 'Contraband Mastery',
        qualityBonusThreshold: 2,
        effectText: 'You lower the front reinforced cowcatcher and charge straight at the enemy technicals.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Devastating impact! You toss the scout buggies off the road like toys, clearing a smoking path ahead.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You smash through the line, but heavy impacts deform your front wheel arches.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: A reinforced armored car dead-stops your momentum! You grind past under punishing machine gun fire.',
          rewards: {
            hullIntegrity: -28,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 17. THE LAST CACHE (STAGE 16 -> 17)
  {
    id: 'story_lovers_17_errand_last_munitions',
    title: 'The Final Cache',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 16 },
      maxQualities: { 'Lovers Stage': 16 }
    },
    text: 'At an abandoned rail depot 20 kilometers from the border, you pause for final preparations. Valerie unseals a buried storage container. Depending on your chosen path, inside rests either wedding silks and solar passports, or military breaching charges and assassinations ciphers. Valerie and Jax dress and check their gear under the flickering yellow bulb.',
    options: [
      {
        id: 'opt_lovers17_prep_gear',
        label: 'Inspect all equipment and prime the rig for the finale [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 4,
        effectText: 'You give them a steadying look, verifying weapons, seals, and routes.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Perfect tactical poise. Fear evaporates from the cabin, replaced by unbreakable resolve. Everyone knows their role for the final strike.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 15, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Preparation is hurried but complete. The lovers nod in grim readiness.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Lovers Bond': 5 }
          }
        },
        miss: {
          effectText: 'MISS: Jittery nerves cause a dropped magazine, but you regroup and seal the doors.',
          rewards: {
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers17_quick_refuel',
        label: 'Fuel up and load emergency batteries [1 Battery]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], cargo: { batteries: 1 } },
        effectText: 'You feed an industrial power cell directly into the powertrain for maximum emergency torque.',
        rewards: {
          cargo: { batteries: -1 },
          hullIntegrity: 15,
          qualities: { 'Lovers Stage': 1, 'Lovers Bond': 10 }
        }
      },
      {
        id: 'opt_lovers17_overclock_capacitors',
        label: 'Overclock the powertrain capacitors to guarantee breakthrough velocity [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'You calibrate the motor controllers, unlocking emergency military output curves.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The turbines whine with terrifying power! Rig top speed is boosted without stressing thermal limits.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 2, 'Street Cred': 3 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The boost is configured, but excess heat warms the cabin floor.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: A blown capacitor fuse scorches the battery bay, demanding quick emergency bypass.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 18. THE SOVEREIGN GATE LOCKDOWN (STAGE 17 -> 18)
  {
    id: 'story_lovers_18_perimeter_lockdown',
    title: 'The Sovereign Gate Lockdown',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 17 },
      maxQualities: { 'Lovers Stage': 17 }
    },
    text: 'The continental border checkpoint rises ahead—a towering monolith of blast-concrete, searchlights, and automated machine-gun pillboxes. Heavy blast-doors have sealed the canyon completely. Elite Aegis enforcers and Gridlock warlord technicals stand side by side in an unholy alliance, guns trained on the road.',
    options: [
      {
        id: 'opt_lovers18_charge_gate',
        label: 'Drop the iron ram and lead the charge into the perimeter [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You sound the air-horn, locking all drive differentials as you barrel toward the blast-doors.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Unstoppable momentum! Your heavy prow smashes through the barricades, scattering the frontline defenders and tearing open a path into the terminal grounds.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You smash through, but concentrated armor-piercing fire rattles the engine compartment.',
          rewards: {
            hullIntegrity: -22,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: An anti-tank shell strikes your right front wheel assembly! The rig skids hard before smashing through the secondary gates.',
          rewards: {
            hullIntegrity: -35,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers18_hack_gate_doors',
        label: 'Upload Valerie’s master override to open the blast-doors [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'Valerie broadcasts her executive emergency command codes directly into the gate mainframe.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The massive hydraulic blast-doors grind open automatically, trapping the defender technicals in their own security lockdown corridors!',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Tech Literacy': 2, 'Street Cred': 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The blast-doors open half-way, allowing the hauler to scrape through while alarms shriek.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Aegis security rejects the code with an anti-intrusion lockout, forcing you to ram the side security booths to bypass.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers18_drift_service_tunnel',
        label: 'Feint toward the gate, then hard-drift into the drainage service tunnel [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Contraband Mastery',
        qualityBonusThreshold: 3,
        effectText: 'You cut the steering wheel, throwing the rig into a controlled slide under the main checkpoint towers.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Sublime wasteland driving! You bypass the lethal killzone entirely, popping out behind the perimeter gun towers.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Contraband Mastery': 2, 'Street Cred': 4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You squeeze through the concrete culvert, though overhead clearance strips the roof floodlights.',
          rewards: {
            hullIntegrity: -14,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The drainage tunnel is obstructed by rusted scrap! The collision shakes the frame violently before you break through.',
          rewards: {
            hullIntegrity: -26,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      }
    ]
  },

  // 19. THE CLIMAX GAUNTLET (STAGE 18 -> 19)
  {
    id: 'story_lovers_19_climax_gauntlet',
    title: 'The Battle of the Divide',
    triggerType: 'ANY',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 18 },
      maxQualities: { 'Lovers Stage': 18 }
    },
    text: 'Chaos erupts across the border complex! Searchlights whip through smoke, tracer fire lights the sky, and both lovers spring into action according to their chosen fate.',
    options: [
      {
        id: 'opt_lovers19_elopement_run',
        label: 'Execute the Elopement Breakthrough [Drive for the Western Border] [ROLL +EDGE]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 1 } },
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'Jax detonates smoke canisters while Valerie snipes searchlights, clearing your path toward the open Pacific highway.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Spectacular escape! You burst through the perimeter into the open western redwoods, leaving the burning checkpoint miles behind in total silence.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 6 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You break through into the western territory, though a parting burst from an interceptor dents your cargo tailgate.',
          rewards: {
            hullIntegrity: -14,
            qualities: { 'Lovers Stage': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Heavy fire damages your suspension as you clear the fence, forcing a rough skid into the sanctuary valley.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers19_coup_assault',
        label: 'Execute the Coup: Infiltrate the Joint Command Bunker [ROLL +CYBER]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 2 } },
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 3,
        effectText: 'Valerie and Jax breach the command bunker, detonating shaped charges to eliminate both the Aegis General and Syndicate Warlord.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The bunker falls in minutes! Valerie broadcasts the commander’s surrender while Jax assumes control of the Syndicate radio grid. The war is won in a single stroke.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 8, 'Lovers Ambition': 20 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The bunker is captured, but bodyguard crossfire wounds Jax before the enemy yields.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Lovers Stage': 1, 'Lovers Ambition': 10 }
          }
        },
        miss: {
          effectText: 'MISS: Bunker defenses detonate a dead-man switch! Shrapnel tears through the compound as Valerie drags Jax out into the command deck.',
          rewards: {
            hullIntegrity: -30,
            qualities: { 'Lovers Stage': 1 }
          }
        }
      },
      {
        id: 'opt_lovers19_tragic_standoff',
        label: 'The Irradiated Bridge: Stand and Fight to the Last [TRAGIC STANDOFF] [ROLL +GRIT]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 3 } },
        statRoll: 'grit',
        effectText: 'Cut off on the middle of a colossal suspension bridge, hunter squads seal both ends. Jax and Valerie stand back-to-back.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: A legendary last stand. They hold the line together, fighting like titans to buy your hauler the seconds needed to cross the bridge span before detonating the demolition charges.',
          rewards: {
            qualities: { 'Lovers Stage': 1, 'Street Cred': 10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: They hold off the hunters with fierce defiance, locking the bridge charges as you break through the far barricade.',
          rewards: {
            hullIntegrity: -20,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 8 }
          }
        },
        miss: {
          effectText: 'MISS: Heavy fire rakes the bridge span. Hand-in-hand, they detonate the charges beneath their feet to take the enemy squads down with them.',
          rewards: {
            hullIntegrity: -35,
            qualities: { 'Lovers Stage': 1, 'Street Cred': 6 }
          }
        }
      }
    ]
  },

  // 20. THE FINALE: THREE DIVERGENT DESTINIES (STAGE 19 -> 99)
  {
    id: 'story_lovers_20_finale',
    title: 'The Dawn at Terminal’s End',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    layer: 'archetype',
    repeatable: false,
    reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'],
      qualities: { 'Lovers Stage': 19 },
      maxQualities: { 'Lovers Stage': 19 }
    },
    text: 'Dawn breaks over the continent in brilliant gold and lavender. The engines of the Iron Nomad hum at low idle as the final chapter of this epic journey concludes.',
    options: [
      {
        id: 'opt_lovers20_ending_elopement',
        label: 'Witness the Sunset Wedding at the Pacific Sanctuary [ENDING 1: ELOPEMENT]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 1 } },
        effectText: 'Inside a sunlit greenhouse at an off-grid Pacific commune, Valerie and Jax exchange their titanium neural rings before a cheering gathering of Freehold rangers. Valerie hugs you warmly: "You gave us our lives, hauler. Never forget that you are family here." They reward you with their life savings and a permanent sanctuary pass.',
        rewards: {
          credits: 8500,
          hullIntegrity: 100,
          cargo: { batteries: 3, cryo: 2 },
          qualities: {
            'Lovers Stage': 80,
            'Street Cred': 15,
            'Enclave Permits': 3,
            'Heat': -50
          },
          stats: { cool: 1 },
          rep: { rustworks: 40, aegis: -10, gridlock: -10 }
        }
      },
      {
        id: 'opt_lovers20_ending_coup',
        label: 'Accept the Spoils of the Dual Coup [ENDING 2: THE DUAL CROWNS]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 2 } },
        effectText: 'Standing atop the joint Aegis-Gridlock citadel, Director Valerie Chen and Overboss Jax Morales look down over their unified dominion. Jax claps you on the back: "We promised you the road, hauler. From now on, you pay no tolls, and your word is law in our territory." They wire an immense treasury bounty directly to your account.',
        rewards: {
          credits: 15000,
          cargo: { cyberware: 3, chips: 3 },
          qualities: {
            'Lovers Stage': 80,
            'Street Cred': 20,
            'Enclave Permits': 4,
            'Heat': 25
          },
          stats: { cyber: 1 },
          rep: { aegis: 35, gridlock: 35 }
        }
      },
      {
        id: 'opt_lovers20_ending_tragedy',
        label: 'Salvage their Interlinked Rings from the Bridge Ash [ENDING 3: THE IRON REQUIEM]',
        reqs: {
      archetypes: ['corporate_arcology', 'black_market_sprawl', 'freehold_outpost'], qualities: { 'Lovers Chosen Path': 3 } },
        effectText: 'At the far edge of the collapsed canyon bridge, you find their scorched, interlinked titanium rings resting among the cooling slag. They died together so you could live. You mount the rings above your dashboard as an eternal testament to a love that shook the continent.',
        rewards: {
          credits: 6000,
          cargo: { cyberware: 2, batteries: 2 },
          qualities: {
            'Lovers Stage': 80,
            'Street Cred': 25,
            'Heat': -40
          },
          stats: { grit: 1 }
        }
      },
      {
        id: 'opt_lovers20_universal_farewell',
        label: 'Collect final hauler fee and depart into the sunrise',
        effectText: 'With the saga concluded, you seal your cabin, log the kilometers in your telemetry feed, and shift into drive.',
        rewards: {
          credits: 7500,
          qualities: {
            'Lovers Stage': 80,
            'Street Cred': 10
          },
          stats: { edge: 1 }
        }
      }
    ]
  }
];
