let tituloAula = "Aula 103 - Arrow Functions 2"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

const multiplicarPorDois = (x) => {
    return (x * 2)
}

imprimir(multiplicarPorDois(3))

const multiplicar = x => x * 2

imprimir(multiplicar(8))