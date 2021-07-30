import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Loader from './Loader'

const Header = lazy(() => import('component/Header'))
const Footer = lazy(() => import('component/Footer'))
const Base = lazy(() => import('pages/Base'))
const Component = lazy(() => import('pages/Component'))

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/base' component={Base} />
          <Route path='/component' exact component={Component} />
          <Redirect from='*' to='/base' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
