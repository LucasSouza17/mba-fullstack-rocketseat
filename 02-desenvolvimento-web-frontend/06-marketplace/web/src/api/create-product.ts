import { api } from '../lib/axios'

export interface CreateProductBody {
  title: string;
  priceInCents: number;
  description: string;
  categoryId: string;
  attachmentsIds: string[];
}

export async function createProduct({ title, priceInCents, description, categoryId, attachmentsIds }: CreateProductBody) {
  await api.post('/products', { title, priceInCents, description, categoryId, attachmentsIds })
}
