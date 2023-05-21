import { FC, useMemo } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import { genThemeWithPaletteMode } from './constants/mui-theme'
import { createBrowserHistory } from 'history'
import { getThemeMode } from './store/selectors'
import { AppLayout } from './layout'
import { store } from './store'

const AppTheme: FC = () => {
  const paletteMode = useSelector(getThemeMode)

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(genThemeWithPaletteMode(paletteMode)),
    [paletteMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <AppLayout/>
    </ThemeProvider>
  )
}

const App: FC = () => {
  const history = createBrowserHistory()

  return (
    <Provider store={store}>
      <Router history={history}>
        <AppTheme/>
      </Router>
    </Provider>
  )
}

export default App
