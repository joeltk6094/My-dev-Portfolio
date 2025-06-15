import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  emoji: string
  bgColor: string
  borderColor: string
  textColor: string
  iconBg: string
  badge?: string
}

function ProjectCard({ title, description, emoji, bgColor, borderColor, textColor, iconBg, badge }: ProjectCardProps) {
  return (
    <div
      className={`${bgColor} ${borderColor} ${textColor} border rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold transition-colors duration-200 flex-1 pr-4">{title}</h3>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${iconBg}`}
        >
          <span className="text-2xl" role="img" aria-label={title}>
            {emoji}
          </span>
        </div>
      </div>

      <p className="opacity-80 mb-4 transition-colors duration-200 leading-relaxed text-sm">{description}</p>

      {badge && (
        <div className="mt-auto">
          <span className="inline-block bg-white/50 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
            {badge}
          </span>
        </div>
      )}
    </div>
  )
}

export default function PlayPage() {
  const projects = [
    {
      title: "React Component Library",
      description: "A collection of reusable, accessible React components with TypeScript support.",
      emoji: "⚛️",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800/30",
      textColor: "text-blue-900 dark:text-blue-100",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
      title: "DevChat",
      description: "Real-time chat application for developer teams with code snippet sharing.",
      emoji: "💬",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800/30",
      textColor: "text-green-900 dark:text-green-100",
      iconBg: "bg-green-100 dark:bg-green-900/40",
    },
    {
      title: "Performance Monitor",
      description: "Track and visualize web performance metrics for your applications.",
      emoji: "📊",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800/30",
      textColor: "text-purple-900 dark:text-purple-100",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
    },
    {
      title: "CSS Animation Library",
      description: "Collection of reusable CSS animations for modern web applications.",
      emoji: "🎨",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800/30",
      textColor: "text-orange-900 dark:text-orange-100",
      iconBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
      title: "Theme Builder",
      description: "Create and export custom themes for your web applications with live preview.",
      emoji: "🖌️",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      borderColor: "border-pink-200 dark:border-pink-800/30",
      textColor: "text-pink-900 dark:text-pink-100",
      iconBg: "bg-pink-100 dark:bg-pink-900/40",
    },
    {
      title: "Browser Stats",
      description: "Analyze and visualize browser usage statistics for your web applications.",
      emoji: "📈",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800/30",
      textColor: "text-indigo-900 dark:text-indigo-100",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
    },
    {
      title: "A11y Checker",
      description: "Automated accessibility testing tool for web applications.",
      emoji: "🛡️",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800/30",
      textColor: "text-teal-900 dark:text-teal-100",
      iconBg: "bg-teal-100 dark:bg-teal-900/40",
      badge: "Soon",
    },
    {
      title: "Code Playground",
      description: "Interactive code editor with live preview and syntax highlighting.",
      emoji: "🚀",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-200 dark:border-cyan-800/30",
      textColor: "text-cyan-900 dark:text-cyan-100",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
    },
    {
      title: "Design System",
      description: "Comprehensive design system with components and guidelines.",
      emoji: "🎯",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      borderColor: "border-violet-200 dark:border-violet-800/30",
      textColor: "text-violet-900 dark:text-violet-100",
      iconBg: "bg-violet-100 dark:bg-violet-900/40",
    },
  ]

  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-6xl mx-auto pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-foreground text-7xl md:text-8xl mb-8 inline-block relative transition-colors duration-200 font-bold">
              Play.
              <div className="absolute -right-12 -top-12">
                <Star className="text-primary fill-primary transition-colors duration-200" size={40} />
              </div>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 transition-colors duration-200">
              A collection of side projects, experiments, and open source contributions I've created to explore new
              technologies and improve my skills.
            </p>

            <p className="text-muted-foreground text-sm max-w-xl mx-auto transition-colors duration-200">
              Explore my journey through one year of front-end development, from learning fundamentals to building
              complex applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                href="#"
                key={index}
                className="transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
              >
                <ProjectCard {...project} />
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-muted/30 border border-border rounded-2xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4 transition-colors duration-200">
              Want to see more?
            </h2>
            <p className="text-muted-foreground mb-6 transition-colors duration-200">
              Check out my GitHub for more projects and contributions.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View GitHub</span>
              <Star size={16} className="fill-current" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
