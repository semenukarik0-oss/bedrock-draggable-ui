import { world, system } from '@minecraft/server';
import { SkillsManager } from './skills.js';
import { UIManager } from './ui.js';

// Глобальные менеджеры
let skillsManager;
let uiManager;

// Инициализация при загрузке мира
world.beforeEvents.worldInitialize.subscribe((event) => {
  console.warn('[SkillsTree] Инициализация модуля v1.0 для 1.26.10...');
  
  skillsManager = new SkillsManager();
  uiManager = new UIManager();
  
  skillsManager.init();
  uiManager.init();
  
  console.warn('[SkillsTree] ✅ Модуль загружен успешно!');
});

// Обработка спавна игрока
world.afterEvents.playerSpawn.subscribe((event) => {
  const player = event.player;
  
  if (event.initialSpawn) {
    console.warn(`[SkillsTree] Игрок ${player.name} присоединился`);
    skillsManager.initPlayer(player);
    
    player.sendMessage('§6[SkillsTree] §eМодуль древа навыков активирован!\n§7Используйте §b/function ui/toggle§7 для открытия панели');
  }
});

// Основной игровой цикл (обновление UI каждый тик)
system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    if (uiManager.isPanelOpen(player)) {
      uiManager.updatePanel(player, skillsManager);
    }
  }
}, 1);

// Обработка отключения игрока
world.afterEvents.playerLeave.subscribe((event) => {
  const player = event.player;
  console.warn(`[SkillsTree] Игрок ${player.name} вышел`);
  skillsManager.savePlayer(player);
  uiManager.closePanel(player);
});

// Глобальный экспорт для команд
globalThis.skillsManager = skillsManager;
globalThis.uiManager = uiManager;
