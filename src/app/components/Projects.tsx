import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { ProjectTranslationKey } from "../i18n/translations";

const projects: {
  id: number;
  translationKey: ProjectTranslationKey;
  title: string;
  image: string;
  github: string;
  demo: string | null;
}[] = [
  {
    id: 1,
    translationKey: "virtualMachine",
    title: "Virtual React Machine",
    image: "/Locker.png",
    github: "https://github.com/MithatMisirlic/virtual_react_machine",
    demo: null,
  },
  {
    id: 2,
    translationKey: "databaseProject",
    title: "Database Project (VDE-AR-N 4105 Form E.1)",
    image: "/Registration.png",
    github: "https://github.com/MithatMisirlic/DB_Project_E1_VDE",
    demo: null,
  },
  {
    id: 3,
    translationKey: "seoProject",
    title: "SEO-SEM Content Marketing Project",
    image: "/HydroNutri.png",
    github: "https://github.com/MithatMisirlic/SEO-SEM--content-marketing",
    demo: null,
  },
];

export function Projects() {
  const { copy } = useLanguage();

  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-[#0e0e10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {copy.projects.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {copy.projects.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => {
            const projectCopy = copy.projects.items[project.translationKey];

            return (
              <Card
                key={project.id}
                className="project-card group h-full overflow-hidden bg-white dark:bg-[#151518]"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <img
                    src={project.image}
                    alt={`${project.title} ${copy.projects.previewAltSuffix}`}
                    width="640"
                    height="360"
                    className="project-image h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="project-title text-xl text-gray-950 transition-colors duration-polish dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {projectCopy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {projectCopy.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border border-blue-200/60 bg-blue-100/75 text-blue-800 dark:border-blue-400/15 dark:bg-blue-900/45 dark:text-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-control border border-border/40 bg-surface/80 px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-control outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-50 hover:text-blue-700 hover:shadow-raised focus-visible:ring-4 focus-visible:ring-blue-500/25 dark:text-gray-200 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
                      aria-label={`${copy.projects.sourceAriaPrefix} ${project.title}`}
                    >
                      <Github size={17} aria-hidden="true" />
                      <span>{copy.projects.sourceLabel}</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-control border border-border/40 bg-surface/80 px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-control outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-50 hover:text-blue-700 hover:shadow-raised focus-visible:ring-4 focus-visible:ring-blue-500/25 dark:text-gray-200 dark:hover:bg-blue-400/10 dark:hover:text-blue-300"
                        aria-label={`${copy.projects.demoAriaPrefix} ${project.title}`}
                      >
                        <ExternalLink size={17} aria-hidden="true" />
                        <span>{copy.projects.demoLabel}</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
