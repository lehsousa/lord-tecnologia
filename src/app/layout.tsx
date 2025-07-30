import type { Metadata } from "next";
// Importação das fontes Geist
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";

import CookieConsentBanner from "./components/CookieConsentBanner";

// Metadata do site
export const metadata: Metadata = {
  title: "Lord Tecnologia",
  description: "Sua solução digital perfeita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A forma correta é usar as variáveis da fonte diretamente no className
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable} !scroll-smooth`}>
      <body className="antialiased">
        
        <main>{children}</main>
       
        <CookieConsentBanner />
      </body>
    </html>
  );
}
