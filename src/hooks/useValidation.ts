import { useCallback, useEffect, useRef, useState } from 'react'
import { ValidationError } from 'yup'
import { convertErrorYup } from 'src/utils/helpers.utils'

export const useValidation = <T>() => {
  const [errors, setErrors] = useState<T>({} as T)

  const isMountedRef = useRef<boolean| null>(null)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const removeError = useCallback(() => {
    if (errors) setErrors({} as T)
  }, [errors, setErrors])

  const setError = useCallback((err: ValidationError) => {
    const errors = convertErrorYup<T>(err)
    setErrors(errors)
  }, [setErrors])

  const setErrorAtPath = useCallback((err: ValidationError, path: keyof T) => {
    const errorRes = convertErrorYup<T>(err)
    setErrors((prev) => ({
      ...prev,
      [path]: errorRes[path]
    }))
  }, [setErrors])

  const removeErrorAtPath = useCallback((path: keyof T) => {
    const _path = path as keyof T
    if (errors && errors[_path]) {
      setErrors((prev) => ({
        ...prev,
        [path]: ''
      }))
    }
  }, [errors, setErrors])

  const validate = useCallback(
    ({
      schema,
      data,
      options = { abortEarly: false },
      isSync = false
    }) => {
      const validation = !isSync
        ? schema.validate(data, options)
        : schema.validateSync(data, options)

      return validation
        .then(() => {
          if (isMountedRef.current) removeError()
          return true
        })
        .catch((err: ValidationError) => {
          if (isMountedRef.current) setError(err)
        })
    },
    [setError, removeError]
  )

  const validateAt = useCallback(
    ({ schema, path, data, options = { abortEarly: false } }) => {
      return schema
        .validateAt(path, data, options)
        .then(() => {
          if (isMountedRef.current) removeErrorAtPath(path)
          return true
        })
        .catch((err: ValidationError) => {
          if (isMountedRef.current) setErrorAtPath(err, path)
        })
    },
    [setErrorAtPath, removeErrorAtPath]
  )

  return { errors, setErrors, validate, validateAt, removeError }
}
