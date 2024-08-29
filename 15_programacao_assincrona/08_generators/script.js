let tituloAula = "Aula 263 - Generators"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


function* criadorId() {
    let id = 0
    while (true) {
        yield id++
    }
}

let criaId = criadorId()

imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().value)

imprimirNoParagrafo(criaId.next().value)
imprimirNoParagrafo(criaId.next().done)

