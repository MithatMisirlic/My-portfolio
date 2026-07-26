import { Code2, FileCode, Server, Wrench } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { SkillCategoryKey } from "../i18n/translations";

const skillCategories: {
  id: number;
  translationKey: SkillCategoryKey;
  icon: typeof Code2;
  skills: string[];
  iconClass: string;
}[] = [
  {
    id: 1,
    translationKey: "frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
    ],
    iconClass:
      "from-blue-500 to-cyan-500 shadow-[0_10px_24px_-14px_rgb(14_165_233_/_0.78)]",
  },
  {
    id: 2,
    translationKey: "backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "PostgreSQL", "SQL", "Strapi"],
    iconClass:
      "from-purple-500 to-fuchsia-500 shadow-[0_10px_24px_-14px_rgb(168_85_247_/_0.72)]",
  },
  {
    id: 3,
    translationKey: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Figma", "Webflow", "Relume"],
    iconClass:
      "from-orange-500 to-red-500 shadow-[0_10px_24px_-14px_rgb(249_115_22_/_0.72)]",
  },
  {
    id: 4,
    translationKey: "other",
    icon: FileCode,
    skills: [
      "Python",
      "OpenAI APIs",
      "Prompt Engineering",
      "Streamlit",
      "Elasticsearch",
      "C#",
    ],
    iconClass:
      "from-emerald-500 to-green-600 shadow-[0_10px_24px_-14px_rgb(16_185_129_/_0.7)]",
  },
];

export function Skills() {
  const { copy } = useLanguage();

  return (
    <section
      id="skills"
      className="skills-ambient bg-gray-50 py-20 dark:bg-[#08080a]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {copy.skills.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {copy.skills.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="skill-card flex h-full flex-col rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 border-b border-gray-200/70 pb-4 dark:border-white/[0.07]">
                  <span
                    className={`inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${category.iconClass}`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {copy.skills.categories[category.translationKey]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-2.5 gap-y-2.5 pt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill cursor-default rounded-pill border border-gray-200/80 bg-white/75 px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.055] dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
