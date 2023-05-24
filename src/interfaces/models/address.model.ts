import { IModel } from './model'

export interface IAddressModel extends IModel {
 name?: string
 short_name?: string | null
 code?: string
 postal_code?: string
}
