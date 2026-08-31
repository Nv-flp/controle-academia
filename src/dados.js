const fs = require("fs")

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

fs.writeFileSync("treinos.json", JSON.stringify(treinos, null, 2))