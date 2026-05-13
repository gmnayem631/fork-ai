import Link from "next/link";
import { ChefHat } from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

const FOOTER_LINKS = {
  Explore: [
    { label: "All Recipes", href: "/recipes" },
    { label: "Breakfast", href: "/recipes?category=Breakfast" },
    { label: "Lunch", href: "/recipes?category=Lunch" },
    { label: "Dinner", href: "/recipes?category=Dinner" },
    { label: "Desserts", href: "/recipes?category=Dessert" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Help & Support", href: "/help" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const SOCIAL = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="brand-gradient-text">ForkAI</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered recipe discovery and meal planning platform. Cook
              smarter, eat better, live healthier.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2024 ForkAI. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Built with love and{" "}
            <span className="brand-gradient-text font-medium">AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
