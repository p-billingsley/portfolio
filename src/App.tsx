import { useState, useRef, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects, ProjectDetail } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { PasswordGate } from './components/PasswordGate'

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const savedScrollY = useRef(0)

  function openProject(id: string) {
    savedScrollY.current = window.scrollY
    setActiveProjectId(id)
    window.history.pushState(null, '', `#${id}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  function closeProject() {
    setActiveProjectId(null)
    window.history.pushState(null, '', '#projects')
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY.current, behavior: 'instant' })
    })
  }

  useEffect(() => {
    if (!activeProjectId) return
    function handleHashChange() {
      if (window.location.hash === '#projects') {
        setActiveProjectId(null)
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedScrollY.current, behavior: 'instant' })
        })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeProjectId])

  return (
    <PasswordGate>
      <div className="min-h-screen">
        <Header />
        <main>
          {activeProjectId ? (
            <ProjectDetail projectId={activeProjectId} onBack={closeProject} />
          ) : (
            <>
              <Hero />
              <About />
              <Projects onProjectOpen={openProject} />
              <Contact />
            </>
          )}
        </main>
        {!activeProjectId && <Footer />}
      </div>
    </PasswordGate>
  )
}
