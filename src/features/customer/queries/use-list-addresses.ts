import { useQuery } from '@tanstack/react-query'
import api from '@services/api'

interface ListAddressesResponseApi {
  id: string
  isMain: boolean
  street: string
  number: string
}

interface ListAddressesResponse {
  id: string
  isMain: boolean
  street: string
  number: string
}

async function listAddresses(): Promise<ListAddressesResponse[]> {
  const response = await api.get<{ data: ListAddressesResponseApi[] }>(
    '/users/address'
  )

  return response.data.data.map((address) => ({
    id: address.id,
    isMain: address.isMain,
    number: address.number,
    street: address.street,
  }))
}

export function useListAddresses() {
  return useQuery(['list-addresses'], async () => await listAddresses())
}
