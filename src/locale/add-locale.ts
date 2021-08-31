const possible_lang = ['ko', 'en']
const current_lang = (localStorage.getItem('lang') as 'ko' | 'en') ?? 'ko'

export const lang: 'ko' | 'en' | 'default' = possible_lang.includes(current_lang) ? current_lang : 'default'

export const add_locale = {
  home: {
    test: {
      ko: '테스트',
      en: 'TEST',
      default: '테스트',
    },
  },
  header: {
    base: {
      ko: '베이스',
      en: 'Base',
      default: '베이스',
    },
    component: {
      ko: '컴포넌트',
      en: 'Component',
      default: '컴포넌트',
    },
    function: {
      ko: '함수',
      en: 'Function',
      default: '함수',
    },
  },
}
