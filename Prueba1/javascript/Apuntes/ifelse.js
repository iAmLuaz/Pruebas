let condition = true;

if (condition) {
    console.log('Es verdadera');
} else {
    console.log('Es falsa');
}

//-------if/else if/else------
let month = 12;

if (month >= 1 && month <=3) {
    console.log('Es primavera');
} else if (month >= 4 && month <=6){
    console.log('Es verano');
} else if (month >= 7 && month <=9) {
    console.log('Es otoño');
} else if (month >= 10 && month <=12) {
    console.log('Es invierno');
} else {
    console.log('No existe ese mes');
}
