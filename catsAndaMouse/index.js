function catAndMouse(x, y, z) {

    const distanciaGatoA = ((z - x));
    const distanciaGatoB = ((y - z));
    console.log(distanciaGatoA, distanciaGatoB)
    let resposta = ''

    if (distanciaGatoA === distanciaGatoB) {
        resposta = 'Mouse C'
    } else if (distanciaGatoB < distanciaGatoA) {
        resposta = 'Cat B'
    } else {
        resposta = 'Cat A'
    }

    return resposta;
}

const x = 1;
const y = 2;
const z = 3;

const result = catAndMouse(x, y, z)
console.log(result)