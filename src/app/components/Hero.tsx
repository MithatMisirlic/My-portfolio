import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import portraitImage from "../../assets/portrait.png";
import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "./ui/button";
import { scrollToSection } from "./ui/utils";

const heroActionClass =
  "w-full hover:-translate-y-0.5 sm:w-auto sm:min-w-44";

export function Hero() {
  const { copy } = useLanguage();

  const handleDownloadCV = () => {
    window.open("/Mithat_CV.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="hero-ambient flex min-h-[100svh] items-center bg-gray-50 pt-16 dark:bg-[#08080a]"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center justify-center gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[360px_minmax(0,1fr)]">
          <div className="mx-auto w-[min(78vw,360px)] motion-safe:animate-portrait-float">
            <div className="group relative">
              <div
                className="absolute -inset-7 rounded-[2.5rem_2.5rem_2.5rem_1.25rem] bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl transition-opacity duration-deliberate group-hover:opacity-80 dark:from-blue-500/20 dark:to-purple-500/15"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] bg-gray-200 shadow-[0_2px_3px_rgb(17_24_39_/_0.08),0_28px_68px_-32px_rgb(17_24_39_/_0.62),inset_0_1px_0_rgb(255_255_255_/_0.24)] dark:bg-gray-900 dark:shadow-[0_2px_2px_rgb(255_255_255_/_0.025),0_32px_78px_-34px_rgb(0_0_0_/_0.98),inset_0_1px_0_rgb(255_255_255_/_0.045)]">
                <img
                  src={portraitImage}
                  alt="Mithat Misirlic"
                  width="360"
                  height="450"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="w-full min-w-0 space-y-6 text-center lg:text-left">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-950 min-[390px]:text-5xl sm:text-6xl dark:text-white">
                Mithat Misirlic
              </h1>
              <p className="mb-6 text-xl font-semibold leading-tight text-gray-700 min-[390px]:text-2xl sm:text-3xl dark:text-gray-200">
                {copy.hero.role}
              </p>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0 dark:text-gray-400">
                {copy.hero.description}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-3 sm:flex-row lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className={`${heroActionClass} group`}
              >
                {copy.hero.viewProjects}
                <ArrowRight
                  className="transition-transform duration-polish ease-polish group-hover:translate-x-1"
                  size={20}
                  aria-hidden="true"
                />
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className={heroActionClass}
              >
                {copy.hero.viewCv}
                <Download size={20} aria-hidden="true" />
              </Button>
            </div>

            <div className="flex justify-center gap-3 pt-3 lg:justify-start">
              <a
                href="https://github.com/MithatMisirlic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-lg text-gray-600 outline-none transition-[color,background-color,transform] duration-polish hover:-translate-y-0.5 hover:bg-black/5 hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                aria-label={copy.hero.githubLabel}
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/mithat-misirlić"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-lg text-gray-600 outline-none transition-[color,background-color,transform] duration-polish hover:-translate-y-0.5 hover:bg-black/5 hover:text-gray-950 focus-visible:ring-4 focus-visible:ring-blue-500/20 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                aria-label={copy.hero.linkedinLabel}
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
