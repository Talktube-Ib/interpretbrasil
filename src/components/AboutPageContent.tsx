"use client";

import Link from "next/link";
import { Check, Award, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import PhotoGallery from "@/components/PhotoGallery";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPageContent() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">{t("about_us.subtitle")}</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
                            {t("about_us.title")}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {t("about_us.intro_1")}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t("about_us.intro_2")}
                        </p>
                    </AnimateIn>

                    {/* Founding Partners */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        <AnimateIn>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
                                    <img
                                        src="/imagens/a-interpret-brasil/7_lynnea_hansen.jpg"
                                        alt="Lynnea Hansen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-1">LYNNEA HANSEN</h3>
                                <span className="text-secondary font-semibold uppercase text-sm tracking-wider mb-6 block">{t("about_us.partners.lynnea.role")}</span>
                                <ul className="space-y-3 text-gray-600 text-left w-full">
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.lynnea.role_1")}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.lynnea.role_2")}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.lynnea.role_3")}</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimateIn>

                        <AnimateIn delay={0.1}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
                                    <img
                                        src="/imagens/a-interpret-brasil/8_Douglas-Simoes-1.jpg"
                                        alt="Douglas Simões"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-1">DOUGLAS SIMÕES</h3>
                                <span className="text-secondary font-semibold uppercase text-sm tracking-wider mb-6 block">{t("about_us.partners.douglas.role")}</span>
                                <ul className="space-y-3 text-gray-600 text-left w-full">
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.douglas.role_1")}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.douglas.role_2")}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-secondary shrink-0 mt-1" />
                                        <span>{t("about_us.partners.douglas.role_3")}</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimateIn>
                    </div>

                    <AnimateIn delay={0.2} className="bg-primary rounded-3xl p-8 md:p-16 text-white text-center">
                        <h2 className="text-3xl font-bold font-heading mb-6">{t("about_us.collective.title")}</h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto mb-12">
                            {t("about_us.collective.text")}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <Award size={32} className="text-secondary mb-3" />
                                <h3 className="text-xl font-bold mb-2">{t("about_us.collective.feat_1_title")}</h3>
                                <p className="text-gray-300 text-sm">{t("about_us.collective.feat_1_text")}</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <Users size={32} className="text-secondary mb-3" />
                                <h3 className="text-xl font-bold mb-2">{t("about_us.collective.feat_2_title")}</h3>
                                <p className="text-gray-300 text-sm">{t("about_us.collective.feat_2_text")}</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <Globe size={32} className="text-secondary mb-3" />
                                <h3 className="text-xl font-bold mb-2">{t("about_us.collective.feat_3_title")}</h3>
                                <p className="text-gray-300 text-sm">{t("about_us.collective.feat_3_text")}</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="/contato" className="btn-primary bg-white text-primary hover:bg-secondary hover:text-white border-none py-3 px-8 text-lg">
                                {t("about_us.collective.cta")}
                            </Link>
                        </div>
                    </AnimateIn>

                    <PhotoGallery />
                </div>
            </main >

            <Footer />
        </div >
    );
}
