let tituloAula = "Aula 230 - operador not "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

const reg1 = /[^ab]/
imprimirNoParagrafo(reg1.test("a"))
imprimirNoParagrafo(reg1.test('aqui tem a'))


const notToAz = /[^a-z]/
imprimirNoParagrafo(notToAz.test("123 as"))
imprimirNoParagrafo(notToAz.test('aqui tem a'))
imprimirNoParagrafo(notToAz.test('abcdefghijklmnopqrstuvzywx'))

const toAz = /[a-z]/
imprimirNoParagrafo(toAz.test("123 as"))
imprimirNoParagrafo(toAz.test('aqui tem a'))
imprimirNoParagrafo(toAz.test('abcdefghijklmnopqrstuvzywx'))