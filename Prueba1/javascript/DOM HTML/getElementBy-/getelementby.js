//Get element by ID
//Buscará al elemento con el ID indicado
let title = document.getElementById('title').innerHTML;//innerHTML hace que se recupere solo el texto
console.log(title);
let text = document.getElementById('text');
console.log(text.innerHTML);//El innerHTML puede ir en la declaracion o en la impresion

//Para concatenar junto con strings
let text1 = document.getElementById('text1');
console.log(`El resultado es: ${text1.innerHTML}`);

//Para modificar texto de la etiqueta seleccionada
text1.innerHTML = 'Este es el nuevo texto insertado con Javascript';
console.log(text1.innerHTML);

//Get element by Tag Name
//Buscará a la etiqueta con el nombre indicado
let cantidadParrafos = document.getElementsByTagName('p');
console.log('Cantidad de etiquetas p: ', cantidadParrafos.length);
for (let i = 0; i < cantidadParrafos.length; i++) {
    console.log(`i: ${i} - ${cantidadParrafos[i].innerHTML}`);
}
for (let i = 0; i < cantidadParrafos.length; i++) {
    console.log(i, cantidadParrafos[i].innerHTML);
}

//Get element by Class Name
//Buscara al elemento con la clase indicado
let h = document.getElementsByClassName('h');
console.log('Cantidad de elementos con clase h: ', h.length);


