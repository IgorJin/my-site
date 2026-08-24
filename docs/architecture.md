# Architecture

```text
Browser -> статический Next.js export -> CDN / Static Site hosting
```

Контент визитки хранится в TypeScript рядом со страницей. Next.js собирает HTML, CSS и JavaScript в `apps/web/out`, поэтому в runtime не нужны Node.js-сервер, API, база данных, Docker или переменные окружения.

Для публикации достаточно выполнить `npm run build` и указать `apps/web/out` как output directory на хостинге статических сайтов.
