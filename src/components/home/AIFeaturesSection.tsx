"use client";

import Link from "next/link";
import { Bot, CalendarDays } from "lucide-react";

export default function AIFeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Powerful AI Features
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Let AI decide what you cook and plan for your week
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl border dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:shadow-lg transition">
            <Bot className="w-10 h-10 text-orange-500" />
            <h3 className="text-xl font-semibold mt-4 text-zinc-900 dark:text-white">
              What Can I Cook?
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">
              Enter ingredients from your fridge and instantly get AI-generated
              recipes tailored to you.
            </p>
            <Link
              href="/dashboard/user/ai-kitchen"
              className="inline-block mt-4 text-white bg-linear-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg"
            >
              Try AI Kitchen
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl border dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:shadow-lg transition">
            <CalendarDays className="w-10 h-10 text-orange-500" />
            <h3 className="text-xl font-semibold mt-4 text-zinc-900 dark:text-white">
              AI Meal Planner
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">
              Generate a full weekly meal plan based on your diet, calories, and
              preferences.
            </p>
            <Link
              href="/dashboard/user/meal-planner"
              className="inline-block mt-4 text-white bg-linear-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg"
            >
              Plan Meals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
