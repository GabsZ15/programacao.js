//01- NEGATIVO OU POSITIVO
let prompt = require("prompt-sync")()

let numero = parseInt(prompt ("Insira um numero: "))
if(numero>=0){
    console.log("Este numero é positivo")
}else{
    console.log("Este numero é negativo")
}