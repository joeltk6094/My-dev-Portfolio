"use client"

import type React from "react" 
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function ThemeSlider() {
  const { setTheme, resolvedTheme } = useTheme()
  const [position, setPosition] = useState(75) 
  const [isDragging, setIsDragging] = useState(false)
  const [mounted, setMounted] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync position with current theme
  useEffect(() => {
    if (mounted && resolvedTheme) {
      console.log("Current theme:", resolvedTheme) // Debug log
      setPosition(resolvedTheme === "dark" ? 25 : 75)
    }
  }, [mounted, resolvedTheme])

  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current || isDragging) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setPosition(newPosition)

    // Immediately set theme based on position
    const newTheme = newPosition < 50 ? "dark" : "light"
    console.log("Setting theme to:", newTheme) // Debug log
    setTheme(newTheme)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(newPosition)
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      // Set theme when dragging stops
      const newTheme = position < 50 ? "dark" : "light"
      console.log("Drag ended, setting theme to:", newTheme) // Debug log
      setTheme(newTheme)
    }
  }

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, position])

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="w-full max-w-md mx-auto my-6">
        <div className="h-14 rounded-full bg-white/5 animate-pulse" />
      </div>
    )
  }

  const isLight = position >= 50

  return (
    <div className="w-full max-w-md mx-auto my-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative"
      >
        <div
          ref={sliderRef}
          className={cn(
            "relative h-14 rounded-full cursor-pointer",
            "bg-gradient-to-r from-indigo-500/20 via-violet-500/10 to-rose-500/20",
            "backdrop-blur-sm border border-white/10",
            "shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]",
          )}
          onClick={handleSliderClick}
        >
          {/* Tick marks */}
         <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 pointer-events-none">
  {Array.from({ length: 21 }).map((_, i) => (
    <div 
      key={i} 
      className={cn(
        "w-px h-4 transition-colors duration-300",
        resolvedTheme === 'dark' 
          ? i > 5 && i < 15 ? "bg-white/30" : "bg-white/15"
          : i > 5 && i < 15 ? "bg-gray-700/50" : "bg-gray-700/30"
      )} 
    />
  ))}
</div>

          {/* Draggable thumb */}
          <motion.div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full",
              "flex items-center justify-center cursor-grab active:cursor-grabbing",
              "bg-gradient-to-br",
              isLight ? "from-amber-500 to-rose-500" : "from-indigo-600 to-violet-700",
              "shadow-[0_0_20px_0_rgba(255,255,255,0.15)]",
              "border border-white/20",
              "transition-all duration-300",
            )}
            style={{
              left: `${position}%`,
            }}
            animate={{
              boxShadow: isLight ? "0 0 25px 0 rgba(244, 63, 94, 0.5)" : "0 0 25px 0 rgba(124, 58, 237, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            onMouseDown={handleMouseDown}
          >
            {isLight ? <Sun className="h-6 w-6 text-white/90" /> : <Moon className="h-6 w-6 text-white/90" />}
          </motion.div>
        </div>

        <div className="mt-4 text-center">
          <span
            className={cn(
              "text-sm tracking-wide transition-colors duration-300",
              isLight ? "text-rose-300/70" : "text-indigo-300/70",
              pacifico.className,
            )}
          >
            {isLight ? "Light Brilliance" : "Dark Elegance"}
          </span>
        </div>
      </motion.div>
    </div>
  )
}
