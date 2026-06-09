export class UIManager {
  constructor() {
    this.panelStates = new Map();
    this.panelPositions = new Map();
    this.dragStates = new Map();
  }

  init() {
    console.warn('[UIManager] UI Manager инициализирован');
  }

  openPanel(player) {
    const playerId = player.id;
    this.panelStates.set(playerId, true);
    
    if (!this.panelPositions.has(playerId)) {
      this.panelPositions.set(playerId, { x: 10, y: 10 });
    }
    
    player.sendMessage('§a[UI] ✅ Панель открыта');
  }

  closePanel(player) {
    const playerId = player.id;
    this.panelStates.set(playerId, false);
    this.dragStates.delete(playerId);
    player.sendMessage('§c[UI] ✗ Панель закрыта');
  }

  togglePanel(player) {
    const playerId = player.id;
    const isOpen = this.panelStates.get(playerId) || false;
    
    if (isOpen) {
      this.closePanel(player);
    } else {
      this.openPanel(player);
    }
  }

  isPanelOpen(player) {
    return this.panelStates.get(player.id) || false;
  }

  updatePanel(player, skillsManager) {
    const skillsData = skillsManager.getSkillsData(player);
    if (!skillsData) return;
    
    player.onScreenDisplay.setActionBar(
      `§e⚔ Поинты: §f${skillsData.points} | §6Навыки: §f${skillsData.skills.length} (${skillsData.skills.filter(s => s.unlocked).length} доступно)`
    );
  }

  sendFullPanel(player, skillsData) {
    let message = '\n\n§5§l╔════════════════════════════════╗\n';
    message += '║    §6⚔ ДРЕВО НАВЫКОВ ⚔§5       ║\n';
    message += '╚════════════════════════════════╝\n\n';
    
    message += `§eПоинты навыков: §a§l${skillsData.points}\n`;
    message += '§5━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    skillsData.skills.forEach((skill) => {
      if (skill.unlocked) {
        const levelBar = '█'.repeat(skill.level) + '░'.repeat(skill.maxLevel - skill.level);
        message += `${skill.icon} ${skill.name}\n`;
        message += `§7   Уровень: §f[${levelBar}§f] ${skill.level}/${skill.maxLevel}\n`;
        message += `§7   ${skill.description}\n`;
        
        if (skill.canUpgrade) {
          const nextCost = skill.costPerLevel * (skill.level + 1);
          message += `§a   ⬆ Апгрейд: ${nextCost} поинтов\n`;
        }
        message += '\n';
      }
    });
    
    message += '§5━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    
    player.sendMessage(message);
  }
}
