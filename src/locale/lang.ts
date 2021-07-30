import ko from './ko'
import en from './en'

const lang: { [lang: string]: { [page: string]: { [text: string]: string | undefined } | undefined } | undefined } = {
  ko,
  en,
}

export default lang
