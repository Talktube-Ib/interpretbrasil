import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";

import { servicesData } from "@/lib/servicesData";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: "Serviço não encontrado" };

    return {
        title: `${service.title} - Interpret Brasil`,
        description: service.subtitle,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <AnimateIn direction="left" className="mb-8">
                        <Link href="/servicos" className="text-sm font-semibold text-gray-500 hover:text-primary flex items-center gap-2 transition-colors">
                            <ArrowLeft size={16} /> Voltar para Serviços
                        </Link>
                    </AnimateIn>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Content */}
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">Nossos Serviços</span>
                                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">{service.title}</h1>
                                <p className="text-xl text-gray-500 mb-8 font-light">{service.subtitle}</p>
                            </AnimateIn>

                            <AnimateIn delay={0.1} className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                                {service.description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </AnimateIn>

                            <AnimateIn delay={0.2}>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">Principais Características</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                                            <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimateIn>

                            {service.images && (
                                <AnimateIn delay={0.3} className="mt-12">
                                    <h3 className="text-2xl font-bold font-heading text-primary mb-6">Galeria de Fotos</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        {service.images.map((img, i) => (
                                            <div key={i} className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                                                <img
                                                    src={img}
                                                    alt={`Equipamento Interpret Brasil ${i + 1}`}
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
                                    <h3 className="text-2xl font-bold font-heading mb-4">Precisa deste serviço?</h3>
                                    <p className="text-gray-300 mb-6 text-sm">
                                        Solicite um orçamento agora mesmo. Nossa equipe responderá em breve.
                                    </p>
                                    <Link href="#contact-anchor" className="btn-primary w-full justify-center bg-white text-primary hover:bg-secondary hover:text-white border-none py-3">
                                        Solicitar Cotação
                                    </Link>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                                    <h4 className="font-bold text-primary mb-4">Outros Serviços</h4>
                                    <ul className="space-y-3">
                                        {Object.keys(servicesData).map((s) => (
                                            s !== slug && (
                                                <li key={s}>
                                                    <Link href={`/servicos/${s}`} className="text-sm text-gray-600 hover:text-secondary transition-colors block py-1 border-b border-gray-50 last:border-0">
                                                        {servicesData[s].title}
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
                                <h2 className="text-3xl font-bold font-heading text-primary mb-4">Solicite um Orçamento</h2>
                                <p className="text-gray-600">Preencha o formulário abaixo e entraremos em contato.</p>
                            </div>
                            <div className="max-w-2xl mx-auto">
                                <ContactForm />
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
