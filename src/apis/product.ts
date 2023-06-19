import axios, { AxiosResponse } from 'axios'
import { IProductModel } from 'src/interfaces'

export class ProductApi {
  static _prefix = '/product'

  static pagination(): Promise<AxiosResponse<{data: IProductModel[]}>> {
    return axios.get(`${this._prefix}s`)
  }

  static detail(externalId: number): Promise<AxiosResponse<{data: IProductModel[]}>> {
    return axios.get(this._prefix, {
      params: {
        external_id: externalId
      }
    })
  }
}
