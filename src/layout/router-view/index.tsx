import { FC } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { StorageUtil } from 'src/utils/storage.util'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { IRouterOption } from 'src/interfaces'
import { routes } from 'src/router'
import { LayoutContainer } from '../layout-container'

const AuthRoute: FC<{
  path: string
  exact?: boolean
  component: IRouterOption['component']
}> = (props) => {
  const location = useLocation()
  const isAuthenticated = true

  if (isAuthenticated) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    )
  }

  StorageUtil.setItem(AUTH_FALLBACK_KEY, `${location.pathname}${location.search}`)
  return <Redirect to="/"/>
}

const RoutesSwitch = (
  <Switch>
    {routes.map(item => {
      if (item.meta?.requireAuth) {
        return <AuthRoute key={item.path} {...item}/>
      }

      return (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          component={item.component}
        />
      )
    })}
  </Switch>
)

export const RouterView: FC = () => {
  return (
    <LayoutContainer>
      {RoutesSwitch}
    </LayoutContainer>
  )
}
