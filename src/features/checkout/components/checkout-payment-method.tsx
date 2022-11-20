import { Box, Text, CheckboxGroup } from '@primer/react'
import { useListCreditCards } from '@features/customer/queries/use-list-credit-cards'
import { useOrder } from '@features/checkout/contexts/use-order'
import { useCallback } from 'react'
import { CheckoutCreditCardItem } from '@features/checkout/components/checkout-credit-card-item'

export function CheckoutPaymentMethod() {
  const { updatePaymentMethod } = useOrder()

  const listCreditCards = useListCreditCards()

  const handleAddPaymentMethod = useCallback(
    (ids: string[]) => {
      updatePaymentMethod(ids)
    },
    [updatePaymentMethod]
  )

  return (
    <>
      <Box
        pb={2}
        mb={3}
        display={'flex'}
        alignItems={'center'}
        id={'paymentMethod'}
        borderBottomWidth={'1px'}
        borderBottomStyle={'solid'}
        borderBottomColor={'border.default'}
      >
        <Text as={'span'}>Forma de pagamento</Text>
      </Box>

      <CheckboxGroup
        aria-labelledby="paymentMethod"
        onChange={handleAddPaymentMethod}
      >
        {listCreditCards.data ? (
          listCreditCards.data.map((creditCard) => {
            return (
              <CheckoutCreditCardItem
                key={creditCard.id}
                creditCard={creditCard}
              />
            )
          })
        ) : (
          <Text as={'span'} fontSize={1} color={'fg.subtle'}>
            Nenhum cartão de crédito cadastrado
          </Text>
        )}
      </CheckboxGroup>
    </>
  )
}
