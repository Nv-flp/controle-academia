let treinos = [
    {
        exercicio: "Remada",
        carga: 75,
        repeticoes: 12,
        series: 3
    },
    {
        exercicio: "puxada",
        carga: 50,
        repeticoes: 7,
        series: 3
    },
    {
        exercicio: "barra fixa",
        carga: 72,
        repeticoes: 7,
        series: 4
    }
]

let total = 0 
for(let treino of treinos){
    let volume = treino.carga * treino.repeticoes * treino.series
    console.log(treino.exercicio,"-",volume)
}