const { carregarTreinos, calcularVolume, salvarTreinos } = require ("./funcoes")

const treinos = carregarTreinos()
const idprocurado = 2

const listaNova = []

for (let treino of treinos) {
    if (treino.id !== idprocurado) {
        listaNova.push(treino)
    }
}

salvarTreinos(listaNova)