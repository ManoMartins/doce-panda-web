/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FormControl, TextInput, TextInputProps } from '@primer/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

interface BaseTextProps extends TextInputProps {
  name: string
  label?: string
  error?: FieldError
}

const BaseText: ForwardRefRenderFunction<HTMLInputElement, BaseTextProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl sx={{ width: '100%' }}>
      {!!label && <FormControl.Label>{label}</FormControl.Label>}

      <TextInput
        ref={ref}
        id={name}
        name={name}
        {...rest}
        sx={{ width: '100%' }}
      />

      {!(error == null) && (
        <FormControl.Caption>{error.message}</FormControl.Caption>
      )}
    </FormControl>
  )
}

const Text = forwardRef(BaseText)

export { Text }
