"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Using a Masonry-like grid or a structured grid
const galleryImages = [
    {
        src: "/imagens/galeria/sobre/imagem-obama-lynnea-e-Douglas-ii.jpg",
        alt: "Sócios da Interpret Brasil com Barack Obama",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        src: "/imagens/galeria/sobre/With-Eduardo-Suplicy.jpg",
        alt: "Atuação com Eduardo Suplicy",
        span: "col-span-1"
    },
    {
        src: "/imagens/galeria/sobre/palestrando.jpg",
        alt: "Palestra em Evento Internacional",
        span: "col-span-1"
    },
    {
        src: "/imagens/galeria/sobre/With-Valderrama.jpg",
        alt: "Com Carlos Valderrama",
        span: "col-span-1 md:col-span-2"
    },
    {
        src: "/imagens/galeria/sobre/interpretes.jpg",
        alt: "Nossa Equipe de Intérpretes",
        span: "col-span-1"
    },
    {
        src: "/imagens/galeria/sobre/Central-Interpretes-traducao-simultanea.jpeg",
        alt: "Central de Intérpretes",
        span: "col-span-1"
    },
    {
        src: "/imagens/galeria/sobre/With-Marcelo-Freixo-em-05-12-12.jpg",
        alt: "Evento com Marcelo Freixo",
        span: "col-span-1"
    },
    {
        src: "/imagens/galeria/sobre/interprete-douglas-simoes-reportagem-portal-gcn.jpg",
        alt: "Destaque na Imprensa",
        span: "col-span-1"
    }
];

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-12">
            <AnimateIn className="mb-10 text-center">
                <h2 className="text-3xl font-bold font-heading text-primary mb-4">Nossa Atuação em Imagens</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Momentos marcantes de nossa trajetória em eventos corporativos, governamentais e esportivos ao redor do mundo.
                </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {galleryImages.map((img, index) => (
                    <AnimateIn
                        key={index}
                        delay={index * 0.1}
                        className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${img.span}`}
                    >
                        <div onClick={() => setSelectedImage(img.src)} className="w-full h-full">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium text-sm">{img.alt}</span>
                            </div>
                        </div>
                    </AnimateIn>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={selectedImage}
                            alt="Galeria Expandida"
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click? Actually better to allow close on image click or drag, but simple usage is click anywhere else.
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
