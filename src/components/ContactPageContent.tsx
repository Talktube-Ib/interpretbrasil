"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPageContent() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <AnimateIn>
                                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
                                    {t("contact_page.title")}
                                </h1>
                                <p className="text-lg text-gray-600 mb-12">
                                    {t("contact_page.description")}
                                </p>
                            </AnimateIn>

                            <div className="space-y-8">
                                <AnimateIn delay={0.1} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">{t("contact_page.email_label")}</h3>
                                        <a href="mailto:contato@interpretbrasil.com" className="text-gray-600 hover:text-secondary transition-colors block">
                                            contato@interpretbrasil.com
                                        </a>
                                        <span className="text-sm text-gray-400 mt-1 block">{t("contact_page.email_sub")}</span>
                                    </div>
                                </AnimateIn>

                                <AnimateIn delay={0.2} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <div>
                                            <h3 className="font-bold text-primary text-lg mb-1">{t("contact_page.locations.sp")}</h3>
                                            <p className="text-gray-600 font-medium">(11) 3090-6820 / (11) 99868-2679</p>
                                            <p className="text-gray-500 text-sm mt-1">Av. Macuco, 280, apt. 12 – Moema</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary text-lg mb-1">{t("contact_page.locations.rj")}</h3>
                                            <p className="text-gray-600 font-medium">(21) 2042-0399 / (21) 98182-4824</p>
                                            <p className="text-gray-500 text-sm mt-1">R. Coronel Tamarindo nº 8, Sala 601, Bloco 7 – Gragoatá, Niterói</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary text-lg mb-1">{t("contact_page.locations.rp")}</h3>
                                            <p className="text-gray-600 font-medium">(16) 3721-3082 / (16) 99221-4492</p>
                                            <p className="text-gray-500 text-sm mt-1">Rua Iraci Alonso Garcia, 3386, Residencial Zanetti, Franca/SP</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary text-lg mb-1">{t("contact_page.locations.belem")}</h3>
                                            <p className="text-gray-600 font-medium">(11) 3090-6820 / (11) 99868-2679</p>
                                            <p className="text-gray-500 text-sm mt-1">Rodovia Augusto Montenegro, 200 – Coqueiro</p>
                                        </div>
                                    </div>
                                </AnimateIn>
                            </div>
                        </div>

                        {/* Form */}
                        <AnimateIn delay={0.4}>
                            <ContactForm />
                        </AnimateIn>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
