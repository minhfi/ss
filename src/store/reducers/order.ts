import { IOrderState, IOrderAction, ORDER_SET_PRODUCT, ORDER_SET_USER } from './../types'

const initState: IOrderState = {
  product: null,
  user: null
}

export const reducer = (state = initState, action: IOrderAction) => {
  switch (action.type) {
    case ORDER_SET_PRODUCT:
      return {
        ...state,
        product: action.value
      }
    case ORDER_SET_USER:
      return {
        ...state,
        user: action.value
      }
    default:
      return state
  }
}
