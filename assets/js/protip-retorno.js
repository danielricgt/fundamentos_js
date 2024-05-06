function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona2("Daniel", "Galvan");
console.log(persona);

function imprimeArgumentos() {
  console.log({ arguments });
}

const imprimerArgumentos2 = (edad, ...args) => {
  // console.log({edad,args});
  return args;
};

const [casado, vivo, nombre, saludo] = imprimerArgumentos2(
  "Daniel",
  true,
  "daniel ",
  [1, 2, 3, 4],
  "hola"
);
console.log({ casado, vivo, nombre, saludo });
const {apellido: nuevoApellido} = crearPersona('jorge', 'rojas');
console.log({nuevoApellido});

let tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    // edad: 40,
    suits: ["Mark I", "Mark II", "Hulkbuster"],

  };

//   const imprimepropiedades = (personaje) => {
//     console.log("nombre",personaje.nombre);
//     console.log("codeName",personaje.codeName);
//     console.log("vivo",personaje.vivo);
//     console.log("edad",personaje.edad);
//     console.log("suits",personaje.suits);
// }

const imprimepropiedades = ({nombre, codeName, vivo, edad=15, suits}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({suits});
}

imprimepropiedades(tony);