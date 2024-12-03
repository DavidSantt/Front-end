let frutas = ['abacaxi', 'figu', 'melancia', 'uva']

// Extrai elementos, mas faz uma copia que não afeta o array inicial

let frutasExtraidas = frutas.slice(1,3)
console.log(frutasExtraidas)
for (let pos in frutasExtraidas) {
    console.log(frutasExtraidas[pos])
} 

// Variavéis extraidas = tira elementos do array inicial

let frutasExtraidas2 = frutas.splice(1, 2)
console.log(frutasExtraidas2)
console.log(frutas)

// Tirando e colocando variaveis

let tiraEBota = frutas.splice(1, 2, 'banana', 'coco')
console.log(frutas)