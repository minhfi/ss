import { css, styled } from '@mui/material/styles'
import { Box, TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField, { label: 'TextFieldCustom' })(({ theme }) => css`
  ${{ ...theme.typography.body2 }};

  .MuiFormHelperText-root {
    margin: ${theme.spacing(1.5)} 0 0;
  }


  div.MuiInputBase-root {
    border: 1px solid ${theme.colors['--color-neutral-theme-200']};
    border-radius: 8px;
    color: ${theme.colors['--color-neutral-theme-700']};
    background-color: ${theme.colors['--color-white']};

    input {
      padding: ${theme.spacing(1)};
      
      &::placeholder {
        font-size: 14px;
        color: ${theme.colors['--color-neutral-theme-300']};
      }
    }
  }

  .MuiInputAdornment-positionStart {
    margin-right: 0
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: transparent;
      border-width: 1px !important;
      border-radius: 8px !important;
    }

    &:hover,
    &.Mui-focused {
      fieldset.MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
    }

    &.Mui-error {
      fieldset.MuiOutlinedInput-notchedOutline {
        border-color: ${theme.colors['--color-negative-500']};
      }
    }
  }
`)

export const TextInput = styled(Box, {
  shouldForwardProp: prop => prop !== 'mb',
  label: 'TextInput'
})<{mb?: number}>(({ theme, ...props }) => `
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(props.mb || 0)};
`)

export const STError = styled(Box, {
  label: 'STError'
})(({ theme }) => `
  display: flex;
  gap: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
`)
