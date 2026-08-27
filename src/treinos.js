
let treinos = [
    {
        exercicio: "supino",
        carga: 26,
        repeticoes: 12,
        series: 4
    },
    {   
        exercicio: "agachamento",
        carga: 80,
        repeticoes: 10,
        series: 5
    },
    {
        exercicio: "remada curvada",
        carga: 50,
        repeticoes: 11,
        series: 4
    }  
]

let total = 0

for (let treino of treinos) {
    let volume = treino.carga *treino.series * treino.repeticoes
    total += volume
    console.log("Volume total: ", total)
}
