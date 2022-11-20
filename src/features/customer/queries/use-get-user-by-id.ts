import { useQuery } from '@tanstack/react-query'
import api from '@services/api'

interface GetUserByIdResponseApi {
  id: string
  name: string
  gender: string
  phoneNumber: string
  documentNumber: string
  rewardPoints: string
  email: string
  addresses: string
  createdAt: string
  updatedAt: string
}

export interface GetUserByIdResponse {
  id: string
  name: string
  gender: string
  phoneNumber: string
  documentNumber: string
  rewardPoints: string
  email: string
  addresses: string
  createdAt: string
  updatedAt: string
}

interface GetUserByIdRequest {
  userId: string
}

async function getUserById(
  input: GetUserByIdRequest
): Promise<GetUserByIdResponse> {
  const response = await api.get<{ data: GetUserByIdResponseApi }>(
    `/users/${input.userId}`
  )

  return {
    id: response.data.data.id,
    name: response.data.data.name,
    gender: response.data.data.gender,
    phoneNumber: response.data.data.phoneNumber,
    documentNumber: response.data.data.documentNumber,
    rewardPoints: response.data.data.rewardPoints,
    email: response.data.data.email,
    addresses: response.data.data.addresses,
    createdAt: response.data.data.createdAt,
    updatedAt: response.data.data.updatedAt,
  }
}

export function useGetUserById(input: GetUserByIdRequest) {
  return useQuery(['user', input], async () => await getUserById(input))
}
