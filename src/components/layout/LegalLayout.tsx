import { ArrowLeft } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { PrivacyLanguageSwitch } from '@/components/layout/PrivacyLanguageSwitch';
import { FadeIn } from '@/components/ui/FadeIn';
import { APP_NAME } from '@/lib/constants';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  backLabel?: string;
  lastUpdatedLabel?: string;
  language?: 'en' | 'zh';
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
  backLabel = 'Back to home',
  lastUpdatedLabel = 'Last updated',
  language,
}: LegalLayoutProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${APP_NAME}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <main data-navbar-light className="bg-slate-50 pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-primary-600">
            <ArrowLeft size={16} />
            {backLabel}
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {lastUpdatedLabel}: {lastUpdated}
            </p>
          </div>

          {language ? (
            <div className="mt-6">
              <PrivacyLanguageSwitch current={language} />
            </div>
          ) : null}

          <div className="prose-legal mt-10 space-y-6 text-slate-700">{children}</div>

          {language ? (
            <div className="mt-10">
              <PrivacyLanguageSwitch current={language} compact />
            </div>
          ) : null}
        </FadeIn>
      </div>
    </main>
  );
}
