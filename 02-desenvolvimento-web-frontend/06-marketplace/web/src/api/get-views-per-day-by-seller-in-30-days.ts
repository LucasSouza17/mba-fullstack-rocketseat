import { api } from '../lib/axios'

export interface GetViewsPerDayBySellerIn30DaysResponse {
  viewsPerDay: {
    date: Date | null
    amount: number
  }[]
}

export async function getViewsPerDayBySellerIn30Days(): Promise<GetViewsPerDayBySellerIn30DaysResponse> {
  const response = await api.get('/sellers/metrics/views/days')

  return response.data
}
