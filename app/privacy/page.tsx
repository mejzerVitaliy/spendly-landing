import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Spendly AI collects, uses, and protects your personal information.",
  alternates: { canonical: "https://spendly-ai.com/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 18, 2026">

      <div className="highlight-box">
        <p>
          Your privacy matters to us. This Privacy Policy explains exactly what information we collect when
          you use Spendly AI, how we use it, and the choices you have. If you have any questions, contact us at{" "}
          <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a>.
        </p>
      </div>

      <h2>1. Information We Collect</h2>

      <h3>Registered Accounts</h3>
      <p>
        When you create a full account with Spendly AI, we collect the following information:
      </p>
      <ul>
        <li>
          <strong>Email address</strong> — used to identify your account and send important notifications
          (e.g., a welcome email upon registration). We do <strong>not</strong> collect or store your first
          or last name.
        </li>
        <li>
          <strong>Password</strong> — stored only as a bcrypt hash. Your actual password is never stored
          and cannot be recovered by us.
        </li>
        <li>
          <strong>Profile photo</strong> — if you choose to upload one, it is stored on Cloudinary under
          a path tied to your user ID (<code>spendly/avatars/&#123;userId&#125;</code>). Uploading a photo
          is optional.
        </li>
        <li>
          <strong>Preferred currency</strong> — the main display currency you select for your account.
        </li>
        <li>
          <strong>Favorite categories and currencies</strong> — your pinned categories (up to 10) and
          saved currency preferences.
        </li>
      </ul>

      <h3>Guest Accounts</h3>
      <p>
        You can use Spendly AI without creating a registered account. In guest mode, no email address
        or password is required. We only store the data you provide during setup: your selected currency,
        initial categories, and wallet configuration. Guest data is not linked to any personal identifier.
      </p>

      <h3>Financial Data You Enter</h3>
      <p>
        All financial data you create in the app is stored on our servers:
      </p>
      <ul>
        <li>
          <strong>Wallets</strong> — name, type (Cash, Debit Card, Credit Card, Savings, or Custom),
          and initial balance.
        </li>
        <li>
          <strong>Transactions</strong> — amount, date, description, category, type (income or expense),
          associated wallet, and currency.
        </li>
        <li>
          <strong>Categories</strong> — custom and default expense/income categories you create or organize.
        </li>
        <li>
          <strong>Daily balance snapshots</strong> — derived summaries of your wallet balances stored
          server-side to power spending analytics charts and cash flow trends.
        </li>
      </ul>

      <h3>Authentication Data</h3>
      <ul>
        <li>
          <strong>Refresh tokens</strong> — stored in our database to maintain your logged-in session
          across app restarts. These can be revoked at any time by logging out.
        </li>
        <li>
          <strong>Access tokens (JWT)</strong> — stored locally on your device using{" "}
          <code>expo-secure-store</code>, which uses iOS Keychain on iPhone and Android Keystore on Android.
          These tokens are never sent to us in stored form.
        </li>
        <li>
          <strong>Two-factor authentication codes</strong> — temporary verification codes stored briefly
          in our database while 2FA is active. Codes expire after use.
        </li>
      </ul>

      <h3>Voice and Text AI Input</h3>
      <p>
        When you use the Text AI or Voice AI features to create transactions:
      </p>
      <ul>
        <li>
          <strong>Text input</strong> — your typed natural-language command (e.g., &quot;coffee 4.50&quot;) is
          sent to OpenAI for parsing. The text is processed to extract the transaction amount, description,
          and category.
        </li>
        <li>
          <strong>Voice input</strong> — your voice audio is sent to OpenAI for transcription and
          transaction parsing. <strong>Spendly AI does not store voice audio</strong> after it has been
          processed. OpenAI&apos;s data handling is governed by their{" "}
          <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>.
        </li>
      </ul>

      <h3>Support Communications</h3>
      <p>
        If you contact us via email or the in-app contact form, we collect the information you provide
        (name, email, and message content) to respond to your inquiry.
      </p>

      <h2>2. What We Do NOT Collect</h2>
      <p>The following data is <strong>not</strong> collected by Spendly AI:</p>
      <ul>
        <li>First or last name (entered in forms but not stored in our database)</li>
        <li>Device identifiers, hardware fingerprints, or advertising IDs</li>
        <li>GPS location or any location data</li>
        <li>Biometric data (Face ID / fingerprint usage stays on your device)</li>
        <li>Contacts, calendar, or any other phone data</li>
        <li>Crash reports or usage analytics (we do not use third-party analytics SDKs)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect solely to:</p>
      <ul>
        <li>Create and manage your account and authenticate your sessions.</li>
        <li>Process and categorize transactions using our AI engine.</li>
        <li>Deliver spending analytics, cash flow charts, and budget summaries.</li>
        <li>Send transactional emails (e.g., welcome email on registration) via Resend.</li>
        <li>Respond to your support requests and communications.</li>
        <li>Maintain the security and integrity of the Service.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal data to third parties. We do <strong>not</strong> use
        your financial data for advertising purposes. We do <strong>not</strong> use your personal financial
        data to train AI models.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>Spendly AI uses the following third-party services, each governed by their own privacy policy:</p>
      <ul>
        <li>
          <strong>OpenAI</strong> — processes text and voice input for AI transaction parsing. Voice audio
          is not retained by Spendly AI after processing. See{" "}
          <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
            OpenAI Privacy Policy
          </a>.
        </li>
        <li>
          <strong>Cloudinary</strong> — stores user profile photos. Photos are stored under a path
          associated with your user ID. See{" "}
          <a href="https://cloudinary.com/privacy" target="_blank" rel="noopener noreferrer">
            Cloudinary Privacy Policy
          </a>.
        </li>
        <li>
          <strong>Resend</strong> — sends transactional emails (e.g., welcome emails). Only your email
          address is shared for this purpose. See{" "}
          <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Resend Privacy Policy
          </a>.
        </li>
      </ul>
      <p>
        We only work with providers that meet our data protection standards and are bound by appropriate
        data processing agreements.
      </p>

      <h2>5. Data Storage and Security</h2>
      <p>
        Your financial data is encrypted in transit using TLS 1.3. Passwords are hashed using bcrypt and
        never stored in plain text. Authentication tokens on your device are protected by iOS Keychain and
        Android Keystore.
      </p>
      <p>
        Data is stored on servers located in the European Union. You may request deletion of your data at
        any time by contacting{" "}
        <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a>.
      </p>

      <h2>6. Data Sharing</h2>
      <p>We do not share your personal information except in these limited circumstances:</p>
      <ul>
        <li>With your explicit consent.</li>
        <li>To comply with a legal obligation, court order, or government request.</li>
        <li>To protect the rights, property, or safety of Spendly AI, our users, or the public.</li>
        <li>In connection with a merger, acquisition, or sale of assets (you will be notified in advance).</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access:</strong> request a copy of the data we hold about you.</li>
        <li><strong>Correction:</strong> request correction of inaccurate data.</li>
        <li><strong>Deletion:</strong> request deletion of your account and associated data.</li>
        <li><strong>Portability:</strong> request an export of your data in a machine-readable format.</li>
        <li><strong>Objection:</strong> object to certain processing of your data.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a>. We will respond within 30 days.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active. If you delete your account, we will
        delete your personal data within 30 days, except where retention is required by law. Guest account
        data with no associated activity may be purged periodically.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Spendly AI is not directed to children under the age of 13. We do not knowingly collect personal
        information from children. If you believe a child has provided us with personal data, please contact
        us immediately and we will delete it.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last
        updated&quot; date at the top of this page and, for material changes, notify you via email or an
        in-app notice. Your continued use of Spendly AI after changes take effect constitutes your acceptance
        of the revised policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
        please reach out to us:
      </p>
      <ul>
        <li>Email: <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a></li>
        <li>Website: <a href="/">spendly-ai.com</a></li>
      </ul>

    </LegalLayout>
  );
}
