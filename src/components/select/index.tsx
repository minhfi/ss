import { FC, useEffect, useState } from 'react'
import { Box, ClickAwayListener, Typography } from '@mui/material'
import { capitalize } from 'src/utils/format-data.util'
import { IconArrowDown } from 'src/assets/icons'
import { IObject } from 'src/interfaces'

import { STOptionIem, STOption, STLabel, STError } from './styled'
import { Message } from '../message'

export interface ISelectProps {
  width?: number
  value?: IObject | null
  placeholder?: string
  options?: IObject[]
  error?: string
  disabled?: boolean
  onChange?: (option: IObject) => void
}

export const Select: FC<ISelectProps> = ({ placeholder, options, onChange, width, error, disabled, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [option, setOption] = useState<IObject | null>(null)

  const handleIsOpenDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: IObject) => {
    setOption(option)
    onChange && onChange(option)
    handleIsOpenDropdown()
  }

  useEffect(() => {
    if (props.value || props.value === null) {
      setOption(props.value)
    }
  }, [props.value])

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box position="relative">
        <STLabel width={width} onClick={handleIsOpenDropdown} error={error} disabled={disabled}>
          <Typography variant="body2">
            {capitalize(option?.label) || placeholder}
          </Typography>
          <IconArrowDown/>
        </STLabel>

        {error && (
          <STError>
            <Message showMessage={!!error} status="error">{error}</Message>
          </STError>
        )}

        {isOpen && (
          <STOption>
            {options?.map(item => (
              <STOptionIem key={item.value} isActive={(item.value === option?.value)} onClick={() => handleSelect(item)}>
                <Typography variant={item.value === option?.value ? 'subtitle2' : 'body1'} sx={{ textTransform: 'capitalize' }}>
                  {capitalize(item.label)}
                </Typography>
              </STOptionIem>
            ))}
          </STOption>
        )}
      </Box>
    </ClickAwayListener>

  )
}

Select.defaultProps = {
  options: [],
  placeholder: 'Chọn một giá trị'
}
