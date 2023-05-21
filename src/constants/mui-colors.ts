import { toCssVariables } from './mui-theme'

// colors mapping
export const Colors = {
  black: '#000',
  white: '#fff',
  primary: {
    300: '#FAFDAA',
    400: '#F7FB6F',
    500: '#F2F92F'
  },
  positive: {
    500: '#3AD98A'
  },
  negative: {
    500: '#EA2E4E'
  },
  'neutral/light-theme': {
    100: '#F1F2F3',
    200: '#DADBE7',
    300: '#80818E',
    400: '#5B5C67',
    500: '#42434D',
    600: '#2C2D35',
    700: '#24252D',
    800: '#1D1E26',
    900: '#181920'
  },
  // not implemented
  'neutral/dark-theme': {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: ''
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
}
