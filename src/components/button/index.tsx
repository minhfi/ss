import { FC, useMemo } from 'react'
import { ButtonProps } from '@mui/material'
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from './styled'

export interface IButtonProps extends ButtonProps {
  order?: 'primary' | 'secondary' | 'tertiary'
  width?: number
  height?: number
  background?: string
  colorText?: string
}

export const Button: FC<IButtonProps & ButtonProps<'span', { component?: 'span' }>> = ({ width, height, order, ...props }) => {
  const VIEW = useMemo(() => {
    switch (order) {
      case 'secondary':
        return (
          <ButtonSecondary
            width={width}
            height={height}
            {...props}
          >
            {props.children}
          </ButtonSecondary>
        )
      case 'tertiary':
        return (
          <ButtonTertiary
            width={width}
            height={height}
            {...props}
          >
            {props.children}
          </ButtonTertiary>
        )
      default:
        return (
          <ButtonPrimary
            width={width}
            height={height}
            {...props}
          >
            {props.children}
          </ButtonPrimary>
        )
    }
  }, [width, height, order, props])

  return (
    <>
      {VIEW}
    </>
  )
}

Button.defaultProps = {
  order: 'primary',
  height: 56
}
