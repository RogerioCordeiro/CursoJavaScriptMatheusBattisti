let tituloAula = "Aula 98 - Mais sobre funções"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

function multiplicarTresNumeros(x, y, z) {
    imprimirNoParagrafo(x * y * z)
}

multiplicarTresNumeros(2, 3, 4)

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        imprimirNoParagrafo("Pode dirigir")
    } else {
        imprimirNoParagrafo("Não pode dirigir")
    }
}

podeDirigir(19, true)
podeDirigir(19, false)
podeDirigir(16, false)
podeDirigir(16, true)
