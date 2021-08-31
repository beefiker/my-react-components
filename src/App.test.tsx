import { getLocaleFromAddLocale } from 'scripts/function'

describe('Formatting', () => {
  it('CONNECT items in "deleteList" with "id={item}&"', () => {
    const singleItem = [1].map((item) => `id=${item}`).join('&')
    expect(singleItem).toBe('id=1')

    const multipleItems = [1, 2, 3].map((item) => `id=${item}`).join('&')
    expect(multipleItems).toBe('id=1&id=2&id=3')
  })
})

describe('Functions', () => {
  it('GET text from add-locale using current language setting from localStorage', () => {
    const textFromAddLocale = getLocaleFromAddLocale('home.test')
    expect(textFromAddLocale).toEqual('테스트')
  })
})
