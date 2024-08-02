import { getMember } from "../../services/get-member.js";
import { cutsHistoryLoad } from "../cuts-history/load.js";
import { cutsRemainingLoad } from "../cuts-remaining/load.js";
import { cutsStampsLoad } from "../cuts-stamps/load.js";
import { memberInfoLoad } from "../member-info/load.js";
import { modalWinCutLoad } from "../modal-win-cut/load.js";

const form = document.querySelector("form");
const memberId = document.getElementById("member-id");
const memberIdPattern = /^\d{3}-\d{3}-\d{3}-\d{3}$/;
const buttonSubmit = document.getElementById("button-input-submit");
const dashboardWrapper = document.getElementById("dashboard-wrapper");

memberId.oninput = (event) => {
  if (memberId.value !== "") {
    buttonSubmit.removeAttribute("disabled");
  } else {
    buttonSubmit.setAttribute("disabled", true);
  }
};

form.onsubmit = async (event) => {
  // Previnir o envio do formulário
  event.preventDefault();

  try {
    // Limpa os dados do dashboard
    dashboardWrapper.innerHTML = "";

    // Recupera o id do membro
    const memberIdValue = memberId.value.trim();

    if (!memberIdPattern.test(memberIdValue)) {
      return alert("Id de membro inválido");
    }

    const member = await getMember({ memberId: memberIdValue });

    if (!member) {
      return alert("Membro não encontrado");
    }

    const memberInfo = {
      id: member.id,
      name: member.name,
      userImage: member.userImage,
      clientSince: member.clientSince,
    };

    const cutsInfo = {
      ...member.loyaltyCard,
    };

    const cutsHistory = {
      totalCuts: member.loyaltyCard.totalCuts,
      history: member.appointmentHistory,
    };

    const cutsStamps = {
      id: member.id,
      cutsNeeded: member.loyaltyCard.cutsNeeded,
      totalCuts: member.loyaltyCard.totalCuts,
    };

    if (member.loyaltyCard.totalCuts === member.loyaltyCard.cutsNeeded) {
      modalWinCutLoad();
    }

    // Load member dashboard
    memberInfoLoad(memberInfo);
    cutsStampsLoad(cutsStamps);
    cutsRemainingLoad(cutsInfo);
    cutsHistoryLoad(cutsHistory);
  } catch (error) {
    alert("Não foi possível carregar os dados do membro");
    console.log(error);
  }
};
