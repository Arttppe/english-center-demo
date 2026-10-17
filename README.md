# Bright English — демо-сайт учебного центра

Одностраничный сайт (лендинг) для курсов английского и IELTS. Данные вымышлены, сайт сделан для портфолио.

- `index.html` — весь сайт: разметка, стили и скрипты в одном файле. Языки: русский и узбекский.
- `favicon.svg` — иконка сайта.
- `functions/api/lead.js` — отправка заявок с формы в Telegram (Cloudflare Pages Function).

## Публикация на Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → выбрать этот репозиторий.
2. Build command: пусто. Output directory: `/`.
3. Чтобы заявки приходили в Telegram, в Settings → Variables and Secrets добавить
   `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`. Без них форма работает в демо-режиме.
