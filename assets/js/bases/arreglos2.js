let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
} )

let nuevaLongitud = juegos.push('f-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

let pos =  1;

console.log({juegos});
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroindIndex =  juegos.indexOf('Fire Emblem');
console.log({metroindIndex});