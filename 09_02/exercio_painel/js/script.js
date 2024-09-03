'use strict'

// Exibir a hora
function attRelogio() {
    const relogio = document.getElementById('horario')
    const agora = new Date()
    const hrMinSeg = agora.toLocaleTimeString('pt-br', {hour:'2-digit',minute:'2-digit',second:'2-digit'})
    relogio.innerHTML = hrMinSeg

    setTimeout(attRelogio, 1000)
}

attRelogio()

// Exibir saudação de acordo com a hora
function attSaudacao() {
    const agora = new Date()

    const dia = agora.getDay()
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

    const hora = agora.getHours()

    let cumprimento = ''

    if (hora < 6) {
        cumprimento = 'Boa Madrugada!'
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

// Função para simplificar o nome do instrutor
function simplificarInstrutor(instrutor) {
    const nomes = instrutor.split(' ')
    return `${nomes[0]} ${nomes[nomes.length - 1]}` // Exibe o primeiro e o último nome
}

// Função para abreviar a unidade curricular como você demonstrou
function abreviarUnidadeCurricular(unidadeCurricular) {
    let pieces = unidadeCurricular.split(' ')
    pieces.splice(-2, 2) // Remove o "CH: 219.000" ou partes similares

    let abrevPrimeira = pieces[0].substring(0, 4) // Pega os primeiros 4 caracteres da primeira palavra
    let ultimaPalavra = pieces.pop() // Pega a última palavra restante

    return `${abrevPrimeira}. ${ultimaPalavra}.` // Retorna a abreviação
}

// Função para simplificar o ambiente (última parte)
function simplificarAmbiente(ambiente) {
    const partes = ambiente.split('-')
    partes.splice(0,2)
    return partes.splice(0,2).join('-') // Exibe a última parte do código do ambiente
}

// Banco de aulas
let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]

let tabela = document.getElementById('tbAulas')

// Exibir tabela no painel
let exibir = ''
for (let tbAula of aulas) {
    let horaInicio = new Date(tbAula.data_hora_inicio).toLocaleTimeString('pt-BR', {hour: '2-digit',minute: '2-digit',hour12: false})
    let horaFim = new Date(tbAula.data_hora_fim).toLocaleTimeString('pt-BR', {hour: '2-digit',minute: '2-digit',hour12: false})
    exibir += '<tr>'
    exibir += '<td>'+horaInicio+'</td>'
    exibir += '<td>'+horaFim+'</td>'
    exibir += '<td>' + tbAula.turma + '</td>'
    exibir += '<td>' + simplificarInstrutor(tbAula.instrutor) + '</td>'
    exibir += '<td>' + abreviarUnidadeCurricular(tbAula.unidade_curricular) + '</td>'
    exibir += '<td>' + simplificarAmbiente(tbAula.ambiente) + '</td>' 
    exibir += '</tr>'
}

tabela.innerHTML += exibir
