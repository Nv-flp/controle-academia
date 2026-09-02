const express = require("express")
const { carregarTreinos } =  require("./funcoes")

const app = express()

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

app.listen(3000, function () {
    console.log("servidor rodando e, http://localhost:3000")
})
