import { styled } from '@mui/material'

export const STContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'isOpen',
  label: 'Loading'
})<{isOpen: boolean}>(({ isOpen }) => `
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(36 37 45 / 40%);

  display: ${isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`)
