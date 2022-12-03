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

import { RiVisaLine } from 'react-icons/ri'
import { CreateCardPayment } from '../create-card-payment'
import { useCallback, useState } from 'react'
import { useListCreditCards } from '@features/customer/queries/use-list-credit-cards'
import { useDeleteCreditCard } from '@features/customer/mutations/use-delete-credit-card'

export function Payment() {
  const [isOpen, setIsOpen] = useState(false)

  const deleteCreditCard = useDeleteCreditCard()
  const listCreditCards = useListCreditCards()

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleDelete = useCallback(
    async (creditCardId: string) => {
      try {
        await deleteCreditCard.mutateAsync({ creditCardId })
      } catch (err) {
        console.log(err)
      }
    },
    [deleteCreditCard]
  )

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
          {listCreditCards.data?.map((creditCard) => (
            <Box
              key={creditCard.id}
              p={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <RiVisaLine size={32} />

                <Box display="flex" alignItems="flex-end">
                  <Text ml={3} fontSize={1} color="fg.subtle">
                    Terminado com o número {creditCard.cardLastNumber}
                  </Text>
                </Box>
              </Box>

              <Box>
                <IconButton
                  icon={TrashIcon}
                  sx={{ color: 'danger.fg' }}
                  variant="invisible"
                  onClick={() => handleDelete(creditCard.id)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
