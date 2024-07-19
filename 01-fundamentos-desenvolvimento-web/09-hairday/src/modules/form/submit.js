import dayjs from "dayjs";

import { scheduleNew } from '../../services/schedule-new'
import { schedulesDay } from "../schedules/load"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega data atual e define data minima como sendo a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;


form.onsubmit = async (event) => {
  // Previne o comportamento padrao do formulário
  event.preventDefault();

  try {
    // Recuperando nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, informe o nome do cliente.")
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário.")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when
    })

    // Recarrega os agendamentos
    await schedulesDay()

    // Limpa o input de nome do cliente.
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}