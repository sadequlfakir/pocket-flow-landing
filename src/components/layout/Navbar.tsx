import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useNavbarTheme } from '@/hooks/useNavbarTheme';
import { APP_NAME, navLinks } from '@/lib/constants';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const theme = useNavbarTheme();
  const isLight = theme === 'light';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        isLight ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md' : 'border-b border-transparent',
      ].join(' ')}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/icon.png"
            alt={APP_NAME}
            className="h-10 w-10 rounded-xl shadow-lg shadow-primary-600/20"
          />
          <div className="hidden sm:block">
            <span
              className={[
                'text-sm font-bold tracking-wide transition-colors duration-300',
                isLight ? 'text-slate-900' : 'text-white',
              ].join(' ')}>
              POCKET
            </span>
            <span
              className={[
                'block text-xs font-medium tracking-[0.2em] transition-colors duration-300',
                isLight ? 'text-primary-600' : 'text-primary-400',
              ].join(' ')}>
              FLOW
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {isHome &&
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'text-sm font-medium transition-colors duration-300',
                  isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-300 hover:text-white',
                ].join(' ')}>
                {link.label}
              </a>
            ))}
          <a
            href="/#download"
            className="rounded-full bg-gradient-to-r from-primary-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition hover:shadow-primary-500/40">
            Get the App
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={[
            'rounded-lg p-2 transition-colors duration-300 md:hidden',
            isLight ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:bg-white/5',
          ].join(' ')}
          aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={[
            'mx-4 rounded-2xl p-4 md:hidden',
            isLight ? 'border border-slate-200 bg-white shadow-lg' : 'glass',
          ].join(' ')}>
          <div className="flex flex-col gap-3">
            {isHome &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    'rounded-lg px-3 py-2 text-sm font-medium',
                    isLight
                      ? 'text-slate-700 hover:bg-slate-50'
                      : 'text-slate-200 hover:bg-white/5',
                  ].join(' ')}>
                  {link.label}
                </a>
              ))}
            <a
              href="/#download"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-primary-500 to-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-white">
              Get the App
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
