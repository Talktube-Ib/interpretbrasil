"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/imagens/galeria/eventos/traducao-simultanea-cop-30-belem.jpg",
    "/imagens/galeria/eventos/traducao-simultanea-forum-ministerial-harvard-interpret-brasil-3-1.jpg",
    "/imagens/galeria/eventos/traducao-simultanea-salvador-ba-iacp-1.jpeg",
    "/imagens/home/7_.jpg" // Keeping the original as backup/variety
];

export default function HeroBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${images[index]}')` }}
                />
            </AnimatePresence>

            {/* Gradient Overlay for Text Readability - stronger on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent/50 z-10" />
            <div className="absolute inset-0 bg-white/20 z-10 mix-blend-overlay" />
        </div>
    );
}
