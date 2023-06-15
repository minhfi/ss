import { FC, useMemo } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createTheme, ThemeProvider } from '@mui/material'
import { genThemeWithPaletteMode } from './constants/mui-theme'
import { createBrowserHistory } from 'history'
import { getThemeMode } from './store/selectors'
import { AppLayout } from './layout'
import { configureStore } from './store'

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
  const PGate = PersistGate as any

  return (
    <Provider store={configureStore.store}>
      <PGate loading={null} persistor={configureStore.persistor}>
        <Router history={history}>
          <AppTheme/>
        </Router>
      </PGate>
    </Provider>
  )
}

export default App
