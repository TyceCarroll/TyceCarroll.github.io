import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TerminalNav from '@/components/terminal-nav'
import MatrixBackground from '@/components/matrix-background'
import { Phone, Mail, Globe, Github, Linkedin, MapPin, MessageSquare, Coffee } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tycecarrollwork@gmail.com',
    href: 'mailto:tycecarrollwork@gmail.com',
    description: 'Best for professional inquiries and collaboration opportunities',
    available: '24/7'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '816-715-9048',
    href: 'tel:816-715-9048',
    description: 'Available for urgent matters and scheduled calls',
    available: '9AM-8PM CST'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/TyceCarroll',
    href: 'https://github.com/TyceCarroll',
    description: 'Check out my code repositories and contributions',
    available: 'Updated semi-regularly'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />
      <TerminalNav />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          {/* Terminal Header */}
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-primary mb-2 text-sm sm:text-base">
              <span className="text-muted-foreground">tyce@portfolio:~$</span> ping contact
            </div>
            <div className="h-px bg-gradient-to-r from-primary to-transparent mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-primary">&gt;</span> Get In Touch
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  I'm always excited to connect with fellow researchers, developers, and anyone passionate about 
                  science. Whether you have a project idea, research opportunity, or just want to 
                  chat about the latest in computational science, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <Card key={method.label} className="p-4 sm:p-6 group hover:bg-primary/5 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 sm:p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold">{method.label}</h3>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded w-fit">
                              {method.available}
                            </span>
                          </div>
                          <Link 
                            href={method.href}
                            className="font-mono text-primary hover:text-primary/80 transition-colors block mb-2 text-sm sm:text-base break-all"
                          >
                            {method.value}
                          </Link>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Location */}
              <Card className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Kansas City, Missouri
                  <br />
                  <span className="text-xs sm:text-sm">Available for remote collaboration worldwide</span>
                </p>
              </Card>

              {/* Response Time */}
              <Card className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h3 className="font-semibold text-sm sm:text-base">Response Time</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GitHub:</span>
                    <span>Varies</span>
                  </div>
                </div>
              </Card>

              {/* Current Status */}
              <Card className="p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-pink-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h3 className="font-semibold text-sm sm:text-base">Current Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm">Available for new opportunities</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <p>Currently working on TERT modulator research and seeking 2026 internships in computational research.</p>
                  </div>
                </div>
              </Card>

              {/* Fun Fact */}
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold mb-3 text-primary text-sm sm:text-base">Fun Fact</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  I respond to emails faster than my molecular docking simulations complete! 
                  (Usually within a few hours, not days like my GPU clusters)
                </p>
              </Card>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-card/50 rounded-lg border border-border">
            <div className="font-mono text-xs sm:text-sm text-muted-foreground">
              <div className="mb-2">
                <span className="text-primary">tyce@portfolio:~$</span> echo "Thanks for visiting!"
              </div>
              <div className="mb-2">Thanks for visiting!</div>
              <div className="mb-2">
                <span className="text-primary">tyce@portfolio:~$</span> echo "Looking forward to connecting with you"
              </div>
              <div>Looking forward to connecting with you<span className="terminal-cursor">|</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
