import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Home Cook",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    rating: 5,
    comment:
      "ForkAI completely changed how I cook. I just type whatever's left in my fridge and it gives me amazing recipes. My family thinks I've become a chef overnight!",
  },
  {
    name: "James Okonkwo",
    role: "Fitness Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
    rating: 5,
    comment:
      "The AI meal planner is incredible. I set my macros and dietary goals, and it builds me a full week of balanced meals. Saves me hours of planning every Sunday.",
  },
  {
    name: "Priya Sharma",
    role: "Busy Parent",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    rating: 5,
    comment:
      "With two kids and a full-time job, meal planning was a nightmare. ForkAI makes it effortless. The recipes are easy to follow and absolutely delicious.",
  },
  {
    name: "Carlos Rivera",
    role: "Food Blogger",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
    rating: 5,
    comment:
      "As someone who writes about food, I'm always looking for inspiration. ForkAI's AI content generator helps me write recipe descriptions 10x faster. Absolute game changer.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Real Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            What Our Users Say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed flex-1 mb-6">
                &quot;{t.comment}&quot;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-zinc-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
