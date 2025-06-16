import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useState } from "react"
import Image from 'next/image'

const projects = [
    {
        id: 1,
        title: "Oxyzen",
        description: "Employee Engagement Platform",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
        borderColor: "border-pink-200 dark:border-pink-800/30",
        textColor: "text-pink-900 dark:text-pink-100",
        iconBg: "bg-pink-100 dark:bg-pink-900/40",
        iconColor: "bg-pink-500 dark:bg-pink-400",
    },
    {
        id: 2,
        title: "AntMascot",
        description: "B2B Ecosystem Redesign",
        bgColor: "bg-blue-50 dark:bg-blue-950/20",
        borderColor: "border-blue-200 dark:border-blue-800/30",
        textColor: "text-blue-900 dark:text-blue-100",
        iconBg: "bg-blue-100 dark:bg-blue-900/40",
        iconColor: "bg-blue-500 dark:bg-blue-400",
    },
    {
        id: 3,
        title: "PlotIt.org",
        description: "Educational Platform",
        bgColor: "bg-purple-50 dark:bg-purple-950/20",
        borderColor: "border-purple-200 dark:border-purple-800/30",
        textColor: "text-purple-900 dark:text-purple-100",
        iconBg: "bg-purple-100 dark:bg-purple-900/40",
        iconColor: "bg-purple-500 dark:bg-purple-400",
    },
    {
        id: 4,
        title: "Loopster",
        description: "Music Streaming App",
        bgColor: "bg-orange-50 dark:bg-orange-950/20",
        borderColor: "border-orange-200 dark:border-orange-800/30",
        textColor: "text-orange-900 dark:text-orange-100",
        iconBg: "bg-orange-100 dark:bg-orange-900/40",
        iconColor: "bg-orange-500 dark:bg-orange-400",
    },
    {
        id: 5,
        title: "Portfolio",
        description: "Personal Website",
        bgColor: "bg-teal-50 dark:bg-teal-950/20",
        borderColor: "border-teal-200 dark:border-teal-800/30",
        textColor: "text-teal-900 dark:text-teal-100",
        iconBg: "bg-teal-100 dark:bg-teal-900/40",
        iconColor: "bg-teal-500 dark:bg-teal-400",
    },
    {
        id: 6,
        title: "Learning",
        description: "Continuous Growth",
        bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
        borderColor: "border-indigo-200 dark:border-indigo-800/30",
        textColor: "text-indigo-900 dark:text-indigo-100",
        iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
        iconColor: "bg-indigo-500 dark:bg-indigo-400",
    },
]
const CircularIcon = ({
    iconBg,
    iconColor,
    size = "large",
}: { iconBg: string; iconColor: string; size?: "small" | "medium" | "large" }) => {
    const sizeClasses = {
        small: { container: "w-10 h-10", inner: "w-5 h-5" },
        medium: { container: "w-12 h-12", inner: "w-6 h-6" },
        large: { container: "w-16 h-16", inner: "w-8 h-8" },
    }

    const { container, inner } = sizeClasses[size]

    return (
        <div
            className={`${container} rounded-full ${iconBg} flex items-center justify-center flex-shrink-0 transition-colors duration-200`}
        >
            <div className={`${inner} rounded-full ${iconColor} transition-colors duration-200`}></div>
        </div>
    )
}


export default function Content() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)
    return (
        <section className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-foreground mb-4">How it works</h2>
                    <p className="text-xl text-muted-foreground">Progress and peace of mind in four simple steps.</p>
                </div>

                {/* Timeline Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Step 1 - Today */}
                    <div className="bg-rose-100 dark:bg-rose-900/20 rounded-3xl p-8 h-80 flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-rose-200 dark:hover:bg-rose-900/30 cursor-pointer border border-rose-200 dark:border-rose-800">
                        <div className="mb-6">
                            <p className="text-muted-foreground text-lg mb-2">Discovery</p>
                            <h3 className="text-3xl font-bold text-foreground leading-tight">Understanding Your Vision</h3>
                        </div>
                        <div className="flex-1 flex items-end">
                            <p className="text-muted-foreground text-base leading-relaxed">
                                We start by discussing your project requirements, target audience, and business goals to create a clear
                                roadmap for development.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 - First week */}
                    <div className="bg-blue-100 dark:bg-blue-900/20 rounded-3xl p-8 h-80 flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-200 dark:hover:bg-blue-900/30 cursor-pointer border border-blue-200 dark:border-blue-800">
                        <div className="mb-6">
                            <p className="text-muted-foreground text-lg mb-2">Design</p>
                            <h3 className="text-3xl font-bold text-foreground leading-tight">Crafting User Experience</h3>
                        </div>
                        <div className="flex-1 flex items-end">
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Creating wireframes and prototypes using Figma, focusing on intuitive user interfaces and responsive
                                design principles.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 - First month */}
                    <div className="bg-purple-100 dark:bg-purple-900/20 rounded-3xl p-8 h-80 flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-purple-200 dark:hover:bg-purple-900/30 cursor-pointer border border-purple-200 dark:border-purple-800">
                        <div className="mb-6">
                            <p className="text-muted-foreground text-lg mb-2">Development</p>
                            <h3 className="text-3xl font-bold text-foreground leading-tight">Building with Modern Tech</h3>
                        </div>
                        <div className="flex-1 flex items-end">
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Developing with React.js, Next.js, and TypeScript, implementing clean code practices and ensuring
                                optimal performance.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 - Ongoing */}
                    <div className="bg-green-100 dark:bg-green-900/20 rounded-3xl p-8 h-80 flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-green-200 dark:hover:bg-green-900/30 cursor-pointer border border-green-200 dark:border-green-800">
                        <div className="mb-6">
                            <p className="text-muted-foreground text-lg mb-2">Deployment</p>
                            <h3 className="text-3xl font-bold text-foreground leading-tight">Launch & Optimize</h3>
                        </div>
                        <div className="flex-1 flex items-end">
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Deploying to production using Vercel, implementing analytics, and providing ongoing support and
                                optimization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Membership Section */}
                <div className="mt-24">
                    {/* Header with Get Started button */}
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-12 px-4 sm:px-8">
                        <div className="text-center sm:text-left flex-1">
                            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                                Front-end development that brings
                                <br />
                                ideas to life.
                            </h2>
                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto sm:mx-0">
                                With one year of dedicated front-end development experience, I create modern, responsive web
                                applications using the latest technologies and best practices.
                            </p>
                        </div>
                    </div>

                    {/* Cards section */}
                    <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-8">
                        {/* Left Card */}
                        <div className="bg-orange-100 dark:bg-orange-900/20 rounded-3xl p-8 h-96 sm:h-auto flex flex-col justify-end relative overflow-hidden transition-all duration-500 ease-in-out flex-1 hover:flex-[1.6] peer cursor-pointer border border-orange-200 dark:border-orange-800 hover:shadow-xl dark:hover:shadow-orange-900/20">
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="great-sky-with-clouds.jpg"
                                    alt="Professional developer workspace"
                                    width={900}
                                    height={900}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="relative z-10 text-white">
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                                    Your development
                                    <br />
                                    partner
                                </h3>
                                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 mt-4">
                                    <button className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-accent transition-colors">
                                        View Portfolio
                                    </button>
                                    <p className="text-sm leading-relaxed text-black dark:text-white">
                                        One year of focused front-end development
                                        <br />
                                        experience with modern frameworks and
                                        <br />
                                        best practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="bg-teal-100 dark:bg-teal-900/20 rounded-3xl p-8 h-96 sm:h-auto flex flex-col justify-end relative overflow-hidden transition-all duration-500 ease-in-out flex-1 hover:flex-[1.6] peer-hover:flex-[0.8] cursor-pointer border border-teal-200 dark:border-teal-800 hover:shadow-xl dark:hover:shadow-teal-900/20">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Tech Stack Mockup */}
                                    <div className="bg-card rounded-2xl p-4 shadow-lg mb-4 w-64 sm:w-80 border border-border">
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between bg-muted rounded-lg p-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                                                    <span className="text-sm text-foreground">React.js</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between bg-purple-100 dark:bg-purple-900/20 rounded-lg p-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-purple-500 rounded"></div>
                                                    <span className="text-sm text-foreground">Next.js</span>
                                                </div>
                                                <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                                    Expert
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between bg-blue-100 dark:bg-blue-900/20 rounded-lg p-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                                                    <span className="text-sm text-foreground">TypeScript</span>
                                                </div>
                                                <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                                    Advanced
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between bg-teal-100 dark:bg-teal-900/20 rounded-lg p-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-teal-500 rounded"></div>
                                                    <span className="text-sm text-foreground">Tailwind CSS</span>
                                                </div>
                                                <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                                    Expert
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between bg-orange-100 dark:bg-orange-900/20 rounded-lg p-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                                                    <span className="text-sm text-foreground">Figma</span>
                                                </div>
                                                <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                                    Proficient
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Code Editor */}
                                    <div className="absolute -right-8 -bottom-4 w-48 h-30 bg-gray-900 dark:bg-gray-800 rounded-xl p-4 text-green-400 transform rotate-12 shadow-lg font-mono text-xs">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="text-gray-400">VS Code</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div>{'<div className="...">'}</div>
                                            <div className="ml-2">{"<h1>Hello World</h1>"}</div>
                                            <div>{"</div>"}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 text-white">
                                <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                                    Modern tech
                                    <br />
                                    stack
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Guides Section */}
                <div className="mt-24">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-foreground mb-4">Projects that showcase growth</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Explore my journey through one year of front-end development, from learning fundamentals to building
                            complex applications.
                        </p>
                        <div className="flex gap-4 justify-center mb-12">
                            <button className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
                                View Projects
                            </button>
                            <button className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors">
                                Tech Stack
                            </button>
                        </div>
                    </div>

                    {/* Organic Card Layout */}
                    <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 transition-colors duration-200">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors duration-200">
                                Projects that showcase growth
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-200">
                                Explore my journey through one year of front-end development, from learning fundamentals to building complex
                                applications.
                            </p>
                        </div>

                        {/* Mobile Layout - Stacked Cards */}
                        <div className="block sm:hidden">
                            <div className="space-y-4">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <div
                                            className={`w-full h-32 rounded-2xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-black/20 dark:hover:shadow-black/40 transition-all duration-300 ease-out group-active:scale-95 cursor-pointer border ${project.borderColor} ${project.bgColor} flex items-center justify-between p-6`}
                                        >
                                            <div className={`${project.textColor} flex-1 transition-colors duration-200`}>
                                                <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                                                <p className="text-sm opacity-80">{project.description}</p>
                                            </div>
                                            <CircularIcon iconBg={project.iconBg} iconColor={project.iconColor} size="medium" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tablet Layout - Grid */}
                        <div className="hidden sm:block lg:hidden">
                            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <div
                                            className={`w-full h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-black/20 dark:hover:shadow-black/40 transition-all duration-500 ease-out group-hover:scale-105 cursor-pointer border ${project.borderColor} ${project.bgColor} flex flex-col items-center justify-center p-6 text-center ${index % 2 === 0 ? "rotate-[-1deg] group-hover:rotate-0" : "rotate-[1deg] group-hover:rotate-0"}`}
                                        >
                                            <div className="mb-4">
                                                <CircularIcon iconBg={project.iconBg} iconColor={project.iconColor} size="large" />
                                            </div>
                                            <div className={`${project.textColor} transition-colors duration-200`}>
                                                <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                                                <p className="text-sm opacity-80">{project.description}</p>
                                            </div>
                                        </div>

                                        {/* Tooltip */}
                                        <div
                                            className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === project.id ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                        >
                                            <span className="text-sm font-medium text-popover-foreground">View {project.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Layout - Scattered Cards */}
                        <div className="hidden lg:block">
                            <div className="relative h-96 max-w-6xl mx-auto">
                                {/* Project 1 - Oxyzen */}
                                <div
                                    className="group absolute top-8 left-8 transform rotate-[-4deg]"
                                    onMouseEnter={() => setHoveredProject(1)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[0].borderColor} ${projects[0].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[0].iconBg} iconColor={projects[0].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[0].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">Oxyzen</h4>
                                            <p className="text-sm opacity-80">Employee Engagement Platform</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 1 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View Oxyzen Project</span>
                                    </div>
                                </div>

                                {/* Project 2 - AntMascot */}
                                <div
                                    className="group absolute top-4 left-[14rem] transform rotate-[2deg]"
                                    onMouseEnter={() => setHoveredProject(2)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[1].borderColor} ${projects[1].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[1].iconBg} iconColor={projects[1].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[1].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">AntMascot</h4>
                                            <p className="text-sm opacity-80">B2B Ecosystem Redesign</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 2 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View AntMascot Project</span>
                                    </div>
                                </div>

                                {/* Project 3 - PlotIt */}
                                <div
                                    className="group absolute top-12 right-[31rem] transform rotate-[-3deg]"
                                    onMouseEnter={() => setHoveredProject(3)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[2].borderColor} ${projects[2].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[2].iconBg} iconColor={projects[2].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[2].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">PlotIt.org</h4>
                                            <p className="text-sm opacity-80">Educational Platform</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 3 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View PlotIt Project</span>
                                    </div>
                                </div>

                                {/* Project 4 - Loopster */}
                                <div
                                    className="group absolute top-6 right-[17rem] transform rotate-[4deg]"
                                    onMouseEnter={() => setHoveredProject(4)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[3].borderColor} ${projects[3].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[3].iconBg} iconColor={projects[3].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[3].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">Loopster</h4>
                                            <p className="text-sm opacity-80">Music Streaming App</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 4 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View Loopster Project</span>
                                    </div>
                                </div>

                                {/* Project 5 - Portfolio */}
                                <div
                                    className="group absolute top-16 right-8 transform rotate-[-2deg]"
                                    onMouseEnter={() => setHoveredProject(5)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[4].borderColor} ${projects[4].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[4].iconBg} iconColor={projects[4].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[4].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">Portfolio</h4>
                                            <p className="text-sm opacity-80">Personal Website</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 5 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View Portfolio Project</span>
                                    </div>
                                </div>

                                {/* Project 6 - Learning Journey */}
                                {/* <div
                                    className="group absolute bottom-8 left-1/2 transform -translate-x-1/2 rotate-[1deg]"
                                    onMouseEnter={() => setHoveredProject(6)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <div
                                        className={`w-52 h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-4 cursor-pointer relative z-10 group-hover:z-50 border ${projects[5].borderColor} ${projects[5].bgColor} flex flex-col items-center justify-center p-6 text-center`}
                                    >
                                        <div className="mb-4">
                                            <CircularIcon iconBg={projects[5].iconBg} iconColor={projects[5].iconColor} size="large" />
                                        </div>
                                        <div className={`${projects[5].textColor} transition-colors duration-200`}>
                                            <h4 className="font-semibold text-lg mb-2">Learning</h4>
                                            <p className="text-sm opacity-80">Continuous Growth</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border px-3 py-2 rounded-xl shadow-lg dark:shadow-black/40 transition-all duration-300 ease-out z-50 whitespace-nowrap ${hoveredProject === 6 ? "opacity-100 -translate-y-2" : "opacity-0"}`}
                                    >
                                        <span className="text-sm font-medium text-popover-foreground">View Learning Journey</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Decorative illustrations */}
                        <div className="absolute -left-32 top-0 hidden xl:block opacity-20 dark:opacity-10">
                            <svg width="120" height="120" viewBox="0 0 120 120" className="text-muted-foreground">
                                <path d="M20 80 L40 60 L60 80 L80 60 L100 80" stroke="currentColor" strokeWidth="2" fill="none" />
                                <circle cx="30" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M50 20 Q60 30 70 20 Q80 30 90 20" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        <div className="absolute -right-32 bottom-0 hidden xl:block opacity-20 dark:opacity-10">
                            <svg width="120" height="120" viewBox="0 0 120 120" className="text-muted-foreground">
                                <path d="M20 40 Q40 20 60 40 Q80 60 100 40" stroke="currentColor" strokeWidth="2" fill="none" />
                                <circle cx="60" cy="80" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M40 100 L50 90 L60 100 L70 90 L80 100" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4 rounded-lg overflow-hidden">
                            <AccordionItem
                                value="item-1"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    What is your experience level in front-end development?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    I have one year of dedicated front-end development experience, starting as an intern at Brotype in
                                    September 2023 and currently working as a Front-End Developer at ITday since June 2024. During this
                                    time, I've built multiple projects using React.js, Next.js, TypeScript, and modern development tools.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-2"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    What technologies do you specialize in?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    I specialize in React.js, Next.js, TypeScript, JavaScript, HTML, and CSS. I'm proficient with modern
                                    frameworks like Tailwind CSS, and have experience with state management using Redux Toolkit and
                                    Zustand. I also work with design tools like Figma and have knowledge of UI/UX design principles.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-3"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    What types of projects have you worked on?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    I've developed a variety of projects including an employee engagement platform (Oxyzen), a B2B
                                    ecosystem redesign (AntMascot), an educational platform (PlotIt.org), and a music streaming
                                    application (Loopster). These projects showcase my ability to work with different domains and
                                    implement complex features like API integrations, responsive design, and interactive user interfaces.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-4"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    How do you approach new projects?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    I follow a structured approach: first understanding the requirements and target audience, then
                                    creating wireframes and prototypes in Figma, followed by development using modern frameworks with
                                    clean code practices. I prioritize responsive design, performance optimization, and user experience
                                    throughout the development process.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-5"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    What makes you different as a developer?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    My background in Visual Arts gives me a unique perspective on design and user experience. I combine
                                    technical skills with creative problem-solving, ensuring that applications are not only functional but
                                    also visually appealing and user-friendly. I'm committed to continuous learning and staying updated
                                    with the latest industry trends and best practices.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-6"
                                className="border border-border rounded-3xl px-6 bg-card hover:bg-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                    Are you available for new projects?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    Yes, I'm always interested in challenging projects that allow me to grow and contribute meaningfully.
                                    Whether it's a startup looking for a dedicated front-end developer or an established company needing
                                    modern web solutions, I'm open to discussing opportunities that align with my skills and career goals.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    )
}
