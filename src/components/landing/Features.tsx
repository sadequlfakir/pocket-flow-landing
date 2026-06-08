import {
  ArrowLeftRight,
  Download,
  LayoutDashboard,
  PieChart,
  Shield,
  Tags,
  type LucideIcon,
} from 'lucide-react';

import { features } from '@/lib/constants';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  Tags,
  Shield,
  Download,
};

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Features"
          title="Everything you need to manage money"
          description="Simple, powerful tools designed for everyday spending — without the complexity of traditional finance apps."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <div className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
