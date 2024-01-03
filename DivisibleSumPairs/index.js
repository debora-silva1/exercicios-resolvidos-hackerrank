function divisibleSumPairs(n, k, ar) {

    let contador = 0;

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            console.log(ar[i], ar[j])
            if ((ar[i] + ar[j]) % k === 0) {
                contador++
            }
        }
    }
    return contador;

}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2]

const result = divisibleSumPairs(n, k, ar)
console.log(result)