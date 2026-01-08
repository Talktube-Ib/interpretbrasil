"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/lib/servicesData";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { t, lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        {
            label: "TalkTube",
            href: "/servicos/talktube",
            highlight: true,
            description: "Plataforma de Videoconferência com Tradução"
        },
        {
            label: t("header.services"),
            href: "/servicos",
            hasSubmenu: true,
            subItems: [
                { label: t("header.services_simultaneous"), href: "/servicos/traducao-simultanea" },
                { label: t("header.services_consecutive"), href: "/servicos/traducao-consecutiva" },
                { label: t("header.services_remote"), href: "/servicos/interpretacao-remota" },
            ]
        },
        { label: t("header.services_sworn"), href: "/servicos/traducao-juramentada" },
        { label: t("header.services_simple"), href: "/servicos/traducao-simples" },
        { label: t("header.services_medical"), href: "/servicos/traducao-medica-e-farmaceutica" },
        { label: t("header.services_technical"), href: "/servicos/traducao-tecnica" },
        { label: t("header.services_equipment"), href: "/servicos/equipamentos-para-traducao-simultanea" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4 border-b border-gray-100"
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 group">
                    <img
                        src="/imagens/home/0_Interpret_Brasil.svg"
                        alt="Interpret Brasil Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 h-full">
                    <Link href="/a-interpret-brasil" className="text-sm font-bold text-gray-700 hover:text-secondary uppercase tracking-wide transition-colors h-full flex items-center">
                        {t("header.about")}
                    </Link>

                    {/* Dropdown Menu Trigger */}
                    <div className="group h-full flex items-center relative">
                        <Link href="/servicos" className="text-sm font-bold text-gray-700 hover:text-secondary uppercase tracking-wide transition-colors flex items-center gap-1 h-full py-6">
                            {t("header.services")}
                        </Link>

                        {/* Main Dropdown */}
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-secondary transition-all duration-200 transform z-50 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 text-left rounded-b-lg py-2">
                            {menuItems.map((item, index) => (
                                <div key={index} className="relative group/item">
                                    <Link
                                        href={item.href}
                                        className={`block px-6 py-3 text-sm font-bold transition-colors flex justify-between items-center ${(item as any).highlight
                                                ? "bg-primary text-white hover:bg-primary/90 mt-1 mb-1 mx-2 rounded-md shadow-sm border border-transparent hover:border-secondary/30"
                                                : "text-gray-600 hover:text-secondary hover:bg-gray-50"
                                            }`}
                                    >
                                        {(item as any).highlight ? (
                                            <span className="flex flex-col py-1">
                                                <span className="flex items-center gap-2">
                                                    {item.label}
                                                    <span className="bg-secondary text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-widest">Novo</span>
                                                </span>
                                                <span className="text-[10px] font-normal opacity-90 uppercase tracking-wider mt-0.5">{(item as any).description}</span>
                                            </span>
                                        ) : (
                                            item.label
                                        )}
                                        {item.hasSubmenu && <ArrowRight size={14} className="text-gray-400 group-hover/item:text-secondary" />}
                                    </Link>

                                    {/* Submenu for items that have it (like Interpretação) */}
                                    {item.hasSubmenu && item.subItems && (
                                        <div className="absolute top-0 left-full w-64 bg-white shadow-xl border-t-2 border-secondary ml-1 rounded-lg py-2 invisible opacity-0 -translate-x-2 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block px-6 py-3 text-sm font-medium text-gray-500 hover:text-secondary hover:bg-gray-50 transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link href="/noticias-artigos-traducao-interpretacao" className="text-sm font-bold text-gray-700 hover:text-secondary uppercase tracking-wide transition-colors h-full flex items-center">
                        {t("header.news")}
                    </Link>
                    <Link href="/contato" className="text-sm font-bold text-gray-700 hover:text-secondary uppercase tracking-wide transition-colors h-full flex items-center">
                        {t("header.contact")}
                    </Link>
                </nav>

                {/* Lang & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 border-r border-gray-200 pr-4 mr-1">
                        <button
                            onClick={() => setLang('pt')}
                            title="Português"
                            className={`hover:scale-110 transition-transform ${lang === 'pt' ? '' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}
                        >
                            <img src="https://flagcdn.com/w40/br.png" alt="Português" className="w-6 h-auto rounded-sm shadow-sm" />
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            title="English"
                            className={`hover:scale-110 transition-transform ${lang === 'en' ? '' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}
                        >
                            <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 h-auto rounded-sm shadow-sm" />
                        </button>
                        <button
                            onClick={() => setLang('es')}
                            title="Español"
                            className={`hover:scale-110 transition-transform ${lang === 'es' ? '' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}
                        >
                            <img src="https://flagcdn.com/w40/es.png" alt="Español" className="w-6 h-auto rounded-sm shadow-sm" />
                        </button>
                    </div>
                    <Link href="/contato" className="btn-primary py-2 px-6 text-xs uppercase shadow-none hover:shadow-lg">
                        {t("header.cta")}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            <Link href="/a-interpret-brasil" className="text-gray-700 font-bold uppercase" onClick={() => setIsOpen(false)}>{t("header.about")}</Link>
                            <Link href="/servicos" className="text-gray-700 font-bold uppercase" onClick={() => setIsOpen(false)}>{t("header.services")}</Link>
                            <Link href="/noticias-artigos-traducao-interpretacao" className="text-gray-700 font-bold uppercase" onClick={() => setIsOpen(false)}>{t("header.news")}</Link>
                            <Link href="/contato" className="text-gray-700 font-bold uppercase" onClick={() => setIsOpen(false)}>{t("header.contact")}</Link>
                            <div className="pt-4 border-t border-gray-100">
                                <Link href="/contato" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
                                    {t("header.cta")}
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
