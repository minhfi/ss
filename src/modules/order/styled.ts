import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
    height: 100%;
    padding: 24px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors['--color-white']};
    max-width: 1200px;
`)

export const STOrderSuccess = styled('div', {
  label: 'OrderSuccess'
})(({ theme }) => `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      width: 600px;
      height: 400px;
      border-radius: 8px;
      background: ${theme.colors['--color-white']};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
`)
