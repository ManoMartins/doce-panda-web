import { Box } from '@primer/react'
import { Process } from '../features/checkout/components/process'
import { Header } from '../components/header'

export default function CheckoutPage() {
  return (
    <Box>
      <Header />

      <Process />
    </Box>
  )
}
