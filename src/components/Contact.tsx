import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ep = ['patr', 'ick.b', 'illi', 'ngs', 'ley', '@gm', 'ail.', 'com']
const email = ep.join('')

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${email}`,
    value: email,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/patrickbillingsley',
    value: '/in/patrickbillingsley',
  }

]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Let&apos;s Build Something Together
              </h2>
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              I&apos;m currently open to full-time opportunities in UI/UX design and 
              front-end development. If you&apos;re looking for someone who bridges 
              design and code, let&apos;s connect.
            </p>

            <Button asChild size="lg" className="font-mono text-sm">
              <a href={`mailto:${email}`}>Send an Email</a>
            </Button>

            {/* Geometric accent */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-24 h-px bg-border" />
              <div className="w-3 h-3 bg-accent" />
            </div>
          </div>

          {/* Right - Links */}
          <div className="space-y-8">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Find Me Online
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between p-4 bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-secondary group-hover:bg-accent/10 transition-colors">
                      <link.icon size={18} className="text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono break-all">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
