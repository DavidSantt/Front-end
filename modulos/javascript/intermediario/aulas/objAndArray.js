/* let nomeJogo = {
    nome: 'God of War'
}

let nomeJogo2 = {
    nome: 'Bomba Patch'
}

let nomeJogo3 = {
    nome: 'Fifa 25'
}

let videoGame = {
    nome: 'xbox',
    valor: 4000,
    jogos: [nomeJogo, nomeJogo2, nomeJogo3]
} */

let videoGame = {
    nome: 'xbox',
    valor: 4000,
    jogos: [
    { nome: 'God of War' }, 
    { nome: 'Bomba Patch' },
    { nome: 'Fifa 25' }
    ]
} 

console.log(videoGame.jogos[1].nome)

let cliente = {
    nome: 'Osvaldo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3500,
        jogos: ['God of War', 'Fifa 25']
    }
}

console.log(cliente.ultimoPedido.jogos[1])

let number = [1,2,3,4,5]

number.forEach(function(number) {
    return number * 2
    
})
console.log(number)