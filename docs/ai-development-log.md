# AI development log

Проект предполагает постоянное использование Claude Code, но решения и проверка остаются за инженером.

## Первый вертикальный срез

- До задачи агент получил `CLAUDE.md`, `README.md`, архитектурную схему и ограничения тестового задания.
- План был разбит на schema → migration → PrismaService → GraphQL resolver → runtime-проверка.
- Сгенерированные изменения проверены TypeScript build, Prisma generate, migration deploy, seed и реальным GraphQL-запросом.
- Во время проверки вручную обнаружены и исправлены две проблемы: несовместимость Apollo Server 4/5 в lock-файле и workspace-разрешение Express adapter.

Главное правило: AI ускоряет декомпозицию и рутинный код, но архитектурные решения, ревью diff и acceptance-проверка выполняются вручную.
