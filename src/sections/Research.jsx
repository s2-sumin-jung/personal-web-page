import { useTranslation } from 'react-i18next'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap, FaFlask } from 'react-icons/fa'
import './Research.css'

function Research() {
  const { t } = useTranslation()

  const education = t('research.education.items', { returnObjects: true })
  const experience = t('research.experience.items', { returnObjects: true })
  const publishedItems = t('research.publications.publishedItems', { returnObjects: true })
  const submittedItems = t('research.publications.submittedItems', { returnObjects: true })
  const presentations = t('research.presentations.items', { returnObjects: true })
  const teaching = t('research.teaching.items', { returnObjects: true })
  const awards = t('research.awards.items', { returnObjects: true })

  return (
    <section id="research" className="section research-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">{t('research.title')}</h2>

        {/* Education */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.education.title')}</h3>
          <VerticalTimeline lineColor="var(--border-color)" layout="1-column-left">
            {education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                date={item.period}
                iconStyle={{ background: 'var(--primary)', color: '#fff', boxShadow: '0 0 0 4px var(--primary-light)' }}
                icon={<FaGraduationCap />}
                contentStyle={{
                  background: 'var(--bg-primary)',
                  boxShadow: 'var(--shadow-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
              >
                <h4 className="vertical-timeline-element-title">{item.institution}</h4>
                <h5 className="vertical-timeline-element-subtitle">{item.degree}</h5>
                {item.description && <p className="timeline-description">{item.description}</p>}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Experience */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.experience.title')}</h3>
          <VerticalTimeline lineColor="var(--border-color)" layout="1-column-left">
            {experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={item.period}
                iconStyle={{ background: 'var(--secondary)', color: '#fff', boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.3)' }}
                icon={<FaFlask />}
                contentStyle={{
                  background: 'var(--bg-primary)',
                  boxShadow: 'var(--shadow-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
              >
                <h4 className="vertical-timeline-element-title">{item.organization}</h4>
                <h5 className="vertical-timeline-element-subtitle">{item.role}</h5>
                {item.description && <p className="timeline-description">{item.description}</p>}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Publications */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.publications.title')}</h3>

          <h4 className="publication-category">{t('research.publications.published')}</h4>
          <div className="publication-list">
            {publishedItems.map((pub, index) => (
              <div key={index} className="publication-item" style={{ animationDelay: `${index * 0.1}s` }}>
                {pub.text}
                {pub.doi && (
                  <>
                    {' '}
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="doi-link">
                      [DOI]
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>

          <h4 className="publication-category">{t('research.publications.submitted')}</h4>
          <div className="publication-list">
            {submittedItems.map((pub, index) => (
              <div key={index} className="publication-item" style={{ animationDelay: `${index * 0.1}s` }}>
                {pub}
              </div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.presentations.title')}</h3>
          <div className="publication-list">
            {presentations.map((pres, index) => (
              <div key={index} className="publication-item" style={{ animationDelay: `${index * 0.1}s` }}>
                {pres}
              </div>
            ))}
          </div>
        </div>

        {/* Teaching & Mentoring */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.teaching.title')}</h3>
          <div className="compact-list">
            {teaching.map((item, index) => (
              <div key={index} className="compact-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="compact-date">{item.period}</span>
                <span className="compact-content">{item.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Funding */}
        <div className="subsection">
          <h3 className="subsection-title">{t('research.awards.title')}</h3>
          <div className="compact-list">
            {awards.map((item, index) => (
              <div key={index} className="compact-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="compact-date">{item.year}</span>
                <span className="compact-content">{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
