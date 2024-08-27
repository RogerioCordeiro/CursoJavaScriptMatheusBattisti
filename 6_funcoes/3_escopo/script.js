let tituloAula = "Aula 99 - Escopo"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

let y = 10

function mudarY() {
    let y = 150
    return y
}

imprimir(mudarY())
imprimir(y)