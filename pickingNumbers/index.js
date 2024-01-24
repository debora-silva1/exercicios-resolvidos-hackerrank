function pickingNumbers(a) {

    const arrayOrdenado = a.sort();
    let conjuntos = [];
    let subconjuntos = [];

    for (let i = 0; i < arrayOrdenado.length; i++) {
        for (let j = i; j < arrayOrdenado.length; j++) {
            let diferencaAbsoluta = Math.abs(arrayOrdenado[i] - arrayOrdenado[j])
            if (diferencaAbsoluta <= 1) {
                subconjuntos.push(arrayOrdenado[j])
            }
        }
        conjuntos.push(subconjuntos)
        subconjuntos = []
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