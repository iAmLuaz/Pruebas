let persona = {
    name: 'Juan',
    edad: 28, 
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();
    }
}
console.log(persona);

persona.lang = 'en';
console.log(persona.idioma);
console.log(persona.lang);
console.log(persona);