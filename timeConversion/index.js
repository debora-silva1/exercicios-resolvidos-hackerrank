function timeConversion(s) {

    const string = s.slice(0, 8)
    const substring = s.slice(-2)

    const horaFatiada = string.split(':');
    let hora = horaFatiada[0];
    let minuto = horaFatiada[1];
    let segundo = horaFatiada[2];
    let time = '';
    let horaConvertida = 0;

    if (substring === 'PM') {
        if (Number(hora) === 12) {
            horaConvertida = 12
            time = horaConvertida.toString() + ':' + minuto + ':' + segundo
        } else {
            horaConvertida = Number(hora) + 12
            time = horaConvertida.toString() + ':' + minuto + ':' + segundo
        }
    }
    else {
        if (Number(hora) === 12) {
            horaConvertida = Number(hora) - 12
            time = '0' + horaConvertida.toString() + ':' + minuto + ':' + segundo
        } else {
            horaConvertida = Number(hora)
            time = '0' + horaConvertida.toString() + ':' + minuto + ':' + segundo
        }

    }

    return time;

};

const s = '04:59:59AM'

const arr = timeConversion(s)
console.log(arr)