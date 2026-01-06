import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
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
    }
  }

  const skills = ['R', 'Python', 'MySQL', 'JavaScript', 'HTML', 'CSS']

  return (
    <div className="hero">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="profile-image-container">
          <img
            src="/profile.jpg"
            alt="정수민 프로필"
            className="profile-image"
          />
        </div>

        {/* Name & Title */}
        <div className="hero-info">
          <h1 className="name-ko">정수민</h1>
          <h2 className="name-en">Sumin Jung</h2>
          <p className="title">
            심리학 연구자 · 프로덕트 오너 · 코칭심리사
          </p>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="section-title">Skills</h3>
          <div className="skills-container">
            {skills.join(', ')}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/sumin-jung"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://brunch.co.kr/@suminjung"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Brunch"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 9h-3c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zM13.5 9h-3c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zM19.5 9h-3c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5z"/>
            </svg>
          </a>
          <a
            href="mailto:sumin.jung@example.com"
            className="social-link"
            aria-label="Email"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hero-nav">
          <button
            className={`nav-item ${activeSection === 'latest' ? 'active' : ''}`}
            onClick={() => scrollToSection('latest')}
          >
            최근 소식
          </button>
          <button
            className={`nav-item ${activeSection === 'research' ? 'active' : ''}`}
            onClick={() => scrollToSection('research')}
          >
            연구
          </button>
          <button
            className={`nav-item ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => scrollToSection('work')}
          >
            업무
          </button>
          <button
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            프로젝트
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Hero
