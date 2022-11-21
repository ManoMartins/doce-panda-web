import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useCart } from '@contexts/use-cart'
import { formatLocationCurrency } from '@utils/format-currency'
import { MINIMUM_VALUE_BY_CREDIT_CARD } from '../../../constants/credit-card'
import { realToCents } from '@utils/real-to-cents'
import { useMakeOrder } from '@features/checkout/mutations/use-make-order'

interface Payment {
  paymentId: string
  totalInCents: number
}

interface OrderData {
  orderItems: any[]
  payments: Payment[]
  addressId: string
}

interface OrderContextValues {
  order: OrderData
  updateDeliveryAddress: (addressId: string) => void
  updatePaymentMethod: (paymentMethodIds: string[]) => void
  updateValueToPay: (creditCardId: string, value: number) => void
  makeOrder: () => Promise<void>
  clearOrder: () => void
  isPaying: boolean
}

interface OrderContextProviderProps {
  children: ReactNode
}

const OrderContext = createContext<OrderContextValues>({} as OrderContextValues)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const { totalPrice, cartProducts, clearCart } = useCart()
  const [order, setOrder] = useState<OrderData>({} as OrderData)

  const makeOrderApi = useMakeOrder()

  useEffect(() => {
    setOrder((oldState) => ({
      ...oldState,
      orderItems: cartProducts.map((cartProduct) => ({
        productId: cartProduct.product.id,
        quantity: cartProduct.quantity,
      })),
    }))
  }, [cartProducts])

  const updatePaymentMethod = useCallback(
    (paymentMethodIds: string[]) => {
      if (!paymentMethodIds.length) {
        setOrder((oldState) => ({
          ...oldState,
          payments: [],
        }))
      }

      const paymentIds = paymentMethodIds.map((paymentMethodId) => ({
        paymentId: paymentMethodId,
        totalInCents: realToCents(totalPrice) / paymentMethodIds.length,
      }))

      setOrder((oldState) => ({
        ...oldState,
        payments: paymentIds,
      }))
    },
    [totalPrice]
  )

  const updateValueToPay = useCallback(
    (creditCardId: string, amount: number) => {
      const draft = order.payments.map((payment) => {
        if (
          totalPrice - amount < MINIMUM_VALUE_BY_CREDIT_CARD ||
          amount < MINIMUM_VALUE_BY_CREDIT_CARD
        ) {
          return payment
        }

        if (payment.paymentId === creditCardId) {
          return {
            ...payment,
            totalInCents: realToCents(amount),
          }
        }

        return {
          ...payment,
          totalInCents: realToCents(totalPrice - amount),
        }
      })

      const preTotalPrice = draft.reduce((a, b) => a + b.totalInCents, 0)

      if (realToCents(preTotalPrice) !== totalPrice) {
        throw new Error(
          `O valor deve ser menor do que R$ ${formatLocationCurrency(
            String(totalPrice)
          )}`
        )
      }

      setOrder((oldState) => ({
        ...oldState,
        payments: draft,
      }))
    },
    [order.payments, totalPrice]
  )

  const updateDeliveryAddress = useCallback((addressId: string) => {
    setOrder((oldState) => ({
      ...oldState,
      addressId,
    }))
  }, [])

  const clearOrder = useCallback(() => {
    setOrder({} as OrderData)
  }, [])

  const makeOrder = useCallback(async () => {
    await makeOrderApi.mutateAsync(order)
    clearOrder()
    clearCart()
  }, [clearCart, clearOrder, makeOrderApi, order])

  return (
    <OrderContext.Provider
      value={{
        order,
        makeOrder,
        clearOrder,
        updateValueToPay,
        updatePaymentMethod,
        updateDeliveryAddress,
        isPaying: makeOrderApi.isLoading,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}
