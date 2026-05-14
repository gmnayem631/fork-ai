"use client";

import { useState } from "react";
import { RECIPES } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function SavedRecipesPage() {
  const [saved, setSaved] = useState(RECIPES.slice(0, 5));

  const remove = (id: string) => {
    setSaved((prev) => prev.filter((r) => r.id !== id));
    toast.success("Recipe removed from saved");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Saved Recipes
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        {saved.length} recipes saved
      </p>

      {saved.length === 0 ? (
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-16 border border-zinc-100 dark:border-zinc-700 text-center">
          <p className="text-zinc-400 mb-4">No saved recipes yet</p>
          <Button className="brand-gradient text-white border-0" asChild>
            <Link href="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saved.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
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
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-900/90 rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                  <span className="text-xs font-semibold">{recipe.rating}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1 line-clamp-1">
                  {recipe.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4 flex-1">
                  {recipe.description}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {recipe.prepTime + recipe.cookTime} min
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {recipe.servings} servings
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 brand-gradient text-white border-0"
                    asChild
                  >
                    <Link href={`/recipes/${recipe.id}`}>View</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-500 border-red-200 hover:bg-red-50"
                    onClick={() => remove(recipe.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
