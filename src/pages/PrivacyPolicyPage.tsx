import { LegalLayout } from '@/components/layout/LegalLayout';
import {
  APP_NAME,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  PRIVACY_LAST_UPDATED,
} from '@/lib/constants';

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated={PRIVACY_LAST_UPDATED}
      alternateLanguage={{ label: '中文版', href: '/privacy/zh' }}>
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">App &amp; Developer Information</h2>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-slate-900">App name</dt>
            <dd className="mt-1 text-slate-700">{APP_NAME}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Developer</dt>
            <dd className="mt-1 text-slate-700">{DEVELOPER_NAME}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Contact</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-primary-600 hover:text-primary-700">
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} (&quot;the App&quot;) is a personal expense tracking application developed
          by {DEVELOPER_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are
          committed to protecting your privacy. This Privacy Policy explains what personal
          information {APP_NAME} processes, how we use it, and your choices when you use the
          App.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Information We Process</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} is designed to work primarily on your device. The App may store the
          following information locally on your phone:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>Transaction records (amount, type, date, category, and optional notes)</li>
          <li>Custom categories (name, icon, and color)</li>
          <li>App settings (such as currency and theme preferences)</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          This information is entered by you and remains on your device unless you choose to
          export or back it up using optional features described below.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Data Storage</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} stores financial data locally on your device using SQLite. We do not
          operate a backend service that collects or stores your personal financial
          information. We do not require account creation to use the App.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">
          Information We Do Not Collect
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
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
            <strong>CSV Export:</strong> Exports data to a file on your device or via your
            device&apos;s share sheet. No data is sent to us.
          </li>
          <li>
            <strong>Google Drive Backup:</strong> If enabled, your database backup is uploaded
            to your own Google Drive account using Google&apos;s OAuth authentication. We do not
            store your Google credentials. Backup data is subject to Google&apos;s privacy
            policy.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Device Permissions</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} may request permissions necessary for app functionality, such as storage
          access for exports and network access for optional Google Drive backup. We only use
          permissions for their stated purpose.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Your Rights</h2>
        <p className="mt-3 leading-relaxed">
          Because your data is stored on your device, you can review, edit, export, or delete
          it at any time within the App. Uninstalling the App removes locally stored data from
          your device, except for copies you may have exported or backed up elsewhere.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Data Security</h2>
        <p className="mt-3 leading-relaxed">
          Because your data is stored locally, its security depends on your device&apos;s
          security measures (screen lock, encryption, etc.). We recommend keeping your device
          updated and using a secure lock screen.
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
          We may update this Privacy Policy from time to time. We will post the updated policy
          on this page and update the &quot;Last updated&quot; date. Continued use of the App
          after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
        <p className="mt-3 leading-relaxed">
          If you have questions about this Privacy Policy or how {APP_NAME} handles personal
          information, contact {DEVELOPER_NAME} at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-primary-600 hover:text-primary-700">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
