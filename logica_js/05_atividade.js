//Atividade lanchonete do gordão
let prompt = require("prompt-sync")()


let ingrediente1 = "Pão"
let ingrediente2 = "Salsicha"
let ingrediente3 = "Purê de batata"
let ingrediente4 = "Queijo"
let ingrediente5 = "Bacon"

let precoingrediente1 = parseFloat(prompt("Digite o preço do " + ingrediente1 + ":"))
let precoingrediente2 = parseFloat(prompt("Digite o preço do " + ingrediente2 + ":"))
let precoingrediente3 = parseFloat(prompt("Digite o preço do " + ingrediente3 + ":"))
let precoingrediente4 = parseFloat(prompt("Digite o preço do " + ingrediente4 + ":"))
let precoingrediente5 = parseFloat(prompt("Digite o preço do " + ingrediente5 + ":"))

let precoingredientes = precoingrediente1 + precoingrediente2 + precoingrediente3 + precoingrediente4 + precoingrediente5
let lucro_desejado = parseFloat(prompt("Informe o lucro desejado:  " ))
lucro_desejado = lucro_desejado / 100
let lucro = precoingredientes * lucro_desejado
let lucro_total = precoingredientes + lucro_desejado

let preco_ingrediente1_para_venda= precoingrediente1 * lucro_desejado
let preco_ingrediente2_para_venda= precoingrediente2 * lucro_desejado
let preco_ingrediente3_para_venda= precoingrediente3 * lucro_desejado
let preco_ingrediente4_para_venda= precoingrediente4 * lucro_desejado
let preco_ingrediente5_para_venda= precoingrediente5 * lucro_desejado


let nomelanche = "Cachorro-quente com purê"
let hotdog1 = ingrediente1 + ingrediente3 + ingrediente5 + ingrediente2
let precohotdog1 = precoingrediente1 + precoingrediente3 + precoingrediente5 + precoingrediente2
let precohotdog1_para_venda = preco_ingrediente1_para_venda + preco_ingrediente3_para_venda + preco_ingrediente5_para_venda + preco_ingrediente2_para_venda


let nomelanche2 = "Cachorro-quente cremoso"
let hotdog2 = ingrediente1 + ingrediente2 + ingrediente2 + ingrediente4
let precohotdog2 = precoingrediente1 + precoingrediente2+ precoingrediente2 + precoingrediente4
let precohotdog2_para_venda = preco_ingrediente1_para_venda + preco_ingrediente2_para_venda + preco_ingrediente2_para_venda + preco_ingrediente4_para_venda


let nomelanche3 = "Cachorro-quente especial"
let hotdog3 = ingrediente1+ ingrediente2 + ingrediente3 + ingrediente4 + ingrediente5
let precohotdog3 = precoingrediente1 + precoingrediente2 + precoingrediente3 + precoingrediente4 + precoingrediente5
let precohotdog3_para_venda = preco_ingrediente1_para_venda + preco_ingrediente2_para_venda + preco_ingrediente3_para_venda + preco_ingrediente4_para_venda + preco_ingrediente5_para_venda


let combo = hotdog1 + hotdog2 + hotdog3
let precocombo = precohotdog1 + precohotdog2 + precohotdog3
let precocomboparavenda = precohotdog1_para_venda + precohotdog2_para_venda + precohotdog3_para_venda

console.log ("CARDÁPIO DA LANCHONETE DO GORDÃO:")
console.log ( "Lanche : " + nomelanche + "Ingredientes: " + hotdog1 + "Preço de Venda: " + precohotdog1 + "Preço de Custo: " + precohotdog1_para_venda )
console.log ( "Lanche : " + nomelanche2 + "Ingredientes: " + hotdog2 + "Preço de Venda: " + precohotdog2 + "Preço de Custo: " + precohotdog2_para_venda )
console.log ( "Lanche : " + nomelanche3 + "Ingredientes: " + hotdog3 + "Preço de Venda: " + precohotdog3 + "Preço de Custo: " + precohotdog3_para_venda )



