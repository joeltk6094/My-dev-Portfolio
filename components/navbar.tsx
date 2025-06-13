"use client"

import { useEffect, useState } from "react" // Explicit import for React 17 compatibility
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import ContactModal from "@/components/contact-modal"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Work", href: "/" },
    { name: "About", href: "/about" },
    { name: "Play", href: "/play" },
    { name: "Notes", href: "/notes" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className={cn(
            "flex justify-between items-center py-3 px-6 rounded-full transition-all duration-300 w-full max-w-md",
            scrolled ? "navbar-bg backdrop-blur-sm" : "bg-transparent",
          )}
        >
          {/* Mobile menu button */}
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href

              // Add slash after Work
              if (index === 0) {
                return (
                  <div key={item.name} className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 navbar-text hover:navbar-text transition-colors tracking-wide",
                        isActive && "font-medium",
                      )}
                    >
                      {item.name}
                    </Link>
                    <span className="text-gray-400 dark:text-white/40 mx-1">/</span>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 navbar-text hover:navbar-text transition-colors tracking-wide",
                    isActive && "font-medium",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}

            <button
              onClick={() => setContactModalOpen(true)}
              className={cn(
                "px-4 py-2 navbar-text hover:navbar-text transition-colors tracking-wide",
                pathname === "/contact" && "font-medium",
              )}
            >
              Contact
            </button>
          </div>

          {/* Mobile logo/title */}
          <div className="md:hidden flex-1 text-center">
            <span className="font-medium text-primary">Joel</span>
          </div>

          {/* Empty div for spacing on mobile */}
          <div className="md:hidden w-6"></div>
        </motion.nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-4 text-white text-xl hover:text-white/80 transition-colors tracking-wide",
                    isActive && "font-medium",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                setContactModalOpen(true)
              }}
              className="px-4 py-4 text-white text-xl hover:text-white/80 transition-colors tracking-wide"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}
