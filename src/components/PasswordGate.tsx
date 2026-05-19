import { useState, useEffect, type FormEvent } from 'react'

// Simple hash function for client-side comparison
// Note: This is NOT cryptographically secure - it's a deterrent, not true security
const hashPassword = (password: string): string => {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash.toString(36)
}

// Set your password here - the hash will be compared
// Default password: "preview2024" -> hash: "-1j8x8zy"
const VALID_HASH = 'wy6a'
const SESSION_KEY = 'portfolio_access'
// Share as: https://p-billingsley.github.io/portfolio/?access=vip
const VIP_PARAM = 'access'
const VIP_TOKEN = 'vip'

interface PasswordGateProps {
  children: React.ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem(SESSION_KEY)
    if (sessionAuth === 'true') {
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }

    const params = new URLSearchParams(window.location.search)
    if (params.get(VIP_PARAM) === VIP_TOKEN) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setIsAuthenticated(true)
      // Strip the token from the URL so it doesn't linger in history
      params.delete(VIP_PARAM)
      const clean = params.size ? `?${params}` : ''
      window.history.replaceState(null, '', window.location.pathname + clean + window.location.hash)
    }

    setIsLoading(false)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    const inputHash = hashPassword(password)

    if (inputHash === VALID_HASH) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setIsAuthenticated(true)
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-accent border-t-transparent animate-spin" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Geometric background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border rotate-45 opacity-20" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-border rotate-12 opacity-15" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/5 rotate-45" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-accent/20 rotate-12" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Decorative corner accents */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent" />

        <div className="bg-card border border-border p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent" />
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                Private Preview
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Portfolio Access
            </h1>
            <p className="text-muted-foreground text-sm">
              This portfolio is currently invite-only. Enter the password to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access password"
                className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                autoFocus
                required
              />
              {error && (
                <p className="mt-2 text-sm text-destructive font-mono">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-6 font-semibold hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Enter Portfolio</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-8 text-xs text-muted-foreground text-center">
            Contact me directly if you need access credentials.
          </p>
        </div>

        {/* Decorative line */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </div>
    </div>
  )
}
