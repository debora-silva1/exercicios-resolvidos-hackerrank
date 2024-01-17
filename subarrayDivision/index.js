function birthday(s, d, m) {
    let cont = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let soma = 0;
        console.log(`for externo : ${i}`)

        for (let j = i; j < i + m; j++) {
            console.log(`for interno: ${s[i]}, ${s[j]}`)
            soma = soma + s[j];
        }

        if (soma === d) {
            cont++;
        }
    }

    return cont;
}

const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

const result = birthday(s, d, m)
console.log(result)