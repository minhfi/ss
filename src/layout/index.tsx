import { FC } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { IThemeProps, TTheme, toCssVariables } from 'src/constants/mui-theme'
import { getLayoutIsLoading, getModal, getThemeMode } from 'src/store/selectors'
import { Loading } from 'src/components/loading'
import { Modal } from 'src/components/modal'

import { STContainer, STContent } from './styled'
import { RouterView } from './router-view'
import { Notify } from 'src/components/notify'

const createThemeVariables = makeStyles<TTheme>(
  theme => ({
    '@global': {
      ':root': ({ paletteMode }: IThemeProps) => toCssVariables(paletteMode)
    }
  })
)

export const AppLayout: FC = () => {
  const paletteMode = useSelector(getThemeMode)
  const isLoading = useSelector(getLayoutIsLoading)
  const appModal = useSelector(getModal)

  createThemeVariables({ paletteMode })

  return (
    <STContainer isLoading={isLoading}>
      <STContent>
        <RouterView/>
      </STContent>

      {appModal.open && <Modal/>}
      <Loading/>
      <Notify/>
    </STContainer>
  )
}
