function migratoryBirds(arr) {

    let contador = 0;
    let jaContou = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                contador++
            }
        }
        jaContou.push(contador)
        contador = 0
    }

    let maiorNumero = 0;
    let indiceDoMaiorNumero = 0;

    for (let indice = 0; indice < jaContou.length; indice++) {
        if (jaContou[indice] > maiorNumero) {
            maiorNumero = jaContou[indice]
            indiceDoMaiorNumero = indice
        }
    }

    let tipo = 5;

    for (let n = 0; n < jaContou.length; n++) {
        if (jaContou[n] === maiorNumero && arr[n] < tipo) {
            tipo = arr[n]
        }
    }

    return tipo;
}

const arr = [1, 4, 4, 4, 5, 3]

const result = migratoryBirds(arr)
console.log(result)