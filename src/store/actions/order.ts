import { IProductModel } from 'src/interfaces'
import { IOrderAction, ORDER_SET_PRODUCT, ORDER_SET_PRODUCT_QUANTITY } from './../types'

export const setOrderProduct = (value: IProductModel): IOrderAction => ({
  type: ORDER_SET_PRODUCT,
  value
})

export const setOrderProductQuantity = (value: number): IOrderAction => ({
  type: ORDER_SET_PRODUCT_QUANTITY,
  value
})
