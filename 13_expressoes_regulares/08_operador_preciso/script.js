let tituloAula = "Aula 231 - Operador Preciso "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

const reg1 = /\d{5}-\d{3}/
imprimirNoParagrafo('Realiza teste expressão cep \\d{5}-\\d{3}')
imprimirNoParagrafo(reg1.test("88117-500"))
imprimirNoParagrafo(reg1.test('asd'))
imprimirNoParagrafo(reg1.test("881-50"))
imprimirNoParagrafo(reg1.test("99999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/
var str = String.raw`Realiza teste expressão telefone /\(\d{2}\)\d{4,5}-\d{4}/`
imprimirNoParagrafo(str)
imprimirNoParagrafo(tel.test("489999-9999"))
imprimirNoParagrafo(tel.test('(48) 99999-9999'))
imprimirNoParagrafo(tel.test("(48)99999-9999"))
imprimirNoParagrafo(tel.test("99999-999"))