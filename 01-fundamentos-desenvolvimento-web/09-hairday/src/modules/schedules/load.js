import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from './show.js'

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  scheduleShow({ dailySchedules })

  // Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules })
}