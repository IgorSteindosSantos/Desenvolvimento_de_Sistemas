'use strict'

// Função para simplificar o nome do instrutor
function simplificarInstrutor(instrutor) {
    const nomes = instrutor.split(' ')
    return `${nomes[0]} ${nomes[nomes.length - 1]}` // Exibe o primeiro e o último nome
}

export default simplificarInstrutor