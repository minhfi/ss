import { FC, SVGProps } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Snackbar, Typography, useTheme } from '@mui/material'
import { IconMessageError, IconMessageInfo, IconMessageSuccess, IconMessageWarning } from 'src/assets/icons'
import { getLayoutNotify } from 'src/store/selectors'
import { setLayoutNotify } from 'src/store/actions'
import { ENotify } from 'src/constants/enum'
import { STMessage } from './styled'

export const Notify:FC = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const notify = useSelector(getLayoutNotify)

  const icons: { [key in ENotify]: SVGProps<SVGSVGElement>} = {
    [ENotify.SUCCESS]: <IconMessageSuccess/>,
    [ENotify.ERROR]: <IconMessageError/>,
    [ENotify.WARNING]: <IconMessageWarning/>,
    [ENotify.INFO]: <IconMessageInfo/>
  }

  const handleClose = (reason?: 'timeout' | 'clickaway' | 'escapeKeyDown') => {
    if (reason && ['clickaway', 'escapeKeyDown'].includes(reason)) {
      return
    }

    dispatch(setLayoutNotify({ open: false, type: ENotify.SUCCESS, content: '' }))
  }

  return (
    <Snackbar
      key={notify.content}
      open={notify.open}
      onClose={(e, reason) => handleClose(reason)}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      sx={{
        '& .MuiSnackbarContent-root, .MuiSnackbarContent-message, .MuiSnackbarContent-action': {
          width: '100%',
          padding: 0,
          borderRadius: '8px'
        }
      }}
      message={(
        <STMessage>
          <Box display="flex" gap={1}>
            <Box height={28} display="flex" alignItems="center">
              {icons[notify.type]}
            </Box>
            <Typography
              component="div"
              variant="body1"
              sx={{
                wordBreak: 'break-word',
                lineHeight: 'unset',
                maxWidth: '240px'
              }}
            >
              {notify.content}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color={theme.colors['--color-primary-500']}
            sx={{ cursor: 'pointer' }}
            onClick={() => handleClose()}
          >
            Close
          </Typography>
        </STMessage>
          )}
    />
  )
}
