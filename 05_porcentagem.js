//AULA 05: PORCENTAGEM:
let prompt = require("prompt-sync")()
let valor = parseFloat(prompt ("Digite o valor: "))
let desconto = parseFloat(prompt ("Escolha o desconto: "))
desconto = desconto / 100
let total = valor * desconto
let valor_descontado = valor - total
console.log (valor_descontado)