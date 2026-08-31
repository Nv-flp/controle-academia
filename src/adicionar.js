const fs = require("fs")

const texto = fs.readFileSync("treinos.json", "utf-8")
const treinos = JSON.parse(texto)

const novoTreino = {
    exercicio: "rosca direta",
    carga: 20,
    repeticoes: 12,
    series: 4
}

let jaExiste = false

for (let treino of treinos) {
    console.log("conferindo:", treino.exercicio, "| jaExiste:", jaExiste)
    if (treino.exercicio === novoTreino.exercicio) {
        jaExiste = true
    }
}

if (jaExiste === false) {
  treinos.push(novoTreino)
  fs.writeFileSync("treinos.json", JSON.stringify(treinos, null, 2))
} else {
  console.log("esse exercício já existe")
}