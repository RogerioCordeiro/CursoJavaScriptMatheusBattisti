let nome = "Aula 64 - identação"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = nome


let container = document.getElementById('container')
let x = 0
let y = 0
if (x == 0 && y == 0) {
    let z = 5
    if (z > 2) {
        let h2 = document.createElement("h2")
        h2.innerHTML = `O z é ${z}`
        container.appendChild(h2)
        for (i = 0; i < 5; i++) {
            let paragrafo = document.createElement("p")

            paragrafo.textContent = `O i é ${i}`
            container.appendChild(paragrafo)
        }
    }
}

