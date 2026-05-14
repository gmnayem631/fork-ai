const LOGS = [
  {
    id: 1,
    type: "what-can-i-cook",
    user: "user@forkai.com",
    input: "chicken, garlic, tomatoes",
    status: "success",
    time: "2 mins ago",
  },
  {
    id: 2,
    type: "meal-planner",
    user: "demo@forkai.com",
    input: "Vegan, Weight Loss",
    status: "success",
    time: "15 mins ago",
  },
  {
    id: 3,
    type: "what-can-i-cook",
    user: "user@forkai.com",
    input: "pasta, cheese, eggs",
    status: "success",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "meal-planner",
    user: "test@forkai.com",
    input: "Keto, Muscle Gain",
    status: "failed",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "what-can-i-cook",
    user: "admin@forkai.com",
    input: "salmon, lemon, dill",
    status: "success",
    time: "3 hours ago",
  },
];

export default function AILogsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        AI Logs
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Monitor all AI feature usage
      </p>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-700/50">
            <tr>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Feature
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                User
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Input
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Status
              </th>
              <th className="text-left px-5 py-3 text-zinc-500 font-medium">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {LOGS.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-zinc-900 dark:text-white capitalize">
                  {log.type}
                </td>
                <td className="px-5 py-3 text-zinc-500">{log.user}</td>
                <td className="px-5 py-3 text-zinc-500 max-w-xs truncate">
                  {log.input}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${log.status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {log.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-zinc-500">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
