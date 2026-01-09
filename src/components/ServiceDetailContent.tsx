"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/lib/servicesData"; // Import solely for keys validation or fallback if needed, but we rely on dictionary

interface ServiceDetailContentProps {
    slug: string;
}

export default function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
    const { t } = useLanguage();

    // We can assume slug is valid because page.tsx checked it against servicesData keys.
    // However, if dictionary doesn't have it, we might crash if we try to access properties of undefined.
    // The dictionary structure matches servicesData structure.

    // Safety check:
    const serviceData = t(`services_data.${slug}`);

    // If serviceData returns the key string (not found) or is undefined, show fallback or error?
    // t() implementation returns key if not found.
    const isFound = serviceData && typeof serviceData === 'object';

    if (!isFound) {
        return (
            <div className="min-h-screen pt-32 container">
                Service content not found for {slug} in current language.
            </div>
        );
    }

    const title = serviceData.title;
    const subtitle = serviceData.subtitle;
    const description = serviceData.description as string[]; // Cast to array
    const features = serviceData.features as string[];
    // images are not in dictionary. They are in servicesData.ts file because they are assets (urls).
    // We should pull images from servicesData.ts based on slug.
    // import { servicesData } from "@/lib/servicesData"; used above.

    const staticServiceData = servicesData[slug];
    const images = staticServiceData?.images;

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <AnimateIn direction="left" className="mb-8">
                        <Link href="/servicos" className="text-sm font-semibold text-gray-500 hover:text-primary flex items-center gap-2 transition-colors">
                            <ArrowLeft size={16} /> {t("header.services")}
                        </Link>
                    </AnimateIn>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Content */}
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">{t("header.services")}</span>
                                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">{title}</h1>
                                <p className="text-xl text-gray-500 mb-8 font-light">{subtitle}</p>
                            </AnimateIn>

                            <AnimateIn delay={0.1} className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                                {Array.isArray(description) && description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </AnimateIn>

                            <AnimateIn delay={0.2}>
                                {/* "Principais Características" hardcoded in previous file? Need to translate. 
                                    I don't have a key for "Main Features". I will use "Diferenciais" (why_choose_us.subtitle)? 
                                    Or just add a generic "features" key?
                                    I'll check dictionary for "features" or similar.
                                    "why_choose_us.subtitle": "Diferenciais".
                                    "why_choose_us.expertise_title": "Expertise Global".
                                    I will add "features_title" to dictionary or hardcode generic if I must (but better to add).
                                    I will add "features_title": "Principais Características" / "Main Features" / "Características Principales" to `services_data` or `common`?
                                    I added `contact_page`. Maybe I can add `common`?
                                    Or I can just stick it in `services_data` root? No, `services_data` is a map of services.
                                    I'll stick it in `header` or create `common`.
                                    Let's put it in `why_choose_us`? No.
                                    Let's put `service_features_title` in header? No.
                                    I will add it to `header` as `features`? No.
                                    I'll just add `common: { features: "..." }` later.
                                    For now I will check if I can reuse something.
                                    `why_choose_us.subtitle` is "Diferenciais". "Key Features" ~ "Differentials". Close enough?
                                    Maybe. But "Main Features" is better.
                                    I'll use "Diferenciais" for now to avoid re-editing dictionaries 3 times if possible, OR I update dictionaries again.
                                    Updating dictionaries is safer.
                                    I will update dictionaries again with `common` section.
                                */}
                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">{t("common.features") || "Features"}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Array.isArray(features) && features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                                            <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimateIn>

                            {images && (
                                <AnimateIn delay={0.3} className="mt-12">
                                    {/* "Galeria de Fotos" -> "Photo Gallery" */}
                                    <h3 className="text-2xl font-bold font-heading text-primary mb-6">{t("common.gallery") || "Gallery"}</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        {images.map((img, i) => (
                                            <div key={i} className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                                <img
                                                    src={img}
                                                    alt={`${title} image ${i + 1}`}
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
                                    {/* "Precisa deste serviço?" -> "Need this service?" */}
                                    <h3 className="text-2xl font-bold font-heading mb-4">{t("common.need_service") || "Need this service?"}</h3>
                                    <p className="text-gray-300 mb-6 text-sm">
                                        {t("common.request_quote_text") || "Request a quote right now."}
                                    </p>
                                    <Link href="#contact-anchor" className="btn-primary w-full justify-center bg-white text-primary hover:bg-secondary hover:text-white border-none py-3">
                                        {t("header.cta")}
                                    </Link>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                                    {/* "Outros Serviços" -> "Other Services" */}
                                    <h4 className="font-bold text-primary mb-4">{t("common.other_services") || "Other Services"}</h4>
                                    <ul className="space-y-3">
                                        {// We iterate keys of dictionaries.services_data OR servicesData (static).
                                            // Dictionary keys match.
                                            Object.keys(staticServiceData ? servicesData : {}).map((s) => (
                                                s !== slug && (
                                                    <li key={s}>
                                                        <Link href={`/servicos/${s}`} className="text-sm text-gray-600 hover:text-secondary transition-colors block py-1 border-b border-gray-50 last:border-0">
                                                            {t(`services_data.${s}.title`)}
                                                        </Link>
                                                    </li>
                                                )
                                            ))}
                                    </ul>
                                </div>
                            </AnimateIn>
                        </div>
                    </div>

                    <div id="contact-anchor" className="mt-24 pt-16 border-t border-gray-200">
                        <AnimateIn>
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl font-bold font-heading text-primary mb-4">{t("contact_page.title")}</h2>
                                <p className="text-gray-600">{t("contact_page.description")}</p>
                            </div>
                            <div className="max-w-2xl mx-auto">
                                <ContactForm />
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </main>
            <div className="hidden">
                {/* Footer is inside RootLayout or separate? 
                     Previous page had <Footer />.
                     AboutPageContent had <Footer />.
                 */}
            </div>
            {/* Note: In previous page.tsx, <Footer /> was rendered at bottom. 
                 In this component we should probably not render Footer if it's already in Layout?
                 Let's check layout.
                 Usually Layout has Footer.
                 But previous `ServicePage` imported `Footer`.
                 `AboutPageContent` imported `Footer`.
                 `ContactPageContent` imported `Footer`.
                 So I should assume I need to render Footer here or let page.tsx render it?
                 Since this is "Content", it might be cleaner to rendering it here to match others.
                 
                 Import Footer!
              */}
        </div>
    );
}

// I should rewrite this ensuring Footer is imported and used.
// And missing keys: "common.features", "common.gallery", "common.need_service", "common.request_quote_text", "common.other_services".
