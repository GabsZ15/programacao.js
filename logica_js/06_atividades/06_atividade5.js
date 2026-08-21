let prompt = require("prompt-sync")()

let nome1 = prompt("Nome do primeiro time: ")
let nome2 = prompt("Nome do segundo time: ")
let gols1 = parseInt(prompt("Insira o total de gols marcados: "))
let gols2 = parseInt(prompt("Insira o total de gols marcados: "))
if(gols1>gols2){
    console.log("O time " + nome1 + " foi o vencedor")
}else{
    console.log("O time " + nome2 + " foi o vencedor")

}