import { api } from '../lib/axios'

export interface AttachmentsBody {
  files: File[]
}

export async function attachments({ files }: AttachmentsBody) {
  const formData = new FormData()

  for (const file of files) {
    formData.append('files', file)
  }

  const response = await api.post('/attachments', formData)

  return response
}
