export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top
            </a>
            <div className="w-px h-4 bg-border" />
            <p className="font-mono text-xs text-muted-foreground">
              Built with React + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
