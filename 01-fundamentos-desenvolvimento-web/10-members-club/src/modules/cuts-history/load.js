import { cutsHistoryShow } from './show.js'

export async function cutsHistoryLoad(cutsHistory) {
  // Exibe os informações de cortes restantes
  cutsHistoryShow({ cutsHistory })
}