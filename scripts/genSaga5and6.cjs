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
// SAGA 5: THE ORACLE OF THE ASH DUNES (15 Storylets)
// Transhuman prophet, seismic acoustic sensor mesh, silica dune storms
// =========================================================================
const oracleData = [
  {
    stage: 1, id: 'story_oracle_01_silica_whisper', title: 'The Silica Whispers of the Ash Basin', trigger: 'DOCK',
    text: 'In the great ash expanse of the Southwest Wasteland, robed cyber-pilgrims approach your hauler. Their leader, Elder Tobias, points toward the shifting white silica dunes. "The Oracle of the Ash Dunes is waking," he whispers. "A pre-war transhuman consciousness merged with the continental seismic acoustic sensor grid. She demands offerings of high-density neural processors and pure grain before revealing the tremors of the future. Will you guide our sacred caravan?"',
    options: [
      makeRollOption('opt_oracle01_accept_pilgrimage', 'Accept the contract to lead the sacred dune pilgrimage [ROLL +COOL]', 'cool', 'Street Cred',
        'You review the coordinates through the treacherous shifting silica seas.',
        'STRONG HIT: Flawless negotiation! The pilgrims grant you 1,500 credits and heavy dust-filtration screens.', { credits: 1500, cargo: { grain: 2 }, qualities: { 'Oracle Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You accept the contract and lead the caravan into the dust.', { credits: 800, qualities: { 'Oracle Stage': 1 } },
        'MISS: Local raiders mark your convoy as an easy religious caravan target.', { qualities: { 'Oracle Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_oracle01_scan_seismic_frequencies', 'Tune your diagnostic deck to listen to the subsurface acoustic vibrations [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You hook acoustic pickups to your truck\'s front axle.',
        'STRONG HIT: Breathtaking audio telemetry! You detect a rhythmic subterranean heartbeat pulsing through the bedrock!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You isolate low-frequency rumble markers that guide your navigation.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: Subsonic feedback squeals through your cabin speakers.', { hullIntegrity: -5, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle01_prep_air_filters', 'Install dual cyclonic sand-separator intake snorkels on your engine',
        'You protect your engine cylinders from microscopic silica dust.',
        { hullIntegrity: 15, qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_oracle_02_silica_dust_storm', title: 'The Razor Silica Gale', trigger: 'ROAD_EVENT',
    text: 'A ferocious storm of razor-sharp volcanic silica dust sweeps over the dunes. Visibility drops to three feet; the howling abrasive wind threatens to strip the paint and glass off your rig.',
    options: [
      makeRollOption('opt_oracle02_acoustic_navigation', 'Navigate blind using the Oracle\'s seismic acoustic pulses [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You steer by the audio hum of the bedrock sensor nodes.',
        'STRONG HIT: Pure navigation mastery! You glide through the maelstrom without touching a single sand drift.', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 6, 'Street Cred': 5 } },
        'WEAK HIT: The seismic tracking holds you on the ridge, though sand scores your side mirrors.', { hullIntegrity: -8, qualities: { 'Oracle Stage': 1 } },
        'MISS: High-pressure silica strips your headlights and cracks a fog lamp.', { hullIntegrity: -18, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle02_steady_plow', 'Keep the heavy iron nose pointed into the wind and push forward [ROLL +GRIT]', 'grit', 'Street Cred',
        'You lock your jaw and let 600 horsepower bulldoze through the shifting dunes.',
        'STRONG HIT: Massive kinetic resilience! The hauler breaks through the storm front like an iron wedge.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You push through, taking minor sand abrasion on your front bumper.', { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } },
        'MISS: A massive sand drift bogs down your trailer, forcing heavy winching.', { hullIntegrity: -20, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle02_hunker_down', 'Deploy side steel storm shutters and wait out the gale',
        'You wait safely inside your sealed cab until the storm subsides.',
        { qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_oracle_03_pilgrim_caravan', title: 'The Sinking Sanctuary', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A passenger bus carrying elderly pilgrims has broken an axle, sinking deep into a bed of treacherous dry quicksand. Behind them, raider buggies kick up dust on the horizon.',
    options: [
      makeRollOption('opt_oracle03_winch_bus', 'Rig your heavy industrial tow cables and haul the bus to solid rock [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You anchor your rear stabilizers and winch the passenger bus out of the sand.',
        'STRONG HIT: Heroic rescue! The bus is dragged to safety in minutes; grateful pilgrims shower you with blessing tokens and rare chips!', { cargo: { chips: 2 }, qualities: { 'Oracle Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You rescue the bus, though your winch motor smokes under extreme strain.', { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } },
        'MISS: The tow cable snaps on a boulder, denting your tailgate.', { hullIntegrity: -18, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle03_intimidate_raiders', 'Fire warning tracer rounds from your cab roof to scatter the raiders [ROLL +COOL]', 'cool', 'Street Cred',
        'You light up the sky with heavy caliber tracer fire.',
        'STRONG HIT: The raider buggies scatter in terror, abandoning the chase!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: The raiders keep their distance, allowing the caravan to limp forward.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: Raiders return rifle fire, chipping your passenger door.', { hullIntegrity: -12, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle03_donate_grain', 'Distribute 1 unit of Synthetic Grain from your hold to feed the pilgrims [INVENTORY]',
        'Your generosity revives the starving pilgrims and elevates your status in the cult.',
        { cargo: { grain: -1 }, qualities: { 'Oracle Stage': 1, 'Street Cred': 10 } },
        { cargo: { grain: 1 } })
    ]
  },
  {
    stage: 4, id: 'story_oracle_04_the_first_shrine', title: 'The Pylon of Shifting Stone', trigger: 'DOCK',
    text: 'You reach the First Seismic Pylon—a black obsidian monolith thrusting out of the sand dunes, humming with subterranean electrical currents. Cultists kneel before the pylon, waiting for you to interface with its data port.',
    options: [
      makeRollOption('opt_oracle04_commune_pylon', 'Jack your neural deck into the obsidian monolith\'s diagnostic port [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You bridge your cyberware with the monolith\'s seismic datastream.',
        'STRONG HIT: Profound digital revelation! The Oracle projects the complete tectonic fault map into your mind!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: You download the navigation coordinates to the central sanctum.', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Neural static shocks your interface port, inducing a migraine.', { qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle04_align_antenna', 'Align your truck\'s radio mast with the pylon\'s harmonic frequency [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You physically align the directional antennas with precision wrench turns.',
        'STRONG HIT: Crystal-clear harmonic lock! The radio hums with melodic pre-war symphonies.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The antenna locks on the signal, stabilizing comms.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: A sudden gust bends your antenna mast.', { hullIntegrity: -8, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle04_offer_chip', 'Deposit 1 Neural Processing Chip from your hold into the pylon\'s offering receptacle [INVENTORY]',
        'The pylon glows with radiant sapphire light, validating your convoy as Chosen Pilgrims.',
        { cargo: { chips: -1 }, qualities: { 'Oracle Stage': 1, 'Tech Literacy': 10, 'Street Cred': 10 } },
        { cargo: { chips: 1 } })
    ]
  },
  {
    stage: 5, id: 'story_oracle_05_ash_raider_ambush', title: 'The Zealots of the Rust Idol', trigger: 'COMBAT_ENCOUNTER',
    text: 'A violent rival faction of dune scavengers, the "Iron Cleansers," attacks with spiked sail-skiffs and explosive spears. They believe the Oracle is a false demon that must be burned out of the earth.',
    options: [
      makeRollOption('opt_oracle05_crush_skiffs', 'Ram their fragile sail-skiffs with your heavy iron bull-bar [ROLL +GRIT]', 'grit', 'Street Cred',
        'You floor the throttle and smash through their wooden sailcraft.',
        'STRONG HIT: Total kinetic obliteration! Three skiffs shatter into splinters under your wheels, routing the raiders!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You smash their attack line, sustaining minor dents on your grille.', { hullIntegrity: -12, qualities: { 'Oracle Stage': 1 } },
        'MISS: An explosive spear detonates on your front axle, tearing off a brake line.', { hullIntegrity: -24, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle05_acoustic_shockwave', 'Broadcast the pylon\'s seismic pulse over your exterior sirens [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You blast the resonant seismic sub-bass through your 10,000-watt PA horns.',
        'STRONG HIT: Devestating acoustic shock! The resonant frequency disorients the raiders, causing their skiffs to capsize in the dunes!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: The acoustic blast confuses their drivers, letting you break through.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: Feedback blows out two of your exterior speakers.', { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle05_high_speed_slalom', 'Weave between sand dunes at 110 km/h to evade their spears [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You slalom through the dune crests with razor precision.',
        'STRONG HIT: Sublime wasteland driving! You outrun their sails effortlessly in the open flats.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You escape their pursuit, though sand clogs your brake pads.', { hullIntegrity: -8, qualities: { 'Oracle Stage': 1 } },
        'MISS: A skiff spears your rear trailer door, gouging metal.', { hullIntegrity: -18, qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_oracle_06_seismic_tremor', title: 'The Tectonic Rift', trigger: 'ROAD_EVENT',
    text: 'A magnitude 7.2 earthquake violently shakes the desert floor! The ground ahead rips open into a 30-foot chasm vomiting pressurized subterranean steam and glowing silica sparks.',
    options: [
      makeRollOption('opt_oracle06_launch_across', 'Floor the accelerator and jump the narrow section of the fault line [ROLL +EDGE]', 'edge', 'Street Cred',
        'You put the pedal to the floor and launch the heavy rig across the fissure.',
        'STRONG HIT: Spectacular jump! Kinetic momentum carries all eight wheels cleanly across the opening chasm!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: The rear wheels clip the far lip with a heavy bang, but you pull clear.', { hullIntegrity: -15, qualities: { 'Oracle Stage': 1 } },
        'MISS: The rear bumper smashes into the rock face before the truck claws out.', { hullIntegrity: -28, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle06_seismic_read', 'Read the tremor acoustic harmonics to find solid un-ruptured bedrock [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You scan the ground resonance to locate stable granite strata.',
        'STRONG HIT: Master geological route! You bypass the fault along an ancient granite ridge with zero danger.', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You find a detour, though rough gravel rattles your suspension.', { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } },
        'MISS: You hit a dead-end ridge, forcing a hasty turnaround under falling rocks.', { hullIntegrity: -18, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle06_bridge_trench', 'Drop heavy steel ramp plates from your trailer to bridge the narrowest gap',
        'Steel bridging plates allow safe, controlled transit over the fracture.',
        { credits: -150, qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_oracle_07_the_mirage_city', title: 'The Silica Necropolis', trigger: 'DOCK',
    text: 'The earthquake unearths a forgotten pre-war research metropolis buried under fifty feet of ash: "Sanctuary-7". Glass towers jut from the sand like crystalline ribs, their subterranean labs holding untouched silicon stockpiles.',
    options: [
      makeRollOption('opt_oracle07_salvage_chips', 'Scavenge the subterranean computing vault for pristine neural processors [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You breach the vault door and salvage ancient optical computing arrays.',
        'STRONG HIT: Invaluable salvage! You recover 4 pristine neural processors and rare data tablets!', { cargo: { chips: 4 }, qualities: { 'Oracle Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You secure two crates of intact processors.', { cargo: { chips: 2 }, qualities: { 'Oracle Stage': 1 } },
        'MISS: Ancient automated security sparks a fire trap, singeing your jacket.', { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle07_salvage_chassis_alloy', 'Cut structural titanium beams from the fallen towers [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You use heavy oxy-torches to cut aerospace-grade alloy girders.',
        'STRONG HIT: Masterwork metal! You weld high-tensile titanium armor across your cab and trailer for free!', { hullIntegrity: 35, qualities: { 'Oracle Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You salvage enough plate to reinforce your door panels.', { hullIntegrity: 15, qualities: { 'Oracle Stage': 1 } },
        'MISS: A steel beam shifts during cutting, pinching your wrench.', { qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle07_explore_quietly', 'Walk the glass avenues quietly and log the archaeological coordinates',
        'You respect the resting place of the ancients and record its secrets.',
        { qualities: { 'Oracle Stage': 1, 'Street Cred': 5 } })
    ]
  },
  {
    stage: 8, id: 'story_oracle_08_the_temple_approach', title: 'The Obsidian Road', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The dunes give way to a smooth highway of solid volcanic glass—the Obsidian Road leading to the Oracle\'s subterranean caldera. The surface is slick as oil, hovering above deep geothermal steam vents.',
    options: [
      makeRollOption('opt_oracle08_tire_traction', 'Engage pneumatic tire stud pins and hold smooth center-lane traction [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You deploy carbide traction pins into your rubber treads.',
        'STRONG HIT: Flawless grip! The hauler glides along the black glass road with majestic precision.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You maintain control, though tires spin occasionally on glassy patches.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: The hauler slides sideways on a hairpin, scraping a rock outcropping.', { hullIntegrity: -16, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle08_steam_vent_timing', 'Time your transit between the erupting geothermal steam geysers [ROLL +COOL]', 'cool', 'Street Cred',
        'You observe the geyser eruption intervals and roll forward with serene patience.',
        'STRONG HIT: Perfect timing! You glide through the volcanic field without a single drop of scalding water touching your paint.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Steam clouds billow past, blinding you momentarily.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: A scalding steam geyser blasts your passenger window, fogging it permanently.', { hullIntegrity: -12, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle08_slow_creep', 'Crawl at 15 km/h with hazard lights flashing',
        'Careful, steady transit preserves your tires and nerves.',
        { qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_oracle_09_the_prophet_communion', title: 'The Chamber of the Oracle', trigger: 'DOCK',
    text: 'Deep within a volcanic basalt cavern, you stand before the Oracle of the Ash Dunes. Suspended inside a spherical chamber of glowing liquid silica and fiber-optic cables, a towering transhuman entity turns her silver gaze upon you. "Courier of the Iron Nomad," her voice echoes through your neural interface. "I have heard every turn of your tires since you crossed the divide."',
    options: [
      makeRollOption('opt_oracle09_deep_neural_merge', 'Open your cyberware to full neural communion with the Oracle [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You bridge your consciousness directly with the continental sensory network.',
        'STRONG HIT: Cosmic machine revelation! You perceive every fault line, convoy movement, and weather storm across North America!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 12, 'Street Cred': 10 } },
        'WEAK HIT: The data floods your senses, gifting you profound navigational clarity.', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 6 } },
        'MISS: Neurological overload forces your cyberdeck into emergency reboot.', { qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle09_deliver_offerings', 'Present the pilgrims\' sacred offerings of grain and silicon [ROLL +COOL]', 'cool', 'Street Cred',
        'You step forward with dignity and lay the offerings at the base of the chamber.',
        'STRONG HIT: The Oracle smiles with radiant warmth, bestowing divine blessings and superconductor batteries upon your rig!', { cargo: { batteries: 2 }, qualities: { 'Oracle Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: The offerings are accepted with quiet grace.', { qualities: { 'Oracle Stage': 1, 'Street Cred': 6 } },
        'MISS: The Oracle sighs at the mortality of humanity, but permits your audience.', { qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle09_bow_respectfully', 'Bow your head in solemn silence before the great mind',
        'A moment of profound quiet in the heart of the machine temple.',
        { qualities: { 'Oracle Stage': 1, 'Street Cred': 5 } })
    ]
  },
  {
    stage: 10, id: 'story_oracle_10_the_crossroads', title: 'The Vision of Three Futures [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'The Oracle displays three holographic futures on the chamber walls. "The continental crust is shifting," she declares. "Three destinies lie before you. How will you use the voice of the earth?"',
    options: [
      makeDirectOption('opt_oracle10_choose_oracle_rig', 'Path 1: Fuse the Tectonic Telemetry Link permanently into your Rig [DUNE ORACLE]',
        'You choose personal transcendence. The Oracle\'s seismic acoustic array will be spliced into your dashboard, granting you supernatural road precognition and enhanced cargo bays.',
        { qualities: { 'Oracle Stage': 1, 'Oracle Chosen Path': 1, 'Tech Literacy': 15 } }),
      makeDirectOption('opt_oracle10_choose_pilgrim_fleet', 'Path 2: Lead the Pilgrims to Found a Free Desert Sanctuary [SILICA PROPHET]',
        'You choose community and spiritual liberation. You will lead the faithful to establish a prosperous, unmolested oasis protected by seismic early-warning networks.',
        { qualities: { 'Oracle Stage': 1, 'Oracle Chosen Path': 2, 'Street Cred': 20 } }),
      makeDirectOption('opt_oracle10_choose_cartel_weapon', 'Path 3: Weaponize the Seismic Sensor Array for the Underworld [TECTONIC HARBINGER]',
        'You choose ruthless power. The syndicate will buy the seismic coordinates to trigger controlled tectonic collapses along corporate trade routes, rewarding you with supreme wealth.',
        { qualities: { 'Oracle Stage': 1, 'Oracle Chosen Path': 3, 'Contraband Mastery': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_oracle_11_corporate_desecration', title: 'The Seismic Dreadnought Intercept', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis Mining Corporation has tracked your pilgrimage! An automated four-story Seismic Crusher Dreadnought arrives at the caldera mouth, deploying ultrasonic drills to destroy the Oracle\'s temple and claim the mineral wealth.',
    options: [
      makeRollOption('opt_oracle11_trigger_sandslide', 'Trigger a seismic resonance pulse to bury the Crusher in an avalanche [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You coordinate with the Oracle to focus sonic shockwaves into the canyon walls.',
        'STRONG HIT: Colossal rock avalanche! 100,000 tons of sand and boulders bury the corporate Crusher up to its gun turrets!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 8, 'Street Cred': 12 } },
        'WEAK HIT: The rockslide damages its track drive, immobilizing the machine.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: The Crusher returns fire with heavy mortar shells before being pinned.', { hullIntegrity: -22, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle11_ram_hydraulic_hoses', 'Speed beneath the Crusher\'s outriggers and sever its hydraulic lines [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You thread your hauler beneath the colossal crawler and fire high-caliber rounds.',
        'STRONG HIT: Flawless precision strike! High-pressure hydraulic fluid gushes out, collapsing the machine into the sand!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You disable one track assembly, allowing your convoy to escape.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: The Crusher shifts weight, denting your trailer roof.', { hullIntegrity: -20, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle11_smoke_cover', 'Deploy full phosphorus smoke and guide the pilgrim buses past the beast',
        'Dense smoke blinds the dreadnought\'s targeting sensors as you flee.',
        { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_oracle_12_chassis_harmonic_tuning', title: 'The Harmonic Chassis Lattice', trigger: 'ROAD_EVENT',
    text: 'Connecting to the seismic network has altered the atomic vibration of your hauler\'s steel frame. The chassis hums at a resonant frequency that repels road vibrations and absorbs kinetic shock with effortless grace.',
    options: [
      makeRollOption('opt_oracle12_tune_acoustics', 'Calibrate suspension dampers to harmonic resonance frequency [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You adjust the pneumatic suspension valves with diagnostic software.',
        'STRONG HIT: Liquid-smooth ride! Road shock drops to zero; the hauler glides over rocks like glass!', { hullIntegrity: 35, qualities: { 'Oracle Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: Suspension handles rough ground with newfound smoothness.', { hullIntegrity: 18, qualities: { 'Oracle Stage': 1 } },
        'MISS: A slight harmonic rattle develops in your dashboard trim.', { qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle12_weld_seismic_plates', 'Weld basalt acoustic plates across your truck undercarriage [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You mount sacrificial volcanic stone plates along the chassis bottom.',
        'STRONG HIT: Impenetrable underbody defense! Landmines and rock strikes shatter harmlessly against the stone!', { hullIntegrity: 25, qualities: { 'Oracle Stage': 1 } },
        'WEAK HIT: Undercarriage protection is solidly secured.', { hullIntegrity: 12, qualities: { 'Oracle Stage': 1 } },
        'MISS: Heavy stone plates add slight sluggishness to steering.', { qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle12_preserve_tuning', 'Maintain the current harmonic balance and proceed quietly',
        'The balanced hum of the machine accompanies your journey.',
        { qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_oracle_13_the_ash_fissure_dash', title: 'The Collapsing Basin', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The entire Great Ash Basin is undergoing massive tectonic subduction! Fault lines are opening like yawning jaws as the desert floor sinks fifty feet into subterranean magma caverns.',
    options: [
      makeRollOption('opt_oracle13_precognitive_drive', 'Trust the Oracle\'s telepathic early-warning vectors and floor the gas [ROLL +COOL]', 'cool', 'Street Cred',
        'You react to fissures before they open, steering on pure prophetic instinct.',
        'STRONG HIT: Miraculous prophetic driving! You weave through the collapsing basin at 130 km/h, untouched by falling earth!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 16 } },
        'WEAK HIT: You escape the collapsing basin, though falling rocks dent your trailer doors.', { hullIntegrity: -14, qualities: { 'Oracle Stage': 1 } },
        'MISS: A collapsing fissure edge drops your rear wheels, scraping the differential before you pull free.', { hullIntegrity: -26, qualities: { 'Oracle Stage': 1 } }),
      makeRollOption('opt_oracle13_raw_engine_boost', 'Dump auxiliary fuel into the turbochargers and blast across [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You put the pedal to the floor with twin-turbo flames spitting from your exhaust.',
        'STRONG HIT: Roaring kinetic escape! Pure horsepower rockets your 35-ton rig onto solid bedrock!', { qualities: { 'Oracle Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You reach solid ground safely, though engine coolant boils in the overflow.', { qualities: { 'Oracle Stage': 1 } },
        'MISS: Extreme heat blows an exhaust manifold gasket with a loud pop.', { hullIntegrity: -18, qualities: { 'Oracle Stage': 1 } }),
      makeDirectOption('opt_oracle13_steady_path', 'Follow the highest geological ridge line calmly and steadily',
        'Cautious pathfinding keeps you on the most durable bedrock.',
        { hullIntegrity: -10, qualities: { 'Oracle Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_oracle_14_prophecy_climax', title: 'The Voice of the Continent [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken out of the dying basin and arrived at the continental nexus! Dawn breaks in gold and purple as you seal the prophetic destiny of the Ash Dunes.',
    options: [
      makeRollOption('opt_oracle14_integrate_oracle', 'Splice the Oracle\'s Tectonic Telemetry permanently into your cockpit [ORACLE PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You complete the neural link to become the permanent Voice of the Living Continent.',
        'STRONG HIT: Complete transhuman apotheosis! Every road, storm, and highway across North America sings in your mind!', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 25, 'Street Cred': 20 } },
        'WEAK HIT: Telemetry integrates cleanly, granting unmatched road precognition.', { qualities: { 'Oracle Stage': 1, 'Tech Literacy': 12 } },
        'MISS: Mind-burn causes dashboard static before your interface stabilizes.', { qualities: { 'Oracle Stage': 1 } },
        { qualities: { 'Oracle Chosen Path': 1 } }),
      makeRollOption('opt_oracle14_lead_sanctuary', 'Lead the Pilgrim Fleet into the Promised Oasis [PROPHET PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You lead hundreds of pilgrim vehicles into the hidden geothermal valley of New Eden.',
        'STRONG HIT: You are crowned the Holy Guide of the Wasteland! An eternal community honors your name!', { credits: 8000, qualities: { 'Oracle Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: The sanctuary is founded with full joy and celebration.', { credits: 4000, qualities: { 'Oracle Stage': 1, 'Street Cred': 15 } },
        'MISS: The pilgrims thank you solemnly as they begin building their homes.', { qualities: { 'Oracle Stage': 1 } },
        { qualities: { 'Oracle Chosen Path': 2 } }),
      makeRollOption('opt_oracle14_sell_seismic_keys', 'Deliver the Seismic Weapon Keys to the Syndicate Cartel [HARBINGER PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You hand over the fault-line codes inside the cartel\'s underground fortress.',
        'STRONG HIT: Boundless underworld empire! Billions in bearer bonds and sovereign war-rig armor are yours!', { credits: 12000, qualities: { 'Oracle Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: Cartel honors the massive transaction with full payment.', { credits: 6000, qualities: { 'Oracle Stage': 1 } },
        'MISS: Transaction concludes with full transfer.', { qualities: { 'Oracle Stage': 1 } },
        { qualities: { 'Oracle Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_oracle_15_finale', title: 'The Prophet of the Open Road [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Oracle of the Ash Dunes is concluded. Your hauler has been permanently retrofitted with revolutionary seismic acoustic telemetry and divine wasteland engineering.',
    options: [
      makeDirectOption('opt_oracle15_ending_oracle', 'Guide the Continental Highway as the Dune Oracle [ENDING 1: DUNE ORACLE]',
        'Spliced with the Tectonic Prophetic Telemetry Link, your rig commands +15% speed rating, +5 T Cargo Capacity, and permanent +1 COOL and +1 CYBER.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { chips: 4, batteries: 2 },
          qualities: { 'Oracle Stage': 80, 'Tech Literacy': 25, 'Street Cred': 25, 'Heat': -40 },
          stats: { cool: 1, cyber: 1 },
          rig: { speedRating: 0.15, maxCargoWeight: 5, name: 'Iron Nomad - Dune Oracle' }
        }, { qualities: { 'Oracle Chosen Path': 1 } }),
      makeDirectOption('opt_oracle15_ending_prophet', 'Lead Free Peoples as the Silica Prophet [ENDING 2: SILICA PROPHET]',
        'Revered as the savior of the pilgrim nations, your rig is armored with volcanic basalt composite plating and high-efficiency sand turbines.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { grain: 4, chips: 3 },
          qualities: { 'Oracle Stage': 80, 'Street Cred': 30 },
          stats: { cool: 1 },
          rig: { maxHull: 25, speedRating: 0.18, name: 'Iron Nomad - Silica Prophet' }
        }, { qualities: { 'Oracle Chosen Path': 2 } }),
      makeDirectOption('opt_oracle15_ending_harbinger', 'Rule the Tremors of the World as the Tectonic Harbinger [ENDING 3: TECTONIC HARBINGER]',
        'Armed with syndicate gold and heavy seismic armor plating, your rig strikes terror into corporate enclaves across the wasteland.',
        {
          credits: 22000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Oracle Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 20 },
          stats: { grit: 1, cool: 1 },
          rig: { maxHull: 35, name: 'Iron Nomad - Tectonic Harbinger' }
        }, { qualities: { 'Oracle Chosen Path': 3 } }),
      makeDirectOption('opt_oracle15_farewell', 'Collect final pilgrim offering and drive quietly into the sunrise',
        'With the dunes at peace, you merge back onto open asphalt.',
        {
          credits: 10000,
          qualities: { 'Oracle Stage': 80, 'Street Cred': 10 },
          stats: { cool: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledOracle = compileStorylets(oracleData, 'Oracle Stage');
writeTsFile('src/data/oracleQuestStorylets.ts', 'ORACLE_QUEST_STORYLETS', compiledOracle);

// =========================================================================
// SAGA 6: THE IRON LEVIATHAN'S GRAVEYARD (15 Storylets)
// Pacific deep-sea salvage, amphibious winches, container titan
// =========================================================================
const leviathanData = [
  {
    stage: 1, id: 'story_leviathan_01_tide_salvage', title: 'The Drowned Giant of the Pacific Shelf', trigger: 'DOCK',
    text: 'At the foggy Pacific docks of Westport, a salt-crusted maritime salvager named Captain Ronald Vance flags you down. "Three kilometers offshore lies the *Pacific Titan*," he rasps, pointing to rusted superstructures emerging from the breaking surf. "A 400-meter container mega-ship that sank in the opening days of the war. Her hermetic cargo pods hold pre-war superconductor machinery and military bullion. I need an armored heavy hauler with sub-aquatic winches to drag them from the surf before corporate salvage fleets arrive."',
    options: [
      makeRollOption('opt_leviathan01_accept_salvage', 'Sign on for maritime heavy salvage and inspect equipment [ROLL +COOL]', 'cool', 'Street Cred',
        'You negotiate your salvage split and inspect the Captain\'s charts.',
        'STRONG HIT: Exceptional salvage contract! Vance guarantees a 50% split and provides a 1,600 credit advance and waterproof seals.', { credits: 1600, qualities: { 'Leviathan Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You accept the contract and prepare your rig for saltwater.', { credits: 800, qualities: { 'Leviathan Stage': 1 } },
        'MISS: Port customs officers flag your rig for unauthorized marine salvage.', { qualities: { 'Leviathan Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_leviathan01_inspect_tide_charts', 'Analyze coastal tidal telemetry and seabed bathymetry [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You download satellite sea-surface radar scans of the shelf.',
        'STRONG HIT: Flawless tidal analysis! You identify a low-tide underwater sandbar that allows your truck to drive right up to the hull!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You chart safe approach channels through the rocks.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Corrupted nautical charts miscalculate water depth by four feet.', { hullIntegrity: -5, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan01_waterproof_seals', 'Apply heavy marine grease to all wheel hubs and electrical connectors',
        'You prepare your hauler for deep saltwater exposure.',
        { hullIntegrity: 15, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_leviathan_02_salt_spray_corrosion', title: 'The Caustic Surf', trigger: 'ROAD_EVENT',
    text: 'Driving along the Pacific coastal highway, high winds throw clouds of corrosive saltwater spray against your chassis. Untreated steel hiss and rusts visibly; brake calipers begin groaning under salt crust.',
    options: [
      makeRollOption('opt_leviathan02_oil_spray', 'Deploy pressurized silicone oil mist across your undercarriage [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You trigger the chassis lubrication system to coat every exposed bolt.',
        'STRONG HIT: Total corrosion immunity! Salt spray beads and rolls off like mercury on glass.', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: The oil protects vital brake linkages, though paint dulls slightly.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Salt crust locks a rear brake pad, smoking on the wheel hub.', { hullIntegrity: -12, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan02_throttle_through', 'Drop the hammer and outrun the crashing surf zone [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You power through breaking waves crossing the low road.',
        'STRONG HIT: Master rally driving! You surf the asphalt before wave swells can swamp your axles.', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You clear the surf, though saltwater douses your front bumper.', { hullIntegrity: -8, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A wave crest hits your passenger door, rattling the frame.', { hullIntegrity: -18, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan02_rinse_freshwater', 'Stop at a coastal creek and flush wheel hubs with fresh water',
        'Freshwater rinses away salt deposits before corrosion can start.',
        { qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_leviathan_03_the_drowned_highway', title: 'The Submerged Causeway', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Route 101 vanishes into two feet of Pacific ocean surf along a sunken sandbar causeway. Black waves break over the hood; your tires struggle for purchase against shifting wet sand and kelp.',
    options: [
      makeRollOption('opt_leviathan03_snorkel_drive', 'Engage engine intake snorkels and low crawler gear [ROLL +GRIT]', 'grit', 'Street Cred',
        'You lock your differentials and let 600 foot-pounds of torque bite into the wet sand.',
        'STRONG HIT: Unstoppable amphibious power! The hauler drives through two miles of open ocean like an iron submarine!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You make the crossing, though saltwater enters your tool boxes.', { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } },
        'MISS: Wheels slip on a submerged kelp reef, throwing the hauler into a drift.', { hullIntegrity: -20, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan03_sonar_navigation', 'Use forward acoustic sonar to track the submerged concrete slabs [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You ping the water depth with your handheld sonar unit.',
        'STRONG HIT: Razor precision! You follow the crown of the sunken highway without slipping into deep trenches.', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You follow the line safely, though sand waves rock the cab.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Sonar misses a deep sand hole, dropping the front left wheel.', { hullIntegrity: -15, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan03_steady_pace', 'Follow Captain Vance\'s pilot skiff slowly and steadily',
        'The pilot skiff marks the shallowest route safely.',
        { qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_leviathan_04_deep_winch_drag', title: 'The First Container from the Deep', trigger: 'DOCK',
    text: 'You reach the exposed steel deck of the *Pacific Titan*. A 30-ton hermetic shipping container stamped "AEGIS QUANTUM PROTOCOLS" sits wedged in the lower hold, half-submerged in surging ocean surf.',
    options: [
      makeRollOption('opt_leviathan04_anchor_winch', 'Drive heavy hydraulic anchor spuds into the bedrock and winch the container [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You anchor your hauler\'s rear chassis and engage your 50-ton hydraulic winch.',
        'STRONG HIT: Tremendous pulling power! The 30-ton container is wrenched free from the twisted iron hold and hauled safely onto your flatbed!', { cargo: { cyberware: 2, chips: 2 }, qualities: { 'Leviathan Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You drag the container out, though the steel winch cable groans near snapping point.', { cargo: { cyberware: 1 }, qualities: { 'Leviathan Stage': 1 } },
        'MISS: The container catches on a steel girder, snapping your winch shear-pin.', { hullIntegrity: -15, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan04_plasma_cut', 'Use high-pressure underwater torches to cut the container free [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You dive into the surf with an underwater arc cutter.',
        'STRONG HIT: Surgical cutting! You sever the trapped hinges in twenty minutes, releasing the container cleanly!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The torch frees the container, though cold seawater numbs your limbs.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: The cutting flame pops back, singing your wetsuit sleeve.', { hullIntegrity: -8, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan04_use_battery_power', 'Hook 1 Hydro-Battery from your hold to supercharge the hydraulic pump [INVENTORY]',
        'Dedicated battery voltage doubles winch pulling speed, securing the container effortlessly.',
        { cargo: { batteries: -1 }, hullIntegrity: 15, qualities: { 'Leviathan Stage': 1, 'Street Cred': 8 } },
        { cargo: { batteries: 1 } })
    ]
  },
  {
    stage: 5, id: 'story_leviathan_05_coastal_corsairs', title: 'The Tide Pirates', trigger: 'COMBAT_ENCOUNTER',
    text: 'Rogue coastal marauders in armored airboats and jet-skis circle the wreck. Armed with grenade launchers and grappling lines, they intend to hijack your flatbed and take the recovered container.',
    options: [
      makeRollOption('opt_leviathan05_crush_airboats', 'Ram their fiberglass airboats with your heavy amphibious nose [ROLL +GRIT]', 'grit', 'Street Cred',
        'You turn your 35-ton hauler into the breaking surf and charge their lead boat.',
        'STRONG HIT: Devastating kinetic smash! The airboat is splintered into foam and shredded propeller blades, sending the corsairs fleeing!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You smash through their line, taking minor shrapnel against your wheel wells.', { hullIntegrity: -12, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A pirate grenade detonates in the water beneath your cab, shaking the frame.', { hullIntegrity: -24, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan05_deck_gun_snipe', 'Unlimber your heavy roof rifle and target the airboat propeller fans [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You track the speeding airboats and fire armor-piercing rounds.',
        'STRONG HIT: Marksmanship perfection! Two airboat propeller cages explode, leaving them dead in the water!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You force the corsairs to abort their boarding maneuver.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Return automatic fire chips your cab armor before they peel away.', { hullIntegrity: -16, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan05_electrify_hull', 'Divert alternator voltage to electrify your trailer\'s outer steel plates',
        'Grappling pirates take 500 volts of shock and drop back into the waves.',
        { hullIntegrity: -8, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_leviathan_06_amphibious_snorkel_mod', title: 'The Deep Water Snorkel', trigger: 'DOCK',
    text: 'While staged at a secluded cove, Captain Vance helps you retrofit the hauler with permanent amphibious equipment: tall twin chrome exhaust snorkels, sealed air intakes, and automated electric bilge pumps.',
    options: [
      makeRollOption('opt_leviathan06_weld_snorkels', 'Weld and seal the tall stainless-steel snorkels along the cab pillars [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You execute watertight TIG welds along the snorkel brackets.',
        'STRONG HIT: Flawless marine engineering! The hauler can now ford five feet of open ocean water without drowning the engine!', { hullIntegrity: 25, qualities: { 'Leviathan Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The snorkels are secure and fully functional.', { hullIntegrity: 15, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A weld clamp slips, leaving a small cosmetic dent on the cab pillar.', { qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan06_wire_bilge_pumps', 'Wire automated float-switch bilge pumps in the lower chassis bays [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You connect high-capacity 12-volt marine pumps with automated moisture sensors.',
        'STRONG HIT: The bilge pumps clear seawater automatically within three seconds of immersion!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The pumps operate properly off dashboard manual toggles.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: A wiring short blows a fuse in the accessory panel.', { hullIntegrity: -5, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan06_seal_differentials', 'Install pressurized one-way breather valves on the front and rear axles',
        'Breather valves prevent cold ocean water from being sucked into differential oil.',
        { credits: -150, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_leviathan_07_the_quicksand_surf', title: 'The Sinking Shelf', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Heading back out to the wreck, your front tires plunge into a liquefied sandbar! The ocean tide is rising fast, foaming waves already lapping at your headlights as the 40-ton hauler sinks to its axles!',
    options: [
      makeRollOption('opt_leviathan07_central_tire_inflation', 'Drop tire pressure to 15 PSI to double tire contact patch [ROLL +EDGE]', 'edge', 'Tech Literacy',
        'You trigger the dashboard deflation controls, flattening your wide tires.',
        'STRONG HIT: The flattened tires float across the liquid sand like snowshoes, pulling you onto solid rock!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You crawl out of the quicksand trap after a tense struggle.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Tires spin and dig in deeper before the crawler gear catches.', { hullIntegrity: -15, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan07_rock_anchor_winch', 'Fire a harpoon anchor into an offshore rock pillar and winch out [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You fire the pneumatic grapple into solid basalt and reel in.',
        'STRONG HIT: Powerful recovery! The winch yanks your hauler out of the sand trap with unstoppable force!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The grapple holds long enough to drag the front wheels clear.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: The rock pillar fractures under load, snapping the cable.', { hullIntegrity: -18, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan07_floor_differentials', 'Lock all three differentials and keep the wheels spinning steadily',
        'Steady, patient wheel rotation claws you through the wet silt.',
        { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_leviathan_08_the_second_vault', title: 'The Gold of the Pacific Titan', trigger: 'DOCK',
    text: 'Inside the submerged stern hold of the *Pacific Titan*, Vance\'s salvage team uncovers Container 02: a titanium bullion vault containing three thousand kilograms of pre-war sovereign gold bars and optical quantum wafers.',
    options: [
      makeRollOption('opt_leviathan08_rig_crane', 'Supervise precision crane slinging under surging ocean swells [ROLL +EDGE]', 'edge', 'Street Cred',
        'You time the crane lift with the rising and falling ocean swell.',
        'STRONG HIT: Masterful maritime rigging! The multi-million credit bullion vault is secured onto your chassis with zero damage!', { cargo: { cyberware: 2, chips: 3 }, qualities: { 'Leviathan Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: The vault is loaded, though a rolling swell slams it against your trailer rails.', { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A sling snaps on a rusty bollard, dropping the vault with a violent jar.', { hullIntegrity: -20, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan08_crack_data_safe', 'Slice into the vault\'s encrypted manifest drive to recover proprietary ciphers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You hook your deck into the watertight data connector.',
        'STRONG HIT: Invaluable trade manifests! You download secret pre-war trans-Pacific shipping routes and trade keys!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 10, 'Street Cred': 8 } },
        'WEAK HIT: You secure the basic inventory and asset ciphers.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Defensive water-activated ICE scrambles your temporary data drive.', { qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan08_secure_chains', 'Lash the vault down with four sets of heavy titanium binder chains',
        'Quadruple chain binders guarantee the massive weight will not shift on the road.',
        { hullIntegrity: 10, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_leviathan_09_tidal_surge_escape', title: 'The Rogue Wave', trigger: 'ROAD_EVENT',
    text: 'A 25-foot rogue tidal surge rolls in from the open ocean, racing across the sandbar toward your loaded hauler! You have twenty seconds before a wall of black water hits the side of your truck.',
    options: [
      makeRollOption('opt_leviathan09_nose_into_wave', 'Turn the heavy iron nose directly into the cresting wave and throttle up [ROLL +GRIT]', 'grit', 'Street Cred',
        'You point the cow-catcher into the breaker, lock your jaw, and hit the throttle.',
        'STRONG HIT: Epic maritime triumph! Your 50-ton loaded rig pierces the 25-foot wave like an iron destroyer, bursting through untouched!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 16 } },
        'WEAK HIT: The wave breaks over the cab, swamping the windshield before the truck rolls out.', { hullIntegrity: -15, qualities: { 'Leviathan Stage': 1 } },
        'MISS: The wave violently pushes your trailer sideways into a ditch before you claw back.', { hullIntegrity: -28, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan09_race_the_crest', 'Floor the accelerator and outrun the wave to the mainland bluff [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You drop into high gear, engine screaming as you race the surging tide.',
        'STRONG HIT: Blazing coastal sprint! You climb the concrete ramp just as the wave smashes into the rocks below!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: The spray douses your rear trailer, but you make solid ground.', { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } },
        'MISS: Foam floods your rear wheel hubs, dragging your speed down before you escape.', { hullIntegrity: -20, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan09_anchor_and_brace', 'Drop rear anchor spuds into the rock and brace for impact inside the cab',
        'The heavy anchors prevent the hauler from being swept away as the water rolls past.',
        { hullIntegrity: -12, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_leviathan_10_the_crossroads', title: 'The Wealth of the Deep [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the coastal lighthouse safehouse of Cape Disappointment, the salvaged containers sit under heavy tarps. Captain Vance lights his pipe and looks at you. "The Pacific Titan has given up its treasures," he says. "Three powers want these containers. Where do we deliver the fortune of the drowned world?"',
    options: [
      makeDirectOption('opt_leviathan10_choose_reclaimer', 'Path 1: Mount the Amphibious Ballast permanently and keep the salvage gear [LEVIATHAN RECLAIMER]',
        'You choose the open ocean and supreme heavy hauling. The heavy marine ballast and reinforced titanium prow will turn your rig into the premier salvage hauler on the continent.',
        { qualities: { 'Leviathan Stage': 1, 'Leviathan Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_leviathan10_choose_coastal_fleet', 'Path 2: Deliver the Bullion to the Free Coastal Fisherman\'s Union [TIDE STRIDER]',
        'You choose community survival. The wealth will buy clean water desalination plants and an independent coastal defense fleet, granting you permanent hero status.',
        { qualities: { 'Leviathan Stage': 1, 'Leviathan Chosen Path': 2, 'Street Cred': 20 } }),
      makeDirectOption('opt_leviathan10_choose_syndicate', 'Path 3: Smuggle the Containers to the Underworld Syndicate Cartel [ABYSSAL HAULER]',
        'You choose boundless personal fortune and underworld power. The cartel pays millions in unmarked bearer bonds and equips your rig with heavy shielded cargo bays.',
        { qualities: { 'Leviathan Stage': 1, 'Leviathan Chosen Path': 3, 'Contraband Mastery': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_leviathan_11_coastal_gunboat_ambush', title: 'The Naval Blockade', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis Coastal Patrol corvettes intercept you at the river mouth! They train 40mm automated cannons on your truck and demand unconditional surrender of all maritime salvage.',
    options: [
      makeRollOption('opt_leviathan11_ram_blockade_boat', 'Charge your amphibious hauler straight at the patrol boat\'s mooring dock [ROLL +GRIT]', 'grit', 'Street Cred',
        'You blast your horns, plunging your heavy titanium prow into their dock.',
        'STRONG HIT: Monstrous kinetic ram! The dock and patrol boat are crumpled into scrap, clearing a clean escape channel!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You smash through their barricade, taking cannon dents to your cab.', { hullIntegrity: -15, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A 40mm round punches through your passenger door before you escape.', { hullIntegrity: -25, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan11_hack_corvette_sonar', 'Jam their targeting radar using your marine sonar transponder [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You blast ultrasonic acoustic interference into their receiving hydrophones.',
        'STRONG HIT: Total sensor blindness! The gunboats lose track of your vehicle and fire blindly into the fog!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The gunboats hesitate, giving you time to duck into a coastal inlet.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Countermeasures scramble your radio, leaving static.', { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan11_smoke_river_escape', 'Deploy marine smoke flares and slip down the shadowed river channel',
        'Dense white smoke conceals your convoy as you cruise into the river.',
        { credits: -150, hullIntegrity: -8, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_leviathan_12_chassis_marine_waterproofing', title: 'The Zinc and Ceramic Shield', trigger: 'ROAD_EVENT',
    text: 'To ensure your hauler never corrodes from saltwater exposure again, Vance\'s crew coats the entire undercarriage with zinc sacrificial anodes and heavy ceramic waterproofing composite.',
    options: [
      makeRollOption('opt_leviathan12_inspect_coating', 'Supervise the ceramic underbody application [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You inspect every seam, bearing, and brake line.',
        'STRONG HIT: Impervious marine armor! The chassis becomes completely immune to salt corrosion, mud, and water damage!', { hullIntegrity: 40, qualities: { 'Leviathan Stage': 1 } },
        'WEAK HIT: The protective coating seals all critical hydraulic and electrical lines.', { hullIntegrity: 20, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A thin patch near the fuel tank requires extra sealant.', { hullIntegrity: 5, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan12_tune_marine_propulsion', 'Optimize engine torque curves for deep water fording [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You remap the ECU fuel injection for low-speed high-torque water pushing.',
        'STRONG HIT: High-torque marine calibration! Your engine churns through water like a riverboat!', { qualities: { 'Leviathan Stage': 1, 'Tech Literacy': 6, 'Street Cred': 5 } },
        'WEAK HIT: Engine operates smoothly in high-moisture environments.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: Fuel map runs rich, puffing black smoke on acceleration.', { qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan12_polish_chrome', 'Polish your dual chrome snorkels until they gleam in the sun',
        'The gleaming snorkels look majestic against your heavy armor.',
        { qualities: { 'Leviathan Stage': 1, 'Street Cred': 5 } })
    ]
  },
  {
    stage: 13, id: 'story_leviathan_13_storm_breakwater_dash', title: 'The Breakwater Sprint', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A coastal Pacific gale batters the rock breakwater leading to the final bridge. Fifty-foot waves crash over the narrow concrete strip, washing cars and shipping containers into the churning sea.',
    options: [
      makeRollOption('opt_leviathan13_surf_the_rocks', 'Hold the wheel with iron grip and blast across the wave-swept breakwater [ROLL +GRIT]', 'grit', 'Street Cred',
        'You put all eight tires onto the wet concrete and maintain 80 km/h.',
        'STRONG HIT: Unshakeable iron driving! The waves crash against your titanium prow, deflected harmlessly into spray as you cross!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: You reach the bridge, though saltwater washes over your hood.', { hullIntegrity: -12, qualities: { 'Leviathan Stage': 1 } },
        'MISS: A wave hits your trailer sideways, pushing your rear wheels within inches of the drop.', { hullIntegrity: -25, qualities: { 'Leviathan Stage': 1 } }),
      makeRollOption('opt_leviathan13_time_the_swells', 'Time your sprint between the seventh swell intervals [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You read the ocean swell rhythm and launch forward in the calm lull.',
        'STRONG HIT: Perfect hydrodynamic calculation! You cross the entire breakwater during a five-minute calm window untouched!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You cross safely, taking minor spray against your windshield.', { qualities: { 'Leviathan Stage': 1 } },
        'MISS: The swell arrives early, slapping your passenger side with water.', { hullIntegrity: -18, qualities: { 'Leviathan Stage': 1 } }),
      makeDirectOption('opt_leviathan13_steady_crawl', 'Lock differentials and crawl at a steady 20 km/h',
        'Steady, heavy mass keeps your tires planted against the water surge.',
        { hullIntegrity: -10, qualities: { 'Leviathan Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_leviathan_14_abyssal_climax', title: 'The Sovereign Shore [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have cleared the Pacific coast! The treasures of the *Pacific Titan* are secured as you deliver the final shipping pods to your chosen destination.',
    options: [
      makeRollOption('opt_leviathan14_claim_reclaimer', 'Lock the Amphibious Ballast permanently into your rig [RECLAIMER PATH] [ROLL +GRIT]', 'grit', 'Street Cred',
        'You weld the marine salvage gear directly into your vehicle frame, crowned the King of Pacific Salvage.',
        'STRONG HIT: Sovereign heavy hauling dominance! No flooded road, coastal storm, or sunken cargo will ever stop your rig again!', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The amphibious modifications are locked in permanently.', { qualities: { 'Leviathan Stage': 1, 'Street Cred': 12 } },
        'MISS: Welds cool with slight surface roughness, but holding firmly.', { qualities: { 'Leviathan Stage': 1 } },
        { qualities: { 'Leviathan Chosen Path': 1 } }),
      makeRollOption('opt_leviathan14_deliver_union', 'Deliver the Bullion to the Coastal Fisherman\'s Union [UNION PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull into the Union docks where thousands of coastal workers cheer your name with thunderous gratitude.',
        'STRONG HIT: Savior of the Coast! The union awards you life-long diplomatic sanctuary, massive bounties, and heavy marine plating!', { credits: 8000, qualities: { 'Leviathan Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: Delivery concluded with celebrations and full payment.', { credits: 4000, qualities: { 'Leviathan Stage': 1, 'Street Cred': 15 } },
        'MISS: The union elders sign the transfer receipts with deep reverence.', { qualities: { 'Leviathan Stage': 1 } },
        { qualities: { 'Leviathan Chosen Path': 2 } }),
      makeRollOption('opt_leviathan14_deliver_syndicate', 'Deliver the Containers to the Shadow Cartel Submarine Dock [CARTEL PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You roll into the hidden underground submarine pen to complete the transfer.',
        'STRONG HIT: Immense criminal wealth! Billions in bearer bonds and elite shielded cargo bays are loaded onto your rig!', { credits: 12000, qualities: { 'Leviathan Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: The cartel verifies the gold and honors the contract.', { credits: 6000, qualities: { 'Leviathan Stage': 1 } },
        'MISS: Tense debriefing concludes with full payment.', { qualities: { 'Leviathan Stage': 1 } },
        { qualities: { 'Leviathan Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_leviathan_15_finale', title: 'The Leviathan Reclaimer [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Iron Leviathan is concluded. Your rig has been permanently modified with revolutionary amphibious ballast and heavy marine salvage engineering.',
    options: [
      makeDirectOption('opt_leviathan15_ending_reclaimer', 'Command Coastal and Continental Roads as the Leviathan Reclaimer [ENDING 1: LEVIATHAN RECLAIMER]',
        'Equipped with Amphibious Ballast and a Reinforced Titanium Prow, your hauler commands +30 Max Hull, +10 T Cargo Capacity, and permanent +1 GRIT.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { chips: 3, cyberware: 3 },
          qualities: { 'Leviathan Stage': 80, 'Street Cred': 30, 'Heat': -30 },
          stats: { grit: 1 },
          rig: { maxHull: 30, maxCargoWeight: 10, name: 'Iron Nomad - Leviathan Reclaimer' }
        }, { qualities: { 'Leviathan Chosen Path': 1 } }),
      makeDirectOption('opt_leviathan15_ending_union', 'Lead Free Coastal Fleets as the Tide Strider [ENDING 2: TIDE STRIDER]',
        'Honored as the champion of the coastal peoples, your rig is fitted with high-output marine turbochargers and reinforced breakwater armor.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { batteries: 4, chips: 3 },
          qualities: { 'Leviathan Stage': 80, 'Street Cred': 30 },
          stats: { grit: 1, edge: 1 },
          rig: { speedRating: 0.20, maxHull: 25, name: 'Iron Nomad - Tide Strider' }
        }, { qualities: { 'Leviathan Chosen Path': 2 } }),
      makeDirectOption('opt_leviathan15_ending_syndicate', 'Rule the Subsea Smuggling Veins as the Abyssal Hauler [ENDING 3: ABYSSAL HAULER]',
        'Flush with cartel wealth and equipped with watertight Baryon-shielded cargo holds, your rig is an underworld legend.',
        {
          credits: 22000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, chips: 4 },
          qualities: { 'Leviathan Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 20 },
          stats: { grit: 1, cool: 1 },
          rig: { maxCargoWeight: 8, speedRating: 0.18, name: 'Iron Nomad - Abyssal Hauler' }
        }, { qualities: { 'Leviathan Chosen Path': 3 } }),
      makeDirectOption('opt_leviathan15_farewell', 'Collect final salvage bonus and roll out toward open horizons',
        'With the Pacific Leviathan conquered, you head into the sunrise.',
        {
          credits: 10000,
          qualities: { 'Leviathan Stage': 80, 'Street Cred': 10 },
          stats: { grit: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledLeviathan = compileStorylets(leviathanData, 'Leviathan Stage');
writeTsFile('src/data/leviathanQuestStorylets.ts', 'LEVIATHAN_QUEST_STORYLETS', compiledLeviathan);
