import { EPaletteMode } from 'src/constants/mui-theme'
import { StorageUtil } from './storage.util'

export const _themeKey = '_theme_'

export const setHTMLAttribute = (mode: EPaletteMode) => {
  document.documentElement.setAttribute('theme', mode)
  document.body.className = `text-${mode === EPaletteMode.DARK ? EPaletteMode.LIGHT : EPaletteMode.DARK}`
}

export const getThemeOfSystem = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  ? EPaletteMode.DARK
  : EPaletteMode.LIGHT

export const setTheme = ({ mode, asSystem }: {
  mode: EPaletteMode
  asSystem?: boolean
}) => {
  setHTMLAttribute(mode)
  StorageUtil.setItem(_themeKey, { mode, asSystem })
}

export const getTheme = () => {
  const theme = StorageUtil.getItem<{
    mode: EPaletteMode
    asSystem?: boolean
  }>(_themeKey) || {
    mode: EPaletteMode.LIGHT,
    asSystem: false // default get theme from system
  }

  if (theme.asSystem) {
    theme.mode = getThemeOfSystem()
  }

  setHTMLAttribute(theme.mode)

  return theme
}
