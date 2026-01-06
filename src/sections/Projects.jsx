import './Projects.css'

function Projects() {
  const coaching = {
    period: '2025.7 - 현재',
    title: '코칭심리사 1급 수련',
    supervisor: '수퍼바이저: 이희경 (피비솔, 국내 최초 코칭심리사 1급)',
    details: [
      '인지행동주의 · 긍정심리학 기반',
      '성인 대상 라이프코칭 & 커리어코칭',
      '내담자: 박사과정생, NGO 연구자, 경찰 등'
    ]
  }

  const devProjects = [
    {
      title: '개발 포트폴리오',
      description: '추후 추가될 프로젝트들',
      status: 'coming-soon'
    }
  ]

  const otherProjects = []

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">프로젝트</h2>

        {/* Coaching */}
        <div className="subsection">
          <h3 className="subsection-title">코칭</h3>
          <div className="coaching-card">
            <div className="coaching-header">
              <div className="coaching-period">{coaching.period}</div>
              <h4 className="coaching-title">{coaching.title}</h4>
              <p className="coaching-supervisor">{coaching.supervisor}</p>
            </div>
            <ul className="coaching-details">
              {coaching.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dev Portfolio */}
        <div className="subsection">
          <h3 className="subsection-title">개발 포트폴리오</h3>
          <div className="projects-grid">
            {devProjects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-thumbnail">
                  <div className="coming-soon-badge">준비 중</div>
                </div>
                <div className="project-info">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="subsection">
          <h3 className="subsection-title">기타</h3>
          <div className="timeline">
            {otherProjects.map((item, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-institution">{item.title}</div>
                  <div className="timeline-degree">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
