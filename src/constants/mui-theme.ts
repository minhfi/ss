import { Colors } from './mui-colors'
import { ThemeOptions } from '@mui/material'
import { Typography } from './mui-typography'

export enum EPaletteMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeProps {
  paletteMode?: EPaletteMode
  [key: string]: any
}

export const validThemeMode = (mode?: EPaletteMode): EPaletteMode => mode && [EPaletteMode.LIGHT, EPaletteMode.DARK].includes(mode)
  ? mode
  : EPaletteMode.LIGHT

export const toCssVariables = (mode?: EPaletteMode) => {
  const paletteMode = validThemeMode(mode)
  return {
    '--color-white': Colors.white,
    '--color-black': Colors.black,
    '--color-primary-300': Colors.primary[300],
    '--color-primary-400': Colors.primary[400],
    '--color-primary-500': Colors.primary[500],
    '--color-positive-500': Colors.positive[500],
    '--color-negative-500': Colors.negative[500],
    '--color-neutral-theme-100': Colors[`neutral/${paletteMode}-theme`][100],
    '--color-neutral-theme-200': Colors[`neutral/${paletteMode}-theme`][200],
    '--color-neutral-theme-300': Colors[`neutral/${paletteMode}-theme`][300],
    '--color-neutral-theme-400': Colors[`neutral/${paletteMode}-theme`][400],
    '--color-neutral-theme-500': Colors[`neutral/${paletteMode}-theme`][500],
    '--color-neutral-theme-600': Colors[`neutral/${paletteMode}-theme`][600],
    '--color-neutral-theme-700': Colors[`neutral/${paletteMode}-theme`][700],
    '--color-neutral-theme-800': Colors[`neutral/${paletteMode}-theme`][800],
    '--color-neutral-theme-900': Colors[`neutral/${paletteMode}-theme`][900]
  }
}

export const genThemeWithPaletteMode = (paletteMode: EPaletteMode): ThemeOptions & { colors: Record<keyof ReturnType<typeof toCssVariables>, string> } => ({
  colors: toCssVariables(paletteMode),
  palette: {
    mode: EPaletteMode.LIGHT, /** paletteMode */
    primary: {
      main: toCssVariables(paletteMode)['--color-primary-400']
    },
    text: {
      primary: toCssVariables(paletteMode)['--color-neutral-theme-700']
    }
  },
  typography: Typography,
  spacing: 8
})

export type TTheme = ReturnType<typeof genThemeWithPaletteMode>
