import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const footerSocialLinkClass =
  "inline-flex size-9 items-center justify-center rounded-full text-gray-600 outline-none transition-[color,background-color,transform] duration-polish hover:-translate-y-0.5 hover:bg-black/5 hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-400 dark:hover:bg-white/[0.06] dark:hover:text-white";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-gray-200/80 bg-gray-100/80 py-8 text-gray-900 dark:border-white/[0.08] dark:bg-[#0d0d0f] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-lg font-semibold">Mithat Misirlic</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {copy.footer.role}
            </p>
          </div>

          <div className="flex gap-2" aria-label={copy.footer.socialLinksLabel}>
            <a
              href="https://github.com/MithatMisirlic"
              target="_blank"
              rel="noopener noreferrer"
              className={footerSocialLinkClass}
              aria-label="GitHub"
            >
              <Github size={21} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/mithat-misirlic-631733295"
              target="_blank"
              rel="noopener noreferrer"
              className={footerSocialLinkClass}
              aria-label="LinkedIn"
            >
              <Linkedin size={21} aria-hidden="true" />
            </a>
            <a
              href="mailto:mithat.misirlic@gmail.com"
              className={footerSocialLinkClass}
              aria-label={copy.contact.items.email}
            >
              <Mail size={21} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-300/70 pt-5 text-center text-xs text-gray-600 sm:flex-row sm:text-left dark:border-white/[0.08] dark:text-gray-400">
          <p>{copy.footer.designedBy}</p>
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
