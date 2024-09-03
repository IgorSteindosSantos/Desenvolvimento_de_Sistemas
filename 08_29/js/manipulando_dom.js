'use strict'

let html = document.getElementById('saudacao')

console.log(html)

// DOM (Document Objetc Model) é a estrutura da página HTML
// O DOM permite que linguagens interajam com a página

html.innerHTML='<h1>Olá Mindo</h1>'

let alunos = [ 
    { nome: 'Igor', sobrenome: 'Stein dos Santos' },
    { nome: 'Luiz', sobrenome: 'Feliper Bizio' },
    { nome: 'Lahara', sobrenome: 'de Souza' }
]
let tabela = document.getElementById('tabela')

let exibir = ''
for (let aluno of alunos){
    exibir += '<tr>'
    exibir += '<td>'+aluno.nome+'</td>'
    exibir += '<td>'+aluno.sobrenome+'</td>'
    exibir += '</tr>'
}
tabela.innerHTML += exibir
console.log(tabela)