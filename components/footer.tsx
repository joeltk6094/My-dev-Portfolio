"use client"
import Link from "next/link"
import ThemeSlider from "@/components/theme-slider"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"
import { Github, Linkedin, Twitter, CodesandboxIcon as CodeSandbox } from "lucide-react"
import { CleanGlassPill } from "@/app/page"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <footer className="relative py-16 overflow-hidden bg-background border-t border-border/50">
      {/* Background gradient - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Decorative shapes - theme aware */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <motion.div
          initial={{ opacity: 0, y: 50, rotate: -15 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[120px]"
        >

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent backdrop-blur-[2px] border-2 border-border/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div> */}
         <CleanGlassPill
              delay={0.4}
              width={550}
              height={120}
              rotate={-12}
              color="bg-gradient-to-br from-pink-400/40 via-rose-500/35 to-pink-600/40"
              className="right-[-12%] top-[5%]"
            />
      </div>

      <div className="container relative z-10 mx-auto px-4">
         <CleanGlassPill
              delay={0.6}
              width={520}
              height={110}
              rotate={25}
              color="bg-gradient-to-br from-emerald-400/40 via-teal-500/35 to-emerald-600/40"
              className="left-[-8%] bottom-[8%]"
            />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-muted-foreground text-center md:text-left"
          >
            <p className="tracking-wide">
              © {currentYear} <span className={cn("text-foreground font-medium", pacifico.className)}>Joel</span> •{" "}
              <Link href="/colophon" className="hover:text-foreground transition-colors duration-200">
                Colophon
              </Link>
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className={cn("text-foreground font-medium mb-4 tracking-wide", pacifico.className)}>Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://github.com/joelthomasitday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/joel-thomas-89152a288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/jo_ltk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://codesandbox.io/u/joeltk6094"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              >
                <CodeSandbox size={24} />
                <span className="sr-only">CodeSandbox</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className={cn("text-foreground font-medium mb-4 tracking-wide", pacifico.className)}>Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
                  About
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
                  Play
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/message" className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Theme slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-16"
        >
          <ThemeSlider />
        </motion.div>
      </div>
    </footer>
  )
}