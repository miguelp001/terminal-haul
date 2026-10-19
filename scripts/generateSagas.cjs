// Generator script for Icarus and Plague
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
      triggerType: item.trigger || 'DOCK',
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

// ==========================================
// 4. ICARUS QUEST STORYLETS (20 storylets)
// ==========================================
const icarusData = [
  {
    id: 'story_icarus_01_cable_snap', title: 'The Sky-Anchor Severed', trigger: 'DOCK',
    text: 'While fueling at an equatorial solar depot, a streak of sonic thunder splits the stratosphere. High above, the diamond-carbon tether of the Olympus Orbital Space Elevator snaps! Three descending sub-orbital cargo capsules carrying raw antimatter isotopes tumble into low atmospheric re-entry along an 800-kilometer trajectory.',
    options: [
      makeRollOption('opt_icarus01_triangulate_trajectory', 'Triangulate the orbital reentry vectors [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You hook your cyberdeck into the depot tracking radar to plot capsule touchdown coordinates.',
        'STRONG HIT: Flawless orbital trajectory calculation! You calculate the precise impact crater coordinates before mercenary teams react.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 3, 'Street Cred': 3 } },
        'WEAK HIT: Trajectory plotted, though sensor noise obscures the third capsule landing site.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 1 } },
        'MISS: Atmospheric ionization shorts out your receiver dish, delaying your intercept calculation.', { hullIntegrity: -8, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus01_rapid_dispatch', 'Prep the hauler turbines and burn rubber toward the salt flats [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You dump fuel into the combustion pre-heaters and drop into gear before sirens sound.',
        'STRONG HIT: Blistering reaction time! You exit the terminal gates ahead of every competitor convoy.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 4 } },
        'WEAK HIT: You clear the gates cleanly, though cold tires struggle for immediate grip.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Stalling out at the security gate costs precious minutes as rivals overtake you.', { qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus01_renegade_engineer', 'Welcome aboard Dr. Lyra Vance, the rogue solar elevator architect',
        'She leaps into your cab with field-containment gear: "Hauler, keep those antimatter cells cool or we vaporize three sectors."',
        { qualities: { 'Icarus Stage': 1, 'Street Cred': 5, 'Icarus Trust': 15 } })
    ]
  },
  {
    stage: 2, id: 'story_icarus_02_falling_stars', title: 'The Sonic Reentry Trail', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Streaks of incandescent plasma tear across the night sky as the first capsule impacts the salt basin ten miles ahead. The shockwave rattles your rig cabin, kicking up a colossal wall of glowing alkali dust.',
    options: [
      makeRollOption('opt_icarus02_drift_shockwave', 'Drift the 35-ton hauler into the pressure shockwave [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You feather the brakes and ride the seismic shockwave like a mechanical surfer.',
        'STRONG HIT: Pure highway poise! You glide through the dust wave at 110 km/h without losing tracking.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 4 } },
        'WEAK HIT: The shockwave slams your trailer, cracking side windshield laminate.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1 } },
        'MISS: The blast violently pitches the hauler onto two wheels before crashing back down.', { hullIntegrity: -20, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus02_reinforce_shields', 'Engage auxiliary magnetic grounding clamps [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You drop hydraulic stabilizers to anchor against the supersonic wind.',
        'STRONG HIT: Solid bedrock anchor! The atmospheric blast washes harmlessly over your sloped cab.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 4 } },
        'WEAK HIT: Anchors hold, though flying debris dents your front bumper.', { hullIntegrity: -8, qualities: { 'Icarus Stage': 1 } },
        'MISS: An anchor cable tears off under tension, rattling against the undercarriage.', { hullIntegrity: -15, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus02_track_beacon', 'Follow Lyra’s homing beacon directly toward the smoking crater',
        'You lock onto the capsule’s emergency transponder pulse, cutting straight across the salt.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Trust': 10 } })
    ]
  },
  {
    stage: 3, id: 'story_icarus_03_first_crater_scramble', title: 'The First Crater Scramble', trigger: 'TRANSIT_ENCOUNTER',
    text: 'At the center of a glass-fused impact crater sits the first titanium cargo capsule, venting glowing blue Cherenkov radiation. A rival mercenary gun-truck arrives on the opposite ridge, aiming heavy machine guns.',
    options: [
      makeRollOption('opt_icarus03_speed_winch', 'Drive straight down the crater and hook the heavy winch [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You slide the hauler down the steep 45-degree glass slope, winching the capsule in seconds.',
        'STRONG HIT: Spectacular recovery! You haul the glowing canister into your hold before mercenaries can zero their sights.', { cargo: { batteries: 2 }, qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: Capsule loaded, though enemy bullets spark off your rear tailgate.', { cargo: { batteries: 1 }, hullIntegrity: -10, qualities: { 'Icarus Stage': 1 } },
        'MISS: The winch slips on slick glass, delaying recovery under heavy enemy fire.', { hullIntegrity: -22, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus03_hack_mercs', 'Inject a malware feedback pulse into their gun-truck turret [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You target their automated turret servo array with an electromagnetic glitch.',
        'STRONG HIT: Their turret spins wildly out of control, firing into the empty sky!', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 3, 'Street Cred': 4 } },
        'WEAK HIT: Turret jammed, giving you time to claim the prize.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 1 } },
        'MISS: Their firewall trace fires an anti-materiel round into your engine cowl.', { hullIntegrity: -18, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus03_ram_ridge', 'Charge the mercenary truck and push it down the far ravine [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You drop the heavy plow and ram their technical broadside.',
        'STRONG HIT: Total demolition! The mercenary truck tumbles down the ravine into twisted scrap.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You force them off the ridge, taking minor fender damage.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } },
        'MISS: The collision rattles your axle tie-rods violently.', { hullIntegrity: -20, qualities: { 'Icarus Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_icarus_04_plasma_cell_siphon', title: 'The Magnetic Flux Siphon', trigger: 'DOCK',
    text: 'At a roadside maintenance bay, Lyra inspects the recovered pod. "The magnetic containment field is decaying. We need to siphon the surplus antimatter flux into your hauler’s powertrain before the core destabilizes."',
    options: [
      makeRollOption('opt_icarus04_flux_shunt', 'Splice the plasma conduit directly into the engine turbine [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You solder superconducting leads between the capsule and your hauler’s turbochargers.',
        'STRONG HIT: The engine breathes pure antimatter! Raw power hums through the chassis with zero radiation leakage.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 4, 'Street Cred': 4 } },
        'WEAK HIT: Conduit spliced, though high magnetic fields scramble your cabin compass.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 1 } },
        'MISS: An inductive arc scorches the battery bank, blowing out secondary lights.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1, 'Glitch Rating': 1 } }),
      makeRollOption('opt_icarus04_manual_cool', 'Manually operate the liquid nitrogen injection pumps [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You pump cryogenic fluid into the core casing by hand to stabilize temperatures.',
        'STRONG HIT: Sub-zero perfection! The temperature locks at minus eighty degrees.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 4 } },
        'WEAK HIT: Core stabilized, though freezing spray numbs your fingers.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: A frozen valve cracks under pressure, releasing freezing mist across the floor.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus04_recharge_battery', 'Channel excess plasma to fully recharge all rig battery cells',
        'You absorb the excess energy, maxing out your electrical reserves for the interstate sprint.',
        { hullIntegrity: 15, qualities: { 'Icarus Stage': 1, 'Icarus Trust': 15 } })
    ]
  },
  {
    stage: 5, id: 'story_icarus_05_mercenary_interception', title: 'The Black Sun Interceptors [BRANCH 1]', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A squadron of high-speed stealth interceptor cars from the Black Sun Syndicate swarms the highway. Their leader broadcasts: "Hand over the antimatter capsule, hauler, or we turn your rig into a radioactive crater."',
    options: [
      makeRollOption('opt_icarus05_slalom_evasion', 'Slalom through traffic at 150 km/h [BRANCH 1A: SPEED] [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You thread your massive hauler through commercial traffic lanes with razor-sharp reflexes.',
        'STRONG HIT: Masterclass highway flying! The interceptors spin out trying to match your high-speed lane cuts.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Speed': 1, 'Street Cred': 6 } },
        'WEAK HIT: You break their pursuit, though a scraping guardrail takes off your side mirror.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1, 'Icarus Branch Speed': 1 } },
        'MISS: A clipped civilian tanker forces an emergency off-road recovery.', { hullIntegrity: -20, qualities: { 'Icarus Stage': 1, 'Icarus Branch Speed': 1 } }),
      makeRollOption('opt_icarus05_plasma_pulse', 'Vent a pulse of raw plasma into your exhaust stacks [BRANCH 1B: FIRE] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You ignite a ten-foot plume of superheated antimatter exhaust directly into their windshields.',
        'STRONG HIT: A roaring sheet of blue fire blindfolds their lead car, sending it rolling across the median!', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Fire': 1, 'Tech Literacy': 3, 'Street Cred': 5 } },
        'WEAK HIT: The fire plume repels them, though heat blisters your trailer doors.', { hullIntegrity: -8, qualities: { 'Icarus Stage': 1, 'Icarus Branch Fire': 1 } },
        'MISS: Exhaust backfire blows off an exhaust tip, causing deafening engine roar.', { hullIntegrity: -14, qualities: { 'Icarus Stage': 1, 'Icarus Branch Fire': 1 } }),
      makeRollOption('opt_icarus05_iron_ram', 'Drop the heavy cowcatcher and side-swipe the pursuit cruisers [BRANCH 1C: FORCE] [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You slam the steering wheel sideways, crushing the interceptor against the concrete divider.',
        'STRONG HIT: Crushing kinetic victory! The pursuit car is flattened against the wall as you power ahead.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Force': 1, 'Street Cred': 6 } },
        'WEAK HIT: You crush their car, taking minor paint and wheel scratches.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1, 'Icarus Branch Force': 1 } },
        'MISS: The impact shakes your alignment, pulling your steering to the left.', { hullIntegrity: -22, qualities: { 'Icarus Stage': 1, 'Icarus Branch Force': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_icarus_06_antimatter_containment', title: 'The Magnetic Flux Collapse', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Alarm sirens scream in your cab! The capsule magnetic field is collapsing due to vibration. A countdown flashes on Lyra’s tablet: "CONTAINMENT BREACH IN 60 SECONDS."',
    options: [
      makeRollOption('opt_icarus06_overclock_batteries', 'Channel every volt of rig battery power into the field coils [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You dump auxiliary battery reserves directly into the containment electromagnet.',
        'STRONG HIT: The magnetic field snaps back into diamond-solid stability! Containment holds at 100%.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 3, 'Street Cred': 4 } },
        'WEAK HIT: Containment restored, but your rig batteries are drained to critical reserves.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: A surge melts a power cable, requiring manual emergency clamps under blinding spark fire.', { hullIntegrity: -15, qualities: { 'Icarus Stage': 1, 'Glitch Rating': 1 } }),
      makeRollOption('opt_icarus06_manual_shunt', 'Manually torque the mechanical containment locking pins [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You lean out the cab with an iron wrench, physically cinching the magnetic clamp collars.',
        'STRONG HIT: Pure brute force saves the day! The mechanical collars lock tight, holding the plasma inert.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: Collars locked, though intense magnetic pull wrenches your wrist.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Magnetic back-torque throws the wrench into the fan blades, shearing two fins.', { hullIntegrity: -18, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus06_sacrificial_ground', 'Ground the magnetic field into your hauler chassis frame',
        'You absorb the electrical shock into the steel frame, preventing catastrophic thermonuclear detonation.',
        { hullIntegrity: -10, qualities: { 'Icarus Stage': 1, 'Icarus Trust': 20 } })
    ]
  },
  {
    stage: 7, id: 'story_icarus_07_orbital_defense_laser', title: 'The Eye of Olympus', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A surviving automated orbital defense satellite re-acquires the fallen capsule. High in the stratosphere, a laser targeting mirror glows crimson, charging a 50-megawatt orbital beam.',
    options: [
      makeRollOption('opt_icarus07_mirror_chaff', 'Deploy an aerosolized titanium mirror-cloud [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You launch reflective chaff canisters into the slipstream to refract the orbital beam.',
        'STRONG HIT: The orbital laser disperses across a mile of sky in harmless rainbow auroras!', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 3, 'Street Cred': 5 } },
        'WEAK HIT: The beam is diffused, though superheated air blisters your trailer roof.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } },
        'MISS: A partial laser strike slices through your left exhaust stack, melting steel into slag.', { hullIntegrity: -25, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus07_canyon_shadow', 'Dive into a narrow canyon shadow to break optical tracking [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You whip the hauler into a deep slot canyon before the beam fires.',
        'STRONG HIT: Flawless evasion! The orbital strike blasts the canyon rim 200 feet above you.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 4 } },
        'WEAK HIT: You reach the canyon, though falling rock fragments pelt your hood.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1 } },
        'MISS: A falling boulder lands across your tailgate, damaging your suspension.', { hullIntegrity: -22, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus07_smoke_screen', 'Deploy emergency sulfur thermal smoke pots behind your trailer',
        'You cloak the highway in impenetrable white smoke, breaking the satellite optical lock.',
        { qualities: { 'Icarus Stage': 1, 'Heat': -10 } })
    ]
  },
  {
    stage: 8, id: 'story_icarus_08_salt_flat_sonic_boom', title: 'The Sonic Speed Run [BRANCH 2]', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The second capsule has landed in the middle of the Great Salt Flats. An 80-mile expanse of mirror-flat salt stretches ahead. A mercenary hover-skiff is racing toward the impact site from the west.',
    options: [
      makeRollOption('opt_icarus08_antimatter_overdrive', 'Inject antimatter flux into the fuel injection rails [BRANCH 2A: NITRO] [ROLL +EDGE]', 'edge', 'Tech Literacy',
        'You open the experimental bypass valve, flooding your diesel cylinders with plasma.',
        'STRONG HIT: Mach 0.2 highway sprint! The hauler bursts through the speed of sound, leaving the hover-skiff miles behind!', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Nitro': 1, 'Street Cred': 8 } },
        'WEAK HIT: High-speed run succeeds, though manifold temperatures glow cherry-red.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1, 'Icarus Branch Nitro': 1 } },
        'MISS: Severe thermal pinging damages a cylinder head before you reach the capsule.', { hullIntegrity: -24, qualities: { 'Icarus Stage': 1, 'Icarus Branch Nitro': 1 } }),
      makeRollOption('opt_icarus08_heavy_ram_skiff', 'Ram the hover-skiff as it approaches the crater [BRANCH 2B: RAM] [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You intercept their trajectory, aiming 35 tons of steel directly at their lift fans.',
        'STRONG HIT: Obliterating impact! The hover-skiff disintegrates in a shower of composite blades and salt.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1, 'Street Cred': 7 } },
        'WEAK HIT: You disable their lift fan, though flying fan blades scratch your doors.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1 } },
        'MISS: Their skiff maneuvers around you, strafing your cab with machine guns.', { hullIntegrity: -22, qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1 } }),
      makeRollOption('opt_icarus08_emp_mines', 'Drop magnetic EMP mines along the salt tracks [BRANCH 2C: TRAPS] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You roll magnetized EMP canisters off the tailgate directly into their path.',
        'STRONG HIT: A direct detonation fries the hover-skiff electronics, leaving them stranded on the salt!', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Traps': 1, 'Tech Literacy': 3 } },
        'WEAK HIT: The blast slows their advance, securing your lead to the crater.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Traps': 1 } },
        'MISS: The mine detonates too close to your rear bumper, rattling the trailer.', { hullIntegrity: -14, qualities: { 'Icarus Stage': 1, 'Icarus Branch Traps': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_icarus_09_kinetic_strike_evasion', title: 'Rods from God', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A second automated space platform fires tungsten telephone-pole kinetic penetrators from low orbit. Sonic booms crack the sky as telephone poles of solid tungsten slam into the earth at Mach 6.',
    options: [
      makeRollOption('opt_icarus09_read_seismic', 'Read the seismic pre-shocks to anticipate crater locations [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You hook ground seismic sensors into your telemetry deck to detect incoming shockwaves.',
        'STRONG HIT: You steer around impact zones before the rods even strike earth! True precognitive driving.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 4, 'Street Cred': 6 } },
        'WEAK HIT: You evade direct hits, though concussive dust storms batter your windows.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } },
        'MISS: A nearby blast launches your trailer into the air, bending a leaf spring.', { hullIntegrity: -26, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus09_speed_burst', 'Keep the accelerator pinned to outrun the strike arc [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You keep the pedal flat to the firewall, outrunning the trajectory footprint.',
        'STRONG HIT: Blazing velocity! You emerge from the smoke cloud completely untouched.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You clear the zone, but extreme engine stress causes high coolant temps.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Shrapnel from a crater explosion punctures your secondary fuel line.', { hullIntegrity: -20, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus09_bunker_tunnel', 'Duck into an abandoned highway tunnel until the orbital platform passes',
        'You hide beneath 200 feet of mountain granite until the satellite moves out of orbital position.',
        { qualities: { 'Icarus Stage': 1, 'Heat': -15 } })
    ]
  },
  {
    stage: 10, id: 'story_icarus_10_the_second_capsule', title: 'The Antimatter Dilemma [BRANCH 3]', trigger: 'DOCK',
    text: 'With two capsules secured, Lyra unseals the secondary containment vessel. Inside rests 500 grams of pure antimatter—enough to power an entire free-grid civilization or fetch twenty million credits on the corporate black market.',
    options: [
      makeRollOption('opt_icarus10_pledge_freegrid', 'Pledge the antimatter to create an open-source solar power utopia [BRANCH 3A: UTOPIA] [ROLL +COOL]', 'cool', 'Street Cred',
        'You speak of liberating the wasteland towns from corporate energy slavery forever.',
        'STRONG HIT [UTOPIA CHARTERED]: Lyra wept with joy. "We will build a world where power is as free as the air."', { qualities: { 'Icarus Stage': 1, 'Icarus Stance Utopia': 1, 'Street Cred': 10, 'Icarus Trust': 30 } },
        'WEAK HIT: The free-grid plan is adopted, though distribution logistics remain daunting.', { qualities: { 'Icarus Stage': 1, 'Icarus Stance Utopia': 1, 'Icarus Trust': 15 } },
        'MISS: Cynicism clouds the room, but the covenant holds.', { qualities: { 'Icarus Stage': 1, 'Icarus Stance Utopia': 1 } }),
      makeRollOption('opt_icarus10_corporate_auction', 'Broker an exclusive multi-million auction with Solaris Energy [BRANCH 3B: CORPORATE] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You contact executive vice-presidents, demanding sovereign immunity and billions in escrow.',
        'STRONG HIT [CORPORATE WEALTH]: Solaris guarantees a 5,000 Credit advance and executive clearance permits!', { credits: 5000, qualities: { 'Icarus Stage': 1, 'Icarus Stance Corporate': 1, 'Enclave Permits': 2 } },
        'WEAK HIT: Solaris accepts the preliminary terms.', { credits: 2000, qualities: { 'Icarus Stage': 1, 'Icarus Stance Corporate': 1 } },
        'MISS: Corporate negotiators attempt to lowball the offer.', { qualities: { 'Icarus Stage': 1, 'Icarus Stance Corporate': 1 } }),
      makeDirectOption('opt_icarus10_engine_infusion', 'Infuse the antimatter directly into the Iron Nomad’s powertrain [BRANCH 3C: ENGINE]',
        'You channel the celestial fire into your own rig. The Iron Nomad becomes an immortal star-chaser.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Stance Engine': 1, 'Street Cred': 12 } })
    ]
  },
  {
    stage: 11, id: 'story_icarus_11_thermal_venting_dilemma', title: 'The Frontier Town Dilemma', trigger: 'DOCK',
    text: 'While passing through a dusty frontier town, the capsule’s thermal relief valve sticks. Lyra is frantic: "We must vent superheated plasma exhaust immediately or the core breaches! But if we vent here, the fallout will poison the town water supply."',
    options: [
      makeRollOption('opt_icarus11_contain_chassis', 'Absorb the thermal vent into your rig’s own radiator blocks [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You sacrifice your own engine health to protect the sleeping frontier town.',
        'STRONG HIT: Hero of the road! Your rig absorbs the thermal shock without harming a single civilian.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1, 'Street Cred': 10, 'Icarus Trust': 25 } },
        'WEAK HIT: The town is spared, though severe engine overheating warps your exhaust manifold.', { hullIntegrity: -20, qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'MISS: The radiator cracks under the blast, venting coolant in steam clouds.', { hullIntegrity: -30, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus11_high_speed_vent', 'Rocket out of town limits at 140 km/h before venting in the desert [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You floor the throttle, clearing the municipal boundary just as the release valve blows.',
        'STRONG HIT: Split-second triumph! You vent harmlessly into the empty desert dunes.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You clear the town, though the violent thermal discharge scorches your rear tires.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } },
        'MISS: You vent on the edge of the town irrigation canal, causing minor civil panic.', { qualities: { 'Icarus Stage': 1, 'Heat': 15 } }),
      makeDirectOption('opt_icarus11_vent_abandoned_mine', 'Steer into an abandoned mine shaft to vent deep underground',
        'You dump the radioactive heat deep into the abandoned rock shafts.',
        { qualities: { 'Icarus Stage': 1, 'Heat': -10 } })
    ]
  },
  {
    stage: 12, id: 'story_icarus_12_hyperflux_assembly', title: 'The Hyper-Flux Turbine Assembly', trigger: 'DOCK',
    text: 'At an underground aerospace hangar, Lyra begins retrofitting your hauler’s engine with components from the Olympus space elevator winch: a Hyper-Flux Capacitor Turbine capable of unlocking permanent superluminal highway velocity.',
    options: [
      makeRollOption('opt_icarus12_precision_machine', 'Machine the titanium rotor blades with aerospace tolerances [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You operate the heavy industrial lathe, turning solid titanium blocks into balanced turbine fans.',
        'STRONG HIT: Masterpiece of aerospace engineering! The turbine spins with zero vibration at 40,000 RPM.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: Blades machined, though slight surface roughness produces an eerie turbine whistle.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: A broken cutting tool ruins a titanium billet, delaying assembly.', { hullIntegrity: -10, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus12_program_flux_ecu', 'Program the quantum fuel injection controller [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You write real-time plasma injection curves to prevent engine backfire.',
        'STRONG HIT: Flawless programming! The dashboard displays a continuous 25% boost in effective highway speed.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 4, 'Street Cred': 5 } },
        'WEAK HIT: Controller programmed, though instrument dials flicker under boost.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 2 } },
        'MISS: A timing bug causes violent engine misfires during test revs.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1, 'Glitch Rating': 1 } }),
      makeDirectOption('opt_icarus12_bolt_cryo_sleeves', 'Wrap the turbine casing in cryogenic nitrogen thermal sleeves',
        'You insulate the turbine housing, ensuring the engine bay remains cool under maximum boost.',
        { hullIntegrity: 10, qualities: { 'Icarus Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_icarus_13_space_mercenary_dreadnought', title: 'The Dreadnought in the Dust [BRANCH 4]', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The third capsule has landed at the base of an open-pit copper mine. Blocking the entrance is the Black Sun Syndicate’s flagship: an armored tracked siege crawler with twin autocannons.',
    options: [
      makeRollOption('opt_icarus13_hyperflux_dash', 'Engage the Hyper-Flux Turbine to blast past their gun arcs [BRANCH 4A: SPEED] [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You punch the master turbine booster, rocketing past their cannon traverse faster than they can aim.',
        'STRONG HIT: Sonic blur! You blow past their guns, leaving the siege crawler crew coughing in your dust.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Fast': 1, 'Street Cred': 8 } },
        'WEAK HIT: You break through, though autocannon tracer fire tears off your mudflaps.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1, 'Icarus Branch Fast': 1 } },
        'MISS: Autocannon shells riddle your trailer skin before you clear their fire cone.', { hullIntegrity: -25, qualities: { 'Icarus Stage': 1, 'Icarus Branch Fast': 1 } }),
      makeRollOption('opt_icarus13_antimatter_emp_blast', 'Vent an antimatter pulse to fry the crawler’s power grid [BRANCH 4B: EMP] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You discharge a controlled burst of plasma into their communication dish.',
        'STRONG HIT: Catastrophic electrical blackout! The siege crawler’s generators explode, locking its tracks.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch EMP': 1, 'Tech Literacy': 4, 'Street Cred': 7 } },
        'WEAK HIT: Their radar is blinded, allowing you to slip past their flank.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch EMP': 1 } },
        'MISS: Electrical kickback shocks your cyberdeck, blurring your vision.', { hullIntegrity: -15, qualities: { 'Icarus Stage': 1, 'Icarus Branch EMP': 1, 'Glitch Rating': 1 } }),
      makeRollOption('opt_icarus13_heavy_ram_tracks', 'Ram your heavy prow into their vulnerable track drive sprockets [BRANCH 4C: RAM] [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You aim your 35-ton rig directly at their front left caterpillar drive.',
        'STRONG HIT: Mechanical triumph! The drive sprocket snaps like peanut brittle, throwing their track off.', { qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1, 'Street Cred': 8 } },
        'WEAK HIT: You disable their track, taking heavy bumper dents in return.', { hullIntegrity: -16, qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1 } },
        'MISS: Their sloped armor deflects the blow, spinning your rig into an embankment.', { hullIntegrity: -28, qualities: { 'Icarus Stage': 1, 'Icarus Branch Ram': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_icarus_14_third_capsule_impact', title: 'The Trinity of Fire', trigger: 'DOCK',
    text: 'Inside the copper mine pit, the third and final capsule rests intact. With all three antimatter containers safely winched into your shielded hold, the complete power of the fallen space elevator is aboard the Iron Nomad.',
    options: [
      makeRollOption('opt_icarus14_harmonize_containment', 'Harmonize all three capsule magnetic fields into a unified loop [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You bridge the three containers into a continuous closed-loop magnetic circuit.',
        'STRONG HIT: Flawless harmonic stability! Radiation output drops to zero while total power reserve triples.', { cargo: { batteries: 4 }, qualities: { 'Icarus Stage': 1, 'Tech Literacy': 4, 'Street Cred': 6 } },
        'WEAK HIT: Fields unified, though high-pitched magnetic hum resonates through the cab.', { cargo: { batteries: 2 }, qualities: { 'Icarus Stage': 1, 'Tech Literacy': 2 } },
        'MISS: A phase imbalance causes blue sparks to arc between the containers.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus14_armor_cargo_bay', 'Weld additional steel plating over the cargo doors [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You reinforce the rear doors with three layers of hardened scrap armor.',
        'STRONG HIT: Fortress on wheels! The hold is practically impervious to conventional artillery.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: Plating welded, though added weight lowers acceleration slightly.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Rushed welds leave weak points along the door hinges.', { hullIntegrity: -8, qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus14_raise_toast', 'Share a quiet toast with Lyra on the hood of the hauler',
        'Under the vast desert stars, you watch the dying space elevator satellite burn in the upper atmosphere.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Trust': 20 } })
    ]
  },
  {
    stage: 15, id: 'story_icarus_15_tether_terminal_crossroads', title: 'The Icarus Crossroads [BRANCH 5: Lock In Path]', trigger: 'DOCK',
    text: 'At the continental divide, the finish line approaches. Three divergent paths lie open for the ultimate destination of the fallen space elevator antimatter. Lyra turns to you: "Hauler, this energy can change the continent forever. How shall we use it?"',
    options: [
      makeDirectOption('opt_icarus15_choose_engine', 'Forge the Hyper-Flux Engine Core: "Channel the power into the rig. We rule the open road forever." [PATH: HYPERFLUX] [BRANCH 5A]',
        'Lyra’s eyes spark with reckless ambition. She locks the antimatter permanently into your turbine manifold.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Chosen Path': 1, 'Street Cred': 20 } }),
      makeDirectOption('opt_icarus15_choose_solaris', 'Deliver to Solaris for the Sovereign Power Grid: "Light up the free cities." [PATH: SOLARIS GRID] [BRANCH 5B]',
        'Executive couriers arrive with diplomatic escorts, transferring vast corporate fortunes.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Chosen Path': 2, 'Enclave Permits': 3 } }),
      makeDirectOption('opt_icarus15_choose_syndicate', 'Sell to the Antimatter Black-Market Cartel: "Unprecedented wealth and outlaw sovereignty." [PATH: BLACK MARKET] [BRANCH 5C]',
        'Underworld bosses bow before your firepower, loading cases of platinum credits into your cab.',
        { qualities: { 'Icarus Stage': 1, 'Icarus Chosen Path': 3, 'Street Cred': 25 } })
    ]
  },
  {
    stage: 16, id: 'story_icarus_16_falling_tether_debris', title: 'The Sky is Falling', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The main elevator tether collapses into the upper atmosphere! Miles-long cables of burning carbon filament whip across the continent like flaming whips, severing highway bridges and sparking forest fires.',
    options: [
      makeRollOption('opt_icarus16_outrun_cable', 'Outrun the falling carbon whip with Hyper-Flux boost [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You trigger the antimatter turbine, racing across a collapsing suspension bridge as flaming cables slice behind you.',
        'STRONG HIT: Legendary driving! You cross the bridge span just as a 100-ton cable shears it into the gorge.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You make the far side, though flying cable sparks scorch your trailer.', { hullIntegrity: -14, qualities: { 'Icarus Stage': 1 } },
        'MISS: A whip of cable clips your rear trailer corner, tearing away cargo panels.', { hullIntegrity: -28, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus16_emp_chaff_burst', 'Discharge an electromagnetic pulse to deflect falling ionized debris [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You project a repulsive magnetic bubble around the hauler.',
        'STRONG HIT: Superheated ionized cables curve harmlessly around your magnetic shield!', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 4, 'Street Cred': 7 } },
        'WEAK HIT: Debris deflected, though electrical feedback rattles cabin electronics.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: The magnetic generator overloads, blowing out the cabin air conditioning.', { hullIntegrity: -15, qualities: { 'Icarus Stage': 1, 'Glitch Rating': 1 } }),
      makeRollOption('opt_icarus16_plow_rubble', 'Plow through burning debris with the reinforced iron bumper [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You drop the plow and ram through mounds of incandescent carbon fiber.',
        'STRONG HIT: Heavy steel crushes all! You bulldoze through the flaming wreckage into clear highway.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You smash through, taking moderate tire blistering from the heat.', { hullIntegrity: -16, qualities: { 'Icarus Stage': 1 } },
        'MISS: Burning carbon wraps around an axle, requiring an emergency fire extinguisher stop.', { hullIntegrity: -25, qualities: { 'Icarus Stage': 1 } })
    ]
  },
  {
    stage: 17, id: 'story_icarus_17_orbital_bombardment_run', title: 'The Final Satellite Salvo', trigger: 'DOCK',
    text: 'At the final mountain staging pass, the last surviving automated defense station fires its entire kinetic magazine at the border terminal. Shockwaves shake the mountains like an earthquake.',
    options: [
      makeRollOption('opt_icarus17_cyber_overload_sat', 'Broadcast a suicide self-destruct command into the satellite receiver [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'Lyra feeds the master elevator executive override codes into your transmitter.',
        'STRONG HIT: A blinding flash in the stratosphere! The orbital weapons platform detonates in low orbit, raining harmless shooting stars.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 5, 'Street Cred': 10, 'Heat': -30 } },
        'WEAK HIT: The satellite is disabled and tumbles into the ocean.', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 2 } },
        'MISS: Counter-ICE burns your transmission mast before the satellite runs dry of ammo.', { hullIntegrity: -15, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus17_rally_mercenaries', 'Parley with surviving mercenary drivers to join your final convoy [ROLL +COOL]', 'cool', 'Street Cred',
        'You step out and offer them amnesty and fuel to escort your hauler across the border.',
        'STRONG HIT: The mercenaries switch sides! A dozen armored gun-trucks form an impenetrable escort convoy.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: Several mercenaries agree to stand down and let you pass.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 5 } },
        'MISS: Mercenaries refuse, fleeing into the canyons alone.', { qualities: { 'Icarus Stage': 1 } }),
      makeDirectOption('opt_icarus17_seal_cab', 'Tighten seatbelts, prime turbine boosters, and prepare for the final sprint',
        'You lock your helmet visor and grip the steering wheel with white knuckles.',
        { hullIntegrity: 10, qualities: { 'Icarus Stage': 1 } })
    ]
  },
  {
    stage: 18, id: 'story_icarus_18_anti_gravity_junction', title: 'The Sovereign Border Breach', trigger: 'TRANSIT_ENCOUNTER',
    text: 'The Pacific border checkpoint rises ahead—a towering fortress of concrete and automated heavy artillery pillboxes. Aegis command has locked the hydraulic blast-doors under martial law.',
    options: [
      makeRollOption('opt_icarus18_hyperflux_ram', 'Floor the Hyper-Flux turbine and ram the blast-doors at 200 km/h [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You sound the war horns, channeling raw antimatter thrust directly into the iron prow.',
        'STRONG HIT: Cataclysmic kinetic breakthrough! The 20-foot blast doors are blown clear off their hinges in a cloud of dust!', { qualities: { 'Icarus Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: You smash through, taking heavy armor scraping across your hood.', { hullIntegrity: -18, qualities: { 'Icarus Stage': 1 } },
        'MISS: The collision violently rattles your engine mounts before you break through.', { hullIntegrity: -30, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus18_slice_gate_matrix', 'Upload Lyra’s executive master clearance into the gate mainframe [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You transmit the Olympus project director codes into the security terminal.',
        'STRONG HIT: The barrier salutes: "CLEARANCE LEVEL OLYMPUS CONFIRMED." The doors glide open automatically!', { qualities: { 'Icarus Stage': 1, 'Tech Literacy': 5, 'Street Cred': 10 } },
        'WEAK HIT: Gate opens halfway, allowing your rig to scrape through cleanly.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Security locks down the gate, forcing you to ram the side inspection booths.', { hullIntegrity: -18, qualities: { 'Icarus Stage': 1 } }),
      makeRollOption('opt_icarus18_service_drift', 'Hard-drift through the drainage culvert beneath the checkpoint [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You pitch the hauler into the concrete drainage canal at breakneck speed.',
        'STRONG HIT: Sublime wasteland driving! You bypass the lethal killzone entirely beneath the checkpoint.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You squeeze through, though low clearance strips your roof spotlights.', { hullIntegrity: -12, qualities: { 'Icarus Stage': 1 } },
        'MISS: Concrete scrapers dent your trailer axle before you emerge on open asphalt.', { hullIntegrity: -22, qualities: { 'Icarus Stage': 1 } })
    ]
  },
  {
    stage: 19, id: 'story_icarus_19_superluminal_climax', title: 'The Velocity of Light [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken through into the free Pacific frontier! The redwoods blur into emerald streaks of light as your antimatter-infused hauler reaches unprecedented continental highway speed.',
    options: [
      makeRollOption('opt_icarus19_engine_dash', 'Push the Hyper-Flux turbine to absolute maximum velocity [HYPERFLUX PATH] [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You open the master throttle. The Iron Nomad shrieks across the asphalt at 220 km/h in total silence.',
        'STRONG HIT: Speed of the gods! You break every continental distance record in history, vanishing into legend.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: Legendary velocity carries you across the finish line.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Manifold temps run red, but the frontier is secured.', { qualities: { 'Icarus Stage': 1 } },
        { qualities: { 'Icarus Chosen Path': 1 } }),
      makeRollOption('opt_icarus19_solaris_delivery', 'Deliver the antimatter cores to the Pacific Solaris Megacity [SOLARIS PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'Executive hover-car escorts flank your convoy as you enter the gleaming coastal arcology.',
        'STRONG HIT: You are welcomed as the Savior of the Energy Grid! Billions in contracts and glory are yours.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The cores are safely delivered and payment transferred.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Tense customs inspections conclude with full payment.', { qualities: { 'Icarus Stage': 1 } },
        { qualities: { 'Icarus Chosen Path': 2 } }),
      makeRollOption('opt_icarus19_cartel_handshake', 'Complete the transaction with the Shadow Syndicate Cartel [CARTEL PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You pull into an underground submarine dock to complete the ultimate black-market handoff.',
        'STRONG HIT: Unprecedented wealth! The syndicate crowns you the undisputed lord of high-tech contraband.', { qualities: { 'Icarus Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The transaction concludes with massive payouts.', { qualities: { 'Icarus Stage': 1 } },
        'MISS: Syndicate guards verify the merchandise and transfer funds.', { qualities: { 'Icarus Stage': 1 } },
        { qualities: { 'Icarus Chosen Path': 3 } })
    ]
  },
  {
    stage: 20, id: 'story_icarus_20_finale', title: 'The Skyward Triumph [FINALE]', trigger: 'DOCK',
    text: 'Dawn breaks over the Pacific Ocean in brilliant golden glory. The space elevator heist is complete. Your rig is permanently retrofitted with the revolutionary Hyper-Flux Capacitor Turbine.',
    options: [
      makeDirectOption('opt_icarus20_ending_engine', 'Rule the Open Highway with the Hyper-Flux Core [ENDING 1: HYPERFLUX TURBINE]',
        'Your hauler is an untouchable silver bullet on continental roads. With +25% permanent transit speed and antimatter boost, no police cruiser or raider buggy will ever catch your convoy again.',
        {
          credits: 12000,
          hullIntegrity: 100,
          cargo: { batteries: 4, cyberware: 3 },
          qualities: { 'Icarus Stage': 80, 'Tech Literacy': 10, 'Street Cred': 25, 'Heat': -40 },
          stats: { edge: 1 },
          rig: { speedRating: 0.25, name: 'Iron Nomad - Hyperflux Turbine' }
        }, { qualities: { 'Icarus Chosen Path': 1 } }),
      makeDirectOption('opt_icarus20_ending_solaris', 'Accept the Sovereign Energy Honors of Solaris [ENDING 2: SOLAR HELIOS]',
        'Solaris Energy appoints you chief continental logistics partner, rewarding you with executive transport trailers and corporate diplomatic immunity.',
        {
          credits: 17000,
          cargo: { batteries: 5, chips: 3 },
          qualities: { 'Icarus Stage': 80, 'Enclave Permits': 3, 'Street Cred': 20 },
          stats: { edge: 1, cool: 1 },
          rig: { speedRating: 0.20, maxCargoWeight: 5, name: 'Iron Nomad - Solar Helios' }
        }, { qualities: { 'Icarus Chosen Path': 2 } }),
      makeDirectOption('opt_icarus20_ending_cartel', 'Accept the Crown of the Void Syndicate [ENDING 3: VOID STAR]',
        'Holding the wealth of fallen stars, your rig is armed with military void plating and high-output antimatter turbochargers.',
        {
          credits: 20000,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Icarus Stage': 80, 'Street Cred': 25, 'Heat': 20 },
          stats: { edge: 1, cyber: 1 },
          rig: { speedRating: 0.22, maxHull: 20, name: 'Iron Nomad - Void Star' }
        }, { qualities: { 'Icarus Chosen Path': 3 } }),
      makeDirectOption('opt_icarus20_farewell', 'Collect final veteran courier fee and depart into the sunrise',
        'With Project Icarus concluded, you seal your cabin, log the kilometers in your telemetry feed, and shift into drive.',
        {
          credits: 10000,
          qualities: { 'Icarus Stage': 80, 'Street Cred': 10 },
          stats: { edge: 1 },
          rig: { speedRating: 0.15 }
        })
    ]
  }
];

const compiledIcarus = compileStorylets(icarusData, 'Icarus Stage');
writeTsFile('src/data/icarusQuestStorylets.ts', 'ICARUS_QUEST_STORYLETS', compiledIcarus);
