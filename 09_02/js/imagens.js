'use strict'

const imagens = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
]

const anuncios = document.getElementById('anuncios')
let lista_anuncios = ''

for(let imagem of imagens){
    lista_anuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}'/>`
}

anuncios.innerHTML = lista_anuncios