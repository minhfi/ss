import { styled } from '@mui/material'

export const STAppLayout = styled('div', {
  shouldForwardProp: prop => prop !== 'isLoading',
  label: 'AppLayout'
})<{isLoading?: boolean}>(({ theme, isLoading }) => `
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  background-color: ${theme.colors['--color-neutral-theme-100']};
  pointer-events: ${isLoading ? 'none' : 'auto'}
`)

export const STContent = styled('main', {
  label: 'Content'
})(() => `
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`)
