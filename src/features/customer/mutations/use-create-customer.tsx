import { useMutation } from '@tanstack/react-query'
import api from '../../../services/api'

interface CreateCustomerResquest {
  email: string
  password: string
}

async function createCustomer(data: CreateCustomerResquest) {
  await api.post('/users', data)
}

export function useCreateCustomer() {
  return useMutation(createCustomer)
}
