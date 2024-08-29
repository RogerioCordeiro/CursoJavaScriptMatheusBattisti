let tituloAula = "Aula 259 - Rejeitando Promises"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(imprimirNoParagrafo(`O número é ${num}`))
        } else {
            reject(new Error("Falhou"))
        }
    })
}

verificarNumero(2)
verificarNumero(3)