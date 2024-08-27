let nome = "Aula 61 While"

let escreverH1 = document.getElementById("escrever")

escreverH1.textContent = nome

let x = 10
let container = document.getElementById('container')
while (x > 0) {
    let paragrafo = document.createElement("p")

    paragrafo.textContent = `O x é ${x}`
    x = x - 1
    container.appendChild(paragrafo)
}

let y = 0
while (y <= 10) {
    let paragrafo = document.createElement("p")

    paragrafo.textContent = `O y é ${y}`
    y = y + 1
    container.appendChild(paragrafo)
}