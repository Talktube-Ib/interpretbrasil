import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
    title: "Nossos Serviços",
    description: "Conheça nossas soluções em tradução simultânea, equipamentos e interpretação remota.",
};

export default function ServicesIndexPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">O que fazemos</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
                            Soluções completas para eventos multilíngues
                        </h1>
                        <p className="text-lg text-gray-600">
                            Da infraestrutura técnica aos melhores intérpretes do mercado.
                        </p>
                    </AnimateIn>

                    <div className="mt-8">
                        <ServicesGrid />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
