import { styled } from '@mui/material'

export const STContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'isLoading',
  label: 'Layout'
})<{isLoading?: boolean}>(({ theme, isLoading }) => `
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  background-color: ${theme.colors['--color-white']};
  pointer-events: ${isLoading ? 'none' : 'auto'}
`)

export const STContent = styled('main', {
  label: 'Main'
})(() => `
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`)
