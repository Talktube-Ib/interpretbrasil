import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

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



export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }, { lang: 'es' }, { lang: 'zh' }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <LanguageProvider lang={lang} dictionary={dictionary}>
          {props.children}
        </LanguageProvider>
      </body>
    </html>
  );
}
