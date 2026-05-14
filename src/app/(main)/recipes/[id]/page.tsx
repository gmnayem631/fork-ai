import { RECIPES } from "@/data/recipes";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame, Star, ChefHat, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) notFound();

  const related = RECIPES.filter(
    (r) => r.category === recipe.category && r.id !== recipe.id,
  ).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 text-sm mb-6 mt-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Recipes
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left — main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero image */}
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 mb-2">
                    <Badge className="brand-gradient text-white border-0">
                      {recipe.category}
                    </Badge>
                    <Badge className="brand-gradient text-white border-0">
                      {recipe.cuisine}
                    </Badge>
                  </div>
                  <h1 className="text-2xl font-bold text-white">
                    {recipe.title}
                  </h1>
                </div>
              </div>

              {/* Meta */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      icon: Clock,
                      label: "Prep Time",
                      value: `${recipe.prepTime} min`,
                    },
                    {
                      icon: Clock,
                      label: "Cook Time",
                      value: `${recipe.cookTime} min`,
                    },
                    { icon: Users, label: "Servings", value: recipe.servings },
                    {
                      icon: Flame,
                      label: "Calories",
                      value: `${recipe.calories} kcal`,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                      <p className="text-xs text-zinc-400">{label}</p>
                      <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <h2 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">
                  Overview
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {recipe.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-orange-500 border-orange-200 capitalize"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <h2 className="font-bold text-zinc-900 dark:text-white text-lg mb-4">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full brand-gradient text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-6">
              {/* Author */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 brand-gradient rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                      {recipe.authorName}
                    </p>
                    <p className="text-zinc-400 text-xs">Recipe Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(recipe.rating) ? "text-orange-400 fill-orange-400" : "text-zinc-200"}`}
                    />
                  ))}
                  <span className="text-sm text-zinc-500 ml-1">
                    {recipe.rating} ({recipe.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <h2 className="font-bold text-zinc-900 dark:text-white text-lg mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ing, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Difficulty */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
                <h2 className="font-bold text-zinc-900 dark:text-white text-lg mb-3">
                  Difficulty
                </h2>
                <Badge className="brand-gradient text-white border-0 text-sm px-3 py-1">
                  {recipe.difficulty}
                </Badge>
              </div>

              {/* CTA */}
              <Button
                className="w-full brand-gradient text-white border-0"
                asChild
              >
                <Link href="/dashboard/user/ai-kitchen">Try AI Kitchen ✨</Link>
              </Button>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Related Recipes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((r) => (
                  <div
                    key={r.id}
                    className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-zinc-900 dark:text-white text-sm line-clamp-1 mb-2">
                        {r.title}
                      </h3>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-orange-500 border-orange-200 hover:bg-orange-50"
                        asChild
                      >
                        <Link href={`/recipes/${r.id}`}>View Recipe</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
