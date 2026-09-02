# Fase 0 - Terminal e Git 

git add- leva do diretório de trabalho para a bancada staging 
git commit- leva as informações da bancada para o histórico local 
git push- leva as informações do histórico local para o Github

A área de preparação existe pra eu escolher o que entra em cada commit. Isso deixa cada commit com um assunto só. Se depois uma coisa der problema, eu consigo desfazer só aquele commit sem perder o resto.

# Fase 1 - JavaScript no terminal 

conceito da fase: programar e basicamente 3 coisas: guardar informação, fazer algo com ela, mostrar o resultado

guardar = variavel - um nome que aponta para um valor let = carga = 40 | siginifica de agora em diante carga vale 40 

fazer algo =  são operações e as funções.Função e um bloco de codigo que você nomeia para utilizar quando quiser, quantas vezes quiser 

Mostrar = é o console.log() - ele imprime no terminal o que você colocar dentro do parenteses ele vai ser seu olho dentro do programa a fase inteira. sem ele o código roda no escuro

OBS: o computador executa de cima pra baixo, uma linha por vez, e não adivinha nada. Se você mandar mostrar uma variável antes de criá-la, ele reclama. Ele não tem bom senso — ele tem ordem.

## Fase 1 — Tipos de dado

Texto vai entre aspas, número não. São tipos diferentes e se comportam
de forma diferente, mesmo parecendo iguais na tela.

O `+` faz duas coisas:

- com números, soma: `26 + 10` dá `36`
- com texto, concatena: `"26" + 10` dá `"2610"`

Já o `*` sempre converte o texto pra número antes, então a conta sai
certa mesmo com o tipo errado. Por isso o erro passa despercebido:
funciona na multiplicação e quebra na soma.

Para descobrir o tipo de uma variável:

```
console.log(typeof carga)
```

Responde `string` para texto e `number` para número.

Length — o array e a fileira inteira com as 3 informações/items dentro isso seria o length a quantidade de itens dentro do array

Última posição — certo, e a explicação de por que começa do zero está boa. Só falta fechar a conclusão: como são 3 itens e a etiqueta começa no 0, a última é 2, ou seja, length - 1. 

Posição que não existe — quase tudo certo. O programa continua rodando, isso você acertou e é o ponto importante. Mas "não vai aparecer nada" não é bem verdade: aparece undefined, que é o próprio JavaScript dizendo "não tem valor aqui".

 se você tentar ler um campo de algo que é undefined — tipo treinos[3].exercicio — aí sim quebra, com a mensagem Cannot read properties of undefined.

 Fiz um laço que percorria o meu array buscando item por item e imprimindo os valores da soma de volume dos exercicios 

 JSON.stringify — estrutura vira texto, pra gravar
JSON.parse — texto vira estrutura, pra usar

push acrescenta item no fim do array

gravar exige writeFileSync; sem ele a mudança só existe na memória

programa rodar sem erro não garante que fez o que você queria

sem uma regra explícita, nada impede duplicata

função é um bloco de código com nome; definir não executa, só a chamada com () executa
return devolve o valor pra quem chamou; sem ele o retorno é undefined
parâmetro é o espaço em branco preenchido na chamada — permite mesma lógica com dados diferentes

definir função não executa nada; só a chamada executa
module.exports diz o que sai do arquivo; require("./arquivo") traz pra dentro do outro
o ./ indica arquivo teu; sem ele o Node procura módulo instalado

Servidor é um programa que não termina. Diferente de tudo que você fez até agora — que executava e morria — ele fica rodando, escutando uma porta, esperando alguém chamar.

Porta é um número que identifica qual programa recebe o quê no computador. Vamos usar 3000. O endereço vira http://localhost:3000 — localhost significa "esta máquina".

Rota é a combinação de um caminho e um método. GET /treinos significa "me dá os treinos". Cada rota é um pedaço de código que roda quando alguém chama aquele endereço.

Requisição e resposta. Quem chama manda uma requisição; teu código devolve uma resposta. No Express são os dois parâmetros que aparecem em toda rota: req e res.

Método HTTP diz a intenção: GET busca, POST cria, PUT atualiza, DELETE remove. Repara que é o teu CRUD, com outros nomes.