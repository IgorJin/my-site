# Digital Card

Небольшая цифровая визитка senior fullstack/backend-инженера. Проект демонстрирует TypeScript end-to-end, NestJS, GraphQL, Prisma, PostgreSQL, Next.js и Docker.

## MVP

- публичный профиль и специализация;
- навыки и технологический стек;
- два production-кейса с измеримым результатом;
- контактная форма через GraphQL mutation;
- адаптивный интерфейс в тёмной теме.

## Структура

```text
apps/web      Next.js + React
apps/api      NestJS + GraphQL + Prisma
docs          решения и материалы проекта
```

## Локальный запуск

1. Скопировать `.env.example` в `.env`.
2. Запустить только PostgreSQL: `docker compose up -d postgres`.
3. Установить зависимости: `npm install`.
4. Сгенерировать Prisma Client: `npm run db:generate`.
5. Применить миграции: `npm run prisma:deploy --workspace @digital-card/api`.
6. Загрузить демонстрационные данные: `npm run prisma:seed --workspace @digital-card/api`.
7. В отдельных терминалах выполнить `npm run dev:api` и `npm run dev:web`.

PostgreSQL публикуется на `localhost:5433`, чтобы не конфликтовать с другими локальными проектами.  
GraphQL: `http://localhost:4000/graphql`  
Web: `http://localhost:3000`

## Полный запуск через Docker

После установки Docker Desktop:

```bash
docker compose up --build
```

Команда поднимает PostgreSQL, API и web-приложение. API автоматически применяет миграции перед запуском. Healthcheck API доступен по адресу `http://localhost:4000/health`.

## Проверки

```bash
npm test
npm run build
docker compose config
```
