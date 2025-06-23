import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Phone, Star, User } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="mx-auto pt-24 pb-16">
          <div className="p-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 gap-y-8 grid-rows-[auto]">

                {/* Main Hero Card */}
                <Card className="p-6 sm:p-8 border-2 border-gray-300 dark:border-gray-700 rounded-3xl flex flex-col justify-center h-[400px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer">
                  <div className="space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight transition-colors duration-300">
                      Frontend
                      <br />
                      Developer &
                      <br />
                      Problem Solver
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-md transition-colors duration-300">
                      I specialize in Front End Development with expertise in HTML, CSS, JavaScript, React.js, and Next.js,
                      alongside a keen understanding of UI/UX design principles.
                    </p>
                    <Link
                      href="/Joel_s_Resume.pdf"
                      target="_blank"
                      download
                      className="inline-flex items-center bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-6 py-3 text-sm font-medium w-fit transition-all duration-300 hover:scale-105"
                    >
                      DOWNLOAD RESUME
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </Card>

                {/* Profile Card */}
                <Card className="border-2 border-gray-300 dark:border-gray-700 rounded-3xl overflow-hidden relative h-[400px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer group">
                  <Image
                    src="133136257.jpeg"
                    alt="Joel Thomas - Frontend Developer"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 flex space-x-2 sm:space-x-3">
                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      PROFILE
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">JOEL THOMAS</h2>
                        <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wider">FRONTEND DEVELOPER</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white/70 text-xs font-medium">AVAILABLE FOR WORK</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10 transition-all duration-300 group-hover:rotate-180">
                      <User className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                    </div>
                  </div>
                </Card>

                {/* Skills/Experience Card */}
                <Card className="p-6 rounded-3xl border-2 border-gray-200 dark:border-gray-700 h-[250px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer group">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-tight transition-colors duration-300">
                        FRONTEND DEVELOPMENT
                        <br />
                        EXPERTISE
                      </h3>
                      <Button size="icon" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 group-hover:scale-110">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div>
                        <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>TECH STACK</span>
                          <span>EXPERIENCE</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-2">
                            {['JS', 'TS', 'R', 'N', '5+'].map((text, index) => (
                              <div
                                key={index}
                                className={`h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:z-10 ${['bg-blue-500', 'bg-cyan-500', 'bg-blue-600', 'bg-black', 'bg-gray-200'][index]
                                  }`}
                              >
                                <span className={`text-xs font-bold ${text === '5+' ? 'text-gray-600 dark:text-gray-300' : 'text-white'
                                  }`}>{text}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-4 border-gray-200 dark:border-gray-700 relative transition-transform duration-300 group-hover:rotate-180">
                              <div className="absolute inset-0 rounded-full border-4 border-green-500 border-r-transparent border-b-transparent transform rotate-45"></div>
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-300">2+</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 mt-auto">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">REACT.JS SPECIALIST</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">15+ PROJECTS</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Contact/Experience Card */}
                <Card className="p-6 rounded-3xl border-2 border-gray-200 dark:border-gray-700 h-[250px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer group">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="text-2xl sm:text-3xl font-bold text-black dark:text-white transition-colors duration-300">2+</span>
                          <div className="flex space-x-1">
                            {[1, 2].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-125" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years of Experience</p>
                      </div>
                      <Button size="icon" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 group-hover:scale-110">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed flex-1 transition-colors duration-300">
                      Currently working as Frontend Developer at ITday, Bangalore. Previously interned at Brotype and worked
                      as Creative Visualizer. Expert in modern web technologies.
                    </p>

                    <div className="flex justify-between items-center pt-2 mt-auto">
                      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">GET IN TOUCH</span>
                      <div className="flex space-x-1">
                        <Button size="icon" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 h-8 w-8 transition-all duration-300 hover:scale-110">
                          <Mail className="h-3 w-3" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 h-8 w-8 transition-all duration-300 hover:scale-110">
                          <Phone className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

              </div>
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
