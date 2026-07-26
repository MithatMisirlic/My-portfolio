import { BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { IconTile } from "./ui/icon-tile";

const aboutFacts = [
  {
    key: "location",
    icon: MapPin,
  },
  {
    key: "university",
    icon: GraduationCap,
  },
  {
    key: "focus",
    icon: Code2,
  },
  {
    key: "opportunities",
    icon: BriefcaseBusiness,
  },
] as const;

export function About() {
  const { copy } = useLanguage();

  return (
    <section id="about" className="bg-white py-20 dark:bg-[#0b0b0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {copy.about.heading}
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(19rem,0.8fr)] lg:gap-14">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {copy.about.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map((segment, segmentIndex) =>
                  segment.emphasis ? (
                    <span
                      key={segmentIndex}
                      className="font-semibold text-gray-950 dark:text-white"
                    >
                      {segment.text}
                    </span>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>

          <dl className="grid content-start gap-3 min-[430px]:grid-cols-2 lg:grid-cols-1">
            {aboutFacts.map((fact) => {
              const Icon = fact.icon;
              const factCopy = copy.about.facts[fact.key];

              return (
                <div
                  key={fact.key}
                  className="soft-tile flex min-h-[5.5rem] items-center gap-4 rounded-control px-4 py-3.5"
                >
                  <IconTile className="bg-blue-100/90 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                    <Icon size={18} aria-hidden="true" />
                  </IconTile>
                  <div className="min-w-0">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-gray-500 dark:text-gray-500">
                      {factCopy.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium leading-snug text-gray-800 dark:text-gray-200">
                      {factCopy.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
