let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };

ana.nombre = "ana";

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "Tomy";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);
console.log(peter, tony);

// Arreglos
console.time('spread');
const frutas = ['Manzana','Pera','Pina'];
const otrasFrutas =  [...frutas];
console.timeEnd('spread');
// Mismo efecto: 
console.time('slice'); 
const otrasFrutas2 =  frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas})