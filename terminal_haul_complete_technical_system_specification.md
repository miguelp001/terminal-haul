# TERMINAL HAUL — Complete Technical & System Specification

**Version:** 1.0.0

**Author / Lead Architect:** AI Systems Lead

**Classification:** Open Architecture Technical Specification

## 1. Executive Summary & Vision

**TERMINAL HAUL** is a web-based, real-time Cyberpunk Trade and Convoy Simulation set across a fragmented 2099 North American continent. Players manage an armored cargo rig navigating an interconnected grid of 200 real-world based metropolitan enclaves, wasteland trade hubs, and corporate arcologies.

The game combines three core loops:

1. **Dynamic Quality-Driven Narrative Engine:** Inspired by *Sunless Sea* and *Fallen London*, player actions and choices modify qualities (stats, reputations, flags) which unlock branch-based storylet events.

2. **GOAP (Goal-Oriented Action Planning) AI Market Dynamics:** Autonomous AI factions pursue strategic goals across North America, driving supply and demand shifts and altering commodity pricing dynamically.

3. **Real-Time World & Convoy Logistics:** A real-time tick clock simulation where 1 Game Day corresponds to 2 Real-World Hours, incorporating distance calculation, cargo management, and faction reputation mechanics.

## 2. Core World Architecture & Factions

### 2.1 The World Grid

The game map models 200 distinct nodes across North America, categorized into seven geographic sectors:

* **Northeast Sector** (e.g., *Chiba-on-Hudson*, *Neo-Syracuse*, *Toronto Metro-Sphere*)

* **Midwest Sector** (e.g., *Detroit Arcology*, *Chicago Citadel*)

* **Pacific Northwest** (e.g., *Cascadia Megalopolis*)

* **Southwest & Wasteland** (e.g., *Mojave Sprawl*, *Baja Sub-City*)

* **Southern Sector** (e.g., *Texas Freehold*, *Gulf Atoll Enclave*)

* **East Coast Sector** (e.g., *Appalachian Fortress*, *Atlanta Cyber-Sprawl*)

* **North Sector** (e.g., *Quebec Bio-Dome*, *Laurentian Citadel*)

### 2.2 Faction Matrix

Five core factions compete for control of North America's remaining resources and data infrastructure:

| Faction ID | Faction Name | Focus & Ideology | Primary Goods Demanded | 
| ----- | ----- | ----- | ----- | 
| `aegis` | **Aegis Security Corp** | Military-industrial bloc, corporate enforcers | Hydro-Batteries, Neural Chips | 
| `gridlock` | **Gridlock Syndicate** | Black-market trade cartel, illegal contraband brokers | Bio-Toxins, Cyberware Optics | 
| `solaris` | **Solaris Nomad Clans** | Highway scavengers, wasteland convoy operators | Synthetic Grain, Hydro-Batteries | 
| `rustworks` | **Rustworks Collective** | Reclaimer engineer unions, heavy industrial salvagers | Cryo-Medical Pods, Raw Metals | 
| `neuralfront` | **Neural Front** | Transhumanist hackers, digital insurgents | Neural Chips, Cyberware Optics | 

## 3. Time, Space & Movement Systems

### 3.1 Time Dilation Scale

* **Standard Ratio:** $1 \text{ Game Day} = 2 \text{ Real-World Hours} = 7,200 \text{ Real Seconds}$.

* **Simulation Tick Rate:** 1 second interval.

* **Time Delta Calculation:**
  

  $$
  \Delta \text{Day} = \frac{1}{7200} \times \text{SpeedMultiplier}
  $$

* **Time Speed Multipliers:**

  * $1\times$: Standard Real-Time mode ($1 \text{ tick} \approx 0.0001388 \text{ Game Days}$)

  * $60\times$: Accelerated Testing mode ($1 \text{ real second} = 1 \text{ Game Minute}$)

### 3.2 Convoy Movement Math

Distance between Location $A(x_1, y_1)$ and Location $B(x_2, y_2)$ on the 100x100 grid canvas:

$$
D_{\text{km}} = \text{Math.round}\left(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \times 45\right)
$$

Travel duration in real seconds ($T_{\text{sec}}$):

$$
T_{\text{sec}} = \max\left(10, \, \text{Math.round}\left(\frac{D_{\text{km}}}{15}\right)\right)
$$

## 4. Quality-Driven Narrative Engine (Storylets)

### 4.1 Concept

Storylets are modular narrative events triggered based on world state and player **Qualities**. A Quality represents any numeric trait, key flag, item count, or skill level associated with the player.

### 4.2 Standard Qualities Schema

* `Cyberware Level`: Physical augmentations and combat rating.

* `Street Cred`: Reputation among underworld fixers.

* `Tech Literacy`: Hacking and data manipulation capability.

* `Contraband Mastery`: Expertise in dealing illegal goods without detection.

* `Enclave Permits`: Legal passkeys for high-security corporate zones.

* `Heat`: Law enforcement / Aegis alert status (0–100).

* `Glitch Rating`: System instability level due to experimental tech.

### 4.3 Storylet Data Structure

```json
{
  "id": "story_border_patrol",
  "title": "Aegis Enclave Checkpoint 09",
  "triggerLocation": "Any",
  "reqs": { "Street Cred": 0 },
  "text": "Heavy autonomous drones hover overhead as Aegis enforcers aim laser sight targeters at your convoy rig.",
  "options": [
    {
      "label": "Show Aegis Clearance Permit",
      "reqs": { "Enclave Permits": 2 },
      "effectText": "The enforcers disarm and open the express lane.",
      "rewards": { 
        "qualities": { "Street Cred": 2, "Heat": -5 }, 
        "rep": { "aegis": 10 } 
      }
    },
    {
      "label": "Bribe enforcers with tech gear [150 Credits]",
      "reqs": { "credits": 150 },
      "effectText": "The squad leader pockets the chip and nods you through.",
      "rewards": { 
        "credits": -150, 
        "qualities": { "Heat": -2 }, 
        "rep": { "aegis": 2 } 
      }
    }
  ]
}
```

## 5. GOAP AI Economy & Dynamic Pricing

### 5.1 Faction Action Planning

Every interval (statistically $\sim 0.05$ Game Days), a GOAP AI step executes. A randomly selected faction evaluates its strategic goal and executes an action that impacts global market commodity price multipliers.

### 5.2 Dynamic Commodity Price Formula

Base Price $P_{\text{base}}$ for commodity $i$ modified by GOAP multiplier $M_{\text{goap}}$, regional bias $R$, and player faction reputation $Rep$:

$$
P_{\text{adjusted}} = P_{\text{base}} \times M_{\text{goap}}(i) \times R_{\text{region}}(i)
$$

Reputation Discount Factor $D_{\text{rep}}$ (where $Rep \in [-100, 100]$):

$$
D_{\text{rep}} = \frac{Rep_{\text{local}}}{100} \times 0.25
$$

Final Transaction Prices:

$$
P_{\text{buy}} = \max\left(10, \, \text{Math.round}\left(P_{\text{adjusted}} \times (1 - D_{\text{rep}})\right)\right)
$$

$$
P_{\text{sell}} = \max\left(5, \, \text{Math.round}\left(P_{\text{adjusted}} \times 0.85 \times (1 + D_{\text{rep}})\right)\right)
$$

### 5.3 Commodities Catalog

1. **Synthetic Grain:** Base: 40 ₵ | Weight: 1.0 T | Legal

2. **Hydro-Batteries:** Base: 120 ₵ | Weight: 2.0 T | Legal

3. **Cyberware Optics:** Base: 350 ₵ | Weight: 1.0 T | Legal

4. **Neural Processing Chips:** Base: 800 ₵ | Weight: 0.5 T | Legal

5. **Cryo-Medical Pods:** Base: 1500 ₵ | Weight: 4.0 T | Legal

6. **Bio-Toxins:** Base: 2200 ₵ | Weight: 1.5 T | **Illegal Contraband**

## 6. Courier Quest System & Leaderboards

### 6.1 Procedural Courier Contracts

When docking at any location $L_{\text{current}}$, the market board generates three procedural contracts to random target locations $L_{\text{target}}$:

* **Reward:** $400 - 1200 \text{ Credits}$

* **Deadline:** $2 - 6 \text{ Game Days}$

* **Completion Check:** Validated automatically upon arrival at $L_{\text{target}}$.

### 6.2 Net Worth & Score Calculation

$$
\text{Net Worth} = \text{Credits} + \sum_{k \in \text{Cargo}} \left( \text{Quantity}(k) \times P_{\text{base}}(k) \right)
$$

Leaderboard ranking is derived from Net Worth, completed contracts, total travel distance, and average faction reputation.

## 7. Data Storage & Persistence

* **Storage Mechanism:** HTML5 `localStorage`

* **Key:** `TERMINAL_HAUL_SAVE`

* **Serialized Payload Schema:**

```json
{
  "credits": 2500,
  "cargo": { "grain": 4, "batteries": 2, "cyberware": 1, "chips": 0, "cryo": 0, "toxins": 0 },
  "qualities": { "Cyberware Level": 1, "Street Cred": 5, "Tech Literacy": 2, "Heat": 0 },
  "factions": { "aegis": 10, "gridlock": -5, "solaris": 20, "rustworks": 15, "neuralfront": 0 },
  "currentLocation": "Neo-Syracuse",
  "gameDays": 1.0,
  "totalDistanceTraveled": 0,
  "eventLogs": []
}
```

## 8. User Interface & Audio Synthesis

1. **CRT Visual Filter:** Toggleable CSS scanline layout and subtle color-shifting chromatic aberration.

2. **Web Audio Synthesizer:** Pure JS AudioContext sound effects generator (no external audio assets required):

   * `click`: Sine wave frequency sweep ($800\text{Hz} \to 400\text{Hz}$).

   * `trade`: Triangle wave upward sweep ($300\text{Hz} \to 900\text{Hz}$).

   * `event`: Sawtooth event alarm frequency ramp.

   * `travel`: Sub-bass engine rumble curve.