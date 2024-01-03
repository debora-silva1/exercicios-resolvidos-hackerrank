function breakingRecords(scores) {

    const novoArrayDeScores = [];
    let flag = false;

    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < novoArrayDeScores.length; j++) {
            if (i !== j && scores[i] === novoArrayDeScores[j]) {
                flag = true
            }
        }
        if (flag !== true) {
            novoArrayDeScores.push(scores[i])
        }
        if (!novoArrayDeScores.length) {
            novoArrayDeScores.push(scores[0])
        }

        flag = false
    }

    let maioresRecord = [];
    let menoresRecord = [];
    let scoreMax = novoArrayDeScores[0];
    let scoreMin = novoArrayDeScores[0];
    let contMax = 0;
    let contMin = 0;

    for (let i = 1; i < novoArrayDeScores.length; i++) {
        if (novoArrayDeScores[i] > scoreMax) {
            maioresRecord = novoArrayDeScores[i]
            contMax++
            scoreMax = novoArrayDeScores[i]
        } else if (novoArrayDeScores[i] < scoreMin) {
            menoresRecord = novoArrayDeScores[i]
            contMin++
            scoreMin = novoArrayDeScores[i]
        }

    }
    return [contMax, contMin]
}

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
const result = breakingRecords(scores)
console.log(result)