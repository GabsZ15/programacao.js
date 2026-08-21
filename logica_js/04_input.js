// AULA 4: INPUT
let prompt = require("prompt-sync")()

let nome = prompt(" Olá, digite seu nome: ")
let sobrenome = prompt(" Digite seu sobrenome: ")
let idade = prompt(" Digite sua idade: ")
let nomeCompleto = nome + " " + sobrenome
let mensagem = "Seja bem vindo (a) " + nomeCompleto + ", você tem " + idade + " anos XD"
console.log(mensagem)
console.log("\n\n")




console.log("Digite o nome de um produto: ")
let nomeProduto = prompt("")
console.log("Digite o preço do " + nomeProduto + ": ")
let precoProduto = prompt("")

console.log("Digite o nome de outro produto: ")
let nomeProduto2 = prompt("")
console.log("Digite o preço do " + nomeProduto2 + ": ")
let precoProduto2 = prompt("")

console.log("RELATÓRIO: \n ")
console.log (nomeProduto + " - R$ " + precoProduto)
console.log (nomeProduto2 + " - R$ " + precoProduto2)




