"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Terminal, Zap, User, Briefcase, Award, Mail, Menu, X, Download } from 'lucide-react'

const commands = [
  { cmd: 'home', path: '/', icon: Terminal, label: 'home', description: 'Main page' },
  { cmd: 'about', path: '/about', icon: User, label: 'about', description: 'About me' },
  { cmd: 'projects', path: '/projects', icon: Briefcase, label: 'projects', description: 'My work' },
  { cmd: 'skills', path: '/skills', icon: Award, label: 'skills', description: 'Abilities' },
  { cmd: 'contact', path: '/contact', icon: Mail, label: 'contact', description: 'Get in touch' }
]

export default function TerminalNav() {
  const [currentTime, setCurrentTime] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/resume.png')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Tyce_Carroll_Resume.png'  // Changed from .pdf to .png
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: open in new tab
      window.open('/resume.png', '_blank')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground truncate">
                tyce@portfolio:~$
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {commands.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group flex items-center space-x-2 xl:space-x-3 px-2 xl:px-3 py-2 rounded-md transition-all duration-200 hover:bg-primary/10 ${
                    isActive ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-sm truncate">{item.cmd}</span>
                    <span className="text-xs opacity-75 truncate hidden xl:block">{item.description}</span>
                  </div>
                  {isActive && (
                    <span className="terminal-cursor font-mono text-primary">|</span>
                  )}
                </Link>
              )
            })}
            
            {/* Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className="group flex items-center space-x-2 xl:space-x-3 px-2 xl:px-3 py-2 rounded-md transition-all duration-200 hover:bg-primary/10 text-muted-foreground hover:text-foreground"
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-sm truncate">resume</span>
                <span className="text-xs opacity-75 truncate hidden xl:block">Download Resume</span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* Time Display */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 text-xs font-mono text-muted-foreground">
            <Zap className="w-3 h-3 text-primary flex-shrink-0" />
            <span className="truncate">{currentTime}</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              {commands.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-md transition-all duration-200 hover:bg-primary/10 ${
                      isActive ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-sm">{item.cmd}</span>
                      <span className="text-xs opacity-75">{item.description}</span>
                    </div>
                    {isActive && (
                      <span className="terminal-cursor font-mono text-primary ml-auto">|</span>
                    )}
                  </Link>
                )
              })}
              
              {/* Mobile Resume Download */}
              <button
                onClick={() => {
                  handleResumeDownload()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-md transition-all duration-200 hover:bg-primary/10 text-muted-foreground hover:text-foreground w-full text-left"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-sm">resume</span>
                  <span className="text-xs opacity-75">Download Resume</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
