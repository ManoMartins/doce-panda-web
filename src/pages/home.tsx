import { Box } from '@primer/react'
import { GridProducts } from '../features/product/components/grid-products'
import { Hero } from '../features/home/components/hero'
import { Header } from '../components/header'

export default function HomePage() {
  return (
    <Box>
      <Header />

      <Box maxWidth="1120px" mx="auto">
        <Hero />

        <GridProducts />
      </Box>
    </Box>
  )
}
