import { useMutation } from '@tanstack/react-query'
import api from '@services/api'
import { queryClient } from '../../../App'

interface DeleteAddressRequest {
  addressId: string
}

async function deleteAddress(data: DeleteAddressRequest) {
  await api.delete(`/users/address/${data.addressId}`)
}

export function useDeleteAddress() {
  return useMutation(deleteAddress, {
    onSuccess() {
      queryClient.invalidateQueries(['list-addresses'])
    },
  })
}
