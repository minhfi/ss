import axios, { AxiosResponse } from 'axios'
import { IOrder, IOrderResponse } from 'src/interfaces'

export class OrderApi {
  static _prefix = '/baokim.pgw/submission'

  static order(payload: IOrder): Promise<AxiosResponse<{data:IOrderResponse}>> {
    return axios.post(this._prefix, payload)
  }
}
