import { memberInfoShow } from './show.js'

export async function memberInfoLoad(memberData) {
  // Exibe os informações do usuário
  memberInfoShow({ memberData })
}