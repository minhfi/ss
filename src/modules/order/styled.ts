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

    @media (max-width: 1023px) {
      padding: ${theme.spacing(3, 2)};
      max-width: unset;
      width: 100%;
    }
`)

export const STOrder = styled('div', {
  label: 'Order'
})(({ theme }) => `
    width: 100%;
    display: flex;
    gap: ${theme.spacing(5)};

    @media (max-width: 1023px) {
      flex-direction: column;
      gap: 0;
    }
`)

export const STLeft = styled('div', {
  label: 'Left'
})(({ theme }) => `
    width: 65%;

    @media (max-width: 1023px) {
      width: 100%;
    }
`)

export const STCustomerInfo = styled('div', {
  label: 'CustomerInfo'
})(({ theme }) => `
    width: 100%;
    display: flex;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 0;

      > div {
        width: 100%;
      }
    }
`)

export const STAddress = styled('div', {
  label: 'Address'
})(({ theme }) => `
    width: 100%;
    display: flex;
    gap: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 0;

      > div {
        width: 100%;
      }
    }
`)

export const STRight = styled('div', {
  label: 'Right'
})(({ theme }) => `
    width: 35%;

    @media (max-width: 1023px) {
      width: 100%;
    }
`)

export const STOrderSuccess = styled('div', {
  label: 'OrderSuccess'
})(({ theme }) => `
    height: 100vh;
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

      @media (max-width: 1023px) {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 424px) {
          h4 {
            font-size: 24px
          }

          h6 {
            font-size: 14px
          }
      }
    }
`)
