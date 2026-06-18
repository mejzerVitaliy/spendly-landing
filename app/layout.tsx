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
    icon: "/favicon.ico",
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
        name: "How does Spendly AI categorize expenses automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI uses a built-in AI engine that interprets natural language input — both text and voice. When you type or say a transaction like 'grocery store forty dollars', the AI extracts the amount, infers the merchant, and assigns the appropriate category (Food & Dining, Transport, etc.) with over 97% accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Does Spendly AI support multiple currencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Spendly AI supports 100+ currencies. You can create wallets in different currencies, set a main display currency, and the app automatically converts balances using live exchange rates. Changing the main currency recalculates all wallet balances and analytics instantly.",
        },
      },
      {
        "@type": "Question",
        name: "Is Spendly AI free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI is free to download and use. The app is currently in development and will be available on the App Store and Google Play. You can join the waitlist at spendly-ai.com to be notified at launch.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use voice input to add transactions in Spendly AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Spendly AI has a Voice AI mode where you can speak a transaction naturally, such as 'paid rent five hundred euros'. The app processes the speech, extracts the transaction details, and adds it to your wallet automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What analytics does Spendly AI provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI provides cash flow trend charts, income vs expense ratio breakdowns, spending by category, monthly comparisons, and wallet balance summaries. Data can be filtered by week, month, or year.",
        },
      },
      {
        "@type": "Question",
        name: "When will Spendly AI launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spendly AI is currently in active development. You can join the waitlist at spendly-ai.com and you will be notified by email as soon as the app is available on the App Store and Google Play.",
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
