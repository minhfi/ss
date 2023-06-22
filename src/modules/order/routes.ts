import { IRouterOption } from 'src/interfaces'
import Order from '.'
import OrderSuccess from './OrderSuccess'
import OrderFail from './OrderFail'

export enum EOrderRoutes {
  ORDER = 'Order',
  ORDER_SUCCESS= 'OrderSuccess',
  ORDER_FAIL= 'OrderFail'
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
  },
  {
    path: '/order-fail',
    exact: true,
    name: EOrderRoutes.ORDER_FAIL,
    component: OrderFail
  }
]
