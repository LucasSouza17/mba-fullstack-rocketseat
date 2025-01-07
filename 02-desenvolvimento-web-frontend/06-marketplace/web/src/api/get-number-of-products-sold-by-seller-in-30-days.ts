import { api } from '../lib/axios'

export interface GetNumberOfProductsSoldBySellerIn30DaysResponse {
  amount: number
}

export async function GetNumberOfProductsSoldBySellerIn30Days(): Promise<GetNumberOfProductsSoldBySellerIn30DaysResponse> {
  const response = await api.get('/sellers/metrics/products/sold')

  return response.data
}
