let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Primeira rota com Express')
})

app.listen(3000, function () {
    console.log("A aplicação está rodando na porta 3000 com Express")
})