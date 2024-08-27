let tituloAula = "Aula 67 - Formas de Incremento"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula


let container = document.getElementById('container')

// let h2 = document.createElement("h2")
// h2.innerHTML = `O z é ${z}`
// container.appendChild(h2)
// let nome = "João"

let numero = 0
while (numero < 50) {

    numero += 10
    let paragrafo = document.createElement("p")

    paragrafo.textContent = `${numero}`
    container.appendChild(paragrafo)
}

for (let i = 0; i < 10; i++) {

    let paragrafo = document.createElement("p")

    paragrafo.textContent = `O i é ${i}`
    container.appendChild(paragrafo)
}


