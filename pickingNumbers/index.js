function pickingNumbers(a) {
    let subConjuntos = [];
    let novoSubConjunto = []
    let flag = false;
    let indice = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            let diferencaAbs = Math.abs(a[i] - a[j])
            if (diferencaAbs <= 1) {
                novoSubConjunto.push(a[j])
                console.log(novoSubConjunto)
                let maiorValor = Math.max(...novoSubConjunto)
                let menorValor = Math.min(...novoSubConjunto)
                if (novoSubConjunto[indice] === maiorValor || novoSubConjunto[indice] === menorValor) {
                    flag = true
                }
            }

        }
        indice++
        subConjuntos.push(novoSubConjunto)
        novoSubConjunto = []
        flag = false
    }

    return subConjuntos;
}

const a = [4, 6, 5, 3, 3, 1]
const result = pickingNumbers(a)
console.log(result)