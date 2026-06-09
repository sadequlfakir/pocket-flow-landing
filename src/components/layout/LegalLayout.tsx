import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { FadeIn } from '@/components/ui/FadeIn';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  backLabel?: string;
  lastUpdatedLabel?: string;
  alternateLanguage?: {
    label: string;
    href: string;
  };
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
  backLabel = 'Back to home',
  lastUpdatedLabel = 'Last updated',
  alternateLanguage,
}: LegalLayoutProps) {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-primary-600">
            <ArrowLeft size={16} />
            {backLabel}
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {lastUpdatedLabel}: {lastUpdated}
              </p>
            </div>

            {alternateLanguage ? (
              <Link
                to={alternateLanguage.href}
                className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-200 hover:text-primary-700">
                {alternateLanguage.label}
              </Link>
            ) : null}
          </div>

          <div className="prose-legal mt-10 space-y-6 text-slate-700">{children}</div>
        </FadeIn>
      </div>
    </main>
  );
}
