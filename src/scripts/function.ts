import ENC from 'js-sha256'
import { Base64 } from 'js-base64'
import serialize from 'serialize-javascript'

import { AxiosResponse } from 'axios'
import { add_locale, lang } from 'locale/add-locale'

export enum DownloadFormatTypes {
  JSON = 'json',
  XML = 'xml',
  TAG_VALUE = 'tagvalue',
  RDF = 'rdf',
  YAML = 'yaml',
  ZIP = 'zip',
}

export const downloadHelper = (type: DownloadFormatTypes, res: AxiosResponse<any>) => {
  switch (type) {
    case DownloadFormatTypes.ZIP:
      {
        const a_tag = document.createElement('a')
        const blob = new Blob([res.data])
        a_tag.setAttribute('href', window.URL.createObjectURL(blob))
        a_tag.setAttribute('download', 'file.zip')
        a_tag.click()
        a_tag.remove()
      }
      break
    case DownloadFormatTypes.JSON:
      {
        const a_tag = document.createElement('a')
        const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(res.data))
        a_tag.setAttribute('href', data)
        a_tag.setAttribute('download', 'report.json')
        a_tag.click()
        a_tag.remove()
      }
      break
    case DownloadFormatTypes.XML:
      {
        const a_tag = document.createElement('a')
        const blob = new Blob([res.data], { type: 'text/plain' })

        a_tag.setAttribute('href', window.URL.createObjectURL(blob))
        a_tag.setAttribute('download', 'report.xml')
        a_tag.click()
        a_tag.remove()
      }
      break

    case DownloadFormatTypes.RDF:
      {
        const a_tag = document.createElement('a')
        const blob = new Blob([res.data], { type: 'text/plain' })

        a_tag.setAttribute('href', window.URL.createObjectURL(blob))
        a_tag.setAttribute('download', 'report.rdf')
        a_tag.click()
        a_tag.remove()
      }
      break

    case DownloadFormatTypes.TAG_VALUE:
      {
        const a_tag = document.createElement('a')
        const blob = new Blob([res.data], { type: 'text/plain' })

        a_tag.setAttribute('href', window.URL.createObjectURL(blob))
        a_tag.setAttribute('download', 'report.spdx')
        a_tag.click()
        a_tag.remove()
      }
      break

    case DownloadFormatTypes.YAML:
      {
        const a_tag = document.createElement('a')
        const blob = new Blob([res.data], { type: 'text/plain' })

        a_tag.setAttribute('href', window.URL.createObjectURL(blob))
        a_tag.setAttribute('download', 'report.yaml')
        a_tag.click()
        a_tag.remove()
      }
      break
  }
}

export const comma = (i: number | string): string => {
  if (i == null) {
    return ''
  }
  return i
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

interface regexModel {
  from: string
  to: string
}

export const formatter = (text: string, regex: Array<regexModel>): string => {
  let _ = text

  for (const item of regex) {
    _ = _.replaceAll(`{${item.from}}`, item.to)
  }

  return _
}

export const getExtension = (name: string) => {
  const name_arr = name.split('.')
  const length = name_arr.length
  const extension = name_arr[length - 1]

  return extension
}

export const getLocaleFromAddLocale = (e: string) => {
  try {
    if (!e) {
      return '-'
    }
    const keys = e.split('.')

    const locale = keys.reduce((acc: { [key: string]: any }, current: string) => {
      if (acc[current]) {
        return acc[current]
      } else {
        return acc
      }
    }, add_locale)

    return locale[lang] ?? `[${e}] is not a registered error. Please check the error code`
  } catch (err) {
    return `${e} is not a registered error. Please check the error code`
  }
}

/* Cookies */
/* 해당이름으로 10분짜리 쿠키값을 생성. 값은 암호화 */
export const setCookie = function (name: string, value: string, sec?: number) {
  const date = new Date()

  if (sec) {
    // 1 sec
    date.setTime(date.getTime() + sec * 1000)
  } else {
    // 10 min
    date.setTime(date.getTime() + 10 * 60 * 1000)
  }

  const val = Base64.encode(value) + '.' + ENC.sha256(serialize({ n4a3m2e1: name, v1a2l3u4e5: Base64.encode(value) }))

  document.cookie = name + '=' + val + ';expires=' + date.toUTCString() + ';path=/'
}

/* 해당 이름의 쿠키값을 얻는다. 데이터가 변조되었다면 빈값을 리턴. */
export const getCookie = function (name: string): string {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')

  const return_value = value ? value[2] : ''

  const cookie_value = `${return_value}`.split('.')[0]
  const hash_value = `${return_value}`.split('.')[1] ?? ''

  if (hash_value === ENC.sha256(serialize({ n4a3m2e1: name, v1a2l3u4e5: cookie_value }))) {
    return Base64.decode(cookie_value)
  } else {
    return ''
  }
}

export const getCharacterNumber = (num: number) => {
  let tmp = `${num}`
  let character = ''
  if (num > 1000000) {
    tmp = (num / 1000000).toFixed(1)
    character = 'M'
  } else if (num > 1000) {
    tmp = (num / 1000).toFixed(1)
    character = 'K'
  }

  return `${tmp}${character}`
}

export const nineplus = (num: number) => {
  if (!num) {
    return `0`
  }

  if (num > 100) {
    return '99+'
  } else {
    return `${num}`
  }
}

export const logout = () => {
  const id_remember = localStorage.getItem('id-remember')

  localStorage.clear()
  if (id_remember) {
    localStorage.setItem('id-remember', id_remember)
  }
}
