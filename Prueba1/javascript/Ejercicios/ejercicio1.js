// ----------Verificar si numero es par o impar-----------
let a = 3;

if (a % 2 == 0) {
    console.log('Este es un numero par');
}
else if (a % 2 != 0) {
    console.log('Este es un numero impar');
}

// ---------- Mayor de Edad-----------
let b = 18;

if (b >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

//----------Operador AND-----------
// Ambas condiciones deben cumplirse para que sea verdadero
let c = 43;

if (c >= 10 && c <= 50) {
    console.log('Este numero está entre 10 y 50')
} else {
    console.log('Pues nel')
}

//----------Operador OR-----------
// Con que una condicion sea verdadera, toda la expresión se cumple
let weekend = true, vacation = false;

if (weekend == true || vacation == true) {
    console.log('Si se podrá');
} else {
    console.log('No se podrá')
}

//--------------Operador ternario--------------
// Condicional que especifica que hará cuando su valor sea verdadero o falso

let resultado = (3>2) ? 'verdadero' : 'falso';
console.log(resultado);
console.log(!resultado);

let poi = 9;
poi = (poi % 2 == 0) ? 'El numero es par' : 'El numero es impar';
console.log(poi);

//-----------Conversor string a numero------------

let numCadena = '18';
console.log(numCadena);
console.log(typeof numCadena);

let edad = Number(numCadena);
console.log(edad);
console.log(typeof edad);

if (isNaN(edad)) { //isNaN para verificar si lo ingresado es un numero o no
    console.log('Esto no es un numero krnal');
} else {
    edad = (edad >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
    console.log(edad);    
}
