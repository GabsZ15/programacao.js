let prompt = require("prompt-sync")()

let numero1 = parseInt(prompt("Insira um número: "))
let numero2 = parseInt(prompt("Insira outro número: "))

if(numero1 > numero2){
    console.log("Este é o maior número: " + numero1)
} else {
    console.log("Este é o maior número: " + numero2)
}