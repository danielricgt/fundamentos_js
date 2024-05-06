let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark II", "Hulkbuster"],
  direccion: {
    zip: "100880, 90265",
    ubicacion: "Malibu, CA"
  },
  ultimaPelicula: 'Infinity War'
};
console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("nombre", personaje["nombre"]);
console.log(personaje.edad);
console.log("Coords", personaje.coords.lat);
console.log("numero de trajes:", personaje.suits.length);
console.log("ultimo traje:", personaje.suits[personaje.suits.length - 1]);

const x = 'vivo';
console.log('vivo',personaje[x])

// mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entiresPares = Object.entries(personaje);
console.log(entiresPares);

Object.freeze(personaje);

personaje.dinero = 100000000;
console.log(personaje);
personaje.direccion.ubicacion = 'Bogota, Colombia';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});


