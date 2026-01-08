"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { servicesData } from "@/lib/servicesData";
import { useLanguage } from "@/context/LanguageContext";

interface ServicePageContentProps {
    slug: string;
}

export default function ServicePageContent({ slug }: ServicePageContentProps) {
    const { t } = useLanguage();
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    // Get translation data. 
    // If t() returns the key because it's missing, we might have an issue. 
    // but t returns 'any' now.
    const translated = t(`services_data.${slug}`);

    // Fallback if translation is missing (or 'translated' is just the key string)
    const title = typeof translated === 'string' ? service.title : translated.title;
    const subtitle = typeof translated === 'string' ? service.subtitle : translated.subtitle;
    const description = typeof translated === 'string' ? service.description : translated.description;
    const features = typeof translated === 'string' ? service.features : translated.features;

    // Images come from original data as they are file paths
    const images = service.images;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <Link href="/servicos" className="inline-flex items-center text-secondary font-medium mb-6 hover:underline">
                                    <ArrowRight className="rotate-180 mr-2" size={16} />
                                    {t("header.services")}
                                </Link>
                                <h1 className="text-4xl font-bold font-heading mb-4 text-primary">{title}</h1>
                                <p className="text-xl text-gray-500 mb-8">{subtitle}</p>

                                <div className="prose max-w-none text-gray-600 mb-12">
                                    {Array.isArray(description) && description.map((paragraph: string, i: number) => (
                                        <p key={i} className="mb-4">{paragraph}</p>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">O que oferecemos</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Array.isArray(features) && features.map((feature: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                                            <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimateIn>

                            {images && (
                                <AnimateIn delay={0.3} className="mt-12">
                                    <h3 className="text-2xl font-bold font-heading text-primary mb-6">Galeria de Fotos</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        {images.map((img: string, i: number) => (
                                            <div key={i} className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                                <img
                                                    src={img}
                                                    alt={`${title} ${i + 1}`}
                                                    className="w-full h-full object-cover min-h-[200px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </AnimateIn>
                            )}
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <AnimateIn delay={0.3} className="sticky top-32">
                                <div className="bg-primary text-white p-8 rounded-2xl mb-8">
                                    <h3 className="text-2xl font-bold font-heading mb-4">Precisa deste serviço?</h3>
                                    <p className="text-white/80 mb-8">
                                        Entre em contato conosco para um orçamento personalizado.
                                    </p>
                                    <Link href="/contato" className="btn-primary w-full bg-white text-primary hover:bg-secondary hover:text-white border-none justify-center">
                                        {t("header.cta")}
                                    </Link>
                                </div>

                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold font-heading mb-4 text-primary">Outros Serviços</h3>
                                    <ul className="space-y-3">
                                        {Object.entries(servicesData).map(([sSlug, sData]) => {
                                            if (sSlug === slug) return null;
                                            return (
                                                <li key={sSlug}>
                                                    <Link href={`/servicos/${sSlug}`} className="text-gray-600 hover:text-secondary block py-2 border-b border-gray-50 last:border-0 text-sm">
                                                        {t(`services_data.${sSlug}.title`) !== `services_data.${sSlug}.title` ? t(`services_data.${sSlug}.title`) : sData.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </AnimateIn>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
