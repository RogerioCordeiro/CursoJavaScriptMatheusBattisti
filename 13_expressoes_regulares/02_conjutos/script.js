let tituloAula = "Aula 228 - Conjuntos "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

const reg1 = /[12345]/
imprimirNoParagrafo(reg1.test("Tem o número 6"))
imprimirNoParagrafo(reg1.test('Tem o número 2'))
imprimirNoParagrafo(reg1.test('Tem o número 23'))
imprimirNoParagrafo(reg1.test('Tem o número 60'))
imprimirNoParagrafo(reg1.test('Tem o número 90'))


const reg2 = /[0-9]/;

let texto = 'Tem o numero 6544848488484848484'

imprimirNoParagrafo(reg2.test("Temos o numero"))
imprimirNoParagrafo(reg2.test('Não tem'))
imprimirNoParagrafo(reg2.test(texto))


