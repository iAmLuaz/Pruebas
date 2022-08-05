//Declaración de la función
function miniSumador(a,b,c,d) {
    console.log('Suma: ' + (a+b+c+d));
    return a+b+c+d; //Sirve para regresar cualquier tipo de resultado, ya sea una operacion, un  numero, cadena, mensaje, etc.
}
//Llamar a la función
miniSumador(1,3,4,5);
miniSumador(2,4,5,60);

//Guardar resultado en una variable
let resultado = miniSumador(1,20,5,13);
console.log(resultado);

//Declaración de la función tipo Expresión o anónima
let x = function (a,b) {return a + b};
resultado = x(1,10);
console.log(resultado);

//Función Self invoking - Se llama a si misma una sola vez
(function (a,b) {
    console.log('Está funcionando: '+(a + b));
})(1,5);
console.log (typeof miniSumador);

//Funcion tipo flecha
const sumadorTipoFlecha = (a, b) => a + b;
resultado = sumadorTipoFlecha(1,3);
console.log(resultado);

//Parametros y argumentos
//Parametros: Las variables que definimos en una función
//Argumentos: Los valores que pasamos a nuestra función - Los argumentos sobrescriben lo que se asigna por default en un parametro
//Tambien puedes agregar mas argumentos sin necesidad de que agregues mas parametros

function sumadorNuevo (a = 1,b = 10){ //Al escribir argumentos abajo, se sobrescriben los datos alojados en los parametros
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}
console.log(sumadorNuevo(2,5,8));

