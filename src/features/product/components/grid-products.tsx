import { Box, Heading } from '@primer/react'
import { GridItemProduct } from './grid-item-product'

export function GridProducts() {
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
        <GridItemProduct
          title="Chocolate"
          category="Bolo de pote"
          price="R$ 7,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
        <GridItemProduct
          title="Oreo"
          category="Bolo de pote"
          price="R$ 9,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
        <GridItemProduct
          title="Ninho com morango"
          category="Bolo de pote"
          price="R$ 9,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
        <GridItemProduct
          title="Prestígio"
          category="Bolo de pote"
          price="R$ 7,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
        <GridItemProduct
          title="Ovomaltine"
          category="Bolo de pote"
          price="R$ 7,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
        <GridItemProduct
          title="Doce de leite"
          category="Bolo de pote"
          price="R$ 7,50"
          image={{
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2020/10/bolo-de-pote-de-oreo.jpg',
          }}
        />
      </Box>
    </Box>
  )
}
