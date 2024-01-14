function pageCount(n, p) {
    const primeiraPagina = 1;

    let diferencaPrimeiraPagEpaginaN = (primeiraPagina - p) * -1
    let diferencaEntrePeN = (p - n) * -1

    if (diferencaPrimeiraPagEpaginaN < diferencaEntrePeN) {
        diferencaPrimeiraPagEpaginaN = (diferencaPrimeiraPagEpaginaN + 1) / 2
        return parseInt(diferencaPrimeiraPagEpaginaN)
    } else {
        if (n % 2 === 1) {
            diferencaEntrePeN = (diferencaEntrePeN) / 2
        } else if (n % 2 === 0) {
            diferencaEntrePeN = (diferencaEntrePeN + 1) / 2
        }
    }
    if (diferencaEntrePeN < 0) {
        diferencaEntrePeN = parseInt(diferencaEntrePeN * -1)
    } else {
        diferencaEntrePeN = parseInt(diferencaEntrePeN)
    }

    return diferencaEntrePeN;
}

const n = 59867;
const p = 35733;

const result = pageCount(n, p)
console.log(result)