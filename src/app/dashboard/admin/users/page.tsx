import { getAllUsers } from "@/lib/users";
import { Badge } from "@/components/ui/badge";

export default function AdminUsersPage() {
  const users = getAllUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Users
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        {users.length} registered users
      </p>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
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
  );
}
