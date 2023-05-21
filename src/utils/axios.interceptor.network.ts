import axios, { AxiosError } from 'axios'

export const networkInterceptor: Parameters<
  typeof axios.interceptors.request.use
>[0] = (config) => {
  /* Prevent call API when offline */
  if (navigator?.onLine === false) {
    throw new AxiosError(
      'Please check your network connection.',
      'Network Error',
      config
    )
  }

  return config
}
