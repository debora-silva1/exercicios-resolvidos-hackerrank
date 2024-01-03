function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let distanciaApples = []
    let somaDistanciaApples = 0;
    let quantidadesDeApples = 0;

    for (let distancia of apples) {
        somaDistanciaApples = distancia + a
        distanciaApples.push(somaDistanciaApples)
    }

    for (let num of distanciaApples) {
        if (num >= s && num <= t) {
            quantidadesDeApples++
        }
    }
    let somaDistanciaOranges = 0;
    let quantidadesDeOrange = 0;
    let distanciaOranges = []

    for (let distancia of oranges) {
        somaDistanciaOranges = distancia + b
        distanciaOranges.push(somaDistanciaOranges)
    }

    for (let num of distanciaOranges) {
        if (num >= s && num <= t) {
            quantidadesDeOrange++
        }
    }

    console.log(quantidadesDeApples)
    console.log(quantidadesDeOrange)
}

const s = 7;
const t = 10;
const a = 4;
const b = 12;
const m = 3;
const n = 3;
const apples = [2, 3, -4]
const oranges = [3, -2, -4]

const contNumeroMacaseLaranjas = countApplesAndOranges(s, t, a, b, apples, oranges)
console.log(contNumeroMacaseLaranjas)