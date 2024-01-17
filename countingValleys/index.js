function countingValleys(steps, path) {

    const limiteDoMar = 0;
    let variacaoXeY = 0;
    let cont = 0;

    for (let caracter of path) {
        if (caracter === 'D') {
            variacaoXeY--
        } else {
            variacaoXeY++
        }
        if (variacaoXeY === limiteDoMar && caracter !== 'D') {
            cont++
        }
    }
    return cont

}
const path = 'UDDDUDUU';
const steps = 8;

const result = countingValleys(steps, path)
console.log(result)

// imprimir número de vales