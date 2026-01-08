"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pt from "@/dictionaries/pt.json";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

type Dictionary = typeof pt;
type Lang = "pt" | "en" | "es";

const dictionaries: Record<Lang, Dictionary> = {
    pt,
    en,
    es,
};

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => any;
    dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("pt");

    useEffect(() => {
        // Load saved language from localStorage if available
        const saved = localStorage.getItem("interpret-lang") as Lang;
        if (saved && ["pt", "en", "es"].includes(saved)) {
            setLangState(saved);
        }
    }, []);

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        localStorage.setItem("interpret-lang", newLang);
    };

    const dictionary = dictionaries[lang];

    // Helper to get nested values, e.g. "header.about"
    const t = (key: string) => {
        const keys = key.split(".");
        let value: any = dictionary;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k as keyof typeof value];
            } else {
                return key; // Return key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, dictionary }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
