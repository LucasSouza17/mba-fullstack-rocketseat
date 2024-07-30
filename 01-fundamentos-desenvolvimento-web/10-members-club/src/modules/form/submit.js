import { getMember } from "../../services/get-member.js";

const form = document.querySelector("form");
const memberId = document.getElementById("member-id");
const memberIdPattern = /^\d{3}-\d{3}-\d{3}-\d{3}$/;
const buttonSubmit = document.getElementById("button-input-submit");

memberId.oninput = (event) => {
  console.log("oi")
  if (memberId.value !== "") {
    buttonSubmit.removeAttribute("disabled");
  } else {
    buttonSubmit.setAttribute("disabled", true);
  }
}

form.onsubmit = async (event) => {
  // Previnir o envio do formulário
  event.preventDefault();

  try {
    // Recupera o id do membro
    const memberIdValue = memberId.value.trim();



    if (!memberIdPattern.test(memberIdValue)) {
      return alert("Id de membro inválido");
    }

    const member = await getMember({ memberId: memberIdValue });

    if (!member) {
      return alert("Membro não encontrado");
    }

    // Load member dashboard
  } catch (error) {
    alert("Não foi possível carregar os dados do membro");
    console.log(error)
  }
}