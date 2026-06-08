import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { APP_NAME } from '@/lib/constants';
import { FadeIn } from '@/components/ui/FadeIn';

export function Cta() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl"
              />
            </div>

            <div className="relative">
              <img
                src="/icon.png"
                alt={APP_NAME}
                className="mx-auto mb-6 h-20 w-20 rounded-2xl shadow-2xl shadow-primary-600/30"
              />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Start tracking today
              </h2>
              <p className="mx-auto mt-4 max-w-md text-slate-400">
                Download {APP_NAME} for free and take the first step toward
                smarter spending habits.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-xl transition hover:bg-slate-100">
                  <Download size={18} />
                  Get it on Google Play
                </a>
                <p className="text-xs text-slate-500">iOS coming soon</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
