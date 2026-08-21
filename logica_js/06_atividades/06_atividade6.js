let prompt = require("prompt-sync")()
                                                                                                     
let total_perguntas = 0

let pergunta1 = prompt ("Telefonou para a vítima?")

if (pergunta1 == "Sim"){
    total_perguntas = 1
}

let pergunta2 = prompt ("Esteve no local do crime?")

if (pergunta2 == "Sim" ){
    total_perguntas = total_perguntas + 1
}

let pergunta3 = prompt ("Mora perto da vítima?")

if (pergunta3 == "Sim"){
    total_perguntas = total_perguntas + 1
}

let pergunta4 = prompt ("Devia para a vítima?")

if (pergunta4 == "Sim"){
    total_perguntas = total_perguntas + 1
}

let pergunta5 = prompt ("Já trabalhou com a vítima?")

if (pergunta5 == "Sim"){
    total_perguntas = total_perguntas + 1
}


let classificacao = total_perguntas

if (classificacao == 2) {
    console.log("Pessoa suspeita")
}

if (classificacao >2 <5) {
    console.log("Cúmplice")
}

if (classificacao == 5) {
    console.log("Assassino")
}

if (classificacao <2) {
    console.log("Pessoa inocente")
}

console.log ("Classificação da pessoa: " + classificacao)