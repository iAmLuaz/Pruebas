//Query Selector All
//El más importante y completo, busca los elementos con la clase y/o id indicados
//FORMATO: nombreEtiqueta.clase#id
let ejemplos = document.querySelectorAll('h5.hola#adios');
for (let i = 0; i < ejemplos.length; i++) {
    console.log(i, ejemplos[i].innerHTML);
}