"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    delay?: number;
    highlight?: boolean;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
    delay = 0,
    highlight = false,
}: ServiceCardProps) {
    return (
        <AnimateIn delay={delay} className="group h-full">
            <Link
                href={href}
                className={`block h-full p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden ${highlight
                        ? "bg-primary border border-transparent hover:border-secondary scale-[1.02]"
                        : "bg-white border border-gray-100 hover:border-secondary/20"
                    }`}
            >
                <div className={`absolute top-0 right-0 p-4 transition-opacity ${highlight ? "opacity-10 text-white" : "opacity-5 group-hover:opacity-10"}`}>
                    <Icon size={120} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${highlight
                            ? "bg-secondary text-white group-hover:bg-white group-hover:text-primary shadow-lg"
                            : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-secondary"
                        }`}>
                        <Icon size={32} />
                    </div>

                    <h3 className={`text-xl font-bold font-heading mb-3 transition-colors ${highlight ? "text-white" : "text-primary group-hover:text-secondary"
                        }`}>
                        {title}
                    </h3>

                    <p className={`mb-6 flex-grow leading-relaxed ${highlight ? "text-gray-200" : "text-gray-600"
                        }`}>
                        {description}
                    </p>

                    <div className={`flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-2 ${highlight ? "text-secondary" : "text-primary"
                        }`}>
                        Saiba Mais <ArrowRight size={16} className={highlight ? "text-white" : "text-secondary"} />
                    </div>
                </div>
            </Link>
        </AnimateIn>
    );
}
