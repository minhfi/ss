import axios, { AxiosResponse } from 'axios'
import { IUserModel } from 'src/interfaces'

export class ProfileApi {
  static _prefix = '/profile'

  /**
   * Get authenticated profile
   */
  static detail(): Promise<AxiosResponse<IUserModel>> {
    return axios.get(this._prefix)
  }
}
