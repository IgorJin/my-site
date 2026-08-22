# Architecture

```text
Browser -> Next.js -> NestJS GraphQL API -> Prisma -> PostgreSQL
```

На первом этапе приложения развиваются в одном репозитории и запускаются отдельно. PostgreSQL поднимается через Docker Compose. Prisma подключается к NestJS через глобальный `PrismaModule`, а контракт между frontend и backend — GraphQL schema, генерируемая NestJS из TypeScript-моделей.

Профиль уже читается из PostgreSQL через `PrismaService`; seed создаёт демонстрационные данные для визитки.

Для локального и демонстрационного запуска Compose собирает два multi-stage image: API и web. API ждёт healthy PostgreSQL, применяет миграции и публикует `/health`; web собирается Next.js в standalone-режиме.

## Следующие вертикальные срезы

1. Profile: модель, seed, query, hero-блок.
2. Projects: кейсы, query, карточки результатов.
3. Contacts: mutation, валидация, сохранение обращения, rate limit.
