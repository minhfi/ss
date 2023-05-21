import { AxiosResponse } from 'axios'

export interface IPaginationQuery {
  page?: number
  limit?: number
  keyword?: string
  order?: string
  [key: string]: any
}

export interface IPaginationResponse<T = any> {
  from?: number
  to?: number
  page?: number
  limit?: number
  total?: number
  pages?: number
  rows?: T[]
}

export type TAxiosResponseData<T = any> = Promise<AxiosResponse<T>>
export type TAxiosResponsePagination<T = any> = Promise<AxiosResponse<IPaginationResponse<T>>>
export type TAxiosResponseList<T = any> = Promise<AxiosResponse<T[]>>
