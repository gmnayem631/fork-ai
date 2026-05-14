"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [loading, setLoading] = useState(false);

  const save = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Settings saved!");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Settings
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Manage your preferences
      </p>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-zinc-900 dark:text-white">
              Email Notifications
            </p>
            <p className="text-sm text-zinc-500">
              Receive updates about new recipes
            </p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-11 h-6 rounded-full transition-colors ${notifications ? "bg-orange-500" : "bg-zinc-300"}`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow transition-transform mx-1 ${notifications ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-zinc-900 dark:text-white">
              Newsletter
            </p>
            <p className="text-sm text-zinc-500">
              Weekly recipe digest in your inbox
            </p>
          </div>
          <button
            onClick={() => setNewsletter(!newsletter)}
            className={`w-11 h-6 rounded-full transition-colors ${newsletter ? "bg-orange-500" : "bg-zinc-300"}`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow transition-transform mx-1 ${newsletter ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
        </div>

        <Button
          onClick={save}
          className="brand-gradient text-white border-0"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </div>
  );
}
