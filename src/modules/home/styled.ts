import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Home'
})(({ theme }) => `
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      align-items: flex-end;
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
    height: 300px;
    border: 1px solid ${theme.colors['--color-neutral-theme-100']};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px 8px 0 0;

    >div {
        width: 100%;
        background: #1da1f2;
        padding: 16px;
        border-radius: 8px 8px 0 0;
    }

    img {
        margin-top: 28px;
    }
`)

export const STRight = styled('div', {
  label: 'Right'
})(({ theme }) => `
    width: 40%;
    display: flex;
    flex-direction: column;
`)
