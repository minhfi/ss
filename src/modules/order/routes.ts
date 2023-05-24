import { IRouterOption } from 'src/interfaces'
import Order from '.'
import OrderSuccess from './OrderSuccess'

export enum EOrderRoutes {
  ORDER = 'Order',
  ORDER_SUCCESS= 'OrderSuccess'
}

export const OrderRoutes: IRouterOption[] = [
  {
    path: '/order',
    exact: true,
    name: EOrderRoutes.ORDER,
    component: Order
  },
  {
    path: '/order-success',
    exact: true,
    name: EOrderRoutes.ORDER_SUCCESS,
    component: OrderSuccess
  }
]
