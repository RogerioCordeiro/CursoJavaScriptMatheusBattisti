let tituloAula = "Aula 238 - Validado Dominio "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const digitos = /[?www.]\w+\.com.br|.com/
var str = String.raw`Teste para validade dominios /[?www.]\w+\.com.br|.com/`
imprimirNoParagrafo(str)
imprimirNoParagrafo(digitos.exec("www.google.com"))
imprimirNoParagrafo(digitos.exec("www.google.com").groups)
imprimirNoParagrafo(digitos.exec("www.google.com").index)
imprimirNoParagrafo(digitos.exec("www.google.com").input)
imprimirNoParagrafo(digitos.test('www.google.com.br'))
imprimirNoParagrafo(digitos.test("google.com"))
imprimirNoParagrafo(digitos.test("99999-999"))
