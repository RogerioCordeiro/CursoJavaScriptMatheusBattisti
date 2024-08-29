let tituloAula = "Aula 239 - Validar e-mail"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const digitos = /\w+@\w+\.\w+/
var str = String.raw`Teste para validar e-mail /\w+@\w+\.\w+/`
imprimirNoParagrafo(str)
imprimirNoParagrafo(digitos.exec("rogerio@gmail.com"))
imprimirNoParagrafo(digitos.exec("rogerio@gmail.com").groups)
imprimirNoParagrafo(digitos.exec("rogerio@gmail.com").index)
imprimirNoParagrafo(digitos.exec("rogerio@gmail.com").input)
imprimirNoParagrafo(digitos.test('rogerio@gmail.com.br'))
imprimirNoParagrafo(digitos.test("gmail.com"))
imprimirNoParagrafo(digitos.test("99999-999"))
