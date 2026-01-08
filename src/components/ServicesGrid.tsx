"use client";

import { Mic2, Globe2, Monitor, ScrollText, Video } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:col-span-3">
                <ServiceCard
                    title="TalkTube"
                    description="Sua reunião multilíngue com interpretação simultânea humana. Plataforma 100% web, canais de áudio reais e vídeo HD."
                    icon={Video}
                    href="/servicos/talktube"
                    delay={0}
                    highlight={true}
                />
            </div>
            <ServiceCard
                title="Tradução Simultânea"
                description="Ideal para congressos e eventos. A tradução ocorre em tempo real, sem pausas, utilizando equipamentos especializados."
                icon={Mic2}
                href="/servicos/traducao-simultanea"
                delay={0.1}
            />
            <ServiceCard
                title="Interpretação Remota"
                description="Soluções para webinars e reuniões online (Zoom, Teams). Conecte participantes de todo o mundo com qualidade."
                icon={Monitor}
                href="/servicos/interpretacao-remota"
                delay={0.2}
            />
            <ServiceCard
                title="Tradução Juramentada"
                description="Traduções com validade legal para documentos oficiais, contratos e processos internacionais."
                icon={ScrollText}
                href="/servicos/traducao-juramentada"
                delay={0.3}
            />
            <ServiceCard
                title="Tradução Consecutiva"
                description="Perfeita para pequenas reuniões. O orador fala e, na pausa, o intérprete traduz."
                icon={Globe2}
                href="/servicos/traducao-consecutiva"
                delay={0.4}
            />
            <ServiceCard
                title="Equipamentos"
                description="Locação de cabines, receptores, fones e transmissores de última geração para seu evento."
                icon={Mic2}
                href="/servicos/equipamentos-para-traducao-simultanea"
                delay={0.5}
            />
        </div>
    );
}
