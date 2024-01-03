function gradingStudents(grades) {
    let gradeFinal = [];

    for (let i = 0; i < grades.length; i++) {
        let numeroSucessor = grades[i] + 1

        while (numeroSucessor % 5 !== 0) {
            numeroSucessor++
        }

        let diferencaEntreNumeros = numeroSucessor - grades[i]

        if (grades[i] >= 38 && diferencaEntreNumeros < 3) {
            gradeFinal.push(numeroSucessor)
        } else {
            gradeFinal.push(grades[i])
        }
    }

    return gradeFinal;
}

const grades = [73, 67, 38, 33]

const notas = gradingStudents(grades)
console.log(notas)