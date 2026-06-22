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
    default: "Spendly AI — Smart Expense Tracking Powered by AI",
    template: "%s | Spendly AI",
  },

  description:
    "Track expenses naturally by typing or speaking. Spendly AI auto-categorizes transactions, manages multi-currency wallets, and delivers smart analytics.",

  keywords: [
    "expense tracker",
    "expense tracking app",
    "AI expense tracker",
    "personal finance app",
    "budget app",
    "spending tracker",
    "money manager",
    "finance manager",
    "budget tracker",
    "income and expense tracker",
    "wallet app",
    "multi-currency expense tracker",
    "voice expense tracker",
    "automatic expense categorization",
    "AI budget assistant",
    "smart money tracker",
    "free expense tracker",
    "iOS expense tracker",
    "Android expense tracker",
    "financial analytics app",
    "cash flow tracker",
    "AI personal finance",
    "expense organizer",
    "track spending",
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
    title: "Spendly AI — Smart Expense Tracking Powered by AI",
    description:
      "Track expenses by typing or speaking naturally. AI auto-categorizes transactions, manages wallets, and surfaces financial insights — free personal finance app for iOS and Android.",
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
    title: "Spendly AI — Smart Expense Tracking Powered by AI",
    description:
      "Track expenses by typing or speaking naturally. AI auto-categorizes, multi-currency wallets, spending analytics — free iOS & Android app.",
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
      "AI-powered expense categorization",
      "Text and voice transaction input",
      "Multi-currency wallet management",
      "Spending analytics and cash flow charts",
      "Income vs expense tracking",
      "Smart category management",
      "Monthly budget tracking",
      "Fast transaction search",
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
