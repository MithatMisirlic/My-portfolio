import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import portraitImage from "../../assets/portrait.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // This links to my CV
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Desktop: Horizontal row layout, Mobile: Stacked */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Portrait Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
              
              {/* Image container with 4:5 aspect ratio */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/5] w-full max-w-[320px] sm:max-w-[360px]">
                  <img
                    src={portraitImage}
                    alt="Mithat Misirlic"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                Mithat Misirlic
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
                Full-Stack Web Development Student
              </p>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building responsive web applications using React, Node.js, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            <div className="flex gap-6 pt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/MithatMisirlic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/mithat-misirlic-631733295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}