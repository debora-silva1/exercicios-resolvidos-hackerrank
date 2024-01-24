function designerPdfViewer(h, word) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if (word[i] === alfabeto[j]) {
                let indice = j
                for (let n = 0; n < h.length; n++) {
                    if (n === indice) {
                        numeros.push(h[n])
                    }
                }
            }
        }
    }
    let maiorNumero = 0;
    let tamanhoDoWord = word.length

    for (let numero of numeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    const areaDoretangulo = maiorNumero * tamanhoDoWord

    return areaDoretangulo
}
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'zaba'

const result = designerPdfViewer(h, word)
console.log(result)