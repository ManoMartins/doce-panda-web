import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
// import { realToCents } from '@utils/real-to-cents'
import { useCart } from '@contexts/use-cart'
import { formatLocationCurrency } from '@utils/format-currency'
import { MINIMUM_VALUE_BY_CREDIT_CARD } from '../../../constants/credit-card'

interface Payment {
  paymentId: string
  totalInCents: number
}

interface OrderData {
  orderItems: any[]
  payments: Payment[]
}

interface OrderContextValues {
  order: OrderData
  updatePaymentMethod: (paymentMethodIds: string[]) => void
  updateValueToPay: (creditCardId: string, value: number) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

const OrderContext = createContext<OrderContextValues>({} as OrderContextValues)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const { totalPrice, cartProducts } = useCart()
  const [order, setOrder] = useState<OrderData>({} as OrderData)

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
        totalInCents: totalPrice / paymentMethodIds.length,
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
            totalInCents: amount,
          }
        }

        return {
          ...payment,
          totalInCents: totalPrice - amount,
        }
      })

      const preTotalPrice = draft.reduce((a, b) => a + b.totalInCents, 0)

      if (preTotalPrice !== totalPrice) {
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

  return (
    <OrderContext.Provider
      value={{
        order,
        updateValueToPay,
        updatePaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}
