import { api } from '../lib/axios'
import { SellerProduct } from './get-seller-products'

export interface GetProductByIdResponse {
  product: SellerProduct
}

export interface GetProductByIdParams {
  id: string
}

export async function getProductById({ id }: GetProductByIdParams): Promise<GetProductByIdResponse> {
  const response = await api.get(`/products/${id}`)

  return response.data
}
