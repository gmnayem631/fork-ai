import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import OverviewCards from "@/components/dashboard/OverviewCards";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import { RECIPES } from "@/data/recipes";
import { getAllUsers } from "@/lib/users";
import { Badge } from "@/components/ui/badge";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  if ((session.user as { role?: string })?.role !== "admin")
    redirect("/dashboard/user");

  const users = getAllUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Admin Dashboard
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Platform overview and management
      </p>

      <OverviewCards />
      <DashboardCharts />

      {/* Recent recipes table */}
      <div className="mt-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
        <div className="p-5 border-b border-zinc-100 dark:border-zinc-700">
          <h2 className="font-bold text-zinc-900 dark:text-white">
            Recent Recipes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-700/50">
              <tr>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Recipe
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Category
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Difficulty
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Rating
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Featured
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
                  <td className="px-5 py-3">
                    <Badge variant="outline" className="text-xs">
                      {recipe.difficulty}
                    </Badge>
                  </td>
                  <td className="px-5 py-3 text-zinc-500">
                    ⭐ {recipe.rating}
                  </td>
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

      {/* Users table */}
      <div className="mt-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
        <div className="p-5 border-b border-zinc-100 dark:border-zinc-700">
          <h2 className="font-bold text-zinc-900 dark:text-white">
            Registered Users
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-700/50">
              <tr>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Name
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Email
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Role
                </th>
                <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-zinc-900 dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-5 py-3 text-zinc-500">{user.email}</td>
                  <td className="px-5 py-3">
                    <Badge
                      className={
                        user.role === "admin"
                          ? "brand-gradient text-white border-0 text-xs"
                          : "text-xs"
                      }
                      variant={user.role === "admin" ? "default" : "outline"}
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-5 py-3 text-zinc-500">{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
