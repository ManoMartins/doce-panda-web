import { useMutation } from '@tanstack/react-query'
import api from '../../../services/api'

interface CreateCustomerRequest {
  email: string
  password: string
}

async function createCustomer(data: CreateCustomerRequest) {
  await api.post('/users', data)
}

export function useCreateCustomer() {
  return useMutation(createCustomer)
}
