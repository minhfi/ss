import { IProductModel } from 'src/interfaces'

/* layout actions */
export const ORDER_SET_PRODUCT = 'ORDER_SET_PRODUCT'
export const ORDER_SET_USER = 'ORDER_SET_USER'

/**
 * state
 */

export interface IOrderState {
  product: IProductModel | null
  user: {
    name: string
    phone: string
  } | null
}

/**
 * actions
 */
export interface IOrderAction {
  type:
    | typeof ORDER_SET_PRODUCT
    | typeof ORDER_SET_USER
  value?: IProductModel | number | null | { name: string; phone: string }
}
