import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the Terms of Use for Spendly AI — rules, limitations, and your rights when using our service.",
  alternates: { canonical: "https://spendly-ai.com/terms" },
  robots: { index: true, follow: false },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="June 18, 2026">

      <div className="highlight-box">
        <p>
          Please read these Terms of Use carefully before using Spendly AI. By downloading, installing, or
          using the app, you agree to be bound by these terms. If you disagree, please do not use the service.
        </p>
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Spendly AI mobile application
        and related services (&quot;Service&quot;) provided by Spendly AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By using the
        Service, you agree to these Terms and our <a href="/privacy">Privacy Policy</a>.
      </p>
      <p>
        We reserve the right to modify these Terms at any time. We will notify you of material changes via
        email or an in-app notification. Continued use of the Service after changes take effect constitutes
        acceptance of the new Terms.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Spendly AI is a personal finance mobile application that allows users to:
      </p>
      <ul>
        <li>Track expenses and income using text or voice input processed by AI.</li>
        <li>Manage multiple wallets and currencies.</li>
        <li>Organize transactions into categories and budgets.</li>
        <li>View spending analytics and financial summaries.</li>
      </ul>
      <p>
        The Service is provided &quot;as is&quot; and may be updated, modified, or discontinued at any time.
        We do not guarantee uninterrupted access to the Service.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Spendly AI. By using the Service, you represent and warrant
        that you meet this requirement. If you are under 18, you confirm that you have parental or guardian
        consent to use the Service.
      </p>

      <h2>4. User Accounts</h2>
      <p>
        To access certain features, you may need to create an account. You agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information during registration.</li>
        <li>Keep your login credentials confidential and not share them with others.</li>
        <li>Notify us immediately of any unauthorized use of your account.</li>
        <li>Be responsible for all activity that occurs under your account.</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate accounts that violate these Terms.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree to use Spendly AI only for lawful purposes and in accordance with these Terms. You must not:</p>
      <ul>
        <li>Use the Service for any illegal, fraudulent, or harmful activity.</li>
        <li>Attempt to gain unauthorized access to any part of the Service or its infrastructure.</li>
        <li>Upload or transmit malicious code, viruses, or any content that disrupts the Service.</li>
        <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
        <li>Use automated tools (bots, scrapers) to access or extract data from the Service.</li>
        <li>Impersonate any person or entity, or falsely claim an affiliation with any person or entity.</li>
        <li>Use the Service in any way that violates applicable laws or regulations.</li>
      </ul>

      <h2>6. Financial Information Disclaimer</h2>
      <p>
        <strong>Spendly AI is a personal finance tracking tool, not a financial advisory service.</strong>
        The analytics, summaries, and insights provided by the Service are for informational and organizational
        purposes only.
      </p>
      <p>
        We do not provide financial, investment, tax, or legal advice. Any financial decisions you make based
        on information in the app are entirely your own responsibility. We strongly encourage you to consult a
        qualified financial professional for advice specific to your situation.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, design, features, and functionality of Spendly AI — including but not limited to text,
        graphics, logos, icons, and software — are the exclusive property of Spendly AI and are protected
        by applicable intellectual property laws.
      </p>
      <p>
        You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service
        for personal, non-commercial purposes in accordance with these Terms.
      </p>

      <h2>8. Your Content</h2>
      <p>
        You retain ownership of all financial data and content you enter into Spendly AI (&quot;User Content&quot;).
        By using the Service, you grant us a limited license to store, process, and display your User Content
        solely to provide the Service to you.
      </p>
      <p>
        We do not use your personal financial data for training AI models without your explicit consent.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        The Service may integrate with or link to third-party services (e.g., speech-to-text providers,
        cloud infrastructure). These services are governed by their own terms and privacy policies.
        We are not responsible for the practices of any third-party services.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Spendly AI shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of — or inability to use
        — the Service, even if we have been advised of the possibility of such damages.
      </p>
      <p>
        Our total liability to you for any claims arising from your use of the Service shall not exceed the
        amount you paid us (if any) in the 12 months preceding the claim.
      </p>

      <h2>11. Warranty Disclaimer</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express
        or implied, including but not limited to warranties of merchantability, fitness for a particular
        purpose, or non-infringement. We do not warrant that the Service will be error-free, secure,
        or continuously available.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time by contacting{" "}
        <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a>.
      </p>
      <p>
        We may terminate or suspend your access to the Service immediately, without notice, if you violate
        these Terms or if we discontinue the Service. Upon termination, your right to use the Service ceases
        immediately.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising
        from these Terms shall be resolved through good-faith negotiation. If negotiation fails, disputes
        shall be submitted to binding arbitration.
      </p>

      <h2>14. Contact Us</h2>
      <p>If you have questions about these Terms, please contact us:</p>
      <ul>
        <li>Email: <a href="mailto:support@spendly-ai.com">support@spendly-ai.com</a></li>
        <li>Website: <a href="/">spendly-ai.com</a></li>
      </ul>

    </LegalLayout>
  );
}
