import React from 'react'
import Col from 'component/base/Column'
import Row from 'component/base/Row'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'theme'
import { BrowserRouter, Route, Redirect, Switch, withRouter, useLocation, useRouteMatch, useParams } from 'react-router-dom'
import Component from 'pages/Component/ComponentContainer'
import BaseRenderer from 'pages/BaseRenderer'
import Locale from 'locale/locale'
import RowAndColumn from 'component/explain/RowAndColumn'
import { toast } from 'component/base/toast-manager'

const $c = Locale('common')

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
    flex-direction: column;
  }
`
const Aside = styled.nav`
  width: 20vw;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: 0.7rem;
  }
  background-color: ${theme.color.gray7};
  margin-right: 5%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 3px 3px 10px ${theme.color.gray9}, -2px -2px 5px ${theme.color.gray6};
`

const Content = styled.div`
  width: 60vw;
  max-height: 600px;
  overflow-y: auto;
  background-color: ${theme.color.gray7};
  border-radius: 10px;
  padding: 20px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: 0.9rem;
    margin-top: 20px;
  }
  box-shadow: 3px 3px 10px ${theme.color.gray9}, -2px -2px 5px ${theme.color.gray6};
`

const SLink = styled(Link)<{ active: number }>`
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? theme.color.gray6 : 'transparent')};
  color: ${(props) => (props.active ? theme.color.gray0 : theme.color.gray5)};

  transition: all 0.2s linear;
  &:last-child {
    margin-bottom: 0px;
  }
`

const BaseContainer = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Section>
      <Aside>
        <Col>
          <SLink to='/base/RowAndColumn' active={pathname === '/base/RowAndColumn' || pathname === '/base' ? 1 : 0}>
            {$c('row_and_column')}
          </SLink>
          <SLink to='/base/Toast' active={pathname === '/base/Toast' ? 1 : 0}>
            {$c('toast')}
          </SLink>
          <SLink to='/base/HoverText' active={pathname === '/base/HoverText' ? 1 : 0}>
            {$c('hover_text')}
          </SLink>
          <SLink to='/base/Popup' active={pathname === '/base/Popup' ? 1 : 0}>
            {$c('popup')}
          </SLink>
          <SLink to='/base/ContextMenu' active={pathname === '/base/ContextMenu' ? 1 : 0}>
            {$c('context_menu')}
          </SLink>
        </Col>
      </Aside>
      <Col>
        <Content>
          {pathname === '/base' && <RowAndColumn />}
          <Route path='/base/:id' component={BaseRenderer} />
        </Content>
      </Col>
    </Section>
  )
}

export default BaseContainer
