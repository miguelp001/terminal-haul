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
// SAGA 1: THE SUB-ZERO SIREN (15 Storylets)
// Arctic cryogenic genetics, permafrost vault, cryo cargo logistics
// =========================================================================
const sirenData = [
  {
    stage: 1, id: 'story_siren_01_frozen_distress', title: 'Frostbite on the Northern Frequency', trigger: 'DOCK',
    text: 'A burst transmission on sub-zero emergency channels crackles through your audio console. Dr. Nikaia Frost, an outcast cryo-geneticist from the Laurentian Citadel, seeks a hauler capable of sub-zero transit to evacuate biological stasis capsules before corporate incinerator teams arrive.',
    options: [
      makeRollOption('opt_siren01_accept_cryo', 'Accept the Arctic extraction contract and calibrate refrigeration [ROLL +COOL]', 'cool', 'Street Cred',
        'You review the contract terms and negotiate hazard premiums.',
        'STRONG HIT: Flawless negotiation! You secure a 1,500 credit retainer and specialized cryo-coolant pods.', { credits: 1500, cargo: { cryo: 1 }, qualities: { 'Siren Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You accept the contract and prep your cargo hold.', { credits: 800, qualities: { 'Siren Stage': 1 } },
        'MISS: Port authorities overhear the frequency, flagging your manifest.', { qualities: { 'Siren Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_siren01_hack_telemetry', 'Analyze the encrypted distress packet for corporate surveillance tags [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You decrypt the transmission packet headers.',
        'STRONG HIT: You strip Aegis tracking beacons from the packet, pinpointing the secret extraction bunker.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: You decrypt the coordinates, though the signal leaves an echo on the grid.', { qualities: { 'Siren Stage': 1, 'Heat': 5 } },
        'MISS: Defensive ICE shocks your receiver terminal.', { hullIntegrity: -8, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren01_prep_heaters', 'Install heavy thermal blankets around the cargo bay floor',
        'You prepare the hauler for sub-zero conditions.',
        { hullIntegrity: 10, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_siren_02_blizzard_pass', title: 'The Howling Pass', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A brutal northern blizzard hammers the windshield. Whiteout winds threaten to freeze your pneumatic air lines and send the hauler skidding off the icy cliff road.',
    options: [
      makeRollOption('opt_siren02_plow_ice', 'Engage differential locks and plow through the snowdrifts [ROLL +GRIT]', 'grit', 'Street Cred',
        'You drop into ultra-low gear and let the heavy iron plow clear the drift.',
        'STRONG HIT: Unstoppable kinetic drive! You carve a pristine track through the avalanche.', { qualities: { 'Siren Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You muscle through, though frozen snow clogs your radiator grille.', { hullIntegrity: -10, qualities: { 'Siren Stage': 1 } },
        'MISS: The hauler violently jackknifes against an ice berm before recovering.', { hullIntegrity: -20, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren02_thermal_routing', 'Reroute hot exhaust gas to warm the steering linkages [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You modulate the exhaust butterfly valve with diagnostic code.',
        'STRONG HIT: Elegant thermodynamics! The steering components defrost completely, gliding on ice.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 4 } },
        'WEAK HIT: The heat keeps the linkage moving, though engine temperature runs hot.', { qualities: { 'Siren Stage': 1 } },
        'MISS: A frozen bypass valve bursts, hissing steam into the wheel well.', { hullIntegrity: -12, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren02_crawl', 'Drop speed to 20 km/h and follow guardrail markers slowly',
        'Slow, steady driving carries you past the treacherous ridge safely.',
        { qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_siren_03_permafrost_depot', title: 'The Black Ice Rendezvous', trigger: 'DOCK',
    text: 'You arrive at the abandoned permafrost staging bunker. Dr. Frost and her research assistants wheel out three pressurized cryo-vaults containing the Siren genome—the synthetic DNA of organisms adapted to survive total thermal collapse.',
    options: [
      makeRollOption('opt_siren03_secure_cargo', 'Supervise precision crane-rigging to load the delicate cryo-vaults [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You operate the pneumatic hoist with surgical precision.',
        'STRONG HIT: Flawless loading! The vaults dock into the shock cradles with zero pressure loss.', { qualities: { 'Siren Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The vaults are locked in, though one hydraulic sling scrapes your tailgate.', { hullIntegrity: -5, qualities: { 'Siren Stage': 1 } },
        'MISS: A sling slips on frost, jolting a stasis pod and venting coolant.', { qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren03_inspect_specimen', 'Examine the bio-luminescent cryo-fluid in the observation port [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You scan the chemical composition with your handheld spectrometer.',
        'STRONG HIT: Fascinating discovery! The fluid operates as a superconductor that could drastically increase rig cooling efficiency!', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The stasis fields are stable, holding at -180 degrees Celsius.', { qualities: { 'Siren Stage': 1 } },
        'MISS: The sensor probe shorts in the extreme cold.', { credits: -100, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren03_consume_cryo', 'Supply 1 Cryo Pod from your hold to recharge their field compressor [INVENTORY]',
        'You donate a cryo container to fortify the vault containment matrix.',
        { cargo: { cryo: -1 }, hullIntegrity: 15, qualities: { 'Siren Stage': 1, 'Street Cred': 8 } },
        { cargo: { cryo: 1 } })
    ]
  },
  {
    stage: 4, id: 'story_siren_04_drone_patrol', title: 'The Arctic Hunter Grid', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Aegis Arctic Sweeper drones armed with thermal-guided missiles sweep the snowfields. Their infrared sensors are searching for the distinct heat signature of your truck exhaust.',
    options: [
      makeRollOption('opt_siren04_coolant_dump', 'Vent sub-zero cryo-gas through exhaust stacks to zero your thermal signature [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You flood the mufflers with cryogenic vapor.',
        'STRONG HIT: Perfect ghost transit! The drones sweep right over your truck, reading ambient snow temperature.', { qualities: { 'Siren Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The stealth holds, though cabin windows frost over entirely.', { qualities: { 'Siren Stage': 1 } },
        'MISS: A sudden exhaust backfire alerts a hunter drone, drawing rocket fire!', { hullIntegrity: -18, qualities: { 'Siren Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_siren04_emp_flare', 'Launch an electronic counter-measure flare into the drone cluster [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You fire an EMP flare from your roof dispenser.',
        'STRONG HIT: Direct drone disruption! Two drones tumble into the snowdrifts, disabling the patrol array.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: The drones are blinded long enough for your hauler to duck behind an icy ridge.', { qualities: { 'Siren Stage': 1 } },
        'MISS: The flare misfires, illuminating your cab on their optical targeting systems.', { hullIntegrity: -15, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren04_snow_burrow', 'Pull into a snow trench and shut off all engines until the patrol passes',
        'You sit in total darkness and silence as the drones buzz past overhead.',
        { qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_siren_05_leaking_manifold', title: 'Thermal Shock in the Cylinders', trigger: 'ROAD_EVENT',
    text: 'The cryogenic cold has cracked the alloy engine manifold! Sub-zero coolant is spraying across hot engine blocks, creating blinding vapor clouds and threatening catastrophic cylinder cracking.',
    options: [
      makeRollOption('opt_siren05_rapid_weld', 'Braze the cracked manifold with high-tensile copper wire [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You pull on insulated gloves and weld the glowing crack in sub-zero wind.',
        'STRONG HIT: Masterful roadside mechanics! The brazed seal is stronger than the original cast iron.', { hullIntegrity: 15, qualities: { 'Siren Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: The weld holds the pressure, though you burn your palm on the exhaust housing.', { hullIntegrity: 5, qualities: { 'Siren Stage': 1 } },
        'MISS: The brittle manifold fractures further before you can clamp it.', { hullIntegrity: -16, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren05_bypass_loop', 'Jury-rig a bypass circuit to divert coolant away from the cracked bank [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You re-plumb the secondary cooling lines using diagnostic bypass clamps.',
        'STRONG HIT: Flawless fluid dynamic rerouting! Engine operates safely within normal thermal parameters.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: The bypass functions, though horsepower is restricted.', { qualities: { 'Siren Stage': 1 } },
        'MISS: Coolant pressure blows out a rubber gasket, dousing the alternator.', { hullIntegrity: -14, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren05_chemical_sealant', 'Pour ceramic sealing compound into the cooling expansion tank',
        'The chemical plug seals the crack from the inside.',
        { credits: -150, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_siren_06_raider_ice_trucks', title: 'The Frost Harvesters', trigger: 'COMBAT_ENCOUNTER',
    text: 'Outlaw ice-pirates on studded quad-tracks swarm your convoy. Armed with pneumatic harpoons and thermite torches, they intend to steal the Siren cryo-vaults to sell to black-market bio-hackers.',
    options: [
      makeRollOption('opt_siren06_ram_harvesters', 'Ram their spiked lead buggy with your armored ice-breaker prow [ROLL +GRIT]', 'grit', 'Street Cred',
        'You throttle up and smash through the raider interceptor.',
        'STRONG HIT: Catastrophic impact! The lead buggy is crushed into shards of ice and twisted metal.', { qualities: { 'Siren Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You smash their blockade, sustaining dents on your front fenders.', { hullIntegrity: -12, qualities: { 'Siren Stage': 1 } },
        'MISS: A raider harpoon hooks your trailer door before snapping free.', { hullIntegrity: -22, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren06_ice_drift', 'Hard-drift the heavy trailer to sweep the raider bikes off the road [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You pitch the 35-ton rig into a controlled icy skid.',
        'STRONG HIT: Legendary driving! The swinging trailer sweeps three raider snowmobiles off the embankment into the snowdrifts!', { qualities: { 'Siren Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Raiders veer away in panic, giving you clear road ahead.', { qualities: { 'Siren Stage': 1 } },
        'MISS: The trailer skids wide and clips a boulder, jolting your steering wheel.', { hullIntegrity: -18, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren06_cryo_spray', 'Vent pressurized liquid nitrogen from your exterior spray nozzles [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You trigger the cryogenic purge valve on pursuing vehicles.',
        'STRONG HIT: Sub-zero flash-freeze! Raider tires shatter like glass on the frozen tarmac!', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 6, 'Street Cred': 5 } },
        'WEAK HIT: The nitrogen cloud blinds the attackers, forcing them to brake hard.', { qualities: { 'Siren Stage': 1 } },
        'MISS: Cold vapor drafts back into your cabin, freezing dashboard controls.', { hullIntegrity: -10, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_siren_07_frozen_town', title: 'The Shivering Citadel', trigger: 'DOCK',
    text: 'You dock in Neo-Duluth, an isolated mining settlement locked in perpetual winter. The town clinic is overwhelmed with hypothermic miners suffering from pulmonary frost-scars.',
    options: [
      makeRollOption('opt_siren07_treat_miners', 'Use Dr. Frost\'s cellular regenerative compounds to treat the miners [ROLL +COOL]', 'cool', 'Street Cred',
        'You and Dr. Frost distribute stabilized cryo-healing balm to the workers.',
        'STRONG HIT: Miraculous recoveries! The miner guild blesses your name and gifts high-grade superconductor batteries!', { cargo: { batteries: 2 }, qualities: { 'Siren Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You stabilize the worst patients, earning the gratitude of local elders.', { qualities: { 'Siren Stage': 1, 'Street Cred': 5 } },
        'MISS: Suspicious corporate enforcers in the crowd demand identification papers.', { qualities: { 'Siren Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_siren07_barter_parts', 'Barter with the settlement chief for cold-weather truck upgrades [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You negotiate for reinforced thermal lubricants and studded tires.',
        'STRONG HIT: Exceptional bargain! You outfit your hauler with Arctic-grade running gear at half price.', { credits: -200, hullIntegrity: 25, qualities: { 'Siren Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You acquire basic antifreeze and replacement filters.', { credits: -150, hullIntegrity: 10, qualities: { 'Siren Stage': 1 } },
        'MISS: The chief gouges you on essential fuel reserves.', { credits: -300, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren07_rest_cab', 'Rest in your heated cab and inspect the refrigeration telemetry',
        'A hot meal and diagnostic sweep prepare you for the next leg.',
        { hullIntegrity: 10, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_siren_08_frost_mutation', title: 'The Awakening Sample', trigger: 'ROAD_EVENT',
    text: 'A rhythmic pulsing vibrates through the cargo floor. Inside Cryo-Vault 01, the Siren genome has begun rapid cellular replication in the presence of ambient electrical radiation from your alternator. A sapphire crystal lattice is growing across the chamber walls.',
    options: [
      makeRollOption('opt_siren08_harvest_crystal', 'Extract a sample of the superconducting sapphire lattice [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You use insulated tweezers to harvest a shard of the growing crystal.',
        'STRONG HIT: Unprecedented material! The crystalline lattice exhibits zero electrical resistance at any temperature!', { cargo: { cyberware: 2 }, qualities: { 'Siren Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You safely isolate a viable sample for Dr. Frost.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Static shock arcs into your hands, stinging your nerve pathways.', { hullIntegrity: -8, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren08_stabilize_matrix', 'Inject cryogenic dampeners to slow the growth to safe levels [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You manually crank the high-pressure nitrogen injection valves.',
        'STRONG HIT: Perfect containment stabilization! The growth halts and crystallizes into a solid armor plate.', { hullIntegrity: 20, qualities: { 'Siren Stage': 1 } },
        'WEAK HIT: You arrest the growth before chamber pressure breaches limits.', { qualities: { 'Siren Stage': 1 } },
        'MISS: Overpressure blows a safety gasket, venting blue vapor into the cargo hold.', { qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren08_vent_excess', 'Vent excess bio-electrical charge into the truck battery bank',
        'Your batteries soak up the exotic energy charge.',
        { cargo: { batteries: 1 }, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_siren_09_bridge_collapse', title: 'The Fissure of the Frozen Lake', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Crossing the vast expanse of frozen Lake Superior, a deafening crack echoes through the ice! The heavy hauler breaks through the crust, front wheels sinking into black glacial water as the chassis teeters on the edge of the abyss!',
    options: [
      makeRollOption('opt_siren09_reverse_winch', 'Fire rear hydraulic anchor spikes and slam reverse gear [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You lock differentials and dump maximum torque to drag the front axle backward.',
        'STRONG HIT: Immense pulling power! The spikes hold fast and your rear wheels haul the rig back onto solid bedrock!', { qualities: { 'Siren Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You wrench the hauler clear, though front hubs are caked in ice.', { hullIntegrity: -15, qualities: { 'Siren Stage': 1 } },
        'MISS: The ice gives way further, soaking the engine before you claw onto the ice shelf.', { hullIntegrity: -30, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren09_gun_across', 'Floor the throttle and launch the hauler across the widening fracture [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You gun the turbocharged diesel and skip the front wheels over the crack.',
        'STRONG HIT: Spectacular jump! Kinetic momentum carries your 35-ton rig cleanly across the fissure onto solid ice!', { qualities: { 'Siren Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You clear the gap, though your trailer bottom scrapes the ice shelf.', { hullIntegrity: -12, qualities: { 'Siren Stage': 1 } },
        'MISS: The trailer drops into the trench, requiring hours of high-tension winching.', { hullIntegrity: -25, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren09_dump_ballast', 'Dump 1 unit of scrap ballast to instantly lighten the front load',
        'Shedding weight allows the front suspension to lift out of the water.',
        { hullIntegrity: -8, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_siren_10_the_crossroads', title: 'The Crucible of the Cold [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the northern junction of Iron Mountain, Dr. Frost sits across from you in the cabin. "The Siren project is mature," she whispers. "Three factions seek to claim its revolutionary cold-fusion superconductivity. Where do we deliver the future of cryogenic science?"',
    options: [
      makeDirectOption('opt_siren10_choose_boreal', 'Path 1: Deliver to the Boreal Reclaimer Commune [SUPERCONDUCTOR VANGUARD]',
        'You choose independence and the survival of the northern worker enclaves. The commune will freely distribute the superconductor tech to all haulers.',
        { qualities: { 'Siren Stage': 1, 'Siren Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_siren10_choose_solaris', 'Path 2: Contract with Solaris Cryo-Energy [PERMAFROST ARC]',
        'You choose sovereign corporate power. Solaris will build continental zero-resistance electrical grids and grant you executive immunity.',
        { qualities: { 'Siren Stage': 1, 'Siren Chosen Path': 2, 'Enclave Permits': 3 } }),
      makeDirectOption('opt_siren10_choose_chitin', 'Path 3: Integrate the Superconducting Lattice Directly into your Hauler [ARCTIC PREDATOR]',
        'You choose personal transcendence. The crystalline superconductor will permanently fuse with your engine block and chassis lattice.',
        { qualities: { 'Siren Stage': 1, 'Siren Chosen Path': 3, 'Tech Literacy': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_siren_11_airdrop_blockade', title: 'The Blizzard Blockade', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Corporate air-skimmers deploy thermal minefields across the final highway pass. Automated laser sensors sweep the snow, waiting for any vehicle to trigger the perimeter.',
    options: [
      makeRollOption('opt_siren11_thermal_spoof', 'Transmit cryo-diffraction pulses to blind the infrared mine sensors [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You project sub-zero harmonic interference across the minefield.',
        'STRONG HIT: Total sensor blinding! The laser grids scramble into static, allowing you to cruise right through.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You clear the field safely, though your signal dish burns out from power overload.', { qualities: { 'Siren Stage': 1 } },
        'MISS: A proximity mine detonates near your left wheels, spraying shrapnel.', { hullIntegrity: -20, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren11_slalom_snow', 'Slalom between sensor pillars at breakneck rally speed [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You thread your tires between laser tripwires.',
        'STRONG HIT: Flawless reflex driving! You weave through the killzone without grazing a single beam.', { qualities: { 'Siren Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You clear the hazard, taking minor paint scoring from a deflected sensor pulse.', { hullIntegrity: -8, qualities: { 'Siren Stage': 1 } },
        'MISS: You clip a sensor pylon, triggering an explosive warning salvo.', { hullIntegrity: -22, qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren11_overland_detour', 'Take the treacherous untracked mountain ridge detour',
        'A rough, rocky bypass avoids the minefield entirely at the cost of chassis wear.',
        { hullIntegrity: -10, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_siren_12_cryo_surge', title: 'The Superconducting Pulse', trigger: 'ROAD_EVENT',
    text: 'As the destination approaches, the Siren core surges with raw superconducting energy. Pure blue plasma crackles across the hauler\'s steel chassis, dropping engine friction to near zero and boosting kinetic output to unprecedented levels!',
    options: [
      makeRollOption('opt_siren12_channel_drive', 'Channel the plasma surge directly into your wheel hub motors [ROLL +EDGE]', 'edge', 'Tech Literacy',
        'You open the magnetic relays to route superconductor energy to all eight wheels.',
        'STRONG HIT: Superluminal acceleration! The hauler streaks across the ice at 190 km/h in breathtaking silence!', { qualities: { 'Siren Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: Acceleration spikes dramatically, carrying you forward safely.', { qualities: { 'Siren Stage': 1 } },
        'MISS: A surge arcs into your dashboard, blowing several analog gauge needles.', { hullIntegrity: -12, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren12_fortify_chassis', 'Direct the cryogenic field to crystalize and harden the hull plating [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You let the sub-zero resonance restructure the exterior armor lattice.',
        'STRONG HIT: The armor plates solidify into diamond-hard cryogenic composite!', { hullIntegrity: 35, qualities: { 'Siren Stage': 1 } },
        'WEAK HIT: The armor hardens, absorbing structural vibrations.', { hullIntegrity: 15, qualities: { 'Siren Stage': 1 } },
        'MISS: Some brittle surface frost flakes off along the wheel wells.', { qualities: { 'Siren Stage': 1 } }),
      makeDirectOption('opt_siren12_vent_capacitor', 'Discharge excess superconducting voltage into the ground rods',
        'You safely bleed off the energy build-up.',
        { qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_siren_13_air_cavalry', title: 'The Last Cordon of Fire', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis heavy gunships drop out of the storm clouds. They unleash incendiary missiles to incinerate the road ahead, intending to destroy Dr. Frost and the Siren matrix in a localized firestorm.',
    options: [
      makeRollOption('opt_siren13_cryo_cannon_snipe', 'Fire a pressurized cryo-core shell from your roof-mount launcher [ROLL +EDGE]', 'edge', 'Street Cred',
        'You target the lead gunship\'s jet intake with a sub-zero canister.',
        'STRONG HIT: Direct engine hit! The turbine intake flash-freezes solid, sending the gunship spinning into the snow drifts!', { qualities: { 'Siren Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: The gunship breaks off its attack run, billowing white vapor.', { qualities: { 'Siren Stage': 1 } },
        'MISS: Return missile shrapnel peppers your trailer sidewalls.', { hullIntegrity: -22, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren13_charge_firewall', 'Ram through the flaming incendiary barrier at maximum speed [ROLL +GRIT]', 'grit', 'Cyberware Level',
        'You drop your chin, floor the throttle, and smash through the flames.',
        'STRONG HIT: The cryogenic superconducting aura extinguishes the fire instantly as you blast through untouched!', { qualities: { 'Siren Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You burst through the flames with singed rubber seals.', { hullIntegrity: -15, qualities: { 'Siren Stage': 1 } },
        'MISS: Fire scorches your trailer wiring harnesses before you emerge.', { hullIntegrity: -28, qualities: { 'Siren Stage': 1 } }),
      makeRollOption('opt_siren13_hack_air_datalink', 'Transmit false terrain collision warnings into the gunship radars [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You jam their low-altitude flight avionics with emergency climb alerts.',
        'STRONG HIT: The gunships automatically abort their dive, soaring upward into the cloud deck!', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Gunships hesitate, allowing you to slip past into the valley.', { qualities: { 'Siren Stage': 1 } },
        'MISS: Electronic countermeasures ping back into your radio, blowing a fuse.', { hullIntegrity: -12, qualities: { 'Siren Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_siren_14_arctic_climax', title: 'The Sub-Zero Horizon [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken through the cordon! Dawn lights up the glacial wilderness in brilliant diamond glare as you approach your final objective and complete your chosen destiny.',
    options: [
      makeRollOption('opt_siren14_boreal_delivery', 'Hand over the Siren Matrix to the Boreal Reclaimers [COMMUNE PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull into the underground reclaimer citadel to deliver the free superconductor matrix.',
        'STRONG HIT: The northern workers erupt in ecstatic triumph! You are crowned the Champion of the North!', { qualities: { 'Siren Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: The delivery is completed and payment transferred in full.', { qualities: { 'Siren Stage': 1, 'Street Cred': 10 } },
        'MISS: Tense customs checks conclude with full transfer.', { qualities: { 'Siren Stage': 1 } },
        { qualities: { 'Siren Chosen Path': 1 } }),
      makeRollOption('opt_siren14_solaris_transfer', 'Transfer the Siren patents to the Solaris Executive Directorate [SOLARIS PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull into the high-security corporate monorail terminal.',
        'STRONG HIT: Immense corporate bounty! Billions in bearer bonds and permanent diplomatic immunity are yours!', { credits: 8000, qualities: { 'Siren Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: Solaris honors the contract with full payouts.', { credits: 4000, qualities: { 'Siren Stage': 1 } },
        'MISS: The corporate debriefing is cold, but funds clear.', { qualities: { 'Siren Stage': 1 } },
        { qualities: { 'Siren Chosen Path': 2 } }),
      makeRollOption('opt_siren14_chitin_integration', 'Permanently fuse the superconductor lattice into your hauler\'s chassis [PREDATOR PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You weld the crystalline core directly into the hauler\'s main engine block.',
        'STRONG HIT: Technological godhood! The Iron Nomad becomes a self-cooling, friction-less superconducting dreadnought!', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 20 } },
        'WEAK HIT: The fusion locks in cleanly, permanently boosting your powertrain.', { qualities: { 'Siren Stage': 1, 'Tech Literacy': 10 } },
        'MISS: High-voltage arcs rattle the cab before the system balances.', { qualities: { 'Siren Stage': 1 } },
        { qualities: { 'Siren Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_siren_15_finale', title: 'The Frost Sovereign [FINALE]', trigger: 'DOCK',
    text: 'The Arctic saga is complete. Your hauler has been permanently retrofitted with revolutionary cryogenic superconductor engineering.',
    options: [
      makeDirectOption('opt_siren15_ending_commune', 'Rule the Northern Corridors with the Permafrost Vanguard [ENDING 1: PERMAFROST VANGUARD]',
        'Fitted with the Boreal Superconductor Chiller, your hauler operates at zero thermal friction with reinforced Arctic armor plating.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { cryo: 3, batteries: 3 },
          qualities: { 'Siren Stage': 80, 'Street Cred': 25, 'Heat': -40 },
          stats: { grit: 1 },
          rig: { speedRating: 0.15, maxHull: 20, name: 'Iron Nomad - Permafrost Vanguard' }
        }, { qualities: { 'Siren Chosen Path': 1 } }),
      makeDirectOption('opt_siren15_ending_solaris', 'Command Executive Highway Lanes in the Solaris Frost-Arc [ENDING 2: SOLARIS FROST-ARC]',
        'Awarded Solaris executive credentials, your rig features zero-resistance superconducting alternators and diplomatic cargo holds.',
        {
          credits: 18000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 3 },
          qualities: { 'Siren Stage': 80, 'Enclave Permits': 3, 'Street Cred': 20 },
          stats: { cool: 1, grit: 1 },
          rig: { speedRating: 0.18, maxCargoWeight: 5, name: 'Iron Nomad - Solaris Frost-Arc' }
        }, { qualities: { 'Siren Chosen Path': 2 } }),
      makeDirectOption('opt_siren15_ending_predator', 'Unleash the Frictionless Terror of the Arctic Predator [ENDING 3: ARCTIC PREDATOR]',
        'Your rig is an apex mechanical organism. Superconducting cooling loops grant blazing top speed and heavy reinforced hull plates.',
        {
          credits: 12000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, batteries: 2 },
          qualities: { 'Siren Stage': 80, 'Tech Literacy': 25, 'Street Cred': 20 },
          stats: { cyber: 1, grit: 1 },
          rig: { speedRating: 0.22, maxHull: 30, name: 'Iron Nomad - Arctic Predator' }
        }, { qualities: { 'Siren Chosen Path': 3 } }),
      makeDirectOption('opt_siren15_farewell', 'Collect final courier fee and depart into the frozen dawn',
        'With the Siren matrix secured, you roll out onto the open road.',
        {
          credits: 10000,
          qualities: { 'Siren Stage': 80, 'Street Cred': 10 },
          stats: { grit: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledSiren = compileStorylets(sirenData, 'Siren Stage');
writeTsFile('src/data/sirenQuestStorylets.ts', 'SIREN_QUEST_STORYLETS', compiledSiren);
