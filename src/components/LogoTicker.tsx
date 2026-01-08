"use client";

import { motion } from "framer-motion";

// List of logos found in the directory
const logos = [
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/6_rede-globo.jpg", alt: "Rede Globo" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/7_petrobras.png", alt: "Petrobras" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/9_bbc.png", alt: "BBC" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/10_Philips.png", alt: "Philips" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/11_fiocruz.png", alt: "Fiocruz" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/12_sinopec.png", alt: "Sinopec" },
    { src: "/imagens/servicos_interpretacao_traducao-simultanea/8_fresenius.png", alt: "Fresenius" },
];

export default function LogoTicker() {
    return (
        <div className="w-full overflow-hidden bg-white/90 border-t border-gray-100 py-6">
            <div className="container mx-auto relative">
                <div className="flex">
                    <motion.div
                        className="flex gap-16 items-center flex-nowrap"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30 // Slow continuous scroll
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* Duplicate the logo list twice to ensure seamless looping */}
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
