/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Splash&display=swap'),
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Rochester&display=swap')
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap')
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&family=VT323&display=swap')
      </style>
    </html>
  );
}
