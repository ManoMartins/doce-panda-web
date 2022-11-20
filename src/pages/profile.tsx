import { Box } from '@primer/react'
import { Header } from '@components/header'
import { Profile } from '@features/customer/components/profile'

export default function ProfilePage() {
  return (
    <Box>
      <Header />

      <Profile />
    </Box>
  )
}
