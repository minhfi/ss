import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { formatCurrency } from 'src/utils/format-currency.utils'
import { ISale, IShipping } from 'src/assets/icons'
import { Button } from 'src/components/button'
import { IProductModel } from 'src/interfaces'

import { STProductItem, STSaleBox } from './styled'

interface IProductItemProps {
    data: IProductModel
    handleCheckProduct: (data: IProductModel) => void
}

const ProductItem:FC<IProductItemProps> = ({ data, handleCheckProduct }) => {
  const theme = useTheme()

  return (
    <STProductItem>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: 'rgb(21, 70, 126)',
          padding: 2,
          borderRadius: '8px 8px 0 0'
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h5" color={theme.colors['--color-white']}>
            {data.name}
          </Typography>
          <Typography variant="h5" color="rgb(255, 222, 89)">
            {formatCurrency(data.price || 0)}Đ
          </Typography>
        </Box>
        {data.isFreeShip && (
          <Box display="flex" flexDirection="column" gap={1} alignItems="flex-end">
            <IShipping width={24}/>
            <Typography variant="h6" color="rgb(255, 222, 89)">
              FREE SHIPPING
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        px={3}
        py={2}
        sx={{
          border: '1px solid #ccc',
          background: data.checked ? 'rgb(233, 201, 154)' : '#fff'
        }}
      >
        <Box display="flex" gap={2}>
          <img src={data.image} alt="product" width={350}/>
          <Box display="flex" flexDirection="column" gap={2}>
            <STSaleBox>
              <ISale/>
              <Box>
                <Typography variant="body2" color={theme.colors['--color-white']} sx={{ fontWeight: 500 }}>
                  TIẾT KIỆM THÊM
                </Typography>
                <Typography variant="subtitle2" color="rgb(255, 222, 89)">
                  {formatCurrency(data.priceSale || 0)}Đ
                </Typography>
              </Box>
            </STSaleBox>
            {
                data.checked
                  ? (
                    <Button
                      height={40}
                      background={theme.colors['--color-positive-500']}
                      colorText={theme.colors['--color-white']}
                      onClick={() => handleCheckProduct(data)}
                    >
                      Đã chọn
                    </Button>
                    )
                  : (
                    <Button
                      height={40}
                      background={theme.colors['--color-negative-500']}
                      colorText={theme.colors['--color-white']}
                      onClick={() => handleCheckProduct(data)}
                    >
                      Chọn
                    </Button>
                    )
            }

          </Box>
        </Box>
        {
            data.isFreeShip && (
              <Typography variant="subtitle2" color={theme.colors['--color-negative-500']}>
                * Tư vấn trực tuyến 1-1 với chuyên gia chăm sóc sức khỏe tiểu đường
              </Typography>
            )
        }
      </Box>
    </STProductItem>
  )
}

export default ProductItem
