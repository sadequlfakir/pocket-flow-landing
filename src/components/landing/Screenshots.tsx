import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { screenshots } from '@/lib/constants';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Screenshots() {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <section id="screenshots" data-navbar-dark className="bg-mesh py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          overline="Screenshots"
          title="Designed for clarity"
          description="A clean, modern interface that makes tracking finances feel effortless — day or night."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_320px]">
          <FadeIn direction="right" className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary-500/15 to-transparent blur-2xl" />
            <div className="phone-shadow relative overflow-hidden rounded-[2rem] border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                />
              </AnimatePresence>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-3">
            {screenshots.map((shot, index) => (
              <FadeIn key={shot.title} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={`w-full rounded-2xl px-5 py-4 text-left transition ${
                    active === index
                      ? 'glass border-primary-500/30 bg-primary-500/10'
                      : 'border border-transparent hover:bg-white/5'
                  }`}>
                  <p
                    className={`text-sm font-semibold ${
                      active === index ? 'text-white' : 'text-slate-300'
                    }`}>
                    {shot.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {shot.description}
                  </p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
