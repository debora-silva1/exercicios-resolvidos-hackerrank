function hurdleRace(k, height) {

    const maiorNumero = Math.max(...height)

    if (maiorNumero > k) {
        return maiorNumero - k
    } else {
        return 0
    }
}

const height = [1, 6, 3, 5, 2];
const k = 4;

const result = hurdleRace(k, height)
console.log(result)