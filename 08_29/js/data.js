'use strict'

let hoje = new Date()

let hora = hoje.toLocaleDateString('pt-br', {hour:'2-digit',minute: '2-digit'})

console.log(hora)