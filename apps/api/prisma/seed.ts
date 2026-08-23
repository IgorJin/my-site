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
      headline: 'Senior Fullstack Developer / Backend + AI Engineer',
      summary: '6+ лет коммерческого опыта в разработке высоконагруженных web-приложений, административных систем и распределённых сервисов. Основной стек — TypeScript, Node.js, React, Vue, NestJS, PostgreSQL/MySQL, Redis, Kafka, Docker и Kubernetes. Отдельный фокус — AI/LLM-инструменты, RAG, embeddings, vector search и локальные модели Qwen/Gemma.',
      location: 'Санкт-Петербург · Москва · удалённо',
    },
  });

  await prisma.project.createMany({
    data: [
      {
        title: 'Конструктор правил риск-фильтрации',
        description: 'Спроектировал и реализовал административный конструктор: триггеры, условия, правила обработки и санкции. Пользовательские правила маппились на Prolog и выполнялись без участия разработчика.',
        result: 'Self-service для бизнеса · десятки часов экономии на итерациях',
        sortOrder: 1,
      },
      {
        title: 'Skill Registry',
        description: 'Репозиторий переиспользуемых skills и prompt-инструкций для AI-assisted development с заделом под RAG-поиск по инженерным артефактам.',
        result: 'github.com/IgorJin/skill-registry',
        sortOrder: 2,
      },
      {
        title: 'Local Repository RAG',
        description: 'Локальный индексатор репозиториев: chunking, embeddings и vector search для поиска по коду с использованием Qwen/Gemma.',
        result: 'github.com/IgorJin/Local-repository-RAG',
        sortOrder: 3,
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
