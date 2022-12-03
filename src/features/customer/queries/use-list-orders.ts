import { useQuery } from '@tanstack/react-query'
import api from '@services/api'

export enum OrderStatusEnum {
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  PREPARING = 'PREPARING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
}

export interface ListOrdersResponseApi {
  id: string
  orderItems: OrderItem[]
  totalInCents: number
  status: OrderStatusEnum
}

export interface OrderItem {
  id: string
  productId: string
  orderId: string
  quantity: number
  totalInCents: number
  product: Product
  created_at: string
  updated_at: string
}

export interface Product {
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

interface ListOrdersResponse {
  id: string
  orderItems: OrderItem[]
  totalInCents: number
  status: OrderStatusEnum
}

async function listOrders(): Promise<ListOrdersResponse[]> {
  const response = await api.get<{ data: ListOrdersResponseApi[] }>('orders')

  return response.data.data.map((order) => ({
    id: order.id,
    status: order.status,
    orderItems: order.orderItems,
    totalInCents: order.totalInCents,
  }))
}

export function useListOrders() {
  return useQuery(['list-orders'], async () => await listOrders())
}
