function migratoryBirds(arr) {

    let quantidadeDePassaros = [];
    let contador = 0;
    let jaContou = [];
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`arr${[i]}: ${arr[i]} , arr${j}: ${arr[j]}`)
            if (arr[i] === arr[j]) {
                contador++
                console.log(`contador: ${contador}`)
            }

        }
        quantidadeDePassaros.push(contador)

        jaContou.push(arr[i])
        console.log(`ja contou: ${jaContou}`)
        let novoArr = jaContou[0]

        for (let n = 1; n < jaContou.length; n++) {
            if (jaContou[n] === novoArr) {
                flag = true
            }

            flag = false
        }

    }
    return quantidadeDePassaros;
}
const arr = [1, 4, 4, 4, 5, 3]

const result = migratoryBirds(arr)
console.log(result)