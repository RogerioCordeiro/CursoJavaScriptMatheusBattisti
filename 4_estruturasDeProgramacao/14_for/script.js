let nome = "Aula 61 While"

let escreverH1 = document.getElementById("escrever")

escreverH1.textContent = nome


let container = document.getElementById('container')
for (let x = 0; x < 100; x = x + 3) {
    let paragrafo = document.createElement("p")

    paragrafo.textContent = `O x é ${x}`
    container.appendChild(paragrafo)
} 
