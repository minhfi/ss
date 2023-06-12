import { object, string } from 'yup'

const phoneRegExp = /^[0-9]{10}$/

export const homeSchema = object().shape({
  name: string()
    .required('Trường này là bắt buộc.'),
  phone: string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ.')
    .required('Trường này là bắt buộc.')
})
