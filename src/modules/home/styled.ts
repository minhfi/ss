import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Home'
})(({ theme }) => `
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors['--color-white']};
    max-width: 1200px;
`)

export const STHeader = styled('div', {
  label: 'Header'
})(({ theme }) => `
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    img:nth-of-type(1) {
        width: 175px;
    }

    img:nth-of-type(2) {
        object-fit: cover;
        height: 100px;
    }
`)

export const STContent = styled('div', {
  label: 'Content'
})(({ theme }) => `
      padding: 32px 0;
      display: flex;
      gap: 32px;
`)

export const STLeft = styled('div', {
  label: 'Left'
})(({ theme }) => `
       width: 60%;
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 16px;
  `)

export const STPromotion = styled('div', {
  label: 'Promotion'
})(({ theme }) => `
    width: 100%;
    height: 68px;
    background: rgb(215,246,255);
    border: 2px solid rgb(11,153,219);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(2)};

    span {
      width: 100px;
      letter-spacing: 1px;
      color: ${theme.colors['--color-negative-500']}
    }
`)

export const STDescription = styled('div', {
  label: 'Description'
})(({ theme }) => `
      display: flex;
      flex-direction: column;
      align-items: center;
`)

export const STProduct = styled('div', {
  label: 'Product'
})(({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`)

export const STProductItem = styled('div', {
  label: 'ProductItem'
})(({ theme }) => `
    width: 100%;
`)

export const STSaleBox = styled('div', {
  label: 'SaleBox'
})(({ theme }) => `
    position: relative;

    svg {
      width: 165px;
      height: 165px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 131px;
      position: absolute;
      top: 50%;  /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */

      transform: translate(-50%, -50%); 
    }
`)

export const STRight = styled('div', {
  label: 'Right'
})(({ theme }) => `
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`)

export const STPaymentInfo = styled('div', {
  label: 'PaymentInfo'
})(({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: #1da1f2;
    padding: 24px;

`)

export const STBillInfo = styled('div', {
  label: 'BillInfo'
})(({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
`)
