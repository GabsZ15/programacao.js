let prompt = require("prompt-sync")()

let peso_peixes = parseFloat(prompt("Insira o peso do peixe (Kg): "))

let excesso = peso_peixes - 50
let multa = excesso * 4.25
let total = multa + peso_peixes
if (peso_peixes > 50) {
    console.log("Pagamentos")
    console.log("Peso dos peixes: " + peso_peixes + " Kg")
    console.log("Quantidade de quilos além do limite: " + excesso + " Kg")
    console.log("O valor da multa é de: R$ " + multa)
    console.log ("Tudo ficou no total de: " + total)
} else {
    console.log("Você não tem que pagar nada")
}