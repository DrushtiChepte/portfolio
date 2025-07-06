import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drushti Chepte - Web Developer Portfolio",
  description: "Drushti Chepte — Web developer and engineering student.",
  keywords: [
    "Drushti Chepte",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "Frontend Developer",
  ],
  authors: [{ name: "Drushti Chepte" }],
  creator: "Drushti Chepte",
  metadataBase: new URL("https://drushtichepte.me"),
  openGraph: {
    title: "Drushti Chepte - Web Developer Portfolio",
    description:
      "Passionate web developer with expertise in React and full-stack development. Explore my projects and skills.",
    url: "https://drushtichepte.me",
    siteName: "Drushti Chepte Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
