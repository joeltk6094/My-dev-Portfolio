import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  FileText,
  Puzzle,
  Smartphone,
  Pencil,
  Palette,
  Zap,
  Code,
  Wand2,
  Lightbulb,
  Shapes,
  Atom,
  Layers,
  Compass,
} from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  color: string
  image: string
}

export default function ProjectCard({ title, category, color, image }: ProjectCardProps) {
  // Function to get the appropriate decorative elements based on the card title
  const getCardDecorations = () => {
    switch (title) {
      case "React":
        return (
          <div className="card-icon-container">
            {/* Top right sparkles */}
            <div className="star-container" style={{ top: "-30px", right: "-20px", left: "auto" }}>
              <div className="star-sparkle"></div>
              <div className="star-sparkle"></div>
              <div className="star-sparkle"></div>
            </div>

            {/* Bottom left zap */}
            <Zap
              className="card-icon card-icon-secondary"
              style={{ bottom: "-20px", left: "20px" }}
              strokeWidth={1.5}
              fill="rgba(97, 218, 251, 0.4)"
            />

            {/* Circle decoration */}
            <div
              className="circle"
              style={{
                bottom: "40px",
                right: "30px",
                background: "rgba(97, 218, 251, 0.3)",
                width: "60px",
                height: "60px",
              }}
            ></div>
          </div>
        )

      case "TypeScript":
        return (
          <div className="card-icon-container">
            {/* Top right file icon */}
            <FileText
              className="card-icon card-icon-primary"
              style={{ top: "-30px", right: "20px" }}
              strokeWidth={1.5}
              fill="rgba(49, 120, 198, 0.4)"
            />

            {/* Bottom left code icon */}
            <Code
              className="card-icon card-icon-secondary"
              style={{ bottom: "-20px", left: "20px" }}
              strokeWidth={1.5}
            />

            {/* Squiggle line */}
            <svg className="squiggle" style={{ bottom: "20px", right: "40px" }} viewBox="0 0 100 100">
              <path d="M10,50 Q30,30 50,50 T90,50" />
            </svg>
          </div>
        )

      case "Next.js":
        return (
          <div className="card-icon-container">
            {/* Top right sparkle effect */}
            <div style={{ position: "absolute", top: "-20px", right: "20px" }}>
              <svg width="80" height="80" viewBox="0 0 100 100" className="card-icon-primary">
                <path
                  d="M50,10 C60,40 90,50 60,60 C90,70 60,90 50,70 C40,90 10,70 40,60 C10,50 40,40 50,10"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Bottom left squiggle */}
            <svg className="squiggle" style={{ bottom: "10px", left: "10px" }} viewBox="0 0 100 100">
              <path d="M10,80 C30,70 40,90 60,80 S80,70 90,80" />
            </svg>

            {/* Puzzle icon */}
            <Puzzle
              className="card-icon card-icon-tertiary"
              style={{ bottom: "40px", right: "30px" }}
              strokeWidth={1.5}
              fill="rgba(0, 0, 0, 0.5)"
            />
          </div>
        )

      case "Tailwind":
        return (
          <div className="card-icon-container">
            {/* Top left smartphone */}
            <Smartphone
              className="card-icon card-icon-primary"
              style={{ top: "-30px", left: "20px" }}
              strokeWidth={1.5}
              fill="rgba(56, 189, 248, 0.4)"
            />

            {/* Bottom right wand */}
            <Wand2
              className="card-icon card-icon-secondary"
              style={{ bottom: "-20px", right: "20px" }}
              strokeWidth={1.5}
            />

            {/* Circle decoration */}
            <div
              className="circle"
              style={{
                top: "40px",
                right: "30px",
                background: "rgba(56, 189, 248, 0.3)",
                width: "30px",
                height: "30px",
              }}
            ></div>
          </div>
        )

      case "Three.js":
        return (
          <div className="card-icon-container">
            {/* Bottom right pencil */}
            <Pencil
              className="card-icon card-icon-primary"
              style={{ bottom: "-30px", right: "20px" }}
              strokeWidth={1.5}
              fill="rgba(229, 231, 235, 0.4)"
            />

            {/* Top left lightbulb */}
            <Lightbulb
              className="card-icon card-icon-secondary"
              style={{ top: "-20px", left: "20px" }}
              strokeWidth={1.5}
              fill="rgba(254, 240, 138, 0.5)"
            />

            {/* Squiggle line */}
            <svg className="squiggle" style={{ top: "40px", right: "40px" }} viewBox="0 0 100 100">
              <path d="M20,20 C40,5 60,35 80,20" />
            </svg>
          </div>
        )

      case "WebGL":
        return (
          <div className="card-icon-container">
            {/* Top right palette */}
            <Palette
              className="card-icon card-icon-primary"
              style={{ top: "-30px", right: "20px" }}
              strokeWidth={1.5}
              fill="rgba(255, 255, 255, 0.2)"
            />

            {/* Bottom left shapes */}
            <Shapes
              className="card-icon card-icon-secondary"
              style={{ bottom: "-20px", left: "20px" }}
              strokeWidth={1.5}
              fill="rgba(255, 255, 255, 0.2)"
            />

            {/* Rotating atom */}
            <Atom className="rotating-icon" style={{ top: "40px", left: "40px" }} strokeWidth={1.5} color="white" />
          </div>
        )

      default:
        return (
          <div className="card-icon-container">
            {/* Top left sparkles */}
            <Sparkles
              className="card-icon card-icon-primary"
              style={{ top: "-30px", left: "20px" }}
              strokeWidth={1.5}
              fill="rgba(254, 240, 138, 0.4)"
            />

            {/* Bottom right layers */}
            <Layers
              className="card-icon card-icon-secondary"
              style={{ bottom: "-20px", right: "20px" }}
              strokeWidth={1.5}
            />

            {/* Middle compass */}
            <Compass
              className="rotating-icon"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              strokeWidth={1.5}
            />
          </div>
        )
    }
  }

  return (
    <Link href="#" className="block group h-full">
      <Card
        className={cn(
          "project-card rounded-3xl overflow-visible border-0 transition-all duration-300 h-full flex flex-col relative",
          color,
          "hover:shadow-lg hover:-translate-y-1",
        )}
      >
        {/* Add the decorative elements for each card */}
        {getCardDecorations()}

        <CardHeader className="p-8 flex flex-col items-end">
          <div className="text-right">
            <CardDescription
              className={`text-sm tracking-wider ${color === "bg-[#1a1a1a]" ? "text-white/70" : "text-primary/70 dark:text-primary/90"}`}
            >
              {category}
            </CardDescription>
            <CardTitle className={color === "bg-[#1a1a1a]" ? "text-white" : "text-primary"}>{title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-grow flex flex-col">
          <div className="mt-2 w-full flex-grow flex flex-col">
            {title === "AI" && (
              <>
                <div className="bg-blue-700 rounded-t-lg p-2">
                  <div className="flex space-x-2">
                    <div className="w-5 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-10 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-b-lg dark:bg-[#f8f8f8] flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow flex flex-col">
                    <div className="h-4 w-3/4 bg-purple-100 rounded-full"></div>
                    <div className="h-4 w-full bg-purple-100 rounded-full"></div>
                    <div className="mt-4 p-4 border border-purple-200 rounded-lg flex-grow flex flex-col">
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-800"
                        >
                          AI Assist ✨
                        </Badge>
                        <div className="text-gray-400 text-sm">make longer</div>
                      </div>
                      <div className="mt-4 space-y-2 flex-grow">
                        <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                        <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                        <div className="h-3 w-3/4 bg-gray-100 rounded-full"></div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <div className="px-4 py-2 bg-purple-100 rounded-md w-20"></div>
                        <div className="px-4 py-2 bg-purple-500 rounded-md w-24"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {title === "Articles" && (
              <>
                <div className="bg-blue-700 rounded-t-lg p-2">
                  <div className="flex space-x-2">
                    <div className="w-5 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-10 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-b-lg dark:bg-[#f8f8f8] flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="w-6 h-6"></div>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="px-4 py-1 dark:border-gray-400 dark:text-gray-700">
                          Preview
                        </Badge>
                        <Badge className="px-4 py-1 bg-blue-500 dark:bg-blue-600">Update</Badge>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-200 dark:text-green-800 w-fit"
                    >
                      Published
                    </Badge>
                    <h3 className="text-xl font-medium mt-2 text-gray-800">Where do you source your materials?</h3>
                    <div className="space-y-2 mt-4 flex-grow">
                      <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-3/4 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {title !== "AI" && title !== "Articles" && (
              <div className="h-48 flex items-center justify-center flex-grow">
                <div className="text-center">
                  {/* This is a placeholder for other project types */}
                  {/* In a real implementation, you would have specific UI for each project type */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl">{title.charAt(0)}</span>
                  </div>
                  <p className={color === "bg-[#1a1a1a]" ? "text-white/80" : "text-gray-600"}>
                    {title} Interface Preview
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
