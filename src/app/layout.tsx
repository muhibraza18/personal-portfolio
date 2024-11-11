import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhib's Developer-Portfolio",
  description: "Muhib's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon-new.ico?v=1" />
      </head>
      <body
        className={`selection:text-customColor5 bg-gradient-to-r from-customColor2 to-customColor3 ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
