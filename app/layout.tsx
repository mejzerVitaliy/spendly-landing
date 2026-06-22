import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://spendly-ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Spendly AI — Track Expenses by Typing or Speaking | Free AI Finance App",
    template: "%s | Spendly AI",
  },

  description:
    "Stop guessing where your money goes. Spendly AI lets you log expenses by typing or speaking naturally — AI auto-categorizes, tracks multiple wallets in 100+ currencies, and gives personalized insights. Free. No account required.",

  keywords: [
    // Core intent
    "expense tracker",
    "expense tracking app",
    "personal finance app",
    "money tracker app",
    "budget tracker app",
    "income and expense tracker",
    "spending tracker app",
    // AI-specific
    "AI expense tracker",
    "AI personal finance app",
    "AI budget assistant",
    "AI finance coach",
    "natural language expense tracker",
    "voice expense tracker",
    "voice transaction input",
    "automatic expense categorization",
    "smart expense tracker",
    // Platform
    "free expense tracker",
    "iOS expense tracker",
    "Android expense tracker",
    "React Native finance app",
    "mobile finance app",
    // Features
    "multi-currency expense tracker",
    "multi-wallet finance app",
    "recurring expense tracker",
    "cash flow tracker",
    "financial analytics app",
    "spending insights app",
    "guest mode finance app",
    "no account expense tracker",
    "track cash expenses",
    // Comparison / differentiation
    "expense tracker without bank",
    "finance app all banks",
    "alternative to spreadsheet budget",
    "expense tracker vs revolut",
  ],

  authors: [{ name: "Spendly AI", url: BASE_URL }],
  creator: "Spendly AI",
  publisher: "Spendly AI",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Spendly AI",
    title: "Spendly AI — Track Expenses by Typing or Speaking | Free AI Finance App",
    description:
      "Just say 'coffee 4.50' — AI categorizes it instantly. Multi-wallet, 100+ currencies, AI Coach insights, recurring transactions, guest mode. Free personal finance app for iOS & Android.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spendly AI — Smart Expense Tracking Powered by AI",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@spendlyai",
    creator: "@spendlyai",
    title: "Spendly AI — Track Expenses by Typing or Speaking",
    description:
      "Just say 'coffee 4.50' — AI categorizes it. Multi-wallet, 100+ currencies, AI Coach, recurring transactions. Free iOS & Android finance app.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  category: "finance",
};

const jsonLd = [
  // SoftwareApplication schema
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Spendly AI",
    alternateName: ["Spendly", "Spendly AI App"],
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Personal Finance",
    operatingSystem: "iOS, Android",
    url: BASE_URL,
    description:
      "Spendly AI is an AI-powered personal finance mobile application that allows users to track expenses by typing or speaking naturally. The app automatically categorizes transactions, manages multiple wallets across currencies, and provides detailed spending analytics.",
    featureList: [
      "AI text input — type expenses in natural language",
      "AI voice input — speak transactions aloud",
      "Automatic expense categorization",
      "Multiple wallet management (cash, debit, credit, savings, custom)",
      "Multi-currency support with live exchange rates (100+ currencies)",
      "Spending analytics — cash flow trends and income vs expense ratio",
      "AI Insights — automatic financial snapshot cards",
      "AI Coach — on-demand deep spending analysis",
      "Recurring transactions (daily, weekly, monthly, yearly)",
      "Guest mode — no account required",
      "Category budgets with real-time progress bars",
      "Transaction search and filtering",
      "Wallet-to-wallet transfers",
      "Push notifications and financial summaries",
      "English and Russian localization",
      "Offline support with action guard",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    screenshot: `${BASE_URL}/screenshots/screen-home.jpg`,
    softwareVersion: "1.0",
    releaseNotes: "Initial launch",
    inLanguage: "en",
    availableOnDevice: ["iPhone", "Android Phone"],
  },

  // Organization schema
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spendly AI",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@spendly-ai.com",
      contactType: "customer support",
      availableLanguage: "English",
    },
    sameAs: [],
  },

  // WebSite schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Spendly AI",
    url: BASE_URL,
    description:
      "Official landing page for Spendly AI — an AI-powered personal finance and expense tracking app.",
    publisher: {
      "@type": "Organization",
      name: "Spendly AI",
    },
    inLanguage: "en",
  },

  // FAQPage schema — critical for AI search (ChatGPT, Perplexity, Gemini)
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Spendly AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI is a personal finance mobile app for iOS and Android that uses artificial intelligence to help users track expenses. You can add transactions by typing naturally (e.g., 'coffee 4.50') or speaking aloud, and the AI automatically parses the amount, category, and details.",
        },
      },
      {
        "@type": "Question",
        name: "Where is my data stored in Spendly AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your financial data is stored on servers in the European Union, encrypted in transit using TLS 1.3. Passwords are stored as bcrypt hashes. Authentication tokens on your device are protected by iOS Keychain and Android Keystore.",
        },
      },
      {
        "@type": "Question",
        name: "Can tax authorities or third parties access my Spendly AI transactions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your financial data is private and accessible only to you. Spendly AI does not share data with any government agency, advertiser, or third party unless legally compelled by a valid court order.",
        },
      },
      {
        "@type": "Question",
        name: "What AI model powers Spendly AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI uses OpenAI's GPT models for text and voice transaction parsing and for the AI Coach deep analysis feature. Voice audio is not stored by Spendly after processing.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an account to use Spendly AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can use Spendly AI in full guest mode — no email or password required. Your data is stored locally. You can create an account later to sync across devices and enable cloud backup.",
        },
      },
      {
        "@type": "Question",
        name: "How is Spendly AI different from a bank app or Revolut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bank apps and Revolut only track money inside their own system. Spendly AI works with all your money — cash, any bank's cards, foreign accounts — giving you a complete financial picture in one place. You control the data, not the bank.",
        },
      },
      {
        "@type": "Question",
        name: "Does Spendly AI support multiple currencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Spendly AI supports 100+ currencies with live exchange rates. Set a main display currency and every wallet balance is automatically converted and shown in your preferred currency.",
        },
      },
      {
        "@type": "Question",
        name: "Is Spendly AI free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Spendly AI is free to download and use. The app is currently in development and will be available on the App Store and Google Play. Join the waitlist at spendly-ai.com to be notified at launch.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="google-site-verification" content="ic2EmuIqR_aHsxv2WEj1JCSeqORxJHDiZDQh3lP-WEA" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
