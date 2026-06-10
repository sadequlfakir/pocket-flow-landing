import { LegalLayout } from '@/components/layout/LegalLayout';
import {
  APP_NAME,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  PRIVACY_LAST_UPDATED_ZH,
} from '@/lib/constants';

export function PrivacyPolicyZhPage() {
  return (
    <LegalLayout
      title="隐私政策"
      lastUpdated={PRIVACY_LAST_UPDATED_ZH}
      backLabel="返回首页"
      lastUpdatedLabel="最后更新"
      language="zh">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">应用与开发者信息</h2>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-slate-900">应用名称</dt>
            <dd className="mt-1 text-slate-700">{APP_NAME}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">开发者</dt>
            <dd className="mt-1 text-slate-700">{DEVELOPER_NAME}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">联系方式</dt>
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
        <h2 className="text-xl font-semibold text-slate-900">引言</h2>
        <p className="mt-3 leading-relaxed">
          {APP_NAME}（以下简称“本应用”）是由{DEVELOPER_NAME}（以下简称“我们”）开发的个人记账应用。
          我们重视并致力于保护您的隐私。本隐私政策说明本应用处理哪些个人信息、如何使用这些信息，以及您在使用本应用时可做出的选择。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">我们处理的信息</h2>
        <p className="mt-3 leading-relaxed">
          本应用主要在您的设备本地运行。应用可能在您的手机上本地存储以下信息：
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>交易记录（金额、类型、日期、分类及可选备注）</li>
          <li>自定义分类（名称、图标和颜色）</li>
          <li>应用设置（如货币和主题偏好）</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          上述信息均由您自行输入，并保存在您的设备上，除非您选择使用下文所述的可选功能进行导出或备份。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">数据存储</h2>
        <p className="mt-3 leading-relaxed">
          本应用使用 SQLite 在您的设备本地存储财务数据。我们不运营用于收集或存储您个人财务信息的后端服务，也不要求您注册账户即可使用本应用。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">我们不收集的信息</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>我们不会出于广告目的向第三方出售、出租或共享您的数据。</li>
          <li>我们不会使用第三方分析 SDK 追踪您在应用内的行为。</li>
          <li>除非您主动导出或备份，否则我们不会访问您的交易数据。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">可选功能</h2>
        <p className="mt-3 leading-relaxed">部分功能涉及您主动启用的第三方服务：</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>
            <strong>CSV 导出：</strong>
            将数据导出为设备上的文件，或通过系统分享功能发送。数据不会发送给我们。
          </li>
          <li>
            <strong>Google 云端硬盘备份：</strong>
            若您启用该功能，数据库备份将通过 Google OAuth 身份验证上传至您本人的 Google
            云端硬盘账户。我们不会存储您的 Google 凭据。备份数据受 Google 隐私政策约束。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">设备权限</h2>
        <p className="mt-3 leading-relaxed">
          本应用可能请求实现功能所必需的权限，例如用于导出的存储访问权限，以及用于可选 Google
          云端硬盘备份的网络访问权限。我们仅将权限用于其声明的用途。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">您的权利</h2>
        <p className="mt-3 leading-relaxed">
          由于您的数据存储在设备本地，您可以随时在应用内查看、编辑、导出或删除这些数据。卸载本应用后，设备上的本地数据将被移除（您已导出或备份至其他位置的副本除外）。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">数据安全</h2>
        <p className="mt-3 leading-relaxed">
          由于数据存储在本地，其安全性取决于您设备的安全措施（如屏幕锁定、加密等）。我们建议您保持设备系统更新，并启用安全的锁屏方式。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">儿童隐私</h2>
        <p className="mt-3 leading-relaxed">
          本应用不面向 13 岁以下儿童。我们不会故意收集儿童的信息。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">政策变更</h2>
        <p className="mt-3 leading-relaxed">
          我们可能不时更新本隐私政策。更新后的政策将发布在本页面，并更新“最后更新”日期。您在政策变更后继续使用本应用，即视为接受更新后的政策。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">联系我们</h2>
        <p className="mt-3 leading-relaxed">
          如您对本隐私政策或本应用如何处理个人信息有任何疑问，请联系开发者 {DEVELOPER_NAME}：
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-primary-600 hover:text-primary-700">
            {CONTACT_EMAIL}
          </a>
          。
        </p>
      </section>
    </LegalLayout>
  );
}
