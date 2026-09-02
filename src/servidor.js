const express = require("express")
const { carregarTreinos, salvarTreinos } =  require("./funcoes")

const app = express()

app.use(express.json())


app.get("/treinos", function (req, res) {
    const treinos = carregarTreinos()
    res.json(treinos)
    
})

app.get("/treinos/:id", function(req, res){
    const treinos = carregarTreinos()
    const id = Number(req.params.id)

    for(let treino of treinos) {
        if (treino.id ===id){
            return res.json(treino)
        }
    }

    res.status(404).json({erro: "treino nao encontrado0" })
})

app.post("/treinos", function (req, res){
    const treinos = carregarTreinos()
    const novo = req.body

    let maiorId = 0 

    for (let treino of treinos) {
        if (treino.id > maiorId) {
            maiorId = treino.id
        }
    }

    novo.id = maiorId + 1

    treinos.push(novo)
    salvarTreinos(treinos)

    res.status(201).json(novo)
})

app.put ("/treinos/:id", function (req, res){
    const treinos = carregarTreinos()
    const id = Number(req.params.id)

    for (let treino of treinos) {
        if (treino.id === id) {
         treino.carga = req.body.carga
         salvarTreinos(treinos)
         return res.json(treino)
        }
    }

    res.status(404).json({erro: "treino nao encontrado"})
})

app.delete("/treinos/:id", function(req, res){
    const treinos = carregarTreinos()
    const id = Number(req.params.id)

    const listaNova = []

for (let treino of treinos) {
  if (treino.id !== id) {
    listaNova.push(treino)
  }
}

if (listaNova.length === treinos.length) {
  return res.status(404).json({ erro: "treino nao encontrado" })
}

   salvarTreinos(listaNova)
res.json({ mensagem: "removido" })
})

app.listen(3000, function () {
    console.log("servidor rodando e, http://localhost:3000")
})
