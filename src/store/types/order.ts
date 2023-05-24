import { IProductModel } from 'src/interfaces'

/* layout actions */
export const ORDER_SET_PRODUCT = 'ORDER_SET_PRODUCT'
export const ORDER_SET_PRODUCT_QUANTITY = 'ORDER_SET_PRODUCT_QUANTITY'

/**
 * state
 */

export interface IOrderState {
  product: IProductModel | null
  quantity: number
}

/**
 * actions
 */
export interface IOrderAction {
  type: typeof ORDER_SET_PRODUCT | typeof ORDER_SET_PRODUCT_QUANTITY
  value?: IProductModel | number | null
}
