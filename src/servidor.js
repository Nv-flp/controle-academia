const express = require("express")
const { carregarTreinos, adicionarTreino, atualizarTreino, removerTreino } = require("./funcoes")
const app = express()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { criarUsuario, buscarPorEmail } = require("./usuarios")
require("dotenv").config()


app.use(express.json())
app.use(express.static("public"))

function autenticar(req, res, next) {
  const cabecalho = req.headers.authorization

  if (!cabecalho) {
    return res.status(401).json({ erro: "token nao enviado" })
  }

  const token = cabecalho.replace("Bearer ", "")

  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET)
    req.usuarioId = dados.id
    next()
  } catch (erro) {
    return res.status(401).json({ erro: "token invalido" })
  }
}

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

app.post("/treinos", autenticar, async function (req, res) {
  const novo = await adicionarTreino(req.body)
  res.status(201).json(novo)
})

 app.put("/treinos/:id", autenticar,  async function (req, res) {
  const id = Number(req.params.id)
  const linhas = await atualizarTreino(id, req.body.carga)

  if (linhas === 0) {
    return res.status(404).json({ erro: "treino nao encontrado" })
  }

  res.json({ mensagem: "atualizado" })
})

app.delete("/treinos/:id", autenticar,  async function (req, res) {
  const id = Number(req.params.id)
  const linhas = await removerTreino(id)

  if (linhas === 0) {
    return res.status(404).json({ erro: "treino nao encontrado" })
  }

  res.json({ mensagem: "removido" })
})

app.post("/registrar", async function (req, res) {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: "email e senha sao obrigatorios" })
  }

  const existente = await buscarPorEmail(email)
  if (existente) {
    return res.status(409).json({ erro: "email ja cadastrado" })
  }

  const usuario = await criarUsuario(email, senha)
  res.status(201).json(usuario)
})

app.post("/login", async function (req, res) {
  const { email, senha } = req.body

  const usuario = await buscarPorEmail(email)
  if (!usuario) {
    return res.status(401).json({ erro: "credenciais invalidas" })
  }

  const confere = await bcrypt.compare(senha, usuario.senha)
  if (!confere) {
    return res.status(401).json({ erro: "credenciais invalidas" })
  }

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: "8h" })
  res.json({ token })
})


app.listen(3000, function () {
    console.log("servidor rodando e, http://localhost:3000")
})
