let tituloAula = "JavaScript ES6 Seção 22"

document.title = tituloAula

let container = document.getElementById('container')

function h1(texto) {
    let tituloH1 = document.createElement('h1')
    tituloH1.innerHTML = texto
    container.appendChild(tituloH1)
}

function h2(texto) {
    let tituloH1 = document.createElement('h2')
    tituloH1.innerHTML = texto
    container.appendChild(tituloH1)
}
function paragrafo(nome) {
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = nome
    container.appendChild(paragrafo)
}

h1(tituloAula)
h2('Aula 373 - Utilizando let e const')

paragrafo(`Ao utilizar var a variável é alterada no escopo 
    global fazendo com que o sistema tenha comportamentos estranhos`)

var x = 10
var y = 15

if (y > 10) {
    var x = 5
    paragrafo(x)
}

paragrafo(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 20
    paragrafo(a)
}

paragrafo(a)


h2('Aula 374 - Arrow function na prática')

paragrafo(`Arrow function são funções anonimas.`)

const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

paragrafo(sum(5, 5))
paragrafo(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        paragrafo(`Olá ${name}!`)
    } else {
        paragrafo('Olá')
    }
}

greeting()
greeting("Rogério")

const testeArrow = () => paragrafo("Arrow function sem parametros")

testeArrow()

// const user = {
//     name: 'Malu',
//     sayUserName() {
//         var self = this
//         setTimeout(function () {
//             paragrafo(self)
//             paragrafo(`Username: ${self.name}`)
//         }, 0)
//     },
//     sayUserNameArrow() {

//         setTimeout(() => {
//             paragrafo(this)
//             paragrafo(`Username: ${this.name}`)
//         }, 0)
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow()


h2('Aula 375 - Método Filter')
paragrafo(`Usado para filtrar dados em array`)
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

paragrafo(highNumbers)

const users = [
    { name: 'Rogerio', available: true },
    { name: 'Priscila', available: true },
    { name: 'Giovanna', available: false },
    { name: 'Malu', available: false },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

let texto = JSON.stringify(availableUsers, null, 2);
paragrafo(texto)

texto = JSON.stringify(notAvailableUsers, null, 2);
paragrafo(texto)

h2('Aula 376 - Método Map')
paragrafo(`Usado para filtrar dados em array`)

const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro' },
    { name: 'Fogão', price: 500, category: 'Eletro' },
    { name: 'Calça jeans', price: 50.99, category: 'Roupas' }
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

paragrafo(JSON.stringify(products))

h2('Aula 377 - Templete Literals')
paragrafo('Usando para concatenar variaveis com o texto com o uso do ${}')

const userName = 'Rogério'
const age = 30

paragrafo(`O nome do usuário é ${userName} e ele tem ${age} anos!`)
paragrafo(`const userName = 'Rogério'<br>
const age = 30`)
paragrafo("`O nome do usuário é ${userName} e ele tem ${age} anos!`")

h2('Aula 378 - Destructuring')
paragrafo('É utilizado em arrays e objetos')

let obj1 = { name: 'Rogério' };
let obj2 = obj1;  // obj2 recebe a referência ao mesmo objeto

obj2.name = 'Priscila';  // Modifica o objeto referenciado por obj2
paragrafo(obj1.name);
paragrafo(obj2.name)

