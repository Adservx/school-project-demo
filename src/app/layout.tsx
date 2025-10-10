import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ranabir Janahit Secondary School - Quality Education & Technical Training",
  description: "Government-aided community school in Syangja, Nepal offering Grade 1-12 education, 10+2 programs, and CTEVT-affiliated Electrical Engineering courses. Established 2019 B.S.",
  keywords: ["Ranabir Janahit", "secondary school", "Syangja", "Nepal", "CTEVT", "electrical engineering", "10+2 education", "Waling Municipality", "technical education"],
  authors: [{ name: "Ranabir Janahit Secondary School" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "Ranabir Janahit Secondary School - Building Competent Workforce",
    description: "Quality education and technical training in Khahare, Waling Municipality, Syangja, Nepal",
    type: "website",
    locale: "en_US",
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
        {children}
      </body>
    </html>
  );
}
