function utopianTree(n) {

    let altura = 2;


    if (n === 0) {
        return altura = 1
    } else {
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0 && i === 0) {
                altura
            } else if (i % 2 === 0) {
                altura = altura * 2
            }
            if (i % 2 > 0) {
                altura = altura + 1
            }
        }
    }
    return altura;
}

const n = 3;

const result = utopianTree(n)
console.log(result)