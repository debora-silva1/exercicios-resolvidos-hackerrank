function beautifulDays(i, j, k) {

    let contador = 0;

    for (let n = i; n <= j; n++) {
        let numeroConvertido = parseInt(n.toString().split('').reverse().join(''))

        let calculo = Math.abs((n - numeroConvertido) / k)

        if (calculo === parseInt(calculo)) {
            contador++
        }
    }
    return contador;
}

const i = 20;
const j = 23;
const k = 6;

const result = beautifulDays(i, j, k)
console.log(result)