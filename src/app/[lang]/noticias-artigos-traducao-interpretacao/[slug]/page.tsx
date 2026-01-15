import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { getPostBySlug, getPosts } from "@/lib/wordpress";

export async function generateStaticParams() {
    const { posts } = await getPosts(1, 12);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) {
        return {
            title: "Artigo não encontrado",
        };
    }
    // Strip HTML from excerpt for metadata if needed, but basic approach:
    const description = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');

    return {
        title: post.title.rendered,
        description: description,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Extract detailed info
    const authorName = post._embedded?.author?.[0]?.name || "Interpret Brasil";
    // Categories
    const categories = post._embedded?.["wp:term"]?.[0];
    const categoryName = categories?.[0]?.name || "Artigo";

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 bg-background">
                <AnimateIn>
                    <div className="container max-w-4xl">
                        <Link href="/noticias-artigos-traducao-interpretacao" className="text-sm font-semibold text-gray-500 hover:text-primary flex items-center gap-2 transition-colors mb-8">
                            <ArrowLeft size={16} /> Voltar para Notícias
                        </Link>

                        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                            {/* Header */}
                            <div className="mb-8 border-b border-gray-100 pb-8">
                                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    {categoryName}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6 leading-tight"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-secondary" />
                                        <span>Por {authorName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-secondary" />
                                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image */}
                            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                <div className="mb-10 rounded-xl overflow-hidden shadow-md aspect-video relative">
                                    <img
                                        src={post._embedded["wp:featuredmedia"][0].source_url}
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary transition-colors"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                            />
                        </div>
                    </div>
                </AnimateIn>
            </main>

            <Footer />
        </div>
    );
}


