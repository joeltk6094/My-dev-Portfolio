import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"

export default function PostsPage() {
  const posts = [
    {
      title: "Designing for Accessibility",
      description: "How to make your designs more accessible for everyone",
      date: "April 2, 2025",
      readTime: "5 min read",
      category: "Design",
    },
    {
      title: "The Future of UI Design",
      description: "Exploring upcoming trends in user interface design",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Trends",
    },
    {
      title: "Crafting User-Centric Experiences",
      description: "Putting users at the center of your design process",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "UX",
    },
  ]

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto py-16 mt-20">
          <h1 className="text-primary text-5xl md:text-6xl mb-8">Posts</h1>

          <div className="grid gap-6">
            {posts.map((post, index) => (
              <Link href="#" key={index}>
                <Card className="bg-white/80 dark:bg-[#0c3d35]/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <CardDescription className="mt-2">{post.description}</CardDescription>
                      </div>
                      <Badge>{post.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
