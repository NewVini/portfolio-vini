import { useEffect } from 'react'
import { BackgroundFX } from './components/BackgroundFX.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { CompanyStrip } from './components/CompanyStrip.jsx'
import { BackendSection } from './components/BackendSection.jsx'
import { FrontendSection } from './components/FrontendSection.jsx'
import { MobileShowcase } from './components/MobileShowcase.jsx'
import { Projects } from './components/Projects.jsx'
import { StackSection } from './components/StackSection.jsx'
import { Timeline } from './components/Timeline.jsx'
import { ContactCTA } from './components/ContactCTA.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    const onMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <BackgroundFX />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <CompanyStrip />
        <BackendSection />
        <FrontendSection />
        <MobileShowcase />
        <Projects />
        <StackSection />
        <Timeline />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
