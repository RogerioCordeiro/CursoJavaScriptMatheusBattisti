let tituloAula = "Aula 100 - Mais sobre escopo"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

let x = 10

if (x > 5) {
    let x = 20
    imprimir(x)
    x++
}

imprimir(x)