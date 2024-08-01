// Seleciona o wrapper do dashboard
const dashboardWrapper = document.getElementById("dashboard-wrapper");

export function cutsHistoryShow({ cutsHistory }) {
  // Cria o elemento de historico de cortes
  const cutsHistoryElem = document.createElement("div");
  cutsHistoryElem.classList.add("cuts-history");

  console.log(cutsHistory)

  // Cria o elemento de historico de cortes
  cutsHistoryElem.innerHTML = `
    <div class="history-info-wrapper">
      <div class="history-header">
        <p>HISTÓRICO</p>
        <span>${cutsHistory.totalCuts} cortes</span>
      </div>
      <div class="history-list">
      ${cutsHistory.history.map(item => {
      return `<div class="history-item">
          <div class="history-info">
            <p>${item.date}</p>
            <span>${item.time}</span>
          </div>
          <img src="src/assets/pin-check.svg" alt="Selo check">
        </div>`
    }).join('')}
      </div>
    </div>
  `;

  console.log(cutsHistoryElem.innerHTML)

  dashboardWrapper.append(cutsHistoryElem);
}