import { useTranslation } from 'react-i18next'
import './Freelance.css'

function Freelance() {
  const { t, i18n } = useTranslation()
  const webDevQuotationLink = 'https://www.notion.so/hisumin/Portfolio-Website-Quotation-2e2e254919bd80e8b27bec2f4930cc79'
  const coachingQuotationLink = 'https://www.notion.so/hisumin/2e2e254919bd8019be31f992c8aa2052'

  const isKorean = i18n.language === 'ko'

  return (
    <section id="freelance" className="section freelance-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">{t('freelance.title')}</h2>

        {/* Web Development */}
        <div className="freelance-subsection">
          <h3 className="subsection-title">{t('freelance.webDev.title')}</h3>
          <div className="freelance-content">
            <p className="freelance-intro">{t('freelance.webDev.intro')}</p>

            <div className="services-grid">
              {t('freelance.webDev.services', { returnObjects: true }).map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>

            <a
              href={webDevQuotationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="quotation-cta"
            >
              <div className="cta-content">
                <div className="cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <span className="cta-text">{t('freelance.webDev.cta')}</span>
              </div>
              <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Coaching - Korean Only */}
        {isKorean && (
          <div className="freelance-subsection">
            <h3 className="subsection-title">{t('freelance.coaching.title')}</h3>
            <div className="freelance-content">
              <p className="freelance-intro">{t('freelance.coaching.intro')}</p>

              <div className="services-grid services-grid-2">
                {t('freelance.coaching.services', { returnObjects: true }).map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-description">{service.description}</p>
                  </div>
                ))}
              </div>

              <a
                href={coachingQuotationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="quotation-cta coaching-cta"
              >
                <div className="cta-content">
                  <div className="cta-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </div>
                  <span className="cta-text">{t('freelance.coaching.cta')}</span>
                </div>
                <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Freelance
