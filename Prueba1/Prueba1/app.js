//Recibir valores de todos los datos
let names = document.querySelectorAll('div.name');
let membership = document.querySelectorAll('div.membership');
let address = document.querySelectorAll('div.address');

//Lugar donde se almacena el Array de Datos
let nameArray = [];

//Funcion para quitar acentos
const removeAccents = (param) => {
    return param.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

}
//Obtener la cadena completa de nombres, convertirlos a mayuscula y quitarle acentos
for (let i = 0; i < names.length; i++) {
    var currentName = names[i].innerHTML;
    nameArray.push(removeAccents(currentName).toUpperCase());
}
console.log(nameArray);

//Funcion para recibir los datos ingresados y transformarlos en mayusculas y quitarle acentos
document.getElementById('searcher').onkeydown = transformName;
document.getElementById('searcher').onkeyup = transformName;
function transformName(){
    let form = document.forms['form'];
    let output = '';
    let name = form['searcher'];
    output = removeAccents(name.value).toUpperCase();
    document.getElementById('elementos').innerHTML = output;
    console.log('Working');
}




// function searchName() {
//     let receivedData = document.getElementById('elementos').innerHTML;
//     if (receivedData = ) {
        
//     } else {
        
//     }
//     console.log('Working too');
// }