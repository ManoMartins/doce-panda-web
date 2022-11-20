import { useMutation } from '@tanstack/react-query'
import api from '@services/api'
import { queryClient } from '../../../App'

interface CreateAddressRequest {
  city: string
  state: string
  street: string
  number: string
  zipCode: string
  neighborhood: string
  isMain: boolean
}

async function createAddress(data: CreateAddressRequest) {
  await api.post('/users/address', data)
}

export function useCreateAddress() {
  return useMutation(createAddress, {
    onSuccess() {
      queryClient.invalidateQueries(['list-addresses'])
    },
  })
}
