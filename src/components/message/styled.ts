import { TypographyProps } from '@mui/system'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { toCssVariables } from 'src/constants/mui-theme'
import { MessageStatus } from '.'

const colorMapping: Record<MessageStatus, keyof ReturnType<typeof toCssVariables>> = {
  default: '--color-neutral-theme-300',
  success: '--color-positive-500',
  error: '--color-negative-500'
}

export const STMessage = styled(Typography, {
  shouldForwardProp: prop => prop !== 'showMessage',
  label: 'TextMessage'
})<TypographyProps & {status?: MessageStatus; showMessage?: boolean}>`
  color: ${({ status, theme }) => status ? theme.colors[colorMapping[status]] : 'initial'};
  visibility: ${({ showMessage }) => showMessage ? 'visible' : 'hidden'};

  display: block;
  min-height: 24px;
`

STMessage.defaultProps = {
  status: 'default',
  showMessage: false
}
