import { Storylet } from '../types/storylet';
import { CRYO_QUEST_STORYLETS } from './cryoQuestStorylets';

export const BASE_STORYLET_POOL: Storylet[] = [
  {
    id: 'story_border_patrol',
    title: 'Aegis Enclave Checkpoint 09',
    triggerType: 'ANY',
    triggerLocation: 'Any',
    reqs: { qualities: { 'Street Cred': 0 } },
    text: 'Heavy autonomous drones hover overhead as Aegis enforcers aim laser sight targeters at your convoy rig. A synthetic voice barks: "IDENTIFY CARGO MANIFEST AND SUBMIT TO HARDWARE SCAN."',
    options: [
      {
        id: 'opt_permit',
        label: 'Transmit Aegis Clearance Permit [Enclave Permits 2+]',
        reqs: { qualities: { 'Enclave Permits': 2 } },
        effectText: 'The enforcers disarm and open the express lane. Your high-security clearance is logged in the corporate intranet.',
        rewards: {
          qualities: { 'Street Cred': 2, 'Heat': -5 },
          rep: { aegis: 10 }
        }
      },
      {
        id: 'opt_hack_scan',
        label: 'Inject false telemetry into scanner [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You attempt to spoof the checkpoint scanner with a forged manifest loop.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You slice into the customs array flawlessly. The scanner registers a verified medical clearance, wiping prior alerts.',
          rewards: {
            qualities: { 'Tech Literacy': 2, 'Street Cred': 3, 'Heat': -10 },
            rep: { aegis: 10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Scanner spoofed and express lane opened, but an unresolvable checksum warning tags your rig ID on the corporate watch-grid.',
          rewards: {
            qualities: { 'Tech Literacy': 1, 'Street Cred': 2, 'Heat': 6 }
          }
        },
        miss: {
          effectText: 'MISS: Aegis counter-intrusion ICE strikes your neural deck! Arc discharges scorch cabin displays and sirens blare checkpoint-wide.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Heat': 15, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_talk_enforcers',
        label: 'Fast-talk squad leader [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You attempt to smooth-talk the squad captain with corporate logistics jargon.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You convince the squad captain you are on a priority Aegis executive supply run. He grants an emergency corridor stamp.',
          rewards: {
            qualities: { 'Street Cred': 3, 'Enclave Permits': 1, 'Heat': -5 },
            rep: { aegis: 8 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The captain buys your story, but demands an "administrative expedited processing fee" in physical creds.',
          rewards: {
            credits: -100,
            qualities: { 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: The captain sees right through your pitch. "Contraband suspicion citation." He levies a heavy penalty before letting you go.',
          rewards: {
            credits: -250,
            qualities: { 'Heat': 12, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_ram_gate',
        label: 'Smash through barricade [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You floor the accelerator, aiming your reinforced plow directly at the titanium security barrier.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your rig pulverizes the automated gate into twisted scrap, blowing past startled enforcers with legendary bravado.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Street Cred': 4, 'Heat': 15 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The barricade shatters, but structural shockwaves ripple through your chassis, tearing off external plating.',
          rewards: {
            hullIntegrity: -20,
            qualities: { 'Street Cred': 2, 'Heat': 20 }
          }
        },
        miss: {
          effectText: 'MISS: Hydraulic anti-ram bollards erupt from the asphalt! The impact nearly rolls the convoy, causing severe hull trauma.',
          rewards: {
            hullIntegrity: -35,
            qualities: { 'Heat': 25, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_bribe',
        label: 'Bribe enforcers with cred-chip [150 Credits]',
        reqs: { credits: 150 },
        effectText: 'The squad leader discreetly palms the encrypted cred-chip and signals the automated barricades to retract.',
        rewards: {
          credits: -150,
          qualities: { 'Heat': -2 },
          rep: { aegis: 2 }
        }
      }
    ]
  },
  {
    id: 'story_solaris_ambush',
    title: 'Solaris Highway Interceptors',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    text: 'Twin heavily-armored dune buggies roar out from the irradiated scrubland, pacing your hauler with mounted harpoon guns and acoustic sound cannons. The clan leader hails you over shortband radio demanding the Nomad road toll.',
    options: [
      {
        id: 'opt_speed_escape',
        label: 'Engage Overdrive & Outrun Interceptors [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You rev the twin turbochargers, attempting evasive S-curves through the canyon.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your razor reflexes outmaneuver the dune raiders, sideswiping their lead buggy into a sand dune as you vanish over the horizon.',
          rewards: {
            qualities: { 'Street Cred': 3, 'Cyberware Level': 1 },
            rep: { solaris: 5 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You break their line, but pneumatic harpoons strike your hauler armor plating before snapping off.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Street Cred': 2, 'Cyberware Level': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Harpoons hook your rear trailer axle! The raiders reel in and spray shrapnel through your engine compartments before you cut the cables.',
          rewards: {
            hullIntegrity: -25,
            qualities: { 'Street Cred': 1, 'Heat': 5 }
          }
        }
      },
      {
        id: 'opt_nomad_parley',
        label: 'Speak the Nomad Clan Dialect [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 4,
        effectText: 'You open the radio channel and chant the brotherhood code of the Mojave road.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The clan captain roars with laughter and raises his rifle in salute. They escort you safely and reward you coordinates to an oasis cache.',
          rewards: {
            credits: 400,
            qualities: { 'Street Cred': 4 },
            rep: { solaris: 20 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The captain honors the ancient code, but demands a modest offering of 100 Credits to bless their road spirits.',
          rewards: {
            credits: -100,
            qualities: { 'Street Cred': 2 },
            rep: { solaris: 10 }
          }
        },
        miss: {
          effectText: 'MISS: You mispronounce their clan totem! Enraged by the insult, raiders loose acoustic mortars that rattle your hauler frame.',
          rewards: {
            hullIntegrity: -15,
            credits: -150,
            qualities: { 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_tribute_fuel',
        label: 'Tribute Hydro-Batteries [1 Battery]',
        reqs: { cargo: { batteries: 1 } },
        effectText: 'The nomads winch the heavy power cell onto their rear rack with triumphant howls, saluting your generosity before peeling away.',
        rewards: {
          cargo: { batteries: -1 },
          qualities: { 'Street Cred': 4 },
          rep: { solaris: 15 }
        }
      },
      {
        id: 'opt_jam_interceptors',
        label: 'Broadcast EMP acoustic burst [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You re-tune your high-gain communications dish to blast an EMP frequency shockwave.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The electronic burst fries the raiders ignition coils! Both buggies skid to a halt in sputtering plumes of black smoke.',
          rewards: {
            qualities: { 'Tech Literacy': 2, 'Street Cred': 3, 'Heat': -4 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The EMP wave stalls one buggy, but high inductive feedback melts a secondary transformer on your hauler deck.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Tech Literacy': 1, 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Transmitter coil blowout! A blinding flash shorts your communications console, leaving your navigation displays glitching wildly.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Glitch Rating': 2, 'Tech Literacy': 1 }
          }
        }
      }
    ]
  },
  {
    id: 'story_syndicate_drop',
    title: 'Gridlock Dead-Drop Broker',
    triggerType: 'DOCK',
    triggerLocation: 'Any',
    text: 'In the shadows behind the loading gantry, a cybernetically-augmented courier wearing Gridlock Syndicate tattoos taps on your cabin window. "Got a secure consignment that needs moving. Discretion guaranteed... if you have the nerve."',
    options: [
      {
        id: 'opt_take_contraband',
        label: 'Negotiate High-Risk Bio-Toxin Haul [ROLL +COOL]',
        statRoll: 'cool',
        qualityBonusKey: 'Contraband Mastery',
        qualityBonusThreshold: 1,
        effectText: 'You look the fixer dead in the eye and negotiate terms for moving military Bio-Toxins.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You strike an elite smuggler deal! The broker provides insulated lead cases and a massive advance payout.',
          rewards: {
            cargo: { toxins: 2 },
            credits: 800,
            qualities: { 'Contraband Mastery': 2, 'Street Cred': 4, 'Heat': 5 },
            rep: { gridlock: 20, aegis: -10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You secure 1 canister of Bio-Toxins and an advance, but local dock cameras catch the clandestine handoff.',
          rewards: {
            cargo: { toxins: 1 },
            credits: 450,
            qualities: { 'Contraband Mastery': 1, 'Heat': 10 },
            rep: { gridlock: 12, aegis: -5 }
          }
        },
        miss: {
          effectText: 'MISS: Enforcers spot the transaction! The broker throws the hot container into your bay and bolts as alarms echo through the dock.',
          rewards: {
            cargo: { toxins: 1 },
            credits: 150,
            qualities: { 'Heat': 20, 'Contraband Mastery': 1, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_broker_intel',
        label: 'Sell Customs Scanner Frequencies [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You offer to extract and sell radar telemetry keys logged during your recent border crossings.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The encryption keys are flawless. The Syndicate broker transfers premium clean credits directly to your accounts.',
          rewards: {
            credits: 650,
            qualities: { 'Tech Literacy': 2, 'Street Cred': 3 },
            rep: { gridlock: 15 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Keys sold successfully, though decrypting the older databanks triggers a minor corporate trace ping.',
          rewards: {
            credits: 350,
            qualities: { 'Tech Literacy': 1, 'Heat': 4 },
            rep: { gridlock: 8 }
          }
        },
        miss: {
          effectText: 'MISS: A tripwire countermeasure inside the frequency file alerts Aegis port monitors, flagging your transponder as compromised.',
          rewards: {
            credits: 100,
            qualities: { 'Heat': 12, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_intimidate_broker',
        label: 'Demand Protection Cut & Territory Respect [ROLL +GRIT]',
        statRoll: 'grit',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You step out of the cab, towering over the broker to assert convoy territory rights.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The broker backs down immediately, offering a 300 ₵ respect tribute and a Syndicate contact cipher.',
          rewards: {
            credits: 300,
            qualities: { 'Street Cred': 3, 'Contraband Mastery': 1 },
            rep: { gridlock: 10 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: An uneasy standoff ends with the broker tossing over a crate of neural chips to keep the peace.',
          rewards: {
            cargo: { chips: 1 },
            qualities: { 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Syndicate muscle emerges from the shadows with vibro-blades, slashing hydraulic hoses before dispersing.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Street Cred': 1 },
            rep: { gridlock: -10 }
          }
        }
      },
      {
        id: 'opt_refuse_syndicate',
        label: 'Refuse the offer and lock doors',
        effectText: 'The courier scowls and melts back into the alleyway steam. "Your loss, hauler."',
        rewards: {
          rep: { gridlock: -2 }
        }
      }
    ]
  },
  {
    id: 'story_neural_broadcast',
    title: 'Neural Front Ghost Transmission',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    text: 'A burst of static shrieks across your audio monitors. A rogue AI sub-routine fragments your navigational display, flickering with binary code: "WE OBSERVE THE ROAD. ASSIST THE DECENTRALIZED MESH."',
    options: [
      {
        id: 'opt_bridge_node',
        label: 'Bridge rig antenna into the Mesh [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You route antenna arrays to establish a quantum repeater bridge for the AI collective.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The mesh harmonizes with your neural link! The collective uploads pristine encrypted schematics and neural processors.',
          rewards: {
            qualities: { 'Tech Literacy': 2, 'Street Cred': 4 },
            cargo: { chips: 2 },
            rep: { neuralfront: 25 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Signal routed and neural chips awarded, but residual feedback leaves your displays flickering with ghost artifacts.',
          rewards: {
            cargo: { chips: 1 },
            qualities: { 'Tech Literacy': 1, 'Glitch Rating': 1 },
            rep: { neuralfront: 15 }
          }
        },
        miss: {
          effectText: 'MISS: Data flood overflows rig buffer memory! Core systems freeze momentarily and high-voltage arcs singe your cockpit consoles.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Glitch Rating': 3, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_harvest_glitch',
        label: 'Synthesize AI routine into Cyberware [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 1,
        effectText: 'You attempt to compile the rogue code into your rig neural cyber-accelerator.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The experimental routine integrates seamlessly! Reflex response spikes and onboard telemetry runs 20% faster.',
          rewards: {
            qualities: { 'Cyberware Level': 2, 'Glitch Rating': -1 },
            credits: 300
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Cyberware clock speed rises, but neural feedback spikes your implant temperature.',
          rewards: {
            qualities: { 'Cyberware Level': 1, 'Glitch Rating': 1 },
            hullIntegrity: -5
          }
        },
        miss: {
          effectText: 'MISS: Neurological buffer crash! Severe headache and optic distortion leave rig controls unresponsive for critical seconds.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Glitch Rating': 2, 'Cyberware Level': 1 }
          }
        }
      },
      {
        id: 'opt_isolate_subroutine',
        label: 'Emergency purge of communication cache [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You manually trip the emergency hardware circuit breakers to purge external intrusion.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Heavy breakers slam open. The rogue code is purged cleanly with zero damage to underlying systems.',
          rewards: {
            qualities: { 'Glitch Rating': -1, 'Tech Literacy': 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Intrusion purged, but the surge blows out a bank of lighting diodes in the cargo hold.',
          rewards: {
            qualities: { 'Glitch Rating': -1 },
            hullIntegrity: -3
          }
        },
        miss: {
          effectText: 'MISS: Breakers weld shut under inductive surge! Electrical fire scorches the main battery terminal.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Glitch Rating': 1 }
          }
        }
      }
    ]
  },
  {
    id: 'story_rustworks_salvage',
    title: 'Derelict Maglev Freight Crash',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    text: 'A derailed maglev freight train lies crumpled beside the embankment, smoke rising from crushed shipping containers. Rustworks union workers are cutting through the titanium hulls with plasma torches.',
    options: [
      {
        id: 'opt_help_cutters',
        label: 'Assist recovery crew with heavy rig winches [ROLL +GRIT]',
        statRoll: 'grit',
        qualityBonusKey: 'Street Cred',
        qualityBonusThreshold: 3,
        effectText: 'You back your hauler up to the wreckage, anchoring hydraulic cables to heave the collapsed locomotive beam.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Your rig engines roar with sheer power, tearing the crumpled beam clear! Cheering workers reward you an immense salvage prize.',
          rewards: {
            cargo: { cryo: 1, batteries: 2 },
            qualities: { 'Street Cred': 3 },
            rep: { rustworks: 25 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You free the cargo car with groaning winches. The grateful steward shares salvaged Cryo pods and batteries.',
          rewards: {
            cargo: { cryo: 1, batteries: 1 },
            rep: { rustworks: 18 }
          }
        },
        miss: {
          effectText: 'MISS: A stressed cable snaps with a thunderous crack! It whips across your front grill, denting the radiator and shattering headlights.',
          rewards: {
            hullIntegrity: -15,
            qualities: { 'Street Cred': 1 },
            rep: { rustworks: 5 }
          }
        }
      },
      {
        id: 'opt_slice_manifest',
        label: 'Slice train computer to find high-value freight [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You jack into the crumpled locomotive terminal to download the high-security bill of lading.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Encrypted manifest decrypted! You direct cutters straight to a sealed vault containing pristine cyberware optics.',
          rewards: {
            cargo: { cyberware: 2 },
            credits: 400,
            qualities: { 'Tech Literacy': 2, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Partial manifest recovered, guiding you to a spare parts container before the train battery dies.',
          rewards: {
            cargo: { cyberware: 1 },
            qualities: { 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Maglev safety capacitor discharges through the data cable, burning out your terminal interface port.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Glitch Rating': 1, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_buy_salvage_lot',
        label: 'Buy salvage lot: 2x Cyberware Optics & 1x Hydro-Batteries [500 Credits]',
        reqs: { credits: 500 },
        effectText: 'You pay 500 Credits directly to the salvage crew. They load 2x Cyberware Optics and 1x Hydro-Battery from the breached freight cars into your hold.',
        rewards: {
          credits: -500,
          cargo: { cyberware: 2, batteries: 1 },
          rep: { rustworks: 8 }
        }
      },
      {
        id: 'opt_drive_past',
        label: 'Keep moving and maintain convoy schedule',
        effectText: 'You leave the smoldering wreckage behind in your rearview mirrors.',
        rewards: {}
      }
    ]
  },
  {
    id: 'story_cyberware_glitch',
    title: 'Synaptic Optic Feedback Loop',
    triggerType: 'ANY',
    triggerLocation: 'Any',
    reqs: { qualities: { 'Cyberware Level': 1 } },
    text: 'A blinding surge of neon-pink visual artifacting floods your ocular implant. Warning HUD indicators scream in red: "CRITICAL SYNAPTIC VOLTAGE SPIKE. NEURAL BUFFER OVERFLOW."',
    options: [
      {
        id: 'opt_debug_optic',
        label: 'Debug and recompile driver via cyberdeck [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You jack your deck directly into your temple port, analyzing the corrupted memory sector in real time.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You rewrite the optic firmware with optimized assembly routines, unlocking crystal-clear thermal overlays!',
          rewards: {
            qualities: { 'Tech Literacy': 2, 'Glitch Rating': -2, 'Cyberware Level': 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: Memory leak patched, though faint horizontal scan lines linger in your peripheral vision.',
          rewards: {
            qualities: { 'Tech Literacy': 1, 'Glitch Rating': -1 }
          }
        },
        miss: {
          effectText: 'MISS: A syntax fault compiles into a feedback storm! Intense migraine and flash blindness cause you to swerve into highway debris.',
          rewards: {
            hullIntegrity: -10,
            qualities: { 'Glitch Rating': 2, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_endure_feedback',
        label: 'Endure the feedback through sheer willpower [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You grit your teeth and clamp your hands onto the steering wheel, forcing your biological brain to overpower the cybernetic seizure.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: You master the neural pain with veteran road toughness, grounding the current and hardening your nervous system.',
          rewards: {
            qualities: { 'Street Cred': 3, 'Glitch Rating': -1 },
            stats: { grit: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You ride out the seizure without crashing, though your temple throbs with residual burning.',
          rewards: {
            hullIntegrity: -5,
            qualities: { 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Involuntary muscle spasms wrench the steering column hard to the left, sideswiping a concrete divider before you recover.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Glitch Rating': 1, 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_pain_stim',
        label: 'Inject combat neural stabilizer [100 Credits]',
        reqs: { credits: 100 },
        effectText: 'The cold chemical rush suppresses synaptic noise, steadying your nerves.',
        rewards: {
          credits: -100,
          qualities: { 'Heat': -2, 'Glitch Rating': -1 }
        }
      }
    ]
  },
  {
    id: 'story_wasteland_sandstorm',
    title: 'Irradiated Dust Squall',
    triggerType: 'TRANSIT_ENCOUNTER',
    triggerLocation: 'Any',
    text: 'A wall of rust-red radioactive dust hundreds of meters high surges across the highway, blinding navigational sensors and threatening to capsize your hauler in 90 km/h crosswinds.',
    options: [
      {
        id: 'opt_thread_wind',
        label: 'Thread wind corridors with high-speed evasives [ROLL +EDGE]',
        statRoll: 'edge',
        qualityBonusKey: 'Cyberware Level',
        qualityBonusThreshold: 2,
        effectText: 'You feather the gas and steer dynamically into wind shears to outrace the storm apex.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Spectacular driving maneuvers carry the convoy through the vortex unscathed, clocking record transit time!',
          rewards: {
            qualities: { 'Street Cred': 4 },
            stats: { edge: 1 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You break through to calm skies, but howling sand grains abrade outer armor plating and sensor glass.',
          rewards: {
            hullIntegrity: -8,
            qualities: { 'Street Cred': 2 }
          }
        },
        miss: {
          effectText: 'MISS: A sudden microburst catches the hauler broadside, shoving your rig onto rocky gravel with crunching suspension damage.',
          rewards: {
            hullIntegrity: -22,
            qualities: { 'Street Cred': 1 }
          }
        }
      },
      {
        id: 'opt_radar_triangulate',
        label: 'Calibrate radar telemetry to trace canyon shelter [ROLL +CYBER]',
        statRoll: 'cyber',
        qualityBonusKey: 'Tech Literacy',
        qualityBonusThreshold: 2,
        effectText: 'You reconfigure ground-penetrating radar to locate sheltered basalt overhangs.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: Radar guides you smoothly into a natural cavern. Inside, you discover an abandoned pre-war supply depot!',
          rewards: {
            cargo: { batteries: 1 },
            credits: 250,
            qualities: { 'Tech Literacy': 2, 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: You find canyon shelter and wait out the worst of the tempest with minimal wear.',
          rewards: {
            hullIntegrity: -3,
            qualities: { 'Tech Literacy': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Atmospheric ionization overloads the receiver, knocking out radar sensors in the blinding storm.',
          rewards: {
            hullIntegrity: -12,
            qualities: { 'Glitch Rating': 1, 'Tech Literacy': 1 }
          }
        }
      },
      {
        id: 'opt_anchor_chassis',
        label: 'Deploy magnetic anchor pins & weather the squall [ROLL +GRIT]',
        statRoll: 'grit',
        effectText: 'You lower the rig hydraulic outriggers, locking steel teeth into the bedrock.',
        rewards: {},
        strongHit: {
          effectText: 'STRONG HIT: The hauler stands as an immovable fortress. The squall breaks harmlessly around your hardened chassis.',
          rewards: {
            qualities: { 'Street Cred': 2 }
          }
        },
        weakHit: {
          effectText: 'WEAK HIT: The anchors hold firm, but debris pelts the cabin, cracking outer windshield laminate.',
          rewards: {
            hullIntegrity: -6,
            qualities: { 'Street Cred': 1 }
          }
        },
        miss: {
          effectText: 'MISS: Bedrock shears away under the violent gusts! One hydraulic pin snaps with violent recoil into the undercarriage.',
          rewards: {
            hullIntegrity: -18,
            qualities: { 'Street Cred': 1 }
          }
        }
      }
    ]
  }
];

export const STORYLET_POOL: Storylet[] = [
  ...BASE_STORYLET_POOL,
  ...CRYO_QUEST_STORYLETS
];

