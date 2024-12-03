function adicionar() {
    let comentarios = document.getElementById('comentario')
    let novosComentarios = document.getElementById('novos-coments')

    let comentario = (comentarios.value)
    
    novosComentarios.innerHTML += `<p><small>Merdinha123 @merdinhaofc - 6h</small></p> <p> ${comentario} </p>`
}

/* novosComentarios.innerHTML += `<p><small>Merdinha123 @merdinhaofc - 6h</small></p> <p> ${comentario} </p>`
 */