import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import TerminalNav from '@/components/terminal-nav'
import MatrixBackground from '@/components/matrix-background'
import { Phone, Mail, Globe, MapPin, Heart, Zap, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />
      <TerminalNav />
      
      <main className="pt-16">
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-16 xl:py-20">
          {/* Terminal Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="font-mono text-primary mb-2 text-xs sm:text-sm lg:text-base">
              <span className="text-muted-foreground">tyce@portfolio:~$</span> cat about.txt
            </div>
            <div className="h-px bg-gradient-to-r from-primary to-transparent mb-6 sm:mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <Card className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1659%20%281%29.PNG-fJLYdGtDt7LxooJJQo7nioImijbZjt.jpeg"
                        alt="Tyce Carroll"
                        width={180}
                        height={180}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Tyce Carroll</h1>
                <p className="text-primary font-mono mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">Computational Scientist</p>
                
                <div className="space-y-2 sm:space-y-3 text-left">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm break-all">816-715-9048</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm break-all">tycecarrollwork@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <Link href="https://github.com/TyceCarroll" className="font-mono text-xs sm:text-sm hover:text-primary transition-colors break-all">
                      github.com/TyceCarroll
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm">Kansas City, MO</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Bio */}
              <Card className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 flex items-center">
                  <span className="text-primary mr-2">&gt;</span>
                  About Me
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                    I'm an aspiring computational scientist with a passion for solving complex problems 
                    through innovative technological solutions. Currently a high school student at North Kansas City High School, 
                    I've already done significant work in data analysis and automation through local internships and I've integrated myself with the research process through independent scientific experimentation and article writing.
                  </p>
                  
                  <p className="leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                    My journey into computational science began with a fascination for how technology can be used to better the health of humanity and our planet. In 5th grade I received an honorable mention in the ExploraVision national science contest for a concept design of a machine learning based anti-pollution drone. This pushed me to transition my skills from game design to languages like Python and JavaScript. Whether it's analyzing thousands of molecular compounds or automating tools for occupational therapists, I specialize in creating real world impactful projects.
                  </p>

                  
                </div>
              </Card>

              {/* Values & Interests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary mr-2" />
                    What Drives Me
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Creating impactful solutions using technology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Learning new skills and continuously growing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Proving that age doesn't matter for scientific discovery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Leaving the world with a better future</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary mr-2" />
                    Current Interests
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Disease prevention on the molecular level</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Machine learning driven discovery (drugs, exoplanets, pollutants, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Space medicine and the challenges of spreading life outside of earth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-xs sm:text-sm lg:text-base">Automated environmental cleanup tools</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Goals */}
              <Card className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary mr-2" />
                  Future Goals
                </h2>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Short Term</h4>
                    <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                      <li>• Qualify to the international science and engineering fair with independent research</li>
                      <li>• Found and lead my school's first research club</li>
                      <li>• Expand programming skills in R and Java</li>
                      <li>• Conduct lab research through a university professor or summer research program</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Long Term</h4>
                    <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                      <li>• Pursue Degree in computer science</li>
                      <li>• Lead my own ethical science based business and/or private lab</li>
                      <li>• Establish myself in not one but multiple scientific fields </li>
                      <li>• Mentor the next generation of scientists through internships and research programs</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Fun Facts */}
              <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/10 to-pink-500/10">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
                  <span className="text-primary">&gt;</span> Fun Facts
                </h2>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm"><span className="text-primary font-mono">console.log(</span>"I taught a web dev course for middle schoolers when I was just 12 years old"<span className="text-primary font-mono">)</span></p>
                    <p className="text-xs sm:text-sm"><span className="text-primary font-mono">console.log(</span>"I'm treasury for a school club putting on food drives in North Kansas City"<span className="text-primary font-mono">)</span></p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm"><span className="text-primary font-mono">console.log(</span>"I've run varsity cross country and track since I was a freshman"<span className="text-primary font-mono">)</span></p>
                    <p className="text-xs sm:text-sm"><span className="text-primary font-mono">console.log(</span>"I analyzed over 20,000 molecular compounds in my most recent project"<span className="text-primary font-mono">)</span></p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
