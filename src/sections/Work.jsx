import { useState } from 'react'
import './Work.css'

function Work() {
  const [visibleProductCount, setVisibleProductCount] = useState(5)

  const intro = '디자이너, 개발자, 심리학 전문가와 협업하여 심리학 기반 제품을 기획합니다. 정식 출시 전 PoC나 파일럿 서비스가 필요할 때, 그리고 팀원들의 반복 업무를 자동화할 때 직접 풀스택으로 개발합니다.'

  const handleShowMoreProducts = () => {
    setVisibleProductCount(prev => prev + 5)
  }

  const experiences = [
    {
      period: '2025.4 - 현재',
      company: 'Goodlife Lab',
      role: 'Researcher (Insight Lab) · PO · Full-stack Developer (AI Lab)',
      description: `【HR 솔루션】
• 국내 5대 대기업 중 3곳에 심리학 기반 HR 솔루션 납품 (임직원 웰빙/번아웃, 임원 리더십)
• 검사 개발 및 진행 (2025.5, 2025.9)
• 조직 진단 보고서 작성
• 검사 해석 세션 13회 (대면/비대면, 50분 1:1)
• 일일 워크숍 진행
• 검사 데이터 전처리 자동화 (Python)
• 리더십 보고서 초안 자동화`,
      products: [
        { date: '2026.1', name: 'Lifty 앱 PO (iOS, Android)', description: '소셜 동기부여 앱' },
        { date: '2025.12', name: 'AI 코치 챗봇', description: '학교검사 교사용, 리더십 코칭, 커플 코칭' },
        { date: '2025.11', name: '커플 성격검사 웹앱', description: '' },
        { date: '2025.9', name: '검사 해석용 그래프 자동생성기', description: '' },
        { date: '2025.9', name: '코칭 대시보드', description: '내담자 점수 시각화 자동화' },
        { date: '2025.9', name: '웹 크롤링 자동화', description: '' },
        { date: '2025.5', name: '엑셀 기반 그래프 자동생성기', description: '' }
      ]
    },
    {
      period: '2021.6 - 2022.2',
      company: 'LOMY',
      role: 'CEO · PM · Frontend Developer',
      description: `• 부모-자녀 갈등 상황별 맞춤 대처 전략 앱
• 당나귀 앱 (Android, 마켓 출시)
• 특허 등록: 심리 프로파일에 따른 행동 습관 제공 방법 및 서버, 기록매체, 장치 (2025)
• 예비창업패키지 최우수상 & 5,500만원 (창업진흥원, 2021)
• 서울대 해동 주니어 스타트업 우수상 & 500만원 (2021)`,
      products: []
    },
    {
      period: '2021.5 - 2021.8',
      company: 'CJ AI 연구센터',
      role: 'Psychology Research · Data Science Intern',
      description: `• MySQL, Python 기반 커머스 데이터 분석
• 우울증 케어 챗봇 기획`,
      products: []
    }
  ]

  return (
    <section id="work" className="section work-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">업무</h2>

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
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}

              {exp.products.length > 0 && (
                <div className="products-section">
                  <h4 className="products-title">프로덕트 개발</h4>
                  <div className="products-timeline">
                    {exp.products.slice(0, visibleProductCount).map((product, i) => (
                      <div key={i} className="product-timeline-item" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="product-timeline-marker"></div>
                        <div className="product-timeline-content">
                          <div className="product-timeline-date">{product.date}</div>
                          <div className="product-timeline-name">{product.name}</div>
                          {product.description && (
                            <div className="product-timeline-description">{product.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {visibleProductCount < exp.products.length && (
                    <button className="btn-secondary show-more-btn" onClick={handleShowMoreProducts}>
                      더보기
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
