import { Globe2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" border-neutral-800 bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand Column - Takes up 4 columns */}
          <div className="col-span-12 md:col-span-4 space-y-4 pr-8">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-6 w-6 text-neutral-200" />
              <span className="font-bold text-neutral-200">Modern Human</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Build and scale remote businesses to unlock location independence. Join a community of modern entrepreneurs building the future of work.
            </p>
          </div>

          {/* Spacer - 2 columns */}
          <div className="hidden md:block md:col-span-2" />

          {/* Navigation Columns - 2 columns each */}
          <div className="col-span-4 md:col-span-2">
            <h3 className="font-semibold text-neutral-200 mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/features" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-4 md:col-span-2">
            <h3 className="font-semibold text-neutral-200 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/community" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-4 md:col-span-2">
            <h3 className="font-semibold text-neutral-200 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-20 pt-8">
          <p className="text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} Modern Human. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 