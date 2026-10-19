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
// SAGA 9: THE LAST GRAIN OF EDEN (15 Storylets)
// Terraforming seed vault, Agri-Corpo sweeper units, Midwest reforestation
// =========================================================================
const edenData = [
  {
    stage: 1, id: 'story_eden_01_botanical_bunker', title: 'The Vault of Living Amber', trigger: 'DOCK',
    text: 'At an abandoned agricultural silo in the desolate Dust Bowl, a botanist named Dr. Silas Green flags down your hauler. In his arms is an insulated stasis cylinder containing the "Eden-10" seed pods—the last genetically intact, drought-immune cereal grains capable of growing in radioactive silica dust. "OmniDyne Agri-Corp wants to incinerate this vault to keep their synthetic paste monopoly," Silas pleads. "Haul the seeds to the Midwest Oasis Valley, and we will green the dead continent."',
    options: [
      makeRollOption('opt_eden01_accept_contract', 'Accept the botanical courier contract and calibrate refrigeration [ROLL +COOL]', 'cool', 'Street Cred',
        'You negotiate transport fees and calculate optimal climate-controlled routes.',
        'STRONG HIT: Flawless negotiation! Silas transfers a 1,500 credit advance and gives you nutrient-rich starter cultures.', { credits: 1500, cargo: { grain: 2 }, qualities: { 'Eden Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You accept the contract and lock the stasis cylinder in your hold.', { credits: 800, qualities: { 'Eden Stage': 1 } },
        'MISS: Corporate spotters notice the botanical hazmat seal, raising perimeter alarms.', { qualities: { 'Eden Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_eden01_scan_genetic_code', 'Scan the seeds\' biological markers with your cyberdeck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You analyze the genetic sequences on your digital display.',
        'STRONG HIT: Astounding biotechnology! The seeds produce nitrogen-fixing roots that actively purify poisoned soil!', { qualities: { 'Eden Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The genetic strains are stable and holding at optimal dormant temperatures.', { qualities: { 'Eden Stage': 1 } },
        'MISS: The sensor scanner probe causes a momentary thermal spike in the chamber.', { hullIntegrity: -5, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden01_prepare_hold', 'Install humidified thermal blankets around the cargo bay floor',
        'You prepare the hold to protect the living seeds from desert heat.',
        { hullIntegrity: 15, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_eden_02_alkali_dust_storm', title: 'The Alkaline Whiteout', trigger: 'ROAD_EVENT',
    text: 'A blinding white alkaline dust storm sweeps across the Nebraska flats. The caustic dust burns rubber seals and threatens to penetrate your cargo bay air filters.',
    options: [
      makeRollOption('opt_eden02_reverse_scrubbers', 'Overcharge electrostatic air scrubbers to repel alkaline dust [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You reverse intake blower polarity to blow dust away from the filters.',
        'STRONG HIT: Clean airflow maintained! The cargo hold remains 100% pure while the storm howls outside.', { qualities: { 'Eden Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The scrubbers hold the line, though your batteries draw heavy current.', { qualities: { 'Eden Stage': 1 } },
        'MISS: Alkaline dust clogs your cabin filter, stinging your eyes and throat.', { hullIntegrity: -10, qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden02_plow_dunes', 'Drop into low gear and push through the caustic white drifts [ROLL +GRIT]', 'grit', 'Street Cred',
        'You keep the accelerator steady and plow through the white powder.',
        'STRONG HIT: Unstoppable kinetic drive! The hauler carves a clean track through the storm front.', { qualities: { 'Eden Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You muscle through the storm, taking minor paint scoring.', { hullIntegrity: -8, qualities: { 'Eden Stage': 1 } },
        'MISS: A deep alkaline drift bogs down your trailer, forcing roadside shoveling.', { hullIntegrity: -18, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden02_storm_shutters', 'Drop side storm shutters and navigate by compass bearings',
        'Slow, careful navigation preserves your engine filters.',
        { qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_eden_03_agri_sweepers', title: 'The Crop-Burner Patrol', trigger: 'COMBAT_ENCOUNTER',
    text: 'Two OmniDyne Agri-Corp flame-trucks intercept you on Route 80. Equipped with industrial herbicide cannons and flamethrowers, they are tasked with incinerating any un-patented seeds.',
    options: [
      makeRollOption('opt_eden03_ram_sweepers', 'Ram their unarmored tanker truck with your heavy steel bull-bar [ROLL +GRIT]', 'grit', 'Street Cred',
        'You line up your bumper and smash into their lead herbicide truck.',
        'STRONG HIT: Devastating kinetic smash! The tanker overturns in a cloud of foam, clearing the road ahead!', { qualities: { 'Eden Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You ram past their blockade, taking glancing blows to your fenders.', { hullIntegrity: -12, qualities: { 'Eden Stage': 1 } },
        'MISS: Herbicide spray strips paint from your cab and cracks a side mirror.', { hullIntegrity: -20, qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden03_speed_slalom', 'Use your high-torque transmission to out-accelerate them on the dual-lane [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You drop into high gear and pull away at 140 km/h.',
        'STRONG HIT: Superior highway speed! The lumbering tanker trucks fade into the distance within minutes!', { qualities: { 'Eden Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You outrun their pursuit, though your tires smell of scorched rubber.', { qualities: { 'Eden Stage': 1 } },
        'MISS: An automated flame-drone wings your trailer roof before peeling off.', { hullIntegrity: -15, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden03_chemical_smoke', 'Deploy an ultra-dense chemical smoke screen across both lanes',
        'Blinded by smoke, the sweepers brake hard and lose tracking.',
        { credits: -150, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_eden_04_starving_settlement', title: 'The Dust Bowl Clinic', trigger: 'DOCK',
    text: 'You pull into a starving farming commune where families survive on synthetic yeast sludge. A sick child reaches toward your trailer vents, smelling the fresh aroma of living plant matter.',
    options: [
      makeRollOption('opt_eden04_plant_sample', 'Help the commune elder plant a small demonstration bed with Dr. Green [ROLL +COOL]', 'cool', 'Street Cred',
        'You and Dr. Green till a patch of dirt and plant five fast-sprouting Eden seeds.',
        'STRONG HIT: A miraculous green shoot sprouts before their eyes! The farmers weep with joy, loading fresh batteries and scrap into your truck!', { cargo: { batteries: 2 }, qualities: { 'Eden Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: The demonstration succeeds, filling the settlement with renewed hope.', { qualities: { 'Eden Stage': 1, 'Street Cred': 6 } },
        'MISS: Desperate farmers crowd the truck steps, pleading for seed handfuls.', { qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden04_donate_grain_bag', 'Distribute 1 unit of Synthetic Grain from your hold to feed the settlement [INVENTORY]',
        'Your generous grain donation feeds forty families and secures their eternal loyalty.',
        { cargo: { grain: -1 }, qualities: { 'Eden Stage': 1, 'Street Cred': 12 } },
        { cargo: { grain: 1 } }),
      makeDirectOption('opt_eden04_rest_and_depart', 'Offer words of encouragement, refuel your tanks, and proceed quietly',
        'You keep the mission moving forward to deliver the master vault.',
        { credits: -150, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_eden_05_refrigeration_failure', title: 'The Thermal Thaw Crisis', trigger: 'ROAD_EVENT',
    text: 'A red warning alarm sounds in the cab: the stasis cylinder\'s freon compressor has seized! Internal temperatures are climbing toward 25 degrees; if the seeds awaken early in transit, they will perish without soil.',
    options: [
      makeRollOption('opt_eden05_juryrig_coolant', 'Splice your truck\'s engine freon lines into the stasis chamber [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You grab high-pressure hoses and route refrigerant into the cylinder jacket.',
        'STRONG HIT: Flawless thermodynamic bypass! Temperatures drop back into deep dormancy within two minutes!', { qualities: { 'Eden Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The patch stabilizes the chamber, though cabin AC is sacrificed.', { qualities: { 'Eden Stage': 1 } },
        'MISS: Cold freon vents onto your hands, stinging your skin before you clamp it.', { hullIntegrity: -10, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden05_consume_cryo', 'Supply 1 Cryo Pod from your hold to recharge the stasis cooling system [INVENTORY]',
        'The pure cryo pod restores sub-zero containment instantly.',
        { cargo: { cryo: -1 }, hullIntegrity: 15, qualities: { 'Eden Stage': 1, 'Street Cred': 8 } },
        { cargo: { cryo: 1 } }),
      makeDirectOption('opt_eden05_ice_pack_emergency', 'Pack emergency dry ice bags around the cylinder housing',
        'A quick roadside stop cools the core back to baseline.',
        { credits: -200, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_eden_06_corporate_bribe', title: 'The OmniDyne Ultimatum', trigger: 'DOCK',
    text: 'While refueling at an automated highway node, an encrypted holocall illuminates your console. An OmniDyne executive smiles smoothly: "Courier, you hold seeds that could cost our corporation twenty billion in annual synthetic paste sales. Hand over the cylinder. We will transfer 15,000 credits to your personal ledger and grant you executive immunity. Refuse, and our gunships will vaporize your truck."',
    options: [
      makeRollOption('opt_eden06_reject_bribe', 'Spit on the holographic terminal and tell the executive to choke on their paste [ROLL +GRIT]', 'grit', 'Street Cred',
        'You broadcast your defiant refusal with thunderous trucker pride.',
        'STRONG HIT: Legendary defiance! Word leaks to the rebel airwaves; your name becomes an icon of resistance!', { qualities: { 'Eden Stage': 1, 'Street Cred': 14, 'Heat': 15 } },
        'WEAK HIT: You cut the feed and rev your engine into gear.', { qualities: { 'Eden Stage': 1, 'Heat': 10 } },
        'MISS: Corporate signals triangulate your location, dispatching hunter drones.', { qualities: { 'Eden Stage': 1, 'Heat': 25 } }),
      makeRollOption('opt_eden06_counter_blackmail', 'Threaten to leak unredacted video of their crop-burning atrocities [ROLL +COOL]', 'cool', 'Tech Literacy',
        'You transmit encrypted camera logs of their herbicide squads.',
        'STRONG HIT: Masterful extortion! The executive panics, transferring a 2,500 credit hush advance to delay the leak!', { credits: 2500, qualities: { 'Eden Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The executive backs down and delays airstrikes.', { qualities: { 'Eden Stage': 1, 'Street Cred': 5 } },
        'MISS: The executive laughs off your bluff with cold corporate arrogance.', { qualities: { 'Eden Stage': 1, 'Heat': 15 } }),
      makeDirectOption('opt_eden06_burn_transponder', 'Burn your transponder chip and vanish from satellite radar nets',
        'You drop off the digital grid and proceed under radar silence.',
        { credits: -200, qualities: { 'Eden Stage': 1, 'Heat': -10 } })
    ]
  },
  {
    stage: 7, id: 'story_eden_07_irrigation_canal', title: 'The Drowned Sluice Gate', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A burst irrigation canal has flooded the highway with four feet of muddy, silt-laden water. The current is swift, carrying uprooted trees and debris across the submerged roadway.',
    options: [
      makeRollOption('opt_eden07_ford_current', 'Engage differential locks and ford the raging current with heavy iron weight [ROLL +GRIT]', 'grit', 'Street Cred',
        'You aim your heavy bumper into the current and hold 1,500 RPM.',
        'STRONG HIT: Massive aquatic power! The 35-ton rig parts the floodwaters like an iron barge, crossing safely!', { qualities: { 'Eden Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You make the crossing, though muddy water washes your running boards.', { hullIntegrity: -10, qualities: { 'Eden Stage': 1 } },
        'MISS: The current nudges your rear trailer, clipping a concrete culvert marker.', { hullIntegrity: -20, qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden07_winch_tree_anchor', 'Winch against sturdy roadside oak trees to secure your crossing [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You use your high-tension steel winch cable as a safety guideline.',
        'STRONG HIT: Brilliant safety engineering! The hauler glides across the flooded section with zero drift.', { qualities: { 'Eden Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: The winch holds, though the cable groans under the current\'s drag.', { qualities: { 'Eden Stage': 1 } },
        'MISS: The tree roots give way under load, dropping the cable into the mud.', { hullIntegrity: -12, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden07_slow_crawl', 'Crawl at 10 km/h with hazard beacons flashing',
        'Steady weight and low speed carry you safely through the flood.',
        { qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_eden_08_living_seedling', title: 'The Green Sprout of Hope', trigger: 'ROAD_EVENT',
    text: 'Inside the stasis cylinder observation port, a single seed has sprouted into a luminous emerald seedling, its roots weaving an intricate bio-polymer lattice that releases pure oxygen into your cab atmosphere.',
    options: [
      makeRollOption('opt_eden08_nurture_seedling', 'Direct calibrated nutrient mist and LED spectrum light to nurture the sprout [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You tune your cabin climate controls to optimize the seedling\'s growth.',
        'STRONG HIT: Miraculous vitality! The seedling secretes a bio-regenerative sap that Dr. Green synthesizes into cellular healing stims!', { cargo: { cyberware: 2 }, qualities: { 'Eden Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The seedling thrives, filling the cab with the sweet fragrance of pine and fresh earth.', { hullIntegrity: 15, qualities: { 'Eden Stage': 1 } },
        'MISS: Light calibration flickers, slightly singeing a tender leaf.', { qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden08_harvest_oxygen', 'Route the plant\'s pure oxygen output directly into the driver\'s respirator [ROLL +GRIT]', 'grit', 'Cyberware Level',
        'You breathe deeply of the pure pre-collapse oxygen.',
        'STRONG HIT: Total physical rejuvenation! Mental fatigue vanishes; reflexes and stamina surge to peak performance!', { qualities: { 'Eden Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: Clean oxygen clears your head and steadies your hands.', { qualities: { 'Eden Stage': 1 } },
        'MISS: Oxygen regulator spikes, making you cough briefly.', { qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden08_seal_port', 'Tighten the observation hatch to keep dormancy conditions uniform',
        'You preserve the remaining seeds for arrival at the master sanctuary.',
        { qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_eden_09_aerial_gunship_ambush', title: 'The Sky Fire of OmniDyne', trigger: 'COMBAT_ENCOUNTER',
    text: 'Two OmniDyne heavy rotorcraft dive from the storm clouds, firing incendiary rockets at your trailer. "TARGET CONFIRMED. TERMINATE THE BIOLOGICAL CONVOY WITH MAXIMUM PREJUDICE."',
    options: [
      makeRollOption('opt_eden09_roof_snipe', 'Unlimber your heavy high-velocity rifle and target their rotor hubs [ROLL +EDGE]', 'edge', 'Street Cred',
        'You line up the rifle sights through the cab roof hatch.',
        'STRONG HIT: Spectacular marksmanship! The lead rotorcraft\'s tail assembly is severed, sending it spinning into an empty cornfield!', { qualities: { 'Eden Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You damage their targeting sensor array, forcing them to break off.', { qualities: { 'Eden Stage': 1 } },
        'MISS: Rocket shrapnel peppers your trailer roof, denting the outer skin.', { hullIntegrity: -20, qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden09_evasive_tree_cover', 'Dive beneath a canopy of dense roadside willow trees at 120 km/h [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pitch the heavy hauler into the shadowed tree line.',
        'STRONG HIT: Flawless tree-cover evasive driving! Their thermal targeting loses lock completely in the foliage!', { qualities: { 'Eden Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You escape their missile line, though branches scrape your cab paint.', { hullIntegrity: -10, qualities: { 'Eden Stage': 1 } },
        'MISS: A falling branch cracks your passenger wing mirror.', { hullIntegrity: -16, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden09_deploy_flares', 'Launch all defensive flare countermeasures into the sky',
        'Burning magnesium flares divert their thermal missiles into the dirt.',
        { credits: -150, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_eden_10_the_crossroads', title: 'The Garden of Destinies [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the secret river valley depot of New Eden, Dr. Silas Green turns to you with tears in his eyes. "The seeds of life are safe," he whispers. "Three distinct paths lie before us. How shall we plant the rebirth of the world?"',
    options: [
      makeDirectOption('opt_eden10_choose_harvester', 'Path 1: Mount the Bio-Regenerative Soil Hydro-Prow permanently on your Rig [HARVESTER OF EDEN]',
        'You choose sovereign machine life. Your hauler will be permanently retrofitted with terraforming soil-injectors, expanding cargo capacity by 10 tons and reinforcing armor.',
        { qualities: { 'Eden Stage': 1, 'Eden Chosen Path': 1, 'Street Cred': 20 } }),
      makeDirectOption('opt_eden10_choose_commonwealth', 'Path 2: Found the Sovereign Agrarian Commonwealth [GREEN COMMONWEALTH]',
        'You choose the liberation of the wasteland people. You and Silas will plant the seeds across the entire Midwest, building a self-sustaining green empire free from corporate hunger.',
        { qualities: { 'Eden Stage': 1, 'Eden Chosen Path': 2, 'Street Cred': 30 } }),
      makeDirectOption('opt_eden10_choose_synthetics', 'Path 3: Contract the Genetic Formula to the Free Bio-Synthetics Syndicate [EDEN TITAN]',
        'You choose immense commercial power. The syndicate will mass-produce drought-immune food, awarding you sovereign wealth and high-output heavy armor.',
        { qualities: { 'Eden Stage': 1, 'Eden Chosen Path': 3, 'Contraband Mastery': 20 } })
    ]
  },
  {
    stage: 11, id: 'story_eden_11_perimeter_tank_blockade', title: 'The Last Corporate Wall', trigger: 'COMBAT_ENCOUNTER',
    text: 'OmniDyne has deployed two heavy armored battle-tanks across the valley bridge. Their 120mm smoothbore cannons are aimed dead-center at your grille.',
    options: [
      makeRollOption('opt_eden11_ram_tank_outrigger', 'Charge at maximum speed and ram the lighter tank\'s track assembly [ROLL +GRIT]', 'grit', 'Street Cred',
        'You sound the war horns, put the hammer down, and ram their track with 40 tons of kinetic momentum.',
        'STRONG HIT: Cataclysmic kinetic breakthrough! The tank\'s track is severed and thrown, wedging it against the bridge wall as you roar past!', { qualities: { 'Eden Stage': 1, 'Street Cred': 16 } },
        'WEAK HIT: You smash past their barricade, taking heavy cannon blast concussion.', { hullIntegrity: -16, qualities: { 'Eden Stage': 1 } },
        'MISS: A direct tank shell grazes your trailer armor before you break through.', { hullIntegrity: -30, qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden11_hack_tank_targeting', 'Transmit Dr. Green\'s agricultural master overrides into their fire computers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You beam the root code packet into their optical turret links.',
        'STRONG HIT: Full fire-control lock! The tank turrets lock in safe transit mode, allowing your convoy to roll through untouched!', { qualities: { 'Eden Stage': 1, 'Tech Literacy': 10, 'Street Cred': 10 } },
        'WEAK HIT: The tank turrets hesitate for fifteen seconds, enough to sprint past.', { qualities: { 'Eden Stage': 1 } },
        'MISS: Countermeasures deflect your signal; cannons fire warning rounds.', { hullIntegrity: -18, qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden11_river_bypass', 'Drive off the bridge embankment and ford the river shallows',
        'Heavy mud and water bypass the bridge at the cost of chassis wear.',
        { hullIntegrity: -12, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_eden_12_chassis_bio_restoration', title: 'The Living Armor Lattice', trigger: 'ROAD_EVENT',
    text: 'Micro-spores escaping the Eden cylinder have bonded with your hauler\'s undercarriage metal. Instead of corroding, a hardy green bio-resin fills every microscopic stress crack, healing metal in real time!',
    options: [
      makeRollOption('opt_eden12_direct_bio_bonding', 'Guide the bio-resin growth along your primary chassis frame rails [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You monitor the organic self-repair process along the load-bearing beams.',
        'STRONG HIT: Living machine symbiosis! The frame regenerates completely, granting unprecedented structural durability!', { hullIntegrity: 45, qualities: { 'Eden Stage': 1 } },
        'WEAK HIT: The resin seals all frame micro-fractures, absorbing vibrations.', { hullIntegrity: 25, qualities: { 'Eden Stage': 1 } },
        'MISS: Green overgrowth covers your oil drain plug, requiring cleanup.', { qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden12_expand_cargo_bed', 'Use the strengthened bio-composite brackets to widen the trailer hold [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You reconfigure trailer outriggers with the reinforced alloy brackets.',
        'STRONG HIT: Maximum cargo expansion! You gain 10 full tons of additional cargo hauling capacity!', { qualities: { 'Eden Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Cargo hold space expands cleanly.', { qualities: { 'Eden Stage': 1 } },
        'MISS: A bracket weld takes extra time to secure.', { qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden12_inspect_all_seals', 'Conduct a complete physical walkaround to inspect the living green seams',
        'The hauler looks magnificent with its living bio-resin trim.',
        { hullIntegrity: 10, qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_eden_13_the_green_plain', title: 'The First Sprouting', trigger: 'TRANSIT_ENCOUNTER',
    text: 'You enter the great New Eden Valley. As your wheels turn along the river road, millions of wild Eden-10 seeds carried in your exhaust wake touch the soil. Golden wheat and emerald barley sprout instantly in your tracks like a living carpet!',
    options: [
      makeRollOption('opt_eden13_speed_across_fields', 'Hold the throttle wide open and scatter the seeds across the entire valley [ROLL +COOL]', 'cool', 'Street Cred',
        'You drive in triumphant sweeping arcs across fifty square kilometers of fertile dirt.',
        'STRONG HIT: The great greening of North America! A sea of golden wheat rolls across the horizon as far as the eye can see!', { qualities: { 'Eden Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The seeds take root across thousands of acres, securing a harvest.', { qualities: { 'Eden Stage': 1, 'Street Cred': 12 } },
        'MISS: Mud splatters your windshield before you regain highway asphalt.', { qualities: { 'Eden Stage': 1 } }),
      makeRollOption('opt_eden13_broadcast_harvest_call', 'Broadcast the coordinates on all public radio bands to every starving settlement [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You open the radio and invite every free trucker and refugee to feast.',
        'STRONG HIT: Millions hear your call! A jubilant armada of tractors, trucks, and families moves toward the valley!', { qualities: { 'Eden Stage': 1, 'Tech Literacy': 10, 'Street Cred': 20 } },
        'WEAK HIT: The broadcast reaches dozens of nearby refugee camps.', { qualities: { 'Eden Stage': 1, 'Street Cred': 10 } },
        'MISS: Static garbles the frequency, but local stations pick it up.', { qualities: { 'Eden Stage': 1 } }),
      makeDirectOption('opt_eden13_steady_course', 'Maintain a steady, dignified course toward the central granary silo',
        'You deliver the master seed pods to the central vault doors.',
        { qualities: { 'Eden Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_eden_14_eden_climax', title: 'The Bread of the New World [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'The master vault doors of New Eden swing wide! Dr. Silas Green turns to you, holding up a sheaf of fresh golden wheat in triumphant glory.',
    options: [
      makeRollOption('opt_eden14_lock_harvester', 'Lock the Bio-Regenerative Soil Hydro-Prow permanently into your rig [HARVESTER PATH] [ROLL +GRIT]', 'grit', 'Street Cred',
        'You weld the final terraforming brackets, crowned the Harvester of Eden.',
        'STRONG HIT: Sovereign agrarian dominance! Your hauler commands unmatched cargo tonnage and living composite armor on continental roads!', { qualities: { 'Eden Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The terraforming modifications are permanently locked in.', { qualities: { 'Eden Stage': 1, 'Street Cred': 12 } },
        'MISS: Welds cool firmly, balancing with total stability.', { qualities: { 'Eden Stage': 1 } },
        { qualities: { 'Eden Chosen Path': 1 } }),
      makeRollOption('opt_eden14_found_commonwealth', 'Sign the Charter of the Green Commonwealth [COMMONWEALTH PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You sign the founding treaty, establishing a free agrarian republic.',
        'STRONG HIT: Father of the Free World! Millions of citizens worship your name; the council outfits your rig with supreme transport trailers!', { credits: 8000, qualities: { 'Eden Stage': 1, 'Street Cred': 35 } },
        'WEAK HIT: The Commonwealth is established with jubilation and feast.', { credits: 4000, qualities: { 'Eden Stage': 1, 'Street Cred': 18 } },
        'MISS: The treaty is signed with solemn reverence.', { qualities: { 'Eden Stage': 1 } },
        { qualities: { 'Eden Chosen Path': 2 } }),
      makeRollOption('opt_eden14_contract_syndicate', 'Deliver the Synthetic Patents to the Bio-Tech Cartel [TITAN PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You sell the commercial mass-production rights for billions in gold.',
        'STRONG HIT: Unprecedented billionaire wealth! Armored trailers and high-speed turbines are loaded onto your rig!', { credits: 15000, qualities: { 'Eden Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The syndicate honors the massive contract in full.', { credits: 8000, qualities: { 'Eden Stage': 1 } },
        'MISS: Transaction concludes with full treasury transfers.', { qualities: { 'Eden Stage': 1 } },
        { qualities: { 'Eden Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_eden_15_finale', title: 'The Harvester of Eden [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Last Grain of Eden is concluded. Your rig has been permanently modified with revolutionary bio-regenerative engineering and massive cargo expansion.',
    options: [
      makeDirectOption('opt_eden15_ending_harvester', 'Command Continental Supply as the Harvester of Eden [ENDING 1: HARVESTER OF EDEN]',
        'Equipped with the Bio-Regenerative Soil Hydro-Prow, your hauler commands +10 T Cargo Capacity, +20 Max Hull, and permanent +1 GRIT.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { grain: 5, chips: 3 },
          qualities: { 'Eden Stage': 80, 'Street Cred': 35, 'Heat': -50 },
          stats: { grit: 1 },
          rig: { maxCargoWeight: 10, maxHull: 20, name: 'Iron Nomad - Harvester of Eden' }
        }, { qualities: { 'Eden Chosen Path': 1 } }),
      makeDirectOption('opt_eden15_ending_commonwealth', 'Lead the Green Commonwealth as the Food Sovereign [ENDING 2: GREEN COMMONWEALTH]',
        'Revered as the savior of humanity from famine, your rig is outfitted with massive +12 T cargo capacity trailers and emergency food dispensers.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { grain: 6, batteries: 3 },
          qualities: { 'Eden Stage': 80, 'Street Cred': 40 },
          stats: { grit: 1, cool: 1 },
          rig: { maxCargoWeight: 12, speedRating: 0.12, name: 'Iron Nomad - Green Commonwealth' }
        }, { qualities: { 'Eden Chosen Path': 2 } }),
      makeDirectOption('opt_eden15_ending_synthetics', 'Rule the Global Market as the Eden Titan [ENDING 3: EDEN TITAN]',
        'Flush with bio-tech cartel billions, your rig is armed with high-output turbines, reinforced titanium armor, and high-capacity holds.',
        {
          credits: 25000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Eden Stage': 80, 'Street Cred': 30, 'Contraband Mastery': 20 },
          stats: { grit: 1, edge: 1 },
          rig: { speedRating: 0.20, maxHull: 25, name: 'Iron Nomad - Eden Titan' }
        }, { qualities: { 'Eden Chosen Path': 3 } }),
      makeDirectOption('opt_eden15_farewell', 'Collect final harvest bonus and roll out toward golden horizons',
        'With green wheat waving behind you, you merge back onto open asphalt.',
        {
          credits: 12000,
          qualities: { 'Eden Stage': 80, 'Street Cred': 10 },
          stats: { grit: 1 },
          rig: { maxCargoWeight: 6 }
        })
    ]
  }
];

const compiledEden = compileStorylets(edenData, 'Eden Stage');
writeTsFile('src/data/edenQuestStorylets.ts', 'EDEN_QUEST_STORYLETS', compiledEden);

// =========================================================================
// SAGA 10: THE SOVEREIGN SKYWAY (15 Storylets)
// Solid-fuel rocket booster sled, Grand Canyon fault jump, sub-orbital flight
// =========================================================================
const skywayData = [
  {
    stage: 1, id: 'story_skyway_01_the_booster_sled', title: 'The Rocket on the Salt Flats', trigger: 'DOCK',
    text: 'At an abandoned dry-lake aerospace test facility in the Mojave, an outlaw rocket propulsion engineer named Gary "Burnout" Sparks reveals a secret: a pair of military-grade solid-fuel rocket booster sleds designed to attach directly to a heavy hauler\'s chassis rails. "Aegis has locked down the continental border with a 50-foot concrete blast wall," Gary grins with wild eyes. "We can\'t drive through it. But with these boosters, we can launch your 35-ton rig across the 2-kilometer Grand Canyon Fault and land clean on the other side."',
    options: [
      makeRollOption('opt_skyway01_accept_rocket', 'Accept the rocket-boosted continental jump mission [ROLL +COOL]', 'cool', 'Street Cred',
        'You review Gary\'s flight trajectory math and inspect the solid-fuel rocket nozzles.',
        'STRONG HIT: Audacious partnership! Gary transfers a 1,500 credit advance and heavy titanium mounting brackets!', { credits: 1500, cargo: { batteries: 2 }, qualities: { 'Skyway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You accept the contract and back your truck onto the mounting ramp.', { credits: 800, qualities: { 'Skyway Stage': 1 } },
        'MISS: A minor fuel ignition test scorches your rear mudguard.', { hullIntegrity: -5, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway01_verify_aerodynamics', 'Run aerodynamic flight simulations on your cyberdeck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You model lift-to-drag ratios of your trailer at Mach 1.5.',
        'STRONG HIT: Flawless aerodynamic calculation! You design retractable canard winglets to guarantee stable flight pitch!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Simulations confirm a viable sub-orbital ballistic arc.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Simulation software crashes from division-by-zero errors.', { qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway01_reinforce_frame', 'Weld heavy titanium truss reinforcements along the fifth-wheel mounting plate',
        'Solid structural welding ensures the hauler won\'t buckle under rocket thrust.',
        { hullIntegrity: 15, qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_skyway_02_solid_fuel_salvage', title: 'The Missile Silo Salvage', trigger: 'DOCK',
    text: 'To fuel the rocket sleds, Gary directs you to a decommissioned ICBM missile silo buried in the desert hills. "We need high-density solid rocket propellant blocks," he explains. "The silo elevator is dead, but the ordnance racks are fully stocked."',
    options: [
      makeRollOption('opt_skyway02_winch_fuel_blocks', 'Use your heavy truck winch to hoist the 500-pound propellant blocks [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You loop heavy nylon straps around the aluminum-cased fuel blocks.',
        'STRONG HIT: Flawless heavy lifting! You secure 4 pristine solid-fuel rocket booster blocks and rare chips!', { cargo: { batteries: 2, chips: 2 }, qualities: { 'Skyway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You hoist enough fuel to load both booster sleds.', { cargo: { batteries: 1 }, qualities: { 'Skyway Stage': 1 } },
        'MISS: A fuel block catches on the silo lip, bending your winch gantry.', { hullIntegrity: -12, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway02_hack_crane', 'Restore power to the silo\'s automated overhead gantry crane [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You bypass the silo electrical breakers with your cyberdeck.',
        'STRONG HIT: The automated crane swings into action, loading the propellant blocks onto your flatbed in minutes!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The crane operates at half-speed, loading the necessary fuel.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Electrical short trips the silo alarm, sounding distant klaxons.', { qualities: { 'Skyway Stage': 1, 'Heat': 10 } }),
      makeDirectOption('opt_skyway02_careful_haul', 'Lash the explosive rocket fuel securely with non-sparking brass chains',
        'Safety first: spark-proof lashing prevents accidental ignition on bumpy roads.',
        { hullIntegrity: 10, qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_skyway_03_the_first_test_burn', title: 'The Mach 0.8 Salt Flat Run', trigger: 'ROAD_EVENT',
    text: 'On the mirror-flat surface of the Bonneville Salt Flats, Gary preps a 3-second low-power test burn of the rocket sleds. The twin rocket exhausts glow white-hot; the smell of burning ammonium perchlorate fills the cockpit.',
    options: [
      makeRollOption('opt_skyway03_ignite_boosters', 'Hit the master rocket ignition switch and hold the steering dead-center [ROLL +EDGE]', 'edge', 'Street Cred',
        'You flip the red safety toggle and punch the ignition button.',
        'STRONG HIT: Blinding, godlike acceleration! 20,000 pounds of thrust slams you back into your seat as the speedometer screams past 300 km/h in four seconds!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: The rockets roar and shut down cleanly, leaving smoking salt tracks.', { qualities: { 'Skyway Stage': 1, 'Street Cred': 6 } },
        'MISS: Thrust asymmetry pulls hard to the left, throwing the rig into a violent drift before you recover.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway03_monitor_temperatures', 'Monitor telemetry and balance rocket thrust vectors digitally [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You adjust the electro-hydraulic gimbal actuators on your computer.',
        'STRONG HIT: Perfect directional thrust alignment! Zero aerodynamic yaw or drift during the burn!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Thrust balance holds within safe parameters.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: An actuator motor overheats, blowing a fuse.', { hullIntegrity: -8, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway03_deploy_parachutes', 'Test the high-speed drogue deceleration parachutes',
        'The twin parachutes pop and blossom, bringing the 35-ton rig to a smooth stop.',
        { hullIntegrity: 10, qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_skyway_04_the_pursuing_interceptors', title: 'The Aegis Speed Hunters', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis Interceptor corvettes equipped with twin-turbo jet engines spot your rocket-equipped hauler on Route 50! "IDENTIFY PROHIBITED MILITARY PROPULSION SYSTEM AND PULL OVER IMMEDIATELY."',
    options: [
      makeRollOption('opt_skyway04_rocket_burst', 'Trigger a 1-second rocket pulse to vaporize their pursuit [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You tap the rocket throttle. Twin supersonic shockwaves hit their cruisers!',
        'STRONG HIT: Sonic boom annihilation! The rocket blast blows their interceptors off the road into the salt flats while you vanish over the horizon!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The rocket burst opens a two-kilometer lead, leaving them behind.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: The thermal blast scorches your own rear mudguards before burning out.', { hullIntegrity: -12, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway04_oil_slick_defense', 'Deploy pressurized oil and magnesium flares across the highway [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You pull the manual countermeasures release lever.',
        'STRONG HIT: Both pursuing cruisers spin out in blinding magnesium smoke and slide off the asphalt!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The cruisers back off, abandoning pursuit.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Return cannon fire chips your cab door armor.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway04_deploy_smoke', 'Deploy ultra-dense chemical smoke and exit onto a dirt canyon trail',
        'Dense smoke conceals your turnoff into the mountain canyons.',
        { credits: -150, qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_skyway_05_the_canyon_runway', title: 'The Eagle Rim Staging Ground', trigger: 'DOCK',
    text: 'You arrive at Eagle Rim—the lip of the Grand Canyon fault line. Below lies a 3,000-foot drop into jagged red sandstone. Across the 2-kilometer chasm, on the sovereign free territory rim, a guiding landing beacon flashes green.',
    options: [
      makeRollOption('opt_skyway05_construct_ramp', 'Use your truck winch and steel road plates to assemble a 20-degree launch ramp [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You and Gary bolt together high-tensile steel ramp sections.',
        'STRONG HIT: Masterwork ramp engineering! The 20-degree incline guarantees a perfect sub-orbital ballistic climb angle!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The ramp is assembled and anchored into the rock.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: A hydraulic ramp support pin bends under load, requiring welding.', { hullIntegrity: -10, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway05_calibrate_flight_avionics', 'Sync your cyberdeck with the landing beacon transponder [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You lock your heads-up display onto the far rim coordinates.',
        'STRONG HIT: Millimeter-perfect telemetry lock! Flight computer predicts touchdown with 99.8% precision!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 10 } },
        'WEAK HIT: Telemetry locks on the far beacon successfully.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Radar static blurs the landing coordinates slightly.', { qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway05_consume_chips', 'Install 2 Neural Processing Chips from hold into the flight autopilot [INVENTORY]',
        'Dual neural processors automate pitch, yaw, and landing parachute timing.',
        { cargo: { chips: -2 }, hullIntegrity: 15, qualities: { 'Skyway Stage': 1, 'Tech Literacy': 12 } },
        { cargo: { chips: 2 } })
    ]
  },
  {
    stage: 6, id: 'story_skyway_06_canard_winglets', title: 'The Wings of Iron', trigger: 'ROAD_EVENT',
    text: 'To ensure the 35-ton hauler doesn\'t tumble like a brick mid-flight, Gary bolts pneumatic titanium canard winglets directly above the front fenders and trailer roof.',
    options: [
      makeRollOption('opt_skyway06_weld_winglets', 'Weld and test the pneumatic winglet deployment actuators [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You execute heavy bead welds along the titanium winglet roots.',
        'STRONG HIT: Flawless aerospace structural welding! The winglets can withstand 10 Gs of dynamic air pressure!', { hullIntegrity: 35, qualities: { 'Skyway Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The winglets deploy smoothly on pneumatic test cycles.', { hullIntegrity: 15, qualities: { 'Skyway Stage': 1 } },
        'MISS: A pneumatic seal hisses air, requiring replacement.', { qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway06_aerodynamic_tuning', 'Tune winglet pitch controls for supersonic roll stability [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You calibrate the fly-by-wire controls on your dashboard.',
        'STRONG HIT: Razor-sharp aerodynamic agility! The truck will glide like an aerospace shuttle!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Pitch controls respond cleanly to steering wheel inputs.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Control lag adds a slight dead zone in center steering.', { qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway06_inspect_drogues', 'Repack the triple Kevlar deceleration parachutes with talcum powder',
        'Carefully folded parachutes guarantee instant high-speed deployment.',
        { qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_skyway_07_the_final_countdown', title: 'The Ignition Pad', trigger: 'DOCK',
    text: 'Dawn breaks over the Grand Canyon in brilliant red and gold. The Iron Nomad sits at the base of the ramp, twin solid-fuel rockets primed with 50,000 pounds of thrust. In the distance, Aegis attack gunships are diving fast toward your position.',
    options: [
      makeRollOption('opt_skyway07_arm_master_switches', 'Arm the dual ignition keys and lock your five-point harness [ROLL +COOL]', 'cool', 'Street Cred',
        'You stare down the canyon abyss, your heart steady as a mountain.',
        'STRONG HIT: Unshakeable iron composure! You initiate the countdown with total calm; all systems green!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 14 } },
        'WEAK HIT: You lock your harness and grip the wheel with white knuckles.', { qualities: { 'Skyway Stage': 1, 'Street Cred': 6 } },
        'MISS: Adrenaline spikes your pulse; your hand shakes on the ignition toggle.', { qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway07_spoof_gunship_radar', 'Broadcast false missile launches to force the gunships into evasive loops [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You transmit simulated radar missile locks into their cockpits.',
        'STRONG HIT: The gunships break formation and dump chaff, buying you ninety seconds of clear sky!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Gunships hesitate, delaying their missile run.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Gunships see through the bluff and open fire with 30mm auto-cannons.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway07_three_two_one', 'Slam the ignition lever to maximum and brace for launch',
        'The rockets ignite with an apocalyptic roar of white flame!',
        { qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_skyway_08_the_launch', title: 'The Flight of the Iron Nomad', trigger: 'TRANSIT_ENCOUNTER',
    text: 'THE LAUNCH! The hauler blasts up the steel ramp at 200 km/h and launches into the open sky! 3,000 feet above the Grand Canyon floor, twin pillars of solid-fuel rocket fire propel your 35-ton rig in a breathtaking sub-orbital arc through the clouds!',
    options: [
      makeRollOption('opt_skyway08_trim_flight_pitch', 'Work the canard winglet controls to maintain steady climbing pitch [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You steer through the clouds, holding aerodynamic lift with surgical precision.',
        'STRONG HIT: Sublime flight mastery! The hauler soars across the 2-kilometer chasm with the grace of an eagle!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: The truck holds its flight trajectory, though air turbulence rattles the cab.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: A crosswind rolls the truck ten degrees before you level the wings.', { hullIntegrity: -12, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway08_throttle_burnout', 'Time the exact millisecond of rocket booster burnout and separation [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You trigger the explosive separation bolts as the solid fuel depletes.',
        'STRONG HIT: Flawless booster staging! The empty rocket casings drop away cleanly into the canyon depths!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 10 } },
        'WEAK HIT: Boosters separate safely, though one casing scrapes a mudflap.', { hullIntegrity: -8, qualities: { 'Skyway Stage': 1 } },
        'MISS: Booster release delay causes aerodynamic yaw before separating.', { hullIntegrity: -12, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway08_enjoy_the_view', 'Look out the side window at the sunrise over the vast continent below',
        'For ten seconds, you are the highest trucker on planet Earth.',
        { qualities: { 'Skyway Stage': 1, 'Street Cred': 10 } })
    ]
  },
  {
    stage: 9, id: 'story_skyway_09_the_touchdown', title: 'The Parachute Touchdown', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The far rim of the Grand Canyon rushes up to meet your windshield! Altitude: 200 feet! Speed: 180 km/h! It\'s time to deploy the triple deceleration parachutes!',
    options: [
      makeRollOption('opt_skyway09_pop_chutes', 'Punch the emergency parachute release and feather the air brakes [ROLL +GRIT]', 'grit', 'Street Cred',
        'You deploy the triple Kevlar chutes and brace for impact.',
        'STRONG HIT: Magnificent touchdown! The three parachutes blossom like giant white flowers, bringing your 35-ton rig to a smooth, perfect landing on the sovereign highway!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: The chutes deploy, though heavy landing shock jars your front suspension.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } },
        'MISS: One chute fouls; the hard landing bounces your trailer hard on the asphalt.', { hullIntegrity: -25, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway09_drift_landing', 'Touch down at speed and execute a 180-degree power-slide on the landing strip [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You hit the pavement at 120 km/h and lock the rear bogies into a skid.',
        'STRONG HIT: Legendary stunt landing! The truck spins gracefully to a halt in a cloud of blue tire smoke!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: You scrub off speed in a controlled slide, smoking your tires.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: The slide clips a roadside gravel berm, scratching your side skirts.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway09_steady_braking', 'Engage anti-lock air brakes steadily and reel in the parachute lines',
        'Methodical braking brings the hauler safely to a stop.',
        { qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_skyway_10_the_crossroads', title: 'The Sovereign Skyway [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'On the free sovereign rim of the canyon, hundreds of wasteland truckers, militia fighters, and engineers gather around your steaming, rocket-scorched hauler in absolute disbelief and cheering ecstasy. Gary claps you on the shoulder. "We just rewrote the laws of transportation," he roars. "Three futures await your legendary rocket-rig!"',
    options: [
      makeDirectOption('opt_skyway10_choose_comet', 'Path 1: Permanently integrate the Rocket Booster Sled into your Rig [STRATOSPHERIC COMET]',
        'You choose supreme highway velocity. The solid-fuel booster system will be permanently retrofitted to your chassis, granting an incredible +35% permanent speed rating.',
        { qualities: { 'Skyway Stage': 1, 'Skyway Chosen Path': 1, 'Street Cred': 25 } }),
      makeDirectOption('opt_skyway10_choose_glider', 'Path 2: Build the Sub-Orbital Freight Glider Fleet [SKYWARD NOMAD]',
        'You choose continental logistics revolution. You and Gary establish the Skyward Courier guild, flying high-value cargo over all corporate blockades.',
        { qualities: { 'Skyway Stage': 1, 'Skyway Chosen Path': 2, 'Street Cred': 30 } }),
      makeDirectOption('opt_skyway10_choose_thunder', 'Path 3: Heavy Jet-Assisted Combat Dreadnought [THUNDER ROCKET]',
        'You choose devastating military power. Heavy jet boosters and thick armor plating turn your rig into an unstoppable assault dreadnought.',
        { qualities: { 'Skyway Stage': 1, 'Skyway Chosen Path': 3, 'Contraband Mastery': 20 } })
    ]
  },
  {
    stage: 11, id: 'story_skyway_11_airdrop_blockade', title: 'The Airstrike Retaliation', trigger: 'COMBAT_ENCOUNTER',
    text: 'Enraged by your miraculous border escape, Aegis high command launches long-range cruise missiles to destroy the rocket hauler on the sovereign runway!',
    options: [
      makeRollOption('opt_skyway11_rocket_scramble', 'Fire a secondary solid-fuel sprint burst to outrun the missile blast radius [ROLL +EDGE]', 'edge', 'Street Cred',
        'You hit the sprint booster, accelerating from 0 to 200 km/h in two seconds.',
        'STRONG HIT: Hypersonic sprint! The cruise missiles detonate harmlessly three miles behind you in the desert sand!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 16 } },
        'WEAK HIT: You clear the primary blast zone, taking shockwave dust against your rear doors.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Concussion wave rocks the hauler, cracking your rear trailer lights.', { hullIntegrity: -15, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway11_electronic_spoof', 'Transmit Gary\'s radar-decoy pulse to redirect the cruise missiles into the canyon [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You beam false GPS coordinates into the missile guidance receivers.',
        'STRONG HIT: Trajectory diversion! The missiles turn gracefully and plunge into the empty canyon abyss!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 10 } },
        'WEAK HIT: The missiles detonate on a distant canyon ridge.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Countermeasures scramble your radar dish before the missile passes.', { hullIntegrity: -12, qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway11_bunker_shelter', 'Duck beneath the reinforced concrete canopy of a sovereign aircraft hangar',
        'The heavy concrete roof shields your rig from shrapnel.',
        { qualities: { 'Skyway Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_skyway_12_chassis_aerospace_refit', title: 'The Aerospace Frame Refit', trigger: 'ROAD_EVENT',
    text: 'Sovereign aerospace mechanics work through the afternoon, welding titanium heat-shield tiles along your undercarriage and installing retractable carbon-fiber canard wings.',
    options: [
      makeRollOption('opt_skyway12_supervise_welding', 'Supervise precision titanium heat-shield riveting [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You ensure every aerospace tile is bonded with thermal ceramic mastic.',
        'STRONG HIT: Space-shuttle grade armor! Your chassis can withstand re-entry heat and rocket fire with zero fatigue!', { hullIntegrity: 45, qualities: { 'Skyway Stage': 1 } },
        'WEAK HIT: The heat shields are installed solidly along the frame.', { hullIntegrity: 25, qualities: { 'Skyway Stage': 1 } },
        'MISS: A rivet tool slips, leaving a minor scratch on a side panel.', { hullIntegrity: 5, qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway12_wire_flight_controls', 'Interface the winglet actuators with your dashboard joystick [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You wire the fly-by-wire flight joystick into the center console.',
        'STRONG HIT: Flawless flight controls! You can adjust aerodynamic trim with fingertip precision!', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: The joystick controls respond cleanly to inputs.', { qualities: { 'Skyway Stage': 1 } },
        'MISS: Flight software takes an extra reboot cycle to calibrate.', { qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway12_polish_rocket_cowlings', 'Buff the stainless steel rocket exhaust bells to a brilliant mirror shine',
        'The polished rocket engines look terrifying and glorious.',
        { qualities: { 'Skyway Stage': 1, 'Street Cred': 6 } })
    ]
  },
  {
    stage: 13, id: 'story_skyway_13_the_sovereign_escort', title: 'The Triumph of the Skyway', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A convoy of fifty sovereign wasteland haulers and armored gun-trucks forms up around your rocket rig. They sound their air horns in thunderous harmony, escorting you in a glorious parade across the open Pacific desert.',
    options: [
      makeRollOption('opt_skyway13_lead_convoy', 'Lead the sovereign parade at 130 km/h with flags flying from your cab [ROLL +COOL]', 'cool', 'Street Cred',
        'You take the lead position, horns blaring across the vast plains.',
        'STRONG HIT: The King of the Continental Skies! The highway echoes with the roar of freedom; your legend is immortal!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: You lead the convoy with pride and majesty.', { qualities: { 'Skyway Stage': 1, 'Street Cred': 12 } },
        'MISS: Engine runs a bit warm in the group formation, but you hold point.', { qualities: { 'Skyway Stage': 1 } }),
      makeRollOption('opt_skyway13_radio_broadcast', 'Broadcast an inspirational victory address to every trucker on the continent [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You open the high-power transmitter and speak to the open road.',
        'STRONG HIT: Millions hear your voice: "They built walls to cage us. Today, we learned to fly!"', { qualities: { 'Skyway Stage': 1, 'Tech Literacy': 12, 'Street Cred': 20 } },
        'WEAK HIT: Your message spreads across all independent trucker frequencies.', { qualities: { 'Skyway Stage': 1, 'Street Cred': 10 } },
        'MISS: Radio static clips your closing words, but the message is clear.', { qualities: { 'Skyway Stage': 1 } }),
      makeDirectOption('opt_skyway13_salute_drivers', 'Sound your dual chrome air horns in rhythmic salute to your comrades',
        'The deep brass roar of your horns shakes the canyon rocks.',
        { qualities: { 'Skyway Stage': 1, 'Street Cred': 8 } })
    ]
  },
  {
    stage: 14, id: 'story_skyway_14_skyway_climax', title: 'The Stratospheric Horizon [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have arrived at the Pacific aerospace citadel! The final flight telemetry is logged as you permanently lock in your chosen destiny.',
    options: [
      makeRollOption('opt_skyway14_lock_rocket_sled', 'Lock the Solid-Fuel Rocket Booster Sled permanently into your rig [COMET PATH] [ROLL +EDGE]', 'edge', 'Street Cred',
        'You weld the final firing contacts, crowned the Stratospheric Comet of the American Highway.',
        'STRONG HIT: Supreme velocity godhood! +35% permanent speed rating! No vehicle in existence can match your velocity!', { qualities: { 'Skyway Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: The rocket sled is permanently integrated and balanced.', { qualities: { 'Skyway Stage': 1, 'Street Cred': 15 } },
        'MISS: A minor booster relay sparks before balancing cleanly.', { qualities: { 'Skyway Stage': 1 } },
        { qualities: { 'Skyway Chosen Path': 1 } }),
      makeRollOption('opt_skyway14_charter_skyward', 'Inaugurate the Skyward Nomad Courier Guild [NOMAD PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You sign the founding charter of the continent\'s first sub-orbital freight fleet.',
        'STRONG HIT: Supreme courier empire! Billions in contracts and elite glider trailers are loaded onto your rig!', { credits: 10000, qualities: { 'Skyway Stage': 1, 'Street Cred': 35 } },
        'WEAK HIT: The guild is established with massive celebration.', { credits: 5000, qualities: { 'Skyway Stage': 1, 'Street Cred': 18 } },
        'MISS: The charter is signed with solemn ceremonies.', { qualities: { 'Skyway Stage': 1 } },
        { qualities: { 'Skyway Chosen Path': 2 } }),
      makeRollOption('opt_skyway14_arm_thunder_dreadnought', 'Lock in Heavy Jet-Assisted Combat Armor [THUNDER PATH] [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You mount jet turbine boosters and heavy armor plates across every surface.',
        'STRONG HIT: Unstoppable kinetic war-rig! You strike fear into every corporate army on the continent!', { credits: 15000, qualities: { 'Skyway Stage': 1, 'Street Cred': 30 } },
        'WEAK HIT: Thunder armor is secured with full balance.', { credits: 8000, qualities: { 'Skyway Stage': 1 } },
        'MISS: Heavy armor adds slight weight, but yields terrifying power.', { qualities: { 'Skyway Stage': 1 } },
        { qualities: { 'Skyway Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_skyway_15_finale', title: 'The Stratospheric Comet [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Sovereign Skyway is complete. Your hauler has been permanently modified with revolutionary aerospace rocketry and supersonic running gear.',
    options: [
      makeDirectOption('opt_skyway15_ending_comet', 'Rule the Open Highway as the Stratospheric Comet [ENDING 1: STRATOSPHERIC COMET]',
        'Equipped with the Solid-Fuel Rocket Booster Sled, your hauler commands an unbelievable +35% permanent speed rating, +15 Max Hull, and permanent +1 EDGE.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { batteries: 4, chips: 3 },
          qualities: { 'Skyway Stage': 80, 'Street Cred': 40, 'Heat': -50 },
          stats: { edge: 1 },
          rig: { speedRating: 0.35, maxHull: 15, name: 'Iron Nomad - Stratospheric Comet' }
        }, { qualities: { 'Skyway Chosen Path': 1 } }),
      makeDirectOption('opt_skyway15_ending_nomad', 'Command Continental Skies as the Skyward Nomad [ENDING 2: SKYWARD NOMAD]',
        'Leading the sub-orbital freight revolution, your rig commands +28% speed rating, +5 T Cargo Capacity, and permanent +1 EDGE and +1 COOL.',
        {
          credits: 18000,
          hullIntegrity: 100,
          cargo: { chips: 5, batteries: 3 },
          qualities: { 'Skyway Stage': 80, 'Street Cred': 40 },
          stats: { edge: 1, cool: 1 },
          rig: { speedRating: 0.28, maxCargoWeight: 5, name: 'Iron Nomad - Skyward Nomad' }
        }, { qualities: { 'Skyway Chosen Path': 2 } }),
      makeDirectOption('opt_skyway15_ending_thunder', 'Crush All Opposition as the Thunder Rocket [ENDING 3: THUNDER ROCKET]',
        'Armed with jet turbine boosters, +25% speed rating, and +30 Max Hull armor plating, your rig is the undisputed sovereign dreadnought of the highways.',
        {
          credits: 24000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Skyway Stage': 80, 'Street Cred': 35, 'Contraband Mastery': 20 },
          stats: { edge: 1, grit: 1 },
          rig: { speedRating: 0.25, maxHull: 30, name: 'Iron Nomad - Thunder Rocket' }
        }, { qualities: { 'Skyway Chosen Path': 3 } }),
      makeDirectOption('opt_skyway15_farewell', 'Collect final veteran courier fee and roll out into the radiant sky',
        'With the skies conquered, you merge back onto open asphalt.',
        {
          credits: 12000,
          qualities: { 'Skyway Stage': 80, 'Street Cred': 10 },
          stats: { edge: 1 },
          rig: { speedRating: 0.20 }
        })
    ]
  }
];

const compiledSkyway = compileStorylets(skywayData, 'Skyway Stage');
writeTsFile('src/data/skywayQuestStorylets.ts', 'SKYWAY_QUEST_STORYLETS', compiledSkyway);
