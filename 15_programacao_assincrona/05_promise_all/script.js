let tituloAula = "Aula 260 - Promise All"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula
document.title = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}


const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10)
    }, 2000)
})

const p2 = Promise.resolve(20)

const p3 = new Promise((resolve, reject) => {
    resolve(30)
})

Promise.all([p1, p2, p3]).then((values) => imprimirNoParagrafo(values))