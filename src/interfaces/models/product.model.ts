import { IModel } from './model'

export interface IProductModel extends IModel {
  name: string
  organization_id?: number
  price?: number
  prices?: {
    price: number
    index: number
  }[]
}
