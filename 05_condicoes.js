// AULA 05 - Condições
let prompt = require("prompt-sync")()


console.log ("Bem vindo(a) ao DETRAN")
let idade = prompt("Digite sua idade: ")

if (idade >= 18) {
    console.log("Você tem idade para tirar a CNH")
} else {
    console.log("Você não tem idade para tirar a CNH")
}

// COMPARADORES 
// > MAIOR
// < MENOR
// == IGUAL
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL 
// != DIFERENTE