import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

interface NoteCardProps {
  title: string
  description: string
  emoji: string
  bgColor: string
  borderColor: string
  textColor: string
  iconBg: string
  badge?: string
}

function NoteCard({ title, description, emoji, bgColor, borderColor, textColor, iconBg, badge }: NoteCardProps) {
  return (
    <Link
      href="#"
      className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
    >
      <div
        className={`${bgColor} ${borderColor} ${textColor} border rounded-xl p-6 flex justify-between items-start shadow-sm hover:shadow-md transition-all duration-300 group`}
      >
        <div className="flex-1 pr-4">
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-200">{title}</h3>
          <p className="opacity-80 text-sm leading-relaxed">{description}</p>
          {badge && (
            <span className="inline-block mt-3 bg-white/50 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
              {badge}
            </span>
          )}
        </div>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${iconBg}`}
        >
          <span className="text-2xl" role="img" aria-label={title}>
            {emoji}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function NotesPage() {
  const notes = [
    {
      title: "Building accessible React components",
      description:
        "Best practices for creating truly inclusive web experiences with proper ARIA labels, keyboard navigation, and semantic HTML.",
      emoji: "♿",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800/30",
      textColor: "text-teal-900 dark:text-teal-100",
      iconBg: "bg-teal-100 dark:bg-teal-900/40",
    },
    {
      title: "How I leverage AI in my development workflow",
      description:
        "Using AI tools to boost productivity without sacrificing quality - from code generation to debugging and optimization.",
      emoji: "🤖",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800/30",
      textColor: "text-amber-900 dark:text-amber-100",
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
    },
    {
      title: "The value of side projects for frontend developers",
      description: "Why building small projects can lead to big career growth and how to choose projects that matter.",
      emoji: "🔥",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800/30",
      textColor: "text-red-900 dark:text-red-100",
      iconBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
      title: "React component library with Storybook",
      description:
        "A sneak peek at my reusable component system built with React, TypeScript, and comprehensive documentation.",
      emoji: "🔌",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800/30",
      textColor: "text-purple-900 dark:text-purple-100",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      badge: "WIP",
    },
    {
      title: "Modern CSS techniques for better UX",
      description:
        "Exploring CSS Grid, Flexbox, and custom properties to create responsive and maintainable stylesheets.",
      emoji: "🎨",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800/30",
      textColor: "text-blue-900 dark:text-blue-100",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
      title: "Performance optimization strategies",
      description:
        "Techniques for improving web performance including code splitting, lazy loading, and image optimization.",
      emoji: "⚡",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      borderColor: "border-yellow-200 dark:border-yellow-800/30",
      textColor: "text-yellow-900 dark:text-yellow-100",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/40",
    },
    {
      title: "TypeScript best practices for React",
      description:
        "How to leverage TypeScript's type system to build more reliable and maintainable React applications.",
      emoji: "📝",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800/30",
      textColor: "text-indigo-900 dark:text-indigo-100",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
    },
    {
      title: "Design systems and component libraries",
      description: "Building scalable design systems that work across teams and projects with consistent patterns.",
      emoji: "🎯",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      borderColor: "border-pink-200 dark:border-pink-800/30",
      textColor: "text-pink-900 dark:text-pink-100",
      iconBg: "bg-pink-100 dark:bg-pink-900/40",
    },
  ]

  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-foreground text-7xl md:text-8xl mb-8 transition-colors duration-200 font-bold">
              Notes.
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 transition-colors duration-200">
              Thoughts on frontend development, web performance, and accessibility, along with some of my latest
              experiments and works in progress.
            </p>

            <p className="text-muted-foreground text-sm max-w-xl mx-auto transition-colors duration-200">
              A collection of insights, learnings, and discoveries from my journey as a frontend developer.
            </p>
          </div>

          {/* Notes List */}
          <div className="space-y-4">
            {notes.map((note, index) => (
              <NoteCard key={index} {...note} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-muted/30 border border-border rounded-2xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4 transition-colors duration-200">
              Want to discuss these topics?
            </h2>
            <p className="text-muted-foreground mb-6 transition-colors duration-200">
              I'd love to hear your thoughts and experiences on frontend development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
