// Aula 06: Práticas com condições
let prompt = require("prompt-sync")()

let preco_sao_paulo = 125.00
let preco_araraquara = 68.90
let preco_seguro = 42.50
let total = 0
let desconto = 0


console.log("Escolha seu destino: ")
console.log("1 - São Paulo por R$ "+preco_sao_paulo)
console.log("2 - Araraquara por R$ "+preco_araraquara)
let resposta = prompt("Digite uma opção: ")

if(resposta == "1"){
    total = preco_sao_paulo
}else{
    total = preco_araraquara
}


let seguro = prompt("Deseja adicionar um seguro por mais R$ "+preco_seguro+"? : ")
if(seguro == "Sim"){
    total = total + preco_seguro
}


let cupom = prompt("Digite seu cupom de desconto: ")
if(cupom == "BIEL10"){
    console.log("Cupom de 10% aplicado!")
    desconto = total* 0.10
    console.log("Desconto de: " + desconto)
} else {
    console.log("Este cupom não existe...")
}


let email = prompt("Quer receber emails promocionais? : ")
if(email == "Sim"){
    console.log("Obrigado por se cadastrar!")
} else {
    console.log("Ok, você não receberá emails")
}


total = total - desconto
let cartao_de_credito = total + (total * 0.05)
let pix = total - (total * 0.05)

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (Acréscimo de 5%): R$ " + cartao_de_credito)
console.log("2 - PIX (Desconto de 5%): R$ " + pix)

let pagamento = prompt("Escolha uma opção (1 ou 2): ")

if (pagamento == "1"){
    console.log("O pagamento total no cartão será de: R$ " + cartao_de_credito)
} else {
    console.log("O pagamento total no PIX será de: R$ " + pix)
}

console.log("Obrigado, e volte sempre!")
