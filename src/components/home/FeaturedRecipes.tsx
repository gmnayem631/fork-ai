import Link from "next/link";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RECIPES } from "@/data/recipes";

export default function FeaturedRecipes() {
  const featured = RECIPES.filter((r) => r.isFeatured).slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Hand Picked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Featured Recipes
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-orange-500 hover:text-orange-600 gap-1 hidden sm:flex"
            asChild
          >
            <Link href="/recipes">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="brand-gradient text-white border-0 text-xs">
                    {recipe.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                  <span className="text-xs font-semibold">{recipe.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-1 line-clamp-1">
                  {recipe.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4 flex-1">
                  {recipe.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{recipe.prepTime + recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                </div>

                <Button
                  size="lg"
                  className="w-full brand-gradient text-white border-0"
                  asChild
                >
                  <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
