import { Box } from '@primer/react'
import { Header } from '../components/header'
import { Order } from '../features/customer/components/order'

export default function OrderPage() {
  return (
    <Box>
      <Header />

      <Order />
    </Box>
  )
}
