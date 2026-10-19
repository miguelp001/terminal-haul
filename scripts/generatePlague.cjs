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

    function mapTrigger(trig) {
      if (trig === 'TOWN_VISIT' || trig === 'DOCK') return 'DOCK';
      if (trig === 'ROAD_EVENT' || trig === 'COMBAT_ENCOUNTER' || trig === 'TRANSIT_ENCOUNTER') return 'TRANSIT_ENCOUNTER';
      return 'ANY';
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

function writeTsFile(filePath, varName, storylets) {
  const content = `import { Storylet } from '../types/storylet';

export const ${varName}: Storylet[] = ${JSON.stringify(storylets, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${storylets.length} storylets to ${filePath}`);
}

const plagueData = [
  {
    stage: 1, id: 'story_plague_01_silicon_rot', title: 'The Corrosion of Ash City', trigger: 'DOCK',
    text: 'A frantic physician in a hazmat trench coat, Dr. Aris Thorne, bangs on your cab door in the neon-lit rain. "The Silicon Rot is mutating," he pants, clutching a pressurized cryogenic canister. "A synthetic nanite pathogen is eating cyberware and truck chassis alive across the eastern flats. I need a hauler with sealed bulkheads to carry the Lazarus Matrix cure."',
    options: [
      makeRollOption('opt_plague01_accept_contract', 'Accept Dr. Thorne\'s mission and secure the Lazarus Matrix [ROLL +COOL]', 'cool', 'Street Cred',
        'You inspect Thorne\'s cryogenic cradle and calculate transit routes through the quarantine zones.',
        'STRONG HIT: You negotiate an advance of 1,200 credits and lock the cradle into your shock-absorbing cargo mount.', { credits: 1200, qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You accept the contract and haul the incubator aboard under quiet cover.', { credits: 600, qualities: { 'Plague Stage': 1 } },
        'MISS: Local dock sentries notice the hazmat seals, demanding a 200 credit hush fee before you depart.', { credits: -200, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague01_inspect_matrix', 'Run a cybernetic deep scan on the nanite matrix [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You jack your diagnostic deck directly into the canister\'s telemetry port.',
        'STRONG HIT: Fascinating biomachinery! The nanites operate on a self-repairing frequency that could rejuvenate living metal.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 5, 'Street Cred': 3 } },
        'WEAK HIT: The canister is stable, though running at dangerously high thermal thresholds.', { qualities: { 'Plague Stage': 1 } },
        'MISS: A defensive neural pulse shocks your console, singing your primary terminal circuits.', { hullIntegrity: -5, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague01_prepare_convoy', 'Install reinforced rubber gaskets and activate emergency environmental filters',
        'You prep the hauler for hazardous biological transit before Thorne climbs into the bunk.',
        { hullIntegrity: 10, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 2, id: 'story_plague_02_quarantine_checkpoint', title: 'The Burning Perimeter', trigger: 'TRANSIT_ENCOUNTER',
    text: 'A towering Aegis quarantine barrier blocks Route 9. High-pressure chemical flame-throwers spew white-hot cleansing jets across incoming vehicles, burning off synthetic rust and organic residue.',
    options: [
      makeRollOption('opt_plague02_fake_manifest', 'Present forged sterilization manifests and corporate medical courier papers [ROLL +COOL]', 'cool', 'Street Cred',
        'You key your radio to the inspection gate officer and project calm professional authority.',
        'STRONG HIT: Flawless diplomatic credentials! The officer salutes and opens the sterile bypass lane.', { qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: The officer hesitates, charging a 300 credit expedited sterilization inspection fee.', { credits: -300, qualities: { 'Plague Stage': 1 } },
        'MISS: The gate commander flags your incubator, forcing you to gun the throttle through the plastic warning gates!', { hullIntegrity: -15, qualities: { 'Plague Stage': 1, 'Heat': 10 } }),
      makeRollOption('opt_plague02_scan_sensor_blindspot', 'Hack the perimeter thermal cameras to slip through an unguarded gap [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You loop the gate sensor feed with static telemetry.',
        'STRONG HIT: Ghost transit! Your convoy slips through the unmonitored culvert without triggering alarms.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 4 } },
        'WEAK HIT: The loop holds long enough for your cab to clear, though your trailer scrapes a security bollard.', { hullIntegrity: -8, qualities: { 'Plague Stage': 1 } },
        'MISS: Sensor ping triggers automated sentry turrets that spray glancing machine-gun fire.', { hullIntegrity: -20, qualities: { 'Plague Stage': 1, 'Heat': 15 } }),
      makeDirectOption('opt_plague02_endure_wash', 'Submit to the full disinfectant plasma wash and drive through the scorching spray',
        'The chemical spray burns paint and chars your mudflaps, but your cargo seals hold firm.',
        { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 3, id: 'story_plague_03_refugee_camp', title: 'The Clinic of the Damned', trigger: 'TOWN_VISIT',
    text: 'You pull into an ad-hoc refugee hospice outside the toxic marshes. Hundreds of sick haulers and cyborg miners lie under plastic tarps, their cybernetic limbs weeping black oily residue as the nanites disintegrate their joints.',
    options: [
      makeRollOption('opt_plague03_dispense_stabilizers', 'Synthesize and distribute emergency nanite dampening serum to the sick [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You and Dr. Thorne calibrate your mobile lab to dilute a non-replicating stabilizer batch.',
        'STRONG HIT: A miraculous intervention! Scores of suffering truckers recover, blessing your rig and gifting rare components.', { cargo: { cyberware: 2 }, qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You stabilize the worst patients, depleting some electrical reserves.', { qualities: { 'Plague Stage': 1, 'Street Cred': 4 } },
        'MISS: Desperate refugees swarm the truck steps, forcing you to seal doors and pull away hastily.', { qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague03_rally_mechanics', 'Rally healthy refugee mechanics to fortify your convoy defenses [ROLL +GRIT]', 'grit', 'Street Cred',
        'You stand on the running boards and rally the able-bodied mechanics to help service the fleet.',
        'STRONG HIT: The mechanics weld heavy scrap reinforcement plates across your trailer and cab for free!', { hullIntegrity: 25, qualities: { 'Plague Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: A couple of greasy hands patch your leaking coolant hose.', { hullIntegrity: 10, qualities: { 'Plague Stage': 1 } },
        'MISS: The crowd is too despondent and terrified to assist.', { qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague03_purchase_supplies', 'Quietly buy filtered water and fuel rations from the clinic quartermaster',
        'You stock up on essential road supplies and keep the engine idling.',
        { credits: -250, cargo: { batteries: 2 }, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 4, id: 'story_plague_04_chassis_corrosion', title: 'Aerosol Rot in the Redwoods', trigger: 'ROAD_EVENT',
    text: 'As you navigate through the petrified coastal forest, thick grey fog clings to the glass. Your dashboard warning sirens wail: nanite particulate levels in the ambient air are critical! The outer alloy plates of your rig begin to hiss and discolor.',
    options: [
      makeRollOption('opt_plague04_reverse_air_scrubbers', 'Overcharge electrostatic cabin scrubbers to blow particulates off the chassis [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You reverse the polarity of the rig\'s magnetic alternator fields.',
        'STRONG HIT: Electromagnetic repulsor field! The corrosive fog is ionized and pushed 50 feet away from your convoy.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: The scrubbers hold the corrosive fog at bay, though your batteries run warm.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Corrosive residue settles in your intake vents, chewing through an alternator belt.', { hullIntegrity: -14, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague04_floor_throttle', 'Floor the accelerator and outrun the dense fog pocket [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You drop into low gear and push through the swirling aerosol bank at high speed.',
        'STRONG HIT: Masterful high-speed rally driving! You burst into clean sunlight before corrosion takes hold.', { qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: You break through the fog, but flying debris dints your passenger steps.', { hullIntegrity: -8, qualities: { 'Plague Stage': 1 } },
        'MISS: Low visibility leads to a clipping strike against a petrified redwood trunk.', { hullIntegrity: -20, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague04_spray_oil_barrier', 'Coat the exterior chassis in heavy silicone oil sealant',
        'The oil forms a sacrificial layer that absorbs the corrosive mist.',
        { credits: -150, hullIntegrity: 5, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 5, id: 'story_plague_05_cult_of_rust', title: 'Zealots of the Holy Decay', trigger: 'COMBAT_ENCOUNTER',
    text: 'Spiked motorbikes and rust-eaten buggies intercept you. The "Disciples of the Steel Decay"—cultists who welcome the nanite infection as a divine purging of synthetic humanity—demand you surrender the Lazarus Matrix to the sacred rot.',
    options: [
      makeRollOption('opt_plague05_ram_crusaders', 'Smash the spiked cult leader buggies with your steel cow-catcher [ROLL +GRIT]', 'grit', 'Street Cred',
        'You sound the air horns and drive straight at the cult\'s lead war-rig.',
        'STRONG HIT: Monstrous impact! The lead buggy is crumpled into scrap metal, scattering the remaining zealots in terror.', { qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You ram through their blockade, sustaining minor dents on your bull-bar.', { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } },
        'MISS: A cultist buggy detonates against your left steering linkage before spinning off.', { hullIntegrity: -24, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague05_theological_bluff', 'Broadcast a theological warning that the Matrix contains God\'s true flame [ROLL +COOL]', 'cool', 'Street Cred',
        'You amplify your voice over the hauler PA system with chilling prophetic conviction.',
        'STRONG HIT: The cultists bow in religious awe, falling back to let the "Chariot of the Final Word" pass!', { qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: The zealots hesitate in bewilderment, opening a corridor just wide enough to slip through.', { qualities: { 'Plague Stage': 1 } },
        'MISS: The fanatics scream heresy and unleash a volley of pipe-bombs at your trailer!', { hullIntegrity: -18, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague05_emp_discharge', 'Trigger a localized EMP blast from your secondary battery bank [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You short the high-voltage inverter into the exterior grounding rods.',
        'STRONG HIT: The EMP wave fries every unshielded cultist ignition coil instantly, leaving them dead in the water!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: Most attacker buggies stall, though your auxiliary alternator also trips.', { qualities: { 'Plague Stage': 1 } },
        'MISS: The EMP arcs back into your cabin dashboard, blowing several fuses.', { hullIntegrity: -15, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 6, id: 'story_plague_06_dr_thorne_secret', title: 'The Architect\'s Confession', trigger: 'ANY',
    text: 'Dr. Thorne breaks down in the passenger seat under the quiet hum of the night highway. "I didn\'t just find this cure," he whispers. "I engineered the original military nanite strain for OmniDyne. When it mutated out of control, they locked down the sector and marked everyone for liquidation. The Lazarus Matrix doesn\'t just kill the rot—it rebuilds broken molecular lattice. It can make whatever it touches immortal... or lethal."',
    options: [
      makeRollOption('opt_plague06_interrogate_motives', 'Press Thorne for the exact biochemical override sequences [ROLL +COOL]', 'cool', 'Tech Literacy',
        'You stare Thorne down in the mirror, calmly demanding every technical fact.',
        'STRONG HIT: Thorne hands over his personal encrypted optical key containing the root compiler for the nanite strains!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 8, 'Street Cred': 5 } },
        'WEAK HIT: Thorne yields the basic firmware overrides, admitting he wants to atone.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 4 } },
        'MISS: Thorne clamors shut in guilt and anxiety, clutching the canister protectively.', { qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague06_comfort_ally', 'Offer Thorne a cold drink and promise to help him redeem his mistakes [ROLL +GRIT]', 'grit', 'Street Cred',
        'You clasp the haunted scientist on the shoulder with steady, reassuring strength.',
        'STRONG HIT: Thorne\'s resolve hardens. He vows absolute loyalty to your convoy and works overtime to optimize the cure.', { hullIntegrity: 15, qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: Thorne calms down and checks the pressure seals on the incubator.', { qualities: { 'Plague Stage': 1 } },
        'MISS: The conversation remains uneasy, casting a shadow over the cab.', { qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague06_focus_on_road', 'Keep your eyes on the road and remind him that surviving tonight comes first',
        'The past cannot be undone; the only way out is through.',
        { qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 7, id: 'story_plague_07_incinerator_cordon', title: 'The Pyre of the Scorchers', trigger: 'ROAD_EVENT',
    text: 'An OmniDyne automated Scorch Drone patrol is burning the Interstate ahead with white phosphorus carpet munitions. Twisted flaming metal carcasses of civilian vehicles litter the melting tarmac.',
    options: [
      makeRollOption('opt_plague07_thermal_cloaking', 'Activate heat-sink baffling to slip under the drones\' infrared sweepers [ROLL +CYBER]', 'cyber', 'Contraband Mastery',
        'You shut down external lights and throttle exhaust gases through cryogenic chilling loops.',
        'STRONG HIT: Undetected stealth! The scorch drones sweep past overhead without noticing your thermal shadow.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 5 } },
        'WEAK HIT: You pass unnoticed, though cabin temperature spikes uncomfortably.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Drones detect an exhaust flare and loose a phosphorus round near your rear bumper!', { hullIntegrity: -16, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague07_blaze_through', 'Gun the engine and drive straight through the wall of white fire [ROLL +GRIT]', 'grit', 'Cyberware Level',
        'You seal intake vents, hit fire suppression systems, and charge the burning gauntlet.',
        'STRONG HIT: The heavy alloy hauler bursts through the inferno like an iron comet, scorching clean every trace of rot!', { qualities: { 'Plague Stage': 1, 'Street Cred': 6 } },
        'WEAK HIT: You emerge from the flames with blistered paint and melted wiper blades.', { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } },
        'MISS: Intense heat damages external wiring harnesses and pops a tire.', { hullIntegrity: -25, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague07_anti_materiel_snipe', 'Take out the lead drone with a high-caliber roof rail shot [ROLL +EDGE]', 'edge', 'Street Cred',
        'You unlimber your heavy rifle through the roof hatch and track the hovering drone.',
        'STRONG HIT: Direct engine hit! The drone plummets into the command trench, disabling the patrol array.', { qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You wing the drone, sending it spinning away into the hills.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Return fire pocks your trailer armor before you escape down a side ramp.', { hullIntegrity: -18, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 8, id: 'story_plague_08_abandoned_lab', title: 'The Bio-Vault Salvage', trigger: 'TOWN_VISIT',
    text: 'Dr. Thorne directs you to an overrun OmniDyne pharmaceutical research bunker hidden in an industrial ravine. "We need liquid polymer catalysts to preserve the matrix," he explains. "The facility was evacuated, but the automated bio-vaults remain locked."',
    options: [
      makeRollOption('opt_plague08_crack_biovault', 'Bypass the biometric security lock on the subterranean vault [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You splice your deck into the cryogenic storage control node.',
        'STRONG HIT: Full clearance unlocked! You secure 3 crates of ultra-pure nanite catalysts and valuable medical supplies.', { cargo: { cryo: 3, cyberware: 2 }, qualities: { 'Plague Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: You pop the lock, securing sufficient catalyst vials for the journey.', { cargo: { cryo: 1 }, qualities: { 'Plague Stage': 1 } },
        'MISS: Alarm triggers a defensive neuro-gas trap, forcing a hasty retreat.', { hullIntegrity: -10, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague08_heavy_breach', 'Use your rig\'s winch cables to rip off the steel vault door [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You anchor heavy titanium tow cables around the vault hinge and drop into reverse gear.',
        'STRONG HIT: The door is wrenched from its concrete mount with a deafening screech! Salvage is yours.', { cargo: { chips: 3, cryo: 1 }, qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: The door tears open, though the winch cable snaps and whips your tailgate.', { hullIntegrity: -10, cargo: { cryo: 1 }, qualities: { 'Plague Stage': 1 } },
        'MISS: The concrete anchor holds fast, burning out your winch motor.', { credits: -200, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague08_scavenge_periphery', 'Search the warehouse loading dock for abandoned medical crates',
        'You find useful first-aid kits and emergency rations without triggering security.',
        { cargo: { cryo: 1, grain: 2 }, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 9, id: 'story_plague_09_patient_zero', title: 'The Behemoth of the Underpass', trigger: 'COMBAT_ENCOUNTER',
    text: 'In a shadowed highway tunnel, a nightmare blocks your path: a massive automated hauler whose chassis has completely fused with living mutated nanites and cyber-organic muscle tissue. It emits a subsonic mechanical roar and accelerates toward you!',
    options: [
      makeRollOption('opt_plague09_exploit_overheat', 'Aim for the pulsing, unarmored cooling vents of the bio-rig [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You line up your auxiliary cannons on the glowing organic heat sinks.',
        'STRONG HIT: Catastrophic detonation! The mutated rig violently vents pressurized plasma and collapses into slag.', { qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You score critical hits, forcing the beast to limp away into the dark tunnel recesses.', { qualities: { 'Plague Stage': 1, 'Street Cred': 4 } },
        'MISS: The monstrous hauler sideswipes you, tearing metal fenders before grinding to a halt.', { hullIntegrity: -26, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague09_nanite_disruption_pulse', 'Broadcast an inverted frequency pulse from the Lazarus Matrix [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You configure your antenna array to blast the cure\'s anti-rot harmonic frequency.',
        'STRONG HIT: The nanite bonds in the attacker dissolve instantly! The monstrosity turns to harmless dust and inert iron.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 8, 'Street Cred': 8 } },
        'WEAK HIT: The pulse stuns the bio-machine long enough for your convoy to blast past.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Feedback ripples through your radio array, blowing out your speakers.', { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague09_ram_chassis', 'Brace for impact and slam the creature head-on with maximum horsepower [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You lock your teeth, put the hammer down, and ram the aberration.',
        'STRONG HIT: Unstoppable kinetic force! Your heavy iron prow crushes its cybernetic spine into the tunnel walls.', { qualities: { 'Plague Stage': 1, 'Street Cred': 9 } },
        'WEAK HIT: You shove the beast aside, sustaining heavy damage to your front grille.', { hullIntegrity: -18, qualities: { 'Plague Stage': 1 } },
        'MISS: The impact severely mangles your bumper and radiator.', { hullIntegrity: -32, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 10, id: 'story_plague_10_coolant_failure', title: 'The Boiling Chamber', trigger: 'ROAD_EVENT',
    text: 'A red warning alarm flashes across the cargo bay cameras: the Lazarus Matrix cryogenic cooling loop has suffered a catastrophic pump seal rupture! Internal temperatures are climbing toward the critical threshold where the nanites will vaporize.',
    options: [
      makeRollOption('opt_plague10_juryrig_coolant', 'Splice your truck\'s engine freon lines directly into the incubator [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You grab rubber hoses and diagnostic clamps, routing hauler refrigerant into the matrix.',
        'STRONG HIT: Flawless thermodynamic balancing! Temperatures drop into deep sub-zero and the core stabilizes.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The patch stabilizes the canister, though your cabin air conditioning is permanently sacrificed.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Freon escapes in a hissing cloud, burning your knuckles before you manage to clamp it.', { hullIntegrity: -10, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague10_thermal_dissipation', 'Channel excess heat through the chassis external plating [ROLL +GRIT]', 'grit', 'Cyberware Level',
        'You physically vent the thermal conduits through your truck\'s heavy undercarriage armor.',
        'STRONG HIT: The massive steel frame dissipates the heat harmlessly across the wasteland air.', { qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT:Undercarriage gets glowing hot, cooking one of your spare tires.', { hullIntegrity: -8, qualities: { 'Plague Stage': 1 } },
        'MISS: Overheating burns out a hydraulic brake line, requiring emergency roadside braking.', { hullIntegrity: -16, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague10_liquid_nitrogen', 'Dump an emergency canister of liquid nitrogen onto the containment shell',
        'A quick, expensive fix that instantly cools the core back to baseline.',
        { credits: -300, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 11, id: 'story_plague_11_corporate_blackmail', title: 'The Executive Judas Call', trigger: 'DOCK',
    text: 'While refueling at an isolated desert depot, an encrypted holocall illuminates your dashboard. A senior OmniDyne vice-president, Victoria Sterling, smiles smoothly. "Courier, you hold five billion credits of our proprietary intellectual property. Hand over Dr. Thorne and the Matrix. We will credit your account with ten thousand credits and grant you full corporate pardon. Refuse, and our tactical gunships will vaporize your convoy."',
    options: [
      makeRollOption('opt_plague11_reject_sterling', 'Spit on the holo-screen and tell Sterling to send her worst [ROLL +GRIT]', 'grit', 'Street Cred',
        'You broadcast your defiance with unyielding contempt.',
        'STRONG HIT: Sterling recoils in disbelief. Your unshakeable grit becomes legendary across the trucker airwaves!', { qualities: { 'Plague Stage': 1, 'Street Cred': 12, 'Heat': 15 } },
        'WEAK HIT: You cut the feed and rev your engine into gear.', { qualities: { 'Plague Stage': 1, 'Heat': 10 } },
        'MISS: Corporate signals triangulate your refueling depot, scrambling hunter drones.', { qualities: { 'Plague Stage': 1, 'Heat': 25 } }),
      makeRollOption('opt_plague11_counter_extort', 'Counter-extort Sterling with leaked medical telemetry of the outbreak [ROLL +COOL]', 'cool', 'Tech Literacy',
        'You transmit a fragment of the classified outbreak logs with an ultimatum.',
        'STRONG HIT: Masterful blackmail! Sterling is terrified of public exposure and transfers a 2,500 credit hush advance!', { credits: 2500, qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: Sterling backs down and agrees to hold off immediate airstrikes.', { qualities: { 'Plague Stage': 1, 'Street Cred': 4 } },
        'MISS: Sterling dismisses your bluff with cold corporate laughter.', { qualities: { 'Plague Stage': 1, 'Heat': 15 } }),
      makeDirectOption('opt_plague11_scramble_transponders', 'Burn your transponder chip and kill all electronic broadcast signals',
        'You vanish from satellite tracking and roll out under dark-sky radar.',
        { credits: -200, qualities: { 'Plague Stage': 1, 'Heat': -10 } })
    ]
  },
  {
    stage: 12, id: 'story_plague_12_the_bleeding_circuit', title: 'Symbiosis of Steel', trigger: 'ANY',
    text: 'During a quiet inspection stop, you discover something breathtaking: micro-nanite vapors escaping the matrix have seeped into your hauler\'s damaged armor plating. Instead of corroding the iron, the nanites have bonded with the steel, weaving a shimmering, self-healing bio-metallic lattice that closed up bullet holes automatically!',
    options: [
      makeRollOption('opt_plague12_guide_nanite_bonding', 'Direct the nanite infusion along your primary structural load-bearers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You use your diagnostic deck to align the nanites with the truck\'s chassis frame.',
        'STRONG HIT: Astonishing bio-synthetic fusion! The frame strengthens tenfold, regenerating armor in real time!', { hullIntegrity: 35, qualities: { 'Plague Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The nanite weave seals minor chassis cracks and reinforces your wheel arches.', { hullIntegrity: 18, qualities: { 'Plague Stage': 1 } },
        'MISS: The nanites mutate an electrical junction, causing dashboard dials to flicker erratically.', { qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague12_test_alloy_tensile', 'Test the tensile strength and impact resistance of the new bio-plate [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You strike the reinforced bumper with a heavy sledgehammer to verify resilience.',
        'STRONG HIT: The hammer bounces back like rubber! The metal absorbs and distributes kinetic energy instantly.', { hullIntegrity: 20, qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'WEAK HIT: The plate holds solidly against the blow.', { hullIntegrity: 10, qualities: { 'Plague Stage': 1 } },
        'MISS: A small piece of brittle overgrowth snaps off in your hand.', { qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague12_seal_containment', 'Carefully tighten the canister valve to prevent further uncontrolled leakage',
        'You preserve the remaining pure matrix fluid for the mission destination.',
        { qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 13, id: 'story_plague_13_highway_ambush', title: 'The Harpoon Swarm', trigger: 'COMBAT_ENCOUNTER',
    text: 'A coordinated strike team of raiders and rogue OmniDyne mercenaries strikes from canyon ridges. Heavy magnetic harpoons slam into your trailer walls, steel cables groaning under immense tension as they try to drag your hauler off the asphalt!',
    options: [
      makeRollOption('opt_plague13_sever_cables', 'Overcharge your exterior hull grid to superheat and snap the tow cables [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You divert auxiliary battery banks through the exterior hull armor.',
        'STRONG HIT: White-hot electrical surge! The harpoon cables snap and whip violently back into the attacker rigs!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 5, 'Street Cred': 8 } },
        'WEAK HIT: The cables snap under electrical tension, freeing your trailer.', { qualities: { 'Plague Stage': 1 } },
        'MISS: The high-voltage feedback pops an onboard relay, jolting the cab.', { hullIntegrity: -14, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague13_counter_drag', 'Drop into maximum low gear and drag their vehicles into the canyon wall [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You lock your differentials and apply 1,500 foot-pounds of raw diesel torque.',
        'STRONG HIT: Devastating tow power! You drag three mercenary buggies violently into the solid rock face, smashing them to pieces!', { qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'WEAK HIT: You break their grip after a brutal tug-of-war, leaving rubber skidmarks on the road.', { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } },
        'MISS: Their combined drag bends your trailer frame before the cables finally give way.', { hullIntegrity: -24, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague13_evasive_fishtail', 'Fishtail your heavy rig across the lanes to shake them loose [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You swing the steering wheel in rhythmic, violent pendulum sweeps.',
        'STRONG HIT: Cinematic driving! The whipping trailer flips two attacker buggies upside down!', { qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: The attackers lose their grip and peel off into the dirt.', { qualities: { 'Plague Stage': 1 } },
        'MISS: You clip a concrete road barrier, bruising your front axle.', { hullIntegrity: -18, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 14, id: 'story_plague_14_dust_storm_crossing', title: 'The Particulate Maelstrom', trigger: 'ROAD_EVENT',
    text: 'A ferocious radioactive dust storm rolls off the Salt Wash. The gale-force wind carries millions of microscopic iron-eating spores. Zero visibility surrounds your rig; instruments flicker as static electricity sparks across the windshield.',
    options: [
      makeRollOption('opt_plague14_terrain_radar', 'Navigate through the storm using synthetic aperture terrain radar [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You tune your lidar deck to penetrate the blinding dust wall.',
        'STRONG HIT: Crystal-clear green wireframe projection! You weave effortlessly past hidden boulders and sinkholes.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 6 } },
        'WEAK HIT: The radar keeps you on the highway center line, though grit scratches your sensor dome.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Radar static blinds your displays, sending your tires into a roadside sand drift.', { hullIntegrity: -15, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague14_instinct_drive', 'Trust trucker muscle memory and raw instincts to navigate the blind road [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You read the tilt of the road in your spine and grip the wheel steady.',
        'STRONG HIT: Pure road mastery! You cruise through the heart of the maelstrom without a single stutter.', { qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You push through the storm, arriving on the other side caked in thick red sand.', { hullIntegrity: -8, qualities: { 'Plague Stage': 1 } },
        'MISS: Fierce crosswinds nearly tip the trailer, straining your fifth-wheel coupling.', { hullIntegrity: -20, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague14_hunker_down', 'Pull into the lee of a rocky outcropping and wait for the worst to pass',
        'You conserve fuel and wait out the storm safely in your cabin.',
        { hullIntegrity: 5, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 15, id: 'story_plague_15_the_crossroads', title: 'The Great Mutation [CRUCIAL CROSSROAD]', trigger: 'DOCK',
    text: 'At the hidden crossroads outpost of New Jericho, the road branches in three distinct directions. Dr. Thorne stands before you with the glowing Lazarus Matrix in his hands. "We have reached the divergence," he says solemnly. "Three futures lie before us. Where do we deliver the power of the living machine?"',
    options: [
      makeDirectOption('opt_plague15_choose_humanitarian', 'Path 1: Deliver the cure to the Central Oasis CDC to inoculate the wasteland [HUMANITARIAN WEAVE]',
        'You choose salvation for all humanity. The CDC will mass-produce the antidote and distribute it freely across every refugee outpost and settlement.',
        { qualities: { 'Plague Stage': 1, 'Plague Chosen Path': 1, 'Street Cred': 15 } }),
      makeDirectOption('opt_plague15_choose_transhuman', 'Path 2: Fuse the adaptive nanite matrix directly with your hauler\'s chassis [TRANSHUMAN SYNERGY]',
        'You choose perfection of the machine. The living nanites will permanently bond with your rig\'s engine, chassis, and neural interface, birthing a legendary biomechanical dreadnought.',
        { qualities: { 'Plague Stage': 1, 'Plague Chosen Path': 2, 'Tech Literacy': 15 } }),
      makeDirectOption('opt_plague15_choose_cartel', 'Path 3: Deliver the matrix to the Sovereign Syndicate for supreme black-market wealth [SOVEREIGN AUCTION]',
        'You choose independence and untouchable power. The Syndicate will pay millions, granting you sovereign diplomatic immunity, sterile bastions, and high-tech cargo retrofits.',
        { qualities: { 'Plague Stage': 1, 'Plague Chosen Path': 3, 'Contraband Mastery': 15 } })
    ]
  },
  {
    stage: 16, id: 'story_plague_16_airdrop_blockade', title: 'The Cordon of Gunships', trigger: 'TRANSIT_ENCOUNTER',
    text: 'Aegis heavy rotorcraft and gunships patrol the skies above your approach vector. Searchlights sweep the highway, illuminating automated minefields deployed across the asphalt.',
    options: [
      makeRollOption('opt_plague16_hack_gunship_datalink', 'Splice into the lead gunship\'s IFF datalink and spoof friendly signals [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You broadcast executive command overrides through your communications dish.',
        'STRONG HIT: Total electronic deception! The gunships reclassify you as an authorized medical transport and fly escort!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 6, 'Street Cred': 6 } },
        'WEAK HIT: The gunships are confused by conflicting data, letting you slip past during the hesitation.', { qualities: { 'Plague Stage': 1 } },
        'MISS: The datalink rejects your packet, triggering a barrage of warning rockets that crater the road ahead.', { hullIntegrity: -18, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague16_thread_minefield', 'Slalom through the automated minefield at breakneck speed [ROLL +EDGE]', 'edge', 'Contraband Mastery',
        'You thread your tires precisely between proximity sensor triggers.',
        'STRONG HIT: Flawless precision! You clear the minefield without detonating a single charge.', { qualities: { 'Plague Stage': 1, 'Street Cred': 8 } },
        'WEAK HIT: You clip the edge of a mine, shrapnel shredding your mudguard.', { hullIntegrity: -12, qualities: { 'Plague Stage': 1 } },
        'MISS: A mine detonates beneath your trailer, violently jostling the suspension.', { hullIntegrity: -25, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague16_remote_detonation', 'Fire explosive road flares to trigger the mines from safe distance',
        'The flares detonate a chain reaction of mines, clearing a scorched path through the barrier.',
        { credits: -150, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 17, id: 'story_plague_17_the_terminal_colony', title: 'The Heart of the Infection', trigger: 'TOWN_VISIT',
    text: 'You enter the red-zone epicenter. Mutated nanite creepers hang from dilapidated overpasses like synthetic Spanish moss. Distant survivor signals crackle over your CB radio, calling for aid as the countdown to your final destination begins.',
    options: [
      makeRollOption('opt_plague17_broadcast_hope', 'Broadcast an inspirational radio address to rally the survivors [ROLL +COOL]', 'cool', 'Street Cred',
        'You open the airwaves and speak from the heart to every bunker and refugee enclave.',
        'STRONG HIT: Your voice echoes like thunder across the wasteland! Hundreds of haulers turn their lights on in salute!', { qualities: { 'Plague Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: Survivors hear your message and cheer your convoy through the ruined streets.', { qualities: { 'Plague Stage': 1, 'Street Cred': 5 } },
        'MISS: Radio feedback drowns your transmission in static.', { qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague17_harvest_nanite_culture', 'Extract active wild nanite cultures from the hanging creepers [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You use robotic sampling arms to harvest samples of the most resilient mutant strains.',
        'STRONG HIT: Exceptional biological data! You unlock profound insights into molecular self-repair.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 8 } },
        'WEAK HIT: You secure several viable sample tubes.', { cargo: { cryo: 2 }, qualities: { 'Plague Stage': 1 } },
        'MISS: A swarm of aerosol spores clogs your sampling suction motor.', { hullIntegrity: -8, qualities: { 'Plague Stage': 1 } }),
      makeDirectOption('opt_plague17_arm_convoy', 'Mount surplus ammunition belts on your cab machine-gun pintles',
        'You prepare every weapon aboard for the final sprint to the destination.',
        { credits: -200, hullIntegrity: 10, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 18, id: 'story_plague_18_sanitizer_dreadnought', title: 'The Iron Inquisitor', trigger: 'COMBAT_ENCOUNTER',
    text: 'The ultimate obstacle appears: an OmniDyne Titan Purifier Dreadnought—a four-story crawler equipped with dual chemical flamethrowers and heavy magnetic rail cannons, deployed to sterilize all life leaving the red zone.',
    options: [
      makeRollOption('opt_plague18_ram_fuel_tanks', 'Target the Purifier\'s auxiliary napalm fuel tanks with armor-piercing rounds [ROLL +EDGE]', 'edge', 'Cyberware Level',
        'You line up the high-velocity rifle sight on the crawler\'s exposed fuel pods.',
        'STRONG HIT: Magnificent explosion! A massive fireball consumes the Purifier\'s weapon towers, blinding its targeting grid!', { qualities: { 'Plague Stage': 1, 'Street Cred': 12 } },
        'WEAK HIT: The tank ruptures, forcing the Purifier to douse its own flames.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Purifier flamethrowers scorch your side panels as you scramble past.', { hullIntegrity: -22, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague18_hack_crawler_tracks', 'Transmit a track-lock command into the Purifier\'s locomotive drive [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You target its tracked suspension with an emergency braking virus.',
        'STRONG HIT: The massive tracks grind to a violent halt with the screech of shredded steel, leaving the beast immobilized!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 8, 'Street Cred': 6 } },
        'WEAK HIT: The crawler slows significantly, allowing you to slip past its firing arc.', { qualities: { 'Plague Stage': 1 } },
        'MISS: Purifier electronic counter-measures fry your deck\'s secondary transceiver.', { hullIntegrity: -15, qualities: { 'Plague Stage': 1 } }),
      makeRollOption('opt_plague18_speed_dash_under', 'Speed beneath the crawler\'s central belly clearance at full throttle [ROLL +GRIT]', 'grit', 'Contraband Mastery',
        'You aim your hauler directly between the monstrous crawler\'s giant caterpillar treads.',
        'STRONG HIT: Audacious insanity! You shoot beneath the iron titan at 120 km/h, emerging untouched on the clear highway beyond!', { qualities: { 'Plague Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: You clear the belly, though an overhead gantry scrapes your cab roof.', { hullIntegrity: -16, qualities: { 'Plague Stage': 1 } },
        'MISS: The crawler shifts weight, clipping your trailer and throwing your rig into a wild spin before you recover.', { hullIntegrity: -30, qualities: { 'Plague Stage': 1 } })
    ]
  },
  {
    stage: 19, id: 'story_plague_19_nanite_storm_climax', title: 'The Crucible of the Lazarus Matrix [CLIMAX GAUNTLET]', trigger: 'ANY',
    text: 'You have broken out of the red zone and arrived at your final objective! The sky roars with the lightning of a nanite super-storm as you execute your definitive chosen destiny.',
    options: [
      makeRollOption('opt_plague19_cure_distribution', 'Connect the Lazarus Matrix to the Oasis CDC Dispersal Array [HUMANITARIAN PATH] [ROLL +COOL]', 'cool', 'Street Cred',
        'You hook the canister up to the atmospheric dispersal rockets to shower the continent in the antidote.',
        'STRONG HIT: The rockets detonate in a golden shower of healing rain! Millions of lives are saved across the wasteland!', { qualities: { 'Plague Stage': 1, 'Street Cred': 20 } },
        'WEAK HIT: The dispersal rockets launch successfully, distributing the antidote across the major settlements.', { qualities: { 'Plague Stage': 1, 'Street Cred': 10 } },
        'MISS: A rocket misfires, but the main ground tanks begin pumping the cure into the reservoir.', { qualities: { 'Plague Stage': 1 } },
        { qualities: { 'Plague Chosen Path': 1 } }),
      makeRollOption('opt_plague19_nanite_fusion', 'Inject the entire living nanite matrix directly into your hauler\'s core [TRANSHUMAN PATH] [ROLL +CYBER]', 'cyber', 'Tech Literacy',
        'You open the primary fuel injectors and channel the living nanite fluid into the engine block and chassis lattice.',
        'STRONG HIT: Apotheosis of the Iron Beast! Your rig pulses with emerald bio-luminescence as living chitin plating seals every fracture!', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 20 } },
        'WEAK HIT: The bio-nanites assimilate successfully, permanently regenerating your vehicle frame.', { qualities: { 'Plague Stage': 1, 'Tech Literacy': 10 } },
        'MISS: Severe power surges shake the cab before the bio-mechanical link stabilizes.', { qualities: { 'Plague Stage': 1 } },
        { qualities: { 'Plague Chosen Path': 2 } }),
      makeRollOption('opt_plague19_cartel_deal', 'Deliver the sealed Matrix into the hands of the Syndicate Vault Lords [CARTEL PATH] [ROLL +COOL]', 'cool', 'Contraband Mastery',
        'You hand over the canister inside the Syndicate\'s subterranean gold repository.',
        'STRONG HIT: Sovereign fortune! Billions in bearer bonds and elite high-tech rig components are loaded onto your hauler!', { credits: 8000, qualities: { 'Plague Stage': 1, 'Street Cred': 15 } },
        'WEAK HIT: The Syndicate verifies the purity of the sample and honors the massive contract.', { credits: 4000, qualities: { 'Plague Stage': 1 } },
        'MISS: The exchange is tense, but payment clears into your encrypted Swiss bank account.', { qualities: { 'Plague Stage': 1 } },
        { qualities: { 'Plague Chosen Path': 3 } })
    ]
  },
  {
    stage: 20, id: 'story_plague_20_finale', title: 'The Living Legend [FINALE]', trigger: 'DOCK',
    text: 'The saga of the Silicon Rot is over. The wasteland will remember your name for generations. Your rig has been permanently modified with revolutionary bio-synthetic engineering.',
    options: [
      makeDirectOption('opt_plague20_ending_humanitarian', 'Champion the Wasteland with the Bio-Polymer Hull Weave [ENDING 1: AEGIS BIO-WEAVE]',
        'Recognized as the Savior of the Wasteland, your rig is fitted with self-repairing Aegis Bio-Weave plating that continually regenerates armor integrity and boosts transit endurance.',
        {
          credits: 14000,
          hullIntegrity: 100,
          cargo: { cryo: 4, cyberware: 2 },
          qualities: { 'Plague Stage': 80, 'Street Cred': 30, 'Heat': -50 },
          stats: { grit: 1, cool: 1 },
          rig: { maxHull: 30, speedRating: 0.15, name: 'Iron Nomad - Aegis Bio-Weave' }
        }, { qualities: { 'Plague Chosen Path': 1 } }),
      makeDirectOption('opt_plague20_ending_transhuman', 'Rule the Highway as a Living Machine God [ENDING 2: LIVING CHITIN CHASSIS]',
        'Your hauler is no longer mere metal—it is an apex biomechanical organism. The self-repairing chitin armor grants unprecedented maximum hull strength and turbocharged kinetic output.',
        {
          credits: 12000,
          hullIntegrity: 100,
          cargo: { cyberware: 5, batteries: 3 },
          qualities: { 'Plague Stage': 80, 'Tech Literacy': 25, 'Street Cred': 25 },
          stats: { grit: 1, cyber: 1 },
          rig: { maxHull: 40, speedRating: 0.20, name: 'Iron Nomad - Living Chitin Chassis' }
        }, { qualities: { 'Plague Chosen Path': 2 } }),
      makeDirectOption('opt_plague20_ending_cartel', 'Cruise in Sovereign Luxury in the Sterile Bastion [ENDING 3: STERILE BASTION]',
        'Armed with Syndicate gold, diplomatic immunity, and heavy shielded cargo bays, your rig is the most prestigious and secure hauler in the continental underworld.',
        {
          credits: 22000,
          hullIntegrity: 100,
          cargo: { cyberware: 4, chips: 4 },
          qualities: { 'Plague Stage': 80, 'Street Cred': 25, 'Contraband Mastery': 20 },
          stats: { cool: 1, edge: 1 },
          rig: { maxHull: 25, speedRating: 0.15, maxCargoWeight: 5, name: 'Iron Nomad - Sterile Bastion' }
        }, { qualities: { 'Plague Chosen Path': 3 } }),
      makeDirectOption('opt_plague20_farewell', 'Collect final courier bonus and drive quietly toward new horizons',
        'With the plague behind you and your pockets full, you fire up the engine and merge into the vast highway ahead.',
        {
          credits: 10000,
          qualities: { 'Plague Stage': 80, 'Street Cred': 10 },
          stats: { grit: 1 },
          rig: { maxHull: 20 }
        })
    ]
  }
];

const compiledPlague = compileStorylets(plagueData, 'Plague Stage');
writeTsFile('src/data/plagueQuestStorylets.ts', 'PLAGUE_QUEST_STORYLETS', compiledPlague);
