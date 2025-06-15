import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto pt-24 pb-16">
          <h1 className="text-foreground text-7xl md:text-8xl mb-16 text-center transition-colors duration-200">
            I&apos;m Joel.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border border-border transition-colors duration-200">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 flex items-center justify-center transition-colors duration-200">
                  <span className="text-white text-6xl sm:text-8xl font-bold">J</span>
                </div>
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 transition-colors duration-200">
                I&apos;m a Frontend Developer working remotely from Seattle, Washington.
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg mb-6 transition-colors duration-200">
                Over the past 8 years, I&apos;ve worked with various frontend technologies, specializing in React,
                TypeScript, and modern web frameworks. I&apos;m passionate about creating performant and accessible web
                experiences.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg transition-colors duration-200">
                Currently, I focus on building interactive web applications at TechCorp, where I lead frontend
                development for our flagship product that serves thousands of users daily.
              </p>
            </div>
          </div>

          <div className="my-16 md:my-24 relative h-[500px] md:h-[500px]">
            {/* TechCorp - Top Right */}
            <div className="absolute right-0 top-0 md:right-0 md:top-0 w-[280px] max-w-[80vw]">
              <div className="bg-card border border-border text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-medium text-base sm:text-lg">TechCorp</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Senior Frontend Dev</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-primary">22~</div>
              </div>
            </div>

            {/* WebSolutions - Middle Right */}
            <div className="absolute right-[5%] sm:right-[10%] top-[20%] md:right-[15%] md:top-[25%] w-[280px] sm:w-[320px] max-w-[80vw]">
              <div className="bg-card border border-border text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-medium text-base sm:text-lg">WebSolutions</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Frontend Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-primary">19-22</div>
              </div>
            </div>

            {/* Freelance - Middle */}
            <div className="absolute right-[10%] sm:right-[15%] top-[40%] md:right-[25%] md:top-[50%] w-[280px] sm:w-[360px] max-w-[80vw]">
              <div className="bg-card border border-border text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-medium text-base sm:text-lg">Freelance</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Web Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-primary">18~</div>
              </div>
            </div>

            {/* CodeCraft - Middle Left */}
            <div className="absolute left-[5%] sm:left-[10%] top-[60%] md:left-[15%] md:top-[70%] w-[240px] sm:w-[280px] max-w-[80vw]">
              <div className="bg-card border border-border text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-medium text-base sm:text-lg">CodeCraft</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Junior Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-primary">17-19</div>
              </div>
            </div>

            {/* University - Bottom Left */}
            <div className="absolute left-0 top-[80%] md:left-0 md:top-[90%] w-[200px] sm:w-[240px] max-w-[80vw]">
              <div className="bg-card border border-border text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="font-medium text-base sm:text-lg">University</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">CS Degree</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-primary">13-17</div>
              </div>
            </div>
          </div>

          <div className="my-24">
            <h2 className="text-foreground text-3xl md:text-4xl leading-tight mb-8 max-w-3xl mx-auto transition-colors duration-200">
              I love working on projects that prioritize user experience, accessibility, and performance.
            </h2>

            <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto transition-colors duration-200">
              I believe that great frontend development is about creating experiences that work for everyone. I'm
              particularly interested in projects that push the boundaries of what's possible on the web while
              maintaining core principles of accessibility and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card/50 border border-border rounded-3xl p-12 shadow-sm transition-colors duration-200">
              <div>
                <div className="text-primary text-4xl font-medium mb-4 transition-colors duration-200">01</div>
                <h3 className="text-foreground text-2xl font-medium mb-4 transition-colors duration-200">Build</h3>
                <p className="text-muted-foreground transition-colors duration-200">
                  I create responsive, accessible, and performant web applications. I believe in writing clean,
                  maintainable code that scales well and follows best practices. My approach focuses on component-based
                  architecture and reusable design systems.
                </p>
              </div>

              <div>
                <div className="text-primary text-4xl font-medium mb-4 transition-colors duration-200">02</div>
                <h3 className="text-foreground text-2xl font-medium mb-4 transition-colors duration-200">Optimize</h3>
                <p className="text-muted-foreground transition-colors duration-200">
                  Performance is a feature. I'm passionate about optimizing web applications for speed and efficiency.
                  This includes code splitting, lazy loading, and implementing modern rendering techniques to ensure the
                  best possible user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="my-24">
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg mb-6 transition-colors duration-200">
                My journey into frontend development began with a fascination for creating interactive experiences on
                the web. What started as simple HTML and CSS experiments evolved into a deep passion for JavaScript and
                modern frameworks.
              </p>

              <p className="text-muted-foreground text-lg mb-6 transition-colors duration-200">
                I'm constantly learning and experimenting with new technologies. I believe in staying current with the
                rapidly evolving frontend ecosystem while maintaining a strong foundation in the fundamentals of web
                development.
              </p>

              <p className="text-muted-foreground text-lg mb-12 transition-colors duration-200">
                Outside of coding, I enjoy hiking in the Pacific Northwest, playing guitar, and contributing to open
                source projects. I'm also an avid coffee enthusiast and enjoy exploring the local coffee scene.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-xl overflow-hidden relative bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/30 h-64 flex items-center justify-center transition-colors duration-200">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-indigo-900 dark:text-indigo-100 transition-colors duration-200">
                      Pacific Northwest
                    </h3>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 transition-colors duration-200">
                      My hiking adventures
                    </p>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-background/90 text-foreground border border-border transition-colors duration-200">
                    Mt. Rainier National Park
                  </Badge>
                </div>
                <div className="rounded-xl overflow-hidden bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/30 h-64 flex items-center justify-center transition-colors duration-200">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-rose-900 dark:text-rose-100 transition-colors duration-200">
                      Coding
                    </h3>
                    <p className="text-sm text-rose-700 dark:text-rose-300 transition-colors duration-200">
                      My happy place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
