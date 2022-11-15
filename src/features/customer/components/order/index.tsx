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

export function Order() {
  const confirm = useConfirm()

  const handleTrackOrder = useCallback(async () => {
    await confirm({
      title: 'Rastreio',
      content: 'TODO: Adicionar component de rastreio',
      confirmButtonType: 'primary',
    })
  }, [])

  const handleCancelOrder = useCallback(async () => {
    await confirm({
      title: 'Cancelar',
      content: 'TODO: Adicionar component para cancelar',
      confirmButtonType: 'primary',
    })
  }, [])

  return (
    <PageLayout>
      <PrimerPageLayout.Content>
        <Pagehead sx={{ pt: 0, pb: 2 }}>
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>Seus pedidos</Heading>
        </Pagehead>

        <Box
          sx={{
            height: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '0.375rem',
            borderColor: 'border.default',
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
                Pedido Nº 0001
              </Heading>
            </Box>

            <Button size="small" variant="invisible" onClick={handleTrackOrder}>
              Rastrear pedido
            </Button>
          </Box>

          <Box>
            <Box
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
                  Bolo de pote
                </Text>
                <Label>chocolate</Label>
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
            <Box
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
                  Bolo de pote
                </Text>
                <Label>chocolate</Label>
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
            <Box
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
                  Bolo de pote
                </Text>
                <Label>chocolate</Label>
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
          </Box>
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
