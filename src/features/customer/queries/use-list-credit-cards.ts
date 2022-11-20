import { useQuery } from '@tanstack/react-query'
import api from '@services/api'

interface ListCreditCardResponseApi {
  id: string
  cardLastNumber: string
  cardHolder: string
  cardIdentification: string
  cardSecurityCode: string
  cardExpirationDate: string
  cardBrand: string
  createdAt: string
  updatedAt: string
}

export interface ListCreditCardResponse {
  id: string
  cardLastNumber: string
  cardHolder: string
  cardIdentification: string
  cardSecurityCode: string
  cardExpirationDate: string
  cardBrand: string
  createdAt: string
  updatedAt: string
}

async function listCreditCards(): Promise<ListCreditCardResponse[]> {
  const response = await api.get<{ data: ListCreditCardResponseApi[] }>(
    '/payments/credit-card'
  )

  return response.data.data.map((creditCard) => ({
    id: creditCard.id,
    cardBrand: creditCard.cardBrand,
    cardHolder: creditCard.cardHolder,
    cardLastNumber: creditCard.cardLastNumber,
    cardSecurityCode: creditCard.cardSecurityCode,
    cardIdentification: creditCard.cardIdentification,
    cardExpirationDate: creditCard.cardExpirationDate,
    createdAt: creditCard.createdAt,
    updatedAt: creditCard.updatedAt,
  }))
}

export function useListCreditCards() {
  return useQuery(['list-credit-cards'], async () => await listCreditCards())
}
