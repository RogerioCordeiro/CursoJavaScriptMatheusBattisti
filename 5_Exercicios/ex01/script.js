let tituloAula = "Exercicios 1 Seção 5"
document.title = tituloAula
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula


let container = document.getElementById('container')
let paragrafo = document.createElement("p")
let paragrafo1 = document.createElement("p")
let paragrafo2 = document.createElement("p")

let numero = 10
let texto = "Essa é uma string"
let verdade = true

paragrafo.textContent = `${numero} é do tipo ${typeof (numero)}`
container.appendChild(paragrafo)
paragrafo1.textContent = `${texto} é do tipo ${typeof (texto)}`
container.appendChild(paragrafo1)
paragrafo2.textContent = `${verdade} é do tipo ${typeof (verdade)}`
container.appendChild(paragrafo2)

// let h2 = document.createElement("h2")
// h2.innerHTML = `O z é ${z}`
// container.appendChild(h2)
// let nome = "João"

// let numero = 0
// while (numero < 50) {

//     numero += 10
//     let paragrafo = document.createElement("p")

//     paragrafo.textContent = `${numero}`
//     container.appendChild(paragrafo)
// }

// for (let i = 0; i < 10; i++) {

//     let paragrafo = document.createElement("p")

//     paragrafo.textContent = `O i é ${i}`
//     container.appendChild(paragrafo)
// }


