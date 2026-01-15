import { getPosts } from "@/lib/wordpress";
import HomePageContent from "@/components/HomePageContent";

export const metadata = {
  title: "Interpret Brasil - Tradução Simultânea",
  description: "Líderes em tradução simultânea e equipamentos de interpretação.",
};

export default async function Home() {
  const { posts } = await getPosts(1, 3);

  return <HomePageContent latestPosts={posts} />;
}
