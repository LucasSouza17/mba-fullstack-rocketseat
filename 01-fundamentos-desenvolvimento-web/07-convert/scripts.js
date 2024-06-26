// Cotação da moeda
const USD = 5.5
const EUR = 6.5
const GBP = 7.1


// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.
/**
 * 
 * @param {string} amount "number of amount in currency"
 * @param {string} price "price in currency"
 * @param {string} symbol "symbol of currency"
 */
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calculando o valor convertido
    let total = amount * price

    // Verificando se o valor é um número
    if(isNaN(total)) {
      return alert("Por favor insira um valor válido.")
    }

    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o valor convertido
    result.textContent = `${total} Reais` 

    // Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe que exibe o footer com o resultado
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter esta moeda. Tente novamente mais tarde.")
  }
}

// Função para formatar o valor da moeda em BRL
/**
 * 
 * @param {string} value "number of amount in currency"
 * @returns 
 */
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}
