let tituloAula = "Aula 102 - Arrow Functions"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        imprimir("Par")
    } else {
        imprimir("Impar")
    }
}

parOuImpar(3)