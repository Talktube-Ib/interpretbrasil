
export const WP_API_URL = "https://interpretbrasil.com/wp-json/wp/v2";

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        "wp:featuredmedia"?: [
            {
                source_url: string;
                alt_text: string;
                media_details?: {
                    sizes?: {
                        medium?: { source_url: string };
                        large?: { source_url: string };
                    }
                }
            }
        ];
        author?: [
            {
                name: string;
                description?: string;
                avatar_urls?: { [key: string]: string };
            }
        ];
        "wp:term"?: [
            Array<{
                id: number;
                name: string;
                slug: string;
                taxonomy: string;
            }>
        ];
    };
}

export async function getPosts(page = 1, limit = 9): Promise<{ posts: WPPost[]; totalPages: number }> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${limit}&page=${page}`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
            return { posts: [], totalPages: 0 };
        }

        const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
        const posts = await res.json();

        return { posts, totalPages };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { posts: [], totalPages: 0 };
    }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            console.error(`Failed to fetch post by slug ${slug}: ${res.status}`);
            return null;
        }
        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}
