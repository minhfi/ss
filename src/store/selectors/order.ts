import { createSelector } from 'reselect'
import { TAppState, TSelectorResult } from 'src/store'
import { IOrderState } from '../types'

export const getOrderProduct: TSelectorResult<IOrderState['product']> = createSelector(
  (state: TAppState) => state.order,
  (order: IOrderState) => order.product
)

export const getOrderProductQuantity: TSelectorResult<IOrderState['quantity']> = createSelector(
  (state: TAppState) => state.order,
  (order: IOrderState) => order.quantity
)
