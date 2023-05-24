import { IObject } from 'src/interfaces'
import { object, string, mixed } from 'yup'

export const orderSchema = object().shape({
  name: string()
    .required('Trường này là bắt buộc.'),
  phone: string()
    .required('Trường này là bắt buộc.'),
  email: string().required('Trường này là bắt buộc.')
    .matches(
      /^(?!.+@(yahoo|hotmail|msn)\..+)(.+@.+\..+)$/,
      'Email không đúng định dạng.'
    ),
  province: mixed().test({
    message: 'Trường này là bắt buộc.',
    test: (option: IObject) => option?.value || false
  }),
  district: mixed().test({
    message: 'Trường này là bắt buộc.',
    test: (option: IObject) => option?.value || false
  }),
  ward: mixed().test({
    message: 'Trường này là bắt buộc.',
    test: (option: IObject) => option?.value || false
  }),
  address: string()
    .required('Trường này là bắt buộc.')
})
