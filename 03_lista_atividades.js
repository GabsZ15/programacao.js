/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/

console.log(" _____")
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log("|_____|")

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/

let cidade = "São Carlos";
let estado =  "São Paulo"
console.log ("Eu moro em: " + cidade + " " + "-" + " " + estado)


/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/

let numero1 = 10
let numero2 = 5
let soma = numero1 + numero2
console.log ("Resultado:" + soma)


/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/

let idade= 18
let idadedepois= idade + 10
console.log ("Olá, você tem: " + idade + "anos, e daqui 10 anos terá:" + idadedepois + "anos" )


/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero = 30
let dobro = numero * 2
let triplo = numero * 3
console.log ("Número original= " + numero )
console.log ("Dobro=" + dobro)
console.log ("Seu triplo=" + triplo)



/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let nome = "tênis"
let precot = 200
let nome2 = "camiseta"
let precoc = 50
let somap = precot + precoc

console.log ( "Produto A: " + nome + " " + "Preço = " + precot)
console.log ( "Produto B: " + nome2 + " " + "Preço = " + precoc)
console.log ("Valor Total = " + somap )


/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 1000
let aumento = salario + 500
let salario_total = aumento - 250

console.log ("Salário Atual = " + salario + "R$")
console.log ("Novo salário = " + salario_total)

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/

let mesada = 100
let valor_gasto = 35
let valor_total = mesada - valor_gasto

console.log ("Mesada: " + mesada)
console.log ("Valor gasto: " + valor_gasto)
console.log ("Dinheiro que sobrou: " + valor_total)


/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/

let base = 5
let altura = 8
let arear = base * altura
console.log ("Area do Retângulo = " + arear)



/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/

let celsius = 40
let fahrenheit = (celsius * 1.8) + 32
let kelvin = celsius + 273.15

console.log ("Temperatura em celsius = " + celsius)
console.log ("Temperatura em fahrenheit = " + fahrenheit)
console.log ("Temperatura em kelvin = " + kelvin)

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/

let horas = 5
let minutos = 60 * horas
let segundos = 3600 * horas
console.log ("Quantidade de horas = " + horas)
console.log ("Quantidade de minutos = " + minutos)
console.log ("Quantidade de segundos = " + segundos)


/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let var1 = 80
let var2 = 20

let var3 = var1
var1 = var2
var2 = var3

console.log("Valor 1 = " + var1)
console.log("Valor 2 = " + var2)


/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/


let distancia = 300
let combustivel = 20
let valor_litro = 5
let kmporlitro = distancia / combustivel
let gasto = combustivel * valor_litro

console.log("Distância percorrida : " + distancia)
console.log("Quantidade de litros utilizados: " + combustivel)
console.log("Consumo do carro : " + kmporlitro + "km/l")
console.log("Valor Total gasto com combustível : " + gasto + "R$")


