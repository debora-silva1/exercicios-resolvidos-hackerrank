// function mod(num) {
//     if (num >= 0) {
//         return num;
//     } else {
//         return -num
//     }
// }
function catAndMouse(x, y, z) {

    const distanciaGatoA = Math.abs(z - x);
    const distanciaGatoB = Math.abs(y - z);

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