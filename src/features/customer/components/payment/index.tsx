import { TrashIcon } from '@primer/octicons-react'
import {
  Box,
  Text,
  Heading,
  Pagehead,
  IconButton,
  PageLayout as PrimerPageLayout,
  Button,
} from '@primer/react'
import { PageLayout } from '../page-layout'

import { RiVisaLine, RiMastercardFill } from 'react-icons/ri'
import { CreateCardPayment } from '../create-card-payment'
import { useState } from 'react'

export function Payment() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <PageLayout>
      <CreateCardPayment isOpen={isOpen} onDismiss={handleClose} />

      <PrimerPageLayout.Content sx={{ height: 'full' }}>
        <Pagehead
          sx={{
            pt: 0,
            pb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>
            Seus pagamentos
          </Heading>

          <Box>
            <Button size="small" variant="primary" onClick={handleOpen}>
              Adicionar forma de pagamento
            </Button>
          </Box>
        </Pagehead>

        <Box
          sx={{
            borderWidth: 1,
            borderRadius: 2,
            borderStyle: 'solid',
            borderColor: 'border.default',
          }}
        >
          <Box p={3} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <RiVisaLine size={32} />

              <Box display="flex" alignItems="flex-end">
                <Text ml={3} fontSize={1} color="fg.subtle">
                  Terminado com o número 1234
                </Text>
              </Box>
            </Box>

            <Box>
              <IconButton
                icon={TrashIcon}
                sx={{ color: 'danger.fg' }}
                variant="invisible"
                onClick={() =>
                  alert('Adicionar dialog para confirmar o delete')
                }
              />
            </Box>
          </Box>

          <Box
            p={3}
            display="flex"
            justifyContent="space-between"
            sx={{
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: 'border.default',
            }}
          >
            <Box display="flex" alignItems="center">
              <RiMastercardFill size={24} />

              <Box display="flex" alignItems="flex-end">
                <Text ml={3} fontSize={1} color="fg.subtle">
                  Terminado com o número 1234
                </Text>
              </Box>
            </Box>

            <Box>
              <IconButton
                icon={TrashIcon}
                sx={{ color: 'danger.fg' }}
                variant="invisible"
                onClick={() =>
                  alert('Adicionar dialog para confirmar o delete')
                }
              />
            </Box>
          </Box>
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
