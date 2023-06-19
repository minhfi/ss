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

export interface ILangdingPage {
  affiliate_id?: string
  click_id?: string
  customer_name?: string
  customer_phone?: string
  network_url?: string
  offer_id?: number
  product_id?: number
  product_name?: string
  sub_id?: string
  tracker_id?: number
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
  landing_page: ILangdingPage
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
