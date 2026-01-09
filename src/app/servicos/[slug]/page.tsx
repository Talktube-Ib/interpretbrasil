import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <>
            <Header />
            <ServiceDetailContent slug={slug} />
            <Footer />
        </>
    );
}
