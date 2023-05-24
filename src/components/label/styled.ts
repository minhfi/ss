import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const STContainer = styled(Typography, { label: 'Label' })(
  ({ theme }) => `
    color: ${theme.colors['--color-neutral-theme-300']};
    margin-bottom: ${theme.spacing(1.5)};
  `
)
