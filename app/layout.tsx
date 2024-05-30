import type { Metadata } from 'next';
import { Inter, League_Spartan } from 'next/font/google';
import './globals.css';
import Footer from '@/components/shared/footer.server';
import React from 'react';
import Header from '@/components/shared/header.server';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-spartan',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spartan.variable}`}>
        <Header />
        <main className="font-spartan text-zinc-100">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
