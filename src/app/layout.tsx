import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Interpret Brasil",
    default: "Interpret Brasil - Soluções em Tradução e Interpretação",
  },
  description: "Empresa de tradução simultânea em SP, RJ, NYC com mais de 20 anos de experiência. Tradução e interpretação em inglês, espanhol e mais idiomas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://interpretbrasil.com",
    siteName: "Interpret Brasil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
