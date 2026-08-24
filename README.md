# Digital Card

Статическая цифровая визитка senior fullstack/backend-инженера на Next.js.

## MVP

- публичный профиль и специализация;
- навыки и технологический стек;
- два production-кейса с измеримым результатом;
- контактные ссылки через `mailto`, Telegram, GitHub и телефон;
- адаптивный интерфейс в тёмной теме.

## Структура

```text
apps/web      Next.js + React
docs          решения и материалы проекта
```

## Локальный запуск

1. Установить зависимости: `npm install`.
2. Запустить dev-сервер: `npm run dev`.
3. Открыть `http://localhost:3000`.

## Production-сборка

```bash
npm run lint
npm run build
```

Next.js создаёт полностью статичную папку `apps/web/out`. Её можно разместить на Vercel, Cloudflare Pages, Render Static Site или любом CDN.

## Проверки

Контент визитки находится в `apps/web/app/page.tsx`, изображения — в `apps/web/public`.
