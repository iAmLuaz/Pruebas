//Funcion para obtener datos generales del formulario.
function send() {
    let form = document.forms['form'];
    let output = '';
    for (let data of form){
        output += data.value + '<br>';
    }
    document.getElementById('hola').innerHTML = output;
}

//Funcion para obtener datos por separado del formulario.
function sendSeparate() {
    let form = document.forms['form'];
    let output = '';
    let name = form['name'];
    let lastname = form['lastname'];
    output = name.value + '<br>' + lastname.value;
    document.getElementById('hola').innerHTML = output;
}

//Borra los elementos ingresados y almacenados
function erase() {
    document.getElementById('hola').innerHTML = '';
    let name = form['name'];
    let lastname = form['lastname'];
    name.value = '';
    lastname.value = '';
}

//Modificar texto
document.getElementById('title').innerHTML += '<br>Nuevo Formulario';
