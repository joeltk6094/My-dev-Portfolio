import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  iconBg?: string
  screenshot?: string
  badge?: string
}

function ProjectCard({ title, description, icon, iconBg, screenshot, badge }: ProjectCardProps) {
  return (
    <div className="project-card bg-white/30 backdrop-blur-sm rounded-xl p-8 flex flex-col h-full">
      <div className="flex justify-between mb-4">
        <h3 className="text-primary text-xl font-medium">{title}</h3>
        {screenshot ? (
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={screenshot || "/placeholder.svg"}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBg || "bg-primary"}`}>
            <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
        )}
      </div>

      <p className="text-primary/80 mb-4">{description}</p>

      {badge && (
        <div className="mt-auto">
          <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">{badge}</span>
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
      icon: "/images/play/wire-box-icon.png",
      iconBg: "bg-blue-200",
    },
    {
      title: "DevChat",
      description: "Real-time chat application for developer teams with code snippet sharing.",
      icon: "/images/play/figchat-icon.png",
      iconBg: "bg-gray-900",
    },
    {
      title: "Performance Monitor",
      description: "Track and visualize web performance metrics for your applications.",
      icon: "/images/play/outline-icon.png",
      screenshot: "/images/play/outline-screenshot.png",
    },
    {
      title: "CSS Animation Library",
      description: "Collection of reusable CSS animations for modern web applications.",
      icon: "/images/play/custoji-icon.png",
      iconBg: "bg-yellow-200",
    },
    {
      title: "Theme Builder",
      description: "Create and export custom themes for your web applications with live preview.",
      icon: "/images/play/droplette-icon.png",
      screenshot: "/images/play/droplette-screenshot.png",
    },
    {
      title: "Browser Stats",
      description: "Analyze and visualize browser usage statistics for your web applications.",
      icon: "/images/play/browso-icon.png",
      iconBg: "bg-blue-900",
    },
    {
      title: "A11y Checker",
      description: "Automated accessibility testing tool for web applications.",
      icon: "/images/play/annotator-icon.png",
      badge: "Soon",
    },
  ]

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-5xl mx-auto pt-24 pb-16">
          <div className="relative text-center mb-16">
            <h1 className="text-primary text-7xl md:text-8xl mb-8 inline-block relative">
              Play.
              <div className="absolute -right-12 -top-12">
                <Star className="text-white" fill="white" size={40} />
              </div>
            </h1>

            <p className="text-primary/80 text-lg max-w-2xl mx-auto">
              A collection of side projects, experiments, and open source contributions I&apos;ve created to explore new
              technologies and improve my skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Link href="#" key={index} className="transition-transform hover:-translate-y-1">
                <ProjectCard {...project} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
