import {
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { AxiosError } from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import {
  setLayoutNotify,
  setOrderUser,
  setOrderProduct
} from 'src/store/actions'
import { formatCurrency } from 'src/utils/format-currency.utils'
import Process from 'src/assets/images/header-process.png'
import { useCountdown } from 'src/hooks/useCountdown'
import { Input } from 'src/components/input'
import { ENotify } from 'src/constants/enum'
import Logo from 'src/assets/images/logo.png'
// import { ProductApi } from 'src/apis/product'
import { IProductModel } from 'src/interfaces'
import { Button } from 'src/components/button'
import Product1 from 'src/assets/images/product1.png'
import Product3 from 'src/assets/images/product3.png'
import Product5 from 'src/assets/images/product5.png'

import {
  STBillInfo,
  STContainer,
  STContent,
  STDescription,
  STFooter,
  STHeader,
  STLeft,
  STPaymentInfo,
  STProduct,
  STPromotion,
  STRight
} from './styled'
import { useValidation } from 'src/hooks/useValidation'
import { homeSchema } from './schema'
import ProductItem from './ProductItem'

interface IFormData {
  name: string
  phone: string
}

const Home: FC = () => {
  const history = useHistory()
  const theme = useTheme()
  const dispatch = useDispatch()
  const { minutes, seconds } = useCountdown(30, 0)
  const { errors, validate } = useValidation<IFormData>()
  const [products, setProducts] = useState<IProductModel[]>()

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: ''
  })

  const product: IProductModel | null = products?.find(({ checked }) => checked) || null

  const handleChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const { name, value } = e.target

      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    },
    [formData]
  )

  const handleCheckProduct = (data: IProductModel) => {
    setProducts((products) =>
      products?.map((item) => {
        if (item.name === data.name) {
          item.checked = true
        } else {
          item.checked = false
        }

        return item
      })
    )
  }

  const loadProduct = async () => {
    try {
      // const { data } = await ProductApi.pagination()

      // if (data.data.length) {
      // const product = {
      //   id: data.data[0].id,
      //   name: data.data[0].name,
      //   price: data.data[0]?.prices?.[0]?.price || 0
      // }

      const products = [
        {
          name: 'MUA 5 HỘP',
          price: 1794500,
          isFreeShip: true,
          priceSale: 2400000,
          image: Product5
        },
        {
          name: 'MUA 3 HỘP',
          price: 1099200,
          isFreeShip: true,
          priceSale: 1000000,
          image: Product3
        },
        {
          name: 'MUA 1 HỘP',
          price: 590000,
          isFreeShip: false,
          priceSale: 590000,
          image: Product1
        }
      ]

      setProducts(products)
      // }
    } catch (error) {
      console.log(error as AxiosError)
    }
  }

  const handleSubmit = async () => {
    try {
      if (!product) {
        throw new Error('Vui lòng chọn 1 sản phẩm')
      }

      const isValid = await validate({
        schema: homeSchema,
        data: { ...formData }
      })
      if (!isValid) return

      dispatch(setOrderUser(formData))
      dispatch(setOrderProduct(product))

      history.push('/order')
    } catch (error: any) {
      console.log({ error })
      dispatch(
        setLayoutNotify({
          open: true,
          type: ENotify.ERROR,
          content: error.message || ''
        })
      )
    }
  }

  useEffect(() => {
    loadProduct()
  }, [])

  const PRODUCTS = useMemo(() => {
    return products?.map((item) => (
      <ProductItem
        key={item.name}
        data={item}
        handleCheckProduct={handleCheckProduct}
      />
    ))
  }, [products, handleCheckProduct])

  return (
    <STContainer>
      <Box width="100%">
        <STHeader>
          <img src={Logo} alt="logo" width={175} height={100}/>
          <img src={Process} alt="process"/>
        </STHeader>

        <Divider/>

        <STContent>
          <STLeft>
            <STPromotion>
              <Typography variant="body2">
                Thời gian nhận ưu đãi cho những khách hàng đăng ký lần đầu chỉ
                còn:
              </Typography>
              <Typography variant="h4" component="span">
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
              </Typography>
            </STPromotion>

            <STDescription>
              <Typography variant="body1">
                Số lượng hàng còn trong kho:{' '}
                <Typography
                  variant="subtitle2"
                  component="span"
                  color={theme.colors['--color-negative-500']}
                >
                  CỰC THẤP - 200
                </Typography>
              </Typography>

              <Typography variant="body1">
                Đơn hàng của bạn dự kiến sẽ tới vào ngày{' '}
                <Typography
                  variant="subtitle2"
                  component="span"
                  color="rgb(11, 154, 219)"
                >
                  6/12/2023
                </Typography>
              </Typography>
            </STDescription>

            <STProduct>{PRODUCTS}</STProduct>
          </STLeft>

          <STRight>
            <STPaymentInfo>
              <Typography variant="h5" color={theme.colors['--color-white']}>
                THÔNG TIN THANH TOÁN
              </Typography>
              <Box
                width="100%"
                mt={3}
                p={3}
                display="flex"
                flexDirection="column"
                sx={{
                  background: theme.colors['--color-white'],
                  borderRadius: 2
                }}
              >
                <Input
                  required
                  mb={2}
                  label="Họ và Tên"
                  id="name"
                  name="name"
                  placeholder="Vui lòng nhập họ và tên"
                  value={formData.name || ''}
                  onChange={handleChangeInput}
                  error={errors.name}
                />
                <Input
                  required
                  label="Số điện thoại"
                  id="phone"
                  name="phone"
                  placeholder="Vui lòng nhập số điện thoại"
                  value={formData.phone || ''}
                  onChange={handleChangeInput}
                  error={errors.phone}
                />
                <Button
                  fullWidth
                  height={48}
                  background={theme.colors['--color-positive-500']}
                  colorText={theme.colors['--color-white']}
                  onClick={handleSubmit}
                >
                  HOÀN TẤT ĐƠN HÀNG
                </Button>
              </Box>
            </STPaymentInfo>
            <STBillInfo>
              <Typography variant="h5" color={theme.colors['--color-black']}>
                THÔNG TIN HOÁ ĐƠN
              </Typography>
              <Box mt={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2">Tiền hàng:</Typography>
                  <Typography variant="subtitle2">
                    {formatCurrency(product?.price || 0)}đ
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2">
                    Phí giao dịch/Phụ phí:
                  </Typography>
                  <Typography variant="subtitle2">0đ</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2">Chiết khấu:</Typography>
                  <Typography variant="subtitle2">0đ</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    color={theme.colors['--color-black']}
                  >
                    Tổng đơn hàng:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={theme.colors['--color-negative-500']}
                  >
                    {formatCurrency(product?.price || 0)}đ
                  </Typography>
                </Box>
              </Box>
            </STBillInfo>
          </STRight>
        </STContent>

        <Divider/>

        <STFooter>
          <Box>
            <Typography variant="body1">
              Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện giao
              dịch chung:
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={7}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={1}
            >
              <Typography variant="body1">Quy chế hoạt động</Typography>
              <Typography variant="body1">
                Chính sách giải quyết khiếu nại
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={1}
            >
              <Typography variant="body1">Chính sách bảo hành</Typography>
              <Typography variant="body1">
                Chính sách bảo mật thanh toán
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1">
              Chính sách bảo mật thông tin cá nhân
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography
              color={theme.colors['--color-black']}
              sx={{ textAlign: 'center', fontWeight: 500 }}
            >
              © Copyright 2023 - Bản quyền của GlucoActive. <br/> All Rights
              Reserved.
            </Typography>
          </Box>
        </STFooter>
      </Box>
    </STContainer>
  )
}

export default Home
