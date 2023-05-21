import { styled } from '@mui/material'

export const STMessage = styled('div', { label: 'Message' })(
  ({ theme }) => `
  width: 100%;
  min-height: 52px;
  background: ${theme.colors['--color-neutral-theme-600']};
  box-shadow: 0px 8px 16px rgb(37 38 46 / 20%);
  border-radius: 8px;
  padding: ${theme.spacing(1.75, 3, 1.75, 2)};

  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(1)};
  `
)
