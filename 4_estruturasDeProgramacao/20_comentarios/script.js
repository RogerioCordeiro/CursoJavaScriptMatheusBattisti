let tituloAula = "Aula 70 - Comentários"
let escreverH1 = document.getElementById("escrever")
escreverH1.textContent = tituloAula


let container = document.getElementById('container')

// let h2 = document.createElement("h2")
// h2.innerHTML = `O z é ${z}`
// container.appendChild(h2)

/* 
Comentário de multiplas linhas
comentário de multiplas linhas
Comentário de multiplas linhas
*/
let nome = "Comentários podem aparecer no console do navegador. Ter cuidado com o que será escrito"
let paragrafo = document.createElement("p")
paragrafo.innerHTML = nome
container.appendChild(paragrafo)



