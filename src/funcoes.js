const fs = require ("fs")

function carregarTreinos () {
    const texto = fs.readFileSync("treinos.json", "utf-8")
    return JSON.parse(texto)
}

function calcularVolume (treino) {
    return treino.carga * treino.series * treino.repeticoes
}

const treinos = carregarTreinos()

for (let treino of treinos) {
    console.log(treino.exercicio, calcularVolume(treino))
}
