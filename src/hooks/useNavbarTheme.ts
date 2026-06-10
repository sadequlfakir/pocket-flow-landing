import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type NavbarTheme = 'dark' | 'light';

const NAVBAR_PROBE_Y = 36;

function detectTheme(): NavbarTheme {
  const elements = document.elementsFromPoint(window.innerWidth / 2, NAVBAR_PROBE_Y);

  for (const element of elements) {
    // Skip the fixed header so we read the section behind it.
    if (element.closest('header')) continue;

    if (element.closest('[data-navbar-light]')) return 'light';
    if (element.closest('[data-navbar-dark]')) return 'dark';
  }

  return 'dark';
}

export function useNavbarTheme(): NavbarTheme {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [theme, setTheme] = useState<NavbarTheme>(isHome ? 'dark' : 'light');

  useEffect(() => {
    if (!isHome) {
      setTheme('light');
      return;
    }

    let frame = 0;

    const updateTheme = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setTheme(detectTheme());
      });
    };

    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
    window.addEventListener('resize', updateTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateTheme);
      window.removeEventListener('resize', updateTheme);
    };
  }, [isHome]);

  return theme;
}
