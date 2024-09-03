'use strict'

let ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-5-LAB-5109',
    'VTRIA-5-LAB-5111'
]
for(let i = 0; i < ambientes.length; i++){
    let pieces = ambientes[i].split('-')
    pieces.splice(0,2)
    let ambiente = pieces.join('-')
    console.log(ambiente)
}

