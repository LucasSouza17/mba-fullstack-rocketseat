import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Erro ao cancelar o agendamento, tente novamente.");
  }
}