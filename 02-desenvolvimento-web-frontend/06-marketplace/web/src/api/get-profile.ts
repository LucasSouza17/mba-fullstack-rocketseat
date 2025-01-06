import { api } from '../lib/axios'

export interface GetProfileResponse {
  seller: {
    id: string
    name: string
    phone: string
    email: string
    avatar: {
      id: string;
      url: string;
    }
  }
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get('/sellers/me')

  return response.data
}
