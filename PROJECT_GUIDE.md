# 정수민 개인 웹사이트

## 프로젝트 개요

### 목적
- 이력서/커리어 소개 + 개발 포트폴리오 웹사이트
- 브런치, 링크드인 등을 통해 방문하는 모든 사람 대상 (채용담당자, 학계, 코칭 클라이언트 등)

### 언어
- 한국어 버전으로 개발 완료
- 영어 버전은 추후 추가 예정

### 기술 스택
- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules (Vanilla CSS)
- **Font**: Pretendard Variable
- **Deployment**: Vercel
- **Version Control**: Git

---

## 디자인 시스템

### 컬러 팔레트 (Neuro Blue)

```css
--primary: #5864FF           /* 메인 컬러 */
--primary-light: #7983FF     /* 호버 상태 */
--primary-dark: #4854E6      /* 액티브 상태 */

--secondary: #8B5CF6         /* 보조 컬러 */
--accent: #FF8B5A            /* 강조 컬러 */

--text-primary: #1F2937      /* 주요 텍스트 */
--text-secondary: #6B7280    /* 보조 텍스트 */

--bg-primary: #FFFFFF        /* 메인 배경 */
--bg-secondary: #F9FAFB      /* 보조 배경 */
--bg-tertiary: #F3F4F6       /* 3차 배경 */

--border-color: #EBEBEC      /* 테두리 */
```

### 타이포그래피
- **폰트**: Pretendard Variable (Google Fonts)
- **헤딩**: 1.5rem - 2rem, 700 weight
- **본문**: 0.95rem - 1rem, 400-500 weight
- **작은 텍스트**: 0.875rem, 600 weight

### 간격 시스템
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
```

### Border Radius (Betterly 스타일)
```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 32px
```

### 그림자
```css
--shadow-primary: 0 6px 32px rgba(36, 41, 101, 0.08)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15)
```

---

## 레이아웃 구조

### 데스크톱 (1024px+)
```
┌─────────────────────────────────────────────────┐
│  ┌──────────┐  ┌─────────────────────────────┐  │
│  │          │  │                             │  │
│  │   Hero   │  │       최근 소식              │  │
│  │  (fixed) │  │                             │  │
│  │          │  ├─────────────────────────────┤  │
│  │  - 사진   │  │                             │  │
│  │  - 이름   │  │          연구               │  │
│  │  - 소개   │  │                             │  │
│  │  - Skills │  ├─────────────────────────────┤  │
│  │  - Links  │  │                             │  │
│  │          │  │          업무               │  │
│  │   Nav    │  │                             │  │
│  │  --------│  ├─────────────────────────────┤  │
│  │  최근소식 │  │                             │  │
│  │  연구     │  │       프로젝트              │  │
│  │  업무     │  │                             │  │
│  │  프로젝트 │  │                             │  │
│  │          │  │                             │  │
│  └──────────┘  └─────────────────────────────┘  │
│   280px 고정           스크롤 영역               │
└─────────────────────────────────────────────────┘
```

### 모바일 (768px 미만)
- Hero: 상단에 펼쳐서 표시
- Navigation: 햄버거 메뉴
- 콘텐츠: 세로 스크롤

---

## 섹션별 상세 구조

### 1. Hero (Fixed Sidebar)
```
[프로필 이미지 - 100px 원형]

정수민
Sumin Jung

심리학 연구자 · 프로덕트 오너 · 코칭심리사

Skills
R, Python, MySQL, JavaScript, HTML, CSS

[LinkedIn] [Brunch] [Email]

──────────────

최근 소식
연구
업무
프로젝트
```

### 2. 최근 소식 (Latest)
- 최신 업데이트 카드 형태
- **페이지네이션**: 처음 1개 → 더보기 (+4개, 총 5개) → 더보기 (+5개씩)
- 섹션 하단 여백 없이 연구 섹션 바로 연결

### 3. 연구 (Research)

#### 학력
- 타임라인 컴포넌트
- 박사과정에 지도교수 및 연구 주제 표시
  - "지도교수: 최인철 박사 · 연구 주제: 행복 · 웰빙 · 운동 · 동기 · 정서조절"

#### 연구 경력
- 타임라인 컴포넌트
- 교수님 이름 뒤에 "박사" 추가
  - 최인철 박사, 제임스 그로스 박사, Sylvia Kreibig 박사, 안우영 박사

#### 논문
**출판됨**
- 리스트 형태 (박스 없음)
- DOI 링크 제공 (클릭 가능한 [DOI] 링크)
  - [3] DOI: 10.1007/s10902-025-00885-5
  - [2] DOI: 10.1111/psyp.70153
  - [1] 책 챕터 (DOI 없음)

**제출됨**
- 리스트 형태

#### 학회 발표
- 리스트 형태

#### 강의 및 멘토링
- **Compact 레이아웃**: 날짜와 내용을 한 줄에 표시
- 구분선으로 항목 구분

#### 수상 및 펀딩
- **Compact 레이아웃**: 연도와 내용을 한 줄에 표시
- 구분선으로 항목 구분

### 4. 업무 (Work)

#### 소개 문구
```
디자이너, 개발자, 심리학 전문가와 협업하여 심리학 기반 제품을 기획합니다.
정식 출시 전 PoC나 파일럿 서비스가 필요할 때,
그리고 팀원들의 반복 업무를 자동화할 때 직접 풀스택으로 개발합니다.
```

#### 경력 카드
- **Goodlife Lab** (2025.4 - 현재)
  - HR 솔루션 업무
  - **프로덕트 개발**: 타임라인 형태
  - 최신 5개 표시 → 더보기 (+5개씩)

- **LOMY** (2021.6 - 2022.2)
- **CJ AI 연구센터** (2021.5 - 2021.8)

### 5. 프로젝트 (Projects)

#### 코칭
- 단일 카드 형태
- 코칭심리사 1급 수련 정보

#### 개발 포트폴리오
- 그리드 레이아웃
- "준비 중" 배지

#### 기타
- 섹션 유지 (현재 비어있음)

---

## 컴포넌트 라이브러리

### Timeline Component
```jsx
<div className="timeline">
  <div className="timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <div className="timeline-period">{period}</div>
      <div className="timeline-institution">{title}</div>
      <div className="timeline-degree">{subtitle}</div>
      {description && <div className="timeline-description">{description}</div>}
    </div>
  </div>
</div>
```

**사용 섹션**: 학력, 연구 경력, 프로덕트 개발

### Compact List Component
```jsx
<div className="compact-list">
  <div className="compact-item">
    <span className="compact-date">{date}</span>
    <span className="compact-content">{content}</span>
  </div>
</div>
```

**사용 섹션**: 강의 및 멘토링, 수상 및 펀딩

### Card Component
```jsx
<div className="card">
  <div className="card-header">...</div>
  <div className="card-content">...</div>
</div>
```

**사용 섹션**: 최근 소식, 업무, 코칭

---

## 개발 환경 설정

### 로컬 개발
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 프로젝트 구조
```
personal-web-page/
├── public/
│   └── profile.jpg              # 프로필 이미지
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # 고정 사이드바
│   │   └── Hero.css
│   ├── sections/
│   │   ├── Latest.jsx          # 최근 소식
│   │   ├── Latest.css
│   │   ├── Research.jsx        # 연구
│   │   ├── Research.css
│   │   ├── Work.jsx            # 업무
│   │   ├── Work.css
│   │   ├── Projects.jsx        # 프로젝트
│   │   └── Projects.css
│   ├── App.jsx                 # 메인 앱
│   ├── App.css
│   ├── index.css               # 글로벌 스타일 + 디자인 시스템
│   └── main.jsx                # 엔트리 포인트
├── index.html
├── package.json
├── vite.config.js
└── PROJECT_GUIDE.md
```

---

## 배포 (Vercel)

### 현재 배포 상태
- **플랫폼**: Vercel
- **배포 URL**: https://personal-web-page-[project-id].vercel.app
- **자동 배포**: Git push 시 자동 배포

### Vercel 프로젝트 설정
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 배포 명령어
```bash
# Vercel CLI로 배포 (최초 1회)
npm install -g vercel
vercel

# 이후 배포 (프로덕션)
vercel --prod

# Git을 통한 자동 배포
git add .
git commit -m "message"
git push origin main
```

---

## Git 저장소

### 저장소 정보
- **현재 상태**: 로컬 Git 저장소 (리모트 연결 필요)
- **브랜치**: main

### Git 워크플로우
```bash
# 저장소 초기화 (완료됨)
git init

# 변경사항 커밋
git add .
git commit -m "Commit message"

# 원격 저장소 연결 (필요시)
git remote add origin [GITHUB_URL]
git push -u origin main
```

### .gitignore
```
node_modules/
dist/
.DS_Store
.env
.env.local
```

---

## TODO

### 즉시 작업
- [ ] **도메인 연결**: Gabia에서 구매한 `sumin-jung.com` (3년 이용)을 Vercel 배포에 연결
  - Vercel 프로젝트 설정에서 Custom Domain 추가
  - Gabia DNS 설정에서 A/CNAME 레코드 추가
  - SSL 인증서 자동 발급 확인

### 콘텐츠 업데이트
- [ ] 프로필 사진 최종본 교체
- [ ] 각 프로젝트별 상세 페이지 또는 링크 추가
- [ ] 개발 포트폴리오 프로젝트 추가

### 기능 개선
- [ ] 영어 버전 추가
- [ ] 다크 모드 지원
- [ ] 애니메이션 개선
- [ ] SEO 최적화 (메타 태그, Open Graph)
- [ ] Google Analytics 연동

### 접근성
- [ ] ARIA 라벨 추가
- [ ] 키보드 네비게이션 개선
- [ ] 스크린 리더 테스트

---

## 디자인 참고

### Betterly UI 영감
- 깔끔한 카드 디자인
- 부드러운 그림자
- 일관된 border-radius
- 미니멀한 색상 사용

### 인터랙션 패턴
- 호버 시 살짝 위로 이동 (translateY)
- 타임라인 마커 확대 효과
- 부드러운 transition (0.3s ease)

---

## 트러블슈팅

### 폰트가 로드되지 않는 경우
- Google Fonts CDN 연결 확인
- `index.html`의 `<link>` 태그 확인

### 빌드 오류
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 삭제
npm run build -- --force
```

### Vercel 배포 실패
- Build logs 확인
- 환경 변수 설정 확인
- Node.js 버전 확인 (18.x 이상)

---

## 연락처
- **Email**: sumin.jung@example.com
- **LinkedIn**: https://www.linkedin.com/in/sumin-jung
- **Brunch**: https://brunch.co.kr/@suminjung

---

## 라이선스
MIT License - 개인 포트폴리오 프로젝트
