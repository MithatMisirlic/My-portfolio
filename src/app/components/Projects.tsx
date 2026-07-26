import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type {
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { ProjectTranslationKey } from "../i18n/translations";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

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

function formatProjectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

type SlideDirection = "none" | "next" | "previous";

type ProjectSelection = {
  index: number;
  direction: SlideDirection;
};

type SwipeGesture = {
  pointerId: number;
  startX: number;
  startY: number;
};

const swipeThreshold = 52;
const swipeDirectionRatio = 1.2;

export function Projects() {
  const { copy } = useLanguage();
  const [projectSelection, setProjectSelection] =
    useState<ProjectSelection>({
      index: 0,
      direction: "none",
    });
  const activeProjectIndex = projectSelection.index;
  const slideDirection = projectSelection.direction;
  const swipeGestureRef = useRef<SwipeGesture | null>(null);
  const mobileSlideRef = useRef<HTMLDivElement | null>(null);
  const activeProject = projects[activeProjectIndex];
  const activeProjectCopy =
    copy.projects.items[activeProject.translationKey];
  const isFirstProject = activeProjectIndex === 0;
  const isLastProject = activeProjectIndex === projects.length - 1;

  const changeProject = (
    getProjectIndex: (currentProjectIndex: number) => number,
  ) => {
    setProjectSelection((currentSelection) => {
      const projectIndex = getProjectIndex(currentSelection.index);

      if (
        projectIndex < 0 ||
        projectIndex >= projects.length ||
        projectIndex === currentSelection.index
      ) {
        return currentSelection;
      }

      return {
        index: projectIndex,
        direction:
          projectIndex > currentSelection.index ? "next" : "previous",
      };
    });
  };

  const selectProject = (projectIndex: number) => {
    changeProject(() => projectIndex);
  };

  const showPreviousProject = () => {
    changeProject((currentProjectIndex) => currentProjectIndex - 1);
  };

  const showNextProject = () => {
    changeProject((currentProjectIndex) => currentProjectIndex + 1);
  };

  useEffect(() => {
    const mobileSlide = mobileSlideRef.current;

    if (
      !mobileSlide ||
      slideDirection === "none" ||
      window.matchMedia("(min-width: 1280px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const horizontalOffset = slideDirection === "next" ? 14 : -14;
    const animation = mobileSlide.animate(
      [
        {
          opacity: 0.62,
          transform: `translateX(${horizontalOffset}px)`,
        },
        { opacity: 1, transform: "translateX(0)" },
      ],
      {
        duration: 180,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    return () => {
      animation.cancel();
    };
  }, [activeProjectIndex, slideDirection]);

  const handleSelectorKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    projectIndex: number,
  ) => {
    let nextProjectIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextProjectIndex = (projectIndex + 1) % projects.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextProjectIndex =
        (projectIndex - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextProjectIndex = 0;
    } else if (event.key === "End") {
      nextProjectIndex = projects.length - 1;
    }

    if (nextProjectIndex === null) {
      return;
    }

    event.preventDefault();
    selectProject(nextProjectIndex);
    document
      .getElementById(`project-selector-${projects[nextProjectIndex].id}`)
      ?.focus();
  };

  const handleShowcaseKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLElement;

    if (eventTarget.closest("a, button, input, textarea, select")) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousProject();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextProject();
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLElement;

    if (
      window.matchMedia("(min-width: 1280px)").matches ||
      eventTarget.closest("a, button") ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      swipeGestureRef.current = null;
      return;
    }

    swipeGestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = swipeGestureRef.current;
    swipeGestureRef.current = null;

    if (
      !gesture ||
      gesture.pointerId !== event.pointerId ||
      (event.target as HTMLElement).closest("a, button")
    ) {
      return;
    }

    const horizontalDistance = event.clientX - gesture.startX;
    const verticalDistance = event.clientY - gesture.startY;
    const absoluteHorizontalDistance = Math.abs(horizontalDistance);
    const absoluteVerticalDistance = Math.abs(verticalDistance);

    if (
      absoluteHorizontalDistance < swipeThreshold ||
      absoluteHorizontalDistance <=
        absoluteVerticalDistance * swipeDirectionRatio
    ) {
      return;
    }

    if (horizontalDistance < 0) {
      showNextProject();
    } else {
      showPreviousProject();
    }
  };

  const clearSwipeGesture = () => {
    swipeGestureRef.current = null;
  };

  const preview = (
    <div
      key={activeProject.id}
      className="project-preview-enter flex aspect-video w-full items-center justify-center overflow-hidden rounded-control bg-white shadow-control dark:bg-[#0a0a0c]"
    >
      <img
        src={activeProject.image}
        alt={`${activeProject.title} ${copy.projects.previewAltSuffix}`}
        width="960"
        height="540"
        className="h-full w-full object-contain"
      />
    </div>
  );

  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-[#0e0e10]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {copy.projects.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {copy.projects.subtitle}
          </p>
        </div>

        <div className="project-showcase mx-auto max-w-[82rem] overflow-hidden rounded-panel">
          <div className="grid min-w-0 xl:grid-cols-[14rem_minmax(0,1fr)]">
            <aside className="hidden min-w-0 border-r border-gray-200/80 p-5 xl:block dark:border-white/[0.08]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                {copy.projects.selectorLabel}
              </p>

              <div
                className="flex flex-col gap-2"
                role="group"
                aria-label={copy.projects.selectorAriaLabel}
              >
                {projects.map((project, projectIndex) => {
                  const isActive = projectIndex === activeProjectIndex;

                  return (
                    <button
                      id={`project-selector-${project.id}`}
                      key={project.id}
                      type="button"
                      onClick={() => selectProject(projectIndex)}
                      onKeyDown={(event) =>
                        handleSelectorKeyDown(event, projectIndex)
                      }
                      className={cn(
                        "flex min-h-16 items-center gap-3 rounded-control border px-2.5 py-2 text-left outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish focus-visible:ring-4 focus-visible:ring-blue-500/20",
                        isActive
                          ? "border-blue-300/70 bg-white text-gray-950 shadow-control dark:border-blue-400/20 dark:bg-white/[0.075] dark:text-white"
                          : "border-transparent text-gray-600 hover:border-gray-200 hover:bg-white/65 hover:text-gray-950 dark:text-gray-400 dark:hover:border-white/[0.08] dark:hover:bg-white/[0.04] dark:hover:text-white",
                      )}
                      aria-label={`${copy.projects.selectProjectAriaPrefix} ${project.title}`}
                      aria-pressed={isActive}
                      aria-controls="active-project-panel"
                    >
                      <span className="flex aspect-video w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[inset_0_0_0_1px_rgb(17_24_39_/_0.08)] dark:bg-[#0a0a0c] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.07)]">
                        <img
                          src={project.image}
                          alt=""
                          width="128"
                          height="72"
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-semibold tracking-[0.1em] text-blue-600 dark:text-blue-400">
                          {formatProjectNumber(projectIndex)}
                        </span>
                        <span
                          className="mt-1 block truncate text-sm font-semibold"
                          title={project.title}
                        >
                          {project.title}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div
              className="min-w-0 touch-pan-y outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-500/20"
              role="region"
              tabIndex={0}
              aria-label={copy.projects.selectorAriaLabel}
              onKeyDown={handleShowcaseKeyDown}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={clearSwipeGesture}
            >
              <div className="flex items-center justify-between border-b border-gray-200/80 px-4 py-3 sm:px-6 xl:hidden dark:border-white/[0.08]">
                <p
                  className="text-sm font-semibold tracking-[0.08em] text-blue-600 dark:text-blue-400"
                  aria-label={`${copy.projects.counterAriaPrefix} ${activeProjectIndex + 1} ${copy.projects.counterAriaConnector} ${projects.length}`}
                >
                  {formatProjectNumber(activeProjectIndex)} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPreviousProject}
                    disabled={isFirstProject}
                    className="inline-flex size-11 items-center justify-center rounded-control border border-gray-200/80 bg-white/75 text-gray-700 shadow-control outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish hover:-translate-y-0.5 hover:bg-white hover:text-gray-950 hover:shadow-raised focus-visible:ring-4 focus-visible:ring-blue-500/20 active:translate-y-px disabled:pointer-events-none disabled:opacity-35 dark:border-white/10 dark:bg-white/[0.055] dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label={copy.projects.previousProjectLabel}
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextProject}
                    disabled={isLastProject}
                    className="inline-flex size-11 items-center justify-center rounded-control border border-gray-200/80 bg-white/75 text-gray-700 shadow-control outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-polish hover:-translate-y-0.5 hover:bg-white hover:text-gray-950 hover:shadow-raised focus-visible:ring-4 focus-visible:ring-blue-500/20 active:translate-y-px disabled:pointer-events-none disabled:opacity-35 dark:border-white/10 dark:bg-white/[0.055] dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label={copy.projects.nextProjectLabel}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <p
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
              >
                {activeProject.title}
              </p>

              <div
                ref={mobileSlideRef}
                className="project-mobile-slide grid min-w-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.8fr)] xl:grid-cols-[minmax(0,1fr)_22rem]"
                data-direction={slideDirection}
              >
                <div className="min-w-0 border-b border-gray-200/80 bg-gray-100/55 p-4 sm:p-6 lg:border-b-0 lg:border-r xl:p-8 dark:border-white/[0.08] dark:bg-black/15">
                  <div className="flex h-full min-h-0 items-center">
                    {activeProject.demo ? (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-control outline-none focus-visible:ring-4 focus-visible:ring-blue-500/25"
                        aria-label={`${copy.projects.previewLinkAriaPrefix} ${activeProject.title}`}
                      >
                        {preview}
                      </a>
                    ) : (
                      preview
                    )}
                  </div>
                </div>

                <article
                  id="active-project-panel"
                  className="flex min-h-[22rem] min-w-0 flex-col p-6 sm:min-h-[19rem] sm:p-8 lg:min-h-0"
                >
                  <p
                    className="hidden text-sm font-semibold tracking-[0.08em] text-blue-600 xl:block dark:text-blue-400"
                    aria-label={`${copy.projects.counterAriaPrefix} ${activeProjectIndex + 1} ${copy.projects.counterAriaConnector} ${projects.length}`}
                  >
                    {formatProjectNumber(activeProjectIndex)} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight text-gray-950 xl:mt-5 dark:text-white">
                    {activeProject.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                    {activeProjectCopy.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProjectCopy.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border border-blue-200/60 bg-blue-100/75 text-blue-800 dark:border-blue-400/15 dark:bg-blue-900/45 dark:text-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {activeProject.demo && (
                      <Button
                        asChild
                        className="w-full min-[390px]:w-auto min-[390px]:min-w-32"
                      >
                        <a
                          href={activeProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${copy.projects.demoAriaPrefix} ${activeProject.title}`}
                        >
                          <ExternalLink size={18} aria-hidden="true" />
                          {copy.projects.demoLabel}
                        </a>
                      </Button>
                    )}

                    {activeProject.github && (
                      <Button
                        asChild
                        variant={activeProject.demo ? "outline" : "default"}
                        className="w-full min-[390px]:w-auto min-[390px]:min-w-32"
                      >
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${copy.projects.sourceAriaPrefix} ${activeProject.title}`}
                        >
                          <Github size={18} aria-hidden="true" />
                          {copy.projects.sourceLabel}
                        </a>
                      </Button>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
