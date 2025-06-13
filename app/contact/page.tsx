"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page and open contact modal
    // This is a workaround since we're using a modal for contact
    // In a real implementation, you might want to use a more sophisticated approach
    router.push("/?contact=true")
  }, [router])

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-3xl mx-auto py-16 mt-20">
          <h1 className="text-primary text-5xl md:text-6xl mb-8">Contact</h1>

          <div className="prose prose-lg text-primary/80 max-w-none">
            <p>Redirecting to contact form...</p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
