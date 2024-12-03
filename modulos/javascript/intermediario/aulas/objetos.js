let tenis = {
    cor: 'branco', tamanho: 42, disponivel: true
}

for (let pos in tenis) {
    console.log(tenis[pos])
}

tenis.valor = 187.90
console.log(tenis.valor)