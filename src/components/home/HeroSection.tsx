"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HERO_SLIDES = [
  {
    title: "Cook Smarter with",
    highlight: "AI-Powered Recipes",
    subtitle:
      "Tell us what's in your fridge. We'll tell you what to cook. Discover thousands of recipes tailored just for you.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop",
  },
  {
    title: "Plan Your Entire",
    highlight: "Week in Seconds",
    subtitle:
      "Let AI generate a personalized weekly meal plan based on your diet goals, preferences, and available ingredients.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop",
  },
  {
    title: "Explore Cuisines",
    highlight: "From Around the World",
    subtitle:
      "From Thai street food to French fine dining — discover authentic recipes curated by culinary experts worldwide.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop",
  },
];

const STATS = [
  { value: "10,000+", label: "Recipes" },
  { value: "50+", label: "Cuisines" },
  { value: "2 AI", label: "Features" },
  { value: "4.9★", label: "Rating" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt="hero"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">
              AI-Powered Cooking Assistant
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {slide.title}{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="brand-gradient text-white border-0 gap-2 hover:opacity-90"
              asChild
            >
              <Link href="/recipes">
                Explore Recipes <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 gap-2"
              asChild
            >
              <Link href="/dashboard/user/ai-kitchen">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Try AI Kitchen
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-orange-400" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
