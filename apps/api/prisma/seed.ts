import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString =
  process.env.DATABASE_URL ??
  'postgresql://digital_card:digital_card@localhost:5433/digital_card?schema=public';
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

async function main(): Promise<void> {
  await prisma.contactRequest.deleteMany();
  await prisma.project.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Игорь Зубенко',
      headline: 'Senior Fullstack / Backend Engineer',
      summary: 'Проектирую production-системы на TypeScript, Node.js и PostgreSQL и применяю AI-инструменты с инженерным контролем качества.',
      location: 'Москва · удалённо',
    },
  });

  await prisma.project.createMany({
    data: [
      {
        title: '300+ секретов без передеплоя',
        description: 'Перевёл сервисы с Vault и статического NestJS Config на облачное хранилище с автоматическим обновлением конфигурации.',
        result: 'План: месяц → релиз: неделя',
        sortOrder: 1,
      },
      {
        title: 'Конструктор тестовых данных',
        description: 'Создал внутренний сервис, который анализирует структуру SQL-таблиц и помогает QA быстро собирать согласованные тестовые данные.',
        result: 'Сократил ручную подготовку тестовых сценариев',
        sortOrder: 2,
      },
    ],
  });
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
