import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { scrollToSection } from "./ui/utils";

const desktopNavigationItems = ["about", "projects", "skills"] as const;
const mobileNavigationItems = [
  "home",
  "about",
  "projects",
  "skills",
  "contact",
] as const;

const navigationLinkClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-gray-600 outline-none transition-colors duration-polish hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-400 dark:hover:text-white";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { copy } = useLanguage();

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current
        ?.querySelector<HTMLButtonElement>("[data-mobile-navigation-item]")
        ?.focus();
    });

    const closeMenu = () => {
      setMobileMenuOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktopBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, [mobileMenuOpen]);

  const navigateToSection = (
    sectionId: (typeof mobileNavigationItems)[number],
    closeMobileMenu = false,
  ) => {
    scrollToSection(
      sectionId,
      closeMobileMenu ? () => setMobileMenuOpen(false) : undefined,
    );
  };

  const wordmark = (
    <button
      type="button"
      onClick={() => navigateToSection("home")}
      className="min-w-0 rounded-lg py-2 text-left text-sm font-semibold text-gray-900 outline-none transition-colors hover:text-gray-600 focus-visible:ring-4 focus-visible:ring-blue-500/20 min-[390px]:text-base sm:text-lg dark:text-white dark:hover:text-gray-300"
    >
      Mithat Misirlic
    </button>
  );

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 dark:border-white/10">
      <nav
        className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8"
        aria-label={copy.header.primaryNavigationLabel}
      >
        <div className="hidden h-[4.5rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 lg:grid">
          <div className="justify-self-start">{wordmark}</div>

          <div className="flex items-center justify-center gap-1 xl:gap-3">
            {desktopNavigationItems.map((sectionId) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => navigateToSection(sectionId)}
                className={navigationLinkClass}
              >
                {copy.header.navigation[sectionId]}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-self-end gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              type="button"
              size="sm"
              onClick={() => navigateToSection("contact")}
              className="min-w-24 px-4"
            >
              {copy.header.contactAction}
            </Button>
          </div>
        </div>

        <div className="flex h-16 min-w-0 items-center justify-between gap-2 lg:hidden">
          {wordmark}

          <div className="flex shrink-0 items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              ref={menuButtonRef}
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
              aria-haspopup="true"
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
            ref={mobileMenuRef}
            id="mobile-navigation"
            className="max-h-[calc(100svh-4rem)] space-y-1 overflow-y-auto border-t border-gray-200/80 py-3 lg:hidden dark:border-white/10"
          >
            {mobileNavigationItems.map((sectionId) => (
              <button
                key={sectionId}
                type="button"
                data-mobile-navigation-item
                onClick={() => navigateToSection(sectionId, true)}
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
