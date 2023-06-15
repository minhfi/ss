import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { formatCurrency } from 'src/utils/format-currency.utils'
import { IChecked, ISale, IShipping } from 'src/assets/icons'
import { Button } from 'src/components/button'
import { IProductModel } from 'src/interfaces'

import { STCircle, STProductItem, STProductItemAction, STProductItemContent, STSaleBox, STSelectProduct } from './styled'

interface IProductItemProps {
    data: IProductModel
    handleCheckProduct: (data: IProductModel) => void
}

const ProductItem:FC<IProductItemProps> = ({ data, handleCheckProduct }) => {
  const theme = useTheme()

  return (
    <STProductItem onClick={() => handleCheckProduct(data)}>
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
      <STProductItemContent
        sx={{
          background: data.checked ? 'rgb(233, 201, 154)' : '#fff'
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" position="relative">
          {data.checked ? <Box width={40}><IChecked width={40}/></Box> : <STCircle/>}
          <img src={data.image} alt="product" width={350}/>
          <STSelectProduct>
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

                    >
                      Đã chọn
                    </Button>
                    )
                  : (
                    <Button
                      height={40}
                      background="rgb(252, 105, 7)"
                      colorText={theme.colors['--color-white']}
                    >
                      Chọn
                    </Button>
                    )
            }
          </STSelectProduct>
        </Box>
        <STProductItemAction>
          {
                data.checked
                  ? (
                    <Button
                      height={40}
                      background={theme.colors['--color-positive-500']}
                      colorText={theme.colors['--color-white']}

                    >
                      Đã chọn
                    </Button>
                    )
                  : (
                    <Button
                      height={40}
                      background="rgb(252, 105, 7)"
                      colorText={theme.colors['--color-white']}
                    >
                      Chọn
                    </Button>
                    )
            }
        </STProductItemAction>
        {
            data.isFreeShip && (
              <Typography variant="subtitle2" color={theme.colors['--color-negative-500']}>
                * Tư vấn trực tuyến 1-1 với chuyên gia chăm sóc sức khỏe tiểu đường
              </Typography>
            )
        }
      </STProductItemContent>
    </STProductItem>
  )
}

export default ProductItem
