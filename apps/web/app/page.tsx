'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

const skills = ['TypeScript', 'Node.js', 'NestJS', 'React', 'PostgreSQL', 'GraphQL', 'Docker', 'AI/LLM'];
const fallbackProjects = [
  { id: 1, title: '300+ секретов без передеплоя', description: 'Перевёл сервисы с Vault и статического NestJS Config на облачное хранилище с автоматическим обновлением конфигурации.', result: 'План: месяц → релиз: неделя' },
  { id: 2, title: 'Конструктор тестовых данных', description: 'Создал внутренний сервис, который анализирует структуру SQL-таблиц и помогает QA быстро собирать согласованные тестовые данные.', result: 'Сократил ручную подготовку тестовых сценариев' },
];

type Profile = { name: string; headline: string; summary: string };
type Project = { id: number; title: string; description: string; result: string };

const fallbackProfile: Profile = {
  name: 'Игорь Зубенко',
  headline: 'Senior Fullstack / Backend Engineer',
  summary: 'Проектирую production-системы на TypeScript, Node.js и PostgreSQL и применяю AI-инструменты с инженерным контролем качества.',
};

async function loadCard(): Promise<{ profile: Profile; projects: Project[] }> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: '{ profile { name headline summary } projects { id title description result } }' }),
  });
  if (!response.ok) throw new Error('GraphQL request failed');
  const payload = (await response.json()) as { data?: { profile: Profile; projects: Project[] } };
  if (!payload.data) throw new Error('GraphQL response has no data');
  return payload.data;
}

export default function HomePage() {
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [contactState, setContactState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    void loadCard().then(setCard).catch(() => undefined);
    function setCard(card: { profile: Profile; projects: Project[] }): void {
      setProfile(card.profile);
      setProjects(card.projects);
    }
  }, []);

  async function sendContact(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setContactState('sending');
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          query: 'mutation SendContact($input: ContactRequestInput!) { sendContactRequest(input: $input) { id accepted } }',
          variables: { input: form },
        }),
      });
      const payload = (await response.json()) as { data?: { sendContactRequest: { accepted: boolean } } };
      if (!response.ok || !payload.data?.sendContactRequest.accepted) throw new Error('Contact request failed');
      setForm({ name: '', email: '', message: '' });
      setContactState('sent');
    } catch {
      setContactState('error');
    }
  }

  return (
    <main>
      <nav>
        <span className="logo">IZ.</span>
        <a href="mailto:hello@example.com">Связаться</a>
      </nav>
      <section className="hero">
        <p className="eyebrow">{profile.headline}</p>
        <h1>Создаю системы, которые выдерживают рост.</h1>
        <p className="lead">{profile.summary}</p>
        <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>
      <section className="cases">
        {projects.map((project, index) => (
          <article key={project.id}>
            <small>{String(index + 1).padStart(2, '0')} · CASE</small>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <strong>{project.result}</strong>
          </article>
        ))}
      </section>
      <section className="contact">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Есть задача?</h2>
          <p className="lead">Расскажите, что нужно построить или улучшить.</p>
        </div>
        <form onSubmit={sendContact}>
          <input required maxLength={80} placeholder="Имя" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          <input required type="email" maxLength={160} placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          <textarea required maxLength={2000} placeholder="Сообщение" rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          <button disabled={contactState === 'sending'} type="submit">{contactState === 'sending' ? 'Отправляем…' : 'Отправить'}</button>
          {contactState === 'sent' && <span className="form-status success">Сообщение отправлено.</span>}
          {contactState === 'error' && <span className="form-status error">Не удалось отправить. Попробуйте ещё раз.</span>}
        </form>
      </section>
    </main>
  );
}
