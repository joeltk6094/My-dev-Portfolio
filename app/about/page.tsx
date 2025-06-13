import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto pt-24 pb-16">
          <h1 className="text-primary text-7xl md:text-8xl mb-16 text-center">I&apos;m Joel.</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#c2a99d]">
                <div className="w-full h-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-6xl sm:text-8xl font-bold">J</span>
                </div>
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
                I&apos;m a Frontend Developer working remotely from Seattle, Washington.
              </h2>

              <p className="text-primary/80 text-base sm:text-lg mb-6">
                Over the past 8 years, I&apos;ve worked with various frontend technologies, specializing in React,
                TypeScript, and modern web frameworks. I&apos;m passionate about creating performant and accessible web
                experiences.
              </p>

              <p className="text-primary/80 text-base sm:text-lg">
                Currently, I focus on building interactive web applications at TechCorp, where I lead frontend
                development for our flagship product that serves thousands of users daily.
              </p>
            </div>
          </div>

          <div className="my-16 md:my-24 relative h-[500px] md:h-[500px]">
            {/* TechCorp - Top Right */}
            <div className="absolute right-0 top-0 md:right-0 md:top-0 w-[280px] max-w-[80vw]">
              <div className="timeline-card bg-primary text-white px-4 sm:px-8 py-4 rounded-full flex items-center justify-between">
                <div>
                  <div className="font-medium text-base sm:text-lg">TechCorp</div>
                  <div className="text-xs sm:text-sm opacity-80">Senior Frontend Dev</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4">22~</div>
              </div>
            </div>

            {/* WebSolutions - Middle Right */}
            <div className="absolute right-[5%] sm:right-[10%] top-[20%] md:right-[15%] md:top-[25%] w-[280px] sm:w-[320px] max-w-[80vw]">
              <div className="timeline-card bg-primary text-white px-4 sm:px-8 py-4 rounded-full flex items-center justify-between">
                <div>
                  <div className="font-medium text-base sm:text-lg">WebSolutions</div>
                  <div className="text-xs sm:text-sm opacity-80">Frontend Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4">19-22</div>
              </div>
            </div>

            {/* Freelance - Middle */}
            <div className="absolute right-[10%] sm:right-[15%] top-[40%] md:right-[25%] md:top-[50%] w-[280px] sm:w-[360px] max-w-[80vw]">
              <div className="timeline-card bg-primary text-white px-4 sm:px-8 py-4 rounded-full flex items-center justify-between">
                <div>
                  <div className="font-medium text-base sm:text-lg">Freelance</div>
                  <div className="text-xs sm:text-sm opacity-80">Web Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4">18~</div>
              </div>
            </div>

            {/* CodeCraft - Middle Left */}
            <div className="absolute left-[5%] sm:left-[10%] top-[60%] md:left-[15%] md:top-[70%] w-[240px] sm:w-[280px] max-w-[80vw]">
              <div className="timeline-card bg-primary text-white px-4 sm:px-8 py-4 rounded-full flex items-center justify-between">
                <div>
                  <div className="font-medium text-base sm:text-lg">CodeCraft</div>
                  <div className="text-xs sm:text-sm opacity-80">Junior Developer</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4">17-19</div>
              </div>
            </div>

            {/* University - Bottom Left */}
            <div className="absolute left-0 top-[80%] md:left-0 md:top-[90%] w-[200px] sm:w-[240px] max-w-[80vw]">
              <div className="timeline-card bg-primary text-white px-4 sm:px-8 py-4 rounded-full flex items-center justify-between">
                <div>
                  <div className="font-medium text-base sm:text-lg">University</div>
                  <div className="text-xs sm:text-sm opacity-80">CS Degree</div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4">13-17</div>
              </div>
            </div>
          </div>

          <div className="my-24">
            <h2 className="text-primary text-3xl md:text-4xl leading-tight mb-8 max-w-3xl mx-auto">
              I love working on projects that prioritize user experience, accessibility, and performance.
            </h2>

            <p className="text-primary/80 text-lg mb-16 max-w-2xl mx-auto">
              I believe that great frontend development is about creating experiences that work for everyone. I'm
              particularly interested in projects that push the boundaries of what's possible on the web while
              maintaining core principles of accessibility and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/20 dark:bg-[#0c4035]/50 rounded-3xl p-12">
              <div>
                <div className="text-[#7ba99e] dark:text-[#97c9be] text-4xl font-medium mb-4">01</div>
                <h3 className="text-primary text-2xl font-medium mb-4">Build</h3>
                <p className="text-primary/80">
                  I create responsive, accessible, and performant web applications. I believe in writing clean,
                  maintainable code that scales well and follows best practices. My approach focuses on component-based
                  architecture and reusable design systems.
                </p>
              </div>

              <div>
                <div className="text-[#7ba99e] dark:text-[#97c9be] text-4xl font-medium mb-4">02</div>
                <h3 className="text-primary text-2xl font-medium mb-4">Optimize</h3>
                <p className="text-primary/80">
                  Performance is a feature. I'm passionate about optimizing web applications for speed and efficiency.
                  This includes code splitting, lazy loading, and implementing modern rendering techniques to ensure the
                  best possible user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="my-24">
            <div className="max-w-2xl mx-auto">
              <p className="text-primary/80 text-lg mb-6">
                My journey into frontend development began with a fascination for creating interactive experiences on
                the web. What started as simple HTML and CSS experiments evolved into a deep passion for JavaScript and
                modern frameworks.
              </p>

              <p className="text-primary/80 text-lg mb-6">
                I'm constantly learning and experimenting with new technologies. I believe in staying current with the
                rapidly evolving frontend ecosystem while maintaining a strong foundation in the fundamentals of web
                development.
              </p>

              <p className="text-primary/80 text-lg mb-12">
                Outside of coding, I enjoy hiking in the Pacific Northwest, playing guitar, and contributing to open
                source projects. I'm also an avid coffee enthusiast and enjoy exploring the local coffee scene.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-xl overflow-hidden relative bg-indigo-100 dark:bg-indigo-900 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Pacific Northwest</h3>
                    <p className="text-sm">My hiking adventures</p>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-white/80 text-primary dark:bg-[#0c4035] dark:text-white">
                    Mt. Rainier National Park
                  </Badge>
                </div>
                <div className="rounded-xl overflow-hidden bg-rose-100 dark:bg-rose-900 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Coding</h3>
                    <p className="text-sm">My happy place</p>
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
