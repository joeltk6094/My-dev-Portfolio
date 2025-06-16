import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-full h-full relative">
                  <Image src="133136257.jpeg" alt="Profile Background" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                </div>
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 transition-colors duration-200">
                I&apos;m a Frontend Developer transitioning from a creative background, working remotely from Kerala,
                India.
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg mb-6 transition-colors duration-200">
                After spending several years in creative design and visual arts, I discovered my passion for frontend
                development. With less than a year of professional experience in web development, I&apos;ve been rapidly
                learning and building with React, Next.js, and TypeScript.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg transition-colors duration-200">
                Currently, I work as a Frontend Developer at ITday, where I&apos;m applying my design background to
                create intuitive and visually appealing web applications. My unique perspective combines technical
                skills with a strong foundation in visual design principles.
              </p>
            </div>
          </div>

          <div className="my-16 md:my-24 relative h-[500px] md:h-[500px]">
            {/* ITday - Top Right */}
            <div className="absolute right-0 top-0 md:right-0 md:top-0 w-[280px] max-w-[80vw]">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-400/30 text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group">
                <div>
                  <div className="font-medium text-base sm:text-lg group-hover:text-cyan-600 transition-colors">
                    ITday
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-cyan-500 transition-colors">
                    Frontend Developer
                  </div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-cyan-600 group-hover:text-cyan-500 transition-colors">
                  24~
                </div>
              </div>
            </div>

            {/* Brotype Intern - Middle Right */}
            <div className="absolute right-[5%] sm:right-[10%] top-[20%] md:right-[15%] md:top-[25%] w-[280px] sm:w-[320px] max-w-[80vw]">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 backdrop-blur-sm border border-purple-400/30 text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group">
                <div>
                  <div className="font-medium text-base sm:text-lg group-hover:text-purple-600 transition-colors">
                    Brotype
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-purple-500 transition-colors">
                    Frontend Intern
                  </div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-purple-600 group-hover:text-purple-500 transition-colors">
                  23-24
                </div>
              </div>
            </div>

            {/* Creative Work - Middle */}
            <div className="absolute right-[10%] sm:right-[15%] top-[40%] md:right-[25%] md:top-[50%] w-[280px] sm:w-[360px] max-w-[80vw]">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 backdrop-blur-sm border border-emerald-400/30 text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group">
                <div>
                  <div className="font-medium text-base sm:text-lg group-hover:text-emerald-600 transition-colors">
                    Creative Design
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-emerald-500 transition-colors">
                    Designer & Visualizer
                  </div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-emerald-600 group-hover:text-emerald-500 transition-colors">
                  20-23
                </div>
              </div>
            </div>

            {/* Uniwood - Middle Left */}
            <div className="absolute left-[5%] sm:left-[10%] top-[60%] md:left-[15%] md:top-[70%] w-[240px] sm:w-[280px] max-w-[80vw]">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border border-orange-400/30 text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group">
                <div>
                  <div className="font-medium text-base sm:text-lg group-hover:text-orange-600 transition-colors">
                    Uniwood
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-orange-500 transition-colors">
                    Creative Visualizer
                  </div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-orange-600 group-hover:text-orange-500 transition-colors">
                  21-22
                </div>
              </div>
            </div>

            {/* University - Bottom Left */}
            <div className="absolute left-0 top-[80%] md:left-0 md:top-[90%] w-[200px] sm:w-[240px] max-w-[80vw]">
              <div className="bg-gradient-to-r from-indigo-500/10 to-violet-600/10 backdrop-blur-sm border border-indigo-400/30 text-card-foreground px-4 sm:px-8 py-4 rounded-full flex items-center justify-between shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 hover:border-indigo-400/50 transition-all duration-300 cursor-pointer group">
                <div>
                  <div className="font-medium text-base sm:text-lg group-hover:text-indigo-600 transition-colors">
                    YMBC College
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-indigo-500 transition-colors">
                    Visual Arts
                  </div>
                </div>
                <div className="font-medium text-base sm:text-lg ml-4 text-indigo-600 group-hover:text-indigo-500 transition-colors">
                  18-21
                </div>
              </div>
            </div>
          </div>

          <div className="my-24">
            <h2 className="text-foreground text-3xl md:text-4xl leading-tight mb-8 max-w-3xl mx-auto transition-colors duration-200">
              I bring a unique perspective to frontend development, combining technical skills with design thinking.
            </h2>

            <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto transition-colors duration-200">
              My background in visual arts gives me a different approach to frontend development. I understand both the
              technical implementation and the design principles that make great user experiences. I&apos;m passionate
              about bridging the gap between design and development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
              <div className="hover:transform hover:scale-105 transition-transform duration-300 group">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-4xl font-medium mb-4 transition-colors duration-200">
                  01
                </div>
                <h3 className="text-cyan-100 text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-cyan-50">
                  Learn
                </h3>
                <p className="text-slate-300 transition-colors duration-200 group-hover:text-slate-200">
                  Every day is a learning opportunity in this rapidly evolving field. I'm constantly exploring new
                  technologies, best practices, and design patterns. My approach is hands-on, building projects to
                  solidify my understanding of React, Next.js, and modern web development.
                </p>
              </div>

              <div className="hover:transform hover:scale-105 transition-transform duration-300 group">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-4xl font-medium mb-4 transition-colors duration-200">
                  02
                </div>
                <h3 className="text-purple-100 text-2xl font-semibold mb-4 transition-colors duration-200 group-hover:text-purple-50">
                  Create
                </h3>
                <p className="text-slate-300 transition-colors duration-200 group-hover:text-slate-200">
                  I love bringing ideas to life through code. My design background helps me create interfaces that are
                  not just functional, but also visually appealing and user-friendly. I focus on clean code, responsive
                  design, and attention to detail in every project.
                </p>
              </div>
            </div>
          </div>

          <div className="my-24">
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg mb-6 transition-colors duration-200">
                My journey into frontend development began during my time working in creative design. I was fascinated
                by the possibility of bringing static designs to life through interactive web experiences. What started
                as curiosity quickly became a passion.
              </p>

              <p className="text-muted-foreground text-lg mb-6 transition-colors duration-200">
                The transition from design to development has been challenging but incredibly rewarding. I&apos;ve
                discovered that my visual arts background gives me a unique advantage in understanding user experience
                and creating interfaces that are both beautiful and functional.
              </p>

              <p className="text-muted-foreground text-lg mb-12 transition-colors duration-200">
                When I&apos;m not coding, I enjoy exploring Kerala&apos;s beautiful landscapes, experimenting with
                digital art, and contributing to open source projects. I&apos;m also passionate about mentoring others
                who are making similar career transitions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-xl overflow-hidden relative bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 h-64 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100 transition-colors duration-200">
                      Kerala Backwaters
                    </h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 transition-colors duration-200">
                      My peaceful retreat
                    </p>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-background/90 text-foreground border border-border transition-colors duration-200">
                    God&apos;s Own Country
                  </Badge>
                </div>
                <div className="rounded-xl overflow-hidden bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/30 h-64 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100 transition-colors duration-200">
                      Learning
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 transition-colors duration-200">
                      Always growing
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
