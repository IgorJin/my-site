import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './styles.css';

export const metadata: Metadata = {
  title: 'Игорь Зубенко — CV | Senior Fullstack Engineer',
  description: 'CV Игоря Зубенко — Senior Fullstack / Backend + AI Engineer.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
