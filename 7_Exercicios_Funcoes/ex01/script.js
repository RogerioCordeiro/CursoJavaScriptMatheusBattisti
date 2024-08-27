let tituloAula = "Exercício 001 - Funções"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

function aleatorio(num) {
    let numAl = Math.random()
    imprimir(numAl)
    return Math.floor(numAl * num) + 1
}

imprimir(aleatorio(10))
imprimir(aleatorio(100))
imprimir(aleatorio(20))
imprimir(aleatorio(15))