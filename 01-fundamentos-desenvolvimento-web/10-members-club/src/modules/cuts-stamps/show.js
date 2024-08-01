// Seleciona o wrapper do dashboard
const dashboardWrapper = document.getElementById("dashboard-wrapper");

export function cutsStampsShow({ cutsStamps }) {
  // Cria o elemento de historico de cortes
  const cutsStampsElem = document.createElement("div");
  cutsStampsElem.classList.add("cuts-stamps");

  const totalStampsArray = new Array(cutsStamps.cutsNeeded).fill("");

  // Cria o elemento de historico de cortes
  cutsStampsElem.innerHTML = `
    <div class="stamps-header">
      <div class="stamps-info">
        <p>CARTÃO FIDELIDADE</p>
        <span>Ao fazer cortes de cabelo, o décimo sai de graça!</span>
      </div>
      <div class="user-id">ID: 124-537-835-230</div>
    </div>
    <div class="stamps-list">
    ${totalStampsArray.map((_, index) => {
      return `
      <div class="stamps-item">
      ${index + 1 <= cutsStamps.totalCuts ? (
        `<img src="src/assets/pin-check-stamp.png" alt="stamp" />`
      ) : (
        `<div></div>`
      )}
      </div>
      `
    }).join('')}
    </div>
  `;

  dashboardWrapper.append(cutsStampsElem);
}