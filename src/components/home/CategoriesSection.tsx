import Link from "next/link";

const CATEGORIES = [
  {
    name: "Breakfast",
    emoji: "🍳",
    count: 42,
    color: "from-yellow-400 to-orange-400",
  },
  {
    name: "Lunch",
    emoji: "🥗",
    count: 38,
    color: "from-green-400 to-teal-400",
  },
  {
    name: "Dinner",
    emoji: "🍽️",
    count: 64,
    color: "from-orange-400 to-red-400",
  },
  {
    name: "Dessert",
    emoji: "🍰",
    count: 29,
    color: "from-pink-400 to-rose-400",
  },
  {
    name: "Snack",
    emoji: "🥨",
    count: 31,
    color: "from-purple-400 to-indigo-400",
  },
  {
    name: "Drinks",
    emoji: "🥤",
    count: 18,
    color: "from-blue-400 to-cyan-400",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Browse By Type
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Explore Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/recipes?category=${cat.name}`}
              className="group flex flex-col items-center shadow-lg gap-3 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-800"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${cat.color} flex items-center justify-center text-3xl shadow-md`}
              >
                {cat.emoji}
              </div>
              <div className="text-center">
                <p className="font-bold text-zinc-900 dark:text-white text-base">
                  {cat.name}
                </p>
                <p className="text-zinc-400 text-sm">{cat.count} recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
