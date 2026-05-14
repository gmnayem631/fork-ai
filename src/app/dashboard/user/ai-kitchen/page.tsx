"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Users, ChefHat } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  ingredients: z.string().min(3, "Enter at least one ingredient"),
});
type FormData = z.infer<typeof schema>;

interface GeneratedRecipe {
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  tips: string;
}

export default function AIKitchenPage() {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setRecipe(null);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "what-can-i-cook",
          payload: { ingredients: data.ingredients },
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setRecipe(json.data);
      toast.success("Recipe generated!");
    } catch {
      toast.error("Failed to generate recipe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            AI Kitchen
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Tell me what&apos;s in your fridge — I&apos;ll make a recipe
          </p>
        </div>
      </div>

      {/* Input form */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 mt-6 mb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>What ingredients do you have?</Label>
            <Input
              {...register("ingredients")}
              placeholder="e.g. chicken, garlic, tomatoes, pasta, olive oil"
              className="mt-1"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-xs mt-1">
                {errors.ingredients.message}
              </p>
            )}
            <p className="text-zinc-400 text-xs mt-1">
              Separate ingredients with commas
            </p>
          </div>
          <Button
            type="submit"
            className="brand-gradient text-white border-0 gap-2"
            disabled={loading}
          >
            <Sparkles className="w-4 h-4" />
            {loading ? "Generating recipe..." : "Generate Recipe"}
          </Button>
        </form>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-10 border border-zinc-100 dark:border-zinc-700 text-center">
          <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 font-medium">
            AI is cooking up your recipe...
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            This usually takes 5–10 seconds
          </p>
        </div>
      )}

      {/* Result */}
      {recipe && (
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                {recipe.title}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                {recipe.description}
              </p>
            </div>
            <Badge className="brand-gradient text-white border-0 shrink-0">
              {recipe.difficulty}
            </Badge>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              Prep: {recipe.prepTime} min
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              Cook: {recipe.cookTime} min
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-orange-400" />
              {recipe.servings} servings
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
              Ingredients
            </h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="text-sm text-zinc-600 dark:text-zinc-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
              Instructions
            </h3>
            <ol className="space-y-2">
              {recipe.instructions.map((step, i) => (
                <li
                  key={i}
                  className="text-sm text-zinc-600 dark:text-zinc-300 flex gap-3"
                >
                  <span className="w-5 h-5 rounded-full brand-gradient text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {recipe.tips && (
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-100 dark:border-orange-800">
              <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
                Chef&apos;s Tip
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                {recipe.tips}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
