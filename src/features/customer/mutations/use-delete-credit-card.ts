import { useMutation } from '@tanstack/react-query'
import api from '@services/api'
import { queryClient } from '../../../App'

interface DeleteCreditCardRequest {
  creditCardId: string
}

async function deleteCreditCard(data: DeleteCreditCardRequest) {
  await api.delete(`/payments/credit-card/${data.creditCardId}`)
}

export function useDeleteCreditCard() {
  return useMutation(deleteCreditCard, {
    onSuccess() {
      queryClient.invalidateQueries(['list-credit-cards'])
    },
  })
}
