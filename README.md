# GREEN-API

Веб-интерфейс для взаимодействия с сервисами WhatsApp

## Возможности

- Подключение к экземплярам GREEN-API
- Отправка сообщений и файлов
- Проверка состояния аккаунта
- Получение текущих настроек
- Интуитивно понятный интерфейс

## Установка

### Локальная разработка

```bash
git clone https://github.com/your-repo/green-api-interface.git
cd green-api-interface
npm install
npm run dev
```

Приложение будет доступно на `http://localhost:5173`

### Docker развертывание

```bash
docker-compose up -d
```
Доступно на `http://localhost:8080`

## Использование

1. Введите ваши учетные данные GREEN-API
2. Используйте кнопки для вызова методов API:
   - 📝 `getSettings` - настройки экземпляра
   - 🔍 `getStateInstance` - статус аккаунта
   - ✉️ `sendMessage` - отправка сообщений
   - 📎 `sendFileByUrl` - отправка файлов

## Скрипты

| Команда           | Описание                  |
|-------------------|--------------------------|
| `npm run dev`     | Запуск dev-сервера       |
| `npm run build`   | Production сборка        |
| `npm run preview` | Просмотр сборки          |
| `npm run lint`    | Проверка кода            |

## Лицензия

MIT © 2023 [DevRevOnReact]
