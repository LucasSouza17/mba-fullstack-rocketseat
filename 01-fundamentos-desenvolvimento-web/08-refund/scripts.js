// Seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expesesQuantity = document.querySelector("aside header p span");
const expensesTotal = document.querySelector("aside header h2");

// Captura o evento de input do formulário para formatar o valor
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "");

  // Transforma o valor em centavos.
  value = Number(value) / 100;

  // Insere o valor formatado no input
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Transforma o valor em reais
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Retorna o valor formatado
  return value;
}

// Captura o evento de submit do formulário para obter os dados
form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date().toLocaleString("pt-BR"),
  };

  expenseAdd(newExpense);
};

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
  try {
    // Cria o elemento de li para adicionar na lista
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Cria a categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // Cria valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    // Cria o ícone de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    // Adiciona nome e categoria na info da despesa
    expenseInfo.append(expenseName, expenseCategory);

    // Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    // Adiciona o item na lista
    expenseList.append(expenseItem);

    // Limpa os campos do formulário
    formClear()

    // Atualiza os totais
    updateTotals();
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas");
    console.log(error);
  }
}

// Atualiza os totais
function updateTotals() {
  try {
    // Recupera todos os itens da lista
    const items = expenseList.children;

    // Atualiza a quantidade de itens na lista
    expesesQuantity.textContent = `${items.length} ${
      items.length > 1 ? "despesas" : "despesa"
    }`;

    // Variável para incrementar o total.
    let total = 0;

    // Percorre cada item da lista
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Remover carecteres não numéricos e substituir virgula por ponto
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");

      // Converte o valor para Float
      value = parseFloat(value);

      // Verifica se é número valido
      if (isNaN(value)) {
        return alert(
          "Não foi possível calcular o total. O valor não parece ser um número."
        );
      }

      // Incrementa o total
      total += Number(value);
    }

    // Criar a span para adicionar o R$ formatado
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // Formata o valor e remove o R$ que será exibido pelo small com um estilo customizado
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    // Limpa conteúdo do elemento.
    expensesTotal.innerHTML = "";

    expensesTotal.append(symbolBRL, total);
  } catch (error) {
    alert("Não foi possível atualizar os totais");
    console.log(error);
  }
}

// Evento que captura o clique nos itens da lista.
expenseList.addEventListener("click", (event) => {
  // Verifica se o elemento clique foi o do ícone de remover
  if (event.target.classList.contains("remove-icon")) {
    // Obtém a li pai do elemento clicado
    const item = event.target.closest(".expense");
    item.remove();

    // Atualiza os totais
    updateTotals();
  }
});

function formClear() {
  // Limpa os campos do formulário
  expense.value = "";
  category.value = "";
  amount.value = "";

  // Retorna o foco para o campo de nome da despesa
  expense.focus();
}
