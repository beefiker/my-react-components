import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import theme from 'theme'
import Locale from 'locale/locale'
import { getLocaleFromAddLocale } from 'scripts/function'

const $c = Locale('common')

const MyHeader = styled.header`
  position: sticky;
  width: 100%;
  height: 60px;
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px ${theme.color.gray8};
  @media only screen and (max-width: 1024px) {
    height: 50px;
  }
`

const HeaderLink = styled(Link)<{ active: number }>`
  min-width: 100px;
  width: max-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  background-color: ${(props) => (props.active ? theme.color.gray8 : theme.color.gray7)};
  box-shadow: 3px 3px 6px ${theme.color.gray9}, -2px -2px 4px ${theme.color.gray6};
  border-radius: 10px;
  margin: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 0.7rem;
    min-width: 60px;
    height: 30px;
    margin: 5px;
  }
`

const Header = () => {
  const { pathname } = useLocation()
  return (
    <MyHeader>
      <HeaderLink to='/base' active={pathname.includes('base') ? 1 : 0}>
        {getLocaleFromAddLocale('header.base')}
      </HeaderLink>
      <HeaderLink to='/component' active={pathname === '/component' ? 1 : 0}>
        {getLocaleFromAddLocale('header.component')}
      </HeaderLink>
      <HeaderLink to='/function' active={pathname === '/function' ? 1 : 0}>
        {getLocaleFromAddLocale('header.function')}
      </HeaderLink>
    </MyHeader>
  )
}

export default Header
