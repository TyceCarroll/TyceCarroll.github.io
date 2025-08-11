"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import TerminalNav from "@/components/terminal-nav"
import MatrixBackground from "@/components/matrix-background"
import { Terminal, Code, Atom, ArrowRight, Coffee, Brain, BookOpen, Download } from "lucide-react"

const codeSnippets = [
  "class YoungInnovator:",
  "    def __init__(self):",
  "        self.name = 'Tyce Carroll'",
  "        self.age = 15",
  "        self.passion = 'Computational Science'",
  "        self.years_coding = 8",
  "        self.bugs_created = self.bugs_fixed + 1",
  "",
  "    def solve_world_problems(self):",
  "        while self.curious:",
  "            self.learn_something_new()",
  "            self.code_until_3am()",
  "        return 'Better tomorrow'",
  "",
  "# Fun fact: I debug faster than I can explain",
  "# what the bug was in the first place!",
]

export default function HomePage() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine < codeSnippets.length) {
      const line = codeSnippets[currentLine]
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setDisplayedCode((prev) => prev + line[currentChar])
          setCurrentChar((prev) => prev + 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setDisplayedCode((prev) => prev + "\n")
          setCurrentLine((prev) => prev + 1)
          setCurrentChar(0)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLine, currentChar])

  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />
      <TerminalNav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 text-primary font-mono text-xs sm:text-sm">
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Initializing portfolio...</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="name-switch first-name bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                    TYCE
                  </span>
                  <br />
                  <span className="name-switch last-name text-muted-foreground">CARROLL</span>
                </h1>
                <div className="font-mono text-sm sm:text-base lg:text-lg text-primary">
                  Aspiring Computational Scientist
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Young innovator dedicated to solving complex problems through novel solutions. Driven by a passion for
                computational possibilities in fields like <span className="text-primary font-semibold">Genomics</span>,{" "}
                <span className="text-primary font-semibold">Astrobiology</span>, and{" "}
                <span className="text-primary font-semibold">Planetary Health</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button className="group w-full sm:w-auto">
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    About Me
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto group"
                  onClick={async () => {
                    try {
                      const response = await fetch("/resume.png")
                      const blob = await response.blob()
                      const url = window.URL.createObjectURL(blob)
                      const link = document.createElement("a")
                      link.href = url
                      link.download = "Tyce_Carroll_Resume.png"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                      window.URL.revokeObjectURL(url)
                    } catch (error) {
                      console.error("Download failed:", error)
                      // Fallback: open in new tab
                      window.open("/resume.png", "_blank")
                    }
                  }}
                >
                  <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:order-last">
              <Card className="code-block p-3 sm:p-4 lg:p-6">
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-muted-foreground font-mono">scientist.py</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-foreground overflow-hidden">
                  <code>
                    {displayedCode}
                    <span className="terminal-cursor">|</span>
                  </code>
                </pre>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-colors">
              <div className="floating">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">8+</h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Years Coding</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-colors">
              <div className="floating" style={{ animationDelay: "0.5s" }}>
                <Terminal className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">50k+</h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Lines of Handwritten Code</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-colors">
              <div className="floating" style={{ animationDelay: "1s" }}>
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">1</h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Curious Mind</p>
            </Card>
          </div>
        </section>

        {/* Current Focus */}
        <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">&gt;</span> Current Focus
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">What I'm working on right now</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="p-4 sm:p-6 lg:p-8 group hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <Atom className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">TERT Modulator Research</h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                    Designing innovative dual-target therapeutic strategies for post-mitotic cells using molecular
                    filtering and ADMET prediction.
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-primary">
                    <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                    <span>Active Research</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 group hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">Full Time Student</h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                    Currently taking coursework like AP Computer Science A and Calculus I/II. On track for an IB Diploma
                    at North Kansas City High School. Balancing rigorous academics with hands-on research.
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-primary">
                    <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                    <span>Class of 2028</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
