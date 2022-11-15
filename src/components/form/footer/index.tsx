import React, { Children, cloneElement, isValidElement, ReactNode } from 'react'
import { Box } from '@primer/react'

interface FooterProps {
  children: ReactNode
  isLoading?: boolean
}

export function Footer({ children, isLoading }: FooterProps) {
  return (
    <Box display="flex" alignSelf="flex-end" sx={{ '> *': { ml: '2' } }}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return child
        }

        if (child.props.type === 'submit') {
          return cloneElement(child, {
            ...child.props,
            isLoading,
          })
        }

        return child
      })}
    </Box>
  )
}
