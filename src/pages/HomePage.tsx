import { Cta } from '@/components/landing/Cta';
import { Features } from '@/components/landing/Features';
import { Hero } from '@/components/landing/Hero';
import { PrivacySection } from '@/components/landing/PrivacySection';
import { Screenshots } from '@/components/landing/Screenshots';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <PrivacySection />
      <Cta />
    </main>
  );
}
