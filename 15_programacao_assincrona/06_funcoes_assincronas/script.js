let tituloAula = "Aula 261 - Funcoes Assincronas"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


async function somar(a, b) {
    return a + b
}
console.log(somar(4, 2))
imprimirNoParagrafo(somar(2, 8))

somar(2, 4).then(value => imprimirNoParagrafo(value))