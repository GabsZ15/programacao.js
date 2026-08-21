//AULA 05: Exemplos de condições
let prompt = require("prompt-sync")();


let usuario = prompt("Digite o seu usuário: ")

if (usuario == "Gabriel") {
    console.log("Acesso concedido!")
} else {
    console.log("Usuário não identificado")
}

let idade = parseInt(prompt("Digite sua idade: ") )

