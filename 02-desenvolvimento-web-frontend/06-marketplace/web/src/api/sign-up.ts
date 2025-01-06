import { api } from '../lib/axios'

export interface SignInBody {
  name: string;
  phone: string;
  email: string;
  avatarId: string | null;
  password: string;
  passwordConfirmation: string
}

export async function signUp({ name, phone, email, avatarId, password, passwordConfirmation }: SignInBody) {
  await api.post('/sellers', { name, phone, email, avatarId, password, passwordConfirmation })
}
