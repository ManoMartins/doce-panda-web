import { useMutation } from '@tanstack/react-query'
import api from '@services/api'

interface InputMakeOrder {
  addressId: string
  payments: Array<{
    paymentId: string
    totalInCents: number
  }>
  orderItems: Array<{
    productId: string
    quantity: number
  }>
}

async function makeOrder(data: InputMakeOrder) {
  await api.post('/orders', data)
}

export function useMakeOrder() {
  return useMutation(makeOrder)
}
