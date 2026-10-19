import { Storylet } from '../types/storylet';

export const STORYLET_POOL: Storylet[] = [
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
        label: 'Transmit Aegis Clearance Permit',
        reqs: { qualities: { 'Enclave Permits': 2 } },
        effectText: 'The enforcers disarm and open the express lane. Your high-security clearance is logged in the corporate intranet.',
        rewards: {
          qualities: { 'Street Cred': 2, 'Heat': -5 },
          rep: { aegis: 10 }
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
      },
      {
        id: 'opt_hack_scan',
        label: 'Override checkpoint scanner protocol [Tech Literacy 2+]',
        reqs: { qualities: { 'Tech Literacy': 2 } },
        effectText: 'You inject a false clean-telemetry spoof into their radar dish. The barrier turns green, reporting a false zero-cargo reading.',
        rewards: {
          qualities: { 'Tech Literacy': 1, 'Street Cred': 3, 'Heat': 4 }
        }
      },
      {
        id: 'opt_submit_inspection',
        label: 'Submit to standard search',
        effectText: 'Enforcers swarm the hold with handheld geiger-counters and spectral analyzers. The delay costs time, but you are waved through.',
        rewards: {
          qualities: { 'Heat': -1 }
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
        id: 'opt_speed_escape',
        label: 'Engage Overdrive & Outrun Interceptors [Cyberware 2+]',
        reqs: { qualities: { 'Cyberware Level': 2 } },
        effectText: 'Your neural reflex accelerator syncs with the rig powertrain. You sideswipe a buggie into a dust berm and blast down the interstate.',
        rewards: {
          qualities: { 'Street Cred': 3, 'Cyberware Level': 1 },
          hullIntegrity: -10
        }
      },
      {
        id: 'opt_nomad_parley',
        label: 'Speak the Nomad Clan Dialect [Street Cred 8+]',
        reqs: { qualities: { 'Street Cred': 8 } },
        effectText: 'You recite the brotherhood oath of the Mojave road. The clan captain laughs, offering coordinates to a hidden fuel cache.',
        rewards: {
          credits: 200,
          rep: { solaris: 12 }
        }
      },
      {
        id: 'opt_pay_toll',
        label: 'Pay Cash Toll [300 Credits]',
        reqs: { credits: 300 },
        effectText: 'You eject a canister of physical credits. The raiders scoop it from the asphalt and disappear into the dust clouds.',
        rewards: {
          credits: -300,
          rep: { solaris: 4 }
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
        label: 'Accept Illicit Bio-Toxins [Contraband Mastery 1+]',
        reqs: { qualities: { 'Contraband Mastery': 1 } },
        effectText: 'You slide 2 canisters of military-grade Bio-Toxins into your rig’s shielded false bottom. The broker wires an advance deposit.',
        rewards: {
          cargo: { toxins: 2 },
          credits: 600,
          qualities: { 'Heat': 8, 'Contraband Mastery': 1 },
          rep: { gridlock: 15, aegis: -10 }
        }
      },
      {
        id: 'opt_broker_intel',
        label: 'Sell Customs Scanner Frequencies [Tech Literacy 2+]',
        reqs: { qualities: { 'Tech Literacy': 2 } },
        effectText: 'You upload the decryption keys for the sector’s aerial radar drones. The broker transfers clean corporate credits.',
        rewards: {
          credits: 450,
          qualities: { 'Street Cred': 3 },
          rep: { gridlock: 10 }
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
        label: 'Bridge rig antenna into the Mesh [+1 Neural Chip | Tech Literacy 3+]',
        reqs: { qualities: { 'Tech Literacy': 3 } },
        effectText: 'Your convoy rig serves as a mobile quantum relay. In gratitude, the collective transmits an encrypted schematics package.',
        rewards: {
          qualities: { 'Tech Literacy': 1, 'Street Cred': 4 },
          cargo: { chips: 1 },
          rep: { neuralfront: 20 }
        }
      },
      {
        id: 'opt_isolate_subroutine',
        label: 'Quarantine and isolate rogue code',
        effectText: 'You purge the communication cache, preserving rig system integrity at the expense of potential data salvage.',
        rewards: {
          qualities: { 'Glitch Rating': -1 }
        }
      },
      {
        id: 'opt_harvest_glitch',
        label: 'Incorporate experimental AI code into rig systems',
        effectText: 'The alien routine interfaces with your engine sensors. Top speed surges, but system diagnostic monitors flicker erratically.',
        rewards: {
          qualities: { 'Glitch Rating': 2, 'Cyberware Level': 1 },
          credits: 300
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
        label: 'Assist recovery crew with heavy rig winches [+1 Cryo Pod, +1 Battery]',
        effectText: 'Your rig winches hoist the cargo bulkhead clear. The union steward generously shares the salvaged haul, transferring 1x Cryo-Medical Pod and 1x Hydro-Battery directly into your cargo hold.',
        rewards: {
          cargo: { cryo: 1, batteries: 1 },
          rep: { rustworks: 18 }
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
        label: 'Debug and recompile driver via deck [Tech Literacy 2+]',
        reqs: { qualities: { 'Tech Literacy': 2 } },
        effectText: 'With steady keystrokes, you trace the memory leak and compile a hardened patch. The visual distortion clears with improved clarity.',
        rewards: {
          qualities: { 'Tech Literacy': 1, 'Glitch Rating': -1, 'Cyberware Level': 1 }
        }
      },
      {
        id: 'opt_pain_stim',
        label: 'Inject combat neural stabilizer [100 Credits]',
        reqs: { credits: 100 },
        effectText: 'The cold chemical rush suppresses synaptic noise, steadying your nerves.',
        rewards: {
          credits: -100,
          qualities: { 'Heat': -2 }
        }
      },
      {
        id: 'opt_endure_feedback',
        label: 'Endure the feedback shockwave',
        effectText: 'You grit your teeth as electricity arcs through your ocular socket. The implant restarts, leaving your temple throbbing.',
        rewards: {
          qualities: { 'Glitch Rating': 1 },
          hullIntegrity: -5
        }
      }
    ]
  }
];
