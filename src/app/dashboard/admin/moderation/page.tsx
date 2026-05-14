import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const REPORTS = [
  {
    id: 1,
    type: "Recipe",
    title: "Spicy Thai Basil Chicken",
    reason: "Incorrect ingredients",
    reporter: "user@forkai.com",
    status: "pending",
  },
  {
    id: 2,
    type: "Review",
    title: "Review on Mushroom Risotto",
    reason: "Inappropriate content",
    reporter: "demo@forkai.com",
    status: "resolved",
  },
  {
    id: 3,
    type: "Recipe",
    title: "Chocolate Lava Cake",
    reason: "Wrong cooking time",
    reporter: "test@forkai.com",
    status: "pending",
  },
];

export default function ModerationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Moderation
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Review and resolve reported content
      </p>
      <div className="space-y-4">
        {REPORTS.map((report) => (
          <div
            key={report.id}
            className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700 flex items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  {report.type}
                </Badge>
                <Badge
                  className={`text-xs border-0 ${report.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                >
                  {report.status}
                </Badge>
              </div>
              <p className="font-medium text-zinc-900 dark:text-white">
                {report.title}
              </p>
              <p className="text-sm text-zinc-500">
                Reason: {report.reason} · Reported by {report.reporter}
              </p>
            </div>
            {report.status === "pending" && (
              <div className="flex gap-2 shrink-0">
                <Button
                  size="sm"
                  className="brand-gradient text-white border-0"
                >
                  Resolve
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-500 border-red-200"
                >
                  Dismiss
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
