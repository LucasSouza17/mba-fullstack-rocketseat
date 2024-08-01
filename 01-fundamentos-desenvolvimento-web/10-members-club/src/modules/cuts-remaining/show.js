// Seleciona o wrapper do dashboard
const dashboardWrapper = document.getElementById("dashboard-wrapper");

export function cutsRemainingShow({ cutsInfo }) {
  // Criar elemento da informação de cortes restantes
  const cutsRemainingInfo = document.createElement("div");
  cutsRemainingInfo.classList.add("cuts-progress");

  const percentageCutsCompleted = (cutsInfo.totalCuts / cutsInfo.cutsNeeded) * 100;

  cutsRemainingInfo.innerHTML = `
        <div class="progress-info">
            <p><strong>${cutsInfo.cutsRemaining}</strong> cortes restantes</p>
            <progress max="100" value="${percentageCutsCompleted}"></progress>
        </div>
        <div class="pin-wrapper">
            <img src="src/assets/pin-gift.svg" alt="gift pin">
        </div>
    `;

  const progress = cutsRemainingInfo.querySelector("progress");
  progress.setAttribute("data-content-remaining", `${cutsInfo.totalCuts} de ${cutsInfo.cutsNeeded}`);

  dashboardWrapper.append(cutsRemainingInfo);
}