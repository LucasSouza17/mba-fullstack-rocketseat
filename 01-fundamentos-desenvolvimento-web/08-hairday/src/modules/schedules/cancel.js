import { schedulesDay } from "./load"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// Gerar evento de clique para cada lista (manha, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      // Obtém o id do agendamento.
      const { id } = item.dataset

      // Verifica se o id existe. 
      if (id) {
        // Confirma a exclusão.
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        // Se sim, cancela o agendamento.
        if (isConfirm) {
          await scheduleCancel({ id })
          await schedulesDay()
        }
      }
    }
  })
})