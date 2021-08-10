import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, useRouteMatch } from 'react-router'
import Locale from 'locale/locale'
import RowAndColumn from 'component/explain/RowAndColumn'
import Toast from 'component/explain/Toast'
import theme from 'theme'
import HoverText from 'component/base/HoverText'

const $c = Locale('common')

const UnknownDiv = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  font-weight: ${theme.semiBold};
  color: ${theme.fontColor.white};
`

const BaseRenderer = ({ match, history, location }: RouteComponentProps<{ id: string }>) => {
  const {
    params: { id },
  } = match
  const renderHelper = () => {
    switch (id) {
      case 'RowAndColumn':
        return <RowAndColumn />
      case 'Toast':
        return <Toast />
      case 'HoverText':
        return <HoverText />
      default:
        return (
          <UnknownDiv>
            <span>?</span>
            <span>?</span>
            <span>?</span>
          </UnknownDiv>
        )
    }
  }

  return renderHelper()
}

export default BaseRenderer
