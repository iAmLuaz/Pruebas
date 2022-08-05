//Funcion Constructor
function Campeon (name, country, health, mana, energy, q, w, e, r) {
    this.name = name;
    this.country = country;
    this.health = health;
    this.mana = mana;
    this.energy = energy;
    this.q = q;
    this.w = w;
    this.e = e;
    this.r = r;
}
let swain = new Campeon('Swain', 'Noxus', '350', '250', null, 'Deaths Hand', 'Vision of Empire', 'Nevermore', 'Demonic Ascension');
console.log(swain);
let lux = new Campeon('Lux', 'Demacy', '298', '290', null, 'Divine trap', 'Shield', 'A placid place', 'Little Spark');
console.log(lux);
let zed = new Campeon('Zed', 'Jonya', '348', null, '200', 'Shuriken', 'Living Shadow', 'Death Rotation', 'The Mark');
console.log(zed);

//Modificar un objeto creado por un constructor
swain.name = 'Swain Dragon Lord';

console.log(swain);//This suffered a change
console.log(lux);//This doesn't suffered a change
console.log(zed);//This doesn't suffered a change


