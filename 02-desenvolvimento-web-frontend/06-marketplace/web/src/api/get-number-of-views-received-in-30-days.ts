import { api } from '../lib/axios'

export interface GetNumberOfViewsReceivedIn30DaysResponse {
  amount: number
}

export async function GetNumberOfViewsReceivedIn30Days(): Promise<GetNumberOfViewsReceivedIn30DaysResponse> {
  const response = await api.get('/sellers/metrics/views')

  return response.data
}
