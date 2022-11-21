import { useOrder } from '@features/checkout/contexts/use-order'
import { useCart } from '@contexts/use-cart'
import {
  LIMIT_COULD_BE_SELECT_CREDIT_CARD,
  MINIMUM_VALUE_BY_CREDIT_CARD,
} from '../../../constants/credit-card'

export function useCreditCardItem(creditCardId: string) {
  const { order } = useOrder()
  const { totalPrice } = useCart()

  let isSelected = false
  let isLastSelected = false
  let isAlreadySelectedLimit = false
  let priceForCreditCard = 0
  let hasSelected = false

  if (order?.payments?.length > 0) {
    isSelected = order.payments.some(
      (payment) => payment.paymentId === creditCardId
    )
    isLastSelected =
      order.payments[order.payments.length - 1].paymentId === creditCardId

    isAlreadySelectedLimit =
      order.payments.length === LIMIT_COULD_BE_SELECT_CREDIT_CARD

    priceForCreditCard =
      order.payments.find((payment) => payment.paymentId === creditCardId)
        ?.totalInCents ?? 0

    hasSelected = order.payments.length > 0
  }

  const canSelected =
    totalPrice / LIMIT_COULD_BE_SELECT_CREDIT_CARD >
    MINIMUM_VALUE_BY_CREDIT_CARD

  return {
    isSelected,
    canSelected,
    hasSelected,
    isLastSelected,
    priceForCreditCard,
    isAlreadySelectedLimit,
  }
}
