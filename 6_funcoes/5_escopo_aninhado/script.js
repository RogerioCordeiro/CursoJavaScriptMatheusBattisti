let tituloAula = "Aula 101 - Escopo aninhado"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimir(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

let a = 10
function multiplicar(x, y) {

    let a = x * y

    if (a > 10) {
        let a = 0
        a++
        imprimir(a)

    }
    imprimir(a)
}

imprimir(a)

multiplicar(7, 5)
