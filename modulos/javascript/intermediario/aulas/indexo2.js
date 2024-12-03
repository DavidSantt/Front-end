let anoDeNascimento = function (idade, mesDeNascimento) {
    let mesAtual = 11
    let ano = 2024 - idade
    if (mesDeNascimento > mesAtual) ano--
    return ano
}

console.log(anoDeNascimento(24, 12))

/* let dobrarNumero = n1 => {
    return n1 * 2
} 

console.log(dobrarNumero(2)) */

function multiplicar(multiplicador) {
    return function(n1) {
        return n1 * multiplicador
    }
    
}
let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(1))
console.log(triplicar(1))
console.log(quadruplicar(1))