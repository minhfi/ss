import axios, { AxiosResponse } from 'axios'
import { IProductModel } from 'src/interfaces'

export class ProductApi {
  static _prefix = '/products'

  static pagination(): Promise<AxiosResponse<{data: IProductModel[]}>> {
    return axios.get(this._prefix)
  }
}
