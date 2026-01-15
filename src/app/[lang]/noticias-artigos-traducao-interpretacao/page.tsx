import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { getPosts, WPPost } from "@/lib/wordpress";

export const metadata = {
    title: "Notícias e Artigos",
    description: "Fique por dentro das novidades sobre tradução simultânea e interpretação.",
};

export default async function BlogPage() {
    const { posts } = await getPosts(1, 12);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <div className="container">
                    <AnimateIn className="mb-12 text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
                            Notícias e Artigos
                        </h1>
                        <p className="text-lg text-gray-600">
                            Conteúdo exclusivo sobre o mundo da tradução, eventos globais e tecnologia linguística.
                        </p>
                    </AnimateIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => {
                            // Extract featured image
                            const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
                            const imageUrl = featuredMedia?.source_url;

                            // Extract category (first one)
                            const categories = post._embedded?.["wp:term"]?.[0];
                            const categoryName = categories?.[0]?.name || "Artigo";

                            return (
                                <AnimateIn key={post.id} delay={index * 0.05}>
                                    <Link href={`/noticias-artigos-traducao-interpretacao/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                                        <div className="aspect-video bg-gray-200 relative overflow-hidden">
                                            {imageUrl ? (
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                    style={{ backgroundImage: `url(${imageUrl})` }}
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors flex items-center justify-center text-primary/10">
                                                    <span className="font-heading font-bold text-4xl">IB</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-secondary font-bold uppercase tracking-wider">{categoryName}</span>
                                                <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                                            </div>
                                            <h2 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <div className="text-sm text-gray-500 line-clamp-3 mb-6"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />
                                            <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                                Ler Artigo Completo <ArrowRight size={16} className="text-secondary" />
                                            </span>
                                        </div>
                                    </Link>
                                </AnimateIn>
                            );
                        })}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p>Carregando notícias ou nenhum post encontrado.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

