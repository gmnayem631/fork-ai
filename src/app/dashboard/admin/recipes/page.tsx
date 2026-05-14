import { RECIPES } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";

export default function AdminRecipesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        All Recipes
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        {RECIPES.length} recipes in the platform
      </p>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-700/50">
            <tr>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Title
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Category
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Cuisine
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Difficulty
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Rating
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {RECIPES.map((recipe) => (
              <tr
                key={recipe.id}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-zinc-900 dark:text-white">
                  {recipe.title}
                </td>
                <td className="px-5 py-3 text-zinc-500">{recipe.category}</td>
                <td className="px-5 py-3 text-zinc-500">{recipe.cuisine}</td>
                <td className="px-5 py-3">
                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                </td>
                <td className="px-5 py-3 text-zinc-500">⭐ {recipe.rating}</td>
                <td className="px-5 py-3">
                  {recipe.isFeatured ? (
                    <Badge className="brand-gradient text-white border-0 text-xs">
                      Featured
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      Regular
                    </Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
