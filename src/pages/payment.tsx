import { Box } from '@primer/react'
import { Payment } from '../features/customer/components/payment'
import { Header } from '../components/header'

export default function PaymentPage() {
  return (
    <Box>
      <Header />

      <Payment />
    </Box>
  )
}
