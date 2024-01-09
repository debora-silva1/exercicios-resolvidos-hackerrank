function bonAppetit(bill, k, b) {

    let custoDeAnna = 0;
    let somaConta = 0;

    for (let i = 0; i < bill.length; i++) {
        somaConta = somaConta + bill[i]
    }
    custoDeAnna = (somaConta - bill[k]) / 2

    if (b === custoDeAnna) {
        console.log('Bon Appetit')
    } else {
        console.log(b - custoDeAnna)
    }

}

const bill = [2, 4, 6];
const k = 2;
const b = 6;

const result = bonAppetit(bill, k, b)
console.log(result)
