import './Research.css'

function Research() {
  const education = [
    {
      period: '2025.9 - 현재',
      institution: '서울대학교',
      degree: '사회심리학 박사과정',
      description: '지도교수: 최인철 박사 · 연구 주제: 행복 · 웰빙 · 운동 · 동기 · 정서조절'
    },
    {
      period: '2021.9 - 2023.8',
      institution: '서울대학교',
      degree: '사회심리학 석사'
    },
    {
      period: '2016.3 - 2020.8',
      institution: '서울대학교',
      degree: '심리학 학사 (최우등 졸업)'
    }
  ]

  const experience = [
    {
      period: '2025.9 - 현재',
      organization: '서울대 행복연구센터 (최인철 박사)',
      role: '대학원 연구원',
      description: ''
    },
    {
      period: '2024.3 - 2025.2',
      organization: '스탠포드 심리생리학 연구실 (제임스 그로스 박사)',
      role: '연구원',
      description: '멘토: Sylvia Kreibig 박사, 연구 논문 2편 공저, 메타분석 문헌 리뷰 및 코딩'
    },
    {
      period: '2021.9 - 2023.8',
      organization: '서울대 행복연구센터 (최인철 박사)',
      role: '대학원 연구원',
      description: '연구 프로젝트 3편 공저, 종단 데이터 통계 분석'
    },
    {
      period: '2019.1 - 2020.12',
      organization: '서울대 사회심리학연구실 (최인철 박사)',
      role: '학부 연구원',
      description: ''
    },
    {
      period: '2019.1 - 2019.12',
      organization: '서울대 계산임상과학연구실 (안우영 박사)',
      role: '학부 연구원',
      description: ''
    }
  ]

  const publications = {
    published: [
      { text: '[3] Jung, S., Ku, X., & Choi, I. (2025). Why Do Happy People Exercise More? The Mediating Roles of Motivation for Exercise. Journal of Happiness Studies, 26(4), 1-26.', doi: 'https://doi.org/10.1007/s10902-025-00885-5' },
      { text: '[2] Kreibig, S. D., Jung, S., Samson, A. C., & Gross, J. J. (2025). Experiential, Expressive, and Physiological Effects of Extrinsic and Intrinsic Emotion Self-Regulation Instruction. Psychophysiology.', doi: 'https://doi.org/10.1111/psyp.70153' },
      { text: '[1] *Jung, S., *Ku, X., & Choi, I. (2023). What Activities Do Happy People Engage In? Korea Happiness Map 2023, 145-153.', doi: null }
    ],
    submitted: [
      '[2] *Jung, S., *Ku, X., Jun, Y., & Choi, I. Buying Time, To Do or Not To Do? The Effect of Time Saving and Task Avoidance Purchases on Happiness.',
      '[1] Jung, Y., Jung, S., & Hahn, S. The Effect of Emotional Clarity on Happiness: Focusing on the Mediating Effect of Deliberate Rumination.'
    ]
  }

  const presentations = [
    '[4] Jung, S., Jyung, M., & Choi, I. (2023.11). Valuing Relationship Buffers the Negative Effect of Living Alone on Happiness. KSPPA, Poster Presentation.',
    '[3] Jung, S., Ku, X., & Choi, I. (2023.11). Why Do Happy People Exercise More? KSPPA, Oral Presentation.',
    '[2] Jung, S., Ku, X., Jun, Y., & Choi, I. (2023.3). Buying Time, To Do or Not To Do? ICPS Belgium, Poster Presentation.',
    '[1] Jung, S. et al. (2020.8). Productivity Obsession Scale Development and Validation. KPA, Poster Presentation.'
  ]

  const teaching = [
    { period: '2025.11-12', content: '서울대 학부생 우수논문 프로그램 멘토' },
    { period: '2022 가을, 2021 가을', content: '서울대 "사회심리학 및 실험" 조교' },
    { period: '2022 봄', content: '서울대 "굿라이프 심리학" 조교' },
    { period: '2022.3-12', content: '서울대 학부생 독립연구 프로그램 멘토' }
  ]

  const awards = [
    { year: '2023', content: '미래 심리학자상 - 한국사회및성격심리학회' },
    { year: '2022', content: '서울대 대학원 성적우수 장학금' },
    { year: '2019', content: '서울대 학부생 독립연구 공모전 우수상 & 연구비 300만원' },
    { year: '2019', content: '서울대 학부 전액 성적우수 장학금' }
  ]

  return (
    <section id="research" className="section research-section">
      <div className="section-container">
        <h2 className="section-heading gradient-text">연구</h2>

        {/* Education */}
        <div className="subsection">
          <h3 className="subsection-title">학력</h3>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-institution">{item.institution}</div>
                  <div className="timeline-degree">{item.degree}</div>
                  {item.description && <div className="timeline-description">{item.description}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="subsection">
          <h3 className="subsection-title">연구 경력</h3>
          <div className="timeline">
            {experience.map((item, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-organization">{item.organization}</div>
                  <div className="timeline-role">{item.role}</div>
                  {item.description && <div className="timeline-description">{item.description}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="subsection">
          <h3 className="subsection-title">논문</h3>

          <h4 className="publication-category">출판됨</h4>
          <div className="publication-list">
            {publications.published.map((pub, index) => (
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

          <h4 className="publication-category">제출됨</h4>
          <div className="publication-list">
            {publications.submitted.map((pub, index) => (
              <div key={index} className="publication-item" style={{ animationDelay: `${index * 0.1}s` }}>
                {pub}
              </div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div className="subsection">
          <h3 className="subsection-title">학회 발표</h3>
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
          <h3 className="subsection-title">강의 및 멘토링</h3>
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
          <h3 className="subsection-title">수상 및 펀딩</h3>
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
