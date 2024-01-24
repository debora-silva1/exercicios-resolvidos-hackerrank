

function pickingNumbers(a) {

    const arrayOrdenado = a.sort(((a, b) => a - b));
    console.log(arrayOrdenado)
    let conjuntos = [];
    let subconjunto = [];

    for (let i = 0; i < arrayOrdenado.length; i++) {
        for (let j = i; j < arrayOrdenado.length; j++) {
            let diferencaAbsoluta = Math.abs(arrayOrdenado[i] - arrayOrdenado[j])
            if (diferencaAbsoluta <= 1) {
                subconjunto.push(arrayOrdenado[j])
            }
        }
        conjuntos.push(subconjunto)
        subconjunto = []
    }
    let maiorConjunto = 0;
    for (let conjunto of conjuntos) {
        let tamanhoDoConjunto = conjunto.length
        if (tamanhoDoConjunto > maiorConjunto) {
            maiorConjunto = tamanhoDoConjunto
        }

    }

    return maiorConjunto;
}

const a = [1, 2, 2, 3, 1, 2]

const result = pickingNumbers(a)
console.log(result)