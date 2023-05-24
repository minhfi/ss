import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
    padding: 24px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`)

export const STOrderSuccess = styled('div', {
  label: 'OrderSuccess'
})(({ theme }) => `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`)
