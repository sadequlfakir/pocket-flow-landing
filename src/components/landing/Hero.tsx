import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { APP_NAME, APP_TAGLINE } from '@/lib/constants';
import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-mesh absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 -left-20 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-300">
              <Sparkles size={14} />
              <span>Now available on Android</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Take control of</span>
              <br />
              <span className="text-gradient">your money flow</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              <span className="font-semibold text-white">{APP_NAME}</span> is a{' '}
              {APP_TAGLINE.toLowerCase()} that helps you understand spending,
              track income, and build better habits — all stored privately on your
              device.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary-600/30 transition hover:shadow-primary-500/50">
              Download Free
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#screenshots"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5">
              See it in action
            </a>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <Stat label="On-device" value="SQLite" />
            <Stat label="No account" value="Required" />
            <Stat label="Export" value="CSV" />
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left" className="relative mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-end">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-500/20 to-emerald-500/10 blur-2xl" />
            <div className="phone-shadow relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
              <img
                src="/ss/dashboard.png"
                alt="Pocket Flow - Budget Tracker dashboard"
                className="w-full"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 sm:-left-8">
              <p className="text-xs text-slate-400">Current Balance</p>
              <p className="text-lg font-bold text-emerald-400">+BDT 35,000</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glass absolute -top-2 -right-2 rounded-2xl px-4 py-3 sm:-right-6">
              <p className="text-xs text-slate-400">This month</p>
              <p className="text-sm font-semibold text-white">Surplus</p>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-semibold text-slate-300">{value}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
}
