const pool = require("./banco")
const bcrypt = require("bcrypt")

async function criarUsuario(email, senha) {
  const hash = await bcrypt.hash(senha, 10)

  const [resultado] = await pool.query(
    "INSERT INTO usuarios (email, senha) VALUES (?, ?)",
    [email, hash]
  )

  return { id: resultado.insertId, email }
}

async function buscarPorEmail(email) {
  const [linhas] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  )
  return linhas[0]
}

module.exports = { criarUsuario, buscarPorEmail }