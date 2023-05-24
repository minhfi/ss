import { IOrderState, IOrderAction, ORDER_SET_PRODUCT, ORDER_SET_PRODUCT_QUANTITY } from './../types'

const initState: IOrderState = {
  product: null,
  quantity: 1
}

export const reducer = (state = initState, action: IOrderAction) => {
  switch (action.type) {
    case ORDER_SET_PRODUCT:
      return {
        ...state,
        product: action.value
      }
    case ORDER_SET_PRODUCT_QUANTITY:
      return {
        ...state,
        quantity: action.value
      }
    default:
      return state
  }
}
