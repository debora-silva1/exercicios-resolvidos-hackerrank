function kangaroo(x1, v1, x2, v2) {

    let posicaoCang1 = x1 + v1;
    let posicaoCang2 = x2 + v2;

    for (let i = 0; i <= 10000; i++) {
        if (posicaoCang1 !== posicaoCang2) {
            posicaoCang1 = posicaoCang1 + v1
            posicaoCang2 = posicaoCang2 + v2
        }
    }
    if (posicaoCang1 === posicaoCang2) {
        console.log('SIM')
    } else {
        console.log('NAO')
    }

}

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

const saltos = kangaroo(x1, v1, x2, v2)
console.log(saltos)