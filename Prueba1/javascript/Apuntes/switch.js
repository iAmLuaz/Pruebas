//switch con numeros
let hour = 19;
switch (hour) {
    case 1: case 2: case 3: case 4: case 5:
        console.log('zzZzzZz, son las',hour,':00!');
        break;
    case 6: case 7: case 8: case 9: case 10: case 11: case 12:
        console.log('Buenos dias, son las',hour,':00!');
        break;
    case 13: case 14: case 15: case 16: case 17: case 18: 
        console.log('Buenos tardes, son las',hour,':00!');
        break;
    case 19: case 20: case 21: case 22: case 23: case 24:
        console.log('Buenas noches, son las',hour,':00!');
        break;
    default:
        console.log('Nel krnal');
        break;
}
//switch con strings
let month = 'mayo';
switch (month) {
    case 'enero': case 'febrero': case 'marzo':
        console.log('Es primavera por que es ',month);
        break;
    case 'abril': case 'mayo': case 'junio':
        console.log('Es verano por que es ',month);
        break;
    case 'julio': case 'agosto': case 'septiembre':
        console.log('Es otoño por que es ',month);
        break;
    case 'octubre': case 'noviembre': case 'diciembre':
        console.log('Es invierno por que es ',month);
        break;
    default:
        console.log('Nel perro');
        break;
}