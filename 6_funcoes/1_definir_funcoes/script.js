let tituloAula = "Aula 97 - Definindos funções"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula

let container = document.getElementById('container')

function imprimirNoParagrafo() {
    let nome = "Olá Mundo"
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

imprimirNoParagrafo()

function imprimirUmNumero(num) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = `Esse é o número ${num}`
    container.appendChild(paragrafo)
}

imprimirUmNumero(1)
imprimirUmNumero(5)
imprimirUmNumero(6)
imprimirUmNumero(7)
imprimirUmNumero(8)

const numeroAleatorio = function () {
    imprimirUmNumero(Math.random())
}

numeroAleatorio()
numeroAleatorio()

// let h2 = document.createElement("h2")
// h2.innerHTML = `O z é ${z}`
// container.appendChild(h2)

/*
Comentário de multiplas linhas
comentário de multiplas linhas
Comentário de multiplas linhas
*/
// let nome = "Comentários podem aparecer no console do navegador. Ter cuidado com o que será escrito"
// let paragrafo = document.createElement("p")
// paragrafo.innerHTML = nome
// container.appendChild(paragrafo)



