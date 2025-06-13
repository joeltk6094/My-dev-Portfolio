import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

interface NoteCardProps {
  title: string
  description: string
  icon: string
  iconBg?: string
}

function NoteCard({ title, description, icon, iconBg }: NoteCardProps) {
  return (
    <Link href="#" className="block transition-transform hover:-translate-y-1">
      <div className="note-card bg-white/30 backdrop-blur-sm rounded-xl p-8 flex justify-between items-start mb-6">
        <div className="pr-4">
          <h3 className="text-primary text-xl font-medium mb-2">{title}</h3>
          <p className="text-primary/80">{description}</p>
        </div>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBg || "bg-primary"} flex-shrink-0`}
        >
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
    </Link>
  )
}

export default function NotesPage() {
  const notes = [
    {
      title: "Building accessible React components",
      description: "Best practices for creating truly inclusive web experiences",
      icon: "/images/notes/css-icon.png",
      iconBg: "bg-teal-700",
    },
    {
      title: "How I leverage AI in my development workflow",
      description: "Using AI tools to boost productivity without sacrificing quality",
      icon: "/images/notes/ai-icon.png",
      iconBg: "bg-amber-800",
    },
    {
      title: "The value of side projects for frontend developers",
      description: "Why building small projects can lead to big career growth",
      icon: "/images/notes/fire-icon.png",
      iconBg: "bg-red-900",
    },
    {
      title: "WIP: React component library with Storybook",
      description: "A sneak peek at my reusable component system built with React and TypeScript",
      icon: "/images/notes/plugin-icon.png",
      iconBg: "bg-purple-800",
    },
  ]

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto pt-24 pb-16">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-primary text-5xl sm:text-7xl md:text-8xl mb-6 sm:mb-8">Notes.</h1>

            <p className="text-primary/80 text-base sm:text-lg max-w-2xl mx-auto">
              Thoughts on frontend development, web performance, and accessibility,
              <br className="hidden sm:block" />
              along with some of my latest experiments and works in progress.
            </p>
          </div>

          <div className="mt-16">
            {notes.map((note, index) => (
              <NoteCard key={index} {...note} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
