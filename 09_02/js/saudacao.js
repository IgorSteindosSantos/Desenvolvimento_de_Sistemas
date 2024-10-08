'use strict'


function attSaudacao() {
    const agora = new Date()

    const dia = agora.getDay()
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    //const horasMin = agora.toLocaleDateString('pt-br', { weekday: 'long' })

    const hora = agora.getHours()

    let cumprimento = ''

    if (hora < 6) {
        cumprimento = 'Boa Madruga!'
    } else if (hora < 12) {
        cumprimento = 'Bom dia!'
    } else if (hora < 18) {
        cumprimento = 'Boa Tarde!'
    } else {
        cumprimento = 'Boa Noite!'
    }

    const saudacao = document.getElementById('saudacao')
    saudacao.innerHTML = `${cumprimento}  |  ${dias[dia]}`

    setTimeout(attSaudacao, 1000)
}
attSaudacao()