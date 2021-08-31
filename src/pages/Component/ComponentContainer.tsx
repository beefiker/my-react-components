import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter, useLocation, useRouteMatch, useParams } from 'react-router-dom'

import ComponentPresenter from './ComponentPresenter'

const ComponentContainer = () => {
  const { pathname } = useLocation()

  return <ComponentPresenter pathname={pathname} />
}

export default ComponentContainer
