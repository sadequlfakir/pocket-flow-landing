export const APP_NAME = 'Pocket Flow';
export const APP_TAGLINE = 'Personal expense tracker';
export const APP_DESCRIPTION =
  'Track income, expenses, and spending insights with a beautiful mobile app. Your data stays on your device — private, fast, and always available.';

export const features = [
  {
    icon: 'LayoutDashboard',
    title: 'Smart Dashboard',
    description:
      'See your balance, income, expenses, and monthly summary at a glance. Know exactly where you stand.',
  },
  {
    icon: 'ArrowLeftRight',
    title: 'Easy Transactions',
    description:
      'Add, edit, and swipe through transactions in seconds. Categorize spending with custom labels.',
  },
  {
    icon: 'PieChart',
    title: 'Rich Analytics',
    description:
      'Visualize spending trends with monthly, weekly, and category breakdown charts.',
  },
  {
    icon: 'Tags',
    title: 'Custom Categories',
    description:
      'Create and personalize categories with icons and colors to match how you think about money.',
  },
  {
    icon: 'Shield',
    title: 'On-Device Privacy',
    description:
      'All data is stored locally on your phone with SQLite. No accounts required, no cloud tracking.',
  },
  {
    icon: 'Download',
    title: 'Export & Backup',
    description:
      'Export transactions to CSV or back up to Google Drive. Your data, your control.',
  },
] as const;

export const screenshots = [
  {
    src: '/ss/dashboard.png',
    alt: 'Pocket Flow dashboard showing balance and monthly summary',
    title: 'Dashboard',
    description: 'Your financial overview in one clean screen.',
  },
  {
    src: '/ss/transactions.png',
    alt: 'Pocket Flow transactions list',
    title: 'Transactions',
    description: 'Browse and manage every income and expense.',
  },
  {
    src: '/ss/add_transaction.png',
    alt: 'Pocket Flow add transaction form',
    title: 'Quick Add',
    description: 'Log transactions in just a few taps.',
  },
  {
    src: '/ss/analytics.png',
    alt: 'Pocket Flow analytics charts',
    title: 'Analytics',
    description: 'Charts and insights to understand your habits.',
  },
  {
    src: '/ss/categories.png',
    alt: 'Pocket Flow categories management',
    title: 'Categories',
    description: 'Organize spending your way.',
  },
  {
    src: '/ss/settings.png',
    alt: 'Pocket Flow settings screen',
    title: 'Settings',
    description: 'Theme, currency, export, and backup options.',
  },
] as const;

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Screenshots', href: '/#screenshots' },
  { label: 'Privacy', href: '/#privacy' },
] as const;
