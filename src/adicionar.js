const fs = require("fs")

const texto = fs.readFileSync("treinos.json", "utf-8")
const treinos = JSON.parse(texto)

const novoTreino = {
    exercicio: "rosca direta",
    carga: 20,
    repeticoes: 12,
    series: 4
}

treinos.push(novoTreino)

fs.writeFileSync("treinos.json", JSON.stringify(treinos, null, 2))