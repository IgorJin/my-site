type Project = { id: number; title: string; description: string; result: string };

const profile = {
  name: 'Игорь Зубенко',
  headline: 'Senior Fullstack Developer / Backend + AI Engineer',
  summary:
    '6+ лет коммерческого опыта в разработке высоконагруженных web-приложений, административных систем и распределённых сервисов. Основной стек — TypeScript, Node.js, React, Vue, NestJS, PostgreSQL/MySQL, Redis, Kafka, Docker и Kubernetes. Отдельный фокус — AI/LLM-инструменты, RAG, embeddings, vector search и локальные модели Qwen/Gemma.',
  location: 'Санкт-Петербург · Москва · удалённо',
};
const projects: Project[] = [
  {
    id: 1,
    title: 'Конструктор правил риск-фильтрации',
    description:
      'Спроектировал и реализовал административный конструктор: триггеры, условия, правила обработки и санкции. Пользовательские правила маппились на Prolog и выполнялись без участия разработчика.',
    result: 'Self-service для бизнеса · десятки часов экономии на итерациях',
  },
  {
    id: 2,
    title: 'Skill Registry',
    description:
      'Репозиторий переиспользуемых skills и prompt-инструкций для AI-assisted development с заделом под RAG-поиск по инженерным артефактам.',
    result: 'github.com/IgorJin/skill-registry',
  },
  {
    id: 3,
    title: 'Local Repository RAG',
    description:
      'Локальный индексатор репозиториев: chunking, embeddings и vector search для поиска по коду с использованием Qwen/Gemma.',
    result: 'github.com/IgorJin/Local-repository-RAG',
  },
  {
    id: 4,
    title: 'Кеширование статистики через курсоры',
    description:
      'Спроектировал отдельную базу курсоров для кеширования больших объёмов статистики из распределённых источников и повторного использования результатов тяжёлых выборок.',
    result: 'Выборки стали быстрее · устранены timeout 500-ошибки',
  },
];
const stack = [
  ['Frontend', 'React · Vue 3 · Next.js · TypeScript · сложные административные интерфейсы'],
  ['Backend', 'Node.js · NestJS · REST/GraphQL · PostgreSQL · MySQL · Redis · Kafka'],
  ['Platform', 'Docker · Kubernetes · BullMQ · CI/CD · distributed systems · highload'],
  [
    'AI / LLM',
    'RAG · embeddings · vector search · OpenAI/Anthropic · LangChain · LangGraph · Qwen/Gemma',
  ],
];
const roles = [
  {
    date: '2021 — 2026',
    company: '01tech',
    title: 'Senior / Fullstack Developer',
    context:
      'Высоконагруженная B2B-платформа, распределённая архитектура и внутренние административные системы.',
    stack:
      'TypeScript · Node.js · NestJS · Vue 3 · React · PostgreSQL · MySQL · Redis · Kafka · Docker · Kubernetes · Prolog',
    highlights: [
      'Вынес крупный функциональный раздел в отдельную административную систему на базе монорепозитория, NestJS и Vue 3.',
      'Разработал с нуля конструктор правил риск-фильтрации: триггеры, условия, правила обработки, санкции, UI и backend-логику.',
      'Реализовал маппинг пользовательских правил на Prolog: бизнес-пользователи получили self-service-настройку без участия разработчика.',
      'Разработал dashboard для агрегации статистики из распределённых баз данных и внутренних сервисов.',
      'Реализовал кэширование больших объёмов статистики через отдельную базу курсоров.',
      'Оптимизировал тяжёлые запросы: средняя загрузка крупных выборок стала меньше 2 секунд, ускорение — около 80–85%; устранил timeout 500-ошибки.',
    ],
  },
  {
    date: '2020 — 2021',
    company: 'Fora Soft',
    title: 'Fullstack Developer',
    context: 'Аутсорс-разработка высоконагруженного WebRTC-приложения для браузерных видеозвонков.',
    stack: 'JavaScript · TypeScript · React/Vue · Node.js · WebRTC · REST API',
    highlights: [
      'Разрабатывал frontend и backend для real-time коммуникаций и браузерных видеозвонков.',
      'Интегрировал клиент с backend API и поддерживал сценарии пользователей под высокой нагрузкой.',
      'Работал в команде разработки и доводил функциональность до production-релиза.',
    ],
  },
  {
    date: '2019 — 2020',
    company: 'UPIM',
    title: 'Frontend / Fullstack Developer',
    context: 'Аутстафф-разработка e-commerce-продукта.',
    stack: 'JavaScript · TypeScript · React/Vue · Node.js · MySQL · REST API',
    highlights: [
      'Разрабатывал web-интерфейсы магазина и e-commerce-сценарии.',
      'Интегрировал frontend с backend API и реализовывал продуктовые функции.',
    ],
  },
];
const contacts = [
  { label: 'Почта', value: 'i.zubenko2012@yandex.ru', href: 'mailto:i.zubenko2012@yandex.ru' },
  { label: 'Telegram', value: '@jeenje', href: 'https://t.me/jeenje' },
  { label: 'GitHub', value: 'github.com/IgorJin', href: 'https://github.com/IgorJin' },
  { label: 'Телефон', value: '+7 981 914-77-68', href: 'tel:+79819147768' },
];

function SectionHeading({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      <span className="section-note">{note}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="profile-header">
        <div className="profile-main">
          <div className="status">
            <span className="status-dot" />
            Открыт к предложениям
          </div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.headline}</p>
          <p className="focus">TypeScript · Node.js · AI/LLM · высоконагруженные системы</p>
          <p className="summary">{profile.summary}</p>
          <div className="header-actions">
            <a className="button button-primary" href="mailto:i.zubenko2012@yandex.ru">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16v14H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Email
            </a>
            <a
              className="button button-ghost"
              href="https://t.me/jeenje"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m21 4-3 16-6-5-3 3 .8-5.3L21 4Z" />
                <path d="m9 14 8-7" />
              </svg>
              Telegram
            </a>
            <a className="button button-ghost" href="#experience">
              Опыт <span>↓</span>
            </a>
          </div>
        </div>
        <aside className="facts-card">
          <div className="fact-list">
            <div>
              <span>Локация</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>Опыт</span>
              <strong>6+ лет в продакшене</strong>
            </div>
            <div>
              <span>Формат</span>
              <strong>Удалённо / офис</strong>
            </div>
            <div>
              <span>Ожидания</span>
              <strong>от 250 000 ₽</strong>
            </div>
          </div>
        </aside>
      </header>
      <section className="section" id="stack">
        <SectionHeading number="01" title="Стек" note="то, чем работаю каждый день" />
        <div className="stack-list">
          {stack.map(([name, value]) => (
            <div className="stack-row" key={name}>
              <span className="stack-name">{name}</span>
              <span className="stack-value">{value}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section" id="experience">
        <SectionHeading number="02" title="Опыт" note="6+ лет · 3 компании" />
        <div className="experience-list">
          {roles.map((role) => (
            <article className="experience-item" key={role.company}>
              <div className="experience-date">
                {role.date}
              </div>
              <div className="experience-content">
                <h3>{role.company}</h3>
                <p className="experience-title">{role.title}</p>
                <p className="experience-context">{role.context}</p>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="experience-stack">{role.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="projects">
        <SectionHeading number="03" title="Проекты" note="личные и продуктовые" />
        <div className="project-grid">
          {projects.map((project, index) => {
            const link =
              project.title === 'Skill Registry'
                ? 'https://github.com/IgorJin/skill-registry'
                : project.title === 'Local Repository RAG'
                  ? 'https://github.com/IgorJin/Local-repository-RAG'
                  : undefined;
            return (
              <article
                className={`project-card ${index === 0 ? 'project-featured' : ''}`}
                key={project.id}
              >
                <div className="project-top">
                  <span>0{index + 1} / CASE</span>
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                      Открыть ↗
                    </a>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.result}</strong>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section ai-note" id="ai">
        <SectionHeading number="04" title="AI / LLM" note="инженерный подход" />
        <p>
          Использую Claude Code, Codex, Cursor и локальные модели как часть production-процесса:
          декомпозиция, генерация, рефакторинг, тесты и ручная проверка результата. Практический
          фокус — RAG, embeddings, vector search, tool use и интеграция LLM в пользовательские
          сценарии.
        </p>
      </section>
      <footer className="contact-footer" id="contact">
        <div>
          <p className="footer-kicker">Давайте знакомиться</p>
          <h2>Есть задача?</h2>
          <p>Готов обсудить продукт, архитектуру и ближайший production-релиз.</p>
        </div>
        <div className="contact-links">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
