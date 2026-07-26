import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "./ui/button";
import { IconTile } from "./ui/icon-tile";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactItems = [
  {
    key: "email",
    value: "mithat.misirlic@gmail.com",
    href: "mailto:mithat.misirlic@gmail.com",
    icon: Mail,
    external: false,
    ariaLabelKey: null,
    iconClass:
      "from-blue-500 to-cyan-500 shadow-[0_10px_24px_-14px_rgb(14_165_233_/_0.72)]",
  },
  {
    key: "github",
    value: "github.com/MithatMisirlic",
    href: "https://github.com/MithatMisirlic",
    icon: Github,
    external: true,
    ariaLabelKey: "github",
    iconClass:
      "from-gray-700 to-gray-950 shadow-[0_10px_24px_-14px_rgb(59_130_246_/_0.42)]",
  },
  {
    key: "linkedin",
    value: "www.linkedin.com/in/mithat-misirlić",
    href: "https://www.linkedin.com/in/mithat-misirlić",
    icon: Linkedin,
    external: true,
    ariaLabelKey: "linkedin",
    iconClass:
      "from-blue-600 to-blue-800 shadow-[0_10px_24px_-14px_rgb(37_99_235_/_0.65)]",
  },
] as const;

export function Contact() {
  const { copy } = useLanguage();

  return (
    <section id="contact" className="bg-white py-20 dark:bg-[#0b0b0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {copy.contact.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {copy.contact.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.8fr)] lg:gap-14">
          <div className="contact-form-surface rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {copy.contact.form.heading}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {copy.contact.form.description}
              </p>
            </div>

            <form
              action="https://formspree.io/f/xeepejzz"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value={`${copy.contact.form.subject} 🚀`}
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {copy.contact.form.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={copy.contact.form.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {copy.contact.form.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={copy.contact.form.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {copy.contact.form.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={copy.contact.form.messagePlaceholder}
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-18px_rgb(37_99_235_/_0.52)]"
              >
                {copy.contact.form.submitLabel}
              </Button>
            </form>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:self-center">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const title = copy.contact.items[item.key];
              const content = (
                <span className="flex min-w-0 items-center gap-4">
                  <IconTile
                    className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${item.iconClass}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </IconTile>
                  <span className="min-w-0">
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      {title}
                    </span>
                    <span className="mt-1 block break-words text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.value}
                    </span>
                  </span>
                </span>
              );

              return (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="contact-tile flex min-h-24 items-center rounded-2xl p-4 outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
                  aria-label={
                    item.ariaLabelKey
                      ? copy.contact.profileAriaLabels[item.ariaLabelKey]
                      : undefined
                  }
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
