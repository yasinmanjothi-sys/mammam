import type { Metadata } from "next";
import { Josefin_Sans, Space_Grotesk, Pacifico } from "next/font/google";
import "./globals.css";
import React from 'react';

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mammam - Vietnamese Street Food",
  description: "Modern Vietnamese Street Pop Art Dining Experience",
};

import SmoothScroll from "@/app/components/SmoothScroll";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${spaceGrotesk.variable} ${pacifico.variable}`}>
      <body className="antialiased bg-stone-100 text-stone-900 overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
