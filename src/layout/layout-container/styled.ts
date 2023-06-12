import { styled } from '@mui/material'
import BG from 'src/assets/images/background.jpeg'

export const STContainer = styled('section', { label: 'Container' })`
flex: 1 1 auto;
display: flex;
flex-direction: column;
height: 100vh;
`

export const STChildren = styled('div', {
  label: 'Content'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  background-color: ${theme.colors['--color-white']};
  background-image: url(${BG});
  background-size: cover;
  background-position: 50% 0%;
  background-repeat: repeat;
  background-attachment: fixed;
`)
