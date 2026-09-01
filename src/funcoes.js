const fs = require ("fs")
function carregarTreinos () {
    const texto = fs.readFileSync("treinos.json", "utf-8")
    return JSON.parse(texto)
}



const treinos = carregarTreinos()
console.log(treinos)