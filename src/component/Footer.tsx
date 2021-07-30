import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import Row from './base/Row'
import Locale from 'locale/locale'
import Col from './base/Column'

const $c = Locale('common')

const MyFooter = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${theme.color.gray8};
  color: ${theme.color.white};
`

const Footer = () => {
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('lang', e.target.value)
    window.location.reload()
  }
  return (
    <MyFooter>
      <Row>
        <Col>
          <p>this is footer</p>
        </Col>
        <select value={localStorage.getItem('lang') ?? 'ko'} onChange={onChangeLang}>
          <option value='ko'>{$c('ko')}</option>
          <option value='en'>{$c('en')}</option>
        </select>
      </Row>
    </MyFooter>
  )
}

export default Footer
