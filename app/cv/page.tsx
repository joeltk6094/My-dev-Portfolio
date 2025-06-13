import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function CVPage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-4xl mx-auto py-16 mt-20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-primary text-5xl md:text-6xl">CV</h1>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <Card className="bg-white/80 dark:bg-[#0c3d35]/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Joel</CardTitle>
              <CardDescription>Frontend Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm a frontend developer specializing in building high-performance, accessible web applications with
                modern JavaScript frameworks.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Accessibility</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-[#0c3d35]/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Senior Frontend Developer</h3>
                    <p className="text-muted-foreground">TechCorp</p>
                  </div>
                  <Badge variant="outline">2022 - Present</Badge>
                </div>
                <p className="text-sm">
                  Led development of the company's flagship React application, improving performance by 40% and
                  implementing a comprehensive component library.
                </p>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Frontend Developer</h3>
                    <p className="text-muted-foreground">WebSolutions</p>
                  </div>
                  <Badge variant="outline">2019 - 2022</Badge>
                </div>
                <p className="text-sm">
                  Developed responsive web applications for clients across various industries using React, TypeScript,
                  and modern CSS frameworks.
                </p>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Junior Developer</h3>
                    <p className="text-muted-foreground">CodeCraft</p>
                  </div>
                  <Badge variant="outline">2017 - 2019</Badge>
                </div>
                <p className="text-sm">
                  Built and maintained client websites, focusing on responsive design and cross-browser compatibility.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-[#0c3d35]/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                    <p className="text-muted-foreground">University of Washington</p>
                  </div>
                  <Badge variant="outline">2013 - 2017</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Frontend Development Certification</h3>
                    <p className="text-muted-foreground">Frontend Masters</p>
                  </div>
                  <Badge variant="outline">2018</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </main>
  )
}
