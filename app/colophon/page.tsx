import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ColophonPage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <section className="max-w-3xl mx-auto py-16 mt-20">
          <h1 className="text-primary text-5xl md:text-6xl mb-8">Colophon</h1>

          <div className="prose prose-lg text-primary/80 max-w-none">
            <p>This website was designed and built by Joel. It uses the following technologies:</p>

            <ul>
              <li>React 17 for the UI components</li>
              <li>Next.js 13.5 for the framework</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Framer Motion for animations</li>
              <li>Deployed on Vercel</li>
            </ul>

            <p>
              The site is fully responsive and accessible, with a focus on performance and user experience. The design
              is inspired by modern, minimalist aesthetics with a touch of playfulness.
            </p>

            <p>
              All code is written with a focus on maintainability and follows best practices for React and TypeScript
              development. The project structure is organized to be scalable and easy to navigate.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Dependencies</h2>
            <p>
              This project uses React 17 as a peer dependency to ensure maximum compatibility with all other libraries
              and components. The source code is structured to work seamlessly with this version while maintaining
              modern development practices.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
