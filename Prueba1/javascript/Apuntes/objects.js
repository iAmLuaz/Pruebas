//Los elementos primitivos no tienen propiedades, solamente valor
let x = 20;
console.log(x.length);

//Objeto
let swain = {
    //atributos
    name: 'Swain',
    lastname: 'Jericho',
    health: 470,
    mana: 350,
    q: 'Deaths Hand',
    w: 'Vision of Empire',
    e: 'Nevermore',
    r: 'Demonic Ascension',
    //metodos
    fullName: function() {
        return this.name + ' ' + this.lastname;
    },
    champInfo: function () {
        return 'His health is: ' + this.health + ', and his mana is: ' + this.mana;
    },
    dmgInjured: function (a) {
        if (a < this.health) {
            return 'His life now is: ' + (this.health - a);
        } else {
            return 'He is dead';
        }
    },
    spellUsed: function (a) {
       if (this.mana > 20) {
            switch (a) {
                case 'q':
                    return 'You have used ' + this.q + ' and now you have ' + (this.mana - 25) + ' mana';
                case 'w':
                    return 'You have used ' + this.w + ' and now you have ' + (this.mana - 30) + ' mana';
                case 'e':
                    return 'You have used ' + this.e + ' and now you have ' + (this.mana - 20) + ' mana';
                case 'r':
                    return 'You have used ' + this.r + ' and now you have ' + (this.mana - 50) + ' mana';
                default:
                    return 'You have: ' + this.mana + ' mana';
            }
       } else 
            return 'Not enough mana :('
    },
}
//Atributos
console.log(swain.name);
console.log(swain.q);
console.log(swain.health);
console.log(swain.mana);
console.log(swain);
//Metodos simples
console.log(swain.fullName());
console.log(swain.champInfo());
//Metodos complejos
console.log(swain.dmgInjured(12));
console.log(swain.spellUsed('r'));

//Another form for add an Object
let garen = new Object();
garen.name = 'Garen';
garen.country = 'Demacy';
garen.health = 500;
garen.energy = 0;

console.log(garen);
console.log(garen.name);
console.log(garen['name']);

//for in - sirve para recorrer todas las propiedades de nuestro objeto

for (property in swain) {
    console.log(property);
    console.log(swain[property]);
}

//Para agregar propiedad de un objeto
garen.r = 'divine death'; //Nombre nueva propiedad
console.log(garen);

//Para editar una propiedad
swain.name = 'Swain Dragon Lord'; //propiedad existente
console.log(swain);

//Para eliminar una propiedad
delete garen.energy;
console.log(garen);

//Para imprimir objetos 
//Concatenar cada valor de cada propiedad
console.log( swain.name + ', ' + swain.mana + ', ' + swain.lastname);

//Imprimir con for in
for(property in swain){
    console.log(swain, swain[property])
}