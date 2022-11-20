import { Box } from '@primer/react'
import { Process } from '@features/checkout/components/process'
import { Header } from '@components/header'
import { OrderContextProvider } from '@features/checkout/contexts/use-order'

export default function CheckoutPage() {
  return (
    <OrderContextProvider>
      <Box>
        <Header />

        <Process />
      </Box>
    </OrderContextProvider>
  )
}
