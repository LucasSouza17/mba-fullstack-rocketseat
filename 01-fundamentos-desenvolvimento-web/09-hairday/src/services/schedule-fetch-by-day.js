import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição para buscar os agendamentos
    const response = await fetch(
      `${apiConfig.baseURL}/schedules`
    );

    // Converte para JSON.
    const data = await response.json();

    // Filtra os agendamentos do dia.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar os agendamentos");
  }
}