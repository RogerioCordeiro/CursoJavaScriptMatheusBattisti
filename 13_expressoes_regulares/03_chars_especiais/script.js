let tituloAula = "Aula 229 - Chars especiais "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

const reg1 = /./
imprimirNoParagrafo(reg1.test("Tem o número 6"))
imprimirNoParagrafo(reg1.test('Tem o número 2'))
imprimirNoParagrafo(reg1.test('Tem o número 23'))
imprimirNoParagrafo(reg1.test('Tem o número 60'))
imprimirNoParagrafo(reg1.test('Tem o número 90'))


const reg2 = /\d/;

let texto = 'Tem o numero 6544848488484848484'

imprimirNoParagrafo(reg2.test("Temos o numero"))
imprimirNoParagrafo(reg2.test('Não tem'))
imprimirNoParagrafo(reg2.test(texto))


const dRegex = /\D/;

imprimirNoParagrafo(dRegex.test("Temos o numero"))
imprimirNoParagrafo(dRegex.test('Não tem'))
imprimirNoParagrafo(dRegex.test(texto))

const sRegex3 = /\s/;

imprimirNoParagrafo(sRegex3.test("Temos o numero"))
imprimirNoParagrafo(sRegex3.test('Nãotem'))
imprimirNoParagrafo(sRegex3.test(texto))

const WRegex = /\w/;

imprimirNoParagrafo(WRegex.test("Temos o numero"))
imprimirNoParagrafo(WRegex.test('Nãotem'))
imprimirNoParagrafo(WRegex.test(' '))
imprimirNoParagrafo(WRegex.test(texto))