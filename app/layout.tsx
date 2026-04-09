import type { Metadata } from "next";
import { Inter, Anton, JetBrains_Mono, Monoton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dimes.app"),
  title: "Dimes — Free Skill Games, Real Rewards",
  description:
    "Dimes is the free-to-play app where you compete in 1v1 tile-matching games and win real gift cards. No deposits. No catch. Join the waitlist.",
  keywords: [
    "Dimes",
    "free to play",
    "skill games",
    "gift cards",
    "win real money",
    "tile matching",
    "1v1 games",
  ],
  openGraph: {
    title: "Dimes — Free Skill Games, Real Rewards",
    description:
      "Your phone finally pays. Free 1v1 skill games with real gift card rewards. No deposits ever.",
    siteName: "Dimes",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dimes — Your phone finally pays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimes — Free Skill Games, Real Rewards",
    description:
      "Your phone finally pays. Free 1v1 skill games with real gift card rewards. No deposits ever.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${jetbrainsMono.variable} ${monoton.variable}`}
    >
      <body className="min-h-screen bg-void text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
