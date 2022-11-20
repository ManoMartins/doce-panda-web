import { useQuery } from '@tanstack/react-query'
import api from '@services/api'
import { centsToReal } from '@utils/cents-to-real'

interface ListProductResponseApi {
  id: string
  name: string
  priceInCents: number
  status: string
  description: string
  flavor: string
  quantity: number
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export interface ListProductResponse {
  id: string
  name: string
  price: number
  description: string
  flavor: string
  quantity: number
  imageUrl: string
}

async function listProducts(): Promise<ListProductResponse[]> {
  const response = await api.get<{ data: ListProductResponseApi[] }>('products')

  return response.data.data.map((product) => ({
    id: product.id,
    name: product.name,
    price: centsToReal(product.priceInCents),
    description: product.description,
    flavor: product.flavor,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  }))
}

export function useListProducts() {
  return useQuery(['list-products'], async () => await listProducts())
}
