import { FC } from 'react'
import { STMessage } from './styled'

export type MessageStatus = 'default' | 'success' | 'error'

export interface MessageProps {
  status?: MessageStatus
  showMessage?: boolean
}

export const Message: FC<MessageProps> = (props) => {
  return <STMessage variant="body2" {...props}/>
}
