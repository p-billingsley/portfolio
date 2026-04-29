import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 border border-border opacity-20" />
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-accent/10" />
        <div className="absolute top-1/2 right-1/4 w-px h-48 bg-border" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                UI/UX Design Engineer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                I design and build thoughtful interfaces that blend aesthetics with functionality. 
                Specializing in user-centered design and front-end development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-mono text-sm">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono text-sm">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Years Exp</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Projects</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Geometric Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Layered geometric shapes */}
              <div className="absolute inset-0 border-2 border-foreground" />
              <div className="absolute inset-4 bg-card border border-border" />
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="font-mono text-xs text-muted-foreground">DESIGN</p>
                  <p className="font-mono text-4xl font-bold text-accent">+</p>
                  <p className="font-mono text-xs text-muted-foreground">CODE</p>
                </div>
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="font-mono text-xs">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
