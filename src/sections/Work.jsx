import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Work.css'

function Work() {
  const { t } = useTranslation()
  const [visibleProductCount, setVisibleProductCount] = useState(5)

  const intro = t('work.intro')
  const experiences = t('work.experiences', { returnObjects: true })

  const handleShowMoreProducts = () => {
    setVisibleProductCount(prev => prev + 5)
  }

  const handleCollapseProducts = () => {
    setVisibleProductCount(5)
  }

  return (
    <section id="work" className="section work-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">{t('work.title')}</h2>

        <p className="work-intro">{intro}</p>

        <div className="work-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="work-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="work-header">
                <div className="work-period">{exp.period}</div>
                <h3 className="work-company">{exp.company}</h3>
                <div className="work-role">{exp.role}</div>
              </div>

              {exp.description && (
                <div className="work-description">
                  {exp.description.split('\n').map((line, i) => (
                    <div key={i}>
                      {line}
                      {line.includes('특허') && exp.patentDoi && (
                        <>
                          {' '}
                          <a href={exp.patentDoi} target="_blank" rel="noopener noreferrer" className="doi-link">
                            [DOI]
                          </a>
                        </>
                      )}
                      {line.includes('Patent') && exp.patentDoi && (
                        <>
                          {' '}
                          <a href={exp.patentDoi} target="_blank" rel="noopener noreferrer" className="doi-link">
                            [DOI]
                          </a>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {exp.products && exp.products.length > 0 && (
                <div className="products-section">
                  <h4 className="products-title">{t('work.productDev')}</h4>
                  <div className="compact-list products-compact-list">
                    {exp.products.slice(0, visibleProductCount).map((product, i) => (
                      <div key={i} className="compact-item" style={{ animationDelay: `${i * 0.05}s` }}>
                        <span className="compact-date">{product.date}</span>
                        <span className="compact-content">
                          {product.name}
                          {product.description && <span className="compact-desc"> - {product.description}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                  {visibleProductCount < exp.products.length && (
                    <button className="btn-secondary show-more-btn" onClick={handleShowMoreProducts}>
                      {t('work.showMore')}
                    </button>
                  )}
                  {visibleProductCount > 5 && visibleProductCount >= exp.products.length && (
                    <button className="btn-secondary show-more-btn" onClick={handleCollapseProducts}>
                      {t('work.collapse')}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
