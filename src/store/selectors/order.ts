import { createSelector } from 'reselect'
import { TAppState, TSelectorResult } from 'src/store'
import { IOrderState } from '../types'

export const getOrderProduct: TSelectorResult<IOrderState['product']> = createSelector(
  (state: TAppState) => state.order,
  (order: IOrderState) => order.product
)

export const getOrderUser: TSelectorResult<IOrderState['user']> = createSelector(
  (state: TAppState) => state.order,
  (order: IOrderState) => order.user
)
