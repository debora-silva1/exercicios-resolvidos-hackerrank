function viralAdvertising(n) {

    let quantidadeDeCompartilhamento = 0;
    let acumulativoDeCurtidas = 0

    let quantidadeDePessoasQueGostaram = parseInt(n / 2);
    if (quantidadeDePessoasQueGostaram === 1) {
        quantidadeDePessoasQueGostaram = 2
    }

    for (let i = 1; i <= n; i++) {
        acumulativoDeCurtidas = acumulativoDeCurtidas + quantidadeDePessoasQueGostaram
        for (let j = 1; j <= quantidadeDePessoasQueGostaram; j++) {
            quantidadeDeCompartilhamento = quantidadeDeCompartilhamento + 3
        }
        quantidadeDePessoasQueGostaram = parseInt(quantidadeDeCompartilhamento / 2)
        quantidadeDeCompartilhamento = 0;

    }

    return acumulativoDeCurtidas;

}

const n = 34;
//3149621

const result = viralAdvertising(n)
console.log(result)