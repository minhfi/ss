import { FC } from 'react'
import { useHistory } from 'react-router'
import { Box, Typography, useTheme } from '@mui/material'
import { Button } from 'src/components/button'
import ImageFail from 'src/assets/images/order-fail.png'
import { STOrderSuccess } from './styled'

const OrderFail:FC = () => {
  const theme = useTheme()
  const history = useHistory()

  return (
    <STOrderSuccess>
      <Box>
        <img src={ImageFail} alt="order fail" width={130}/>
        <Box display="flex" gap={1} alignItems="center" flexDirection="column">
          <Typography variant="h4">Đặt đơn hàng thất bại</Typography>
          <Typography variant="h6">Vui lòng đặt lại</Typography>
        </Box>
        <Button height={40} background={theme.colors['--color-negative-500']} colorText={theme.colors['--color-white']} onClick={() => history.push('/')}>Quay lại</Button>
      </Box>
    </STOrderSuccess>
  )
}

export default OrderFail
