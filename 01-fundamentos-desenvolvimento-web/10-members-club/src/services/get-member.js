import { apiConfig } from "./api-config";

export async function getMember({ memberId }) {
  try {
    // Faz a requisição para buscar o membro
    const response = await fetch(
      `${apiConfig.baseURL}/clients/${memberId}`
    );

    // Verifica se o membro foi encontrado
    if (!response.ok) {
      return null
    }

    // Converte para JSON.
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar detalhes do membro");
  }
}