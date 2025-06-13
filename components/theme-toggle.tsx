"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-[#4c9c8a]" : "bg-primary"}`}
        >
          <Sun className="h-5 w-5 text-white absolute transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
          <Moon className="h-5 w-5 text-white absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-[#0c4035] dark:border-[#1a5a4c]">
        <DropdownMenuItem onClick={() => setTheme("light")} className="dark:text-white dark:focus:bg-[#1a5a4c]">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="dark:text-white dark:focus:bg-[#1a5a4c]">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="dark:text-white dark:focus:bg-[#1a5a4c]">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
