/**
 * @typedef {import('axios').AxiosError} AxiosError
 */

import { AxiosError } from 'axios'
import { IObject } from 'src/interfaces'

/**
 * Get axios response error message
 * @param {AxiosError} e
 * @return {string}
 */
export const getApiErrorMessage = (e: any) => {
  const error = e as AxiosError<IObject, IObject>

  try {
    if (error.response && typeof error.response === 'object') {
      const response = error.response
      return (
        response.data &&
        (
          response.data.message ||
          response.data.error ||
          JSON.stringify(response.data, null, 2)
        )
      )
    }

    return typeof error === 'string'
      ? error
      : error?.message || JSON.stringify(error, null, 2)
  } catch (err) {
    return String(error)
  }
}

/**
 * Get axios response error message
 * @param {AxiosError} error
 * @return {string}
 */
export const getApiErrorCode = (error: any) => {
  const data = error?.response?.data
  return data?.details?.errorCode
}
