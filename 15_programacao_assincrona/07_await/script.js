let tituloAula = "Aula 262 - Await"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 4000)
    })
}

async function resSoma(a, b, c) {
    let x = somaComDelay(a, b)
    let y = c

    return await x + y
}

resSoma(1, 2, 3).then(value => imprimirNoParagrafo(value))