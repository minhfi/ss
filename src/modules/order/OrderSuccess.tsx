import { FC } from 'react'
import { useHistory } from 'react-router'
import { Box, Typography, useTheme } from '@mui/material'
import { Button } from 'src/components/button'
import Check from 'src/assets/images/check.png'
import { STOrderSuccess } from './styled'

const OrderSuccess:FC = () => {
  const theme = useTheme()
  const history = useHistory()

  return (
    <STOrderSuccess>
      <Box>
        <img src={Check} alt="check"/>
        <Box display="flex" gap={1} alignItems="center" flexDirection="column">
          <Typography variant="h4">Đặt đơn hàng thành công</Typography>
          <Typography variant="h6">Cảm ơn bạn đã đặt hàng</Typography>
        </Box>
        <Button height={40} background={theme.colors['--color-positive-500']} colorText={theme.colors['--color-white']} onClick={() => history.push('/')}>Quay lại</Button>
      </Box>
    </STOrderSuccess>
  )
}

export default OrderSuccess
