import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { getLayoutIsLoading } from 'src/store/selectors'
import { STContainer } from './styled'

export const Loading: FC = () => {
  const isLoading = useSelector(getLayoutIsLoading)

  return (
    <STContainer isOpen={isLoading}>
      <CircularProgress/>
    </STContainer>
  )
}
