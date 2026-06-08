import { Link } from 'react-router-dom';

import { APP_NAME } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt={APP_NAME} className="h-8 w-8 rounded-lg" />
          <div>
            <p className="text-sm font-semibold text-white">{APP_NAME}</p>
            <p className="text-xs text-slate-500">
              © {year} {APP_NAME}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <Link to="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
          <a href="mailto:sadequl.dev@gmail.com" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
