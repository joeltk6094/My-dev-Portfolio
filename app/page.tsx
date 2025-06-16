"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion, type Variants } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import ContactModal from "@/components/contact-modal"
import { Code, Database, Globe, Palette, Box, Zap } from "lucide-react"
import Content from "@/components/content"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})
type CubicBezier = [number, number, number, number]

export function CleanGlassPill({
  className,
  delay = 0,
  width = 400,
  height = 120,
  rotate = 0,
  color,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  color: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotate - 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotate,
      }}
      transition={{
        duration: 3,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [rotate, rotate + 4, rotate],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        {/* Main glass pill body */}
        <div
          style={{
            width,
            height,
            backdropFilter: "blur(15px) saturate(150%)",
            boxShadow: `
              0 15px 35px rgba(0, 0, 0, 0.1),
              0 5px 15px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.6)
            `,
          }}
          className={cn("rounded-full relative overflow-hidden", color)}
        >
          {/* Soft top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-full" />

          {/* Gentle side glow */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white/30 rounded-full blur-[2px]" />
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-white/30 rounded-full blur-[2px]" />

          {/* Floating light particles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay,
            }}
            className="absolute top-1/3 left-1/3 w-3 h-3 bg-white/40 rounded-full blur-sm"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: delay + 1,
            }}
            className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full blur-sm"
          />
        </div>

        {/* Soft outer glow */}
        <div
          style={{
            width: width + 20,
            height: height + 20,
            left: -10,
            top: -10,
          }}
          className={cn("absolute rounded-full opacity-20 blur-2xl -z-10", color.replace("/40", "/30"))}
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
    setIsLoaded(true)

    if (searchParams.get("contact") === "true") {
      setContactModalOpen(true)
    }
  }, [searchParams])

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as CubicBezier,
      },
    }),
  }
  const { setTheme, resolvedTheme } = useTheme()


  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full relative z-10">
          <div className="absolute inset-0 z-0">
    <Image 
      src="great-sky-with-clouds.jpg" 
      alt="Hero background" 
      fill 
      className="object-cover object-center opacity-30"
      priority
    />
  </div>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
          <div className="absolute inset-0 overflow-hidden">
            {/* Clean blue pill - top left */}
            <CleanGlassPill
              delay={0.2}
              width={600}
              height={140}
              rotate={15}
              color="bg-gradient-to-br from-blue-400/40 via-cyan-500/35 to-blue-600/40"
              className="left-[-15%] top-[10%]"
            />

            {/* Clean pink pill - top right */}
            <CleanGlassPill
              delay={0.4}
              width={550}
              height={120}
              rotate={-12}
              color="bg-gradient-to-br from-pink-400/40 via-rose-500/35 to-pink-600/40"
              className="right-[-12%] top-[5%]"
            />

            {/* Clean purple pill - bottom right */}
            <CleanGlassPill
              delay={0.3}
              width={580}
              height={130}
              rotate={-18}
              color="bg-gradient-to-br from-purple-400/40 via-violet-500/35 to-purple-600/40"
              className="right-[-10%] bottom-[15%]"
            />

            {/* Clean green pill - bottom left */}
            <CleanGlassPill
              delay={0.6}
              width={520}
              height={110}
              rotate={25}
              color="bg-gradient-to-br from-emerald-400/40 via-teal-500/35 to-emerald-600/40"
              className="left-[-8%] bottom-[8%]"
            />

            {/* Clean cyan pill - top center */}
            <CleanGlassPill
              delay={0.5}
              width={400}
              height={90}
              rotate={-25}
              color="bg-gradient-to-br from-cyan-400/40 via-sky-500/35 to-cyan-600/40"
              className="left-[20%] top-[3%]"
            />

            {/* Clean orange pill - middle right */}
            <CleanGlassPill
              delay={0.7}
              width={420}
              height={85}
              rotate={30}
              color="bg-gradient-to-br from-orange-400/40 via-amber-500/35 to-orange-600/40"
              className="right-[10%] top-[42%]"
            />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-6 ">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 sm:mb-8 shadow-lg backdrop-blur-sm cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
              }}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 tracking-wide whitespace-nowrap flex items-center gap-2">
                {/* <Code className={
                  `w-4 h-4 transition-transform duration-300 ${resolvedTheme === 'dark' ? 'text-purple-300' : 'text-amber-500'
                  } ${resolvedTheme === 'dark' ? 'rotate-0' : '-rotate-12'
                  }`
                } /> */}
                Frontend Developer
                <motion.span
                  className="w-2 h-2 rounded-full ml-1"
                  animate={{
                    backgroundColor: resolvedTheme === 'dark' ? '#818cf8' : '#f59e0b'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </span>

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-full" />
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
                <span className="text-foreground transition-colors duration-300">Hi. I&apos;m</span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent transition-all duration-500",
                    "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
                    "dark:from-blue-400 dark:via-purple-400 dark:to-pink-400",
                    "animate-gradient-x bg-300%",
                    pacifico.className,
                  )}
                  style={{
                    backgroundSize: "300% 300%",
                    animation: "gradient-x 8s ease infinite",
                  }}
                >
                  Joel.
                </span>
              </h1>

              <style jsx>{`
    @keyframes gradient-x {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
  `}</style>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-2 sm:px-4">
                I&apos;m passionate about building performant, accessible, and beautiful web experiences.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
      <Content />

      <Footer />

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </main>
  )
}
