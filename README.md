# Bright English — демо-сайт учебного центра

Одностраничный сайт (лендинг) для курсов английского и IELTS. Данные вымышлены, сайт сделан для портфолио.

- `public/index.html` — весь сайт: разметка, стили и скрипты в одном файле. Языки: русский и узбекский.
- `public/favicon.svg` — иконка сайта.
- `src/worker.js` — Cloudflare Worker: отдаёт сайт и пересылает заявки с формы в Telegram.
- `wrangler.jsonc` — настройки Cloudflare.

## Публикация

Репозиторий подключён к Cloudflare Workers: каждый push в `main` автоматически публикует сайт
(команда деплоя `npx wrangler deploy`).

Чтобы заявки приходили в Telegram, в Cloudflare → проект → Settings → Variables and Secrets добавить
`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` (тип Secret). Без них форма работает в демо-режиме.
