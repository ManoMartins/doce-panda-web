import { Box, BoxProps } from '@primer/react'
import { Children, ReactNode, cloneElement, isValidElement } from 'react'

import { FieldValues, useForm } from 'react-hook-form'

import { Text, Date } from './field'
import { Footer } from './footer'

type FormProps<T> = Omit<BoxProps, 'onSubmit' | 'children'> & {
  children: ReactNode
  defaultValues?: any
  onSubmit: (data: T) => void
}

function Form<T extends FieldValues>({
  children,
  defaultValues,
  onSubmit,
  ...rest
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box {...rest}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return child
          }

          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (child.props.name) {
            return cloneElement(child, {
              ...child.props,
              error: errors[child.props.name],
              ...register(child.props.name),
              key: child.props.name,
            })
          }

          if (child.props.type === 'submit') {
            return cloneElement(child, {
              ...child.props,
              isLoading: isSubmitting,
            })
          }

          if (child.type.displayName === 'Footer') {
            return cloneElement(child, {
              ...child.props,
              isLoading: isSubmitting,
            })
          }

          return child
        })}
      </Box>
    </form>
  )
}

Form.Text = Text
Form.Date = Date
Form.Footer = Footer

export default Form
