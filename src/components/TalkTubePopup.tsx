"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TalkTubePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup was closed recently? 
        // User asked "when accessing the initial part". Usually implies every session or once.
        // I'll show it after a small delay.
        // Ideally should save to sessionStorage to avoid spamming on reload? Use sessionStorage.
        const hasSeen = sessionStorage.getItem("seen_talktube_popup");
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000); // 2 seconds delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem("seen_talktube_popup", "true");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col">
                            {/* Header / Image Area */}
                            <div className="bg-primary p-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-30"></div>
                                </div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md shadow-inner border border-white/20">
                                        <Video className="text-secondary" size={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold font-heading text-white mb-2">Conheça o TalkTube</h2>
                                    <p className="text-white/80 text-sm">A revolução das reuniões multilíngues</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                    Sua reunião com <strong>interpretação simultânea humana</strong> em qualquer idioma, direto no navegador. Sem downloads, sem complicações.
                                </p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                            <span className="text-secondary font-bold">✓</span>
                                        </div>
                                        Vídeo HD e Áudio Cristalino
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                            <span className="text-secondary font-bold">✓</span>
                                        </div>
                                        Canais de áudio para cada idioma
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                            <span className="text-secondary font-bold">✓</span>
                                        </div>
                                        Gravação automática separada
                                    </div>
                                </div>

                                <Link
                                    href="/servicos/talktube"
                                    onClick={handleClose}
                                    className="btn-primary w-full justify-center py-4 text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                                >
                                    Conhecer a Plataforma <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
