function pageCount(n, p) {
    const primeiraPagina = 1;

    let diferencaPrimeiraPagEpaginaN = (primeiraPagina - p) * -1
    let diferencaEntrePeN = (p - n) * -1

    if (diferencaPrimeiraPagEpaginaN < diferencaEntrePeN) {
        diferencaPrimeiraPagEpaginaN = (diferencaPrimeiraPagEpaginaN + 1) / 2
        return parseInt(diferencaPrimeiraPagEpaginaN)
    } else {
        if (n % 2 === 1) {
            diferencaEntrePeN = (diferencaEntrePeN - 1) / 2
        } else if (n % 2 === 0) {
            diferencaEntrePeN = (diferencaEntrePeN + 1) / 2
        }
        return parseInt(diferencaEntrePeN)
    }

}

const n = 37455;
const p = 29835;

const result = pageCount(n, p)
console.log(result)