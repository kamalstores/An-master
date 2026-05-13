import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Kamal Sharma",
  title: "Kamal Sharma | Full Stack Developer & AI/ML Engineer",
  description:
    "Kamal Sharma is a CS undergrad at NIT Kurukshetra passionate about building full-stack products, solving DSA problems, and exploring AI/ML. Former Accenture intern. Explore his projects and portfolio.",
  authors: [
    {
      name: "Kamal Sharma",
      url: "https://kamal.vercel.app",
    },
  ],
  creator: "Kamal Sharma",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: Keywords,
  metadataBase: new URL("https://kamal.vercel.app"),


  alternates: {
    canonical: "https://kamal.vercel.app",
    languages: {
      "en-US": "https://kamal.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1c8e801d4931baa4",
  },
  appleWebApp: {
    capable: true,
    title: "Kamal Sharma",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Kamal Sharma",
    description:
      "Explore Kamal Sharma's portfolio featuring projects in React, Next.js, AI/ML, and cloud. CS undergrad at NIT Kurukshetra & former Accenture intern.",
    url: "https://kamal.vercel.app",
    siteName: "Kamal Sharma",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Kamal Sharma Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Kamal Sharma",
    description:
      "Check out Kamal Sharma's personal portfolio and dev projects using Next.js, React, TypeScript, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@kamalsharma",
    site: "@kamalsharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
