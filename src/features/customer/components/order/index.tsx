import {
  Box,
  Text,
  Label,
  Button,
  Heading,
  useConfirm,
  PageLayout as PrimerPageLayout,
  Pagehead,
} from '@primer/react'
import { useCallback } from 'react'
import { PageLayout } from '../page-layout'
import { useListOrders } from '@features/customer/queries/use-list-orders'
import { centsToReal } from '@utils/cents-to-real'
import { formatCurrency } from '@utils/format-currency'
import { StatusMapping } from '@features/customer/mappins/status'

export function Order() {
  const confirm = useConfirm()

  const listOrders = useListOrders()

  // const handleTrackOrder = useCallback(async () => {
  //   await confirm({
  //     title: 'Rastreio',
  //     content: 'TODO: Adicionar component de rastreio',
  //     confirmButtonType: 'primary',
  //   })
  // }, [confirm])

  const handleCancelOrder = useCallback(async () => {
    await confirm({
      title: 'Cancelar',
      content: 'TODO: Adicionar component para cancelar',
      confirmButtonType: 'primary',
    })
  }, [confirm])

  return (
    <PageLayout>
      <PrimerPageLayout.Content>
        <Pagehead sx={{ pt: 0, pb: 2 }}>
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>Seus pedidos</Heading>
        </Pagehead>

        {listOrders.data?.map((order, index) => {
          const orderStatus = StatusMapping[order.status]

          return (
            <Box
              key={order.id}
              sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: '0.375rem',
                borderColor: 'border.default',
                '& + div': {
                  mt: 15,
                },
              }}
            >
              <Box
                p={3}
                display="flex"
                bg="canvas.subtle"
                alignItems="center"
                borderTopLeftRadius={2}
                borderTopRightRadius={2}
                justifyContent="space-between"
              >
                <Box display="flex">
                  <Heading as="h4" sx={{ fontSize: 1 }}>
                    Pedido Nº {String(index + 1).padStart(4, '0')}
                  </Heading>

                  <Text ml={2}>-</Text>

                  <Text ml={2} fontSize={1}>
                    <Text as={'strong'}>Total:</Text>{' '}
                    {formatCurrency(centsToReal(order.totalInCents))}
                  </Text>
                </Box>

                <Label variant={orderStatus.variant}>{orderStatus.label}</Label>
              </Box>

              <Box>
                {order.orderItems.map((orderItem) => (
                  <Box
                    key={orderItem.id}
                    p={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    borderTopWidth={1}
                    borderTopStyle="solid"
                    borderTopColor="border.default"
                  >
                    <Box>
                      <Text mr={1} fontSize={1}>
                        {orderItem.product.description}
                      </Text>

                      <Label>{orderItem.product.flavor}</Label>

                      <Text ml={2} fontSize={1}>
                        {orderItem.quantity} itens
                      </Text>
                    </Box>

                    <Box display="flex">
                      <Button
                        size="small"
                        variant="invisible"
                        onClick={handleCancelOrder}
                        sx={{ mr: 2 }}
                      >
                        Trocar
                      </Button>

                      <Button
                        size="small"
                        variant="danger"
                        onClick={handleCancelOrder}
                      >
                        Cancelar
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )
        })}
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
