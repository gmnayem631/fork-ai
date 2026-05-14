"use client";

import { useState } from "react";
import { BookOpen, Bot, User, UtensilsCrossed } from "lucide-react";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const faqs = [
  {
    q: "How does AI recipe generation work?",
    a: "Our AI creates recipes based on ingredients and dietary preferences.",
  },
  {
    q: "Can I save recipes?",
    a: "Yes, registered users can save favorite recipes.",
  },
  {
    q: "Is ForkAI free?",
    a: "Yes, ForkAI is currently free to use.",
  },
  {
    q: "Can I create meal plans?",
    a: "Yes, AI-powered weekly meal planning is supported.",
  },
  {
    q: "Do you support vegan diets?",
    a: "Yes, multiple diet preferences are supported.",
  },
  {
    q: "Can I use ForkAI on mobile?",
    a: "Yes, ForkAI is fully responsive.",
  },
  {
    q: "How do I contact support?",
    a: "Use the contact page to send us a message.",
  },
  {
    q: "Is my data private?",
    a: "Yes, your personal data is protected.",
  },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Help & Support
            </h1>

            <input
              type="text"
              placeholder="Search help articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-6 w-full max-w-xl p-4 rounded-xl border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
            />
          </div>

          {/* Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, title: "Getting Started" },
              { icon: Bot, title: "AI Features" },
              { icon: User, title: "Account" },
              { icon: UtensilsCrossed, title: "Recipes" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-center"
              >
                <item.icon className="mx-auto text-orange-500 mb-4" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border dark:border-zinc-700 rounded-xl p-5"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left font-semibold text-zinc-900 dark:text-white"
                >
                  {faq.q}
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
