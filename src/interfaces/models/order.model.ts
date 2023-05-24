import { IObject } from '../object.interface'
import { IAddressModel } from './address.model'

export interface IOptionsAddress {
  provinces: IObject[]
  districts: IObject[]
  wards: IObject[]
}

export interface IFormDataOrder {
  name: string
  phone: string
  email?: string
  province: IObject | null
  district: IObject | null
  ward: IObject | null
  address: string
  note?: string
}

export interface IOrder {
  customer: {
    address: {
      customer_address?: string
      note?: string
      province?: IAddressModel
      district?: IAddressModel
      ward?: IAddressModel
    }
    name: string
    phone: string
    email?: string
  }
  order_value: number
  transaction_fee: number
  paid_date: string
  transaction_id: string
  products: {
    name: string
    price: number
    product_id?: string
    quantity: number
  } []
}

export interface IOrderResponse {
  order_id?: number
  payment_url?: string
}
