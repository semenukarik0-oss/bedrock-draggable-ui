# Bedrock Draggable UI - Древо Навыков

**Полнофункциональный модуль перетаскиваемого интерфейса для Minecraft Bedrock Edition**

## 🎮 Возможности

✅ **Draggable панель** - перетаскивание мышью и сенсором  
✅ **Древо навыков** - Diablo-стиль с узлами и связями  
✅ **Система апгрейдов** - кнопки для прокачки скиллов  
✅ **Показать/Скрыть** - управление видимостью панели  
✅ **Работает в ванили** - Single Player и Server  
✅ **JSON UI + Script API** - гибридный подход  
✅ **Поддержка тача** - мобильные устройства и планшеты  

## 📦 Структура

```
bedrock-draggable-ui/
├── behavior_packs/skillstree_bp/
├── resource_packs/skillstree_rp/
├── README.md
├── INSTALLATION.md
├── USAGE.md
└── DEVELOPMENT.md
```

## 🚀 Установка

### Способ 1: .mcaddon файл (рекомендуется)
1. Скачайте `skillstree.mcaddon`
2. Откройте файл (Minecraft добавит автоматически)
3. Создайте новый мир с включенным Experimental Gameplay

### Способ 2: Ручная установка
1. Скопируйте `behavior_packs/skillstree_bp` в `com.mojang/behavior_packs/`
2. Скопируйте `resource_packs/skillstree_rp` в `com.mojang/resource_packs/`
3. Активируйте пакеты в Settings

## ⌨️ Команды

```mcfunction
/function ui/toggle           # Показать/Скрыть панель
/function ui/open             # Открыть
/function ui/close            # Закрыть
/function skills/upgrade      # Прокачать навык
/function skills/reset        # Сброс всех навыков
```

## 🌳 Система навыков

### Уровень 1 - Базовые
- 🔥 **Файербол** (5 уровней, 10-50 поинтов)
- ❄ **Фростболт** (5 уровней, 10-50 поинтов)
- ⚡ **Удар молнии** (5 уровней, 10-50 поинтов)

### Уровень 2 - Усиленные
- 🌋 **Инферно** (3 уровня, требует Файербол)
- ❄️ **Буран** (3 уровня, требует Фростболт)
- ⚡⚡ **Цепная молния** (3 уровня, требует Удар молнии)

### Уровень 3 - Ультимейты
- ✦ **Удар метеора** (1 уровень, требует Инферно + Цепная молния)

## 🎮 Управление

| Действие | Команда/Способ |
|----------|-----------------|
| Открыть панель | `/function ui/toggle` |
| Апгрейд навыка | Клик на кнопку или команда |
| Дать поинты | `/scoreboard players add @s skillstree_points 10` |
| Мобильное управление | Тач по элементам |

## 💾 Система сохранения

Данные хранятся в:
- **Dynamic Properties** - текущая сессия
- **Scoreboard** - постоянное хранилище

```mcfunction
/scoreboard objectives add skillstree_points dummy
/scoreboard objectives add skillstree_level dummy
```

## 🔧 Технические детали

**Поддерживаемые платформы:**
- ✅ Windows 10/11
- ✅ Xbox
- ✅ Nintendo Switch
- ✅ Mobile (Android/iOS)
- ✅ Realms
- ✅ Dedicated Servers

**Требования:**
- Minecraft Bedrock 1.20+
- @minecraft/server v1.8.0+
- @minecraft/server-ui v1.0.0+
- Experimental Gameplay включен

## 📚 Документация

- [📖 INSTALLATION.md](./INSTALLATION.md) - подробная установка
- [🎮 USAGE.md](./USAGE.md) - полное руководство пользователя
- [🔧 DEVELOPMENT.md](./DEVELOPMENT.md) - для разработчиков

## 🎓 Примеры

### Добавить поинты
```mcfunction
/scoreboard players add @s skillstree_points 50
```

### Проверить данные
```mcfunction
/scoreboard players get @s skillstree_points
```

### Добавить новый навык
Отредактируйте `behavior_packs/skillstree_bp/scripts/skills.js`:

```javascript
const SKILLS_CONFIG = {
  myskill: {
    id: 'myskill',
    name: '§aМой Навык',
    description: 'Описание',
    icon: 'textures/items/diamond_sword',
    x: 300, y: 200,
    maxLevel: 5,
    costPerLevel: 15,
    dependencies: ['fireball']
  }
};
```

## 🐛 Решение проблем

| Проблема | Решение |
|----------|---------|
| Модуль не загружается | Включите Experimental Gameplay |
| Панель не открывается | Проверьте консоль (Ctrl+H) |
| Скрипты не работают | Убедитесь, что все файлы скопированы |
| Нет подключения API | Проверьте manifest.json версии |

## 🚀 Оптимизация

- Панель обновляется каждый тик (оптимально)
- Максимум ~50 навыков рекомендуется
- JSON UI кешируется автоматически

## 📄 Лицензия

MIT License - используйте свободно в своих проектах

## 🤝 Поддержка

Если что-то не работает:
1. Проверьте консоль ошибок (Ctrl+H)
2. Убедитесь в установке всех файлов
3. Создайте Issue на GitHub

---

**Создано для Minecraft Bedrock Edition** 🎮  
Последнее обновление: 2026
