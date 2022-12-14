import { Box, Button, Spinner, Text } from '@primer/react'

import { formatCurrency } from '@utils/format-currency'

import { useCart } from '@contexts/use-cart'

interface CheckoutDetailsProps {
  onSubmit: () => void
  isLoading: boolean
}

export function CheckoutDetails({ onSubmit, isLoading }: CheckoutDetailsProps) {
  const { totalPrice, subTotalPrice, cartProducts } = useCart()

  return (
    <>
      <Box
        borderWidth={1}
        borderRadius={2}
        borderStyle="solid"
        borderColor="border.subtle"
      >
        <Box
          pt={3}
          px={3}
          display="flex"
          flexDirection="column"
          sx={{ '> *': { mb: 3 } }}
        >
          <Box display="flex" justifyContent="space-between">
            <Text as="strong">Subtotal</Text>
            <Text>{formatCurrency(subTotalPrice)}</Text>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Text as="strong">Frete</Text>
            <Text>R$ 5,00</Text>
          </Box>
        </Box>

        <Box
          p={3}
          display="flex"
          bg="canvas.subtle"
          justifyContent="space-between"
        >
          <Text as="strong">Total</Text>

          <Text>{formatCurrency(totalPrice)}</Text>
        </Box>
      </Box>

      <Button
        disabled={!cartProducts.length}
        variant="primary"
        onClick={onSubmit}
        sx={{ mt: 2, width: '100%' }}
      >
        {isLoading ? <Spinner size={'small'} /> : 'Finalizar pedido'}
      </Button>
    </>
  )
}
