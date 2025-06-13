import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MessagePage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-3xl mx-auto py-16 mt-20">
          <h1 className="text-primary text-5xl md:text-6xl mb-8">Message</h1>

          <Card className="bg-white/80 dark:bg-[#0c3d35]/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-white dark:bg-[#0a3029]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-white dark:bg-[#0a3029]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" className="bg-white dark:bg-[#0a3029]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={6} className="bg-white dark:bg-[#0a3029]" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Send Message</Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <Footer />
    </main>
  )
}
