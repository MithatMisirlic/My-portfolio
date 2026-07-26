import { useLanguage } from "../i18n/LanguageContext";
import { languageOptions } from "../i18n/translations";
import { cn } from "./ui/utils";

export function LanguageSwitcher() {
  const { copy, language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex h-9 items-center rounded-pill bg-gray-100/90 p-1 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.65),0_6px_14px_-12px_rgb(17_24_39_/_0.4)] dark:bg-white/[0.055] dark:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05),0_8px_18px_-13px_rgb(0_0_0_/_0.85)]"
      role="group"
      aria-label={copy.header.languageSwitcherLabel}
    >
      {languageOptions.map((option) => {
        const isActive = language === option.code;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={cn(
              "inline-flex h-7 min-w-8 items-center justify-center rounded-pill px-2 text-[0.7rem] font-semibold tracking-[0.04em] outline-none transition-[color,background-color,box-shadow] duration-polish focus-visible:ring-2 focus-visible:ring-blue-500/40",
              isActive
                ? "bg-white text-gray-950 shadow-control dark:bg-white dark:text-gray-950"
                : "text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white",
            )}
            aria-label={copy.header.languageOptionLabels[option.code]}
            aria-pressed={isActive}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
