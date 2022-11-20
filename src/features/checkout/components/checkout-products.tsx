import { Avatar, Box, Text } from '@primer/react'
import { useCart } from '@contexts/use-cart'
import { formatCurrency } from '@utils/format-currency'

export function CheckoutProducts() {
  const { cartProducts } = useCart()

  return (
    <>
      <Box
        id="choiceHeading"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.default"
        pb={2}
        mb={3}
        fontSize={2}
        mt={3}
      >
        Produtos
      </Box>

      {cartProducts.length ? (
        cartProducts.map((cartProduct) => (
          <Box
            maxHeight={72}
            key={cartProduct.product.id}
            display={'flex'}
            justifyContent={'space-between'}
            sx={{
              pr: 2,
              mt: 3,
              borderWidth: 1,
              borderRadius: 2,
              borderStyle: 'solid',
              borderColor: 'border.subtle',
            }}
          >
            <Box display={'flex'}>
              <Avatar
                square
                size={72}
                src={cartProduct.product.imageUrl}
                alt={cartProduct.product.name}
                sx={{
                  objectFit: 'cover',
                  borderRadius: 0,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />

              <Box ml={2} py={2}>
                <Text as={'span'} fontWeight={600}>
                  {cartProduct.product.flavor}
                </Text>

                <Text as={'p'} m={0} mt={2}>
                  {cartProduct.product.description}
                </Text>
              </Box>
            </Box>

            <Box
              py={2}
              display={'flex'}
              alignItems={'flex-end'}
              justifyContent={'flex-end'}
              flexDirection={'column'}
            >
              <Text pr={2}>
                Total:{' '}
                {formatCurrency(
                  cartProduct.product.price * cartProduct.quantity
                )}
              </Text>
            </Box>
          </Box>
        ))
      ) : (
        <Text as={'span'} fontSize={1} color={'fg.subtle'}>
          Nenhum produto selecionado
        </Text>
      )}
    </>
  )
}
