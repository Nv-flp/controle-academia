const express = require("express")
const { carregarTreinos, adicionarTreino, atualizarTreino, removerTreino } = require("./funcoes")
const app = express()

app.use(express.json())
app.use(express.static("public"))

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

 app.put("/treinos/:id", async function (req, res) {
  const id = Number(req.params.id)
  const linhas = await atualizarTreino(id, req.body.carga)

  if (linhas === 0) {
    return res.status(404).json({ erro: "treino nao encontrado" })
  }

  res.json({ mensagem: "atualizado" })
})

app.delete("/treinos/:id", async function (req, res) {
  const id = Number(req.params.id)
  const linhas = await removerTreino(id)

  if (linhas === 0) {
    return res.status(404).json({ erro: "treino nao encontrado" })
  }

  res.json({ mensagem: "removido" })
})

app.listen(3000, function () {
    console.log("servidor rodando e, http://localhost:3000")
})
