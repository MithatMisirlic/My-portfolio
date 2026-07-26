import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToSection } from "./ui/utils";

const navigationItems = [
  "home",
  "about",
  "projects",
  "skills",
  "contact",
] as const;

const navigationLinkClass =
  "rounded-lg px-2 py-2 text-sm font-medium text-gray-600 outline-none transition-colors duration-polish hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-400 dark:hover:text-white";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { copy } = useLanguage();

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 dark:border-white/10">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label={copy.header.primaryNavigationLabel}
      >
        <div className="flex h-16 min-w-0 items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="min-w-0 rounded-lg py-2 text-left text-sm font-semibold text-gray-900 outline-none transition-colors hover:text-gray-600 focus-visible:ring-4 focus-visible:ring-blue-500/20 min-[390px]:text-base sm:text-xl dark:text-white dark:hover:text-gray-300"
          >
            Mithat Misirlic
          </button>

          <div className="hidden items-center gap-3 md:flex lg:gap-5">
            {navigationItems.map((sectionId) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className={navigationLinkClass}
              >
                {copy.header.navigation[sectionId]}
              </button>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
              className="inline-flex size-11 items-center justify-center rounded-lg text-gray-900 outline-none transition-colors hover:bg-black/5 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-white dark:hover:bg-white/5"
              aria-label={
                mobileMenuOpen
                  ? copy.header.closeMenuLabel
                  : copy.header.openMenuLabel
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="space-y-1 border-t border-gray-200/80 py-3 md:hidden dark:border-white/10"
          >
            {navigationItems.map((sectionId) => (
              <button
                key={sectionId}
                type="button"
                onClick={() =>
                  scrollToSection(sectionId, () => setMobileMenuOpen(false))
                }
                className="block min-h-11 w-full rounded-lg px-3 py-2.5 text-left text-base font-medium text-gray-700 outline-none transition-colors hover:bg-black/5 hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {copy.header.navigation[sectionId]}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
