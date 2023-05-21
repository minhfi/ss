import { RouteProps } from 'react-router'

export interface IRouterOption {
  path: string
  component: RouteProps['component']
  name?: string
  exact?: boolean
  superAdmin?: boolean
  meta?: {
    requireAuth?: boolean
    [key: string]: any
  }
}
