import { useState, useEffect } from 'react'
import './MobileMenu.css'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('latest')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['latest', 'research', 'work', 'projects']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Menu">
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h3>Navigation</h3>
          <button className="close-button" onClick={toggleMenu} aria-label="Close">
            ×
          </button>
        </div>

        <div className="mobile-menu-items">
          <button
            className={`mobile-nav-item ${activeSection === 'latest' ? 'active' : ''}`}
            onClick={() => scrollToSection('latest')}
          >
            Latest
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'research' ? 'active' : ''}`}
            onClick={() => scrollToSection('research')}
          >
            Research
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => scrollToSection('work')}
          >
            Work
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </div>
      </nav>
    </>
  )
}

export default MobileMenu
