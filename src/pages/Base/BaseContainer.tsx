import React from 'react'
import { BrowserRouter, Route, Redirect, Switch, withRouter, useLocation, useRouteMatch, useParams } from 'react-router-dom'
import BasePresenter from './BasePresenter'

const BaseContainer = () => {
  const { pathname } = useLocation()

  console.log(pathname)
  return <BasePresenter pathname={pathname} />
}

export default BaseContainer
