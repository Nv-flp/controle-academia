const express = require("express")
const { carregarTreinos, adicionarTreino } =  require("./funcoes")

const app = express()

app.use(express.json())


app.get("/treinos", async function (req, res) {
  const treinos = await carregarTreinos()
  res.json(treinos)
})
    

app.get("/treinos/:id", async function (req, res) {
    const treinos = await carregarTreinos()
    const id = Number(req.params.id)

    for(let treino of treinos) {
        if (treino.id ===id){
            return res.json(treino)
        }
    }

    res.status(404).json({erro: "treino nao encontrado0" })
})

app.post("/treinos", async function (req, res) {
  const novo = await adicionarTreino(req.body)
  res.status(201).json(novo)
})

/* app.put ("/treinos/:id", function (req, res){
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
}) */

app.listen(3000, function () {
    console.log("servidor rodando e, http://localhost:3000")
})
