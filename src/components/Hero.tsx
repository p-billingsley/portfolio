import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DesignDevAnimation } from './DesignDevAnimation'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 mt-[-65px]">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-104 h-104 border border-accent/50 border-1 rotate-24 " />
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-accent/50 rotate-57" />
        <div className="absolute bottom-20 right-20 w-72 h-72  border border-sky-500 border-1 rotate-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                UI/UX Design Engineering Leader
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                I design and build thoughtful interfaces that blend aesthetics with functionality.
                Specializing in front-end development and user-centered design.
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
          </div>

          {/* Right Content - Animated Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <DesignDevAnimation />
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
