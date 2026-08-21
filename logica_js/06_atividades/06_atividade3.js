let prompt = require("prompt-sync")()

let altura = parseFloat(prompt("Insira sua altura : "))
let peso = parseFloat(prompt("Insira seu peso : "))

let calculo = peso / (altura * altura)
console.log("Seu IMC é: " + calculo)

if (calculo <= 18.5) {
    console.log("Abaixo do peso")
} else {
    if (calculo <= 24.9) {
        console.log("Peso ideal")
    } else {
        console.log("Sobrepeso")
    }
}