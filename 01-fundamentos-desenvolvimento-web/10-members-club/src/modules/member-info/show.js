// Seleciona o container da info do membro
const dashboardWrapper = document.getElementById("dashboard-wrapper");

export function memberInfoShow({ memberData }) {
  try {
    // Cria os elementos das informações do membro
    const userCard = document.createElement("div")
    userCard.classList.add("user-card")

    const userImageWrapper = document.createElement("div")
    userImageWrapper.classList.add("user-image")

    const userInfoWrapper = document.createElement("div")
    userInfoWrapper.classList.add("user-info")

    // Cria as informações do membro
    const userImage = document.createElement("img")
    userImage.setAttribute("src", memberData.userImage)
    userImage.setAttribute("alt", memberData.name)

    const userName = document.createElement("strong")
    userName.textContent = memberData.name
    const userSince = document.createElement("span")
    userSince.textContent = `Cliente desde ${memberData.clientSince}`
    
    // Adiciona as informações do membro
    userImageWrapper.append(userImage)
    userInfoWrapper.append(userName, userSince)

    // Adiciona as informações do no card de usuário
    userCard.append(userImageWrapper, userInfoWrapper)

    // Adiciona o card de usuário
    dashboardWrapper.append(userCard)
  } catch (error) {
    console.log(error)
  }
}