import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import TerminalNav from '@/components/terminal-nav'
import MatrixBackground from '@/components/matrix-background'
import { Code, Database, Brain, Microscope, Award, BookOpen, Zap, Users, Target, Clock, Smile } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', description: 'Data analysis, automation, bioinformatics' },
      { name: 'JavaScript', description: 'Web development, React applications' },
      { name: 'ReactJS', description: 'Frontend development, component architecture' },
      { name: 'HTML/CSS', description: 'Web markup, responsive design' },
      { name: 'SQL', description: 'Database queries, data management' }
    ]
  },
  {
    title: 'Bioinformatics & Scientific Computing',
    icon: Microscope,
    skills: [
      { name: 'PyMOL', description: 'Molecular visualization and analysis' },
      { name: 'RDKit', description: 'Chemical informatics and drug discovery' },
      { name: 'OpenBabel', description: 'Chemical file format conversion' },
      { name: 'AutoDock', description: 'Molecular docking simulations' },
      { name: 'SwissADME', description: 'ADMET property prediction' },
      { name: 'ADMETlab', description: 'Drug-likeness assessment' }
    ]
  },
  {
    title: 'Data Science & Analysis',
    icon: Database,
    skills: [
      { name: 'Pandas', description: 'Data manipulation and analysis' },
      { name: 'NumPy', description: 'Numerical computing' },
      { name: 'Matplotlib', description: 'Data visualization' },
      { name: 'Scikit-learn', description: 'Machine learning algorithms' },
      { name: 'Jupyter', description: 'Interactive data analysis' },
      { name: 'Docker', description: 'Containerization and deployment' }
    ]
  },
  {
    title: 'Web Technologies',
    icon: Brain,
    skills: [
      { name: 'Bootstrap', description: 'Responsive web frameworks' },
      { name: 'Node.js', description: 'Server-side JavaScript' },
      { name: 'Git', description: 'Version control and collaboration' },
      { name: 'Linux', description: 'Command line and system administration' },
      { name: 'APIs', description: 'RESTful services and integration' }
    ]
  }
]

const softSkills = [
  { name: 'Public Speaking', icon: Users, description: 'Presentations and communication' },
  { name: 'Essay Writing', icon: BookOpen, description: 'Technical and scientific writing' },
  { name: 'Time Management', icon: Clock, description: 'Project planning and execution' },
  { name: 'Attention to Detail', icon: Target, description: 'Precision in research and coding' },
  { name: 'Curiosity', icon: Zap, description: 'Continuous learning and exploration' },
  { name: 'Always Smiling', icon: Smile, description: 'Never let bad stretches ruin my mood' }
]

const certifications = [
  {
    name: 'Google Cybersecurity Program',
    issuer: 'Google',
    date: '2024',
    description: 'Comprehensive cybersecurity fundamentals and practices'
  },
  {
    name: "HarvardX: CS50's Introduction to Programming with Python",
    issuer: 'edX',
    date: '2021',
    description: 'Advanced Python programming and computer science concepts'
  },
  {
    name: 'FreeCodeCamp Web Design & JavaScript',
    issuer: 'FreeCodeCamp',
    date: '2021',
    description: 'Full-stack web development certification'
  }
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MatrixBackground />
      <TerminalNav />
      
      <main className="pt-16">
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 lg:py-12 xl:py-20">
          {/* Terminal Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="font-mono text-primary mb-2 text-xs sm:text-sm lg:text-base">
              <span className="text-muted-foreground">tyce@portfolio:~$</span> npm list -g
            </div>
            <div className="h-px bg-gradient-to-r from-primary to-transparent mb-6 sm:mb-8"></div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="p-3 sm:p-4 lg:p-6 xl:p-8">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 lg:mb-8">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name} 
                        className="group p-3 sm:p-4 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 hover:from-primary/10 hover:to-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30"
                        style={{
                          animationDelay: `${skillIndex * 0.1}s`,
                          animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                          <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:animate-pulse transition-all"></div>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                        
                        {/* Animated underline */}
                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Soft Skills */}
          <Card className="p-3 sm:p-4 lg:p-6 xl:p-8 mt-6 sm:mt-8 lg:mt-12">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 lg:mb-8">
              <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Soft Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-3 sm:p-4 lg:p-6 xl:p-8 mt-6 sm:mt-8 lg:mt-12">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 lg:mb-8">
              <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Certifications</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary pl-3 sm:pl-4 lg:pl-6 pb-3 sm:pb-4 lg:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg">{cert.name}</h3>
                    <Badge variant="outline" className="font-mono text-xs w-fit">
                      {cert.date}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2 text-xs sm:text-sm lg:text-base">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Academic Achievements */}
          <Card className="p-3 sm:p-4 lg:p-6 xl:p-8 mt-6 sm:mt-8 lg:mt-12 bg-gradient-to-r from-primary/10 to-pink-500/10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">Academics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2 text-xs sm:text-sm lg:text-base">Academic Stats</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Unweighted GPA: 4.0</li>
                  <li>• Weighted GPA: 4.44</li>
                  <li>• IB Diploma Program Candidate</li>
                  <li>• D.I.T program with a specialization in computer science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2 text-xs sm:text-sm lg:text-base">Relevant Coursework</h3>
                <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                  <li>• Math: Algebra 1, Algebra 2, Geometry, Pre-Calculus, Calculus I/II  </li>
                  <li>• Tech: App Creation, Computer Science for Innovators, Automation and Robotics, College Intro to Computer Science, AP Computer Science A.        </li>
                  <li>• Others: Honors Biology, Honors Chemistry, College Intro to Engineering Design, College Principles of Engineering, Spanish I/II/III  </li>
                  
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

<style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
