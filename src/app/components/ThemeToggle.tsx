import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../i18n/LanguageContext";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { copy } = useLanguage();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      className="inline-flex h-9 w-12 items-center justify-center rounded-pill bg-gray-100/90 text-gray-700 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.65),0_6px_14px_-12px_rgb(17_24_39_/_0.4)] outline-none transition-[background-color,color,box-shadow,transform] duration-polish hover:-translate-y-0.5 hover:bg-gray-200 hover:text-gray-950 hover:shadow-control focus-visible:ring-4 focus-visible:ring-blue-500/20 active:translate-y-px active:shadow-control-pressed dark:bg-white/[0.055] dark:text-gray-300 dark:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05),0_8px_18px_-13px_rgb(0_0_0_/_0.85)] dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={
        isDarkTheme ? copy.theme.switchToLight : copy.theme.switchToDark
      }
      aria-pressed={isDarkTheme}
    >
      {isDarkTheme ? (
        <Sun size={18} className="text-amber-400" aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
