const fs = require("fs")
const texto = fs.readFileSync("treinos.json", "utf-8")
const treinos = JSON.parse(texto)

for (let treino of treinos) {
  if (treino.carga > 50) {
    console.log(treino.exercicio, "-", "pesado")
  } else {
    console.log(treino.exercicio, "-", "leve")
  }
}

fs.writeFileSync("treinos.json", JSON.stringify(treinos, null, 2))