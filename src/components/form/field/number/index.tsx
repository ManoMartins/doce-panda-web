/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FormControl, TextInput, TextInputProps } from '@primer/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

interface BaseTextProps extends TextInputProps {
  name: string
  label?: string
  error?: FieldError
  hideArrow?: boolean
}

const BaseText: ForwardRefRenderFunction<HTMLInputElement, BaseTextProps> = (
  { name, label, hideArrow = false, error, ...rest },
  ref
) => {
  return (
    <FormControl sx={{ width: '100%' }}>
      {!!label && <FormControl.Label>{label}</FormControl.Label>}

      <TextInput
        ref={ref}
        id={name}
        name={name}
        type={'number'}
        sx={{
          width: '100%',
          ...(hideArrow
            ? {
                'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button':
                  {
                    margin: '0',
                    '-webkit-appearance': 'none',
                  },
                'input[type=number]': {
                  '-moz-appearance': 'textfield',
                },
              }
            : {}),
        }}
        {...rest}
      />

      {!(error == null) && (
        <FormControl.Caption>{error.message}</FormControl.Caption>
      )}
    </FormControl>
  )
}

const Number = forwardRef(BaseText)

export { Number }
