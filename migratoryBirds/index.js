function migratoryBirds(arr) {
    const contaPorId = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let maiorValor = 0;
    let id = 0;

    for (let i = 0; i < arr.length; i++) {
        const id_passaro = arr[i];
        contaPorId[id_passaro]++
    }
    console.log(contaPorId)
    for (let indice = 1; indice < 6; indice++) {
        if (contaPorId[indice] > maiorValor) {
            maiorValor = contaPorId[indice]
            id = indice
        }

    }
    return id
}

const arr = [1, 4, 4, 4, 5, 3]

const result = migratoryBirds(arr)
console.log(result)
