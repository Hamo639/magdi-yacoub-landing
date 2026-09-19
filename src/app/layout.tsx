import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://magdi-yacoub-landing.vercel.app/"),
  title: "Sir Magdi Yacoub",
  description:
    "Explore the life, achievements, and humanitarian legacy of Sir Magdi Yacoub.",

  openGraph: {
    title: "Sir Magdi Yacoub",
    description:
      "Explore the life, achievements, and humanitarian legacy of Sir Magdi Yacoub.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sir Magdi Yacoub",
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
