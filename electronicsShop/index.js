function getMoneySpent(keyboards, drives, b) {
    const precosDentroDoIntervalo = [];
    let maiorPreco = 0;

    for (let valor of keyboards) {
        for (let valores of drives) {
            let somaDosValores = valor + valores
            if (somaDosValores <= b) {
                precosDentroDoIntervalo.push(somaDosValores)
            }
            if (somaDosValores > b) {
                maiorPreco = -1
            }
        }
    }

    for (let preco of precosDentroDoIntervalo) {
        if (preco > maiorPreco) {
            maiorPreco = preco
        }
    }
    return maiorPreco

}

const b = 10; //orçamento
const keyboards = [3, 1];
const drives = [5, 2, 8];


const result = getMoneySpent(keyboards, drives, b)
console.log(result)
