import { Box } from '@primer/react'
import { Header } from '../components/header'
import { Coupon } from '../features/customer/components/coupon'

export default function CouponPage() {
  return (
    <Box>
      <Header />

      <Coupon />
    </Box>
  )
}
