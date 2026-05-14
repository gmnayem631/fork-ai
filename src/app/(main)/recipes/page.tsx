"use client";

import { useState, useMemo } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { RECIPES, CATEGORIES, CUISINES, DIFFICULTIES } from "@/data/recipes";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Clock, Users, Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const PER_PAGE = 6;

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cuisine, setCuisine] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);

  const filtered = useMemo(() => {
    let result = [...RECIPES];
    if (debouncedSearch) {
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          r.description.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
    }
    if (category !== "All")
      result = result.filter((r) => r.category === category);
    if (cuisine !== "All") result = result.filter((r) => r.cuisine === cuisine);
    if (difficulty !== "All")
      result = result.filter((r) => r.difficulty === difficulty);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "time")
      result.sort(
        (a, b) => a.prepTime + a.cookTime - (b.prepTime + b.cookTime),
      );
    if (sort === "calories") result.sort((a, b) => a.calories - b.calories);
    return result;
  }, [debouncedSearch, category, cuisine, difficulty, sort]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setCuisine("All");
    setDifficulty("All");
    setSort("default");
    setPage(1);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
              Explore Recipes
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              {filtered.length} recipes found
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-9"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Select
              value={category}
              onValueChange={(v) => {
                setCategory(v);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={cuisine}
              onValueChange={(v) => {
                setCuisine(v);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent>
                {CUISINES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={difficulty}
              onValueChange={(v) => {
                setDifficulty(v);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {DIFFICULTIES.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="time">Quickest</SelectItem>
                <SelectItem value="calories">Lowest Cal</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset
            </Button>
          </div>

          {/* Cards */}
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-zinc-400">
              No recipes found. Try different filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {paginated.map((recipe) => (
                <div
                  key={recipe.id}
                  className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
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
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-900/90 rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                      <span className="text-xs font-semibold">
                        {recipe.rating}
                      </span>
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
                    <Button
                      size="sm"
                      className="w-full brand-gradient text-white border-0"
                      asChild
                    >
                      <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant={page === i + 1 ? "default" : "outline"}
                  className={
                    page === i + 1 ? "brand-gradient text-white border-0" : ""
                  }
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
