const fs = require ("fs")
const texto = fs.readFileSync("treinos.json", "utf-8")
const treinos = JSON.parse(texto)


let total = 0

for (let treino of treinos) {
    let volume = treino.carga *treino.series * treino.repeticoes
    total += volume
    console.log(treino.exercicio, "-", volume)
}

console.log("Volume total: ", total)