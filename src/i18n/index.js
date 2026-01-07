import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ko from './locales/ko.json'
import en from './locales/en.json'

// 브라우저 언어 감지 함수
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  // 한국어(ko, ko-KR 등)면 'ko', 그 외에는 'en' 반환
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

// localStorage에 저장된 언어가 있으면 그것을 사용, 없으면 브라우저 언어 감지
const savedLanguage = localStorage.getItem('language') || detectBrowserLanguage()

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
