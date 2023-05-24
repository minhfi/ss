import axios from 'axios'

/**
 * axios config
 */
if (import.meta.env.VITE_APP_API_DNS) {
  axios.defaults.baseURL = import.meta.env.VITE_APP_API_DNS
}
