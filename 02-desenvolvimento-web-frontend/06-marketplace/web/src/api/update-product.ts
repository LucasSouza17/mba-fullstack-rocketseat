import { api } from '../lib/axios'

export interface UpdateProductBody {
  id: string;
  title: string;
  priceInCents: number;
  description: string;
  categoryId: string;
  attachmentsIds: string[];
}

export async function updateProduct({ id, title, priceInCents, description, categoryId, attachmentsIds }: UpdateProductBody) {
  await api.put(`/products/${id}`, { title, priceInCents, description, categoryId, attachmentsIds })
}
