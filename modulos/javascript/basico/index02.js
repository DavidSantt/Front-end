/* function soma(n1, n2) {
    window.alert(n1 + n2)
}

soma(10, 23) */

function numFatorial() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    let numero = Number(num.value)

    let resultado = 1
    for (let i = 1; i <= numero; i++ ) {
        resultado *= i
    }

    res.innerText = `${resultado}`
    
}

/* let resultado = 1
    for (let i; i <= numero; i++ ) {
        resultado *= i
    } */

