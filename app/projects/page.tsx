"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TerminalNav from "@/components/terminal-nav"
import MatrixBackground from "@/components/matrix-background"
import { Atom, Code, Globe, Calendar, ExternalLink, Beaker, Database } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: "tert-research",
    title: "Virtual Screening for Novel TERT Modulators",
    category: "Research",
    date: "Summer 2025",
    organization: "Teens In Health",
    icon: Atom,
    description:
      "Designed an innovative dual-target therapeutic strategy to safely modulate TERT in post-mitotic cells. Processed and analyzed large datasets (20,000+ compounds) through molecular filtering, ADMET prediction, and GPU-accelerated molecular docking.",
    technologies: [
      "Python",
      "PyMOL",
      "OpenBabel",
      "RDKit",
      "SwissADME",
      "ADMETlab",
      "AutoDockTools",
      "PrankWeb/P2Rank",
    ],
    achievements: [
      "Identified 20 lead compounds for future in vitro testing",
      "Developed tissue-specific pharmacokinetics analysis",
      "Created an automated and scalable molecular filtering pipeline",
      "Wrote 15 page research paper (available in view more)",
    ],
    status: "Completed",
    color: "from-purple-500 to-pink-500",
    image: "/tert-protein.png",
  },
  {
    id: "asksamie-intern",
    title: "Data & Automation Internship",
    category: "Professional",
    date: "Summer 2025",
    organization: "AskSAMIE",
    icon: Database,
    description:
      "Developed Tools for automated data collection and pipeline optimization. Led research on 3rd party scraping solutions including technical evaluation and stakeholder communication.",
    technologies: ["Python", "JavaScript", "Web Scraping", "ScrapingBee", "Notion", "Docker"],
    achievements: [
      "Built a scalable tracking system for 500+ products",
      "Built a scalable competition identifier and tracker",
      "Fully automated e-commerce analysis reports",
      "Saved an estimated 25+ hours of labor per month through automation",
    ],
    status: "Completed",
    color: "from-blue-500 to-cyan-500",
    image: "/asksamie-logo.png",
  },
  {
    id: "building-u-intern",
    title: "Website Design Internship",
    category: "Professional",
    date: "Spring 2025",
    organization: "Building-U",
    icon: Globe,
    description:
      "Assisted in the development of new web pages, along with adapting old web pages to use newer technologies such as Bootstrap and ReactJS. Gained hands-on experience in modern web development practices.",
    technologies: ["ReactJS", "Bootstrap", "HTML/CSS", "JavaScript", "Responsive Design"],
    achievements: [
      "Modernized legacy web pages",
      "Debugged code from previous interns",
      "Collaborated with senior developers",
      'Tackled the "Hardest web page to transfer"',
    ],
    status: "Completed",
    color: "from-green-500 to-teal-500",
    image: "/building-u-logo.png",
  },
]

const categories = ["All", "Research", "Professional", "Personal Project"]
const statuses = ["All", "Completed", "In Progress", "Planning"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const statusMatch = selectedStatus === "All" || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const handleViewMore = (projectId: string) => {
    if (projectId === "tert-research") {
      // Open the Google Docs link in a new tab
      window.open(
        "https://docs.google.com/document/d/e/2PACX-1vQtZel7IFZiR_tqdku5IIGSw0o5U0oKEYPoJbKNe4CkRcEB3FlaQ-vB9tlDahgPOnGPsKxNBRdhH_Z_/pub",
        "_blank",
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />
      <TerminalNav />

      <main className="pt-16">
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-16 xl:py-20">
          {/* Terminal Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="font-mono text-primary mb-2 text-xs sm:text-sm lg:text-base">
              <span className="text-muted-foreground">tyce@portfolio:~$</span> git log --oneline
            </div>
            <div className="h-px bg-gradient-to-r from-primary to-transparent mb-6 sm:mb-8"></div>
          </div>

          {/* Filters */}
          <div className="mb-6 sm:mb-8 lg:mb-12 space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="font-mono text-xs sm:text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Filter by Status:</h3>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className="font-mono text-xs sm:text-sm"
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card key={project.id} className="overflow-hidden group hover:bg-primary/5 transition-all duration-300">
                  <div className="relative h-32 sm:h-40 lg:h-48 bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-contain max-h-full w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4 lg:mb-6 gap-3 sm:gap-4">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div
                          className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20 flex-shrink-0`}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2">
                            {project.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-muted-foreground gap-1 sm:gap-0">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              {project.date}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span>{project.organization}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Badge
                          variant={
                            project.status === "Completed"
                              ? "default"
                              : project.status === "In Progress"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                      {project.description}
                    </p>

                    <div className="mb-3 sm:mb-4 lg:mb-6">
                      <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-primary mt-1 text-xs sm:text-sm">▸</span>
                            <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3 sm:mb-4 lg:mb-6">
                      <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.status === "Completed" && project.id === "tert-research" && (
                      <div className="flex justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group bg-transparent"
                          onClick={() => handleViewMore(project.id)}
                        >
                          <Beaker className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          View Research Paper
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="p-8 sm:p-12 text-center">
              <Code className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Try adjusting your filters to see more projects.
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
