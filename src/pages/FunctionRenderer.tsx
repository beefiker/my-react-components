import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, useRouteMatch } from 'react-router'
import Locale from 'locale/locale'
import RowAndColumn from 'component/explain/RowAndColumn'
import Toast from 'component/explain/Toast'
import theme from 'theme'
import HoverText from 'component/base/HoverText'
import PopupViewer from 'component/base/PopupViewer'
import ContextMenu from 'component/base/ContextMenu'
import ExpContextMenu from 'component/explain/ExpContextMenu'

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

const FunctionRenderer = ({ match, history, location }: RouteComponentProps<{ id: string; type: string; url: string }>) => {
  const {
    params: { id },
  } = match
  console.log(id)
  const renderHelper = () => {
    switch (id) {
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

export default FunctionRenderer
