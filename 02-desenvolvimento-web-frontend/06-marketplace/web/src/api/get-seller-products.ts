import { api } from '../lib/axios'
import { GetProfileResponse } from './get-profile'

export interface SellerProduct {
  id: string,
  title: string,
  description: string,
  priceInCents: number,
  status: 'available' | 'sold' | 'cancelled',
  owner: GetProfileResponse['seller'],
  category: {
    id: string,
    title: string,
    slug: string
  },
  attachments: {
    id: string,
    url: string
  }[]

}

export interface GetSellerProductsResponse {
  products: SellerProduct[]
}

export interface GetSellerProductsParams {
  search?: string
  status?: 'available' | 'sold' | 'cancelled'
}

export async function getSellerProducts({ search, status }: GetSellerProductsParams): Promise<GetSellerProductsResponse> {
  const response = await api.get('/products/me', {
    params: {
      search,
      status
    }
  })

  return response.data
}
