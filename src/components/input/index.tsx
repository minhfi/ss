import { FC, HTMLInputTypeAttribute } from 'react'
import { SxProps, TextFieldProps, Typography, useTheme } from '@mui/material'

import { Message } from '../message'
import { Label } from '../label'
import { TextField, TextInput, STError } from './styled'

export interface InputBaseProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  error?: string
  mb?: number
  sx?: SxProps
  required?: boolean
}

export type InputProps = InputBaseProps & Omit<TextFieldProps, 'error'>

export const Input: FC<InputProps> = ({ label, error, mb, required, ...props }) => {
  const theme = useTheme()

  return (
    <TextInput mb={mb} sx={props.sx}>
      {label && <Label>{label} {required && <Typography component="span" variant="body2" color={theme.colors['--color-negative-500']}>*</Typography>}</Label>}
      <TextField
        {...props}
        error={!!error}
      />

      {error && (
        <STError>
          <Message showMessage={!!error} status="error">{error}</Message>
        </STError>
      )}
    </TextInput>
  )
}

Input.defaultProps = {
  type: 'text',
  mb: 3
}
