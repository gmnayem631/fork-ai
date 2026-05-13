"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is ForkAI free to use?",
    a: "Yes, ForkAI is completely free for all users.",
  },
  {
    q: "How does the AI recipe generator work?",
    a: "It analyzes your ingredients and generates optimized recipes using AI.",
  },
  {
    q: "Can I create a weekly meal plan?",
    a: "Yes, AI can generate personalized weekly meal plans based on your diet.",
  },
  {
    q: "Does ForkAI support dietary preferences?",
    a: "Yes, you can filter recipes based on diet like vegan, keto, or halal.",
  },
  {
    q: "Is my data safe?",
    a: "Yes, we do not sell or share your personal data.",
  },
  {
    q: "How do I get started?",
    a: "Just sign up and start exploring AI-powered cooking features instantly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border dark:border-zinc-800 rounded-xl p-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left font-semibold text-zinc-900 dark:text-white"
              >
                {item.q}
              </button>

              {openIndex === index && (
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
