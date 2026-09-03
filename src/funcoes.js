
const pool = require("./banco")

async function carregarTreinos() {
  const [linhas] = await pool.query("SELECT * FROM treinos")
  return linhas
}

function calcularVolume(treino) {
  return treino.carga * treino.series * treino.repeticoes
}

async function adicionarTreino(treino) {
  const [resultado] = await pool.query(
    "INSERT INTO treinos (exercicio, carga, repeticoes, series) VALUES (?, ?, ?, ?)",
    [treino.exercicio, treino.carga, treino.repeticoes, treino.series]
  )
  return { id: resultado.insertId, ...treino }
}

async function atualizarTreino(id, carga) {
  const [resultado] = await pool.query(
    "UPDATE treinos SET carga = ? WHERE id = ?",
    [carga, id]
  )
  return resultado.affectedRows
}

async function removerTreino(id) {
  const [resultado] = await pool.query(
    "DELETE FROM treinos WHERE id = ?",
    [id]
  )
  return resultado.affectedRows
}


module.exports = { carregarTreinos, calcularVolume, adicionarTreino, atualizarTreino, removerTreino }