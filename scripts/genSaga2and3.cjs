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
// SAGA 2: THE RAILGUN OF THE RED RIDGE (15 Storylets)
// Heavy artillery haul, mass-driver conversion, tungsten slug warfare
// =========================================================================
const railgunData = [
  {
    stage: 1, id: 'story_railgun_01_mountain_rumble', title: 'The Iron Cannon of Red Ridge', trigger: 'DOCK',
    text: 'In the shadow of Red Ridge, an eccentric military engineer named Boris Vance bangs his wrench against your bull-bar. "A 60-meter magnetic mass-driver barrel is sealed in Bunker 44," he grunts. "Pre-war military surplus. Aegis scrapyard crews want to melt it into rebar. Haul it across the mountains, and I\'ll mount a devastating dorsal kinetic artillery system to your rig."',
    options: [
      makeRollOption('opt_railgun01_accept_haul', 'Accept the artillery haul and negotiate equipment advances [ROLL +COOL]', 'cool', 'Street Cred',
        'You review Boris\'s blueprints and negotiate heavy escort fees.',
        'STRONG HIT: Flawless negotiation! Boris transfers a 1,500 credit advance and heavy tie-down chains.', { credits: 1500, qualities: { 'Railgun Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You accept the contract and prepare your flatbed.', { credits: 800, qualities: { 'Railgun Stage': 1 } },
        'MISS: Local raider spies overhear the contract, raising local alertness.', { qualities: { 'Railgun Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_railgun01_scan_barrel', 'Examine the magnetic coils and superconducting bore [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You inspect the barrel\'s electromagnetic coil windings with your deck.',
        'STRONG HIT: Pristine military hardware! The coils can handle extreme voltage discharges without burning out.', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The coils are intact, though dusty with decades of desert silica.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Diagnostic probe shorts against the static charge, singing your cable.', { hullIntegrity: -5, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun01_prep_suspension', 'Install extra leaf springs and hydraulic bump stops on the rear bogies',
        'You prepare the chassis for 40 metric tons of concentrated iron mass.',
        { hullIntegrity: 15, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_railgun_02_weight_distribution', title: 'The Crushed Asphalt', trigger: 'ROAD_EVENT',
    text: 'The colossal 40-ton barrel groans on its cradles as you hit the highway. Asphalt crumbles beneath your dual tires; the steering pulls hard to the right as your fifth wheel strains under extreme downward force.',
    options: [
      makeRollOption('opt_railgun02_rebalance_hydraulics', 'Adjust trailer hydraulic load-leveling valves on the fly [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You climb onto the trailer gantry and manually balance the pneumatic pressure regulators.',
        'STRONG HIT: Perfect weight distribution! The hauler rides level, absorbing shocks effortlessly.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You balance the load, though rear shocks run warm.', { hullIntegrity: -5, qualities: { 'Railgun Stage': 1 } },
        'MISS: Hydraulic overpressure pops an O-ring, spraying red oil across the road.', { hullIntegrity: -15, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun02_momentum_drive', 'Trust engine torque and carry continuous momentum over dips [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You read the dips in the road and apply smooth, continuous throttle.',
        'STRONG HIT: Sublime heavy driving! You glide across cracked highway sections without bottoming out.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The trailer clears the rough road, though your trailer hitch creaks loudly.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: A violent pothole jars the cab, cracking your passenger wing mirror.', { hullIntegrity: -18, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun02_slow_crawl', 'Drop road speed to 30 km/h and engage auxiliary crawler gears',
        'Slow, steady transit preserves your tires and frame.',
        { qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_railgun_03_supercapacitor_salvage', title: 'The Bunker Power Vault', trigger: 'DOCK',
    text: 'To power the cannon, Boris directs you to a decommissioned military substation. "We need high-yield pulse capacitors," he explains. "The automated vault door is rusted shut, but the storage cells inside still hold military-grade lithium dielectric charge."',
    options: [
      makeRollOption('opt_railgun03_breach_vault', 'Winch the steel bunker blast door with your heavy tow cable [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You loop heavy steel cable around the door locks and drop into low reverse.',
        'STRONG HIT: The blast door rips free in a cloud of sparks! You secure 3 heavy pulse capacitors and rare electronics.', { cargo: { batteries: 2, chips: 1 }, qualities: { 'Railgun Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: The door yields, yielding enough capacitor cells to power the gun.', { cargo: { batteries: 1 }, qualities: { 'Railgun Stage': 1 } },
        'MISS: The cable snaps under tension, whiplashing your rear tailgate.', { hullIntegrity: -15, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun03_splice_grid', 'Hack the substation generator to charge the cannon directly [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You splice your deck into the high-voltage busbar.',
        'STRONG HIT: Fast-charge complete! The capacitor banks hum with 50 megawatts of pure kinetic potential!', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The capacitors charge to 70% before the transformer trips.', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Power surge arcs through your deck, blowing several breaker fuses.', { hullIntegrity: -10, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun03_use_held_battery', 'Install 1 Hydro-Battery from your hold directly into the firing capacitor [INVENTORY]',
        'You sacrifice one of your own high-capacity batteries to complete the power circuit.',
        { cargo: { batteries: -1 }, hullIntegrity: 15, qualities: { 'Railgun Stage': 1, 'Street Cred': 8 } },
        { cargo: { batteries: 1 } })
    ]
  },
  {
    stage: 4, id: 'story_railgun_04_warlord_patrol', title: 'The Ridge Interceptors', trigger: 'COMBAT_ENCOUNTER',
    text: 'Outlaw warlord "Crag-Tooth" Vane and three armored gun-trucks ambush your heavy convoy in a mountain defile. "Cut the trailer loose, driver, or we tear your cab apart with heavy caliber!" he roars over the radio.',
    options: [
      makeRollOption('opt_railgun04_ram_ambush', 'Drop the accelerator and ram Vane\'s lead war-rig with full kinetic mass [ROLL +GRIT]', 'grit', 'Street Cred',
        'You drop down three gears and direct 75 tons of rolling iron into his frontline.',
        'STRONG HIT: Monstrous kinetic annihilation! Vane\'s truck is crushed like a soda can, sending the others fleeing in terror!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You smash through their roadblock, denting your heavy steel bumper.', { hullIntegrity: -14, qualities: { 'Railgun Stage': 1 } },
        'MISS: A raider gun-truck sideswipes your trailer, shredding a tire before spinning off.', { hullIntegrity: -25, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun04_precision_counterfire', 'Unlimber your roof heavy rifle and pick off their machine gunners [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You pop up through the cab hatch and line up long-range sniper shots.',
        'STRONG HIT: Surgical marksmanship! Three rounds disable their heavy gun mounts, forcing their convoy to retreat.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You force their gunners into cover, buying time to clear the pass.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Return fire sparks across your cabin roof, chipping bulletproof glass.', { hullIntegrity: -18, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun04_bribe_warlord', 'Offer Vane a payoff from your credit reserves to grant safe passage [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You key your radio and present an offer of cold hard credits.',
        'STRONG HIT: Vane laughs greedily and orders his trucks to escort you through the canyon!', { credits: -300, qualities: { 'Railgun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: Vane takes the bribe and stands down.', { credits: -500, qualities: { 'Railgun Stage': 1 } },
        'MISS: Vane takes the credits and shoots anyway before peeling off!', { credits: -500, hullIntegrity: -15, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_railgun_05_tunnel_clearance', title: 'The Low Concrete Arch', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A pre-war highway tunnel cuts through Granite Peak. The 60-meter railgun cradle sits four inches higher than the tunnel\'s concrete ceiling arch! Heavy rebar teeth jut down like stalactites.',
    options: [
      makeRollOption('opt_railgun05_deflate_tires', 'Rapidly deflate all twelve tires to drop chassis clearance by six inches [ROLL +EDGE]', 'edge', 'Tech Literacy',
        'You hit the central tire inflation dump valves and creep under the arch.',
        'STRONG HIT: Flawless mechanical poise! The cannon glides beneath the concrete ceiling with two inches to spare!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The hauler clears the tunnel, though rebar scores deep scratches on the cannon barrel shroud.', { hullIntegrity: -8, qualities: { 'Railgun Stage': 1 } },
        'MISS: Low clearance shaves off a roof radio antenna before you emerge into the light.', { hullIntegrity: -16, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun05_chisel_concrete', 'Use a pneumatic demolition hammer to chisel out the clearance gap [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You and Boris climb the trailer roof and chisel the obstructing concrete.',
        'STRONG HIT: Quick, brutal labor! You carve a safe groove through the arch in twenty minutes flat.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: Concrete dust cakes your air filters, but the passage is made safe.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Falling concrete chips crack your front windshield.', { hullIntegrity: -12, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun05_slow_push', 'Creep forward at 5 km/h and let the hardened alloy muzzle push aside rebar',
        'The hardened steel barrel bulldozes minor debris without structural damage.',
        { hullIntegrity: -10, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_railgun_06_fire_control_splice', title: 'The Targeting Link', trigger: 'DOCK',
    text: 'While refueling at Highpass Depot, Boris sets up the cannon\'s ballistic firing deck. "We need to splice the targeting optic algorithms directly into your rig\'s digital dashboard," he says, holding high-speed fiber-optic lines.',
    options: [
      makeRollOption('opt_railgun06_neural_link', 'Interface your cyberware neural deck directly with the firing computer [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You plug the ballistic interface into your neural port.',
        'STRONG HIT: Sublime neural symbiosis! You can aim the 60-meter barrel with the blink of your eye!', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: The digital telemetry syncs cleanly to your HUD displays.', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Feedback pulse flashes across your vision, leaving a temporary migraine.', { qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun06_manual_optical_sight', 'Mount an analog gyro-stabilized optical periscope on the roof [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You weld an armored periscope with crosshairs directly above the driver seat.',
        'STRONG HIT: Bulletproof reliability! Pure mechanical optics immune to any corporate EMP jamming!', { hullIntegrity: 15, qualities: { 'Railgun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The analog sight is aligned and locked down.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Alignment slips slightly on rough roads, requiring future recalibration.', { qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun06_consume_chips', 'Install 1 Neural Chip from your hold to automate tracking calculations [INVENTORY]',
        'The high-speed processor optimizes target acquisition speeds by 300%.',
        { cargo: { chips: -1 }, qualities: { 'Railgun Stage': 1, 'Tech Literacy': 8 } },
        { cargo: { chips: 1 } })
    ]
  },
  {
    stage: 7, id: 'story_railgun_07_ambush_gorge', title: 'The Box Canyon Stand', trigger: 'COMBAT_ENCOUNTER',
    text: 'A syndicate heavy ambush traps you inside Devil\'s Throat Gorge! Two heavily armored gun-trucks block the forward road behind concrete barricades while snipers open fire from the rim.',
    options: [
      makeRollOption('opt_railgun07_test_fire_slug', 'Overcharge the capacitors and fire a single kinetic slug at the barricade [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'Boris primes the magnetic rails. The sound of thunder splits the canyon as a 50-pound tungsten slug is launched at Mach 7!',
        'STRONG HIT: Cataclysmic kinetic detonation! The concrete barricade and both gun-trucks are vaporized into powdered dust and flying scrap!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The slug obliterates the roadblock, though intense electromagnetic recoil jolts your hauler.', { hullIntegrity: -12, qualities: { 'Railgun Stage': 1 } },
        'MISS: The slug clips the canyon wall, triggering a rockslide that dents your trailer.', { hullIntegrity: -25, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun07_evasive_reverse', 'Hard-reverse out of the canyon killzone under covering smoke [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pop smoke canisters and back out of the gorge at 60 km/h.',
        'STRONG HIT: Magnificent reverse maneuvering! You escape the trap completely without taking a scratch.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You reverse out of the killzone, taking minor small-arms fire to the doors.', { hullIntegrity: -10, qualities: { 'Railgun Stage': 1 } },
        'MISS: Sniper rounds punch through your radiator before you clear the gorge.', { hullIntegrity: -20, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun07_smoke_screen', 'Deploy an ultra-dense chemical smoke screen and push forward blindly',
        'Blinded by smoke, raiders shoot wide as your heavy iron prow pushes past.',
        { credits: -150, hullIntegrity: -8, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_railgun_08_cooling_lines', title: 'The Boiling Cryo-Jacket', trigger: 'ROAD_EVENT',
    text: 'The test fire superheated the magnetic barrel coils! The liquid nitrogen jacket is venting boiling vapor; pressure needles are pinned deep in the red zone.',
    options: [
      makeRollOption('opt_railgun08_thermal_shunt', 'Vent pressurized steam into the hauler\'s auxiliary exhaust turbo [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You route the high-pressure gas through the turbocharger impellers.',
        'STRONG HIT: Ingenious thermodynamics! The escaping steam spools the turbo, dumping heat and adding 500 horsepower!', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The steam vents safely without damaging the magnetic coils.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: A rubber seal ruptures, blowing scalding coolant across the cab steps.', { hullIntegrity: -12, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun08_cold_water_flush', 'Flush the jacket with raw mountain river runoff [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You hook up suction hoses to an icy roadside mountain creek.',
        'STRONG HIT: Rapid thermal equilibrium! Temperatures plunge back into the safe operating band.', { hullIntegrity: 15, qualities: { 'Railgun Stage': 1 } },
        'WEAK HIT: The coils cool down, though mineral scale leaves slight residue.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Cold shock causes minor microscopic thermal stress fractures in the sleeve.', { hullIntegrity: -10, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun08_emergency_stop', 'Shut down electrical systems and let the mountain wind cool the metal',
        'You wait an hour on the shoulder as the arctic wind dissipates the heat.',
        { qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_railgun_09_bridge_weight', title: 'The Groaning Trestle', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Ahead lies the Timber Creek Trestle—an aging iron railway bridge spanning a 300-meter drop. The load limit sign reads 50 T; your hauler and the railgun weigh a combined 75 tons! Rivets pop as your front wheels roll onto the first span.',
    options: [
      makeRollOption('opt_railgun09_floor_it', 'Floor the accelerator and sprint across before the bridge can collapse [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You put the hammer down, racing across the groaning structure at full speed.',
        'STRONG HIT: Legendary audacity! The hauler roars across the bridge; behind you, the center span collapses into the abyss seconds after your wheels touch solid ground!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You reach the far side with a violent thud as the bridge begins to shear.', { hullIntegrity: -15, qualities: { 'Railgun Stage': 1 } },
        'MISS: The rear axles clip falling ironwork as the structure gives way, mangling your mudguards.', { hullIntegrity: -28, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun09_crawl_load', 'Crawl at exact harmonic resonance speed to minimize bridge sway [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You calculate the bridge\'s vibration frequency and hold a precise 8 km/h.',
        'STRONG HIT: Master engineer driving! The bridge flexes gracefully without snapping a single critical support member.', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 6, 'Street Cred': 6 } },
        'WEAK HIT: You make it across safely, though the steel spans groan in agonizing protest.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: A crossbeam buckles under the rear axle, violently dropping the truck four inches.', { hullIntegrity: -18, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun09_scaffold_ties', 'Use heavy steel cargo chains to reinforce the bridge\'s center joint',
        'You take the time to lash the joint securely before crossing safely.',
        { credits: -200, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_railgun_10_the_crossroads', title: 'The Destiny of Thunder [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the mountain summit depot of Eagle Crest, Boris sets down his welding helmet. "The cannon is ready for permanent installation," he says with a grin. "Three paths lie before us. Who wields the thunder?"',
    options: [
      makeDirectOption('opt_railgun10_choose_dreadnought', 'Path 1: Permanently weld the Railgun onto your Hauler [SIEGE DREADNOUGHT]',
        'You choose personal dominance. The 60-meter magnetic cannon will be mounted directly to your chassis frame, turning your rig into an untouchable highway fortress.',
        { qualities: { 'Railgun Stage': 1, 'Railgun Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_railgun10_choose_freehold', 'Path 2: Deliver the Railgun to the Freehold Defense Bastion [FREEHOLD ARTILLERY]',
        'You choose the sovereignty of the independent settlements. The Freehold militia will mount the cannon on their border fortress to guarantee permanent freedom from corporate tyranny.',
        { qualities: { 'Railgun Stage': 1, 'Railgun Chosen Path': 2, 'Street Cred': 20 } }),
      makeDirectOption('opt_railgun10_choose_cartel', 'Path 3: Sell the Weapon to the Outlaw Syndicate Cartel [OUTLAW THUNDER]',
        'You choose immense underworld wealth and syndicate power. The syndicate pays unprecedented black-market bounties and arms your rig with high-tech contraband engines.',
        { qualities: { 'Railgun Stage': 1, 'Railgun Chosen Path': 3, 'Contraband Mastery': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_railgun_11_air_strike', title: 'The Sky Hunters', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis heavy gunships intercept you in the foothills. Their loudspeaker sirens wail: "UNAUTHORIZED MILITARY HARDWARE DETECTED. SURRENDER THE PROTOTYPE OR BE INCINERATED."',
    options: [
      makeRollOption('opt_railgun11_fire_anti_air', 'Elevate the railgun barrel and fire a proximity fragmentation slug into the sky [ROLL +EDGE]', 'edge', 'Tech Literacy',
        'You track the hovering gunship on your HUD and touch the firing trigger.',
        'STRONG HIT: Direct sky detonation! The kinetic slug obliterates the lead gunship, showering the canyon in flaming debris!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The explosion damages the gunship wing assembly, forcing the patrol to retreat.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: The gunship releases an airstrike salvo before spinning away, cratering the road.', { hullIntegrity: -24, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun11_smoke_jam', 'Deploy electromagnetic radar-chaff flares and duck into the canyons [ROLL +CYBER]', 'cyber', 'Contraband Mastery',
        'You launch clouds of aluminized glass chaff into the air.',
        'STRONG HIT: Flawless radar jamming! The missile locks lose track and detonate harmlessly against stone ridges.', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You evade their main missile volley, sustaining minor shrapnel paint damage.', { hullIntegrity: -10, qualities: { 'Railgun Stage': 1 } },
        'MISS: A thermal rocket detonates near your rear wheels, throwing dirt and rock.', { hullIntegrity: -20, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun11_tunnel_shelter', 'Race into a nearby abandoned rail tunnel to evade the airstrike',
        'The deep rock tunnel shields you from missile fire until the skies clear.',
        { qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_railgun_12_chassis_reinforcement', title: 'The Bed of Titanium', trigger: 'ROAD_EVENT',
    text: 'The immense weight and kinetic recoil of the cannon require final structural bracing. Boris and your crew weld thick titanium box-girders along your hauler\'s primary chassis rails.',
    options: [
      makeRollOption('opt_railgun12_reinforce_frame', 'Direct precision structural welding along the main frame rails [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You operate the heavy arc welder, laying thick bead welds along every high-stress junction.',
        'STRONG HIT: Masterwork metallurgical bracing! The frame becomes virtually indestructible!', { hullIntegrity: 40, qualities: { 'Railgun Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: The bracing reinforces the chassis, absorbing future road punishment.', { hullIntegrity: 20, qualities: { 'Railgun Stage': 1 } },
        'MISS: A weld cooling defect causes slight warping in an outrigger bracket.', { hullIntegrity: 5, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun12_tune_suspension', 'Tune high-pressure nitrogen shock absorbers for combat recoil [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pressurize the suspension damping valves.',
        'STRONG HIT: The rig settles with liquid smoothness, soaking kinetic recoil like silk.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: Suspension handles the load solidly.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: A pressure valve sticks, making the ride bumpy across gravel.', { qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun12_seal_joints', 'Coat all exposed welds in heavy rust-inhibiting rubber undercoating',
        'Protective undercoating shields your frame from caustic wasteland mud.',
        { credits: -150, hullIntegrity: 10, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_railgun_13_the_breach', title: 'The Sovereign Perimeter Assault', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Aegis heavy barricades seal the border highway with automated blast doors and armored tank pillboxes. Boris loads a solid depleted-uranium armor-piercing core into the railgun breech.',
    options: [
      makeRollOption('opt_railgun13_blast_gates', 'Unleash full capacitor discharge and vaporize the border blast doors [ROLL +GRIT]', 'grit', 'Street Cred',
        'You pull the firing lever. A sonic shockwave shatters glass for five kilometers as the 100-megawatt kinetic round strikes!',
        'STRONG HIT: Absolute apocalyptic breakthrough! The 20-foot steel blast door is blasted into a thousand molten fragments!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: You blow the gates clear, though kinetic recoil dents your truck bumper.', { hullIntegrity: -15, qualities: { 'Railgun Stage': 1 } },
        'MISS: The gate collapses into a pile of rubble you have to ram your way through.', { hullIntegrity: -25, qualities: { 'Railgun Stage': 1 } }),
      makeRollOption('opt_railgun13_slice_turrets', 'Transmit Boris\'s master override frequency to hijack the automated pillboxes [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You blast the override key into the base mainframe.',
        'STRONG HIT: Sentry turrets turn their guns on their own barricades, blowing an open lane for your hauler!', { qualities: { 'Railgun Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Turrets shut down into standby mode, letting you roll through.', { qualities: { 'Railgun Stage': 1 } },
        'MISS: Security locks out the network and fires warning salvos.', { hullIntegrity: -18, qualities: { 'Railgun Stage': 1 } }),
      makeDirectOption('opt_railgun13_ram_perimeter', 'Put the hauler in gear and smash through the security guardhouses',
        'Your heavy titanium prow crushes the checkpoint booths into toothpicks.',
        { hullIntegrity: -20, qualities: { 'Railgun Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_railgun_14_cannon_climax', title: 'The Thunder on the Ridge [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken across the frontier! The destination lies ahead in the dawn light as you lock in your chosen destiny and seal the legacy of the Red Ridge artillery.',
    options: [
      makeRollOption('opt_railgun14_mount_dreadnought', 'Lock the Dorsal Mass-Driver permanently into your rig [DREADNOUGHT PATH] [ROLL +GRIT]', 'grit', 'Street Cred',
        'You weld the firing controls directly to your driver console, crowned the Lord of Kinetic Fire.',
        'STRONG HIT: Sovereign highway dominance! No warlord or corporate convoy will ever challenge your path again!', { qualities: { 'Railgun Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: The gun is permanently secured and calibrated.', { qualities: { 'Railgun Stage': 1, 'Street Cred': 10 } },
        'MISS: Final recoil testing strains engine mounts, but the gun is operational.', { qualities: { 'Railgun Stage': 1 } },
        { qualities: { 'Railgun Chosen Path': 1 } }),
      makeRollOption('opt_railgun14_freehold_bastion', 'Deliver the artillery to the Freehold Border Fortress [FREEHOLD PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull into the Freehold fortress where hundreds of militia fighters welcome you with thunderous applause.',
        'STRONG HIT: Savior of the Freehold! The workers grant you eternal free passage, massive bounties, and reclaimer armor!', { credits: 8000, qualities: { 'Railgun Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: Delivery concluded with full payment and celebrations.', { credits: 4000, qualities: { 'Railgun Stage': 1 } },
        'MISS: The militia officers sign off on the cargo with solemn handshakes.', { qualities: { 'Railgun Stage': 1 } },
        { qualities: { 'Railgun Chosen Path': 2 } }),
      makeRollOption('opt_railgun14_cartel_arms_deal', 'Deliver the weapon to the Outlaw Syndicate Vault [CARTEL PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You pull into the subterranean cartel bunker to hand over the artillery.',
        'STRONG HIT: Criminal kingship! Billions in bearer bonds and elite contraband engine upgrades are loaded onto your hauler!', { credits: 10000, qualities: { 'Railgun Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: Syndicate lords honor the contract and transfer wealth.', { credits: 5000, qualities: { 'Railgun Stage': 1 } },
        'MISS: Tense negotiations conclude with full payment.', { qualities: { 'Railgun Stage': 1 } },
        { qualities: { 'Railgun Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_railgun_15_finale', title: 'The Master of Artillery [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Red Ridge railgun is finished. Your rig has been permanently upgraded with terrifying kinetic firepower and heavy reinforced armor.',
    options: [
      makeDirectOption('opt_railgun15_ending_dreadnought', 'Command the Highways as the Siege Dreadnought [ENDING 1: SIEGE DREADNOUGHT]',
        'Armed with the heavy dorsal mass-driver cannon and thick titanium frame reinforcements, your rig is an unstoppable fortress on continental roads.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { batteries: 4, chips: 2 },
          qualities: { 'Railgun Stage': 80, 'Street Cred': 30, 'Heat': -30 },
          stats: { grit: 1, edge: 1 },
          rig: { maxHull: 35, name: 'Iron Nomad - Siege Dreadnought' }
        }, { qualities: { 'Railgun Chosen Path': 1 } }),
      makeDirectOption('opt_railgun15_ending_freehold', 'Lead Freehold Convoys with Bastion Armor [ENDING 2: FREEHOLD ARTILLERY]',
        'Honored as the Savior of the Freehold, your rig is outfitted with heavy reclaimer armor plating and high-torque military engines.',
        {
          credits: 16000,
          hullIntegrity: 100,
          cargo: { batteries: 3, chips: 3 },
          qualities: { 'Railgun Stage': 80, 'Street Cred': 25 },
          stats: { grit: 1 },
          rig: { maxHull: 25, speedRating: 0.15, name: 'Iron Nomad - Freehold Artillery' }
        }, { qualities: { 'Railgun Chosen Path': 2 } }),
      makeDirectOption('opt_railgun15_ending_cartel', 'Rule the Shadow Roads with Outlaw Thunder [ENDING 3: OUTLAW THUNDER]',
        'Flush with syndicate gold and equipped with high-output contraband engines and reinforced armor, your rig is feared across all territories.',
        {
          credits: 22000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Railgun Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 15 },
          stats: { edge: 1, grit: 1 },
          rig: { speedRating: 0.20, maxHull: 20, name: 'Iron Nomad - Outlaw Thunder' }
        }, { qualities: { 'Railgun Chosen Path': 3 } }),
      makeDirectOption('opt_railgun15_farewell', 'Collect final veteran courier fee and depart into the sunset',
        'With the heavy gun behind you, you roll out toward new adventures.',
        {
          credits: 10000,
          qualities: { 'Railgun Stage': 80, 'Street Cred': 10 },
          stats: { grit: 1 },
          rig: { maxHull: 15 }
        })
    ]
  }
];

const compiledRailgun = compileStorylets(railgunData, 'Railgun Stage');
writeTsFile('src/data/railgunQuestStorylets.ts', 'RAILGUN_QUEST_STORYLETS', compiledRailgun);

// =========================================================================
// SAGA 3: THE GHOST HIGHWAY OF '76 (15 Storylets)
// Sub-orbital lidar mirage, phased-array navigation uplink, speed runner
// =========================================================================
const ghostwayData = [
  {
    stage: 1, id: 'story_ghostway_01_mirage_frequency', title: 'The Phantom Beacon of Interstate \'76', trigger: 'DOCK',
    text: 'While scanning emergency bands in the Mojave Wasteland, your audio deck intercepts a mathematical pulse on a sub-gigahertz military band. The coordinates point to "Interstate 76"—a legendary pre-collapse magnetic highway thought to have been vaporized in the wars, yet appearing on your long-range lidar as a faint electromagnetic mirage floating ten feet above the desert sand.',
    options: [
      makeRollOption('opt_ghostway01_tune_frequency', 'Tune your radio receiver to isolate the beacon\'s carrier wave [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You adjust your antenna array and filter ambient static.',
        'STRONG HIT: Crystal-clear signal! You download the military navigation transponder frequency and vector map.', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 6, 'Street Cred': 4 } },
        'WEAK HIT: You lock onto the signal bearing, though static fuzzes the margins.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: High-frequency feedback squeals through your cabin headset.', { hullIntegrity: -5, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway01_ask_elders', 'Ask grizzled Mojave truckers about the Ghostway legend [ROLL +COOL]', 'cool', 'Street Cred',
        'You buy a round of synthetic synth-beer at the depot bar and listen to old highway tales.',
        'STRONG HIT: Old-timers share secret waypoint codes and warning landmarks to avoid magnetic traps!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: The truckers confirm the highway exists, warning that it eats unshielded electronics.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: The bar crowd laughs off your questions as spacer ghost stories.', { qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway01_prep_electronics', 'Install copper-mesh Faraday shielding around your navigation terminal',
        'You shield your dashboard instruments from anomalous magnetic fields.',
        { hullIntegrity: 10, qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_ghostway_02_phased_radar_mod', title: 'The Phased Lidar Array', trigger: 'DOCK',
    text: 'To track the invisible magnetic highway, you meet a renegade avionics mechanic who presents an experimental phased-array lidar dish. "Mount this to your cab roof," she says. "It projects pulse-frequency ultraviolet lasers capable of illuminating electromagnetic mirages in real time."',
    options: [
      makeRollOption('opt_ghostway02_mount_dish', 'Weld and calibrate the phased lidar array on your roof rack [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You align the laser diodes with your windshield HUD.',
        'STRONG HIT: Flawless optical alignment! The HUD paints glowing green highway lanes directly onto the desert air!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The array works, though you have to tighten the mounting bolts against vibration.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: A diode burns out during calibration, requiring replacement fuses.', { credits: -100, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway02_negotiate_mod', 'Bargain for extra spare components and diagnostic optical cables [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You talk down the price and inspect her spare parts crates.',
        'STRONG HIT: Superb trade! She gives you high-speed fiber-optic lines and 2 neural processors!', { cargo: { chips: 2 }, qualities: { 'Ghostway Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You secure the necessary spare lasers at reasonable cost.', { credits: -150, qualities: { 'Ghostway Stage': 1 } },
        'MISS: She charges an exorbitant premium for specialized hardware.', { credits: -300, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway02_secure_brackets', 'Reinforce the roof mount with heavy steel angle-iron',
        'Solid structural welding ensures the dish won\'t shear off at 200 km/h.',
        { hullIntegrity: 15, qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_ghostway_03_first_mirage_gate', title: 'The Shimmering Horizon', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Out in the empty salt flat, your phased lidar suddenly blazes neon cyan. Ahead, hovering twelve inches above the cracked dirt, an ethereal highway of shimmering electromagnetic rails stretches into the distance. The air smells intensely of ozone.',
    options: [
      makeRollOption('opt_ghostway03_drive_on', 'Line up your tires with the glowing magnetic lanes and accelerate [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You center the steering wheel on the green wireframe projection and drop the throttle.',
        'STRONG HIT: Pure magical levitation! Rolling friction drops to near zero as magnetic fields lift your hauler into silent, gliding flight!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The hauler merges onto the field, though sudden magnetic torque yanks the steering wheel.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: You misjudge the entry ramp, bottoming out against the physical dirt ridge.', { hullIntegrity: -15, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway03_frequency_tuning', 'Fine-tune the hauler\'s magnetic alternator to match the lane frequency [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You dial in the resonance frequency on your dashboard deck.',
        'STRONG HIT: Perfect harmonic lock! The hauler recharges its own batteries directly from the highway field!', { cargo: { batteries: 2 }, qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The alternator syncs, stabilizing cabin power.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: High-voltage hum rattles your cabin speakers.', { hullIntegrity: -8, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway03_slow_merge', 'Creep onto the lane at 40 km/h and observe sensor telemetry',
        'A careful, methodical merge confirms the magnetic floor is stable.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_ghostway_04_electromagnetic_storm', title: 'The Ion Tempest', trigger: 'ROAD_EVENT',
    text: 'A ferocious ion storm rolls across the magnetic corridor. Sheets of violet lightning arc between the hovering lanes and your truck\'s exterior antennae. Your digital speedometer pins to 240 km/h as the storm magnetizes your wheels!',
    options: [
      makeRollOption('opt_ghostway04_ride_lightning', 'Grip the wheel and surf the electromagnetic surge at breakneck speed [ROLL +EDGE]', 'edge', 'Street Cred',
        'You lean forward, eyes wide, steering through arcs of violet lightning.',
        'STRONG HIT: Transcendent wasteland piloting! You ride the ion wave for 50 kilometers in minutes, leaving thunder in your wake!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You hold the lane through the storm, though your tires smell of scorched ozone.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } },
        'MISS: An arc of lightning blows your passenger headlight and rattles your teeth.', { hullIntegrity: -20, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway04_grounding_rod', 'Deploy the emergency copper grounding anchor to bleed off charge [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You lower the heavy copper skid plate onto the highway surface.',
        'STRONG HIT: Brilliant grounding! The electrical charge is channeled safely into the magnetic bedrock.', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The grounding skid sparks violently, but keeps cabin electronics safe.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: The grounding cable heats to melting point before detaching.', { hullIntegrity: -12, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway04_faraday_cage', 'Rely on the cabin\'s copper-mesh shielding and maintain steady throttle',
        'The Faraday shielding keeps you safe inside while lightning licks the glass.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_ghostway_05_ghost_convoy', title: 'The Autonomous Phantoms', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Through the shimmering mirage, shadowy apparitions appear: a convoy of pre-collapse automated military supply drones running on locked autopilot schedules from 2076! They cruise in tight diamond formation, unresponsive to civilian radio hailings.',
    options: [
      makeRollOption('opt_ghostway05_hack_military_drones', 'Transmit military command ciphers to slice into their lead drone [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You beam root clearance codes into their lead automated transceiver.',
        'STRONG HIT: Clearance accepted! The automated drones recognize your hauler as Convoy Commander and yield 3 crates of pristine chips!', { cargo: { chips: 3 }, qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The drones open their formation to let your hauler pass safely.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Automated defensive countermeasures blast electromagnetic noise into your receivers.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway05_slipstream_draft', 'Tuck your hauler into the aerodynamic slipstream behind the phantom convoy [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pull within three feet of the lead phantom hauler\'s bumper.',
        'STRONG HIT: Flawless drafting! Wind resistance drops to zero as you cruise at 180 km/h with zero fuel consumption!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You hold the draft for ten kilometers before breaking off.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: A sudden phantom lane shift nearly clips your front fender.', { hullIntegrity: -15, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway05_pass_wide', 'Signal lane change and pass the automated drone fleet with ample clearance',
        'You pull into the passing lane and leave the relics of the past behind.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_ghostway_06_fueling_the_matrix', title: 'The Sunken Power Substation', trigger: 'DOCK',
    text: 'The ghost highway signals flicker and dim. To maintain the magnetic lane projection, you must recharge a subterranean repeater station hidden in an abandoned salt dome.',
    options: [
      makeRollOption('opt_ghostway06_overcharge_repeater', 'Hook your truck generator to the underground station\'s input bus [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You rev the engine and channel maximum alternator output into the buried grid.',
        'STRONG HIT: The repeater roar to life with blinding blue light! The ghost highway brightens for two hundred kilometers ahead!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 6, 'Street Cred': 6 } },
        'WEAK HIT: The repeater powers up to baseline, stabilizing the lane.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Power feedback trips your alternator, requiring a fuse replacement.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway06_consume_battery', 'Install 1 Hydro-Battery from your hold directly into the station\'s backup slot [INVENTORY]',
        'You donate a high-yield battery to permanently power the repeater.',
        { cargo: { batteries: -1 }, hullIntegrity: 15, qualities: { 'Ghostway Stage': 1, 'Street Cred': 8 } },
        { cargo: { batteries: 1 } }),
      makeDirectOption('opt_ghostway06_rely_on_momentum', 'Preserve your own batteries and drive through the dimming lane on momentum',
        'You conserve resources and proceed under fading signals.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_ghostway_07_temporal_echo', title: 'The Chrono-Static Rift', trigger: 'ROAD_EVENT',
    text: 'At 210 km/h along the magnetic rails, time begins to smear. Old radio broadcasts from 2076 echo across your cab speakers; you see holographic apparitions of classic cars driving beside you like luminous memories.',
    options: [
      makeRollOption('opt_ghostway07_ground_reality', 'Anchor your mind and instruments on physical engine telemetry [ROLL +COOL]', 'cool', 'Street Cred',
        'You lock your eyes on the analog oil pressure gauge and steady your breathing.',
        'STRONG HIT: Unshakeable mental grit! The temporal static dissolves, leaving crystal-clear focus and road clarity.', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You shake off the vertigo and keep your hands steady on the wheel.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Disorientation causes you to swerve across lane markers.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway07_record_data', 'Record the pre-collapse radio broadcast data into your cyberdeck [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You open high-speed data capture buffers to record the anomalous signals.',
        'STRONG HIT: Invaluable historical data! You capture lost encrypted military routing tables and trade cipher keys!', { cargo: { chips: 2 }, qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You record partial data packets before the echo fades.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Static corrupts your data log file.', { qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway07_increase_speed', 'Punch the throttle and punch through the temporal anomaly',
        'Raw velocity carries you through the distortion field.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_ghostway_08_aegis_interceptor_chase', title: 'The Corporate Chasers', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis high-speed stealth interceptors spot your truck hovering on the phantom lane! Armed with EMP cannons and magnetic harpoons, they accelerate to cut you off from the exit node.',
    options: [
      makeRollOption('opt_ghostway08_phase_drift', 'Feint into a physical sand dune and let the magnetic lane whip you around them [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You pull a 180-degree drift along the curved magnetic rail.',
        'STRONG HIT: Spectacular physics manipulation! The interceptors overshoot on the sand, skidding into each other while you rocket ahead!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You outmaneuver the interceptors, though an EMP pulse grazes your rear bumper.', { hullIntegrity: -12, qualities: { 'Ghostway Stage': 1 } },
        'MISS: An EMP round clips your trailer, rebooting your dashboard displays.', { hullIntegrity: -22, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway08_hack_interceptors', 'Transmit false obstacle warnings into their forward collision sensors [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You spoof their lidar arrays with virtual brick walls.',
        'STRONG HIT: Automated emergency brakes lock on all three interceptors, leaving them spinning harmlessly in the dust!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Two interceptors brake hard, allowing you to pull away.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Their cyber-ICE deflects your signal, firing a warning rocket.', { hullIntegrity: -16, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway08_maximum_throttle', 'Open every throttle valve and let raw speed outrun their cruisers',
        'Straight-line acceleration on the friction-less lane pulls you out of their weapons range.',
        { hullIntegrity: -8, qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_ghostway_09_fractured_overpass', title: 'The Sky Leap of Black Chasm', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A physical gorge yawns 500 meters below where a massive concrete highway bridge collapsed sixty years ago. The magnetic rails continue unbroken through the open air like a glowing tightrope across the chasm!',
    options: [
      makeRollOption('opt_ghostway09_leap_of_faith', 'Trust the phased lidar and drive straight across the empty air [ROLL +COOL]', 'cool', 'Street Cred',
        'You stare into the clouds, lock your jaw, and accelerate into the open sky.',
        'STRONG HIT: Breathtaking glory! The invisible magnetic field catches your tires like solid steel, carrying your hauler effortlessly across the 500-meter drop!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: You glide across the chasm, your heart pounding as the air howls beneath you.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Sudden air turbulence drops the hauler six inches before the magnetic rails catch.', { hullIntegrity: -15, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway09_stabilize_magnetics', 'Overclock the roof array to widen the magnetic track width [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You pump maximum voltage into the phased array.',
        'STRONG HIT: The green wireframe lane expands into a four-lane luminous bridge! You cross with total safety.', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: Lane width widens enough to guarantee safe transit.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Overload blows a capacitor on the roof rack.', { hullIntegrity: -12, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway09_focus_ahead', 'Grip the wheel and refuse to look down into the void',
        'Unwavering resolve carries you across the chasm.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_ghostway_10_the_crossroads', title: 'The Map of the Impossible [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the abandoned observatory atop Mount Charleston, your cartographic deck compiles the complete digital topology of Interstate 76. Three factions seek the key to this continent-spanning secret highway.',
    options: [
      makeDirectOption('opt_ghostway10_choose_phantom', 'Path 1: Keep the Secret Cartography for Yourself [HIGHWAY PHANTOM]',
        'You choose independence and unmatched speed. The ghost highway map will remain your personal secret, allowing your rig to bypass every traffic checkpoint on the continent.',
        { qualities: { 'Ghostway Stage': 1, 'Ghostway Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_ghostway10_choose_cartel', 'Path 2: Sell Exclusive Corridors to the Gridlock Smugglers [MIRAGE RUNNER]',
        'You choose immense underworld wealth and syndicate status. Gridlock will establish unpoliced contraband super-highways and grant you sovereign status.',
        { qualities: { 'Ghostway Stage': 1, 'Ghostway Chosen Path': 2, 'Contraband Mastery': 15 } }),
      makeDirectOption('opt_ghostway10_choose_mesh', 'Path 3: Open-Source the Highway Data to the Neuralfront Mesh [CYBER CARTOGRAPHER]',
        'You choose the liberation of all wasteland travelers. The map will be broadcast freely to every independent trucker, shattering corporate toll monopolies.',
        { qualities: { 'Ghostway Stage': 1, 'Ghostway Chosen Path': 3, 'Tech Literacy': 15 } })
    ]
  },
  {
    stage: 11, id: 'story_ghostway_11_sensor_overload', title: 'The Thermal Blaze on the Roof', trigger: 'ROAD_EVENT',
    text: 'Processing continuous terabytes of sub-orbital lidar data has pushed the roof dish to white-hot thermal thresholds. Solder is melting on the laser emitters; an automated cooling shutdown is ten seconds away.',
    options: [
      makeRollOption('opt_ghostway11_liquid_coolant', 'Splice your truck\'s cabin freon loops into the roof dish cooler [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You route chilling refrigerant lines up through the roof grommet.',
        'STRONG HIT: Flawless cooling mod! Temperatures drop instantly, enabling 100% data throughput without thermal limits!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The cooling holds the dish operational, though cabin air conditioning is sacrificed.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Freon escapes in a hissing cloud, burning your knuckles before you seal it.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway11_heatsink_fins', 'Weld copper radiator fins onto the emitter housing [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You quickly weld sacrificial copper heat-sink fins to dissipate the thermal load.',
        'STRONG HIT: High-efficiency airflow cooling! The slipstream pulls away heat like a wind tunnel.', { hullIntegrity: 15, qualities: { 'Ghostway Stage': 1 } },
        'WEAK HIT: The fins dissipate enough heat to prevent shutdown.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: A weld snaps on a bump, leaving the fin dangling by a wire.', { hullIntegrity: -8, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway11_cycle_emitters', 'Cycle the laser emitters in staggered pulses to reduce heat output',
        'Pulsing the array manages heat at the expense of slight display flicker.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 12, id: 'story_ghostway_12_interceptor_dogfight', title: 'The Aegis Gunship Intercept', trigger: 'COMBAT_ENCOUNTER',
    text: 'Aegis tactical command scrambles a supersonic interceptor jet to destroy the ghost highway terminal before you can broadcast the coordinates. Missiles streak across the salt flats!',
    options: [
      makeRollOption('opt_ghostway12_phase_evasion', 'Slalom along the magnetic rail to throw off radar missile locks [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You weave violently between magnetic harmonic nodes.',
        'STRONG HIT: The supersonic missiles lose lock and detonate against empty sand dunes behind you!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You dodge the direct impacts, though shockwaves rattle your chassis.', { hullIntegrity: -12, qualities: { 'Ghostway Stage': 1 } },
        'MISS: A proximity missile detonates near your trailer, shredding a mudguard.', { hullIntegrity: -24, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway12_hack_jet_avionics', 'Transmit a magnetic distortion pulse into the jet\'s radar radome [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You fire the phased array directly at the approaching jet cockpit.',
        'STRONG HIT: Sensor blindness! The jet\'s heads-up display floods with green mirage feedback, forcing the pilot to pull up and disengage!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: The jet wavers and breaks off its attack run.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: Electronic countermeasures ping back into your radio, popping a speaker.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway12_deploy_chaff', 'Launch all remaining flare and chaff canisters into the jet\'s vector',
        'A blinding cloud of burning magnesium foils the jet\'s targeting run.',
        { credits: -150, qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_ghostway_13_sonic_breach', title: 'The Velocity Barrier', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The final leg of Interstate 76 opens into a straight, glass-smooth vacuum corridor across the Nevada desert. With zero surface friction, your engine can breach the 250 km/h sound barrier!',
    options: [
      makeRollOption('opt_ghostway13_break_sound_barrier', 'Open the master throttle and punch through the supersonic barrier [ROLL +EDGE]', 'edge', 'Street Cred',
        'You floor the pedal and hold the steering dead-center as the speedometer climbs past 260 km/h.',
        'STRONG HIT: Sonic boom across the wasteland! You shatter every land-speed convoy record in history, disappearing into legend!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 18 } },
        'WEAK HIT: You breach 230 km/h safely, emerging at the terminus with engine humming.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: High-speed vibration shakes loose a roof spotlight before you slow down.', { hullIntegrity: -15, qualities: { 'Ghostway Stage': 1 } }),
      makeRollOption('opt_ghostway13_stabilize_tail', 'Deploy trailer aerodynamic stabilizer fins to prevent yaw [ROLL +GRIT]', 'grit', 'Tech Literacy',
        'You deploy pneumatic winglets to clamp the trailer firmly to the air stream.',
        'STRONG HIT: Rock-solid aerodynamic stability! The hauler rides like a rail-guided missile.', { hullIntegrity: 20, qualities: { 'Ghostway Stage': 1 } },
        'WEAK HIT: The stabilizers hold the line smoothly.', { qualities: { 'Ghostway Stage': 1 } },
        'MISS: A stabilizer fin rattles violently under aerodynamic pressure.', { hullIntegrity: -10, qualities: { 'Ghostway Stage': 1 } }),
      makeDirectOption('opt_ghostway13_cruise_control', 'Set cruise control to a conservative 180 km/h and enjoy the smooth flight',
        'A smooth, dignified glide across the desert brings you safely to the terminus.',
        { qualities: { 'Ghostway Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_ghostway_14_mirage_climax', title: 'The Convergence of the Grid [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have reached the primary Pacific terminus of Interstate 76! The destination beacon glows in brilliant emerald light as you finalize your chosen legacy.',
    options: [
      makeRollOption('opt_ghostway14_lock_phantom_route', 'Encrypt the complete navigation matrix into your private dashboard [PHANTOM PATH] [ROLL +EDGE]', 'edge', 'Street Cred',
        'You burn the route into your own neural cyberdeck, crowned the Phantom King of the American Highway.',
        'STRONG HIT: You are untouchable! No corporate toll gate or police cruiser will ever catch your rig again!', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 25 } },
        'WEAK HIT: The route is permanently saved to your navigational computer.', { qualities: { 'Ghostway Stage': 1, 'Street Cred': 10 } },
        'MISS: Route coordinates save safely with minor compression artifacts.', { qualities: { 'Ghostway Stage': 1 } },
        { qualities: { 'Ghostway Chosen Path': 1 } }),
      makeRollOption('opt_ghostway14_deliver_cartel', 'Transfer the exclusive access keys to the Gridlock Cartel Lords [CARTEL PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You hand over the encrypted transponder inside the cartel\'s subterranean fortress.',
        'STRONG HIT: Sovereign fortune! Billions in bearer bonds and elite contraband runner equipment are yours!', { credits: 10000, qualities: { 'Ghostway Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: Cartel honors the deal and transfers funds.', { credits: 5000, qualities: { 'Ghostway Stage': 1 } },
        'MISS: Tense debriefing concludes with payment clearance.', { qualities: { 'Ghostway Stage': 1 } },
        { qualities: { 'Ghostway Chosen Path': 2 } }),
      makeRollOption('opt_ghostway14_broadcast_mesh', 'Broadcast the open-source map to every trucker on the Neuralfront Mesh [MESH PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You open the satellite uplinks and broadcast the coordinates freely to millions of wasteland drivers.',
        'STRONG HIT: The great highway liberation! Thousands of independent haulers celebrate your name across the continent!', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 25, 'Street Cred': 20 } },
        'WEAK HIT: The coordinates propagate across the entire rebel mesh.', { qualities: { 'Ghostway Stage': 1, 'Tech Literacy': 12 } },
        'MISS: Corporate jamming scrubs some frequencies, but the core map leaks.', { qualities: { 'Ghostway Stage': 1 } },
        { qualities: { 'Ghostway Chosen Path': 3 } })
    ]
  },
  {
    stage: 15, id: 'story_ghostway_15_finale', title: 'The Highway Phantom [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Ghost Highway of \'76 is concluded. Your rig has been permanently modified with revolutionary phased-array lidar and magnetic levitation running gear.',
    options: [
      makeDirectOption('opt_ghostway15_ending_phantom', 'Rule Continental Corridors as the Highway Phantom [ENDING 1: HIGHWAY PHANTOM]',
        'Equipped with the Phased-Array Lidar Navigation Uplink, your hauler glides with +30% permanent speed rating and unmatched evasive agility.',
        {
          credits: 15000,
          hullIntegrity: 100,
          cargo: { chips: 4, batteries: 2 },
          qualities: { 'Ghostway Stage': 80, 'Street Cred': 30, 'Heat': -50 },
          stats: { edge: 1 },
          rig: { speedRating: 0.30, name: 'Iron Nomad - Highway Phantom' }
        }, { qualities: { 'Ghostway Chosen Path': 1 } }),
      makeDirectOption('opt_ghostway15_ending_cartel', 'Command Underworld Pipelines as the Mirage Runner [ENDING 2: MIRAGE RUNNER]',
        'Awarded Syndicate sovereign status, your hauler features magnetic cargo dampeners and high-speed contraband turbines.',
        {
          credits: 20000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Ghostway Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 20 },
          stats: { edge: 1, cool: 1 },
          rig: { speedRating: 0.25, maxCargoWeight: 5, name: 'Iron Nomad - Mirage Runner' }
        }, { qualities: { 'Ghostway Chosen Path': 2 } }),
      makeDirectOption('opt_ghostway15_ending_mesh', 'Pioneer the Digital Frontier as the Cyber Cartographer [ENDING 3: CYBER CARTOGRAPHER]',
        'Celebrated as the liberator of the highways, your rig is outfitted with cutting-edge rebel neural interfaces and reinforced armor.',
        {
          credits: 12000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, chips: 3 },
          qualities: { 'Ghostway Stage': 80, 'Tech Literacy': 30, 'Street Cred': 20 },
          stats: { edge: 1, cyber: 1 },
          rig: { speedRating: 0.22, maxHull: 20, name: 'Iron Nomad - Cyber Cartographer' }
        }, { qualities: { 'Ghostway Chosen Path': 3 } }),
      makeDirectOption('opt_ghostway15_farewell', 'Collect final courier bonus and roll out under the wide desert sky',
        'With the phantom highway mapped, you merge back onto open asphalt.',
        {
          credits: 10000,
          qualities: { 'Ghostway Stage': 80, 'Street Cred': 10 },
          stats: { edge: 1 },
          rig: { speedRating: 0.15 }
        })
    ]
  }
];

const compiledGhostway = compileStorylets(ghostwayData, 'Ghostway Stage');
writeTsFile('src/data/ghostwayQuestStorylets.ts', 'GHOSTWAY_QUEST_STORYLETS', compiledGhostway);
