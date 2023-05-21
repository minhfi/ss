import { IRouterOption } from 'src/interfaces'
import { Forbidden } from './components/403'
import { NotFound } from './components/404'
import { InternalServerError } from './components/500'

export enum ERoutes {
  ERROR_403 = 'Core.403',
  ERROR_404 = 'Core.404',
  ERROR_500 = 'Core.500'
}

export const CoreRoutes: IRouterOption[] = [
  {
    path: '/403',
    exact: true,
    name: ERoutes.ERROR_403,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    name: ERoutes.ERROR_404,
    component: NotFound
  },
  {
    path: '/500',
    exact: true,
    name: ERoutes.ERROR_500,
    component: InternalServerError
  }
]
