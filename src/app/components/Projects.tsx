import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Virtual React Machine",
    description: "An interactive web application simulating a virtual machine environment built with React, demonstrating state management and component architecture.",
    image: "./public/Locker.png",
    tags: ["React", "JavaScript", "State Management"],
    github: "https://github.com/MithatMisirlic/virtual_react_machine",
    demo: null,
  },
  {
    id: 2,
    title: "Database Project (VDE-AR-N 4105 Form E.1)",
    description: "A database-driven application for managing and processing VDE-AR-N 4105 Form E.1 data, implementing CRUD operations and data validation.",
    image: "./public/Registration.png",
    tags: ["Node.js", "Database", "REST API"],
    github: "https://github.com/MithatMisirlic/DB_Project_E1_VDE",
    demo: null,
  },
  {
    id: 3,
    title: "SEO-SEM content marketing project",
    description: "A browser-based game inspired by the classic Centipede arcade game, built using vanilla JavaScript and HTML5 Canvas for game rendering.",
    image: "./public/HydroNutri.png",
    tags: ["HTML5", "CSS", "SEO-SEM optimization"],
    github: "https://github.com/MithatMisirlic/SEO-SEM--content-marketing",
    demo: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real projects I've built while learning web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 border-0 shadow-lg group hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}