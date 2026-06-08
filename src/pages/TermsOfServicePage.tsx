import { LegalLayout } from '@/components/layout/LegalLayout';
import { APP_NAME } from '@/lib/constants';

export function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 8, 2026">
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Agreement to Terms</h2>
        <p className="mt-3 leading-relaxed">
          By downloading, installing, or using {APP_NAME}, you agree to be bound by
          these Terms of Service. If you do not agree, do not use the application.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Description of Service</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} is a personal finance tracking tool that allows you to record
          income and expenses, categorize transactions, view analytics, and manage
          your financial data locally on your device. The app is provided for personal,
          non-commercial use unless otherwise agreed in writing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">License</h2>
        <p className="mt-3 leading-relaxed">
          We grant you a limited, non-exclusive, non-transferable, revocable license to
          use {APP_NAME} on your personal devices in accordance with these Terms and
          applicable app store policies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">User Responsibilities</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>You are responsible for the accuracy of data you enter into the app.</li>
          <li>You are responsible for backing up your data if you choose to do so.</li>
          <li>You must not use the app for any unlawful purpose or to violate any laws.</li>
          <li>You must not attempt to reverse engineer, decompile, or modify the app.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">No Financial Advice</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} is a record-keeping and visualization tool only. It does not
          provide financial, investment, tax, or legal advice. You should consult
          qualified professionals for financial decisions. We are not responsible for
          any financial outcomes based on your use of the app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Data and Backups</h2>
        <p className="mt-3 leading-relaxed">
          Your data is stored on your device. We are not responsible for data loss due
          to device failure, app uninstallation, or user error. Optional backup features
          are provided as-is. You are responsible for maintaining copies of important data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Third-Party Services</h2>
        <p className="mt-3 leading-relaxed">
          Optional integrations such as Google Drive are subject to the terms and
          privacy policies of those third parties. We are not responsible for the
          availability or conduct of third-party services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Disclaimer of Warranties</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME} is provided &quot;as is&quot; and &quot;as available&quot; without
          warranties of any kind, whether express or implied, including but not limited
          to merchantability, fitness for a particular purpose, and non-infringement.
          We do not warrant that the app will be uninterrupted, error-free, or secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Limitation of Liability</h2>
        <p className="mt-3 leading-relaxed">
          To the maximum extent permitted by law, we shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits,
          data, or goodwill arising from your use of {APP_NAME}, even if we have been
          advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Termination</h2>
        <p className="mt-3 leading-relaxed">
          You may stop using the app at any time by uninstalling it. We may suspend or
          discontinue the app or these Terms at our discretion, with or without notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Changes to Terms</h2>
        <p className="mt-3 leading-relaxed">
          We may modify these Terms at any time. Updated Terms will be posted on this
          page. Your continued use of the app after changes constitutes acceptance of
          the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 leading-relaxed">
          For questions about these Terms, contact us at{' '}
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
