import { FC, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { Box, Chip, Divider, Typography, useTheme } from '@mui/material'
import { setOrderProduct, setOrderProductQuantity } from 'src/store/actions'
import { formatCurrency } from 'src/utils/format-currency.utils'
import Process from 'src/assets/images/header-process.png'
import Product from 'src/assets/images/product.png'
import Logo from 'src/assets/images/logo.png'
import { ProductApi } from 'src/apis/product'
import { IProductModel } from 'src/interfaces'
import { Button } from 'src/components/button'

import { STContainer, STContent, STDescription, STHeader, STLeft, STProduct, STPromotion, STRight } from './styled'

const Home:FC = () => {
  const history = useHistory()
  const theme = useTheme()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(1)
  const [product, setProduct] = useState<IProductModel>({
    id: 0,
    name: '',
    price: 0
  })

  const loadProduct = async () => {
    try {
      const { data } = await ProductApi.pagination()

      if (data.data.length) {
        const product = {
          id: data.data[0].id,
          name: data.data[0].name,
          price: data.data[0]?.prices?.[0]?.price || 0
        }

        setProduct(product)
        dispatch(setOrderProduct(product))
      }
    } catch (error) {
      console.log(error as AxiosError)
    }
  }

  useEffect(() => {
    loadProduct()
  }, [])

  useEffect(() => {
    dispatch(setOrderProductQuantity(quantity))
  }, [quantity])

  return (
    <STContainer>
      <Box maxWidth={1440} width="100%">
        <STHeader>
          <img src={Logo} alt="logo" width={175} height={100}/>
          <img src={Process} alt="process"/>
        </STHeader>

        <Divider/>

        <STContent>
          <STLeft>
            <STPromotion>
              <Typography variant="body2">
                Thời gian nhận ưu đãi cho những khách hàng đăng ký lần đầu chỉ còn: 26:00
              </Typography>
            </STPromotion>

            <STDescription>
              <Typography variant="body1">
                Số lượng hàng còn trong kho: <Typography variant="subtitle2" component="span" color={theme.colors['--color-negative-500']}>CỰC THẤP - 200</Typography>
              </Typography>

              <Typography variant="body1">
                Đơn hàng của bạn dự kiến sẽ tới vào ngày <Typography variant="subtitle2" component="span" color="rgb(11, 154, 219)">18/5/2023</Typography>
              </Typography>
            </STDescription>

            <STProduct>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="h5" color={theme.colors['--color-white']}>MUA {quantity} HỘP</Typography>
                <Typography variant="h5" color={theme.colors['--color-primary-400']}>{formatCurrency((product.price || 0) * quantity)}đ</Typography>
              </Box>
              <img src={Product} alt="product"/>
            </STProduct>
          </STLeft>

          <STRight>
            <Typography variant="body2" color={theme.colors['--color-black']}>Số lượng: <Typography variant="subtitle2" component="span" color={theme.colors['--color-neutral-theme-300']}>{quantity} Hộp</Typography></Typography>

            <Box display="flex" gap={1} mt={1} mb={2}>
              <Chip onClick={() => setQuantity(5)} label="5 Hộp" color={quantity === 5 ? 'success' : 'default'}/>
              <Chip onClick={() => setQuantity(3)} label="3 Hộp" color={quantity === 3 ? 'success' : 'default'}/>
              <Chip onClick={() => setQuantity(1)} label="1 Hộp" color={quantity === 1 ? 'success' : 'default'}/>
            </Box>

            <Divider/>

            <Box mt={2} mb={2}>
              <Typography variant="subtitle1" color={theme.colors['--color-black']}>{formatCurrency((product.price || 0) * quantity)}đ</Typography>
            </Box>

            <Button height={60} background={theme.colors['--color-negative-500']} onClick={() => history.push('/order')}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body2" color={theme.colors['--color-white']}>MUA NGAY</Typography>
                <Typography variant="body2" color={theme.colors['--color-white']}>Giao tận nơi hoặc nhận tại cửa hàng</Typography>
              </Box>
            </Button>
          </STRight>
        </STContent>
      </Box>
    </STContainer>
  )
}

export default Home
