import Language from './lang'

// locale file index
const Locale = (fileIndex: string) => {
  const currentLang = localStorage.getItem('lang') ?? 'ko'

  // locale text index
  return (textIndex: string) => {
    const _r = Language[currentLang]?.[fileIndex]?.[textIndex]
    const r = _r ?? `!!!.${textIndex}.!!!`

    if (!Language[currentLang]) console.error(`Language Pack Error : ${textIndex} is not a supported language or locale`)
    else if (Language[currentLang]?.[fileIndex] === undefined) console.error(`Language Pack Error : ${fileIndex} is not a registered page`)
    else if (_r === undefined) console.error(`Language Pack Error : ${textIndex} is not a registered text`)

    return r
  }
}

export default Locale
