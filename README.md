# TERMINAL HAUL

**Cyberpunk Trade and Convoy Simulation [2099]**

Built with TypeScript and Vite adhering to the [Open Architecture Technical Specification](terminal_haul_complete_technical_system_specification.md).

---

## Features

- **Time Dilation Clock**: 1 Game Day = 2 Real Hours = 7,200 Real Seconds ($1\times$ and $60\times$ Warp Testing modes).
- **200-Node North American Tactical Grid**: 7 geographic sectors, 5 competing factions (`aegis`, `gridlock`, `solaris`, `rustworks`, `neuralfront`) on an interactive $100 \times 100$ coordinate canvas.
- **Euclidean Movement Physics**: Real-time convoy transit math, distance ($D_{\text{km}}$), and duration ($T_{\text{sec}}$) formulas.
- **Dynamic GOAP Economy**: Autonomous faction planning shifts market price multipliers ($M_{\text{goap}}$) dynamically every $\sim 0.05$ Game Days across 6 commodities (*Synthetic Grain, Hydro-Batteries, Cyberware Optics, Neural Processing Chips, Cryo-Medical Pods, Bio-Toxins* [Contraband]).
- **Quality-Driven Narrative Engine**: *Sunless Sea* / *Fallen London*-style storylets evaluated against player traits, Heat, skills, and inventory with branching consequences.
- **Procedural Courier Contracts**: Docking contracts with deadlines, cargo reservation, destination verification, and Net Worth scoring.
- **Pure Web Audio API Synthesizer**: Zero external audio downloads. Real-time procedural waveforms for `click`, `trade`, `event`, and `travel` engine rumble.
- **Retro-Futuristic CRT Terminal**: Toggleable scanlines, chromatic aberration, and Cyan / Amber / Green phosphor palettes.
- **Persistence**: Auto-saving and export/import via HTML5 `localStorage` key `TERMINAL_HAUL_SAVE`.

---

## Development & Testing

```bash
# Install dependencies
npm.cmd install

# Run unit test suite (42 tests)
npm.cmd test

# Build for production
npm.cmd run build

# Start local dev server
npm.cmd run dev
```
