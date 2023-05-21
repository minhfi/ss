import { styled, Dialog } from '@mui/material'

export const STModal = styled(Dialog, {
  label: 'Modal'
})(() => `
  background: rgba(36 37 45 / 40%);
  backdrop-filter: blur(16px);

  .MuiDialog-paper {
    background: unset;
    transition: unset;
    box-shadow: unset;
    max-height: unset;
    max-width: unset;
  }
`)

export const STClose = styled('div', {
  shouldForwardProp: prop => prop !== 'isOpen',
  label: 'Close'
})<{isOpen?: boolean}>(({ theme, isOpen }) => `
    position: absolute;
    right: -8px;
    top: -8px;
    z-index: 2;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-shadow: 0px 8px 16px rgb(37 38 46 / 10%);
    border-radius: 32px;
    background-color: ${theme.colors['--color-neutral-theme-100']};

    display: ${isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center
`)
