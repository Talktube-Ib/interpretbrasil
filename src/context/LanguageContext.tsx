"use client";

import React, { createContext, useContext } from "react";

// Helper type for the dictionary structure. 
// We can infer it from a default object or define it loosely if needed.
// For now, we assume it's a flexible record or we could import one json just for typing if we want strong typing.
// But simplest is 'any' or 'Record<string, any>' for the dictionary until we have a shared type.
type Dictionary = any;
type Lang = "pt" | "en" | "es" | "zh";

interface LanguageContextType {
    lang: Lang;
    t: (key: string) => any;
    dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
    lang: Lang;
    dictionary: Dictionary;
}

export function LanguageProvider({ children, lang, dictionary }: LanguageProviderProps) {

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
        <LanguageContext.Provider value={{ lang, t, dictionary }}>
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

