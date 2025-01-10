import { api } from '../lib/axios'

export interface UpdateProductStatusBody {
  id: string;
  status: 'available' | 'sold' | 'cancelled'
}

export async function updateProductStatus({ id, status }: UpdateProductStatusBody) {
  await api.patch(`/products/${id}/${status}`)
}
