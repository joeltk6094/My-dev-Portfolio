"use client"
import Link from "next/link"
import ThemeSlider from "@/components/theme-slider"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"
import { Github, Linkedin, Twitter, CodesandboxIcon as CodeSandbox } from "lucide-react"

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
    <footer className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -15 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[120px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 15 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute top-[10%] right-[-5%] w-[300px] h-[80px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/60 text-center md:text-left"
          >
            <p className="tracking-wide">
              © {currentYear} <span className={cn("text-white/80", pacifico.className)}>Joel</span> •{" "}
              <Link href="/colophon" className="hover:text-white/90 transition-colors">
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
            <h3 className={cn("text-white/90 font-medium mb-4 tracking-wide", pacifico.className)}>Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://github.com/joeldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/joeldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/joeldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://codesandbox.io/u/joeldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
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
            <h3 className={cn("text-white/90 font-medium mb-4 tracking-wide", pacifico.className)}>Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  About
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  Play
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/message" className="text-white/60 hover:text-white/90 transition-colors tracking-wide">
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
