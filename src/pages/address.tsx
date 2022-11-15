import { Box } from '@primer/react'
import { Header } from '../components/header'
import { Address } from '../features/customer/components/address'

export default function AddressPage() {
  return (
    <Box>
      <Header />

      <Address />
    </Box>
  )
}
