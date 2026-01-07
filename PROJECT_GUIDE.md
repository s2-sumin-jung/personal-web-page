# 정수민 개인 웹사이트

## 프로젝트 개요

### 목적
- 이력서/커리어 소개 + 개발 포트폴리오 웹사이트
- 브런치, 링크드인 등을 통해 방문하는 모든 사람 대상 (채용담당자, 학계, 코칭 클라이언트 등)

### 언어
- **한국어/영어 지원 완료** (react-i18next)
- 언어 토글 버튼: 우측 상단 고정 (🌐 EN / 한국어)
- 언어 설정 localStorage에 저장
- **브라우저 언어 자동 감지**: 한국 사용자는 한국어, 해외 사용자는 영어 기본 설정

### 기술 스택
- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules (Vanilla CSS)
- **Font**: Pretendard Variable
- **i18n**: react-i18next
- **UI Components**: react-vertical-timeline-component, react-icons
- **Deployment**: Vercel
- **Domain**: sumin-jung.com (Gabia, 3년)
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

### 모바일 (1023px 미만)
- Hero: 상단에 펼쳐서 표시, SKILLS 가운데 정렬
- Navigation: 햄버거 메뉴 (좌측 상단, 좌측에서 슬라이드)
- 언어 토글: 우측 상단 고정
- 콘텐츠: 세로 스크롤

#### 모바일 메뉴 (MobileMenu.jsx)
- 햄버거 버튼: `position: fixed; left: 1rem; top: 1rem`
- 메뉴 패널: 좌측에서 슬라이드 인/아웃
- 오버레이: `pointer-events: none` (닫혔을 때 클릭 방지)
- i18n 지원: 한국어 "메뉴" / 영어 "Menu"

---

## 섹션별 상세 구조

### 1. Hero (Fixed Sidebar)
```
[프로필 이미지 - 100px 원형]

정수민
Sumin Jung

심리학 연구자 · 프로덕트 오너 · 코치 수련생
심리학을 기술로 구현하여 누구나 행복에 쉽게 다가갈 수 있는 세상을 만듭니다.

Skills
R, Python, NLP, React, React Native, Node.js, MySQL

[LinkedIn] [Brunch] [Email]

──────────────

최근 소식
연구 경력
회사 경력
프로젝트
```

### 2. 최근 소식 (Latest)
- 최신 업데이트 카드 형태
- **페이지네이션**: 처음 1개 → 더보기 (+4개, 총 5개) → 더보기 (+5개씩)
- 섹션 하단 여백 없이 연구 섹션 바로 연결

### 3. 연구 경력 (Research Experience)

#### 학력
- 타임라인 컴포넌트
- 박사과정에 지도교수 및 연구 주제 표시
  - "지도교수: 최인철 박사 · 연구 주제: 행복 · 웰빙 · 운동 · 동기 · 정서조절"
- 석사에 지도교수 및 논문 정보 표시
  - "지도교수: 최인철 박사 · 석사논문 주저자 (Journal of Happiness Studies, 2025 게재)"

#### 연구 경험
- 타임라인 컴포넌트
- 교수님 이름 뒤에 "박사" 추가
  - 최인철 박사, 제임스 그로스 박사, Sylvia Kreibig 박사, 안우영 박사
- 멘토 목록: 정민화 박사, 구자일 박사, 홍경화 박사

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
- 학회 약어 풀네임 표기: KSPPA, ICPS, KPA (한/영 버전별 다름)

#### 강의 및 멘토링
- **Compact 레이아웃**: 날짜와 내용을 한 줄에 표시
- 구분선으로 항목 구분

#### 수상 및 펀딩
- **Compact 레이아웃**: 연도와 내용을 한 줄에 표시
- 구분선으로 항목 구분

### 4. 회사 경력 (Work Experience)

#### 소개 문구
```
디자이너, 개발자, 심리학 전문가와 협업하여 심리학 기반 제품을 기획합니다.
정식 출시 전 PoC나 파일럿 서비스가 필요할 때,
그리고 팀원들의 반복 업무를 자동화할 때 직접 풀스택으로 개발합니다.
```

#### 경력 카드
- **Goodlife Lab** (2025.4 - 현재)
  - HR 솔루션 업무
  - **프로덕트 개발**: Compact List 테이블 형태 (날짜 | 제품명 | 설명)
  - 최신 5개 표시 → 더보기 (+5개씩)

- **LOMY** (2021.6 - 2022.2)
  - 특허 등록: DOI 링크 제공 (doi.org/10.8080/...)
- **CJ AI 연구센터** (2021.5 - 2021.8)

### 5. 프로젝트 (Projects)

#### 코칭
- 단일 카드 형태
- 코칭심리사 1급 수련 정보
  - 한국어: "코칭심리사 1급 수련 과정"
  - 영어: "Coaching Psychologist (Advanced) Training" (Level 1은 초급처럼 들려서 Advanced 사용)

#### 개발 포트폴리오
- 그리드 레이아웃
- "준비 중" 배지

#### 기타
- 섹션 유지 (현재 비어있음)

---

## 컴포넌트 라이브러리

### Timeline Component (react-vertical-timeline-component)
```jsx
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap, FaFlask } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

<VerticalTimeline lineColor="var(--border-color)" layout="1-column-left">
  <VerticalTimelineElement
    date={period}
    iconStyle={{ background: 'var(--primary)', color: '#fff' }}
    icon={<FaGraduationCap />}
    contentStyle={{ background: 'var(--bg-secondary)', boxShadow: 'none' }}
  >
    <h4>{institution}</h4>
    <p>{degree}</p>
    {description && <p className="timeline-description">{description}</p>}
  </VerticalTimelineElement>
</VerticalTimeline>
```

**사용 섹션**: 학력 (FaGraduationCap), 연구 경력 (FaFlask)

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

### 주요 의존성
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-i18next": "^15.5.1",
  "i18next": "^25.1.1",
  "react-vertical-timeline-component": "^3.6.0",
  "react-icons": "^5.5.0",
  "prop-types": "^15.8.1"
}
```

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
│   ├── profile.jpg              # 프로필 이미지
│   ├── favicon.svg              # SJ 이니셜 파비콘
│   ├── favicon.png              # PNG 버전
│   └── og-image-v6.png          # OG 이미지 (800x800 정사각형 SJ)
├── src/
│   ├── components/
│   │   ├── Hero.jsx             # 고정 사이드바 + 언어 토글
│   │   ├── Hero.css
│   │   ├── MobileMenu.jsx       # 모바일 햄버거 메뉴
│   │   └── MobileMenu.css
│   ├── sections/
│   │   ├── Latest.jsx           # 최근 소식
│   │   ├── Latest.css
│   │   ├── Research.jsx         # 연구 (타임라인 UI)
│   │   ├── Research.css
│   │   ├── Work.jsx             # 업무
│   │   ├── Work.css
│   │   ├── Projects.jsx         # 프로젝트
│   │   └── Projects.css
│   ├── i18n/
│   │   ├── index.js             # i18n 설정
│   │   └── locales/
│   │       ├── ko.json          # 한국어 번역
│   │       └── en.json          # 영어 번역
│   ├── App.jsx                  # 메인 앱
│   ├── App.css
│   ├── index.css                # 글로벌 스타일 + 디자인 시스템
│   └── main.jsx                 # 엔트리 포인트
├── index.html                   # 메타 태그, OG 이미지, 파비콘 설정
├── package.json
├── vite.config.js
└── PROJECT_GUIDE.md
```

---

## 배포 (Vercel)

### 현재 배포 상태
- **플랫폼**: Vercel
- **프로덕션 URL**: https://sumin-jung.com
- **Vercel URL**: https://personal-web-page-[hash].vercel.app
- **자동 배포**: `vercel --prod --yes` 명령어로 배포

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
npm run build && vercel --prod --yes
```

### DNS 설정 (Gabia)
도메인 `sumin-jung.com`을 Vercel에 연결하기 위한 DNS 설정:

| 타입 | 호스트 | 값/위치 |
|------|--------|---------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com. |

**참고**: CNAME 값은 반드시 점(.)으로 끝나야 함

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

### 완료됨 ✅
- [x] **도메인 연결**: sumin-jung.com → Vercel 연결 완료
- [x] **한영 전환**: react-i18next로 한국어/영어 지원
- [x] **브라우저 언어 자동 감지**: 한국어(ko-*) 사용자는 한국어, 그 외는 영어 기본 설정
- [x] **SEO 최적화**: 메타 태그, Open Graph 이미지 설정
- [x] **파비콘**: SJ 이니셜 로고 (Primary 컬러)
- [x] **OG 이미지**: SJ 정사각형 800x800 (카카오톡 호환)
- [x] **타임라인 UI**: react-vertical-timeline-component 적용
- [x] **모바일 메뉴**: 햄버거 좌측 배치, 좌측 슬라이드, i18n 지원
- [x] **모바일 버그 수정**: 오버레이 클릭 이슈 (pointer-events)
- [x] **Google Analytics**: GA4 연동 (G-0147V3EYQJ)
- [x] **Hero 섹션 강화**: 미션 설명 문구 추가 (한국어/영어)
- [x] **Skills 업데이트**: NLP, React, React Native, Node.js 추가
- [x] **섹션 제목 개선**: 연구 경력, 회사 경력으로 명확화
- [x] **학력 정보 강화**: 석사 학위에 지도교수 및 논문 정보 추가

### 콘텐츠 업데이트
- [ ] 프로필 사진 최종본 교체
- [ ] 각 프로젝트별 상세 페이지 또는 링크 추가
- [ ] 개발 포트폴리오 프로젝트 추가

### 기능 개선
- [ ] 다크 모드 지원
- [ ] 애니메이션 개선
- [ ] GitHub Actions 자동 배포

### 접근성
- [ ] ARIA 라벨 추가
- [ ] 키보드 네비게이션 개선
- [ ] 스크린 리더 테스트

---

## 국제화 (i18n)

### 구조
```
src/i18n/
├── index.js           # i18n 설정 (react-i18next)
└── locales/
    ├── ko.json        # 한국어 번역
    └── en.json        # 영어 번역
```

### 사용 방법
```jsx
import { useTranslation } from 'react-i18next';

function Component() {
  const { t, i18n } = useTranslation();

  // 텍스트 가져오기
  const title = t('research.title');

  // 배열 가져오기
  const items = t('latest.updates', { returnObjects: true });

  // 언어 변경
  i18n.changeLanguage('en');
  localStorage.setItem('language', 'en');
}
```

### 번역 키 구조
- `hero.*`: 사이드바 (이름, 직함, 네비게이션)
- `latest.*`: 최근 소식
- `research.*`: 연구 (학력, 경력, 논문, 발표, 강의, 수상)
- `work.*`: 업무 (경력 카드, 프로덕트 개발)
- `projects.*`: 프로젝트 (코칭, 포트폴리오)
- `common.*`: 공통 (Present 등)

### 언어 토글 버튼
- 위치: 우측 상단 고정 (position: fixed)
- 형태: 🌐 EN / 한국어
- 활성 언어에 Primary 컬러 적용

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

### Safari에서 CSS가 반영 안 될 때
- Safari 설정 → 방문 기록 및 웹 사이트 데이터 지우기
- 또는 시크릿/프라이빗 모드로 접속

### 카카오톡 OG 이미지 캐시 초기화
- https://developers.kakao.com/tool/clear/og 에서 URL 입력 후 초기화

---

## Google Analytics (GA4)

### 측정 ID
- **G-0147V3EYQJ**

### 대시보드
- https://analytics.google.com

### 주요 지표
- 실시간 사용자
- 페이지뷰
- 사용자 위치/기기
- 트래픽 소스

### 코드 위치
- `index.html` 의 `<head>` 태그 내 gtag.js 스크립트

---

## 연락처
- **Email**: sumin.jung@example.com
- **LinkedIn**: https://www.linkedin.com/in/sumin-jung
- **Brunch**: https://brunch.co.kr/@suminjung

---

## 라이선스
MIT License - 개인 포트폴리오 프로젝트
