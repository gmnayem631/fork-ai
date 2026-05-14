import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-900 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 mb-8">Last updated: January 1, 2024</p>
          {[
            {
              title: "Information We Collect",
              body: "We collect information you provide directly to us, such as your name, email address, and any content you submit through our platform including recipes, reviews, and meal plans.",
            },
            {
              title: "How We Use Your Information",
              body: "We use the information we collect to provide, maintain, and improve our services, process your requests, send you technical notices, and respond to your comments and questions.",
            },
            {
              title: "AI Features",
              body: "When you use our AI features, your input (ingredients, dietary preferences) is sent to Google Gemini API for processing. We do not store your AI queries permanently.",
            },
            {
              title: "Data Security",
              body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
            },
            {
              title: "Contact Us",
              body: "If you have any questions about this Privacy Policy, please contact us at privacy@forkai.com.",
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {section.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
