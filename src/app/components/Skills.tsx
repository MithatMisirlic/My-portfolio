import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code2, Server, Wrench, FileCode } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Other",
    icon: FileCode,
    skills: ["C#"],
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id} 
                className="hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 border-0 shadow-lg group hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="dark:text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
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