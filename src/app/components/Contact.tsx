import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaboration or opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="dark:text-white text-2xl">Send a Message</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                      action="https://formspree.io/f/xeepejzz"
                      method="POST"
                      className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="New Portfolio Message 🚀" />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Name
                      </label>
                      <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Email
                      </label>
                      <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Message
                      </label>
                      <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project or opportunity..."
                          rows={6}
                          required
                          className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-md">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 dark:text-white">Email</h3>
                      <a
                          href="mailto:mithat.misirlic@gmail.com"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        mithat.misirlic@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-md">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 dark:text-white">Location</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Berlin, Germany</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-md">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 dark:text-white">GitHub</h3>
                      <a
                          href="https://github.com/MithatMisirlic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        github.com/MithatMisirlic
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 dark:text-white">LinkedIn</h3>
                      <a
                          href="https://www.linkedin.com/in/mithat-misirlic-631733295/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                      >
                        linkedin.com/in/mithat-misirlic-631733295
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
}