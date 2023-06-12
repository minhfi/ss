import { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import { getOrderProduct, getOrderUser } from 'src/store/selectors/order'
import { IFormDataOrder, IObject, IOptionsAddress, IOrder } from 'src/interfaces'
import { setLayoutLoading, setLayoutNotify } from 'src/store/actions'
import { formatCurrency } from 'src/utils/format-currency.utils'
import { useValidation } from 'src/hooks/useValidation'
import { Select } from 'src/components/select'
import { Button } from 'src/components/button'
import { ENotify } from 'src/constants/enum'
import { Label } from 'src/components/label'
import { Input } from 'src/components/input'
import { OrderApi } from 'src/apis/order'
import { AddressApi } from 'src/apis'

import { STContainer } from './styled'
import { orderSchema } from './schema'

const Order:FC = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const orderUser = useSelector(getOrderUser)
  const product = useSelector(getOrderProduct)
  const { errors, validate } = useValidation<IFormDataOrder>()

  const [option, setOption] = useState<IOptionsAddress>({
    provinces: [],
    districts: [],
    wards: []
  })

  const [formData, setFormData] = useState<IFormDataOrder>({
    name: orderUser?.name || '',
    phone: orderUser?.phone || '',
    email: '',
    province: null,
    district: null,
    ward: null,
    address: '',
    note: ''
  })

  const handleChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    const { name, value } = e.target

    setFormData(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }, [formData])

  const findAddress = (options: IObject[], value: number) => {
    const obj = options?.find((option: IObject) => option.value === value)

    return {
      code: obj?.code,
      id: obj?.id,
      name: obj?.name,
      postal_code: obj?.postal_code
    }
  }

  const handleOrder = async () => {
    try {
      const isValid = await validate({ schema: orderSchema, data: { ...formData } })
      if (!isValid) return

      dispatch(setLayoutLoading(true))

      const payload: IOrder = {
        customer: {
          address: {
            customer_address: formData.address,
            note: formData.note,
            province: findAddress(option.provinces, formData.province?.value),
            district: findAddress(option.districts, formData.district?.value),
            ward: findAddress(option.wards, formData.ward?.value)
          },
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined
        },
        order_value: product?.price || 0,
        transaction_fee: 0,
        paid_date: '2023-05-05 13:10:47',
        transaction_id: uuidv4(),
        products: [
          {
            name: product?.name || '',
            price: product?.price || 0,
            product_id: (product?.id || '').toString() || '17',
            quantity: 1
          }
        ]
      }

      const { data } = await OrderApi.order(payload)

      console.log({ data })
      // if (data) {
      //   window.location.assign(data.data?.payment_url || '')
      // }

      dispatch(setLayoutNotify({
        open: true,
        type: ENotify.SUCCESS,
        content: 'Đặt hàng thành công'
      }))
    } catch (error: any) {
      const code = error?.response?.data?.code
      const message = error?.response?.data?.message

      if (code >= 500) {
        return dispatch(setLayoutNotify({
          open: true,
          type: ENotify.ERROR,
          content: message?.split('"')?.[1] || ''
        }))
      }

      dispatch(setLayoutNotify({
        open: true,
        type: ENotify.ERROR,
        content: message
      }))
    } finally {
      dispatch(setLayoutLoading(false))
    }
  }

  const loadProvinces = async () => {
    try {
      const { data } = await AddressApi.provinces()

      if (data.data?.length) {
        const provinces = data.data?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id
        }))

        setOption((prev) => ({
          ...prev,
          provinces
        }))
      }
    } catch (error) {
      console.log(error as AxiosError)
    }
  }

  const loadDistricts = async (provinceId: number) => {
    try {
      const { data } = await AddressApi.districts(provinceId)

      if (data.data?.length) {
        const districts = data.data?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id
        }))

        setOption((prev) => ({
          ...prev,
          districts
        }))
      }
    } catch (error) {
      console.log(error as AxiosError)
    }
  }

  const loadWards = async (districtId: number) => {
    try {
      const { data } = await AddressApi.wards(districtId)

      if (data.data?.length) {
        const wards = data.data?.map((item) => ({
          ...item,
          label: item.name,
          value: item.id
        }))

        setOption((prev) => ({
          ...prev,
          wards
        }))
      }
    } catch (error) {
      console.log(error as AxiosError)
    }
  }

  useEffect(() => {
    loadProvinces()
  }, [])

  useEffect(() => {
    if (formData.province?.value) {
      loadDistricts(formData.province?.value)
    }
  }, [formData.province])

  useEffect(() => {
    if (formData.district?.value) {
      loadWards(formData.district?.value)
    }
  }, [formData.district])

  return (
    <STContainer>
      <Box maxWidth={1440} width="100%" display="flex" gap={5}>
        <Box width="65%">
          <Typography variant="subtitle1" color="#00577C">THÔNG TIN KHÁCH HÀNG</Typography>
          <Box width="100%" display="flex" gap={2} mt={2}>
            <Box width="33%">
              <Input
                required
                label="Họ và Tên"
                id="name"
                name="name"
                placeholder="Vui lòng nhập họ và tên"
                value={formData.name || ''}
                onChange={handleChangeInput}
                error={errors.name}
              />
            </Box>
            <Box width="33%">
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
            </Box>
            <Box width="33%">
              <Input
                required
                label="Email"
                id="email"
                name="email"
                placeholder="Vui lòng nhập email"
                value={formData.email || ''}
                onChange={handleChangeInput}
                error={errors.email}
              />
            </Box>
          </Box>

          <Typography variant="subtitle1" color="#00577C">THÔNG TIN VẬN CHUYỂN</Typography>
          <Box display="flex" gap={2} mt={2}>
            <Box width="33%" display="flex" flexDirection="column">
              <Label>Tỉnh/Thành phố <Typography component="span" variant="body2" color={theme.colors['--color-negative-500']}>*</Typography></Label>
              <Select
                value={formData.province}
                options={option.provinces}
                error={(errors.province || '') as string}
                onChange={(option: IObject) => {
                  setFormData(prev => ({ ...prev, province: option, district: null, ward: null }))
                  setOption(prev => ({
                    ...prev,
                    districts: [],
                    wards: []
                  }))
                }}
              />
            </Box>
            <Box width="33%" display="flex" flexDirection="column">
              <Label>Quận/Huyện <Typography component="span" variant="body2" color={theme.colors['--color-negative-500']}>*</Typography></Label>
              <Select
                value={formData.district}
                options={option.districts}
                error={(errors.district || '') as string}
                disabled={!option.districts?.length}
                onChange={(option: IObject) => {
                  setFormData(prev => ({ ...prev, district: option, ward: null }))
                  setOption(prev => ({
                    ...prev,
                    wards: []
                  }))
                }}
              />
            </Box>
            <Box width="33%" display="flex" flexDirection="column">
              <Label>Phường/Xã <Typography component="span" variant="body2" color={theme.colors['--color-negative-500']}>*</Typography></Label>
              <Select
                value={formData.ward}
                options={option.wards}
                error={(errors.ward || '') as string}
                disabled={!option.wards?.length}
                onChange={(option: IObject) => setFormData(prev => ({ ...prev, ward: option }))}
              />
            </Box>
          </Box>

          <Box mt={2}>
            <Input
              mb={2}
              required
              label="Địa chỉ nhận hàng đầy đủ"
              id="address"
              name="address"
              placeholder="Vui lòng nhập địa chỉ"
              value={formData.address || ''}
              onChange={handleChangeInput}
              error={errors.address}
            />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="body2" color={theme.colors['--color-black']}>Phí vận chuyển dự tính:</Typography>
            <Typography variant="body1" color="#F85656">Trả sau</Typography>
          </Box>

          <Box mt={2} mb={4}>
            <Typography variant="body2">Quý khách vui lòng thanh toán phí vận chuyển khi nhận hàng</Typography>
            <Typography variant="body2" color="#DD890A">(Lưu ý: phí vận chuyển thực tế có thể khác so với phí dự tính)</Typography>
          </Box>

          <Typography variant="subtitle1" color="#00577C">LƯU Ý CHO NGƯỜI BÁN</Typography>
          <Box mt={2}>
            <Input
              id="note"
              name="note"
              placeholder="Vui lòng nhập lưu ý"
              value={formData.note || ''}
              onChange={handleChangeInput}
            />
          </Box>
        </Box>

        <Box width="35%">
          <Typography variant="subtitle1" color="#00577C">THÔNG TIN SẢN PHẨM</Typography>
          <Box mt={1} display="flex" alignItems="center" justifyContent="space-between">
            <img src={product?.image || ''} alt="product" width={200}/>
            <Typography variant="subtitle2">{product?.name}</Typography>
          </Box>

          <Divider/>

          <Box mt={2} mb={1} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle2" color={theme.colors['--color-black']}>Tổng tiền:</Typography>
            <Typography variant="subtitle2" color={theme.colors['--color-negative-500']}>{formatCurrency((product?.price || 0))} đ</Typography>
          </Box>

          <Button fullWidth height={40} background="#00577C" onClick={handleOrder}>
            <Typography variant="body2" color={theme.colors['--color-white']}>Xác nhận thông tin đặt hàng</Typography>
          </Button>
        </Box>
      </Box>
    </STContainer>
  )
}

export default Order
