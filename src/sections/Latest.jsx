import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Latest.css'

function Latest() {
  const { t } = useTranslation()
  const [visibleCount, setVisibleCount] = useState(1)

  const updates = t('latest.updates', { returnObjects: true })

  const handleShowMore = () => {
    if (visibleCount === 1) {
      setVisibleCount(5)
    } else {
      setVisibleCount(prev => prev + 5)
    }
  }

  const handleCollapse = () => {
    setVisibleCount(1)
  }

  const displayedUpdates = updates.slice(0, visibleCount)

  return (
    <section id="latest" className="section latest-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">{t('latest.title')}</h2>
        <div className="updates-container">
          {displayedUpdates.map((update, index) => (
            <div key={index} className="update-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="update-date">{update.date}</div>
              <p className="update-content">{update.content}</p>
            </div>
          ))}
          {visibleCount < updates.length && (
            <button className="btn-secondary show-more-btn" onClick={handleShowMore}>
              {t('latest.showMore')}
            </button>
          )}
          {visibleCount > 1 && visibleCount >= updates.length && (
            <button className="btn-secondary show-more-btn" onClick={handleCollapse}>
              {t('latest.collapse')}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Latest
