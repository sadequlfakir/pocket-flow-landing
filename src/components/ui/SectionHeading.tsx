import { FadeIn } from './FadeIn';

interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeading({
  overline,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mx-auto max-w-2xl text-center">
      <p
        className={`mb-3 text-sm font-semibold tracking-widest uppercase ${
          light ? 'text-primary-400' : 'text-primary-500'
        }`}>
        {overline}
      </p>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-slate-900'
        }`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-slate-400' : 'text-slate-600'
          }`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
