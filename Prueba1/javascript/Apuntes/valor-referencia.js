//Paso por valor
let x = 10;

function changeValue(a) {
    a = 20;
}

changeValue(x);
console.log(x);
//console.log(a); huevos

//Paso por referencia
const campeon = {
    nombre: 'Swain',
    habilidad: 'Mano de la Muerte'
}

function editarObjeto(p1) {
    p1.nombre = 'Lee sin';
    p1.habilidad = 'Onda Sonica';
}
editarObjeto(campeon);
console.log(campeon);