"use client";

import { Mic2, Globe2, Monitor, ScrollText, Video } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesGrid() {
    const { t } = useLanguage();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:col-span-3">
                <ServiceCard
                    title={t("services_data.talktube.title")}
                    description={t("services_data.talktube.subtitle")}
                    icon={Video}
                    href="/servicos/talktube"
                    delay={0}
                    highlight={true}
                />
            </div>
            <ServiceCard
                title={t("services_data.traducao-simultanea.title")}
                description={t("services_data.traducao-simultanea.subtitle")}
                icon={Mic2}
                href="/servicos/traducao-simultanea"
                delay={0.1}
            />
            <ServiceCard
                title={t("services_data.interpretacao-remota.title")}
                description={t("services_data.interpretacao-remota.subtitle")}
                icon={Monitor}
                href="/servicos/interpretacao-remota"
                delay={0.2}
            />
            <ServiceCard
                title={t("services_data.traducao-juramentada.title")}
                description={t("services_data.traducao-juramentada.subtitle")}
                icon={ScrollText}
                href="/servicos/traducao-juramentada"
                delay={0.3}
            />
            <ServiceCard
                title={t("services_data.traducao-consecutiva.title")}
                description={t("services_data.traducao-consecutiva.subtitle")}
                icon={Globe2}
                href="/servicos/traducao-consecutiva"
                delay={0.4}
            />
            <ServiceCard
                title={t("services_data.equipamentos-para-traducao-simultanea.title")}
                description={t("services_data.equipamentos-para-traducao-simultanea.subtitle")}
                icon={Mic2}
                href="/servicos/equipamentos-para-traducao-simultanea"
                delay={0.5}
            />
        </div>
    );
}

