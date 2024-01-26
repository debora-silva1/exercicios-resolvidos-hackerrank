function angryProfessor(k, a) {
    let contador = 0;

    for (let numero of a) {
        if (numero <= 0) {
            contador++
        }
    }
    const resultado = (contador >= k) ? "no" : "yes"

    return resultado;

}

const k = 2;
const a = [0, -1, 2, 1]

const result = angryProfessor(k, a)
console.log(result)