import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: "AI Is Changing Home Cooking Forever",
  excerpt:
    "Discover how artificial intelligence is helping people create personalized meals and healthier lifestyles.",
  author: "ForkAI Team",
  date: "May 14, 2026",
  category: "AI Cooking",
  image:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200",
}));

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              ForkAI Blog
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400">
              Recipes, AI cooking tips, and meal planning guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden"
              >
                <div className="relative h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600 mb-4">
                    {post.category}
                  </span>

                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {post.title}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
