import { FC } from 'react'
import { STContainer, STChildren } from './styled'

export const LayoutContainer: FC = (props) => {
  return (
    <STContainer>
      <STChildren>
        {props.children}
      </STChildren>
    </STContainer>
  )
}
