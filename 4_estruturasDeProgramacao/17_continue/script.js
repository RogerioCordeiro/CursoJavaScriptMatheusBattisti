let tituloAula = "Aula 66 - Continue"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula


let container = document.getElementById('container')


// let h2 = document.createElement("h2")
// h2.innerHTML = `O z é ${z}`
// container.appendChild(h2)
// let nome = "João"

for (let i = 0; i < 10; i++) {

    // if (i == 3) {
    //     nome = "Rogério"
    // }

    if (i % 2 == 0) {
        let h2 = document.createElement("p")
        h2.innerHTML = `Caiu no continue ${i}`
        container.appendChild(h2)
        continue
    }

    let paragrafo = document.createElement("p")

    paragrafo.textContent = `O i é ${i}`
    container.appendChild(paragrafo)
}


