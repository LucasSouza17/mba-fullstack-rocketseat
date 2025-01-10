import { api } from '../lib/axios'

export interface GetCategoriesResponse {
  categories: {
    id: string;
    title: string;
    slug: string;
  }[]
}

export interface CategoriesSelect {
  label: string;
  value: string;
}

export async function getCategories(): Promise<CategoriesSelect[]> {
  const response = await api.get<GetCategoriesResponse>('/categories')

  const formatCategories = response.data.categories.map((category) => {
    return {
      label: category.title,
      value: category.id
    }
  })

  return formatCategories
}
