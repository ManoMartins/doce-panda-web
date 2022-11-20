import { Avatar, Box, Button, Text } from '@primer/react'
import { useCart } from '@contexts/use-cart'
import { formatCurrency } from '@utils/format-currency'
import { ListProductResponse } from '@features/product/queries/use-list-products'

interface GridItemProductProps {
  product: ListProductResponse
}

export function GridItemProduct({ product }: GridItemProductProps) {
  const { addProduct } = useCart()

  return (
    <Box
      px={4}
      pt={3}
      pb={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      borderRadius="0.75rem"
      boxShadow="shadow.large"
    >
      <Avatar
        square
        size={148}
        src={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'cover', mb: 2 }}
      />

      <Box textAlign="center">
        <Text
          as="p"
          my={0}
          fontSize="2"
          lineHeight="1.3"
          fontWeight="600"
          color="fg.default"
          className="line-clamp"
          sx={{
            height: 42,
            overflow: 'hidden',
            WebkitLineClamp: 2,
            alignItems: 'center',
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            justifyContent: 'center',
          }}
        >
          {product.flavor}
        </Text>

        <Text as="p" mt={1} mb="3" fontSize="1" color="fg.subtle">
          {product.name}
        </Text>
      </Box>

      <Text fontWeight="600" color="fg.default" fontSize="3" mb="2">
        {formatCurrency(product.price)}
      </Text>

      <Button
        variant="primary"
        sx={{ width: '100%' }}
        onClick={() => addProduct(product, 1)}
      >
        Comprar
      </Button>
    </Box>
  )
}
