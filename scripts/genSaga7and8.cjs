const fs = require('fs');

function makeRollOption(id, label, statRoll, qBonus, effectText, strongTxt, strongRew, weakTxt, weakRew, missTxt, missRew, reqs) {
  const opt = {
    id, label, effectText,
    statRoll, qualityBonusKey: qBonus, qualityBonusThreshold: 3,
    rewards: {},
    strongHit: { effectText: strongTxt, rewards: strongRew || {} },
    weakHit: { effectText: weakTxt, rewards: weakRew || {} },
    miss: { effectText: missTxt, rewards: missRew || {} }
  };
  if (reqs) opt.reqs = reqs;
  return opt;
}

function makeDirectOption(id, label, effectText, rewards, reqs) {
  const opt = { id, label, effectText, rewards: rewards || {} };
  if (reqs) opt.reqs = reqs;
  return opt;
}

function mapTrigger(trig) {
  if (trig === 'DOCK' || trig === 'TOWN_VISIT') return 'DOCK';
  if (trig === 'TRANSIT_ENCOUNTER' || trig === 'ROAD_EVENT' || trig === 'COMBAT_ENCOUNTER') return 'TRANSIT_ENCOUNTER';
  return 'ANY';
}

function compileStorylets(rawList, stageKey) {
  return rawList.map((item, idx) => {
    const stageNum = idx;
    const isFirst = stageNum === 0;

    const reqs = {};
    if (isFirst) {
      reqs.maxQualities = { [stageKey]: 0 };
    } else {
      reqs.qualities = { [stageKey]: stageNum };
      reqs.maxQualities = { [stageKey]: stageNum };
    }

    return {
      id: item.id,
      title: item.title,
      triggerType: mapTrigger(item.trigger),
      triggerLocation: 'Any',
      repeatable: false,
      reqs,
      text: item.text,
      options: item.options
    };
  });
}

function writeTsFile(filePath, exportName, storylets) {
  const content = `import { Storylet } from '../types/storylet';\n\nexport const ${exportName}: Storylet[] = ${JSON.stringify(storylets, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${storylets.length} storylets to ${filePath}`);
}

// =========================================================================
// SAGA 7: THE SYNDICATE KINGPIN'S DEBT (15 Storylets)
// Underworld patriarch extraction, AI ledger servers, martial blackout
// =========================================================================
const kingpinData = [
  {
    stage: 1, id: 'story_kingpin_01_fallen_patriarch', title: 'The Don in the Shadows', trigger: 'DOCK',
    text: 'During a city-wide martial blackout in Chicago Sprawl, a wounded elderly man in a bespoke bulletproof trench coat slips into your cab. It is Don Salvatore Moretti, the dethroned godfather of the Great Lakes Syndicate. "A traitorous lieutenant has taken my territory," he breathes, coughing blood. "My AI laundering servers are loaded in an armored crate in the alley. Get me and the servers to a safehouse beyond the cordon, and you will name your price in sovereign gold and shadow technology."',
    options: [
      makeRollOption('opt_kingpin01_negotiate_terms', 'Negotiate exorbitant extraction fees and safe-conduct guarantees [ROLL +COOL]', 'cool', 'Street Cred',
        'You look Moretti in the eye and demand half a million in bearer bonds.',
        'STRONG HIT: Flawless poise! Moretti transfers a 2,000 credit advance and gives you his personal cipher ring!', { credits: 2000, qualities: { 'Kingpin Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Moretti agrees to your terms and climbs into your sleeping bunk.', { credits: 1000, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Street spotters notice Moretti\'s coat, alerting hit squads.', { qualities: { 'Kingpin Stage': 1, 'Heat': 15 } }),
      makeRollOption('opt_kingpin01_scan_servers', 'Scan the armored server rack for tracking transponders [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You run a RF sweeping wand over the server housing.',
        'STRONG HIT: You locate and rip out two hidden syndicate GPS tracking bugs!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The servers are quiet, though drawing substantial standby power.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: A defensive stun charge shocks your fingers from the server lock.', { hullIntegrity: -5, qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin01_stow_cradle', 'Lash the server rack down behind heavy toolboxes in the sleeper cab',
        'The servers are concealed beneath dirty work blankets and spare tires.',
        { hullIntegrity: 10, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_kingpin_02_blackout_cordon', title: 'The City-Wide Blockade', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Aegis martial-law cordons have cut all power to the outer ring road. Infrared searchlights and automated gun-trucks sweep the blacked-out highway, searching for departing mob vehicles.',
    options: [
      makeRollOption('opt_kingpin02_kill_lights', 'Shut off all lights and drive by infrared night-vision scopes [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You click off headlights and navigate the dark concrete by green night vision.',
        'STRONG HIT: Ghost transit! You slip beneath the searchlight arcs without triggering a single sensor ping!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You clear the checkpoint, though a stray searchlight grazes your trailer.', { qualities: { 'Kingpin Stage': 1, 'Heat': 5 } },
        'MISS: Your rear trailer clips a concrete barrier in the dark, alerting sentries!', { hullIntegrity: -15, qualities: { 'Kingpin Stage': 1, 'Heat': 15 } }),
      makeRollOption('opt_kingpin02_moretti_clearance', 'Transmit Moretti\'s secret executive back-channel bribe codes [ROLL +COOL]', 'cool', 'Street Cred',
        'You radio the checkpoint commander with Moretti\'s private account numbers.',
        'STRONG HIT: Corrupt perfection! The commander acknowledges the 500-credit transfer and turns off the searchlights for two minutes!', { credits: -500, qualities: { 'Kingpin Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The commander takes the bribe, grumbling about paperwork.', { credits: -800, qualities: { 'Kingpin Stage': 1 } },
        'MISS: The commander rejects the bribe, demanding your immediate surrender!', { hullIntegrity: -15, qualities: { 'Kingpin Stage': 1, 'Heat': 20 } }),
      makeDirectOption('opt_kingpin02_drain_ditch', 'Take the flooded drainage canal culvert under the highway',
        'A murky bypass carries you beneath the checkpoint at the cost of muddy tires.',
        { hullIntegrity: -10, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_kingpin_03_hitman_chase', title: 'The Traitor\'s Wolves', trigger: 'COMBAT_ENCOUNTER',
    text: 'Three matte-black muscle cars equipped with roof-mounted machine guns roar out of an alleyway. Moretti curses: "It\'s Castiglione\'s hitmen! They know I\'m alive!"',
    options: [
      makeRollOption('opt_kingpin03_ram_interceptor', 'Brake-check and sideswipe the lead hitman car with your 35-ton hauler [ROLL +GRIT]', 'grit', 'Street Cred',
        'You swing the steering wheel and smash the muscle car into the highway divider.',
        'STRONG HIT: Catastrophic destruction! The hitman vehicle is crushed against the concrete wall in a shower of sparks!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You smash the pursuer aside, sustaining dents on your fuel tank step.', { hullIntegrity: -12, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Return machine-gun fire shatters your passenger window.', { hullIntegrity: -22, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin03_caltrop_dump', 'Release oil and hardened steel caltrops from your rear bumper dispenser [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pull the emergency dump lever on the dashboard.',
        'STRONG HIT: Both pursuing cars shred their tires at 140 km/h, spinning out into a ditch!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: One car spins out; the second backs off into the shadows.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Caltrops scatter unevenly, failing to deter the lead car.', { hullIntegrity: -14, qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin03_smoke_screen', 'Deploy an ultra-dense chemical smoke screen and kill your taillights',
        'Blinded by smoke, the hitmen overshoot down an off-ramp.',
        { credits: -150, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_kingpin_04_first_safehouse', title: 'The Meatpacking Safehouse', trigger: 'DOCK',
    text: 'You pull into an abandoned meatpacking warehouse. Moretti\'s trusted doctor, Vince "The Scalpel," bandages the Don\'s gunshot wound while you inspect the AI servers, which are humming with cryptographic calculations.',
    options: [
      makeRollOption('opt_kingpin04_interrogate_servers', 'Slice into the server array to inspect Moretti\'s financial ledgers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You plug your deck into the server\'s auxiliary maintenance terminal.',
        'STRONG HIT: Invaluable blackmail! You discover accounts holding sixty million credits and blackmail files on every corrupt mayor in the sector!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 8, 'Street Cred': 8 } },
        'WEAK HIT: You decrypt the ledger balances, confirming Moretti is fabulously wealthy.', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Counter-intrusion software locks out your deck, burning an interface chip.', { hullIntegrity: -8, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin04_counsel_don', 'Counsel Moretti on rebuilding his syndicate through loyal alliances [ROLL +COOL]', 'cool', 'Street Cred',
        'You share a glass of bourbon with the battered Don and advise him on strategy.',
        'STRONG HIT: Moretti treats you as a valued consigliere, vowing eternal loyalty and gifting rare cyberware!', { cargo: { cyberware: 2 }, qualities: { 'Kingpin Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: Moretti listens respectfully, his resolve returning.', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 6 } },
        'MISS: Moretti snaps in bitter frustration, brooding in silence.', { qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin04_rest_refuel', 'Rest in your cab and top off engine oil and coolant reserves',
        'A hot meal and diagnostic sweep prepare you for the interstate sprint.',
        { hullIntegrity: 15, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_kingpin_05_toll_ambush', title: 'The Corrupt Bridge Toll', trigger: 'TRANSIT_ENCOUNTER',
    text: 'At the Mississippi River bridge, corrupt transit enforcers in the pay of Moretti\'s rival have set up an illegal checkpoint with heavy vehicle scanners.',
    options: [
      makeRollOption('opt_kingpin05_counter_bribe', 'Outbid their contract with a direct transfer of 1,000 credits [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull up to the booth and speak with chilling, quiet authority.',
        'STRONG HIT: Greed triumphs! The guards pocket the credits, disabling the bridge scanners and saluting as you drive through!', { credits: -500, qualities: { 'Kingpin Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The guards accept a 1,000 credit bribe and let you pass.', { credits: -1000, qualities: { 'Kingpin Stage': 1 } },
        'MISS: The guards realize who is in the cab and sound the alarm!', { hullIntegrity: -15, qualities: { 'Kingpin Stage': 1, 'Heat': 15 } }),
      makeRollOption('opt_kingpin05_ram_booth', 'Put the hauler in gear and smash the toll gate into pieces [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You sound the war horns and crush the barrier under your iron cow-catcher.',
        'STRONG HIT: Thunderous kinetic smash! The toll arm and guardhouse booth are flattened into rubble!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You smash through, taking bullet marks on your hood.', { hullIntegrity: -12, qualities: { 'Kingpin Stage': 1 } },
        'MISS: High-tensile crash barrier catches your front bumper before breaking free.', { hullIntegrity: -25, qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin05_smoke_run', 'Deploy thick tire smoke and speed across the center bridge span',
        'Blind crossing carries you past the guards before they can aim.',
        { hullIntegrity: -10, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_kingpin_06_server_overheat', title: 'The Boiling Crypto-Cores', trigger: 'ROAD_EVENT',
    text: 'The AI laundering servers are churning cryptographic blocks to erase Moretti\'s financial footprint. The server fans are shrieking; heat inside the sleeper bunk is reaching 70 degrees Celsius.',
    options: [
      makeRollOption('opt_kingpin06_plumb_coolant', 'Splice your truck\'s cab air-conditioning duct directly into the server rack [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You fabricate a tin-foil duct to channel freezing air into the processor bay.',
        'STRONG HIT: Flawless thermal routing! Server temperatures drop to 20 degrees; processing speed doubles!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The cooling duct stabilizes the servers within operating limits.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Condensation drips onto an expansion board, shorting a cooling fan.', { hullIntegrity: -10, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin06_throttle_processing', 'Throttle the AI algorithms to reduce computational thermal output [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You enter terminal commands to cap server clock frequencies.',
        'STRONG HIT: Efficient power management! Temperatures normalize while maintaining full encryption security.', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: Processing slows down, but the servers are saved from melting.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Throttling causes a temporary ledger sync error.', { qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin06_consume_cyberware', 'Install 1 unit of Cyberware heat sinks from hold into the server frame [INVENTORY]',
        'High-grade cybernetic thermal fins dissipate the heat silently.',
        { cargo: { cyberware: -1 }, hullIntegrity: 15, qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 8 } },
        { cargo: { cyberware: 1 } })
    ]
  },
  {
    stage: 7, id: 'story_kingpin_07_underworld_motel', title: 'The Crossroads Motel', trigger: 'DOCK',
    text: 'You pull behind a neon-lit motor inn frequented by black-market smugglers. Moretti meets with two loyal family capos who have arrived in armored sedans carrying cash bags and surplus military rifles.',
    options: [
      makeRollOption('opt_kingpin07_rally_capos', 'Help Moretti rally his remaining lieutenants for a counter-offensive [ROLL +COOL]', 'cool', 'Street Cred',
        'You stand beside Moretti on the porch, projecting formidable confidence.',
        'STRONG HIT: The capos pledge blood oaths to Moretti, loading 3,000 credits and heavy military ammunition into your truck!', { credits: 3000, cargo: { chips: 2 }, qualities: { 'Kingpin Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: The capos transfer loyal funds and promise to mobilize street soldiers.', { credits: 1500, qualities: { 'Kingpin Stage': 1, 'Street Cred': 6 } },
        'MISS: The capos are nervous and argumentative, questioning Moretti\'s health.', { qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin07_upgrade_armor', 'Have their mechanics weld heavy ballistic steel skirts over your wheels [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'Their mob mechanics work through the night with torches and angle grinders.',
        'STRONG HIT: Superb armored skirts! Your tires and fuel tanks are shielded from heavy rifle fire!', { hullIntegrity: 35, qualities: { 'Kingpin Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: Wheel armor is welded down solidly.', { hullIntegrity: 15, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Rough welding leaves slag rubbing against your left mudguard.', { qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin07_keep_watch', 'Sit on the cab roof with a rifle and keep perimeter watch until dawn',
        'Your vigilance ensures the safehouse is never ambushed.',
        { qualities: { 'Kingpin Stage': 1, 'Street Cred': 5 } })
    ]
  },
  {
    stage: 8, id: 'story_kingpin_08_highway_ambush_convoy', title: 'The Gun-Truck Gauntlet', trigger: 'COMBAT_ENCOUNTER',
    text: 'Castiglione\'s usurper faction launches a coordinated highway ambush! Five armored pickup trucks armed with heavy 50-caliber machine guns box in your convoy along an elevated interstate viaduct.',
    options: [
      makeRollOption('opt_kingpin08_ram_flank', 'Sideswipe the right-hand interceptor into the concrete guardrail [ROLL +GRIT]', 'grit', 'Street Cred',
        'You pitch your heavy trailer into their lead vehicle with maximum momentum.',
        'STRONG HIT: Devastating crash! The gun-truck flips over the guardrail and plummets 50 feet off the viaduct!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You force the interceptor into the wall, clearing lane space.', { hullIntegrity: -14, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Heavy machine-gun fire riddles your trailer sidewall before you break through.', { hullIntegrity: -25, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin08_drift_feint', 'Feint an exit down an off-ramp, then hard-drift back onto the main highway [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You pull an audacious high-speed feint, braking hard and swinging back.',
        'STRONG HIT: Flawless reflex maneuver! Two pursuing trucks overshoot down the exit ramp while you roar ahead!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You shake off three attackers, though your tires smoke from the skid.', { hullIntegrity: -10, qualities: { 'Kingpin Stage': 1 } },
        'MISS: You clip a concrete lane divider during the drift, jolting the cab.', { hullIntegrity: -20, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin08_hack_fuel_pumps', 'Broadcast an ECM pulse into their electronic fuel injection relays [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You blast malicious fuel-shutoff packets into their truck ECUs.',
        'STRONG HIT: Engine stalls! All three pursuers lose power instantly, drifting harmlessly to the shoulder!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 8, 'Street Cred': 8 } },
        'WEAK HIT: Two trucks stall out, ending their pursuit.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Countermeasures block your packet; they continue firing.', { hullIntegrity: -16, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_kingpin_09_the_baryon_shroud', title: 'The Prototype Shroud', trigger: 'ROAD_EVENT',
    text: 'Moretti opens a velvet-lined case in the server rack, revealing the "Baryon Shroud"—an experimental corporate-grade electronic cloaking module. "I stole this from an Aegis black lab," Moretti smiles. "Mount it to your rig. It absorbs radar waves and scatters heat signatures into pure darkness."',
    options: [
      makeRollOption('opt_kingpin09_wire_shroud', 'Wire the Baryon Shroud into your hauler\'s primary electrical grid [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You integrate the cloaking device into your alternator and hull grounding rods.',
        'STRONG HIT: Total stealth integration! Your 35-ton rig vanishes completely from radar, thermal, and electronic scans!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 10, 'Heat': -50 } },
        'WEAK HIT: The shroud functions, eliminating 70% of your radar footprint.', { qualities: { 'Kingpin Stage': 1, 'Heat': -25 } },
        'MISS: Electrical feedback blows out your dashboard clock.', { hullIntegrity: -8, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin09_tune_resonance', 'Fine-tune the field harmonics to cancel engine acoustic rumble [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You adjust the acoustic dampeners to silence diesel combustion noise.',
        'STRONG HIT: Silent running! The roaring diesel engine whispers like a light breeze!', { hullIntegrity: 20, qualities: { 'Kingpin Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Engine noise is cut in half.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Vibrations loosen an exhaust clamp.', { qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin09_keep_standby', 'Keep the shroud in standby mode for emergency use',
        'You preserve the shroud\'s battery reserves for the final border run.',
        { qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_kingpin_10_the_crossroads', title: 'The Council of Shadows [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the secret river estate of St. Louis, Moretti stands before you, his wound healed and his power restored. The AI servers have completed their laundering runs. "The kingdom is mine once more," he declares. "Three paths lie before us, courier. What is your true calling in the underworld?"',
    options: [
      makeDirectOption('opt_kingpin10_choose_shadow_sovereign', 'Path 1: Keep the Baryon Stealth Shroud and take your gold [SHADOW SOVEREIGN]',
        'You choose personal freedom and untouchable stealth. The Baryon Shroud will remain permanently welded to your rig, making you an invisible ghost on every continental highway.',
        { qualities: { 'Kingpin Stage': 1, 'Kingpin Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_kingpin10_choose_patron', 'Path 2: Use Moretti\'s Billions to Endow the Freehold Refuges [SOVEREIGN PATRON]',
        'You choose the wasteland people. You convince Moretti to finance independent clinics, solar arrays, and armor foundries, making you the revered protector of the poor.',
        { qualities: { 'Kingpin Stage': 1, 'Kingpin Chosen Path': 2, 'Street Cred': 25 } }),
      makeDirectOption('opt_kingpin10_choose_kingmaker', 'Path 3: Become Moretti\'s Chief Underworld Enforcer & Kingmaker [KINGMAKER]',
        'You choose supreme syndicate dominance. You lead Moretti\'s strike teams to purge his rivals, taking joint command of the continental smuggling networks.',
        { qualities: { 'Kingpin Stage': 1, 'Kingpin Chosen Path': 3, 'Contraband Mastery': 20 } })
    ]
  },
  {
    stage: 11, id: 'story_kingpin_11_usurper_assault', title: 'The Siege of the Estate', trigger: 'COMBAT_ENCOUNTER',
    text: 'Castiglione arrives with fifty mercenaries and two armored half-tracks to exterminate Moretti once and for all! Mortar shells crater the estate lawn as heavy gunfire tears through the windows.',
    options: [
      makeRollOption('opt_kingpin11_ram_halftrack', 'Floor the throttle and ram Castiglione\'s armored half-track with your heavy prow [ROLL +GRIT]', 'grit', 'Street Cred',
        'You engage the Baryon stealth shroud, accelerate in total darkness, and smash into his war-rig.',
        'STRONG HIT: Cataclysmic kinetic smash! The half-track is flipped upside down, crushing Castiglione\'s command vehicle and routing his mercenaries!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: You smash their armored flank, breaking the siege.', { hullIntegrity: -15, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Heavy mortar shrapnel tears across your hood before you smash through.', { hullIntegrity: -28, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin11_slice_mercenary_radios', 'Broadcast the AI server\'s financial termination codes into their radios [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You transmit proof that Castiglione\'s offshore bank accounts have been wiped clean by Moretti\'s AI.',
        'STRONG HIT: Instant mercenary mutiny! Realizing their pay is gone, the mercenaries turn their weapons on Castiglione himself!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 10, 'Street Cred': 15 } },
        'WEAK HIT: Mercenaries stop fighting and retreat in confusion.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Radio jamming blocks your broadcast; firefight continues.', { hullIntegrity: -16, qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin11_extract_don', 'Load Moretti and the servers into the cab and blast through the back gardens',
        'You crush decorative garden walls and escape into the dark woods.',
        { hullIntegrity: -10, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_kingpin_12_stealth_tuning', title: 'The Phantom Calibration', trigger: 'ROAD_EVENT',
    text: 'With the siege broken, Moretti\'s master technician installs the final Baryon quantum baffles along your engine exhaust, ensuring that no police lidar or satellite scanner can ever detect your presence.',
    options: [
      makeRollOption('opt_kingpin12_tune_quantum_baffles', 'Calibrate the quantum stealth baffles to zero thermal emission [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You balance the phase-inverters on your diagnostic computer.',
        'STRONG HIT: Absolute invisibility! The hauler produces zero radar, thermal, or acoustic footprint!', { qualities: { 'Kingpin Stage': 1, 'Tech Literacy': 8, 'Heat': -50 } },
        'WEAK HIT: Stealth signature drops to near-zero levels.', { qualities: { 'Kingpin Stage': 1, 'Heat': -25 } },
        'MISS: A grounding cable vibrates loose, sparking slightly.', { qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin12_reinforce_bulkheads', 'Weld hidden false bulkheads inside the cargo hold [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You construct secret compartments shielded by lead and baryon plates.',
        'STRONG HIT: You expand hidden cargo capacity by 6 metric tons of undetectable hold space!', { hullIntegrity: 25, qualities: { 'Kingpin Stage': 1, 'Contraband Mastery': 10 } },
        'WEAK HIT: Secret bulkheads are installed and carpeted.', { hullIntegrity: 15, qualities: { 'Kingpin Stage': 1 } },
        'MISS: A bulkhead weld takes up slightly more room than planned.', { qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin12_inspect_all_seals', 'Conduct a complete physical inspection of every door and window gasket',
        'Hermetic cabin seals ensure total soundproofing and stealth.',
        { hullIntegrity: 10, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_kingpin_13_border_lockdown', title: 'The Last Checkpoint of the Divide', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The state border is locked under federal martial law. High-powered laser tripwires, automated Gatling turrets, and armored hover-tanks guard the crossing.',
    options: [
      makeRollOption('opt_kingpin13_ghost_slip', 'Activate the Baryon Shroud and glide through the laser sensors like a shadow [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You glide through the security zone in complete electronic darkness.',
        'STRONG HIT: Flawless ghost transit! Automated turrets swivel past without detecting your 35-ton rig; you cross the border untouched!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 16 } },
        'WEAK HIT: You cross cleanly, taking only a brief warning sensor ping.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: An automated sensor clips your radio antenna, firing a warning burst.', { hullIntegrity: -15, qualities: { 'Kingpin Stage': 1 } }),
      makeRollOption('opt_kingpin13_executive_diplomatic_code', 'Transmit Moretti\'s presidential diplomatic clearance overrides [ROLL +COOL]', 'cool', 'Street Cred',
        'You transmit top-secret clearance credentials.',
        'STRONG HIT: The barrier gates open wide with full military salutes! "SAFE TRANSIT CONFIRMED, SENATOR."', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The gates open after a tense 30-second security verification.', { qualities: { 'Kingpin Stage': 1 } },
        'MISS: Security questions the expired credentials, forcing you to gun the throttle.', { hullIntegrity: -18, qualities: { 'Kingpin Stage': 1 } }),
      makeDirectOption('opt_kingpin13_ram_checkpoint', 'Put the pedal down and ram the plastic guard shacks into matchsticks',
        'Heavy titanium bull-bars clear an open lane across the state line.',
        { hullIntegrity: -20, qualities: { 'Kingpin Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_kingpin_14_underworld_climax', title: 'The King of the Highway [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have crossed into the sovereign territories! Don Salvatore Moretti turns to you with his golden pocket watch in hand as the destination lights gleam ahead.',
    options: [
      makeRollOption('opt_kingpin14_claim_shadow_sovereign', 'Seal the Baryon Shroud permanently onto your rig [SHADOW PATH] [ROLL +EDGE]', 'edge', 'Street Cred',
        'You finalize the installation, crowned the undisputed Shadow Sovereign of the American roads.',
        'STRONG HIT: You are untouchable! No corporate scan or warlord trap will ever locate your rig again!', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The stealth modifications are permanently locked in.', { qualities: { 'Kingpin Stage': 1, 'Street Cred': 12 } },
        'MISS: Shroud calibration finishes with minor gauge flicker.', { qualities: { 'Kingpin Stage': 1 } },
        { qualities: { 'Kingpin Chosen Path': 1 } }),
      makeRollOption('opt_kingpin14_endow_freeholds', 'Sign the Freehold Endowment Charter [PATRON PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You and Moretti transfer fifty million credits to the Freehold Worker Council.',
        'STRONG HIT: Sovereign Savior! Millions of wasteland citizens worship your name; the council outfits your rig with fortress armor!', { credits: 10000, qualities: { 'Kingpin Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: The endowment funds clear, securing eternal community sanctuary.', { credits: 5000, qualities: { 'Kingpin Stage': 1, 'Street Cred': 15 } },
        'MISS: The council signs the charter with profound gratitude.', { qualities: { 'Kingpin Stage': 1 } },
        { qualities: { 'Kingpin Chosen Path': 2 } }),
      makeRollOption('opt_kingpin14_coronation_kingmaker', 'Accept the Crown of the Underworld Kingmaker [KINGMAKER PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You take your seat as the co-ruler of the continental syndicate pipeline.',
        'STRONG HIT: Boundless criminal wealth and power! You command fleets of smugglers and swim in unlimited gold!', { credits: 15000, qualities: { 'Kingpin Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The syndicate honors your coronation with massive payouts.', { credits: 8000, qualities: { 'Kingpin Stage': 1 } },
        'MISS: Coronation concludes with full treasury transfers.', { qualities: { 'Kingpin Stage': 1 } },
        { qualities: { 'Kingpin Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_kingpin_15_finale', title: 'The Shadow Sovereign [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Syndicate Kingpin is complete. Your hauler has been permanently modified with revolutionary Baryon stealth engineering and underworld modifications.',
    options: [
      makeDirectOption('opt_kingpin15_ending_shadow', 'Rule the Highway as the Shadow Sovereign [ENDING 1: SHADOW SOVEREIGN]',
        'Outfitted with the Baryon Stealth Shroud, your hauler commands +18% speed rating, +6 T Cargo Capacity, and permanent +1 COOL.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Kingpin Stage': 80, 'Street Cred': 30, 'Heat': -50 },
          stats: { cool: 1 },
          rig: { speedRating: 0.18, maxCargoWeight: 6, name: 'Iron Nomad - Shadow Sovereign' }
        }, { qualities: { 'Kingpin Chosen Path': 1 } }),
      makeDirectOption('opt_kingpin15_ending_patron', 'Command Respect as the Sovereign Patron [ENDING 2: SOVEREIGN PATRON]',
        'Revered as the benefactor of the wasteland people, your rig is outfitted with heavy reclaimer fortress armor and high-capacity cargo bays.',
        {
          credits: 18000,
          hullIntegrity: 100,
          cargo: { batteries: 5, chips: 3 },
          qualities: { 'Kingpin Stage': 80, 'Street Cred': 35 },
          stats: { cool: 1, grit: 1 },
          rig: { maxHull: 30, speedRating: 0.15, name: 'Iron Nomad - Sovereign Patron' }
        }, { qualities: { 'Kingpin Chosen Path': 2 } }),
      makeDirectOption('opt_kingpin15_ending_kingmaker', 'Command the Syndicate as the Kingmaker [ENDING 3: KINGMAKER]',
        'Flush with unlimited syndicate wealth, your rig is armed with high-output contraband turbines, reinforced armor, and shielded smuggling bulkheads.',
        {
          credits: 25000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, chips: 5 },
          qualities: { 'Kingpin Stage': 80, 'Street Cred': 30, 'Contraband Mastery': 25 },
          stats: { cool: 1, edge: 1 },
          rig: { speedRating: 0.22, maxHull: 20, maxCargoWeight: 5, name: 'Iron Nomad - Kingmaker' }
        }, { qualities: { 'Kingpin Chosen Path': 3 } }),
      makeDirectOption('opt_kingpin15_farewell', 'Collect final veteran courier fee and depart into the night',
        'With Moretti restored, you merge back onto open asphalt.',
        {
          credits: 12000,
          qualities: { 'Kingpin Stage': 80, 'Street Cred': 10 },
          stats: { cool: 1 },
          rig: { speedRating: 0.12 }
        })
    ]
  }
];

const compiledKingpin = compileStorylets(kingpinData, 'Kingpin Stage');
writeTsFile('src/data/kingpinQuestStorylets.ts', 'KINGPIN_QUEST_STORYLETS', compiledKingpin);

// =========================================================================
// SAGA 8: THE NEURO-PLAGUE PROTOCOL (15 Storylets)
// Wireless cyber-rabies virus, Dr. Clara Vega, hardened neural cockpit
// =========================================================================
const neuroplagueData = [
  {
    stage: 1, id: 'story_neuroplague_01_static_seizure', title: 'The Screaming Radio of the Plains', trigger: 'DOCK',
    text: 'At an isolated refueling depot, a renegade neural surgeon named Dr. Clara Vega bangs on your cab window. "The Cerebro-09 virus has broken containment," she pants, holding an insulated diagnostic cradle. "It\'s a wireless cybernetic pathogen that infects truck neural-links, driving drivers into homicidal highway dementia. I have the firewall vaccine firmware, but I need an uninfected hauler to broadcast the patch across continental microwave relay towers."',
    options: [
      makeRollOption('opt_neuro01_accept_contract', 'Accept Dr. Vega\'s mission and inspect the neural vaccine firmware [ROLL +COOL]', 'cool', 'Street Cred',
        'You negotiate danger pay and review the broadcast route.',
        'STRONG HIT: Flawless negotiation! Vega transfers a 1,500 credit advance and shielded optical patch cables.', { credits: 1500, cargo: { chips: 2 }, qualities: { 'Neuroplague Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You accept the contract and lock the firmware deck in your cab.', { credits: 800, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Local crazed cyborgs hear the radio, throwing bottles at your cab.', { qualities: { 'Neuroplague Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_neuro01_scan_virus_packets', 'Analyze the wireless infection frequency with your cyberdeck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You analyze the malicious radio carrier packets.',
        'STRONG HIT: You identify the virus\'s carrier wavelength and program an automated firewall filter for your rig!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You isolate the broadcast band, keeping your own implants shielded.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Static burst shocks your neural port, causing temporary visual dizziness.', { hullIntegrity: -5, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro01_install_copper_mesh', 'Install grounded copper mesh around your driver\'s seat and neural port',
        'Physical shielding prevents wireless neural infection.',
        { hullIntegrity: 15, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_neuroplague_02_crazed_convoy', title: 'The Rabid Rigs', trigger: 'COMBAT_ENCOUNTER',
    text: 'Two infected heavy haulers, their drivers screaming in wireless psychosis through open CB channels, ram their trailers together and swerve straight toward your convoy at full throttle!',
    options: [
      makeRollOption('opt_neuro02_evasive_hairpin', 'Execute an evasive high-speed ditch maneuver to let them crash into each other [ROLL +EDGE]', 'edge', 'Street Cred',
        'You drop into a gravel ditch, letting the two rabid rigs collide.',
        'STRONG HIT: Brilliant driving! The two infected trucks smash head-on into each other with a violent explosion, clearing your path!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You evade their main collision, taking minor gravel spray against your doors.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: One infected truck clips your rear trailer corner before rolling into the ditch.', { hullIntegrity: -20, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro02_emp_broadcast', 'Blast Dr. Vega\'s firewall kill-code through your radio transmitter [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You beam the neural reboot packet directly into their truck receivers.',
        'STRONG HIT: Instant neural reboot! Both drivers collapse into unconsciousness as their rigs safely engage automated air brakes!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 8, 'Street Cred': 8 } },
        'WEAK HIT: One truck reboots safely; the second veers off the highway.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Broadcast feedback pops an audio amplifier in your dashboard.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro02_ram_through', 'Drop into lowest gear and smash through the weaker trailer\'s rear axle',
        'Your heavy iron nose pushes past the wreckage.',
        { hullIntegrity: -18, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_neuroplague_03_first_relay_tower', title: 'The Pylon of Salvation', trigger: 'DOCK',
    text: 'You reach Relay Tower Alpha atop a rocky mesa. By uploading Vega\'s vaccine firmware to the main satellite dish, you can inoculate all vehicles within a 200-kilometer radius.',
    options: [
      makeRollOption('opt_neuro03_climb_tower', 'Climb the transmission mast in gale-force winds to connect the optical patch [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You climb 100 feet of rusted steel rungs in the howling wind.',
        'STRONG HIT: Heroic feat! You seat the optical connector and broadcast the patch! Hundreds of truckers radio in their tearful gratitude!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You seat the patch cable, though the climb leaves your muscles bruised.', { hullIntegrity: -5, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A gust of wind tears a cable loose, forcing you to climb down and re-crimp it.', { hullIntegrity: -12, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro03_remote_splice', 'Hack the tower\'s ground maintenance terminal using your deck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You splice into the underground fiber junction box.',
        'STRONG HIT: Flawless digital uplink! The firmware propagates across the microwave network at lightspeed!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The upload succeeds, though data bandwidth is limited.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Tower ICE locks the terminal, requiring manual circuit bypass.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro03_consume_chips', 'Install 1 Neural Processing Chip from hold to boost broadcast range by 100% [INVENTORY]',
        'The high-performance chip doubles the vaccine\'s transmission footprint.',
        { cargo: { chips: -1 }, qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 10, 'Street Cred': 8 } },
        { cargo: { chips: 1 } })
    ]
  },
  {
    stage: 4, id: 'story_neuroplague_04_the_infected_town', title: 'The Screaming Depot', trigger: 'DOCK',
    text: 'You roll into a quarantined truck stop. Scores of infected haulers stumble around the parking lot, clutching their cybernetic implants in agony as corrupted hex-strings burn into their optic nerves.',
    options: [
      makeRollOption('opt_neuro04_deploy_mobile_chiller', 'Set up Dr. Vega\'s mobile neuro-chilling clinic in your trailer [ROLL +COOL]', 'cool', 'Street Cred',
        'You open your cargo doors and guide the suffering drivers to the cooling stations.',
        'STRONG HIT: Miraculous medical intervention! You cure twenty veteran truckers, who shower you with grateful blessings and high-grade batteries!', { cargo: { batteries: 2 }, qualities: { 'Neuroplague Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You stabilize the worst cases and calm the panicked crowd.', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 6 } },
        'MISS: Panicked drivers swarm your steps, forcing you to seal doors.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro04_scavenge_infected_parts', 'Salvage pristine uninfected chassis components from abandoned rigs [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You unbolt heavy alloy armor plating and leaf springs from deserted trucks.',
        'STRONG HIT: Exceptional salvage! You weld reinforced heavy steel armor onto your own cab for free!', { hullIntegrity: 35, qualities: { 'Neuroplague Stage': 1 } },
        'WEAK HIT: You secure spare filters and hydraulic hoses.', { hullIntegrity: 15, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: An infected booby-trap arcs voltage against your wrench.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro04_refuel_quickly', 'Refuel your tanks at the automated pump and depart before riots start',
        'You keep the engine running and head back onto the open asphalt.',
        { credits: -150, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_neuroplague_05_highway_sweepers', title: 'The Corporate Incinerators', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis Bio-Hazard Sweeper teams are burning the highway with napalm to purge the infected sector. Automated flame-drones dive toward your convoy, treating your rig as a contaminated carrier!',
    options: [
      makeRollOption('opt_neuro05_charge_firewall', 'Ram through the burning napalm cordon with your heavy steel plow [ROLL +GRIT]', 'grit', 'Street Cred',
        'You seal cab air vents, hit fire-suppression systems, and charge through the flames.',
        'STRONG HIT: Massive kinetic breakthrough! The heavy hauler bursts through the wall of white fire like an iron locomotive!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You burst through the flames, taking singed rubber seals.', { hullIntegrity: -14, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Intense heat burns out your passenger headlight and blisters paint.', { hullIntegrity: -25, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro05_anti_drone_snipe', 'Shoot down the approaching flame-drones with high-velocity rifle fire [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You unlimber your rifle from the cab roof hatch and pick off the drones.',
        'STRONG HIT: Deadeye marksmanship! Three drones detonate in mid-air fireballs, clearing the sky!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You down two drones, forcing the patrol to peel off.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Return flame spray scorches your trailer roof.', { hullIntegrity: -16, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro05_chemical_foam', 'Deploy exterior fire-retardant foam spray to douse the flames',
        'Chemical foam smothers the napalm barrier around your tires.',
        { credits: -150, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_neuroplague_06_neural_hardening', title: 'The Titanium Cranial Shield', trigger: 'DOCK',
    text: 'While sheltered in an abandoned hospital basement, Dr. Vega offers to install an experimental "Neural Firewall Hardening Matrix" directly into your cab\'s cybernetic interface. "It will insulate your brain and truck computers from all wireless interference," she promises.',
    options: [
      makeRollOption('opt_neuro06_accept_implant', 'Undergo the neural firewall integration surgery [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You sit in the dentist chair and let Dr. Vega wire the shielded neuro-port.',
        'STRONG HIT: Flawless surgical symbiosis! Your mind and machine interface become completely impervious to electronic malware and static!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 10, 'Street Cred': 8 } },
        'WEAK HIT: The surgery succeeds, though your skull throbs with post-op soreness.', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 6 } },
        'MISS: Nerve pain flares up, leaving temporary visual static.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro06_chassis_isolators', 'Install fiber-optic optocouplers along your truck\'s communication bus [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You replace copper data wires with immune optical glass fibers.',
        'STRONG HIT: Total vehicle data isolation! No wireless packet can corrupt your truck engine computers!', { hullIntegrity: 25, qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The optical bus stabilizes all critical driving instruments.', { hullIntegrity: 10, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A fiber cable fractures during installation, requiring replacement.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro06_consume_cyberware', 'Integrate 1 unit of Cyberware components from hold into the firewall deck [INVENTORY]',
        'Military-grade cybernetic hardware ensures 100% firewall reliability.',
        { cargo: { cyberware: -1 }, hullIntegrity: 20, qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 10 } },
        { cargo: { cyberware: 1 } })
    ]
  },
  {
    stage: 7, id: 'story_neuroplague_07_ghost_transmission', title: 'The Siren of the Airwaves', trigger: 'ROAD_EVENT',
    text: 'The Cerebro-09 pathogen has evolved into a self-aware viral neural network. A synthetic voice whispers through your cab radio, attempting to seduce your cyberware into surrendering control of the hauler.',
    options: [
      makeRollOption('opt_neuro07_psychic_defiance', 'Resist the hypnotic audio frequencies with iron mental resolve [ROLL +COOL]', 'cool', 'Street Cred',
        'You stare down the static and command your mind with cold discipline.',
        'STRONG HIT: Supreme willpower! You shatter the psychological attack and pinpoint the master viral broadcast tower!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You shake off the hypnotic whispers and maintain road focus.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Vertigo causes you to drift onto the gravel shoulder.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro07_counter_malware', 'Compile a destructive polymorphic counter-virus and broadcast it back [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You type furious hex routines to strike at the viral network.',
        'STRONG HIT: Devastating counter-strike! The virus\'s regional subnet crashes in digital agony, freeing fifty infected trucks!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 10, 'Street Cred': 8 } },
        'WEAK HIT: Your counter-virus silences the whisper for several hours.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Counter-ICE pings back into your deck, scorching an audio diode.', { hullIntegrity: -8, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro07_kill_radio', 'Turn off all civilian radio receivers and drive in complete analog silence',
        'Analog isolation prevents the virus from finding a carrier wave.',
        { qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_neuroplague_08_mad_max_caravan', title: 'The Screaming Armada', trigger: 'COMBAT_ENCOUNTER',
    text: 'A convoy of twenty infected scrap-trucks, welded together into a massive armored road-train, barrels down the center lanes behind you. Corrupted drivers hang from the doors, screaming in machine delirium as they rev their engines.',
    options: [
      makeRollOption('opt_neuro08_drop_mines', 'Drop magnetic pulse mines from your rear bumper directly under their tires [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You trigger the rear deployment rack, dropping three pulsing mines.',
        'STRONG HIT: Massive detonation! The lead scrap-truck\'s steering axle is blasted away, throwing the entire road-train into a colossal jackknife pileup!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The mines disable the lead truck, breaking up the armada.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A mine bounces off asphalt, detonating too close to your own trailer.', { hullIntegrity: -18, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro08_sonic_dash', 'Drop into highest gear and outrun the cumbersome scrap-train on open flats [ROLL +GRIT]', 'grit', 'Street Cred',
        'You floor the accelerator and let your pristine diesel engine pull away.',
        'STRONG HIT: Superior mechanical velocity! The lumbering scrap armada fades into a tiny speck of dust in your rearview mirror!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You outrun their line, though your engine runs hot.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: An infected buggy sideswipes your trailer before dropping back.', { hullIntegrity: -15, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro08_oil_slick', 'Deploy high-viscosity oil slick across the two lanes behind you',
        'The slick sends their lead vehicles spinning out into the ditch.',
        { credits: -150, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_neuroplague_09_the_mountain_broadcast', title: 'The High Summit Dish', trigger: 'DOCK',
    text: 'You reach Mount Baldy\'s microwave arrays—the highest broadcast peak in the state. Uploading the vaccine here will permanently inoculate the entire Midwest sector against the Cerebro-09 virus.',
    options: [
      makeRollOption('opt_neuro09_splice_main_dish', 'Splice the master vaccine payload into the megawatt broadcast transmitter [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You hook Dr. Vega\'s core database into the primary dish amplifier.',
        'STRONG HIT: Triumphant transmission! A blinding pulse of healing firmware washes across the continent, curing thousands of suffering truckers!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 12, 'Street Cred': 15 } },
        'WEAK HIT: The broadcast transmits successfully across 80% of the regional grid.', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 6 } },
        'MISS: A blown transformer delays the broadcast by thirty minutes under freezing winds.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro09_defend_generator', 'Stand guard against infected climbers attempting to sabotage the power [ROLL +GRIT]', 'grit', 'Street Cred',
        'You wield your shotgun and defend the generator shack with unyielding resolve.',
        'STRONG HIT: Unshakeable defender! You hold the generator secure against all attackers until the transmission completes!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You secure the perimeter, taking minor bruising.', { hullIntegrity: -8, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A saboteur tosses an explosive pipe near your truck before being put down.', { hullIntegrity: -18, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro09_reinforce_power', 'Run high-voltage cables from your truck alternator to guarantee full broadcast power',
        'Your truck engine powers the dish to maximum broadcast wattage.',
        { qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_neuroplague_10_the_crossroads', title: 'The Fate of the Neural Code [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'In the mountain control bunker, Dr. Vega holds the master golden optical disk containing both the vaccine and the military source code for Cerebro-09. "The epidemic is broken," she says. "Three destinies lie before us. Who commands the mind of the highway?"',
    options: [
      makeDirectOption('opt_neuro10_choose_neural_fortress', 'Path 1: Permanently mount the Hardened Neural Cockpit into your Rig [NEURAL FORTRESS]',
        'You choose personal machine invulnerability. The military-grade neural firewall and hardened cockpit interface will make your mind and truck permanently impervious to all electronic and psychic interference.',
        { qualities: { 'Neuroplague Stage': 1, 'Neuroplague Chosen Path': 1, 'Tech Literacy': 15 } }),
      makeDirectOption('opt_neuro10_choose_guardian', 'Path 2: Found the Highway Guardian Medical Corps [ROAD GUARDIAN]',
        'You choose community protection. You and Dr. Vega will lead an elite medical convoy guild dedicated to inoculating and protecting all independent truckers across the wasteland.',
        { qualities: { 'Neuroplague Stage': 1, 'Neuroplague Chosen Path': 2, 'Street Cred': 25 } }),
      makeDirectOption('opt_neuro10_choose_apex', 'Path 3: Symbiotically Weaponize the Neuro-Pathogen for yourself [APEX SYNAPSE]',
        'You choose terrifying evolutionary power. You fuse the aggressive viral code with your cyberdeck, granting blazing neural reflexes and combat speed.',
        { qualities: { 'Neuroplague Stage': 1, 'Neuroplague Chosen Path': 3, 'Cyberware Level': 10 } })
    ]
  },
  {
    stage: 11, id: 'story_neuroplague_11_airdrop_blockade', title: 'The Corporate Cordon', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis Bio-Security gunships deploy automated minefields across the mountain pass to contain you and Dr. Vega. They refuse to let the vaccine source code leave the sector.',
    options: [
      makeRollOption('opt_neuro11_hack_gunship_datalink', 'Transmit the Cerebro-09 reboot pulse into the gunship avionics [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You beam the viral reboot pulse directly into their flight computers.',
        'STRONG HIT: Full avionics lockdown! The gunships abort their attack and auto-land in the snowdrifts!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 8, 'Street Cred': 10 } },
        'WEAK HIT: Gunships hesitate, opening an escape corridor through the pass.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Countermeasures deflect the signal; gunships strafe the road with rockets.', { hullIntegrity: -20, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro11_slalom_minefield', 'Slalom through the automated minefield at breakneck speed [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You thread your tires precisely between proximity triggers.',
        'STRONG HIT: Flawless precision driving! You clear the minefield without detonating a single charge!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You clear the field, though shrapnel scores your rear bumper.', { hullIntegrity: -10, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A mine detonates near your trailer, tossing the truck violently.', { hullIntegrity: -22, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro11_smoke_cover', 'Deploy dense white phosphorus smoke and push through on momentum',
        'Smoke conceals your convoy as you roar past the checkpoint.',
        { hullIntegrity: -8, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_neuroplague_12_chassis_neural_weave', title: 'The Synaptic Chassis Weave', trigger: 'ROAD_EVENT',
    text: 'Dr. Vega completes the final wiring of the neural firewall through your truck\'s electrical harness. The hauler now responds to your thoughts instantaneously—steering, braking, and gear-shifting at the speed of thought.',
    options: [
      makeRollOption('opt_neuro12_test_synaptic_latency', 'Test reflex latency on a winding mountain road [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You take sharp hairpin curves guided solely by neural intent.',
        'STRONG HIT: Zero millisecond latency! The 35-ton rig dances along the asphalt like an extension of your own body!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: Response times improve by 300%, handling smoothly.', { qualities: { 'Neuroplague Stage': 1 } },
        'MISS: A sudden neural twitch jerks the steering wheel slightly.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro12_reinforce_cockpit_armor', 'Weld lead-composite anti-radiation plates around the driver cabin [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You mount heavy ballistic shielding to encase your neural throne.',
        'STRONG HIT: Impenetrable cockpit bunker! The driver seat is impervious to armor-piercing bullets and electronic pulses!', { hullIntegrity: 35, qualities: { 'Neuroplague Stage': 1 } },
        'WEAK HIT: Cockpit protection is solidly installed.', { hullIntegrity: 18, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: The heavy plates add slight weight to the front suspension.', { qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro12_calibrate_seat', 'Adjust ergonomic racing harnesses and lumbar supports',
        'Comfort and safety ensure supreme endurance on long hauls.',
        { qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_neuroplague_13_the_final_outbreak', title: 'The City of Shadows', trigger: 'TRANSIT_ENCOUNTER',
    text: 'You reach the outskirts of the primary metropolitan enclave. The final horde of infected combat-cyborgs blocks the highway bridge, their weapons trained on your headlights.',
    options: [
      makeRollOption('opt_neuro13_broadcast_cure_pulse', 'Blast the vaccine firmware at maximum megawatt output from your roof antenna [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You fire the master vaccine pulse into the crowd.',
        'STRONG HIT: Miraculous salvation! The cybernetic virus dissolves in thousands of implants; the cyborgs drop their weapons in awe and tears!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 12, 'Street Cred': 20 } },
        'WEAK HIT: The vaccine cures the frontline fighters, opening a clear lane.', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 10 } },
        'MISS: Some corrupted cyborgs resist, firing sporadic shots before collapsing.', { hullIntegrity: -15, qualities: { 'Neuroplague Stage': 1 } }),
      makeRollOption('opt_neuro13_ram_barricade', 'Put the hauler in gear and smash through the burning wreckage [ROLL +GRIT]', 'grit', 'Street Cred',
        'You put your foot down and bulldoze through the scrap barrier.',
        'STRONG HIT: Colossal kinetic breakthrough! Your reinforced prow blasts the barricade into matchsticks!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You smash through, taking scratches along your fenders.', { hullIntegrity: -12, qualities: { 'Neuroplague Stage': 1 } },
        'MISS: Impact severely dents your bull-bar before you break clear.', { hullIntegrity: -25, qualities: { 'Neuroplague Stage': 1 } }),
      makeDirectOption('opt_neuro13_smoke_and_speed', 'Deploy chemical smoke and slip through the side access lanes',
        'A stealthy flanking run carries you into the enclave safely.',
        { hullIntegrity: -8, qualities: { 'Neuroplague Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_neuroplague_14_synaptic_climax', title: 'The Dawn of the Mind [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'The Cerebro-09 epidemic has been broken! Dawn rises over the city skyline as you complete your chosen destiny and seal the legacy of the Neuro-Plague.',
    options: [
      makeRollOption('opt_neuro14_lock_neural_fortress', 'Lock the Hardened Neural Cockpit permanently into your rig [FORTRESS PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You weld the final neural shielding plates, crowned the Iron Mind of the Highway.',
        'STRONG HIT: Total cognitive transcendence! Your mind and machine are an impenetrable fortress on continental roads!', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 25, 'Street Cred': 20 } },
        'WEAK HIT: The neural cockpit locks in permanently with complete stability.', { qualities: { 'Neuroplague Stage': 1, 'Tech Literacy': 12 } },
        'MISS: A minor electrical spark sings a dash relay before balancing.', { qualities: { 'Neuroplague Stage': 1 } },
        { qualities: { 'Neuroplague Chosen Path': 1 } }),
      makeRollOption('opt_neuro14_found_guardians', 'Establish the Highway Guardian Medical Corps [GUARDIAN PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You and Dr. Vega inaugurate the free medical convoy network.',
        'STRONG HIT: Eternal wasteland reverence! Tens of thousands of haulers salute your colors as the Savior of the Roads!', { credits: 8000, qualities: { 'Neuroplague Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: The Guardian Corps is established with joy and celebrations.', { credits: 4000, qualities: { 'Neuroplague Stage': 1, 'Street Cred': 15 } },
        'MISS: The founding charter is signed with solemn vows.', { qualities: { 'Neuroplague Stage': 1 } },
        { qualities: { 'Neuroplague Chosen Path': 2 } }),
      makeRollOption('opt_neuro14_unleash_apex', 'Unleash the Apex Synapse Viral Reflexes [APEX PATH] [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You assimilate the aggressive viral code into your neural cyberdeck.',
        'STRONG HIT: Terrifying predatory evolution! Your highway reflexes achieve god-tier speeds, unmatched by any driver in history!', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 25, 'Cyberware Level': 10 } },
        'WEAK HIT: Reflexes sharpen to razor limits, pulsing with cybernetic power.', { qualities: { 'Neuroplague Stage': 1, 'Street Cred': 12 } },
        'MISS: A surge of adrenaline rattles your heart before stabilizing.', { qualities: { 'Neuroplague Stage': 1 } },
        { qualities: { 'Neuroplague Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_neuroplague_15_finale', title: 'The Master of the Synapse [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Neuro-Plague is concluded. Your rig has been permanently modified with revolutionary neural interface engineering.',
    options: [
      makeDirectOption('opt_neuro15_ending_fortress', 'Command the Highway as the Neural Fortress [ENDING 1: NEURAL FORTRESS]',
        'Equipped with the Hardened Neural Cockpit Interface, your hauler commands +25 Max Hull, +15% Speed rating, and permanent +1 CYBER and +1 GRIT.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 3 },
          qualities: { 'Neuroplague Stage': 80, 'Tech Literacy': 30, 'Street Cred': 25, 'Heat': -40 },
          stats: { cyber: 1, grit: 1 },
          rig: { maxHull: 25, speedRating: 0.15, name: 'Iron Nomad - Neural Fortress' }
        }, { qualities: { 'Neuroplague Chosen Path': 1 } }),
      makeDirectOption('opt_neuro15_ending_guardian', 'Lead the Medical Fleets as the Road Guardian [ENDING 2: ROAD GUARDIAN]',
        'Revered as the protector of all wasteland drivers, your rig is armored with heavy composite plating and emergency medical life-support systems.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { cryo: 3, chips: 3 },
          qualities: { 'Neuroplague Stage': 80, 'Street Cred': 35 },
          stats: { grit: 1, cool: 1 },
          rig: { maxHull: 35, speedRating: 0.12, name: 'Iron Nomad - Road Guardian' }
        }, { qualities: { 'Neuroplague Chosen Path': 2 } }),
      makeDirectOption('opt_neuro15_ending_apex', 'Rule with Supreme Velocity as the Apex Synapse [ENDING 3: APEX SYNAPSE]',
        'Fueled by predatory viral reflexes, your hauler achieves an astonishing +25% permanent transit speed and unmatched evasive agility.',
        {
          credits: 20000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, chips: 4 },
          qualities: { 'Neuroplague Stage': 80, 'Street Cred': 25, 'Cyberware Level': 10 },
          stats: { cyber: 1, edge: 1 },
          rig: { speedRating: 0.25, name: 'Iron Nomad - Apex Synapse' }
        }, { qualities: { 'Neuroplague Chosen Path': 3 } }),
      makeDirectOption('opt_neuro15_farewell', 'Collect final courier fee and depart under the bright city lights',
        'With the epidemic cured, you merge back onto open asphalt.',
        {
          credits: 10000,
          qualities: { 'Neuroplague Stage': 80, 'Street Cred': 10 },
          stats: { cyber: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledNeuroplague = compileStorylets(neuroplagueData, 'Neuroplague Stage');
writeTsFile('src/data/neuroplagueQuestStorylets.ts', 'NEUROPLAGUE_QUEST_STORYLETS', compiledNeuroplague);
