import { useState } from 'react'
import './Latest.css'

function Latest() {
  const [visibleCount, setVisibleCount] = useState(1)

  const updates = [
    {
      date: '2026.1',
      content: 'Lifty 앱 프로덕트 오너로 참여하여 소셜 동기부여 앱을 개발 중입니다.'
    },
    {
      date: '2025.12',
      content: 'AI 코치 챗봇 개발을 완료했습니다. 학교검사 교사용, 리더십 코칭, 커플 코칭에 활용됩니다.'
    }
  ]

  const handleShowMore = () => {
    if (visibleCount === 1) {
      setVisibleCount(5)
    } else {
      setVisibleCount(prev => prev + 5)
    }
  }

  const displayedUpdates = updates.slice(0, visibleCount)

  return (
    <section id="latest" className="section latest-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">최근 소식</h2>
        <div className="updates-container">
          {displayedUpdates.map((update, index) => (
            <div key={index} className="update-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="update-date">{update.date}</div>
              <p className="update-content">{update.content}</p>
            </div>
          ))}
          {visibleCount < updates.length && (
            <button className="btn-secondary show-more-btn" onClick={handleShowMore}>
              더보기
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Latest
