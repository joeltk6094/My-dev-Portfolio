"use client"

import { useEffect, useState } from "react" // Explicit import for React 17 compatibility
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import ContactModal from "@/components/contact-modal"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute floating-shape", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full shape-inner",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-black/[0.05] dark:border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const searchParams = useSearchParams()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state to trigger animations
    setIsLoaded(true)

    // Check if the contact parameter is present in the URL
    if (searchParams.get("contact") === "true") {
      setContactModalOpen(true)
    }
  }, [searchParams])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <main className="min-h-screen gradient-bg">
      <div className="absolute inset-0 light-mode-overlay pointer-events-none" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-indigo-500/[0.15]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] mb-6 sm:mb-8"
            >
              <span className="text-sm text-gray-600 dark:text-white/60 tracking-wide">Frontend Developer</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/80">
                  Hi. I&apos;m
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-gray-800 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                    pacifico.className,
                  )}
                >
                  Joel.
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl theme-text-muted mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-2 sm:px-4">
                I&apos;m passionate about building performant, accessible, and beautiful web experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Top row of project cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="h-full">
            <ProjectCard title="React" category="FRONTEND" color="bg-[#61dafb]/30" image="/images/ai-project.png" />
          </div>
          <div className="h-full">
            <ProjectCard
              title="TypeScript"
              category="DEVELOPMENT"
              color="bg-[#3178c6]/30"
              image="/images/articles-project.png"
            />
          </div>
        </motion.section>

        {/* Second row of project cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          <div className="h-full">
            <ProjectCard
              title="Next.js"
              category="FRAMEWORK"
              color="bg-[#000000]/10"
              image="/images/plugins-project.png"
            />
          </div>
          <div className="h-full">
            <ProjectCard title="Tailwind" category="CSS" color="bg-[#38bdf8]/30" image="/images/mobile-project.png" />
          </div>
        </motion.section>

        {/* In Progress section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl mb-6 font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/80">
              In Progress
            </span>
            <span className="text-[#0c9]">.</span>
          </h2>
          <p className="theme-text-muted text-lg max-w-2xl mx-auto">
            Projects I&apos;m currently working on, from open source contributions
            <br />
            to experimental web applications and UI components.
          </p>
        </motion.section>

        {/* Bottom row of project cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          <div className="h-full">
            <ProjectCard title="Three.js" category="3D GRAPHICS" color="bg-white" image="/images/doodler-project.png" />
          </div>
          <div className="h-full">
            <ProjectCard
              title="WebGL"
              category="ANIMATIONS"
              color="bg-[#1a1a1a]"
              image="/images/droplette-project.png"
            />
          </div>
        </motion.section>
      </div>

      <Footer />

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </main>
  )
}
