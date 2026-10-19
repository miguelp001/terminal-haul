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
// SAGA 4: THE BLACK SUN REACTOR (15 Storylets)
// Dark fusion containment, radiation shielding, micro-reactor overclock
// =========================================================================
const blacksunData = [
  {
    stage: 1, id: 'story_blacksun_01_containment_leak', title: 'The Glowing Ingot of Crater Flats', trigger: 'DOCK',
    text: 'A rogue nuclear engineer, Dr. Maya Chen, flags you down in Crater Flats. In the back of her lead-lined van sits the "Black Sun"—a miniaturized dark-fusion containment core salvaged from a fallen orbital defense satellite. "The magnetic seals are degrading," she warns. "If it vents, it will irradiate the whole county. Haul it to an underground stabilization vault, and we can tap its infinite energy for your rig."',
    options: [
      makeRollOption('opt_blacksun01_accept_hazard', 'Accept the hazardous radioactive contract [ROLL +COOL]', 'cool', 'Street Cred',
        'You review safety protocols and demand full danger compensation.',
        'STRONG HIT: Flawless negotiation! Chen transfers a 1,600 credit advance and lead-composite blankets.', { credits: 1600, cargo: { batteries: 2 }, qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You accept the contract and lock the glowing capsule down.', { credits: 800, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Radiation detectors trip dock alarms, putting guards on alert.', { qualities: { 'Blacksun Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_blacksun01_scan_flux', 'Analyze the magnetic containment field with your cyberdeck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You connect diagnostic probes to the containment housing.',
        'STRONG HIT: You identify a harmonic flux cycle that stabilizes magnetic containment by 40%!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The core readings stabilize within amber safety thresholds.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Gamma burst spikes your diagnostic sensor, frying an optical relay.', { hullIntegrity: -8, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun01_lead_insulation', 'Line the cargo bay floor with dense lead shielding plates',
        'You protect yourself and your cabin from radioactive bleed.',
        { hullIntegrity: 15, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_blacksun_02_geiger_clicks', title: 'The Chittering Needle', trigger: 'ROAD_EVENT',
    text: 'Out on the open road, the dashboard Geiger counter begins clicking frantically. A microscopic fissure in the primary cooling shroud is leaking ionized plasma into your cargo hold.',
    options: [
      makeRollOption('opt_blacksun02_patch_containment', 'Put on a hazmat apron and patch the fissure with borated polymer weld [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You enter the hot cargo bay and weld the seam shut under intense heat.',
        'STRONG HIT: Heroic roadside repair! The seal holds hermetically; Geiger counter falls silent.', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You seal the leak, though radiation singes your coveralls.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Radiation flash shocks your nervous system before you clamp the valve.', { hullIntegrity: -20, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun02_magnetic_shunt', 'Generate a magnetic counter-field using your truck alternator [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You route heavy DC current into electromagnetic coils around the vault.',
        'STRONG HIT: Magnetic confinement bottles the leak with zero radiation leakage!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The magnetic field contains the leak, though truck batteries draw heavy load.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Magnetic back-EMF trips your headlights and radio.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun02_vent_cargo_air', 'Cycle cabin air scrubbers to positive pressure and vent cargo air behind',
        'Forced exhaust ventilation prevents radioactive air from seeping into the cab.',
        { qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_blacksun_03_hazmat_checkpoint', title: 'The Aegis Decontamination Gate', trigger: 'TRANSIT_ENCOUNTER',
    text: 'An Aegis Hazmat Bio-Security cordon blocks the Interstate with high-intensity radiological sweepers and automated heavy barricades.',
    options: [
      makeRollOption('opt_blacksun03_spoof_dosimeter', 'Hack the checkpoint remote sensors to transmit baseline readings [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You broadcast fake sensor telemetry into their receiving receiver array.',
        'STRONG HIT: Total sensor spoofing! The scanner displays: "RADIATION LEVEL: ZERO. PROCEED TO EXPRESS LANE."', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 6, 'Street Cred': 5 } },
        'WEAK HIT: Scanner registers an anomalous reading, but lets you pass under amber advisory.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Alarm sirens scream! The barrier gates drop into lock-down!', { hullIntegrity: -15, qualities: { 'Blacksun Stage': 1, 'Heat': 15 } }),
      makeRollOption('opt_blacksun03_forged_rad_papers', 'Present official Aegis Nuclear Disposal courier credentials [ROLL +COOL]', 'cool', 'Street Cred',
        'You flash forged nuclear transit manifests to the gate lieutenant.',
        'STRONG HIT: Flawless bureaucratic poise! The officer salutes and waves your convoy through immediately.', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The officer charges a 300 credit hazardous processing fee before opening the gates.', { credits: -300, qualities: { 'Blacksun Stage': 1 } },
        'MISS: The inspector spots an inconsistency, drawing sidearms!', { hullIntegrity: -15, qualities: { 'Blacksun Stage': 1, 'Heat': 10 } }),
      makeDirectOption('opt_blacksun03_smash_gate', 'Floor the throttle and smash through the plastic inspection booths',
        'Raw kinetic momentum busts the gates open before enforcers can react.',
        { hullIntegrity: -18, qualities: { 'Blacksun Stage': 1, 'Heat': 20 } })
    ]
  },
  {
    stage: 4, id: 'story_blacksun_04_coolant_starvation', title: 'The Boiling Heavy Water', trigger: 'ROAD_EVENT',
    text: 'The dark-fusion core is consuming coolant at twice the predicted rate. If water levels in the primary moderator tank drop further, a runaway prompt-critical reaction will melt through the truck floorboards.',
    options: [
      makeRollOption('opt_blacksun04_condenser_loop', 'Jury-rig an auxiliary closed-loop vapor condenser [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You plumb air conditioning condensate into the core cooling loop.',
        'STRONG HIT: Brilliant closed thermodynamic loop! Heavy water recycling achieves 99% efficiency!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: Condensation keeps the core cool enough to proceed.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Coolant hose slips, dumping steam onto the asphalt.', { hullIntegrity: -12, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun04_radiator_bypass', 'Reroute the truck\'s primary diesel radiator into the reactor sleeve [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You use heavy wrench work to connect main engine coolant hoses.',
        'STRONG HIT: Immense heat dissipation! The core cools to stable baseline while your cab stays toasty.', { hullIntegrity: 15, qualities: { 'Blacksun Stage': 1 } },
        'WEAK HIT: The engine coolant handles the heat, though temp gauge runs warm.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Overpressure blows out a radiator cap, showering the hood.', { hullIntegrity: -15, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun04_consume_batteries', 'Sacrifice 1 Hydro-Battery from hold to power thermoelectric chillers [INVENTORY]',
        'A dedicated high-voltage battery drives the cooling compressors.',
        { cargo: { batteries: -1 }, hullIntegrity: 15, qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        { cargo: { batteries: 1 } })
    ]
  },
  {
    stage: 5, id: 'story_blacksun_05_mercenary_intercept', title: 'The OmniDyne Recovery Team', trigger: 'COMBAT_ENCOUNTER',
    text: 'OmniDyne orbital recovery gun-trucks ambush you at a desert crossroads. Equipped with magnetic harpoons and lead-armored cabs, they intend to hijack the Black Sun core for their weapons division.',
    options: [
      makeRollOption('opt_blacksun05_emp_discharge', 'Trigger a controlled dark-fusion EMP wave from the reactor core [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You pulse the containment coils to unleash a directional electromagnetic shockwave.',
        'STRONG HIT: Devastating EMP burst! All three mercenary gun-trucks instantly stall, their electronics fried to cinders!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 8, 'Street Cred': 8 } },
        'WEAK HIT: Two attacker vehicles stall out; the third retreats into the dunes.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: The EMP arcs into your own dashboard, blowing several circuit fuses.', { hullIntegrity: -14, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun05_ram_mercenaries', 'Smash through their blockade with heavy kinetic acceleration [ROLL +GRIT]', 'grit', 'Street Cred',
        'You put the pedal to the metal and drive straight through their lead gun-truck.',
        'STRONG HIT: Thunderous impact! The mercenary vehicle rolls into a ditch, clearing an open path!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You smash through their line, denting your front fenders.', { hullIntegrity: -12, qualities: { 'Blacksun Stage': 1 } },
        'MISS: A mercenary harpoon hooks your trailer chassis, dragging before snapping.', { hullIntegrity: -24, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun05_evasive_dust', 'Pitch the hauler into a blinding dry lakebed dust drift [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You pull an evasive power-slide, kicking up a wall of white alkaline dust.',
        'STRONG HIT: Flawless evasive driving! The mercenaries lose track of your vehicle in the blinding dust wall.', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You shake them off after a tense high-speed chase through the dunes.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: A hidden boulder dings your wheel rim in the dust.', { hullIntegrity: -16, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_blacksun_06_tap_the_core', title: 'The First Spark of Fusion', trigger: 'DOCK',
    text: 'While sheltered in a ghost-town service bay, Dr. Chen tests a direct power tap from the core. High-energy dark plasma crackles through superconducting cables, delivering enough electricity to run an entire metropolis.',
    options: [
      makeRollOption('opt_blacksun06_supercharge_drive', 'Channel core plasma into the truck\'s primary electric motor [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You calibrate the inverter gates to accept dark-fusion current.',
        'STRONG HIT: Miraculous powertrain upgrade! Engine horsepower triples instantly with zero exhaust emissions!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: Power increases dramatically, though transmission fluid runs hot.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Power surge burns an inverter coil, requiring quick replacement.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun06_charge_batteries', 'Fill every empty battery casing in your cargo hold with pure fusion energy [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You hook up secondary battery banks to absorb the surplus plasma.',
        'STRONG HIT: You produce 3 hyper-charged batteries with infinite shelf life!', { cargo: { batteries: 3 }, qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You fill two battery packs to capacity.', { cargo: { batteries: 2 }, qualities: { 'Blacksun Stage': 1 } },
        'MISS: An overcharged battery cell pops with a bang, showering sparks.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun06_seal_cradle', 'Keep the core in safe low-output containment mode',
        'Safety first: you avoid pushing the experimental reactor too soon.',
        { qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_blacksun_07_fallout_refugees', title: 'The Irradiated Oasis', trigger: 'DOCK',
    text: 'You roll into an irradiated wasteland oasis where dirty-bomb fallout from past wars poisoned the groundwater. Sick scavengers and cyborg prospectors crowd around your hauler, desperate for clean energy.',
    options: [
      makeRollOption('opt_blacksun07_power_water_purifier', 'Connect the Black Sun core to power the settlement\'s massive desalination pumps [ROLL +COOL]', 'cool', 'Street Cred',
        'You and Dr. Chen run high-voltage lines into the rusted water facility.',
        'STRONG HIT: A gushing torrent of pure clean water floods the settlement! Hundreds of survivors cheer your name and gift rare cyberware!', { cargo: { cyberware: 2 }, qualities: { 'Blacksun Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You restore clean water to the clinic and central fountain.', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'MISS: Desperate scavengers surge forward, forcing you to decouple lines.', { qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun07_barter_scrap', 'Trade spare radiation-shielded alloy plates for truck repair parts [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You barter with the local forge-master.',
        'STRONG HIT: You obtain heavy tungsten armor reinforcement plates for free!', { hullIntegrity: 30, qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You secure basic suspension parts and welding rod.', { hullIntegrity: 15, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Scavengers charge steep prices for secondhand filters.', { credits: -200, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun07_fuel_up', 'Refuel your auxiliary diesel tanks and keep moving',
        'You top off supplies and leave the ruined oasis behind.',
        { credits: -150, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_blacksun_08_magnetic_anomaly', title: 'The Ion Sinkhole', trigger: 'ROAD_EVENT',
    text: 'The dark-fusion core interacts with a subterranean magnetic fault line! Invisible magnetic vortexes tug at your steel hauler, threatening to drag your rig off the highway into a deep geological sinkhole.',
    options: [
      makeRollOption('opt_blacksun08_counter_phase', 'Invert the polarity of the core containment field to repel the fault line [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You reverse the containment magnetic polarity on your keyboard.',
        'STRONG HIT: Brilliant physics trick! The magnetic field pushes against the ground, catapulting the hauler safely past the sinkhole!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The hauler breaks free from the magnetic grip after a tense struggle.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Magnetic pull yanks your front axle, tearing off a tie-rod boot.', { hullIntegrity: -14, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun08_raw_horsepower', 'Drop into lowest gear and overpower the magnetic sinkhole with diesel torque [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You floor the throttle, roaring with raw kinetic horsepower.',
        'STRONG HIT: Unstoppable pulling power! The hauler tears out of the magnetic well like a charging bull!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You drag the heavy trailer free, leaving smoking rubber tracks.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Wheels spin fruitlessly on the gravel, straining your transmission.', { hullIntegrity: -20, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun08_wide_berth', 'Take a five-kilometer rocky desert detour around the magnetic zone',
        'A rough detour avoids the vortex safely.',
        { hullIntegrity: -8, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_blacksun_09_containment_breach_warning', title: 'The Critical Threshold', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A siren wails inside the cargo bay! The dark fusion reaction has entered its supercritical phase. Core temperatures are spiking at 100,000 degrees; magnetic containment will collapse in 90 seconds unless stabilized.',
    options: [
      makeRollOption('opt_blacksun09_plasma_vent', 'Manually crack the emergency plasma vent valve on the cargo roof [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You climb onto the blistering roof and wrench the frozen titanium release valve.',
        'STRONG HIT: Heroic courage! A pillar of blinding violet plasma vents harmlessly into the sky, dropping core temps to zero!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You vent the excess heat, though your gloves scorch from the heat.', { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Escaping plasma chars your roof paint and pops a spotlight.', { hullIntegrity: -22, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun09_code_harmonic', 'Inject a harmonic damping algorithmic virus into the core firmware [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You type frantic hex ciphers into the reactor interface.',
        'STRONG HIT: Master coder intervention! The code arrests the runaway reaction, stabilizing dark fusion at peak efficiency!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 10 } },
        'WEAK HIT: The code stabilizes the core, though error logs fill your storage.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Code lag delays the dampeners, scorching an internal capacitor.', { hullIntegrity: -15, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun09_liquid_nitrogen', 'Dump an entire tank of liquid nitrogen directly into the containment chamber',
        'The sub-zero flash chill quenches the heat instantly.',
        { credits: -250, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_blacksun_10_the_crossroads', title: 'The Solar Eclipse [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the deep subterranean vault of Mount Weather, Dr. Chen turns to you with the glowing dark fusion core. "The Black Sun is tamed," she whispers. "Three distinct destinies await its infinite power. Where do we channel the dark star?"',
    options: [
      makeDirectOption('opt_blacksun10_choose_darksun', 'Path 1: Mount the Micro-Reactor permanently inside your Hauler [DARK SUN OVERCLOCK]',
        'You choose sovereign machine power. The dark fusion core will replace your engine, granting permanent infinite electrical power, unprecedented speed, and heavy lead-composite armor.',
        { qualities: { 'Blacksun Stage': 1, 'Blacksun Chosen Path': 1, 'Tech Literacy': 15 } }),
      makeDirectOption('opt_blacksun10_choose_bastion', 'Path 2: Deliver the Reactor to the Freehold Defense Bastion [FUSION BASTION]',
        'You choose the survival of the wasteland people. The reactor will power the Freehold shield generators, making their settlement impenetrable to corporate airstrikes.',
        { qualities: { 'Blacksun Stage': 1, 'Blacksun Chosen Path': 2, 'Street Cred': 20 } }),
      makeDirectOption('opt_blacksun10_choose_syndicate', 'Path 3: Sell the Reactor to the Shadow Syndicate Cartel [ECLIPSE RUNNER]',
        'You choose underworld supremacy and boundless wealth. The syndicate rewards you with sovereign gold, diplomatic immunity, and high-speed stealth hulls.',
        { qualities: { 'Blacksun Stage': 1, 'Blacksun Chosen Path': 3, 'Contraband Mastery': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_blacksun_11_corporate_hunters', title: 'The Aegis Gunship Swarm', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis heavy gunships and armored personnel carriers surround your exit route. High-powered spotlights turn the midnight desert into day as search teams sweep the rocks.',
    options: [
      makeRollOption('opt_blacksun11_dark_pulse', 'Unleash a dark-plasma EMP burst from your new reactor [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You pulse the reactor coils into your roof discharge rods.',
        'STRONG HIT: Blinding electromagnetic flash! Every gunship engine cuts out, spiraling into emergency autorotation as darkness returns!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 8, 'Street Cred': 10 } },
        'WEAK HIT: The gunships are blinded and disoriented, allowing you to slip past into the shadows.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Countermeasures deflect the pulse; gunships return fire with 30mm auto-cannons.', { hullIntegrity: -20, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun11_speed_dash', 'Floor the dark-fusion throttle and outrun their tracking radar [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You unleash 2,000 foot-pounds of electric torque.',
        'STRONG HIT: Hyper-velocity sprint! The hauler streaks across the desert at 220 km/h, leaving their gunships far behind!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You break their perimeter, though shrapnel grazes your rear mudguards.', { hullIntegrity: -12, qualities: { 'Blacksun Stage': 1 } },
        'MISS: A rocket impacts near your trailer, tossing dirt and rocks against the cab.', { hullIntegrity: -25, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun11_kill_lights', 'Shut off all lights and drive through the canyons on night-vision optics',
        'Silent, dark running allows you to slip under their radar nets.',
        { hullIntegrity: -8, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_blacksun_12_chassis_infusion', title: 'The Plasma-Hardened Hull', trigger: 'ROAD_EVENT',
    text: 'Dark plasma circulating through the truck\'s coolant jacket begins interacting with the steel alloy plating. A strange iridescent violet sheen coats the metal, increasing tensile hardness by 400%!',
    options: [
      makeRollOption('opt_blacksun12_guide_annealing', 'Direct the plasma annealing process across the main cab armor [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You monitor the thermal crystallization of the metal plates.',
        'STRONG HIT: Impenetrable armor! The cab and trailer plates harden into self-insulating ceramic composite!', { hullIntegrity: 45, qualities: { 'Blacksun Stage': 1 } },
        'WEAK HIT: The metal hardens, absorbing future kinetic damage effortlessly.', { hullIntegrity: 25, qualities: { 'Blacksun Stage': 1 } },
        'MISS: An uneven cooling spot leaves a slight brittle patch on the rear door.', { hullIntegrity: 10, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun12_test_resilience', 'Test the hardened armor with a heavy sledgehammer blow [ROLL +GRIT]', 'grit', 'Street Cred',
        'You swing a 20-pound hammer into the newly annealed bumper.',
        'STRONG HIT: The hammer bounces back with a musical chime! Not a single scratch or dent!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The plate absorbs the blow solidly.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Vibrations tingle your forearms painfully.', { qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun12_buff_alloy', 'Polish the violet alloy sheen with industrial compound',
        'The hauler gleams with intimidating dark-matter luminescence.',
        { qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_blacksun_13_the_last_barrier', title: 'The Nuclear Perimeter Gate', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Aegis automated defense pillboxes bar the highway with laser-guided anti-tank cannons. They have orders to vaporize any unauthorized vehicle exiting the sector.',
    options: [
      makeRollOption('opt_blacksun13_overcharge_ram', 'Channel 100 megawatts into your steel ram-prow and charge the gates [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You sound the horns, energized by dark fusion lightning, and slam the barrier.',
        'STRONG HIT: Cataclysmic kinetic destruction! The concrete pillboxes and gates are blasted into rubble as you roar through!', { qualities: { 'Blacksun Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: You smash the barrier, taking heavy impacts on your bull-bars.', { hullIntegrity: -15, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Cannon fire scores deep gouges into your armor before you break through.', { hullIntegrity: -30, qualities: { 'Blacksun Stage': 1 } }),
      makeRollOption('opt_blacksun13_slice_lasers', 'Transmit Dr. Chen\'s master satellite override ciphers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You transmit the high-clearance command packet.',
        'STRONG HIT: The automated defenses power down instantly, displaying: "CLEARANCE OLYMPUS ACCEPTED." The blast doors open wide!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 10, 'Street Cred': 8 } },
        'WEAK HIT: The cannons hesitate, opening a brief window to slip past.', { qualities: { 'Blacksun Stage': 1 } },
        'MISS: Security locks out the network and fires warning salvos.', { hullIntegrity: -18, qualities: { 'Blacksun Stage': 1 } }),
      makeDirectOption('opt_blacksun13_smoke_sprint', 'Deploy high-density chemical smoke and speed through on instinct',
        'Blinded by smoke, their cannons shoot wide as you cross the line.',
        { hullIntegrity: -10, qualities: { 'Blacksun Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_blacksun_14_dark_fusion_climax', title: 'The Dark Star Rising [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken through into the free western horizon! The Black Sun hums with steady, magnificent power as you lock in your chosen legacy.',
    options: [
      makeRollOption('opt_blacksun14_integrate_core', 'Lock the Dark Fusion Core permanently into your rig [DARK SUN PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You weld the final superconducting busbars directly into your vehicle frame.',
        'STRONG HIT: Supreme technological apotheosis! The Iron Nomad becomes an untouchable dark-matter dreadnought!', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 25 } },
        'WEAK HIT: The reactor locks into your powertrain with total stability.', { qualities: { 'Blacksun Stage': 1, 'Tech Literacy': 12 } },
        'MISS: Power surges rattle your cockpit before the system balances.', { qualities: { 'Blacksun Stage': 1 } },
        { qualities: { 'Blacksun Chosen Path': 1 } }),
      makeRollOption('opt_blacksun14_deliver_bastion', 'Deliver the Black Sun to the Freehold Defense Bastion [FREEHOLD PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You roll into the Freehold fortress where the reactor powers the great defensive dome.',
        'STRONG HIT: Hero of the Wasteland! Millions of free citizens honor your name, awarding you fortress armor and massive wealth!', { credits: 8000, qualities: { 'Blacksun Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The delivery is completed and payment transferred in full.', { credits: 4000, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Tense debriefing concludes with full transfer.', { qualities: { 'Blacksun Stage': 1 } },
        { qualities: { 'Blacksun Chosen Path': 2 } }),
      makeRollOption('opt_blacksun14_deliver_syndicate', 'Deliver the reactor to the Shadow Syndicate Vault Lords [SYNDICATE PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You pull into the syndicate\'s underground vault to hand over the dark star.',
        'STRONG HIT: Sovereign underworld fortune! Billions in bearer bonds and elite stealth rig upgrades are loaded aboard!', { credits: 12000, qualities: { 'Blacksun Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: Syndicate lords honor the contract with massive payouts.', { credits: 6000, qualities: { 'Blacksun Stage': 1 } },
        'MISS: Transaction concludes with full payment.', { qualities: { 'Blacksun Stage': 1 } },
        { qualities: { 'Blacksun Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_blacksun_15_finale', title: 'The Master of the Dark Star [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Black Sun is concluded. Your rig has been permanently modified with revolutionary dark-fusion engineering.',
    options: [
      makeDirectOption('opt_blacksun15_ending_darksun', 'Rule the Open Highway as the Dark Sun [ENDING 1: DARK SUN OVERCLOCK]',
        'Powered by the internal Dark Fusion Micro-Reactor, your hauler commands +20% permanent transit speed, +20 Max Hull, and supreme cybernetic integration.',
        {
          credits: 15000,
          hullIntegrity: 100,
          cargo: { batteries: 4, cyberware: 3 },
          qualities: { 'Blacksun Stage': 80, 'Tech Literacy': 25, 'Street Cred': 25, 'Heat': -40 },
          stats: { cyber: 1 },
          rig: { speedRating: 0.20, maxHull: 20, name: 'Iron Nomad - Dark Sun' }
        }, { qualities: { 'Blacksun Chosen Path': 1 } }),
      makeDirectOption('opt_blacksun15_ending_bastion', 'Command Continental Defense as the Fusion Bastion [ENDING 2: FUSION BASTION]',
        'Outfitted with impenetrable heavy composite armor plating and fortress generators, your rig is virtually indestructible.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { batteries: 5, chips: 3 },
          qualities: { 'Blacksun Stage': 80, 'Street Cred': 30 },
          stats: { grit: 1, cyber: 1 },
          rig: { maxHull: 40, name: 'Iron Nomad - Fusion Bastion' }
        }, { qualities: { 'Blacksun Chosen Path': 2 } }),
      makeDirectOption('opt_blacksun15_ending_syndicate', 'Cruise in Sovereign Shadow as the Eclipse Runner [ENDING 3: ECLIPSE RUNNER]',
        'Backed by syndicate wealth and equipped with high-efficiency dark-matter turbines and shielded cargo bays, your rig is an underworld legend.',
        {
          credits: 24000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Blacksun Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 20 },
          stats: { cyber: 1, cool: 1 },
          rig: { speedRating: 0.25, maxCargoWeight: 5, name: 'Iron Nomad - Eclipse Runner' }
        }, { qualities: { 'Blacksun Chosen Path': 3 } }),
      makeDirectOption('opt_blacksun15_farewell', 'Collect final courier fee and roll out into the radiant sunrise',
        'With the dark fusion core delivered, you hit the open highway.',
        {
          credits: 10000,
          qualities: { 'Blacksun Stage': 80, 'Street Cred': 10 },
          stats: { cyber: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledBlacksun = compileStorylets(blacksunData, 'Blacksun Stage');
writeTsFile('src/data/blacksunQuestStorylets.ts', 'BLACKSUN_QUEST_STORYLETS', compiledBlacksun);
