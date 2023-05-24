import { Typography } from '@mui/material'
import { FC } from 'react'
import { STOrderSuccess } from './styled'

const OrderSuccess:FC = () => {
  return (
    <STOrderSuccess>
      <Typography variant="h4">Đặt đơn hàng thành công</Typography>
    </STOrderSuccess>
  )
}

export default OrderSuccess
