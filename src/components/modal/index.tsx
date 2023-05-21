import { FC } from 'react'
import { Box } from '@mui/material'
import { getLayoutIsLoading, getModal } from 'src/store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { resetModal } from 'src/store/actions'
import { IconClose } from 'src/assets/icons'

import { STClose, STModal } from './styled'

export const Modal: FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector(getModal)
  const loading = useSelector(getLayoutIsLoading)

  const handleClose = () => {
    if (loading) return
    return dispatch(resetModal())
  }

  return (
    <STModal onClose={handleClose} open={!!modal.open}>
      <Box position="relative" m={2}>
        <STClose isOpen={!!modal.open} onClick={handleClose}>
          <IconClose/>
        </STClose>
        {modal.content}
      </Box>
    </STModal>
  )
}
