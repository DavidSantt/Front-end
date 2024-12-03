let frutas = ['abacaxi', 'figu', 'melancia', 'uva']
frutas.push('tomate')
frutas.pop() // Remove o ultimo elemento
frutas.shift() // Remove o primeiro elemento
frutas.unshift('tomate') // Adiciona o primeiro elemento
let posicaoFrutas = frutas.indexOf('melancia') 
    console.log(posicaoFrutas)

/* for (let pos in frutas) {
    console.log(frutas[pos])
} */

frutas.forEach(function(item){
    console.log(item)
})

