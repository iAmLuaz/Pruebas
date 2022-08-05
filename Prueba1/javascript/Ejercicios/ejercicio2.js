let hour = 2;
let time;

if (hour >= 6 && hour <= 11) {
    console.log('Good morning, its', hour, ':00!');
} else if (hour >= 12 && hour <=18) { 
    console.log('Good afternoon, its', hour, ':00!');
} else if (hour >= 19 && hour <=24) { 
    console.log('Good night, its', hour, ':00!');
} else if (hour >= 1 && hour <=5) { 
    console.log('ZzzZzzz, its', hour, ':00!')
}