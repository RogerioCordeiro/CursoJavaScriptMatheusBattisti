let tituloAula = "Exercicio 41 - validar maiusculas"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const digitos = /[A-Z]/;
var str = String.raw`Expressão para validar texto em maiusculo [A-Z]`
imprimirNoParagrafo(str)
imprimirNoParagrafo(digitos.test('ESSE TEXTO CAIXA ALTA'))
imprimirNoParagrafo(digitos.test('texto caixa baixa'))
imprimirNoParagrafo(digitos.test("12/12/1999"))
imprimirNoParagrafo(digitos.test("99/99/9999"))
