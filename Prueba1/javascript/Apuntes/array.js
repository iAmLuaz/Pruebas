//let campeones = new Array('Garen', 'Swain', 'Katarina', 'Velkoz', 'Jhin'); Forma antigua
const campeones = ['Garen', 'Katarina', 'Swain', 'Velkoz', 'Jhin'];
console.log(campeones);

console.log(campeones[0]);
console.log(campeones[1]);
console.log(campeones[2]);
console.log(campeones[3]);

//metodo length para saber la cantidad de elementos que hay en el arreglo
for (let i = 0; i < campeones.length; i++) {
    console.log(i + '.- ' + campeones [i]);
}

//Modificar, agregar o eliminar elementos al arreglo
//Modificar
campeones[2] = 'Swain Amo de los Dragones';
console.log(campeones);

//Agregar
campeones.push('Fiddlesticks');
console.log(campeones);

//Eliminar
campeones.pop();
console.log(campeones);

//Verificar si es un arreglo
console.log(Array.isArray(campeones));
console.log(campeones instanceof Array);

