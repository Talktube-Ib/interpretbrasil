"use client";

import Link from "next/link";
import { Headphones, Users, Mic2, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { motion } from "framer-motion";

const showcaseServices = [
    {
        id: "simultanea",
        title: "TRADUÇÃO SIMULTÂNEA",
        description: "Tradução simultânea de discursos para eventos em geral. Exemplo: palestras, apresentações, treinamentos etc.",
        icon: Headphones,
        href: "/servicos/traducao-simultanea",
        // Using the auditorium image from user
        image: "/imagens/servicos_interpretacao_traducao-simultanea/18_IMG_0404.jpg",
        imageAlt: "Auditório lotado com participantes usando fones de tradução simultânea"
    },
    {
        id: "consecutiva",
        title: "TRADUÇÃO CONSECUTIVA",
        description: "Tradução consecutiva ou de acompanhamento para auditorias, pesquisas de mercado, entrevistas, depoimentos em tribunais etc.",
        icon: Users,
        href: "/servicos/traducao-consecutiva",
        // Using the event/group image
        image: "/imagens/servicos_interpretacao_traducao-simultanea/16_WhatsApp_Image_2019-03-03_at_1.jpg",
        imageAlt: "Intérpretes trabalhando em evento corporativo"
    },
    {
        id: "equipamentos",
        title: "EQUIPAMENTOS",
        description: "Sonorização completa e portáteis para visitas a fábrica. Cabines com isolamento acústico e transmissores modernos.",
        icon: Mic2,
        href: "/servicos/equipamentos-para-traducao-simultanea",
        // Using the booth image
        image: "/imagens/servicos_interpretacao_traducao-simultanea/19_Cabine_Verde__2_.jpg",
        imageAlt: "Cabine de tradução simultânea moderna e sustentável"
    }
];

export default function ServiceShowcase() {
    return (
        <section className="bg-white">
            {showcaseServices.map((service, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Content Side Order Logic */}
                        <div className={`
                            flex flex-col justify-center items-center text-center p-12 md:p-24
                            ${isEven ? 'lg:order-1' : 'lg:order-2 bg-gray-50'}
                        `}>
                            <AnimateIn delay={0.1}>
                                <div className="mb-6 text-secondary transform scale-150">
                                    <service.icon size={48} strokeWidth={1.5} />
                                </div>
                            </AnimateIn>

                            <AnimateIn delay={0.2}>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-6 uppercase tracking-wide">
                                    {service.title}
                                </h3>
                            </AnimateIn>

                            <AnimateIn delay={0.3}>
                                <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                                    {service.description}
                                </p>
                            </AnimateIn>

                            <AnimateIn delay={0.4}>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 bg-secondary/80 hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    SAIBA MAIS
                                </Link>
                            </AnimateIn>
                        </div>

                        {/* Image Side Order Logic */}
                        <div className={`
                            relative h-[400px] lg:h-auto overflow-hidden group
                            ${isEven ? 'lg:order-2' : 'lg:order-1'}
                        `}>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-500 z-10" />

                            <img
                                src={service.image}
                                alt={service.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
