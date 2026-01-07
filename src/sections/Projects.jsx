import { useTranslation } from 'react-i18next'
import './Projects.css'

function Projects() {
  const { t } = useTranslation()

  const coachingDetails = t('projects.coaching.details', { returnObjects: true })

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">{t('projects.title')}</h2>

        {/* Coaching */}
        <div className="subsection">
          <h3 className="subsection-title">{t('projects.coaching.title')}</h3>
          <div className="coaching-card">
            <div className="coaching-header">
              <div className="coaching-period">{t('projects.coaching.period')}</div>
              <h4 className="coaching-title">{t('projects.coaching.trainingTitle')}</h4>
              <p className="coaching-supervisor">{t('projects.coaching.supervisor')}</p>
            </div>
            <ul className="coaching-details">
              {coachingDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dev Portfolio */}
        <div className="subsection">
          <h3 className="subsection-title">{t('projects.portfolio.title')}</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-thumbnail">
                <div className="coming-soon-badge">{t('projects.portfolio.badge')}</div>
              </div>
              <div className="project-info">
                <h4 className="project-title">{t('projects.portfolio.title')}</h4>
                <p className="project-description">{t('projects.portfolio.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="subsection">
          <h3 className="subsection-title">{t('projects.other.title')}</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-institution">{t('projects.other.comingSoon')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
