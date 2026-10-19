import 'augmented-ui/augmented-ui.min.css';
import './styles/terminal.css';
import { gameStore } from './state/gameState';
import { MapRenderer } from './ui/mapRenderer';
import type { WorldNode, CommodityId, FactionId } from './types';
import type { StoryletOption } from './types/storylet';
import { COMMODITIES, SECTORS, FACTIONS } from './constants/worldData';
import { RouteGraph } from './sim/routeGraph';
import { soundFX } from './audio/soundFX';
import { multiplayerClient } from './network/multiplayerClient';
import type { ChatMessage, LeaderboardEntry } from './server/types';

class TerminalApp {
  private mapRenderer!: MapRenderer;
  private selectedDestinationNode: WorldNode | null = null;
  private activeCenterTab: 'map' | 'market' | 'contracts' | 'qualities' | 'leaderboard' | 'comms' = 'map';
  private currentTheme: 'cyan' | 'amber' | 'green' = 'cyan';
  private prevConvoyStatus: string = 'DOCKED';

  // DOM Elements - Header
  private timeDisplay = document.getElementById('timeDisplay')!;
  private networkStatusBadge = document.getElementById('networkStatusBadge')!;
  private netStatusText = document.getElementById('netStatusText')!;
  private btnAudioToggle = document.getElementById('btnAudioToggle') as HTMLButtonElement;
  private btnThemeToggle = document.getElementById('btnThemeToggle') as HTMLButtonElement;
  private btnResetGame = document.getElementById('btnResetGame') as HTMLButtonElement;
  private btnSystemMenu = document.getElementById('btnSystemMenu') as HTMLButtonElement | null;
  private systemMenuModal = document.getElementById('systemMenuModal') as HTMLElement | null;
  private btnDismissSystemMenu = document.getElementById('btnDismissSystemMenu') as HTMLButtonElement | null;

  // Left Column Telemetry
  private convoyStatusBadge = document.getElementById('convoyStatusBadge')!;
  private hullValue = document.getElementById('hullValue')!;
  private hullBar = document.getElementById('hullBar')!;
  private btnRepairHull = document.getElementById('btnRepairHull') as HTMLButtonElement;
  private cargoWeightValue = document.getElementById('cargoWeightValue')!;
  private cargoBar = document.getElementById('cargoBar')!;
  private creditsValue = document.getElementById('creditsValue')!;
  private netWorthValue = document.getElementById('netWorthValue')!;
  private totalDistValue = document.getElementById('totalDistValue')!;
  private miniStatGrit = document.getElementById('miniStatGrit');
  private miniStatEdge = document.getElementById('miniStatEdge');
  private miniStatCyber = document.getElementById('miniStatCyber');
  private miniStatCool = document.getElementById('miniStatCool');
  private cargoManifestList = document.getElementById('cargoManifestList')!;

  // Tabs & Containers
  private tabMap = document.getElementById('tabMap') as HTMLButtonElement;
  private tabMarket = document.getElementById('tabMarket') as HTMLButtonElement;
  private tabContracts = document.getElementById('tabContracts') as HTMLButtonElement;
  private tabQualities = document.getElementById('tabQualities') as HTMLButtonElement;
  private tabLeaderboard = document.getElementById('tabLeaderboard') as HTMLButtonElement;
  private tabComms = document.getElementById('tabComms') as HTMLButtonElement | null;
  private chatTabUnreadDot = document.getElementById('chatTabUnreadDot') as HTMLElement | null;

  private mapViewContainer = document.getElementById('mapViewContainer')!;
  private marketViewContainer = document.getElementById('marketViewContainer')!;
  private contractsViewContainer = document.getElementById('contractsViewContainer')!;
  private qualitiesViewContainer = document.getElementById('qualitiesViewContainer')!;
  private leaderboardViewContainer = document.getElementById('leaderboardViewContainer')!;
  private commsViewContainer = document.getElementById('commsViewContainer') as HTMLElement | null;
  private btnToggleNavDrawer = document.getElementById('btnToggleNavDrawer') as HTMLButtonElement | null;
  private navDispatchPanel = document.getElementById('navDispatchPanel') as HTMLElement | null;

  private leaderboardTableBody = document.getElementById('leaderboardTableBody')!;
  private playerLeaderboardRankBadge = document.getElementById('playerLeaderboardRankBadge')!;
  private latestLeaderboard: LeaderboardEntry[] = [];

  private marketTableBody = document.getElementById('marketTableBody')!;
  private marketIntelText = document.getElementById('marketIntelText')!;
  private statsGrid = document.getElementById('statsGrid');
  private qualitiesGrid = document.getElementById('qualitiesGrid')!;
  private factionsList = document.getElementById('factionsList')!;

  // Contracts View
  private careerRankTitle = document.getElementById('careerRankTitle')!;
  private careerScoreVal = document.getElementById('careerScoreVal')!;
  private activeContractsList = document.getElementById('activeContractsList')!;
  private availableContractsList = document.getElementById('availableContractsList')!;

  private currentLocationBadge = document.getElementById('currentLocationBadge')!;
  private transitBanner = document.getElementById('transitBanner')!;
  private transitTargetText = document.getElementById('transitTargetText')!;
  private transitProgressBar = document.getElementById('transitProgressBar')!;
  private transitTelemetry = document.getElementById('transitTelemetry')!;

  // Right Column Controls
  private sectorFilterSelect = document.getElementById('sectorFilterSelect') as HTMLSelectElement;
  private destinationSelect = document.getElementById('destinationSelect') as HTMLSelectElement;
  private btnDispatch = document.getElementById('btnDispatch') as HTMLButtonElement;
  private btnCancelRoute = document.getElementById('btnCancelRoute') as HTMLButtonElement;
  private chkAutoAdvance = document.getElementById('chkAutoAdvance') as HTMLInputElement;

  private targetName = document.getElementById('targetName')!;
  private targetSector = document.getElementById('targetSector')!;
  private targetFaction = document.getElementById('targetFaction')!;
  private targetRouteHops = document.getElementById('targetRouteHops')!;
  private targetWaypoints = document.getElementById('targetWaypoints')!;
  private targetDistance = document.getElementById('targetDistance')!;
  private targetDuration = document.getElementById('targetDuration')!;

  private mapHoverHud = document.getElementById('mapHoverHud')!;
  private hoverTitle = document.getElementById('hoverTitle')!;
  private hoverSector = document.getElementById('hoverSector')!;
  private hoverFaction = document.getElementById('hoverFaction')!;
  private hoverDesc = document.getElementById('hoverDesc')!;

  private eventLogList = document.getElementById('eventLogList')!;

  // Comms Tabs & Chat Elements
  private btnTabLogs = document.getElementById('btnTabLogs') as HTMLButtonElement;
  private btnTabChat = document.getElementById('btnTabChat') as HTMLButtonElement;
  private chatUnreadDot = document.getElementById('chatUnreadDot')!;
  private commsLogContainer = document.getElementById('commsLogContainer')!;
  private commsChatContainer = document.getElementById('commsChatContainer')!;
  private chatMessagesList = document.getElementById('chatMessagesList')!;
  private chatForm = document.getElementById('chatForm') as HTMLFormElement;
  private chatInput = document.getElementById('chatInput') as HTMLInputElement;
  private chatCallsignDisplay = document.getElementById('chatCallsignDisplay') as HTMLElement | null;
  private btnOpenCallsignModal = document.getElementById('btnOpenCallsignModal') as HTMLButtonElement | null;
  private callsignEditContainer = document.getElementById('callsignEditContainer') as HTMLElement | null;
  private callsignEditInput = document.getElementById('callsignEditInput') as HTMLInputElement | null;
  private btnSaveCallsign = document.getElementById('btnSaveCallsign') as HTMLButtonElement | null;
  private btnCancelCallsign = document.getElementById('btnCancelCallsign') as HTMLButtonElement | null;
  private rigName = document.getElementById('rigName') as HTMLElement | null;
  private activeCommsTab: 'logs' | 'chat' = 'logs';
  private unreadChatCount: number = 0;

  // Storylet Modal Elements
  private storyletModal = document.getElementById('storyletModal')!;
  private storyletTitle = document.getElementById('storyletTitle')!;
  private storyletText = document.getElementById('storyletText')!;
  private storyletOutcome = document.getElementById('storyletOutcome')!;
  private storyletRollBanner = document.getElementById('storyletRollBanner');
  private storyletRollDice = document.getElementById('storyletRollDice');
  private storyletRollModifier = document.getElementById('storyletRollModifier');
  private storyletRollTotal = document.getElementById('storyletRollTotal');
  private storyletRollBadge = document.getElementById('storyletRollBadge');
  private storyletOutcomeText = document.getElementById('storyletOutcomeText')!;
  private storyletOutcomeChanges = document.getElementById('storyletOutcomeChanges')!;
  private storyletOptionsList = document.getElementById('storyletOptionsList')!;
  private storyletFooter = document.getElementById('storyletFooter')!;
  private btnDismissStorylet = document.getElementById('btnDismissStorylet') as HTMLButtonElement;
  private isShowingOutcome = false;

  constructor() {
    this.initMap();
    this.initControls();
    this.initTabs();
    this.initStoryletModalEvents();
    this.populateDestinations();
    this.initMultiplayer();
    this.bindStore();
    this.startClock();
  }

  private initMap(): void {
    const canvas = document.getElementById('worldMapCanvas') as HTMLCanvasElement;
    this.mapRenderer = new MapRenderer(
      canvas,
      gameStore.getAllNodes(),
      (selectedNode) => {
        soundFX.playClick();
        this.handleMapNodeClick(selectedNode);
      },
      (hoveredNode, coords) => {
        this.handleMapNodeHover(hoveredNode, coords);
      }
    );
  }

  private handleMapNodeHover(hovered: WorldNode | null, coords: { x: number; y: number } | null): void {
    if (hovered && coords && this.activeCenterTab === 'map') {
      const sector = SECTORS[hovered.sector];
      const faction = FACTIONS[hovered.dominantFaction];
      this.hoverTitle.textContent = hovered.name.toUpperCase();
      this.hoverSector.textContent = `SECTOR: ${sector ? sector.name : hovered.sector}`;
      this.hoverFaction.textContent = `FACTION: ${faction ? faction.name : hovered.dominantFaction} (SEC ${hovered.securityLevel})`;
      this.hoverDesc.textContent = hovered.description;
      this.positionMapTooltip(coords.x, coords.y);
    } else {
      this.mapHoverHud.style.display = 'none';
    }
  }

  private positionMapTooltip(nodeX: number, nodeY: number): void {
    this.mapHoverHud.style.display = 'flex';

    const container = this.mapHoverHud.parentElement;
    const viewportWidth = container?.clientWidth || window.innerWidth;
    const viewportHeight = container?.clientHeight || window.innerHeight;

    const tooltipWidth = this.mapHoverHud.offsetWidth || 260;
    const tooltipHeight = this.mapHoverHud.offsetHeight || 90;

    // Center tooltip horizontally above the node
    let left = nodeX - tooltipWidth / 2;

    // Position above the node with a 12px margin
    let top = nodeY - tooltipHeight - 12;

    // If overflowing top edge of viewport, flip below the node with a 16px margin
    if (top < 10) {
      top = nodeY + 16;
    }

    // Keep within horizontal boundaries with a 10px margin
    if (left < 10) {
      left = 10;
    } else if (left + tooltipWidth > viewportWidth - 10) {
      left = Math.max(10, viewportWidth - tooltipWidth - 10);
    }

    // Keep within bottom boundary with a 10px margin
    if (top + tooltipHeight > viewportHeight - 10) {
      top = Math.max(10, viewportHeight - tooltipHeight - 10);
    }

    this.mapHoverHud.style.left = `${Math.round(left)}px`;
    this.mapHoverHud.style.top = `${Math.round(top)}px`;
  }

  private initTabs(): void {
    const setTab = (tab: 'map' | 'market' | 'contracts' | 'qualities' | 'leaderboard' | 'comms') => {
      soundFX.playClick();
      this.activeCenterTab = tab;
      if (tab !== 'map') {
        this.mapHoverHud.style.display = 'none';
      }
      this.tabMap.classList.toggle('active', tab === 'map');
      this.tabMarket.classList.toggle('active', tab === 'market');
      this.tabContracts.classList.toggle('active', tab === 'contracts');
      this.tabQualities.classList.toggle('active', tab === 'qualities');
      this.tabLeaderboard.classList.toggle('active', tab === 'leaderboard');
      if (this.tabComms) this.tabComms.classList.toggle('active', tab === 'comms');

      this.mapViewContainer.style.display = tab === 'map' ? 'flex' : 'none';
      this.marketViewContainer.style.display = tab === 'market' ? 'flex' : 'none';
      this.contractsViewContainer.style.display = tab === 'contracts' ? 'flex' : 'none';
      this.qualitiesViewContainer.style.display = tab === 'qualities' ? 'flex' : 'none';
      this.leaderboardViewContainer.style.display = tab === 'leaderboard' ? 'flex' : 'none';
      if (this.commsViewContainer) this.commsViewContainer.style.display = tab === 'comms' ? 'flex' : 'none';

      if (tab === 'comms') {
        if (this.chatTabUnreadDot) this.chatTabUnreadDot.style.display = 'none';
        if (this.activeCommsTab === 'chat') {
          this.scrollChatToBottom();
        }
      }

      if (tab === 'market') this.renderMarketTable();
      if (tab === 'contracts') this.renderContractsView();
      if (tab === 'qualities') this.renderQualitiesView();
      if (tab === 'leaderboard') this.renderLeaderboardView();
    };

    this.tabMap.addEventListener('click', () => setTab('map'));
    this.tabMarket.addEventListener('click', () => setTab('market'));
    this.tabContracts.addEventListener('click', () => setTab('contracts'));
    this.tabQualities.addEventListener('click', () => setTab('qualities'));
    this.tabLeaderboard.addEventListener('click', () => setTab('leaderboard'));
    if (this.tabComms) this.tabComms.addEventListener('click', () => setTab('comms'));
  }

  private initControls(): void {
    const clock = gameStore.getClock();
    // Enforce 1X persistent real-time speed
    clock.setSpeedMultiplier(1);
    clock.resume();

    this.btnAudioToggle.addEventListener('click', () => {
      const isMuted = soundFX.toggleMute();
      this.btnAudioToggle.textContent = isMuted ? 'AUDIO: OFF' : 'AUDIO: ON';
      this.btnAudioToggle.classList.toggle('active', !isMuted);
      if (!isMuted) soundFX.playClick();
    });

    this.btnThemeToggle.addEventListener('click', () => {
      soundFX.playClick();
      if (this.currentTheme === 'cyan') {
        this.currentTheme = 'amber';
        document.documentElement.setAttribute('data-theme', 'amber');
        this.btnThemeToggle.textContent = 'PALETTE: AMBER';
      } else if (this.currentTheme === 'amber') {
        this.currentTheme = 'green';
        document.documentElement.setAttribute('data-theme', 'green');
        this.btnThemeToggle.textContent = 'PALETTE: GREEN';
      } else {
        this.currentTheme = 'cyan';
        document.documentElement.removeAttribute('data-theme');
        this.btnThemeToggle.textContent = 'PALETTE: CYAN';
      }
    });

    // Auto-save on page exit / refresh
    window.addEventListener('beforeunload', () => {
      gameStore.autoSave();
    });

    // Continuous background autosave every 10 seconds
    setInterval(() => {
      gameStore.autoSave();
    }, 10000);

    this.btnRepairHull.addEventListener('click', () => {
      soundFX.playClick();
      const res = gameStore.repairHull();
      if (res.success) {
        soundFX.playTrade();
      }
    });

    this.btnResetGame.addEventListener('click', () => {
      soundFX.playClick();
      if (confirm('RESET CONVOY TELEMETRY: Are you sure you want to re-initialize your carrier profile?')) {
        gameStore.resetGame();
      }
    });

    if (this.btnSystemMenu && this.systemMenuModal) {
      this.btnSystemMenu.addEventListener('click', () => {
        soundFX.playClick();
        this.systemMenuModal!.style.display = 'flex';
      });
    }

    if (this.btnDismissSystemMenu && this.systemMenuModal) {
      this.btnDismissSystemMenu.addEventListener('click', () => {
        soundFX.playClick();
        this.systemMenuModal!.style.display = 'none';
      });
    }

    if (this.systemMenuModal) {
      this.systemMenuModal.addEventListener('click', (e) => {
        if (e.target === this.systemMenuModal) {
          this.systemMenuModal!.style.display = 'none';
        }
      });
    }

    const toggleNavDrawer = () => {
      soundFX.playClick();
      this.navDispatchPanel!.classList.toggle('drawer-open');
      const isOpen = this.navDispatchPanel!.classList.contains('drawer-open');
      if (this.btnToggleNavDrawer) {
        this.btnToggleNavDrawer.textContent = isOpen ? '▼ HIDE DISPATCH' : '▲ ROUTE DISPATCH';
      }
    };

    if (this.btnToggleNavDrawer && this.navDispatchPanel) {
      this.btnToggleNavDrawer.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNavDrawer();
      });
    }

    const navDispatchHeader = document.getElementById('navDispatchHeader');
    if (navDispatchHeader && this.navDispatchPanel) {
      navDispatchHeader.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleNavDrawer();
        }
      });
    }

    this.sectorFilterSelect.addEventListener('change', () => {
      soundFX.playClick();
      this.populateDestinations();
    });

    this.destinationSelect.addEventListener('change', () => {
      soundFX.playClick();
      const nodeId = this.destinationSelect.value;
      const node = gameStore.getNode(nodeId);
      if (node) {
        this.selectDestination(node);
      }
    });

    this.btnDispatch.addEventListener('click', () => {
      const state = gameStore.getState();
      if (state.activeRoute && state.status === 'DOCKED') {
        soundFX.playClick();
        gameStore.resumeActiveRoute();
      } else if (this.selectedDestinationNode) {
        soundFX.playClick();
        const autoAdvance = this.chkAutoAdvance.checked;
        gameStore.departTo(this.selectedDestinationNode.id, autoAdvance);
      }

      if (window.innerWidth <= 768 && this.navDispatchPanel) {
        this.navDispatchPanel.classList.remove('drawer-open');
        if (this.btnToggleNavDrawer) {
          this.btnToggleNavDrawer.textContent = '▲ ROUTE DISPATCH';
        }
      }
    });

    this.btnCancelRoute.addEventListener('click', () => {
      soundFX.playClick();
      gameStore.cancelRoute();
    });

    this.chkAutoAdvance.addEventListener('change', () => {
      gameStore.setAutoAdvance(this.chkAutoAdvance.checked);
    });

    // Comms Tab Switching
    this.btnTabLogs.addEventListener('click', () => {
      soundFX.playClick();
      this.activeCommsTab = 'logs';
      this.btnTabLogs.classList.add('active');
      this.btnTabChat.classList.remove('active');
      this.commsLogContainer.style.display = 'flex';
      this.commsChatContainer.style.display = 'none';
    });

    this.btnTabChat.addEventListener('click', () => {
      soundFX.playClick();
      this.activeCommsTab = 'chat';
      this.unreadChatCount = 0;
      this.chatUnreadDot.style.display = 'none';
      this.btnTabChat.classList.add('active');
      this.btnTabLogs.classList.remove('active');
      this.commsLogContainer.style.display = 'none';
      this.commsChatContainer.style.display = 'flex';
      this.chatInput.focus();
      this.scrollChatToBottom();
    });

    this.chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSendChat();
    });

    // Callsign editing in Global Frequency Chat
    this.btnOpenCallsignModal?.addEventListener('click', () => {
      soundFX.playClick();
      this.showCallsignEditor();
    });

    this.btnSaveCallsign?.addEventListener('click', () => {
      this.saveCallsignFromInput();
    });

    this.btnCancelCallsign?.addEventListener('click', () => {
      soundFX.playClick();
      this.hideCallsignEditor();
    });

    this.callsignEditInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.saveCallsignFromInput();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.hideCallsignEditor();
      }
    });
  }

  private initStoryletModalEvents(): void {
    this.btnDismissStorylet.addEventListener('click', () => {
      soundFX.playClick();
      this.isShowingOutcome = false;
      this.storyletOutcome.style.display = 'none';
      this.storyletFooter.style.display = 'none';
      this.storyletModal.style.display = 'none';
      gameStore.dismissStorylet();
    });
  }

  private handleMapNodeClick(node: WorldNode): void {
    this.selectDestination(node);
    this.destinationSelect.value = node.id;
    if (window.innerWidth <= 768 && this.navDispatchPanel) {
      this.navDispatchPanel.classList.add('drawer-open');
      if (this.btnToggleNavDrawer) {
        this.btnToggleNavDrawer.textContent = '▼ HIDE DISPATCH';
      }
    }
  }

  private selectDestination(node: WorldNode): void {
    this.selectedDestinationNode = node;
    this.mapRenderer.setSelectedNode(node);

    const current = gameStore.getCurrentNode();
    const sector = SECTORS[node.sector];
    const faction = FACTIONS[node.dominantFaction];

    this.targetName.textContent = node.name.toUpperCase();
    this.targetSector.textContent = `Sector: ${sector ? sector.name : node.sector}`;
    this.targetFaction.textContent = `Dominant Faction: ${faction ? faction.name : node.dominantFaction}`;

    const route = gameStore.getRouteForDestination(node.id);
    this.mapRenderer.setPlannedRoute(route);

    const isCurrent = node.id === current.id;
    const inTransit = gameStore.getState().status === 'IN_TRANSIT';

    if (route && route.length >= 2) {
      const hops = route.length - 1;
      const totalDist = RouteGraph.calculateRouteDistanceKm(route);
      const totalDur = RouteGraph.calculateRouteDurationSeconds(route);

      if (hops === 1) {
        this.targetRouteHops.textContent = 'Route: Direct Highway (1 Leg)';
        this.targetWaypoints.textContent = `Waypoints: ${route[0].name} → ${route[1].name}`;
      } else {
        this.targetRouteHops.textContent = `Route: ${hops} Legs (Fewest Stops)`;
        this.targetWaypoints.textContent = `Waypoints: ${route.map((n) => n.name).join(' → ')}`;
      }

      this.targetDistance.textContent = `Total Route: ${totalDist} km`;
      this.targetDuration.textContent = `Est. Transit: ${totalDur}s`;
    } else {
      this.targetRouteHops.textContent = isCurrent ? 'Route: Current Station' : 'Route: Unreachable';
      this.targetWaypoints.textContent = 'Waypoints: —';
      this.targetDistance.textContent = 'Total Route: 0 km';
      this.targetDuration.textContent = 'Est. Transit: 0s';
    }

    this.btnDispatch.disabled = isCurrent || inTransit;
    this.btnDispatch.textContent = isCurrent ? 'CURRENT LOCATION' : 'ENGAGE ENGINES [DISPATCH]';
  }

  private populateDestinations(): void {
    const filter = this.sectorFilterSelect.value;
    const nodes = gameStore.getAllNodes();
    const current = gameStore.getCurrentNode();

    this.destinationSelect.innerHTML = '';

    const filtered = filter === 'ALL' ? nodes : nodes.filter((n) => n.sector === filter);

    for (const node of filtered) {
      const opt = document.createElement('option');
      opt.value = node.id;
      opt.textContent = `${node.name} [${node.sector.toUpperCase()}]`;
      if (node.id === current.id) {
        opt.textContent += ' (CURRENT)';
      }
      this.destinationSelect.appendChild(opt);
    }

    if (filtered.length > 0) {
      const firstValid = filtered.find((n) => n.id !== current.id) || filtered[0];
      this.destinationSelect.value = firstValid.id;
      this.selectDestination(firstValid);
    }
  }

  private initMultiplayer(): void {
    multiplayerClient.setCallsign(gameStore.getState().convoy.name);

    multiplayerClient.onStatusChange((status, count) => {
      if (status === 'ONLINE') {
        this.networkStatusBadge.className = 'network-badge online';
        this.netStatusText.textContent = count > 1 ? `NET: LIVE [1X REAL - ${count} HAULERS]` : 'NET: LIVE [1X REAL-TIME]';
        this.networkStatusBadge.title = 'Connected to authoritative game cluster. Real-time persistent universe.';
      } else if (status === 'CONNECTING') {
        this.networkStatusBadge.className = 'network-badge connecting';
        this.netStatusText.textContent = 'NET: CONNECTING...';
        this.networkStatusBadge.title = 'Connecting to multiplayer server...';
      } else {
        this.networkStatusBadge.className = 'network-badge offline';
        this.netStatusText.textContent = 'NET: LOCAL OFFLINE [1X REAL]';
        this.networkStatusBadge.title = 'Offline mode. Start server with "npm run server" to connect with other haulers.';
      }
    });

    multiplayerClient.onConvoysSync((convoys) => {
      this.mapRenderer.setOtherConvoys(convoys);
    });

    multiplayerClient.onMarketUpdate((adjustments) => {
      gameStore.setSharedMarketAdjustments(adjustments);
    });

    multiplayerClient.onTradeBroadcast((trade) => {
      if (trade.playerId !== multiplayerClient.getPlayerId()) {
        const action = trade.tradeType === 'BUY' ? 'purchased' : 'sold';
        gameStore.addLog(
          `[GLOBAL TRADE] ${trade.callsign} ${action} ${trade.quantity}x ${trade.commodityName} at ${trade.nodeName} (${trade.unitPrice} ₵/ea).`
        );
      }
    });

    // Relay local trades to server
    gameStore.onTradeExecuted((nodeId, nodeName, commodityId, quantity, unitPrice, tradeType) => {
      multiplayerClient.broadcastTrade(nodeId, nodeName, commodityId, quantity, unitPrice, tradeType);
    });

    // Auto-save backup to server
    gameStore.onGameSaved((exportJson) => {
      multiplayerClient.backupStateToServer(exportJson);
    });

    // Real-time Global Chat Listener
    multiplayerClient.onChatMessage((chat) => {
      this.appendChatMessage(chat);
      if (this.activeCenterTab !== 'comms' || this.activeCommsTab !== 'chat') {
        if (chat.playerId !== multiplayerClient.getPlayerId()) {
          this.unreadChatCount++;
          this.chatUnreadDot.style.display = 'inline-block';
          if (this.chatTabUnreadDot) this.chatTabUnreadDot.style.display = 'inline-block';
          soundFX.playEvent();
        }
      }
    });

    // Real-time Leaderboard Listener
    multiplayerClient.onLeaderboardSync((leaderboard) => {
      this.latestLeaderboard = leaderboard;
      this.updateMyLeaderboardRankBadge();
      if (this.activeCenterTab === 'leaderboard') {
        this.renderLeaderboardView();
      }
    });

    // Connect to server with current player profile telemetry
    const state = gameStore.getState();
    multiplayerClient.setCallsign(state.convoy.name);
    if (this.chatCallsignDisplay) {
      this.chatCallsignDisplay.textContent = state.convoy.name;
    }
    multiplayerClient.connect(state.currentLocationId, {
      netWorth: gameStore.calculateNetWorth(),
      credits: state.credits,
      completedContractsCount: state.completedContractsCount,
      totalDistanceTraveled: state.totalDistanceTraveled,
      careerScore: gameStore.calculateCareerScore(),
      rankTitle: gameStore.getCareerRankTitle()
    });

    // Periodic telemetry & position broadcast
    setInterval(() => {
      const curState = gameStore.getState();
      if (curState.status === 'IN_TRANSIT' && curState.transit) {
        multiplayerClient.broadcastPosition(
          curState.currentLocationId,
          'IN_TRANSIT',
          curState.transit.originId,
          curState.transit.destinationId,
          curState.transit.progressPercent
        );
      } else {
        multiplayerClient.broadcastPosition(curState.currentLocationId, 'DOCKED');
      }
      this.broadcastCurrentTelemetry();
    }, 1000);
  }

  private broadcastCurrentTelemetry(): void {
    const curState = gameStore.getState();
    const currentNode = gameStore.getCurrentNode();
    multiplayerClient.broadcastLeaderboard({
      netWorth: gameStore.calculateNetWorth(),
      credits: curState.credits,
      completedContractsCount: curState.completedContractsCount,
      totalDistanceTraveled: curState.totalDistanceTraveled,
      careerScore: gameStore.calculateCareerScore(),
      rankTitle: gameStore.getCareerRankTitle(),
      currentLocationName: currentNode.name
    });
  }

  private updateMyLeaderboardRankBadge(): void {
    const myId = multiplayerClient.getPlayerId();
    const sorted = this.getSortedLeaderboard();
    const index = sorted.findIndex((e) => e.playerId === myId);
    if (index !== -1) {
      this.playerLeaderboardRankBadge.textContent = `YOUR RANK: #${index + 1} OF ${sorted.length} HAULERS`;
    } else {
      this.playerLeaderboardRankBadge.textContent = `YOUR RANK: #1`;
    }
  }

  private getSortedLeaderboard(): LeaderboardEntry[] {
    const list = [...this.latestLeaderboard];
    const myId = multiplayerClient.getPlayerId();
    const found = list.some((e) => e.playerId === myId);
    if (!found) {
      const curState = gameStore.getState();
      list.push({
        playerId: myId,
        callsign: curState.convoy.name,
        netWorth: gameStore.calculateNetWorth(),
        credits: curState.credits,
        completedContractsCount: curState.completedContractsCount,
        totalDistanceTraveled: curState.totalDistanceTraveled,
        careerScore: gameStore.calculateCareerScore(),
        rankTitle: gameStore.getCareerRankTitle(),
        currentLocationName: gameStore.getCurrentNode().name,
        lastSeen: Date.now(),
        isOnline: true
      });
    }
    return list.sort((a, b) => b.netWorth - a.netWorth);
  }

  private renderLeaderboardView(): void {
    const sorted = this.getSortedLeaderboard();
    this.updateMyLeaderboardRankBadge();

    this.leaderboardTableBody.innerHTML = '';

    for (let i = 0; i < sorted.length; i++) {
      const entry = sorted[i];
      const rank = i + 1;
      const isSelf = entry.playerId === multiplayerClient.getPlayerId();

      const tr = document.createElement('tr');
      tr.className = `leaderboard-row ${isSelf ? 'my-row' : ''}`;

      const rankClass = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : 'rank-standard';

      tr.innerHTML = `
        <td><span class="rank-pill ${rankClass}">#${rank}</span></td>
        <td>
          <span class="hauler-status-dot ${entry.isOnline ? 'online' : 'offline'}" title="${entry.isOnline ? 'Active on cluster' : 'Docked / Offline'}"></span>
          <span class="hauler-callsign">${entry.callsign}${isSelf ? ' <span style="color: var(--neon-cyan); font-size: 0.7rem;">[YOU]</span>' : ''}</span>
          ${entry.currentLocationName ? `<span style="color: var(--text-muted); font-size: 0.68rem; margin-left: 6px;">[${entry.currentLocationName}]</span>` : ''}
        </td>
        <td class="net-worth-val">${entry.netWorth.toLocaleString()} ₵</td>
        <td style="color: var(--neon-green); font-weight: bold;">${entry.credits.toLocaleString()} ₵</td>
        <td>${entry.completedContractsCount}</td>
        <td>${entry.totalDistanceTraveled.toLocaleString()} km</td>
        <td style="color: var(--neon-amber);">${entry.careerScore.toLocaleString()} PTS</td>
        <td style="color: var(--text-muted); font-size: 0.72rem;">${entry.rankTitle}</td>
      `;

      this.leaderboardTableBody.appendChild(tr);
    }
  }

  private handleSendChat(): void {
    const text = this.chatInput.value.trim();
    if (!text) return;

    // Check for callsign slash commands (/callsign <name>, /nick <name>, /name <name>)
    if (text.startsWith('/nick ') || text.startsWith('/callsign ') || text.startsWith('/name ')) {
      const parts = text.split(' ');
      const newCallsign = parts.slice(1).join(' ').trim();
      if (newCallsign) {
        this.changeCallsign(newCallsign);
        this.chatInput.value = '';
        return;
      }
    }

    soundFX.playClick();
    const currentNode = gameStore.getCurrentNode();
    multiplayerClient.sendChatMessage(text, currentNode.name);
    this.chatInput.value = '';
    this.chatInput.focus();
  }

  private showCallsignEditor(): void {
    if (!this.callsignEditContainer || !this.callsignEditInput) return;
    this.callsignEditContainer.style.display = 'flex';
    this.callsignEditInput.value = gameStore.getState().convoy.name;
    this.callsignEditInput.focus();
    this.callsignEditInput.select();
  }

  private hideCallsignEditor(): void {
    if (!this.callsignEditContainer) return;
    this.callsignEditContainer.style.display = 'none';
    this.chatInput.focus();
  }

  private saveCallsignFromInput(): void {
    if (!this.callsignEditInput) return;
    const newCallsign = this.callsignEditInput.value.trim();
    if (newCallsign) {
      this.changeCallsign(newCallsign);
    }
    this.hideCallsignEditor();
  }

  public changeCallsign(rawName: string): boolean {
    const trimmed = rawName.trim().substring(0, 28);
    if (!trimmed) return false;

    // 1. Update GameStore state
    gameStore.setCallsign(trimmed);

    // 2. Update Multiplayer Client
    multiplayerClient.updateCallsign(trimmed);

    // 3. Update HUD and Chat Displays
    if (this.rigName) {
      this.rigName.textContent = trimmed;
    }
    if (this.chatCallsignDisplay) {
      this.chatCallsignDisplay.textContent = trimmed;
    }

    // 4. Broadcast updated position and leaderboard telemetry
    const curState = gameStore.getState();
    multiplayerClient.broadcastPosition(
      curState.currentLocationId,
      curState.status === 'IN_TRANSIT' ? 'IN_TRANSIT' : 'DOCKED'
    );
    this.broadcastCurrentTelemetry();

    // 5. Sound & Chat notice
    soundFX.playClick();
    this.appendChatSystemNotice(`Transponder updated. Callsign registered as "${trimmed}".`);

    // 6. Refresh Leaderboard & Map
    this.updateMyLeaderboardRankBadge();
    if (this.activeCenterTab === 'leaderboard') {
      this.renderLeaderboardView();
    }
    this.mapRenderer.updateState(curState);

    return true;
  }

  public appendChatSystemNotice(text: string): void {
    const row = document.createElement('div');
    row.className = 'chat-msg-row system-notice';
    const date = new Date();
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    row.innerHTML = `
      <div class="chat-msg-meta">
        <span class="system-notice-badge">[TRANSPONDER // FREQ 8080]</span>
        <span class="chat-msg-time">${timeStr}</span>
      </div>
      <div class="chat-msg-body system-notice-text">${text}</div>
    `;
    this.chatMessagesList.appendChild(row);
    this.scrollChatToBottom();
  }

  private appendChatMessage(chat: ChatMessage): void {
    const row = document.createElement('div');
    const isSelf = chat.playerId === multiplayerClient.getPlayerId();
    row.className = `chat-msg-row ${isSelf ? 'self' : 'remote'}`;

    const date = new Date(chat.timestamp);
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const meta = document.createElement('div');
    meta.className = 'chat-msg-meta';

    const sender = document.createElement('span');
    sender.className = 'chat-sender-callsign';
    sender.textContent = chat.callsign + (isSelf ? ' (YOU)' : '');

    if (chat.locationName) {
      const loc = document.createElement('span');
      loc.className = 'chat-sender-loc';
      loc.textContent = `// ${chat.locationName}`;
      sender.appendChild(loc);
    }

    const time = document.createElement('span');
    time.className = 'chat-msg-time';
    time.textContent = timeStr;

    meta.appendChild(sender);
    meta.appendChild(time);

    const body = document.createElement('div');
    body.className = 'chat-msg-body';
    body.textContent = chat.text;

    row.appendChild(meta);
    row.appendChild(body);

    this.chatMessagesList.appendChild(row);

    // Limit displayed messages to 100
    while (this.chatMessagesList.children.length > 100) {
      this.chatMessagesList.removeChild(this.chatMessagesList.firstChild!);
    }

    this.scrollChatToBottom();
  }

  private scrollChatToBottom(): void {
    requestAnimationFrame(() => {
      this.chatMessagesList.scrollTop = this.chatMessagesList.scrollHeight;
    });
  }

  private bindStore(): void {
    gameStore.subscribe((state) => {
      // Audio cue and immediate network broadcast on convoy status change
      if (this.prevConvoyStatus !== state.status) {
        if (state.status === 'IN_TRANSIT') {
          soundFX.startTravelRumble();
        } else if (state.status === 'DOCKED') {
          soundFX.stopTravelRumble();
          soundFX.playEvent();
        }
        this.prevConvoyStatus = state.status;

        if (state.status === 'IN_TRANSIT' && state.transit) {
          multiplayerClient.broadcastPosition(
            state.currentLocationId,
            'IN_TRANSIT',
            state.transit.originId,
            state.transit.destinationId,
            state.transit.progressPercent
          );
        } else {
          multiplayerClient.broadcastPosition(state.currentLocationId, 'DOCKED');
        }
      }

      this.mapRenderer.updateState(state);
      this.renderPlayerHUD(state);
      this.renderCargo(state);
      this.renderTransit(state);
      this.renderLogs(state);
      if (this.activeCenterTab === 'market') {
        this.renderMarketTable();
      }
      if (this.activeCenterTab === 'contracts') {
        this.renderContractsView();
      }
      if (this.activeCenterTab === 'qualities') {
        this.renderQualitiesView();
      }
      if (this.activeCenterTab === 'leaderboard') {
        this.renderLeaderboardView();
      }
      this.updateMyLeaderboardRankBadge();
      this.checkStoryletModal(state);
    });
  }

  private startClock(): void {
    const clock = gameStore.getClock();
    clock.start();

    setInterval(() => {
      this.timeDisplay.textContent = clock.formatGameTime().formatted;
    }, 200);
  }

  private renderPlayerHUD(state: typeof gameStore extends { getState(): infer S } ? S : never): void {
    const currentNode = gameStore.getCurrentNode();
    this.currentLocationBadge.textContent = currentNode.name.toUpperCase();

    if (this.rigName) {
      this.rigName.textContent = state.convoy.name;
    }
    if (this.chatCallsignDisplay) {
      this.chatCallsignDisplay.textContent = state.convoy.name;
    }

    this.convoyStatusBadge.textContent = state.status;
    this.convoyStatusBadge.className =
      state.status === 'IN_TRANSIT' ? 'status-value' : 'status-value accent';

    this.hullValue.textContent = `${state.convoy.hullIntegrity}%`;
    this.hullBar.style.width = `${state.convoy.hullIntegrity}%`;

    const missingHull = state.convoy.maxHull - state.convoy.hullIntegrity;
    if (this.btnRepairHull) {
      if (state.status === 'IN_TRANSIT') {
        this.btnRepairHull.disabled = true;
        this.btnRepairHull.textContent = 'REPAIR: DOCKED ONLY';
      } else if (missingHull <= 0) {
        this.btnRepairHull.disabled = true;
        this.btnRepairHull.textContent = 'HULL 100% [OPTIMAL]';
      } else {
        const cost = missingHull * 10;
        this.btnRepairHull.disabled = state.credits < 10;
        this.btnRepairHull.textContent = `REPAIR CHASSIS (-${cost.toLocaleString()} ₵)`;
      }
    }

    const maxCargo = state.convoy.maxCargoWeight;
    const curCargo = state.convoy.currentCargoWeight;
    this.cargoWeightValue.textContent = `${curCargo.toFixed(1)} / ${maxCargo.toFixed(1)} T`;
    this.cargoBar.style.width = `${Math.min(100, (curCargo / maxCargo) * 100)}%`;

    this.creditsValue.textContent = `${state.credits.toLocaleString()} ₵`;
    this.netWorthValue.textContent = `${gameStore.calculateNetWorth().toLocaleString()} ₵`;
    this.totalDistValue.textContent = `${state.totalDistanceTraveled.toLocaleString()} km`;

    if (state.stats) {
      if (this.miniStatGrit) this.miniStatGrit.textContent = `${state.stats.grit >= 0 ? '+' : ''}${state.stats.grit}`;
      if (this.miniStatEdge) this.miniStatEdge.textContent = `${state.stats.edge >= 0 ? '+' : ''}${state.stats.edge}`;
      if (this.miniStatCyber) this.miniStatCyber.textContent = `${state.stats.cyber >= 0 ? '+' : ''}${state.stats.cyber}`;
      if (this.miniStatCool) this.miniStatCool.textContent = `${state.stats.cool >= 0 ? '+' : ''}${state.stats.cool}`;
    }

    if (state.activeRoute && state.status === 'DOCKED') {
      const nextLegIndex = state.activeRoute.currentLegIndex;
      const nextNode = gameStore.getNode(state.activeRoute.routeNodeIds[nextLegIndex]);
      this.btnDispatch.disabled = false;
      this.btnDispatch.textContent = nextNode
        ? `RESUME TO ${nextNode.name.toUpperCase()} (Leg ${nextLegIndex}/${state.activeRoute.routeNodeIds.length - 1})`
        : 'RESUME EXPEDITION';
      this.btnCancelRoute.style.display = 'inline-block';
    } else if (state.status === 'IN_TRANSIT') {
      this.btnDispatch.disabled = true;
      this.btnDispatch.textContent = state.activeRoute && state.activeRoute.routeNodeIds.length > 2
        ? `EXPEDITION IN TRANSIT [Leg ${state.activeRoute.currentLegIndex}/${state.activeRoute.routeNodeIds.length - 1}]`
        : 'CONVOY IN TRANSIT';
      this.btnCancelRoute.style.display = state.activeRoute ? 'inline-block' : 'none';
    } else if (this.selectedDestinationNode) {
      const isCurrent = this.selectedDestinationNode.id === state.currentLocationId;
      this.btnDispatch.disabled = isCurrent;
      this.btnDispatch.textContent = isCurrent ? 'CURRENT LOCATION' : 'ENGAGE ENGINES [DISPATCH]';
      this.btnCancelRoute.style.display = 'none';
    }
  }

  private renderCargo(state: typeof gameStore extends { getState(): infer S } ? S : never): void {
    this.cargoManifestList.innerHTML = '';
    for (const [id, qty] of Object.entries(state.cargo)) {
      const def = COMMODITIES[id as CommodityId];
      if (!def) continue;

      const row = document.createElement('div');
      row.className = 'status-row cargo-row';
      row.style.fontSize = '0.74rem';
      row.style.padding = '4px 8px';
      row.style.margin = '3px 0';
      if (qty > 0) {
        row.setAttribute('data-augmented-ui', 'tl-clip br-clip both');
        row.style.background = 'rgba(0, 240, 255, 0.06)';
      }

      const label = document.createElement('span');
      label.className = 'status-label';
      label.textContent = def.name;
      if (qty > 0) {
        label.style.color = '#fff';
        label.style.fontWeight = 'bold';
      }
      if (def.isContraband) {
        label.style.color = 'var(--neon-red)';
        label.textContent += ' [CONTRABAND]';
      }

      const val = document.createElement('span');
      val.className = 'status-value';
      if (qty > 0) {
        val.style.color = 'var(--neon-cyan)';
        val.style.fontWeight = 'bold';
      } else {
        val.style.color = 'var(--text-muted)';
      }
      val.textContent = `${qty} units (${(qty * def.weightTonnes).toFixed(1)} T)`;

      row.appendChild(label);
      row.appendChild(val);
      this.cargoManifestList.appendChild(row);
    }
  }

  private renderContractsView(): void {
    const state = gameStore.getState();

    // Career Score & Rank
    this.careerRankTitle.textContent = gameStore.getCareerRankTitle().toUpperCase();
    this.careerScoreVal.textContent = `${gameStore.calculateCareerScore().toLocaleString()} PTS`;

    // 1. Active Contracts
    this.activeContractsList.innerHTML = '';
    if (state.activeContracts.length === 0) {
      this.activeContractsList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.78rem;">No active delivery contracts. Accept consignments from the Dock Board below.</div>`;
    } else {
      for (const contract of state.activeContracts) {
        const def = COMMODITIES[contract.commodityId];
        const owned = state.cargo[contract.commodityId] || 0;
        const hasEnough = owned >= contract.requiredQuantity;
        const isAtDestination = contract.destinationNodeId === state.currentLocationId;
        const isExpired = contract.status === 'EXPIRED' || (contract.daysRemaining !== undefined && contract.daysRemaining <= 0);

        const card = document.createElement('div');
        card.className = 'contract-card';
        card.setAttribute('data-augmented-ui', 'tl-clip tr-rect br-clip bl-rect both');
        card.style.borderColor = isExpired
          ? 'var(--neon-red)'
          : isAtDestination && hasEnough
          ? 'var(--neon-green)'
          : isAtDestination
          ? 'var(--neon-amber)'
          : hasEnough
          ? 'var(--neon-cyan)'
          : 'var(--border-color)';

        let statusBadge = `<div class="contract-faction">${contract.issuingFaction.toUpperCase()} // CONSIGNMENT</div>`;
        if (isExpired) {
          statusBadge = `<div class="contract-faction" style="color: var(--neon-red); font-weight: bold;">✖ DEADLINE EXPIRED</div>`;
        } else if (isAtDestination && hasEnough) {
          statusBadge = `<div class="contract-faction" style="color: var(--neon-green); font-weight: bold;">★ AT TARGET DESTINATION // READY FOR HANDOFF</div>`;
        } else if (isAtDestination) {
          statusBadge = `<div class="contract-faction" style="color: var(--neon-amber); font-weight: bold;">⚠ AT TARGET DESTINATION // CARGO REQUIRED</div>`;
        }

        let destinationHtml = `<div>Target: <strong style="color: var(--neon-cyan);">${contract.destinationNodeName}</strong> [${contract.destinationSector.toUpperCase()}]</div>`;
        if (isAtDestination) {
          destinationHtml = `<div>Target: <strong style="color: var(--neon-green);">${contract.destinationNodeName}</strong> <span style="color: var(--neon-green); font-size: 0.72rem;">[DOCKED HERE]</span></div>`;
        }

        let payloadHtml = `<div>Payload: ${contract.requiredQuantity}x ${def.name} (${owned}/${contract.requiredQuantity} in hold)</div>`;
        if (isAtDestination && !hasEnough && !isExpired) {
          payloadHtml += `<div style="color: var(--neon-amber); font-size: 0.72rem; margin-top: 3px;">⚠ Missing ${contract.requiredQuantity - owned}x ${def.name}. Load consignment or buy at Exchange to deliver!</div>`;
        }

        let actionButtonsHtml = '';
        if (isAtDestination && hasEnough && !isExpired) {
          actionButtonsHtml = `
            <button class="term-btn" style="padding: 5px 14px; font-size: 0.75rem; border-color: var(--neon-green); color: var(--neon-green); font-weight: bold; background: rgba(57, 255, 20, 0.15);" data-deliver="${contract.id}">
              ✔ COMPLETE DELIVERY [+${contract.rewardCredits} ₵]
            </button>
          `;
        } else if (isAtDestination && !hasEnough && !isExpired) {
          actionButtonsHtml = `
            <div style="display: flex; gap: 6px;">
              <button class="term-btn" style="padding: 4px 8px; font-size: 0.7rem; border-color: var(--neon-amber); color: var(--neon-amber);" data-load="${contract.id}">
                LOAD PAYLOAD (${contract.requiredQuantity - owned}x)
              </button>
              <button class="term-btn" style="padding: 3px 8px; font-size: 0.7rem; border-color: var(--neon-red); color: var(--neon-red);" data-abandon="${contract.id}">ABANDON</button>
            </div>
          `;
        } else if (isExpired) {
          actionButtonsHtml = `
            <button class="term-btn" style="padding: 3px 8px; font-size: 0.7rem; border-color: var(--neon-red); color: var(--neon-red);" data-abandon="${contract.id}">DISMISS EXPIRED</button>
          `;
        } else {
          actionButtonsHtml = `
            <button class="term-btn" style="padding: 3px 8px; font-size: 0.7rem; border-color: var(--neon-red); color: var(--neon-red);" data-abandon="${contract.id}">ABANDON</button>
          `;
        }

        card.innerHTML = `
          ${statusBadge}
          <div class="contract-title">${contract.title}</div>
          <div class="contract-meta">
            ${destinationHtml}
            ${payloadHtml}
            <div>Deadline: Day ${contract.deadlineGameDay.toFixed(1)} (${(contract.daysRemaining ?? 0).toFixed(1)} days left)</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
            <span class="contract-reward">+${contract.rewardCredits} ₵ (+${contract.rewardReputation} Rep)</span>
            ${actionButtonsHtml}
          </div>
        `;

        card.querySelector('[data-deliver]')?.addEventListener('click', () => {
          soundFX.playTrade();
          gameStore.deliverContract(contract.id);
        });

        card.querySelector('[data-load]')?.addEventListener('click', () => {
          soundFX.playTrade();
          gameStore.loadConsignmentCargo(contract.id);
        });

        card.querySelector('[data-abandon]')?.addEventListener('click', () => {
          soundFX.playClick();
          gameStore.abandonContract(contract.id);
        });

        this.activeContractsList.appendChild(card);
      }
    }

    // 2. Available Contracts
    this.availableContractsList.innerHTML = '';
    if (state.availableContracts.length === 0) {
      this.availableContractsList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.78rem;">No contracts currently posted at this dock.</div>`;
    } else {
      for (const contract of state.availableContracts) {
        const def = COMMODITIES[contract.commodityId];
        const payloadWeight = contract.requiredQuantity * def.weightTonnes;
        const availableCapacity = state.convoy.maxCargoWeight - state.convoy.currentCargoWeight;
        const canFit = payloadWeight <= availableCapacity;

        const card = document.createElement('div');
        card.className = 'contract-card';
        card.setAttribute('data-augmented-ui', 'tl-clip tr-rect br-clip bl-rect both');

        card.innerHTML = `
          <div class="contract-faction">${contract.issuingFaction.toUpperCase()} // AVAILABLE</div>
          <div class="contract-title">${contract.title}</div>
          <div class="contract-meta">
            <div>Destination: <strong style="color: var(--neon-cyan);">${contract.destinationNodeName}</strong> [${contract.destinationSector.toUpperCase()}]</div>
            <div>Payload to Load: ${contract.requiredQuantity}x ${def.name} (${payloadWeight.toFixed(1)} T)</div>
            <div>Term: Must arrive by Day ${contract.deadlineGameDay.toFixed(1)}</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
            <span class="contract-reward">+${contract.rewardCredits} ₵ (+${contract.rewardReputation} Rep)</span>
            <button class="term-btn" style="padding: 4px 10px; font-size: 0.72rem; border-color: ${canFit ? 'var(--neon-green)' : '#555'}; color: ${canFit ? 'var(--neon-green)' : '#888'};" data-accept="${contract.id}" ${canFit ? '' : 'disabled'}>
              ${canFit ? 'ACCEPT CONSIGNMENT' : 'HOLD FULL'}
            </button>
          </div>
        `;

        card.querySelector('[data-accept]')?.addEventListener('click', () => {
          soundFX.playEvent();
          gameStore.acceptContract(contract.id);
        });

        this.availableContractsList.appendChild(card);
      }
    }
  }

  private renderMarketTable(): void {
    const state = gameStore.getState();
    const quotes = gameStore.getCurrentMarketQuotes();
    const isDocked = state.status === 'DOCKED';

    const lastMarketLog = state.eventLogs.find((l) => l.includes('[MARKET INTEL]'));
    if (lastMarketLog) {
      this.marketIntelText.textContent = lastMarketLog.replace(/^\[.*?\]\s*/, '');
    }

    this.marketTableBody.innerHTML = '';

    const commodities: CommodityId[] = ['grain', 'batteries', 'cyberware', 'chips', 'cryo', 'toxins'];

    for (const cid of commodities) {
      const def = COMMODITIES[cid];
      const quote = quotes[cid];
      const owned = state.cargo[cid] || 0;

      const tr = document.createElement('tr');

      const tdName = document.createElement('td');
      tdName.innerHTML = `<span style="font-weight: bold;">${def.name}</span>`;
      if (def.isContraband) {
        tdName.innerHTML += `<span class="contraband-badge">CONTRABAND</span>`;
      }
      tr.appendChild(tdName);

      const tdWeight = document.createElement('td');
      tdWeight.textContent = `${def.weightTonnes.toFixed(1)} T`;
      tr.appendChild(tdWeight);

      const tdBase = document.createElement('td');
      tdBase.textContent = `${def.basePrice} ₵`;
      tr.appendChild(tdBase);

      const tdGoap = document.createElement('td');
      const goapColor = quote.goapMultiplier > 1.05 ? '#ff0055' : quote.goapMultiplier < 0.95 ? '#39ff14' : '#d0e8f2';
      tdGoap.innerHTML = `<span style="color: ${goapColor}; font-weight: bold;">${quote.goapMultiplier.toFixed(2)}x</span>`;
      tr.appendChild(tdGoap);

      const tdBias = document.createElement('td');
      tdBias.textContent = `${quote.regionalBias.toFixed(2)}x`;
      tr.appendChild(tdBias);

      const tdBuy = document.createElement('td');
      tdBuy.innerHTML = `<span style="color: var(--neon-cyan); font-weight: bold;">${quote.buyPrice} ₵</span>`;
      tr.appendChild(tdBuy);

      const tdSell = document.createElement('td');
      tdSell.innerHTML = `<span style="color: var(--neon-green); font-weight: bold;">${quote.sellPrice} ₵</span>`;
      tr.appendChild(tdSell);

      const tdHold = document.createElement('td');
      tdHold.textContent = `${owned} (${(owned * def.weightTonnes).toFixed(1)} T)`;
      if (owned > 0) {
        tdHold.style.color = 'var(--neon-cyan)';
        tdHold.style.fontWeight = 'bold';
      }
      tr.appendChild(tdHold);

      const tdActions = document.createElement('td');
      const btnGroup = document.createElement('div');
      btnGroup.className = 'trade-btn-group';

      const btnBuy1 = document.createElement('button');
      btnBuy1.className = 'trade-btn buy';
      btnBuy1.setAttribute('data-augmented-ui', 'tl-clip br-clip both');
      btnBuy1.textContent = '+1';
      btnBuy1.title = `Buy 1 unit for ${quote.buyPrice} ₵`;
      const canBuy1 = isDocked && state.credits >= quote.buyPrice && (state.convoy.currentCargoWeight + def.weightTonnes <= state.convoy.maxCargoWeight);
      btnBuy1.disabled = !canBuy1;
      btnBuy1.onclick = () => {
        soundFX.playTrade();
        gameStore.buyCommodity(cid, 1);
      };
      btnGroup.appendChild(btnBuy1);

      const btnBuyMax = document.createElement('button');
      btnBuyMax.className = 'trade-btn buy';
      btnBuyMax.setAttribute('data-augmented-ui', 'tl-clip br-clip both');
      btnBuyMax.textContent = '+MAX';
      const maxAffordable = Math.floor(state.credits / quote.buyPrice);
      const remainingWeight = Math.max(0, state.convoy.maxCargoWeight - state.convoy.currentCargoWeight);
      const maxStorable = Math.floor(remainingWeight / def.weightTonnes);
      const maxBuyable = Math.max(0, Math.min(maxAffordable, maxStorable));
      btnBuyMax.title = `Buy max (${maxBuyable} units)`;
      btnBuyMax.disabled = !isDocked || maxBuyable === 0;
      btnBuyMax.onclick = () => {
        soundFX.playTrade();
        gameStore.buyCommodity(cid, maxBuyable);
      };
      btnGroup.appendChild(btnBuyMax);

      const btnSell1 = document.createElement('button');
      btnSell1.className = 'trade-btn sell';
      btnSell1.setAttribute('data-augmented-ui', 'tr-clip bl-clip both');
      btnSell1.textContent = '-1';
      btnSell1.title = `Sell 1 unit for +${quote.sellPrice} ₵`;
      btnSell1.disabled = !isDocked || owned <= 0;
      btnSell1.onclick = () => {
        soundFX.playTrade();
        gameStore.sellCommodity(cid, 1);
      };
      btnGroup.appendChild(btnSell1);

      const btnSellAll = document.createElement('button');
      btnSellAll.className = 'trade-btn sell';
      btnSellAll.setAttribute('data-augmented-ui', 'tr-clip bl-clip both');
      btnSellAll.textContent = '-ALL';
      btnSellAll.title = `Sell all ${owned} units for +${owned * quote.sellPrice} ₵`;
      btnSellAll.disabled = !isDocked || owned <= 0;
      btnSellAll.onclick = () => {
        soundFX.playTrade();
        gameStore.sellCommodity(cid, owned);
      };
      btnGroup.appendChild(btnSellAll);

      tdActions.appendChild(btnGroup);
      tr.appendChild(tdActions);

      this.marketTableBody.appendChild(tr);
    }
  }

  private renderQualitiesView(): void {
    const state = gameStore.getState();

    // 1. Render Core Stats (PbtA)
    const statDefs = [
      { key: 'grit', name: 'GRIT', desc: 'Chassis strength, rig durability, brute kinetic force, withstanding damage.' },
      { key: 'edge', name: 'EDGE', desc: 'Reflexes, evasive maneuvers, highway speed, dodging ambushes and hazards.' },
      { key: 'cyber', name: 'CYBER', desc: 'Interface mastery, scanner telemetry spoofing, hacking, rig electronics.' },
      { key: 'cool', name: 'COOL', desc: 'Street presence, haggling, intimidation, underworld diplomacy, deception.' }
    ] as const;

    if (this.statsGrid && state.stats) {
      this.statsGrid.innerHTML = '';
      for (const def of statDefs) {
        const val = state.stats[def.key] ?? 0;
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.setAttribute('data-augmented-ui', 'tl-clip tr-clip br-clip bl-clip both');

        const header = document.createElement('div');
        header.className = 'stat-card-header';

        const name = document.createElement('span');
        name.className = 'stat-card-name';
        name.textContent = def.name;

        const valEl = document.createElement('span');
        valEl.className = 'stat-card-val';
        valEl.textContent = `${val >= 0 ? '+' : ''}${val}`;

        header.appendChild(name);
        header.appendChild(valEl);

        const desc = document.createElement('div');
        desc.className = 'stat-card-desc';
        desc.textContent = def.desc;

        card.appendChild(header);
        card.appendChild(desc);
        this.statsGrid.appendChild(card);
      }
    }

    // 2. Render Pilot Qualities
    this.qualitiesGrid.innerHTML = '';
    for (const [qName, val] of Object.entries(state.qualities)) {
      const card = document.createElement('div');
      card.className = 'quality-card';
      card.setAttribute('data-augmented-ui', 'tl-clip br-clip both');

      const label = document.createElement('div');
      label.className = 'quality-name';
      label.textContent = qName;

      const num = document.createElement('div');
      num.className = 'quality-value';
      num.textContent = val.toString();

      if (qName === 'Heat' && val > 0) {
        num.style.color = val > 40 ? '#ff0055' : 'var(--neon-amber)';
      }
      if (qName === 'Glitch Rating' && val > 0) {
        num.style.color = '#ff0055';
      }

      card.appendChild(label);
      card.appendChild(num);
      this.qualitiesGrid.appendChild(card);
    }

    this.factionsList.innerHTML = '';
    for (const [fid, rep] of Object.entries(state.factions) as [FactionId, number][]) {
      const faction = FACTIONS[fid];
      const card = document.createElement('div');
      card.className = 'faction-card';
      card.setAttribute('data-augmented-ui', 'tr-clip bl-clip both');

      const top = document.createElement('div');
      top.style.display = 'flex';
      top.style.justifyContent = 'space-between';
      top.style.fontSize = '0.78rem';

      const name = document.createElement('span');
      name.style.fontWeight = 'bold';
      name.textContent = faction.name;

      const repVal = document.createElement('span');
      const repColor = rep > 0 ? 'var(--neon-green)' : rep < 0 ? '#ff0055' : 'var(--text-muted)';
      repVal.style.color = repColor;
      repVal.style.fontWeight = 'bold';
      repVal.textContent = `${rep > 0 ? '+' : ''}${rep} / 100`;

      top.appendChild(name);
      top.appendChild(repVal);

      const barWrap = document.createElement('div');
      barWrap.className = 'rep-bar-wrap';

      const fill = document.createElement('div');
      fill.className = 'rep-bar-fill';
      const pct = Math.max(0, Math.min(100, (rep + 100) / 2));
      fill.style.width = `${pct}%`;
      fill.style.background = rep > 0 ? 'var(--neon-green)' : rep < 0 ? '#ff0055' : 'var(--neon-amber)';

      barWrap.appendChild(fill);

      card.appendChild(top);
      card.appendChild(barWrap);
      this.factionsList.appendChild(card);
    }
  }

  private checkStoryletModal(state: typeof gameStore extends { getState(): infer S } ? S : never): void {
    if (this.isShowingOutcome) {
      return;
    }

    const storylet = state.activeStorylet;
    if (!storylet) {
      this.storyletModal.style.display = 'none';
      return;
    }

    if (this.storyletModal.style.display !== 'flex') {
      soundFX.playEvent();
    }

    this.storyletModal.style.display = 'flex';
    this.storyletOutcome.style.display = 'none';
    this.storyletFooter.style.display = 'none';
    this.storyletOptionsList.style.display = 'flex';

    this.storyletTitle.textContent = storylet.title.toUpperCase();
    this.storyletText.textContent = storylet.text;
    this.storyletOptionsList.innerHTML = '';

    const currentNode = gameStore.getCurrentNode();
    const narrativeEngine = gameStore.getNarrativeEngine();

    for (const option of storylet.options) {
      const btn = document.createElement('button');
      btn.className = 'storylet-option-btn';
      btn.setAttribute('data-augmented-ui', 'tl-clip br-clip both');

      const labelSpan = document.createElement('span');
      labelSpan.className = 'storylet-opt-label';

      if (option.statRoll) {
        const rollBadge = document.createElement('span');
        rollBadge.className = 'stat-roll-badge';
        rollBadge.setAttribute('data-augmented-ui', 'tr-clip bl-clip both');
        const statName = option.statRoll.toUpperCase();
        let bonusText = '';
        if (option.qualityBonusKey && state.qualities) {
          const qVal = state.qualities[option.qualityBonusKey] ?? 0;
          if (qVal >= (option.qualityBonusThreshold ?? 3)) {
            bonusText = ` +1 ${option.qualityBonusKey.toUpperCase()}`;
          }
        }
        rollBadge.textContent = `[ROLL +${statName}${bonusText}]`;
        labelSpan.appendChild(rollBadge);
      }

      const textSpan = document.createElement('span');
      textSpan.className = 'storylet-opt-text';
      textSpan.textContent = option.label;
      labelSpan.appendChild(textSpan);

      const reqCheck = narrativeEngine.checkRequirement(option.reqs, state, currentNode);

      btn.appendChild(labelSpan);

      if (!reqCheck.meets) {
        btn.disabled = true;
        const warnTag = document.createElement('span');
        warnTag.className = 'req-warning-tag';
        warnTag.textContent = reqCheck.missing[0] ? `[LOCKED: ${reqCheck.missing[0]}]` : '[REQUIREMENT NOT MET]';
        btn.appendChild(warnTag);
      } else {
        btn.onclick = () => this.handleOptionChosen(option);
      }

      this.storyletOptionsList.appendChild(btn);
    }
  }

  private handleOptionChosen(option: StoryletOption): void {
    soundFX.playClick();
    this.isShowingOutcome = true;
    const result = gameStore.selectStoryletOption(option.id);
    if (!result.success) {
      this.isShowingOutcome = false;
      return;
    }

    this.storyletOptionsList.style.display = 'none';
    this.storyletOutcome.style.display = 'block';
    this.storyletFooter.style.display = 'block';
    this.storyletModal.style.display = 'flex';

    if (result.rollResult && this.storyletRollBanner) {
      this.storyletRollBanner.style.display = 'flex';
      const rr = result.rollResult;
      if (this.storyletRollDice) {
        this.storyletRollDice.textContent = `🎲 2d6 [ ${rr.dice[0]} + ${rr.dice[1]} = ${rr.diceTotal} ]`;
      }
      if (this.storyletRollModifier) {
        const statName = rr.statKey ? rr.statKey.toUpperCase() : 'STAT';
        const statMod = `${rr.statValue >= 0 ? '+' : ''}${rr.statValue} ${statName}`;
        const qualMod = rr.qualityBonusKey && rr.qualityBonus > 0 ? ` +${rr.qualityBonus} ${rr.qualityBonusKey.toUpperCase()}` : '';
        this.storyletRollModifier.textContent = `${statMod}${qualMod}`;
      }
      if (this.storyletRollTotal) {
        this.storyletRollTotal.textContent = `= ${rr.total}`;
      }
      if (this.storyletRollBadge) {
        this.storyletRollBadge.textContent = rr.outcomeLabel;
        const badgeClass = rr.outcome === 'STRONG_HIT' ? 'strong' : rr.outcome === 'WEAK_HIT' ? 'weak' : 'miss';
        this.storyletRollBadge.className = `storylet-roll-badge ${badgeClass}`;
      }
    } else if (this.storyletRollBanner) {
      this.storyletRollBanner.style.display = 'none';
    }

    this.storyletOutcomeText.textContent = result.effectText || result.option?.effectText || 'Outcome applied.';
    if (result.changes && result.changes.length > 0) {
      const itemsHtml = result.changes
        .map((c) => {
          const isPositive = c.includes('+');
          const isNegative = c.includes('-');
          const color = isPositive ? 'var(--neon-green)' : isNegative ? '#ff4444' : 'var(--neon-cyan)';
          return `<div style="padding: 2px 0; color: ${color}; font-weight: bold;">▸ ${c}</div>`;
        })
        .join('');
      this.storyletOutcomeChanges.innerHTML = `
        <div style="margin-top: 6px; border-top: 1px dashed var(--border-color); padding-top: 6px;">
          <div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">MANIFEST & TELEMETRY UPDATES:</div>
          ${itemsHtml}
        </div>
      `;
    } else {
      this.storyletOutcomeChanges.textContent = 'No direct material changes.';
    }
  }

  private renderTransit(state: typeof gameStore extends { getState(): infer S } ? S : never): void {
    if (state.status === 'IN_TRANSIT' && state.transit) {
      this.transitBanner.style.display = 'block';
      const dest = gameStore.getNode(state.transit.destinationId);
      const destName = dest ? dest.name.toUpperCase() : 'WAYPOINT';

      if (state.activeRoute && state.transit.legIndex && state.transit.totalLegs && state.transit.totalLegs > 1) {
        const finalDest = gameStore.getNode(state.activeRoute.finalDestinationId);
        const finalName = finalDest ? finalDest.name.toUpperCase() : 'TARGET';
        this.transitTargetText.innerHTML = `EXPEDITION [Leg ${state.transit.legIndex}/${state.transit.totalLegs} to ${finalName}]: &rarr; ${destName} (${state.transit.distanceKm} km)`;
      } else {
        this.transitTargetText.innerHTML = `TRANSIT IN PROGRESS: &rarr; ${destName} (${state.transit.distanceKm} km)`;
      }

      this.transitProgressBar.style.width = `${state.transit.progressPercent}%`;

      const remainingSec = Math.max(0, state.transit.totalDurationSeconds - state.transit.elapsedSeconds);
      this.transitTelemetry.textContent = `LEG PROGRESS: ${state.transit.progressPercent.toFixed(1)}% | EST REMAINING: ${remainingSec}s`;
    } else {
      this.transitBanner.style.display = 'none';
    }
  }

  private renderLogs(state: typeof gameStore extends { getState(): infer S } ? S : never): void {
    this.eventLogList.innerHTML = '';
    for (const log of state.eventLogs) {
      const li = document.createElement('li');
      li.className = 'log-item';
      li.textContent = log;
      this.eventLogList.appendChild(li);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new TerminalApp();
});
