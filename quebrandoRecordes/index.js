function breakingRecords(scores) {

    let maioresRecord = [];
    let menoresRecord = [];
    let scoreMax = scores[0];
    let scoreMin = scores[0];
    let contMax = 0;
    let contMin = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scoreMax) {
            maioresRecord = scores[i]
            console.log(`maiores Recordes:${maioresRecord}`)
            contMax++
            console.log(`contMax:${contMax}`)
        } else if (scores[i] < scoreMin) {
            menoresRecord = scores[i]
            console.log(`menores Recordes:${menoresRecord}`)
            contMin++
            console.log(`contMin:${contMin}`)
        }

    }
    return [contMax, contMin]
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
const result = breakingRecords(scores)
console.log(result)