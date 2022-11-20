import { Box, Heading } from '@primer/react'
import { GridItemProduct } from './grid-item-product'
import { useListProducts } from '@features/product/queries/use-list-products'

export function GridProducts() {
  const listProducts = useListProducts()

  return (
    <Box mt={12}>
      <Heading as="h2" sx={{ mb: '4', fontSize: '5', color: 'fg.default' }}>
        Nossos bolos de pote
      </Heading>

      <Box
        display="grid"
        gridRowGap="6"
        gridColumnGap="5"
        gridTemplateColumns="repeat(5, 12.375rem)"
      >
        {listProducts.data?.map((product) => (
          <GridItemProduct key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  )
}
