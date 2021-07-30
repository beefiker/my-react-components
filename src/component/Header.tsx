import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import theme from 'theme'
import Locale from 'locale/locale'

const $c = Locale('common')

const MyHeader = styled.header`
  position: sticky;
  width: 100%;
  height: 40px;
  background-color: ${theme.color.gray8};
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const HeaderLink = styled(Link)<{ active: number }>`
  border-bottom: 3px solid ${(props) => (props.active ? `${theme.color.blue}` : `transparent`)};
  width: max-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  @media only screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`

const Header = () => {
  const { pathname } = useLocation()
  return (
    <MyHeader>
      <HeaderLink to='/base' active={pathname.includes('base') ? 1 : 0}>
        {$c('base')}
      </HeaderLink>
      <HeaderLink to='/component' active={pathname === '/component' ? 1 : 0}>
        {$c('component')}
      </HeaderLink>
    </MyHeader>
  )
}

export default Header
