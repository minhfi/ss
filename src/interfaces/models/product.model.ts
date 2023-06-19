import { IModel } from './model'

export interface IProductModel extends IModel {
  name: string
  organization_id?: number
  price?: number
  isFreeShip?: boolean
  priceSale?: number
  link?: string
  checked?: boolean
  prices?: {
    price: number
    index: number
  }[]
}
