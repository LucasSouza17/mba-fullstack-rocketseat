const container = document.getElementById("container");

export function modalWinCutShow() {
   const overlay = document.createElement("div");
   overlay.classList.add("overlay");

   const modal = document.createElement("div");
   modal.classList.add("modal");

   modal.innerHTML = `
    <strong>Parabéns</strong>
    <p>
      Você completou todos os selos e acaba de ganhar o próximo corte <b>GRÁTIS</b>
    </p>
    <button type="button" id="modal-button">UHU!</button>
   `

   container.append(overlay, modal);

   const button = document.getElementById("modal-button");
   button.addEventListener("click", () => {
     modal.remove();
     overlay.remove();
   });
}