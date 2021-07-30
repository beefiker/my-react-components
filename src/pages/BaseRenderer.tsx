import React from 'react'
import { RouteComponentProps, useRouteMatch } from 'react-router'
import Locale from 'locale/locale'
import RowAndColumn from 'component/explain/RowAndColumn'
import Toast from 'component/explain/Toast'

const $c = Locale('common')

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
      default:
        return <h1>???</h1>
    }
  }

  return renderHelper()
}

export default BaseRenderer
