const { carregarTreinos, calcularVolume } = require("./funcoes")

const treinos = carregarTreinos()

let total = 0

for (let treino of treinos) {
    const volume = calcularVolume(treino)
    total += volume
    console.log(treino.exercicio, "-", volume)
}

console.log("Volume total: ", total)