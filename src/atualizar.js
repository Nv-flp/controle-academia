const { carregarTreinos, calcularVolume, salvarTreinos } = require ("./funcoes")

const treinos = carregarTreinos()

const idprocurado = 1 
const novaCarga = 110

for (let treino of treinos) {
    if (treino.id === idprocurado){
        treino.carga = novaCarga
    }
}

salvarTreinos(treinos)