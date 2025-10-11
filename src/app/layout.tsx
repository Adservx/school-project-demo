import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ['Georgia', 'serif'],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
  preload: false,
  fallback: ['Georgia', 'serif'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ranabirjanahit.edu.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ranabir Janahit Secondary School - Quality Education & Technical Training",
    template: "%s | Ranabir Janahit Secondary School",
  },
  description:
    "Government-aided community school in Khahare, Waling Municipality, Syangja, Nepal offering Grade Nursery-12, 10+2 academic streams, and CTEVT-affiliated Electrical Engineering programs.",
  keywords: [
    "Ranabir Janahit Secondary School",
    "Ranabir Janahit",
    "secondary school Nepal",
    "Waling Municipality school",
    "Syangja school",
    "CTEVT electrical engineering",
    "technical education Nepal",
    "community school Nepal",
  ],
  authors: [{ name: "Ranabir Janahit Secondary School" }],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Ranabir Janahit Secondary School - Building Competent Workforce",
    description:
      "Quality education and technical training in Khahare, Waling Municipality, Syangja, Nepal.",
    url: siteUrl,
    siteName: "Ranabir Janahit Secondary School",
    images: [
      {
        url: `${siteUrl}/logo/logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Ranabir Janahit Secondary School Campus",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ranabirjanahit",
    title: "Ranabir Janahit Secondary School",
    description:
      "Empowering learners in Syangja, Nepal with academic excellence and technical vocational training.",
    images: [`${siteUrl}/logo/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Script id="school-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'School',
            name: 'Ranabir Janahit Secondary School',
            alternateName: 'Ranabir Janahit Community Secondary School',
            url: siteUrl,
            logo: `${siteUrl}/logo/logo.jpg`,
            description:
              'Government-aided community school in Khahare, Waling Municipality, Syangja, Nepal offering general education and vocational technical programs.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Khahare, Waling Municipality-5',
              addressLocality: 'Syangja',
              addressRegion: 'Gandaki Province',
              addressCountry: 'NP',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 28.0033,
              longitude: 83.7644,
            },
            telephone: '+977-63-440076',
            sameAs: [
              'https://www.facebook.com/ranabirjanahit',
              'https://www.youtube.com/@ranabirjanahit',
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
