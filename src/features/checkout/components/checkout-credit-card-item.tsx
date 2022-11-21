import { Box, Checkbox, FormControl } from '@primer/react'
import Form from '@components/form'
import { ListCreditCardResponse } from '@features/customer/queries/use-list-credit-cards'
import { useCallback, useEffect, useState } from 'react'
import { formatLocationCurrency } from '@utils/format-currency'
import { useOrder } from '@features/checkout/contexts/use-order'
import { useCreditCardItem } from '@features/checkout/hooks/use-credit-card-item'

interface CheckoutCreditCardItemProps {
  creditCard: ListCreditCardResponse
}

export function CheckoutCreditCardItem({
  creditCard,
}: CheckoutCreditCardItemProps) {
  const { updateValueToPay } = useOrder()
  const {
    isSelected,
    canSelected,
    hasSelected,
    isLastSelected,
    priceForCreditCard,
    isAlreadySelectedLimit,
  } = useCreditCardItem(creditCard.id)

  const [priceFormatted, setPriceFormatted] = useState(() =>
    formatLocationCurrency('0')
  )

  const handleOnBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        updateValueToPay(creditCard.id, +event.target.value)
        setPriceFormatted(formatLocationCurrency(event.target.value))
      } catch (err) {
        alert(err)
      }
    },
    [creditCard.id, updateValueToPay]
  )

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace(/,/g, '')

      setPriceFormatted(value)
    },
    []
  )

  useEffect(() => {
    setPriceFormatted(formatLocationCurrency(String(priceForCreditCard)))
  }, [priceForCreditCard, priceFormatted])

  return (
    <Box
      key={creditCard.id}
      sx={{
        maxHeight: '32px',
        minHeight: '32px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        borderWidth: 1,
        borderRadius: 2,
        borderStyle: 'solid',
        borderColor: 'border.subtle',
      }}
    >
      <FormControl
        disabled={
          (isAlreadySelectedLimit && !isSelected) ||
          (!canSelected && !isSelected && hasSelected)
        }
      >
        <Checkbox value={creditCard.id} />

        <FormControl.Label>
          Terminado com {creditCard.cardLastNumber}
        </FormControl.Label>
      </FormControl>

      {isSelected && (
        <Box>
          <Form.Number
            leadingVisual={'R$'}
            maxWidth={80}
            name="voucherCode"
            value={priceFormatted}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            disabled={isLastSelected}
            hideArrow
          />
        </Box>
      )}
    </Box>
  )
}
