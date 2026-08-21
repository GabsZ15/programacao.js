// AULA04: CONVERTER VARIAVEIS
let prompt = require("prompt-sync")()

let numero1 = prompt("Digite um número: ")
numero1 = parseInt(numero1)
let numero2 = parseInt (prompt("Digite outro número: "))       
let soma = numero1 + numero2

console.log ("O resultado é: " + soma )

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

let anonascimento = prompt ("Digite o ano que você nasceu:")
anonascimento = parseInt (anonascimento)
let ano = 2026
let idade = ano - anonascimento

console.log ("Sua idade é:" + idade + "anos")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

let nota1 = prompt ("Digite a nota de um aluno: ")
nota1 = parseInt(nota1)
let nota2 = prompt ("Digite a segunda nota deste aluno: ")
nota2 = parseInt(nota2)
let nota3 = prompt ("Digite a terceira nota deste aluno: ")
nota3 = parseInt(nota3)
let media = (nota1 + nota2 + nota3) /3

console.log ("A média desse aluno é: " + media)


//-----------------------------------------

// ----- Atividade 3:

let nomeProduto = prompt("Digite o nome do produto:");
let preco = prompt("Digite o preço do produto:");
preco = parseint (preco)
let quantidade = prompt("Digite a quantidade em estoque:");
quantidade = parseint(quantidade)

let faturamento = preco * quantidade;

console.log("Produto:", nomeProduto);
console.log("Valor que será faturado:", faturamento);

