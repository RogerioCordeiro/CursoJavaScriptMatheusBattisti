let tituloAula = "Aula 227 - Regex Test "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

const reg1 = new RegExp('bola')
imprimirNoParagrafo(reg1.test("Tem bola?"))
imprimirNoParagrafo(reg1.test('Não tem'))

const reg2 = /bola/;

let texto = 'Tem bola na cesta'

imprimirNoParagrafo(reg2.test("Tem bola?"))
imprimirNoParagrafo(reg2.test('Não tem'))
imprimirNoParagrafo(reg2.test(texto))


