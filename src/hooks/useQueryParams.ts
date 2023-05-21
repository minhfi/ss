import qs from 'qs'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import { compareObj } from 'src/utils/helpers.utils'

export const useQueryParams = () => {
  const history = useHistory()
  const [queryParams, setQueryParams] = useState(
    qs.parse(history.location?.search.replace(/^\?+/, ''))
  )

  useEffect(() => {
    const newParams = qs.parse(history.location?.search?.replace(/^\?+/, ''))

    if (!compareObj(queryParams, newParams)) {
      setQueryParams(newParams)
    }
  }, [history.location?.search, queryParams])

  return queryParams
}
