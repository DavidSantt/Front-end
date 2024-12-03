let retornoDoUsuario = window.confirm('Deseja continuar')

console.log(retornoDoUsuario)
if (retornoDoUsuario == true) {
    console.log('Você é gay')
} else if (retornoDoUsuario == false) {
    console.log('Você não é gay')
}

let nomeDoFilme = 'Batman vs Superman'

switch (nomeDoFilme) {
    case 'Vingadores':
        console.log('O Filme é vingadores')
        break
    case 'Batman vs Superman':
        console.log('O Filme é Batman vs Superman')
        break

    default:
        console.log('Adicione um filme')
        break
}

