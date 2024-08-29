let tituloAula = "Aula 240 - Validar validar datas"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const digitos = /[0-31]{2}[/][0-12]{2}[/][1920-2100]{4}/;
var str = String.raw`Expressão para validar datas [0-31]{2}[/][0-12]{2}[/][1920-2020]{4}`
imprimirNoParagrafo(str)
imprimirNoParagrafo(digitos.test('05/02/2000'))
imprimirNoParagrafo(digitos.test('05-02-2020'))
imprimirNoParagrafo(digitos.test("12/12/1999"))
imprimirNoParagrafo(digitos.test("99/99/9999"))
