function sockMerchant(ar) {

    const numerosIguais = {};

    for (let i = 0; i < ar.length; i++) {
        numerosIguais[ar[i]] = 0
    }
    for (let j = 0; j < ar.length; j++) {
        const numero = ar[j]
        numerosIguais[numero]++
    }

    let resultado = 0;
    let soma = 0;
    for (let numero in numerosIguais) {
        resultado = parseInt(numerosIguais[numero] / 2)
        soma = soma + resultado
    }
    return soma;

}
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const result = sockMerchant(ar)
console.log(result)