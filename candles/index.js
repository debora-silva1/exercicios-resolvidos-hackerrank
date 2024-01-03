function birthdayCakeCandles(candles) {

    const candlesMax = Math.max(...(candles))
    console.log(candlesMax)
    let qtdDeCandles = 0

    for (let candle of candles) {
        if (candle === candlesMax) {
            qtdDeCandles++
        }
    }
    return (qtdDeCandles)
}

const candles = [1, 5, 3, 4]

const quantidadeDeCandles = birthdayCakeCandles(candles)
console.log(quantidadeDeCandles)