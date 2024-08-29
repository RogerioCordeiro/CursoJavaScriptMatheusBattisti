let tituloAula = "Aula 235 - exec "
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const digitos = /\d+/
var str = String.raw`Testa o uso do exec para verifica os dados /\d+/`
imprimirNoParagrafo(str)
imprimirNoParagrafo(digitos.exec("Tem o número 100 aqui"))
imprimirNoParagrafo(digitos.exec("Tem o número 100 aqui").groups)
imprimirNoParagrafo(digitos.exec("Tem o número 100 aqui").index)
imprimirNoParagrafo(digitos.exec("Tem o número 100 aqui").input)
imprimirNoParagrafo(digitos.exec('Tem o número aqui'))
imprimirNoParagrafo(digitos.exec("(48)99999-9999"))
imprimirNoParagrafo(digitos.exec("99999-999"))
console.log(digitos.exec("Tem o número 100 aqui"))