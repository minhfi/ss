import { styled } from '@mui/material/styles'
import { ISelectProps } from '.'
import { Box } from '@mui/material'

export const STLabel = styled('div', { label: 'Label' })<ISelectProps>(({ theme, width, error, disabled }) => `
  height: 40px;
  width: ${width ? width + 'px' : '100%'};
  cursor: pointer;
  background-color: ${theme.colors['--color-white']};
  border: 1px solid ${error ? theme.colors['--color-negative-500'] : theme.colors['--color-neutral-theme-200']};
  border-radius: 12px;
  padding: ${theme.spacing(1.5, 2)};
  pointer-events: ${disabled ? 'none' : 'all'};
  opacity: ${disabled ? 0.5 : 1};

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: inline-block;
    width: ${width ? width + 'px' : '100%'};
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  svg {
    margin-left: ${theme.spacing(1.5)}
  }
`)

export const STOption = styled('div', { label: 'Option' })(({ theme }) => `
  position: absolute;
  z-index: 2;
  margin-top: ${theme.spacing(1)};
  width: 100%;
  max-height: 220px;
  overflow: auto;
  background-color: ${theme.colors['--color-white']};
  box-shadow: 0px 40px 80px -12px rgb(37 38 46 / 20%);
  border-radius: 12px;
  padding: ${theme.spacing(1.5, 1)};
`)

export const STOptionIem = styled('div', {
  shouldForwardProp: prop => prop !== 'isActive',
  label: 'OptionItem'
})<{isActive?: boolean}>(({ theme, isActive }) => `
  width: 100%;
  padding: ${theme.spacing(1)};
  background-color: ${theme.colors['--color-white']};
  cursor: pointer;
  color: ${isActive ? theme.colors['--color-neutral-theme-700'] : theme.colors['--color-neutral-theme-400']};

  :hover {
    border-radius: 12px;
    background-color: ${theme.colors['--color-neutral-theme-100']};
    color: ${theme.colors['--color-neutral-theme-700']}
  }
`)

export const STError = styled(Box, {
  label: 'STError'
})(({ theme }) => `
  display: flex;
  gap: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
`)
