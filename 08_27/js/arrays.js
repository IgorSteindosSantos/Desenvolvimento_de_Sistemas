'use strict'

let primeiroArray = new Array(5)// Declarando primeiro Array
primeiroArray[0] = 5
primeiroArray[1] = true
primeiroArray[2] = 'maçã'
//Para acessar uma posição do array podemos passar a posição entre[]
// Por padrão o Array inicia na posição 0
console.log(primeiroArray)

let segundoArray = []// Criando um Array vazio
segundoArray[10] = 8 // Posso atribuir a uma nova posição no array vazio
console.log(segundoArray)

let terceiroArray = [5, true, 5.8, 'pessoa'] // Criando um array já preenchido
console.log(terceiroArray)

let quartoArray = new Array(1, true, 5.8, 'animal')
console.log(quartoArray)

let matriz = [[0,1],[0,2],[true,false]]

console.log(matriz[0])
console.log(matriz[2][1])

let cores = ['amarelo', 'azul','branco']

console.log(cores.toString()) // Método toString converte para String separada por virgulas
console.log(cores.join(' | ')) // Método que permite converter o Array para String e permite escolher o separador
console.log(cores.concat(matriz,quartoArray)) // O método concat permite a junção de um ou mais Arrays
cores.push('preto', 'verde') // push é um método de empurra(enviar) novas posições para o final
console.log(cores) 

let ultimaCor = cores.pop() // pop remove e retorna a ultima posição de um Array
console.log(ultimaCor)
console.log(cores)

let primeiraCor = cores.shift() // shift remove e retorna a primeira posição de um Array
console.log(primeiraCor)
console.log(cores)

cores.unshift('roxo', 'turqueza', 'marrom') // unshift é um método de empurra(enviar) novas posições para o inicio do array 
console.log(cores)

let fatia = cores.splice(1,2) // splice é um método que remove e retorna um pedaço do array
console.log(cores)
console.log(fatia)

let nome = 'João de Souza Bharboza' // Uma string é um Array de caracteres
console.log(nome[nome.length-1])

let arrayNome = nome.split(' ')
console.log(arrayNome)
let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length-1]
let alternativa = arrayNome.shift() + ' ' + arrayNome.pop()

console.log(primeiroUltimo)
console.log(alternativa)