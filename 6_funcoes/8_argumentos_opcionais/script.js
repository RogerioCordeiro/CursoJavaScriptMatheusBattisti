let tituloAula = "Aula 104 - Argumentos opcionais"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

function somar(a, b) {
    if (a == undefined || b === undefined) {
        return ("Esta função precisa ter 2 argumentos")
    } else {
        return a + b
    }
}

imprimir(somar())
imprimir(somar(3, 6))