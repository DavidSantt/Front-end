function alterarCor() {
    let posts = document.getElementsByClassName('post')
    
    let postN1 = posts[0]
    postN1.style.backgroundColor = 'blue';

}

function aumentarFonte() {
    let textoPost = document.getElementsByClassName('texto-post')

    textoPost[1].classList.add('fonte-grande')
}

function marcarRadio(genero) {
    let radioMasc = document.getElementById('masc')
    let radioFemi = document.getElementById('femi')

    if (genero === 'M') {
        radioMasc.checked = true
    } else if (genero === 'F') {
        radioFemi.checked = true
    }

}

/* 
let posts2 = document.getElementsByClassName('post2')
let post2 = (posts2.value)
*/