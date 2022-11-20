import { useMutation } from '@tanstack/react-query'
import api from '@services/api'
import { queryClient } from '../../../App'

interface CreateCreditCardRequest {
  cardBrand: string
  cardHolder: string
  cardLastNumber: string
  cardSecurityCode: string
  cardIdentification: string
  cardExpirationDate: string
}

async function createCreditCard(data: CreateCreditCardRequest) {
  await api.post('/payments/credit-card', data)
}

export function useCreateCreditCard() {
  return useMutation(createCreditCard, {
    onSuccess() {
      queryClient.invalidateQueries(['list-credit-cards'])
    },
  })
}
