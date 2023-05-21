import axios from 'axios'

/**
 * axios config
 */
if (import.meta.env.REACT_APP_API_DNS) {
  axios.defaults.baseURL = import.meta.env.REACT_APP_API_DNS
}
