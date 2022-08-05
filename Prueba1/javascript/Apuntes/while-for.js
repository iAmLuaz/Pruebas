//While
//Primero se leé la condicion y despues se cumple la accion
let contador = 0;

while (contador < 3) {
    contador++;
    console.log(contador);
}

console.log(contador);

//Do While
//Primero se realiza la accion aunque sea una vez y despues se lee la condicion
contador = 0;

do {
    contador ++;
    console.log(contador);
} while (contador < 3);
console.log(contador);

//For
//Realiza la inicializacion, lee la condicion y limita el decremento o aumento en el mismo apartado
for (contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log(contador);

//break;
//Corta el ciclo al realizarse una vez
for (contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
}
console.log(contador);

//continue
//Va a la siguiente iteración

for (contador = 0; contador <= 10; contador++) {
    if (contador % 2 != 0) {
        continue;
    }
console.log(contador)
    
}
