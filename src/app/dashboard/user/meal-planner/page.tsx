"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CalendarDays } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  diet: z.string().min(1, "Please select a diet"),
  goal: z.string().min(1, "Please select a goal"),
  allergies: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface MealDay {
  day: string;
  breakfast: { name: string; calories: number };
  lunch: { name: string; calories: number };
  dinner: { name: string; calories: number };
}

const DIETS = [
  "No Restriction",
  "Vegetarian",
  "Vegan",
  "Keto",
  "Paleo",
  "Gluten-Free",
];
const GOALS = [
  "Weight Loss",
  "Muscle Gain",
  "Maintain Weight",
  "Eat Healthier",
  "High Energy",
];
const MEAL_COLORS = {
  breakfast: "from-yellow-400 to-orange-400",
  lunch: "from-green-400 to-teal-400",
  dinner: "from-orange-400 to-red-400",
};

export default function MealPlannerPage() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<MealDay[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { diet: "", goal: "" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setPlan(null);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "meal-planner", payload: data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setPlan(json.data.week);
      toast.success("Meal plan generated!");
    } catch {
      toast.error("Failed to generate meal plan. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalCalories = (day: MealDay) =>
    day.breakfast.calories + day.lunch.calories + day.dinner.calories;

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            AI Meal Planner
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Generate a personalized weekly meal plan instantly
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 mb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Dietary Preference</Label>
              <select
                {...register("diet")}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select diet...</option>
                {DIETS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.diet && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.diet.message}
                </p>
              )}
            </div>
            <div>
              <Label>Health Goal</Label>
              <select
                {...register("goal")}
                className="w-full mt-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select goal...</option>
                {GOALS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              {errors.goal && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.goal.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Label>
              Allergies / Avoid{" "}
              <span className="text-zinc-400 font-normal">(optional)</span>
            </Label>
            <input
              {...register("allergies")}
              placeholder="e.g. nuts, dairy, shellfish"
              className="w-full mt-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <Button
            type="submit"
            className="brand-gradient text-white border-0 gap-2"
            disabled={loading}
          >
            <Sparkles className="w-4 h-4" />
            {loading ? "Generating plan..." : "Generate Weekly Plan"}
          </Button>
        </form>
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-10 border border-zinc-100 dark:border-zinc-700 text-center">
          <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <CalendarDays className="w-6 h-6 text-white" />
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 font-medium">
            AI is planning your week...
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            This usually takes 5-10 seconds
          </p>
        </div>
      )}

      {/* Result */}
      {plan && (
        <div className="space-y-4">
          {plan.map((day) => (
            <div
              key={day.day}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                  {day.day}
                </h3>
                <Badge
                  variant="outline"
                  className="text-orange-500 border-orange-200"
                >
                  {totalCalories(day)} kcal
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(["breakfast", "lunch", "dinner"] as const).map((meal) => (
                  <div
                    key={meal}
                    className="rounded-xl p-3 bg-zinc-50 dark:bg-zinc-700/50"
                  >
                    <div
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gradient-to-r ${MEAL_COLORS[meal]} mb-2`}
                    >
                      <span className="text-white text-xs font-semibold capitalize">
                        {meal}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      {day[meal].name}
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {day[meal].calories} kcal
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
