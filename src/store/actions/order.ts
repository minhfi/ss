import { IProductModel } from 'src/interfaces'
import { IOrderAction, ORDER_SET_PRODUCT, ORDER_SET_USER } from './../types'

export const setOrderProduct = (value: IProductModel): IOrderAction => ({
  type: ORDER_SET_PRODUCT,
  value
})

export const setOrderUser = (value: {name: string; phone: string}): IOrderAction => ({
  type: ORDER_SET_USER,
  value
})
