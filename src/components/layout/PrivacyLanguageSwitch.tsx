import { Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const LANGUAGES = [
  { id: 'en' as const, href: '/privacy', label: 'English' },
  { id: 'zh' as const, href: '/privacy/zh', label: '中文版' },
];

interface PrivacyLanguageSwitchProps {
  current: 'en' | 'zh';
  compact?: boolean;
}

export function PrivacyLanguageSwitch({
  current,
  compact = false,
}: PrivacyLanguageSwitchProps) {
  const isZh = current === 'zh';

  return (
    <div
      className={[
        'rounded-2xl border border-slate-200 bg-white',
        compact ? 'p-3' : 'p-4',
      ].join(' ')}>
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Languages size={16} className="shrink-0 text-primary-600" />
        <span>{isZh ? '其他语言版本：' : 'Also available in:'}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {LANGUAGES.map((language) => {
          const selected = current === language.id;

          if (selected) {
            return (
              <span
                key={language.id}
                className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white">
                {language.label}
              </span>
            );
          }

          return (
            <Link
              key={language.id}
              to={language.href}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-200 hover:bg-white hover:text-primary-700">
              {language.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
