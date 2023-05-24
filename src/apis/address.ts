import axios, { AxiosResponse } from 'axios'
import { IAddressModel } from 'src/interfaces'

export class AddressApi {
  static _prefix = '/address'

  static provinces(): Promise<AxiosResponse<{data: IAddressModel[]}>> {
    return axios.get(`${this._prefix}/provinces`, {
      headers: {
        api_key: '101276b1b396f238b2cc35a8aa837752'
      }
    })
  }

  static districts(provinceId: number): Promise<AxiosResponse<{data: IAddressModel[]}>> {
    return axios.get(`${this._prefix}/districts`, {
      params: { province_id: provinceId },
      headers: {
        api_key: '101276b1b396f238b2cc35a8aa837752'
      }
    })
  }

  static wards(districtId: number): Promise<AxiosResponse<{data: IAddressModel[]}>> {
    return axios.get(`${this._prefix}/wards`, {
      params: { district_id: districtId },
      headers: {
        api_key: '101276b1b396f238b2cc35a8aa837752'
      }
    })
  }

  static neighborhoods(): Promise<AxiosResponse<{data: IAddressModel[]}>> {
    return axios.get(`${this._prefix}/neighborhoods`, {
      headers: {
        api_key: '101276b1b396f238b2cc35a8aa837752'
      }
    })
  }
}
