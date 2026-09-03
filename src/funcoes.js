
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


module.exports = { carregarTreinos, calcularVolume, adicionarTreino }