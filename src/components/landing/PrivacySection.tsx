import { CloudOff, Lock, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';

const points = [
  {
    icon: Smartphone,
    title: 'Local-first storage',
    description:
      'Your transactions live in an on-device SQLite database. Nothing is sent to our servers.',
  },
  {
    icon: Lock,
    title: 'No tracking',
    description:
      'We do not collect analytics, sell data, or build advertising profiles from your finances.',
  },
  {
    icon: CloudOff,
    title: 'Optional cloud backup',
    description:
      'Google Drive backup is entirely optional and only runs when you explicitly enable it.',
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" data-navbar-light className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Privacy"
          title="Your finances, your device"
          description="FlowPocket - Budget Tracker is built with privacy at its core. Track spending without handing your data to the cloud."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {points.map((point, index) => (
            <FadeIn key={point.title} delay={index * 0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <point.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex flex-col items-center gap-3 text-center">
          <Link
            to="/privacy"
            className="text-sm font-medium text-primary-600 transition hover:text-primary-700">
            Read our full Privacy Policy →
          </Link>
          <Link
            to="/privacy/zh"
            className="text-sm font-medium text-primary-600 transition hover:text-primary-700">
            阅读中文版隐私政策 →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
