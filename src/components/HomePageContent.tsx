"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import LogoTicker from "@/components/LogoTicker";
import HeroBackground from "@/components/HeroBackground";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServicesGrid from "@/components/ServicesGrid";
import { WPPost } from "@/lib/wordpress";
import { useLanguage } from "@/context/LanguageContext";
import CountUp from "@/components/CountUp";
import TalkTubePopup from "@/components/TalkTubePopup";

interface HomePageContentProps {
    latestPosts: WPPost[];
}

export default function HomePageContent({ latestPosts }: HomePageContentProps) {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex flex-col bg-white overflow-hidden">
                    {/* Background Image/Video Carousel */}
                    <HeroBackground />

                    <div className="flex-grow flex items-center relative z-10 py-20">
                        <div className="container">
                            <div className="max-w-4xl pt-10">
                                <AnimateIn delay={0.1}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-[2px] w-12 bg-secondary"></div>
                                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">
                                            {t("hero.experience")}
                                        </span>
                                    </div>
                                </AnimateIn>

                                <AnimateIn delay={0.2}>
                                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-primary">
                                        {t("hero.title_main")} <br />
                                        <span className="text-secondary">
                                            {t("hero.title_sub")}
                                        </span>
                                    </h1>
                                </AnimateIn>

                                <AnimateIn delay={0.3}>
                                    <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
                                        {t("hero.description")}
                                    </p>
                                </AnimateIn>

                                <AnimateIn delay={0.4} className="flex flex-wrap gap-4">
                                    <Link href="/contato" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-secondary/20">
                                        {t("hero.cta_primary")}
                                    </Link>
                                    <Link href="/servicos" className="btn-secondary text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                                        {t("hero.cta_secondary")}
                                    </Link>
                                </AnimateIn>
                            </div>
                        </div>
                    </div>

                    {/* Client Logos Ticker */}
                    <div className="w-full z-20 border-t border-gray-100/50 relative">
                        <LogoTicker />
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-background">
                    <div className="container">
                        <AnimateIn direction="down" className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                                {t("header.services")}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">
                                Soluções Completas em Idiomas
                            </h2>
                        </AnimateIn>

                        <ServicesGrid />
                    </div>
                </section>

                {/* Why Choose Us - Enhanced with Video */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <AnimateIn direction="right" className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                                    <iframe
                                        className="w-full h-full object-cover"
                                        src="https://www.youtube.com/embed/67KCnfGSn_s?si=Odk-k9zXyv9RkO-f"
                                        title="Interpret Brasil Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                            </AnimateIn>

                            <AnimateIn direction="left">
                                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">{t("why_choose_us.subtitle")}</span>
                                <h2 className="text-4xl font-bold font-heading mb-8 text-primary leading-tight">
                                    {t("why_choose_us.title")}
                                </h2>
                                <div className="space-y-8 text-gray-600 leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{t("why_choose_us.expertise_title")}</h3>
                                        <p>{t("why_choose_us.expertise_text")}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{t("why_choose_us.agency_title")}</h3>
                                        <p>{t("why_choose_us.agency_text")}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{t("why_choose_us.years_title")}</h3>
                                        <p>{t("why_choose_us.years_text")}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6 mt-10 border-t border-gray-100 pt-8">
                                    <div>
                                        <CountUp end={20} suffix="+" className="block text-4xl font-bold text-secondary font-heading" />
                                        <span className="text-sm text-gray-500 uppercase font-semibold">{t("stats.years")}</span>
                                    </div>
                                    <div>
                                        <CountUp end={10000} suffix="+" className="block text-4xl font-bold text-secondary font-heading" />
                                        <span className="text-sm text-gray-500 uppercase font-semibold">{t("stats.events")}</span>
                                    </div>
                                    <div>
                                        <CountUp end={1000000} suffix="+" className="block text-4xl font-bold text-secondary font-heading" />
                                        <span className="text-sm text-gray-500 uppercase font-semibold">{t("stats.translations")}</span>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <Link href="/a-interpret-brasil" className="btn-secondary">
                                        Conheça Nossa História
                                    </Link>
                                </div>
                            </AnimateIn>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
                    <div className="container relative z-10 text-center">
                        <AnimateIn>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 max-w-3xl mx-auto leading-tight">
                                Pronto para internacionalizar seu evento?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                Solicite um orçamento hoje mesmo e garanta a melhor comunicação para o seu negócio.
                            </p>
                            <Link href="/contato" className="btn-secondary bg-white text-primary border-white hover:bg-gray-100 hover:text-primary px-10 py-4 text-lg shadow-lg">
                                Falar com um Especialista
                            </Link>
                        </AnimateIn>
                    </div>
                </section>

                {/* Blog Preview Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container">
                        <div className="flex justify-between items-end mb-12">
                            <AnimateIn>
                                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Blog</span>
                                <h2 className="text-4xl font-bold font-heading text-primary">Últimas Novidades</h2>
                            </AnimateIn>
                            <AnimateIn delay={0.2} className="hidden md:block">
                                <Link href="/noticias-artigos-traducao-interpretacao" className="text-primary font-bold hover:text-secondary flex items-center gap-2 transition-colors">
                                    Ver todas as notícias <ArrowRight size={18} />
                                </Link>
                            </AnimateIn>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {latestPosts.map((post, index) => (
                                <AnimateIn key={post.id} delay={index * 0.1}>
                                    <Link href={`/noticias-artigos-traducao-interpretacao/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                                        <div className="aspect-video bg-gray-200 relative overflow-hidden">
                                            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                                                <img
                                                    src={post._embedded["wp:featuredmedia"][0].source_url}
                                                    alt={post.title.rendered}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors" />
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <span className="text-xs text-gray-400 mb-2 block">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                                            <h3 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <p className="text-sm text-gray-500 line-clamp-3 mb-4"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />
                                            <span className="mt-auto text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Ler mais <ArrowRight size={16} className="text-secondary" />
                                            </span>
                                        </div>
                                    </Link>
                                </AnimateIn>
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link href="/noticias-artigos-traducao-interpretacao" className="btn-secondary w-full justify-center">
                                Ver todas as notícias
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFloat />
            <TalkTubePopup />
        </div>
    );
}
