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
  title: "Vaishak Karkera — ECE Engineer | Embedded Systems & IoT Portfolio",
  description:
    "Portfolio of Vaishak D Karkera — ECE engineer building smart systems with ESP32, IoT, AI automation, and full-stack dashboards. Open to internships.",
  keywords: [
    "Vaishak Karkera",
    "ECE Engineer",
    "Embedded Systems",
    "IoT",
    "ESP32",
    "STM32",
    "Smart Systems",
    "Portfolio",
  ],
  authors: [{ name: "Vaishak D Karkera" }],
  openGraph: {
    title: "Vaishak Karkera — ECE Engineer Portfolio",
    description:
      "Building smart systems that connect hardware to real software outcomes.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
