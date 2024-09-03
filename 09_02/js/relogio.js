'use strict'

function attRelogio() {
const relogio = document.getElementById('relogio')
const agora = new Date()
const hrMinSeg = agora.toLocaleTimeString('pt-br', {hour:'2-digit',minute:'2-digit',second:'2-digit'})
relogio.innerHTML = hrMinSeg

setTimeout(attRelogio, 1000)
}

attRelogio()
