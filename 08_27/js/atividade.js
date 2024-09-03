let nomes = ['Lahra Souza Goiabinha', 'Mateus Barboza Santana', 'Igor Stein dos Santos', 'Luiz Felipe Xavier Bizio', 'Vitor Ribeiro Fonseca', 'Valdineide Schunck', 'maria']
let tamanho = nomes.length

for (let i = 0; i < tamanho; i++) {
    let cadaNome = nomes[i]
    let nomesDivididos = cadaNome.split(' ')
    let primeironomeUltimonome = nomesDivididos.shift() + ' ' + nomesDivididos.pop()
    console.log(primeironomeUltimonome)
}