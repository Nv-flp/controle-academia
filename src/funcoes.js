const fs = require("fs")

function carregarTreinos() {
  const texto = fs.readFileSync("treinos.json", "utf-8")
  return JSON.parse(texto)
}

function calcularVolume(treino) {
  return treino.carga * treino.series * treino.repeticoes
}

function salvarTreinos(treinos) {
    fs.writeFileSync("treinos.json", JSON.stringify(treinos, null, 2))
}

module.exports = { carregarTreinos, calcularVolume, salvarTreinos }