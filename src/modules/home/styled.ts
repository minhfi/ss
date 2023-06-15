import { Box, styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Home'
})(({ theme }) => `
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors['--color-white']};
    max-width: 1200px;
    width: 100%;

    @media (max-width: 1023px) {
      max-width: unset;
      width: 100%;
    }
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

    @media (max-width: 1023px) {
      img:nth-of-type(2) {
        display: none;
      }
    }
`)

export const STContent = styled('div', {
  label: 'Content'
})(({ theme }) => `
      padding: 40px 0;
      display: flex;
      gap: 32px;

      @media (max-width: 1023px) {
        flex-direction: column;
      }
`)

export const STLeft = styled('div', {
  label: 'Left'
})(({ theme }) => `
       width: 64%;
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 16px;

      @media (max-width: 1023px) {
        width: 100%;
      }
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
    padding: ${theme.spacing(1)};

    span {
      width: 100px;
      letter-spacing: 1px;
      color: ${theme.colors['--color-negative-500']}
    }

    @media (max-width: 424px) {
      p {
        font-size: 12px;
      } 

      span {
        font-size: 24px;
      }
    }
`)

export const STDescription = styled('div', {
  label: 'Description'
})(({ theme }) => `
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
      }
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
    cursor: pointer;
`)

export const STProductItemContent = styled(Box, {
  label: 'ProductItemContent'
})(({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2, 3)};
    border: 1px solid #ccc;
    border-radius: 0 0 8px 8px;

    @media (max-width: 767px) {
      > h6 {
        text-align: center;
      }
    }

    @media (max-width: 500px) {
      > div > img {
        width: 270px;
      }
    }

    @media (max-width: 419px) {
      > div > img {
        width: 200px;
      }
    }
`)

export const STSelectProduct = styled('div', {
  label: 'SelectProduct'
})(({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};

    @media (max-width: 767px) {
        position: absolute;
        right: -20px;

        button {
          display: none;
        }
    }
`)

export const STProductItemAction = styled('div', {
  label: 'ProductItemAction'
})(({ theme }) => `
    display: none;

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        width: 100%;

        button {
          width: 200px;
        }
    }
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

    @media (max-width: 767px) {
      svg {
        width: 120px;
      }

      p, h6 {
        font-size: 10px;
      }
  }
`)

export const STCircle = styled('div', {
  label: 'Circle'
})(({ theme }) => `
  width: 40px;
  min-width: 40px;
  height: 40px;
  border: 4px solid rgb(234, 92, 33);
  border-radius: 153px;
`)

export const STRight = styled('div', {
  label: 'Right'
})(({ theme }) => `
    width: 36%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 1023px) {
      width: 100%;
    }
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

export const STFooter = styled('div', {
  label: 'Footer'
})(({ theme }) => `
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    > div:nth-of-type(2) {
      @media (max-width: 767px) {
        flex-direction: column;
        gap: 0;
      }
    }
`)
