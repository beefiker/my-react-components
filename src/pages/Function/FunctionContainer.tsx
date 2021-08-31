import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter, useLocation, useRouteMatch, useParams } from 'react-router-dom'

import FunctionPresenter from './FunctionPresenter'

const FunctionContainer = () => {
  const { pathname } = useLocation()

  return <FunctionPresenter pathname={pathname} />
}

export default FunctionContainer
