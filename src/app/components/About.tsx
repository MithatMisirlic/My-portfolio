export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a Web Development student at <span className="font-semibold text-blue-600 dark:text-blue-400">SRH Berlin</span>, focusing on building modern, 
                responsive web applications with a strong emphasis on both frontend and full-stack development.
              </p>
              <p className="text-lg leading-relaxed">
                My technical focus is on JavaScript-based technologies, particularly <span className="font-semibold">React</span> for building 
                user interfaces and <span className="font-semibold">Node.js</span> for backend services. I enjoy solving complex problems and 
                learning new technologies through hands-on project work.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about writing clean, maintainable code and continuously improving my skills 
                through practical application development. Currently, I'm looking for opportunities to apply 
                my skills in a professional environment, whether through <span className="font-semibold text-blue-600 dark:text-blue-400">internships or working student positions</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}