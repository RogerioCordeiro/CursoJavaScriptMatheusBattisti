let { readFile, writeFile } = require('fs')

readFile("arquivo.txt", "utf-8", (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto)
    }
})

writeFile('arquivo.txt', 'Texto por write File', (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu no arquivo")
    }
})

const { createServer } = require('http')

let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": 'text/html' })
    response.write(`
        <h1>Hello World!<h1>
        <p>Primeira página com Node.js<p>`)
    response.end()
})

server.listen(8000)

console.log("Ouvidno a porta 8000")