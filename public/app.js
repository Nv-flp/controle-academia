async function carregarLista() {
  const resposta = await fetch("/treinos")
  const treinos = await resposta.json()

  const lista = document.getElementById("lista")

  for (let treino of treinos) {
    const item = document.createElement("li")
    item.textContent = treino.exercicio + " - " + treino.carga + "kg"

    const botao = document.createElement("button")
botao.textContent = "remover"

botao.addEventListener("click", async function () {
  await fetch("/treinos/" + treino.id, { method: "DELETE" })
  location.reload()
})

item.appendChild(botao)

    lista.appendChild(item)
  }
}

carregarLista()

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", async function (evento) {
  evento.preventDefault()

  const novo = {
    exercicio: document.getElementById("exercicio").value,
    carga: Number(document.getElementById("carga").value),
    repeticoes: Number(document.getElementById("repeticoes").value),
    series: Number(document.getElementById("series").value)
  }

  await fetch("/treinos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novo)
  })

  location.reload()
})