import * as Yup from 'yup'

declare module 'yup' {
  interface StringSchema extends Yup.StringSchema {
    knowmePassword(label: string): StringSchema
    JSONString(message?: string): StringSchema
  }
  interface ArraySchema extends Yup.ArraySchema {
    unique(message?: string): ArraySchema
  }
}
