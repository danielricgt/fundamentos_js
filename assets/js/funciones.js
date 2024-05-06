// lAS FUNCIONES TRADICIONALES CUANDO SE EJECUTAN TIENE UN OBJETO IMPLICITO LLAMAOD ARGUMENTS
function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
  return [10, 12];
}

const saludar2 = function (nombre) {
  console.log("hola mundo " + nombre);
};

//  las fuciones de flecha tambien son llamadas lambda funcionts
const saludarFecha = () => {
  console.log("Hola mundo");
};

const saludarFelcha = (nombre) => {
  console.log("Hola " + nombre);
};

// saludar("Daniel", 40, true, "costa Rica");
// saludar2("Ricardo");
// saludarFelcha("Mohamed");
//saludarFecha();
const retornoDeSaludar = saludar("Daniel", 40, true, "costa Rica"); // 1
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 2));
const sumarFlecha = (a, b) => {
  return a + b;
};
const sumarFlecha1 = (a, b) => a + b;
function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumarFlecha(1, 2));
console.log(getAleatorio());
console.log(getAleatorio2());