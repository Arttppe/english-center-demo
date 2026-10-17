// Cloudflare Pages Function: POST /api/lead
// Пересылает заявку с сайта в Telegram.
// Переменные окружения (Cloudflare → Settings → Variables and Secrets):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата, куда слать заявки
// Если переменные не заданы, работает в демо-режиме и ничего не отправляет.

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "bad_json" }, 400);
  }

  const name = String(data.name || "").trim().slice(0, 60);
  const phone = String(data.phone || "").trim().slice(0, 20);
  const course = String(data.course || "").trim().slice(0, 40);
  if (!name || phone.replace(/\D/g, "").length < 9) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ ok: true, demo: true });
  }

  const text = `📩 Новая заявка с сайта\n\n👤 ${name}\n📞 ${phone}\n📚 ${course}`;
  const tg = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
  });

  return tg.ok ? json({ ok: true }) : json({ ok: false, error: "telegram" }, 502);
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
