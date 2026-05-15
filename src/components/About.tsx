import { Badge } from '@/components/ui/badge'

const skills = [
  'Figma',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'User Research',
  'Prototyping',
  'Design Systems',
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Section Header */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">About</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
                Bridging Design and Development
              </h2>
            </div>

            {/* Geometric accent */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-accent" />
              <div className="w-4 h-4 border border-accent" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a UI/UX Design Engineer passionate about creating accessible, 
                pixel-perfect user interfaces that blend thoughtful pragmatic design with robust engineering.
              </p>
              <p>
                My work lies at the intersection of design and development, creating experiences 
                that not only look great but are meticulously built for performance and usability. 
                I believe the best digital products emerge when design thinking meets technical expertise.
              </p>
              <p>
                Currently seeking full-time opportunities where I can contribute to meaningful 
                products and continue growing as a design technologist.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <p className="font-mono text-xs text-foreground tracking-widest uppercase">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-xs px-3 py-1 border-border hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Experience highlight */}
            <div className="p-6 bg-card border border-border space-y-3">
              <p className="font-mono text-xs text-muted-foreground">RECENT EXPERIENCE</p>
              <div>
                <p className="font-semibold text-foreground">Senior UI/UX Designer</p>
                <p className="text-sm text-muted-foreground">Tech Company Inc. — 2022-Present</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led design system development and front-end implementation for enterprise 
                SaaS products, improving user engagement by 40%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
