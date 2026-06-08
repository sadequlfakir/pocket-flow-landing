import { LegalLayout } from '@/components/layout/LegalLayout';
import { APP_NAME } from '@/lib/constants';

export function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 8, 2026">
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a personal
          expense tracking application. We are committed to protecting your privacy.
          This Privacy Policy explains how {APP_NAME} handles information when you use
          our mobile application.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Data Storage</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} stores all financial data locally on your device using SQLite.
          Your transactions, categories, and settings remain on your phone and are not
          transmitted to our servers. We do not operate a backend service that collects
          or stores your personal financial information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">
          Information We Do Not Collect
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>We do not require account creation or collect personal identifiers.</li>
          <li>We do not sell, rent, or share your data with third parties for advertising.</li>
          <li>We do not use third-party analytics SDKs to track your in-app behavior.</li>
          <li>We do not access your transaction data unless you explicitly export or back it up.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Optional Features</h2>
        <p className="mt-3 leading-relaxed">
          Some features involve third-party services that you choose to enable:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>
            <strong>CSV Export:</strong> Exports data to a file on your device or via
            your device&apos;s share sheet. No data is sent to us.
          </li>
          <li>
            <strong>Google Drive Backup:</strong> If enabled, your database backup is
            uploaded to your own Google Drive account using Google&apos;s OAuth
            authentication. We do not store your Google credentials. Backup data is
            subject to Google&apos;s privacy policy.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Device Permissions</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} may request permissions necessary for app functionality, such as
          storage access for exports and network access for optional Google Drive backup.
          We only use permissions for their stated purpose.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Data Security</h2>
        <p className="mt-3 leading-relaxed">
          Because your data is stored locally, its security depends on your device&apos;s
          security measures (screen lock, encryption, etc.). We recommend keeping your
          device updated and using a secure lock screen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Children&apos;s Privacy</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} is not directed at children under 13. We do not knowingly collect
          information from children.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Changes to This Policy</h2>
        <p className="mt-3 leading-relaxed">
          We may update this Privacy Policy from time to time. We will post the updated
          policy on this page and update the &quot;Last updated&quot; date. Continued use
          of the app after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
        <p className="mt-3 leading-relaxed">
          If you have questions about this Privacy Policy, contact us at{' '}
          <a
            href="mailto:sadequl.dev@gmail.com"
            className="font-medium text-primary-600 hover:text-primary-700">
            saadequl.dev@gmail.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
